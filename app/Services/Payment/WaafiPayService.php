<?php

namespace App\Services\Payment;

use App\Models\PaymentTransaction;
use App\Models\Setting;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class WaafiPayService
{
    private bool $isEnabled;
    private array $config;
    private string $apiUrl;

    /**
     * Wallet type mappings based on phone prefixes.
     */
    private const WALLET_PREFIXES = [
        '61' => 'EVC Plus',    // Hormuud
        '62' => 'EVC Plus',    // Hormuud
        '63' => 'Zaad',        // Telesom
        '65' => 'Jeeb',        // Golis
        '68' => 'Sahal',       // Somtel
        '71' => 'Zaad',        // Telesom
        '90' => 'EVC Plus',    // Hormuud
    ];

    /**
     * Error code mappings (English & Somali).
     */
    private const ERROR_MESSAGES = [
        '5102' => [
            'en' => 'Insufficient balance',
            'so' => 'Haraaga xisaabtaadu kuguma filna.',
        ],
        '5103' => [
            'en' => 'Invalid account',
            'so' => 'Akoonku waa mid aan sax ahayn.',
        ],
        '5104' => [
            'en' => 'Account not found',
            'so' => 'Akoonka lama helin.',
        ],
        '5310' => [
            'en' => 'Transaction rejected',
            'so' => 'Lacag bixintii waa la diiday.',
        ],
        '5311' => [
            'en' => 'Transaction cancelled by user',
            'so' => 'Lacag bixintii isticmaaluhu wuu joojiyay.',
        ],
        '5312' => [
            'en' => 'Transaction timeout',
            'so' => 'Waqtiga lacag bixintu waa dhamaaday.',
        ],
        '5001' => [
            'en' => 'Invalid request',
            'so' => 'Codsiga waa mid aan sax ahayn.',
        ],
        '5002' => [
            'en' => 'Authentication failed',
            'so' => 'Aqoonsiga waa la waayay.',
        ],
    ];

    public function __construct()
    {
        $this->loadConfig();
    }

    /**
     * Load WaafiPay configuration from settings.
     */
    private function loadConfig(): void
    {
        $setting = Setting::where('type', 'payment')
            ->where('sub_type', 'waafipay')
            ->first();

        $fields = $setting?->fields ?? [];

        $this->isEnabled = $fields['active'] ?? false;
        $this->config = [
            'merchant_uid' => $fields['merchant_uid'] ?? '',
            'api_user_id' => $fields['api_user_id'] ?? '',
            'api_key' => $fields['api_key'] ?? '',
            'merchant_no' => $fields['merchant_no'] ?? '',
            'test_mode' => $fields['test_mode'] ?? false,
        ];
        $this->apiUrl = $fields['api_url'] ?? 'https://api.waafipay.net/asm';
    }

    /**
     * Check if WaafiPay is properly configured.
     */
    public function isConfigured(): bool
    {
        return $this->isEnabled &&
            !empty($this->config['merchant_uid']) &&
            !empty($this->config['api_user_id']) &&
            !empty($this->config['api_key']) &&
            !empty($this->config['merchant_no']);
    }

    /**
     * Check if WaafiPay is enabled.
     */
    public function isEnabled(): bool
    {
        return $this->isEnabled;
    }

    /**
     * Format phone number to WaafiPay format (252XXXXXXXXX).
     */
    public function formatPhoneNumber(string $phone): string
    {
        // Remove all non-numeric characters
        $phone = preg_replace('/[^0-9]/', '', $phone);

        // Remove leading zeros
        $phone = ltrim($phone, '0');

        // If starts with 252, return as is
        if (str_starts_with($phone, '252')) {
            return $phone;
        }

        // Add 252 prefix
        return '252' . $phone;
    }

    /**
     * Detect wallet type from phone number.
     */
    public function detectWalletType(string $phone): string
    {
        $formatted = $this->formatPhoneNumber($phone);
        $prefix = substr($formatted, 3, 2); // Get 2 digits after 252

        return self::WALLET_PREFIXES[$prefix] ?? 'EVC Plus';
    }

    /**
     * Get error message with translation.
     */
    public function getErrorMessage(string $code, string $lang = 'so'): string
    {
        return self::ERROR_MESSAGES[$code][$lang] ?? self::ERROR_MESSAGES[$code]['en'] ?? 'Unknown error';
    }

    /**
     * Initiate a payment transaction.
     */
    public function purchase(array $params): array
    {
        if (!$this->isConfigured()) {
            return [
                'success' => false,
                'message' => 'Payment gateway is not configured. Please contact support.',
                'error_code' => 'NOT_CONFIGURED',
            ];
        }

        // Generate reference ID
        $referenceId = PaymentTransaction::generateReferenceId();

        // Format phone number
        $phoneNumber = $this->formatPhoneNumber($params['phone_number']);

        // Detect wallet type if not provided
        $walletType = $params['wallet_type'] ?? $this->detectWalletType($params['phone_number']);

        // Create transaction record
        $transaction = PaymentTransaction::create([
            'user_id' => $params['customer_id'] ?? null,
            'course_id' => $params['course_id'] ?? null,
            'reference_id' => $referenceId,
            'invoice_id' => $params['invoice_id'] ?? null,
            'phone_number' => $phoneNumber,
            'amount' => $params['amount'],
            'currency' => $params['currency'] ?? 'USD',
            'wallet_type' => $walletType,
            'customer_name' => $params['customer_name'] ?? null,
            'description' => $params['description'] ?? null,
            'channel' => $params['channel'] ?? 'WEB',
            'environment' => $this->config['test_mode'] ? 'TEST' : 'LIVE',
            'status' => 'pending',
            'initiated_at' => now(),
            'ip_address' => request()->ip(),
            'user_agent' => request()->userAgent(),
        ]);

        // Build WaafiPay request payload - ensure all values are properly cast to strings
        $payload = [
            'schemaVersion' => '1.0',
            'requestId' => (string) $referenceId,
            'timestamp' => (string) time(),
            'channelName' => 'WEB',
            'serviceName' => 'API_PURCHASE',
            'serviceParams' => [
                'merchantUid' => (string) $this->config['merchant_uid'],
                'apiUserId' => (string) $this->config['api_user_id'],
                'apiKey' => (string) $this->config['api_key'],
                'paymentMethod' => 'MWALLET_ACCOUNT',
                'payerInfo' => [
                    'accountNo' => (string) $phoneNumber,
                ],
                'transactionInfo' => [
                    'referenceId' => (string) $referenceId,
                    'invoiceId' => (string) ($params['invoice_id'] ?? $referenceId),
                    'amount' => (string) number_format($params['amount'], 2, '.', ''),
                    'currency' => (string) ($params['currency'] ?? 'USD'),
                    'description' => (string) ($params['description'] ?? 'Payment'),
                    'merchantNo' => (string) $this->config['merchant_no'],
                ],
            ],
        ];

        // Store request payload plus internal checkout metadata when provided.
        $transaction->update([
            'request_payload' => [
                'waafipay' => $payload,
                'meta' => $params['metadata'] ?? null,
            ],
        ]);

        try {
            // Make API request
            $response = Http::timeout(60)
                ->post($this->apiUrl, $payload)
                ->json();

            Log::info('WaafiPay Response', ['reference_id' => $referenceId, 'response' => $response]);

            $responseCode = $response['responseCode'] ?? null;

            // Handle response
            if ($responseCode === '2001') {
                // Immediate success
                $transaction->markAsSuccess($response);

                return [
                    'success' => true,
                    'status' => 'success',
                    'message' => '✅ Payment completed successfully!',
                    'transaction_id' => $transaction->id,
                    'reference_id' => $referenceId,
                    'waafi_transaction_id' => $response['params']['transactionId'] ?? null,
                    'data' => $response,
                ];
            } elseif ($responseCode === '2002') {
                // Pending - waiting for customer approval
                $transaction->markAsProcessing($response);

                return [
                    'success' => true,
                    'status' => 'processing',
                    'message' => '📱 Payment request sent. Waiting for customer approval...',
                    'transaction_id' => $transaction->id,
                    'reference_id' => $referenceId,
                    'data' => $response,
                ];
            } else {
                // Failed
                $errorMessage = $this->getErrorMessage($responseCode, 'so');
                $transaction->markAsFailed($errorMessage, $response);

                return [
                    'success' => false,
                    'status' => 'failed',
                    'message' => '💰 ' . $errorMessage,
                    'error_code' => $responseCode,
                    'waafipay_message' => $response['responseMsg'] ?? 'Unknown error',
                    'transaction_id' => $transaction->id,
                    'reference_id' => $referenceId,
                ];
            }
        } catch (\Exception $e) {
            Log::error('WaafiPay Error', [
                'reference_id' => $referenceId,
                'error' => $e->getMessage(),
            ]);

            $transaction->markAsFailed($e->getMessage());

            return [
                'success' => false,
                'status' => 'failed',
                'message' => 'Payment gateway connection failed. Please try again.',
                'error_code' => 'CONNECTION_ERROR',
                'transaction_id' => $transaction->id,
                'reference_id' => $referenceId,
            ];
        }
    }

    /**
     * Check payment status by reference ID.
     */
    public function checkStatus(string $referenceId): array
    {
        $transaction = PaymentTransaction::where('reference_id', $referenceId)->first();

        if (!$transaction) {
            return [
                'success' => false,
                'message' => 'Transaction not found',
            ];
        }

        return [
            'success' => true,
            'status' => $transaction->status,
            'amount' => $transaction->amount,
            'phone_number' => $transaction->phone_number,
            'transaction' => [
                'id' => $transaction->id,
                'reference_id' => $transaction->reference_id,
                'waafi_transaction_id' => $transaction->waafi_transaction_id,
                'status' => $transaction->status,
                'amount' => $transaction->amount,
                'currency' => $transaction->currency,
                'wallet_type' => $transaction->wallet_type,
                'phone_number' => $transaction->phone_number,
                'customer_name' => $transaction->customer_name,
                'description' => $transaction->description,
                'created_at' => $transaction->created_at,
                'completed_at' => $transaction->completed_at,
            ],
        ];
    }

    /**
     * Handle webhook callback from WaafiPay.
     */
    public function handleWebhook(array $data): array
    {
        $referenceId = $data['referenceId'] ?? null;

        if (!$referenceId) {
            return [
                'success' => false,
                'message' => 'Missing reference ID',
            ];
        }

        $transaction = PaymentTransaction::where('reference_id', $referenceId)->first();

        if (!$transaction) {
            return [
                'success' => false,
                'message' => 'Transaction not found',
            ];
        }

        $responseCode = $data['responseCode'] ?? null;
        $state = $data['state'] ?? null;

        if ($responseCode === '2001' || $state === 'APPROVED') {
            $transaction->markAsSuccess($data);

            return [
                'success' => true,
                'message' => 'Payment confirmed',
                'reference_id' => $referenceId,
            ];
        } else {
            $errorMessage = $this->getErrorMessage($responseCode, 'en');
            $transaction->markAsFailed($errorMessage, $data);

            return [
                'success' => false,
                'message' => 'Payment failed',
                'reference_id' => $referenceId,
            ];
        }
    }

    /**
     * Test API connection.
     */
    public function testConnection(): array
    {
        if (!$this->isConfigured()) {
            return [
                'success' => false,
                'message' => 'WaafiPay is not properly configured. Please check your credentials.',
            ];
        }

        return [
            'success' => true,
            'message' => 'WaafiPay credentials are configured. Ready to process payments.',
            'config' => [
                'merchant_uid' => substr($this->config['merchant_uid'], 0, 4) . '****',
                'api_url' => $this->apiUrl,
                'environment' => $this->config['test_mode'] ? 'TEST' : 'LIVE',
            ],
        ];
    }

    /**
     * Get available wallet types/payment methods.
     */
    public function getPaymentMethods(): array
    {
        $baseUrl = config('app.url') . '/images/providers-telecome';

        return [
            [
                'id' => 'evc_plus',
                'name' => 'EVC Plus',
                'logo' => $baseUrl . '/evcplus.png',
            ],
            [
                'id' => 'zaad',
                'name' => 'Zaad Service',
                'logo' => $baseUrl . '/Zaad.png',
            ],
            [
                'id' => 'jeeb',
                'name' => 'Jeeb',
                'logo' => $baseUrl . '/jeeb.png',
            ],
            [
                'id' => 'sahal',
                'name' => 'Sahal',
                'logo' => $baseUrl . '/Sahal.png',
            ],
        ];
    }
}
