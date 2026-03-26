<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class PaymentTransaction extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'course_id',
        'reference_id',
        'invoice_id',
        'waafi_transaction_id',
        'payment_method',
        'wallet_type',
        'phone_number',
        'customer_name',
        'amount',
        'currency',
        'description',
        'status',
        'status_code',
        'status_message',
        'request_payload',
        'response_payload',
        'error_message',
        'channel',
        'environment',
        'ip_address',
        'user_agent',
        'initiated_at',
        'completed_at',
        'failed_at',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'amount' => 'decimal:2',
        'request_payload' => 'array',
        'response_payload' => 'array',
        'initiated_at' => 'datetime',
        'completed_at' => 'datetime',
        'failed_at' => 'datetime',
    ];

    /**
     * Get the user that owns the transaction.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the course associated with the transaction.
     */
    public function course(): BelongsTo
    {
        return $this->belongsTo(\App\Models\Course\Course::class);
    }

    /**
     * Mark transaction as successful.
     */
    public function markAsSuccess(array $response = []): bool
    {
        return $this->update([
            'status' => 'success',
            'completed_at' => now(),
            'response_payload' => $response,
            'waafi_transaction_id' => $response['params']['transactionId'] ?? $this->waafi_transaction_id,
            'status_code' => $response['responseCode'] ?? null,
            'status_message' => $response['responseMsg'] ?? 'Transaction successful',
        ]);
    }

    /**
     * Mark transaction as failed.
     */
    public function markAsFailed(string $error, array $response = []): bool
    {
        return $this->update([
            'status' => 'failed',
            'failed_at' => now(),
            'error_message' => $error,
            'response_payload' => $response,
            'status_code' => $response['responseCode'] ?? null,
            'status_message' => $response['responseMsg'] ?? $error,
        ]);
    }

    /**
     * Mark transaction as processing.
     */
    public function markAsProcessing(array $response = []): bool
    {
        return $this->update([
            'status' => 'processing',
            'response_payload' => $response,
            'waafi_transaction_id' => $response['params']['transactionId'] ?? null,
            'status_code' => $response['responseCode'] ?? null,
            'status_message' => $response['responseMsg'] ?? 'Processing',
        ]);
    }

    /**
     * Scope a query to only include successful transactions.
     */
    public function scopeSuccessful($query)
    {
        return $query->where('status', 'success');
    }

    /**
     * Scope a query to only include pending transactions.
     */
    public function scopePending($query)
    {
        return $query->where('status', 'pending');
    }

    /**
     * Scope a query to only include failed transactions.
     */
    public function scopeFailed($query)
    {
        return $query->where('status', 'failed');
    }

    /**
     * Scope a query to only include processing transactions.
     */
    public function scopeProcessing($query)
    {
        return $query->where('status', 'processing');
    }

    /**
     * Generate a unique reference ID.
     */
    public static function generateReferenceId(): string
    {
        return 'TXN-' . date('YmdHis') . '-' . substr(str_shuffle('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'), 0, 6);
    }
}
