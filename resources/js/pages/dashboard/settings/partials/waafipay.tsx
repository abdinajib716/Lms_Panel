import InputError from '@/components/input-error';
import LoadingButton from '@/components/loading-button';
import Switch from '@/components/switch';
import {
   AlertDialog,
   AlertDialogAction,
   AlertDialogCancel,
   AlertDialogContent,
   AlertDialogDescription,
   AlertDialogFooter,
   AlertDialogHeader,
   AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { onHandleChange } from '@/lib/inertia';
import { SharedData } from '@/types/global';
import { useForm, usePage } from '@inertiajs/react';
import axios from 'axios';
import { useState } from 'react';

interface WaafiPayProps {
   payment: Settings<WaafiPayFields>;
}

const WaafiPay = ({ payment }: WaafiPayProps) => {
   const { props } = usePage<SharedData>();
   const { translate } = props;
   const { settings, input, button, common } = translate;

   const { data, setData, post, errors, processing } = useForm({
      ...(payment.fields as WaafiPayFields),
      type: 'waafipay',
   });

   const [testPhone, setTestPhone] = useState('');
   const [testAmount, setTestAmount] = useState('0.50');
   const [testLoading, setTestLoading] = useState(false);
   const [testResult, setTestResult] = useState<{ success: boolean; message: string } | null>(null);
   const [showConfirmDialog, setShowConfirmDialog] = useState(false);
   const [showResultDialog, setShowResultDialog] = useState(false);

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      post(route('settings.payment.update', { id: payment.id }));
   };

   const validateTestInputs = (): boolean => {
      if (!testPhone || testPhone.length !== 9) {
         setTestResult({ success: false, message: 'Please enter a valid 9-digit phone number' });
         setShowResultDialog(true);
         return false;
      }

      if (!testAmount || parseFloat(testAmount) < 0.10) {
         setTestResult({ success: false, message: 'Amount must be at least $0.10' });
         setShowResultDialog(true);
         return false;
      }

      return true;
   };

   const handleTestPaymentClick = () => {
      if (validateTestInputs()) {
         setShowConfirmDialog(true);
      }
   };

   const handleConfirmTestPayment = async () => {
      setShowConfirmDialog(false);
      setTestLoading(true);
      setTestResult(null);

      try {
         const response = await axios.post('/api/v1/payment/initiate', {
            phone_number: testPhone,
            amount: parseFloat(testAmount),
            description: 'WaafiPay Integration Test Payment - ' + new Date().toISOString(),
         });

         const result = response.data;
         setTestResult({
            success: result.success,
            message: result.message + (result.reference_id ? '\n\nReference: ' + result.reference_id : ''),
         });
      } catch (error: any) {
         const errorMsg = error.response?.data?.message || 'Failed to send test payment. Please try again.';
         setTestResult({ success: false, message: errorMsg });
      } finally {
         setTestLoading(false);
         setShowResultDialog(true);
      }
   };

   const handleTestConnection = async () => {
      setTestLoading(true);
      setTestResult(null);

      try {
         const response = await axios.get('/api/v1/payment/methods');
         const result = response.data;

         if (result.success) {
            setTestResult({ success: true, message: 'WaafiPay is configured and ready to accept payments!' });
         } else {
            setTestResult({ success: false, message: result.message || 'WaafiPay is not properly configured.' });
         }
      } catch (error: any) {
         const errorMsg = error.response?.data?.message || 'Failed to connect to WaafiPay. Please check your credentials.';
         setTestResult({ success: false, message: errorMsg });
      } finally {
         setTestLoading(false);
         setShowResultDialog(true);
      }
   };

   return (
      <Card className="p-4 sm:p-6">
         <div className="mb-6 flex items-center justify-between">
            <div>
               <h2 className="text-xl font-semibold">WaafiPay Settings</h2>
               <p className="text-gray-500">{settings.configure_payment_gateway.replace(':gateway', 'WaafiPay')}</p>
            </div>

            <div className="flex items-center space-x-2">
               <Label htmlFor="status">{data.active ? common.enabled : common.disabled}</Label>
               <Switch id="status" checked={data.active} onCheckedChange={(checked) => setData('active', checked)} />
            </div>
         </div>

         <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
               <div>
                  <Label>{input.currency}</Label>
                  <Input name="currency" value={data.currency || 'USD'} onChange={(e) => onHandleChange(e, setData)} placeholder="USD" />
                  <InputError message={errors.currency} />
               </div>

               <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">{settings.test_mode}:</span>
                  <Switch id="test_mode" checked={data.test_mode} onCheckedChange={(checked) => setData('test_mode', checked)} />
                  <Label htmlFor="test_mode" className="text-gray-500">
                     {data.test_mode ? 'Test Environment' : 'Live Environment'}
                  </Label>
               </div>
            </div>

            {/* API Credentials Section */}
            <div className="border-b pb-6">
               <h3 className="mb-4 text-lg font-medium">API Credentials</h3>
               <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                     <Label>Merchant UID</Label>
                     <Input
                        name="merchant_uid"
                        value={data.merchant_uid || ''}
                        onChange={(e) => onHandleChange(e, setData)}
                        placeholder="M1234567"
                     />
                     <InputError message={errors.merchant_uid} />
                  </div>

                  <div>
                     <Label>API User ID</Label>
                     <Input
                        name="api_user_id"
                        value={data.api_user_id || ''}
                        onChange={(e) => onHandleChange(e, setData)}
                        placeholder="1234567"
                     />
                     <InputError message={errors.api_user_id} />
                  </div>

                  <div>
                     <Label>API Key</Label>
                     <Input
                        name="api_key"
                        value={data.api_key || ''}
                        onChange={(e) => onHandleChange(e, setData)}
                        placeholder="API-xxxxxxxxxxxxx"
                        type="password"
                     />
                     <InputError message={errors.api_key} />
                  </div>

                  <div>
                     <Label>Merchant No</Label>
                     <Input
                        name="merchant_no"
                        value={data.merchant_no || ''}
                        onChange={(e) => onHandleChange(e, setData)}
                        placeholder="123456789"
                     />
                     <InputError message={errors.merchant_no} />
                  </div>

                  <div className="md:col-span-2">
                     <Label>API URL</Label>
                     <Input
                        name="api_url"
                        value={data.api_url || 'https://api.waafipay.net/asm'}
                        onChange={(e) => onHandleChange(e, setData)}
                        placeholder="https://api.waafipay.net/asm"
                     />
                     <InputError message={errors.api_url} />
                     <p className="mt-1 text-xs text-gray-500">Default: https://api.waafipay.net/asm</p>
                  </div>
               </div>
            </div>

            {/* Supported Wallets Info */}
            <div className="border-b pb-6">
               <h3 className="mb-4 text-lg font-medium">Supported Mobile Wallets</h3>
               <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  <div className="flex items-center space-x-2 rounded-lg border p-3">
                     <img src="/images/providers-telecome/evcplus.png" alt="EVC Plus" className="h-8 w-8 object-contain" />
                     <span className="text-sm font-medium">EVC Plus</span>
                  </div>
                  <div className="flex items-center space-x-2 rounded-lg border p-3">
                     <img src="/images/providers-telecome/Zaad.png" alt="Zaad" className="h-8 w-8 object-contain" />
                     <span className="text-sm font-medium">Zaad</span>
                  </div>
                  <div className="flex items-center space-x-2 rounded-lg border p-3">
                     <img src="/images/providers-telecome/jeeb.png" alt="Jeeb" className="h-8 w-8 object-contain" />
                     <span className="text-sm font-medium">Jeeb</span>
                  </div>
                  <div className="flex items-center space-x-2 rounded-lg border p-3">
                     <img src="/images/providers-telecome/Sahal.png" alt="Sahal" className="h-8 w-8 object-contain" />
                     <span className="text-sm font-medium">Sahal</span>
                  </div>
               </div>
            </div>

            {/* Test Payment Section */}
            {data.active && (
               <div className="rounded-lg border border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-5 dark:border-emerald-800 dark:from-emerald-900/20 dark:to-teal-900/20">
                  <div className="mb-4 flex items-center gap-2">
                     <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-800">
                        <span className="text-lg">🧪</span>
                     </div>
                     <div>
                        <h3 className="text-lg font-semibold text-emerald-800 dark:text-emerald-200">Test Payment</h3>
                        <p className="text-xs text-emerald-600 dark:text-emerald-400">Send a real test payment to verify integration</p>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
                     <div className="md:col-span-5">
                        <Label className="mb-1.5 block text-sm font-medium text-emerald-700 dark:text-emerald-300">
                           Phone Number
                        </Label>
                        <div className="flex">
                           <span className="inline-flex items-center rounded-l-lg border border-r-0 border-emerald-300 bg-emerald-100 px-3 text-sm font-medium text-emerald-700 dark:border-emerald-600 dark:bg-emerald-800 dark:text-emerald-300">
                              +252
                           </span>
                           <Input
                              value={testPhone}
                              onChange={(e) => setTestPhone(e.target.value.replace(/\D/g, '').slice(0, 9))}
                              placeholder="619821172"
                              className="rounded-l-none border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500 dark:border-emerald-600"
                              maxLength={9}
                           />
                        </div>
                        <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400">Enter 9 digits (e.g., 619821172)</p>
                     </div>

                     <div className="md:col-span-3">
                        <Label className="mb-1.5 block text-sm font-medium text-emerald-700 dark:text-emerald-300">
                           Amount (USD)
                        </Label>
                        <div className="relative">
                           <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                              $
                           </span>
                           <Input
                              type="number"
                              step="0.01"
                              min="0.10"
                              value={testAmount}
                              onChange={(e) => setTestAmount(e.target.value)}
                              placeholder="0.50"
                              className="border-emerald-300 pl-7 focus:border-emerald-500 focus:ring-emerald-500 dark:border-emerald-600"
                           />
                        </div>
                        <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400">Min: $0.10</p>
                     </div>

                     <div className="flex items-end gap-2 md:col-span-4">
                        <Button
                           type="button"
                           onClick={handleTestPaymentClick}
                           disabled={testLoading || !testPhone}
                           className="flex-1 bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-50"
                        >
                           {testLoading ? (
                              <span className="flex items-center gap-2">
                                 <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                 </svg>
                                 Sending...
                              </span>
                           ) : (
                              '💳 Send Payment'
                           )}
                        </Button>
                        <Button
                           type="button"
                           onClick={handleTestConnection}
                           disabled={testLoading}
                           variant="outline"
                           className="border-emerald-300 text-emerald-700 hover:bg-emerald-100 dark:border-emerald-600 dark:text-emerald-300 dark:hover:bg-emerald-800"
                        >
                           🔗 Test API
                        </Button>
                     </div>
                  </div>
               </div>
            )}

            <LoadingButton loading={processing} type="submit" className="w-full">
               {button.save_changes}
            </LoadingButton>
         </form>

         {/* Confirmation Dialog */}
         <AlertDialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
            <AlertDialogContent className="dark:bg-gray-800">
               <AlertDialogHeader>
                  <AlertDialogTitle className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
                     <span className="text-2xl">⚠️</span>
                     Confirm Test Payment
                  </AlertDialogTitle>
                  <AlertDialogDescription className="space-y-3 text-gray-600 dark:text-gray-300">
                     <p>You are about to send a <strong>real payment request</strong> to:</p>
                     <div className="rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <p className="font-mono text-lg font-semibold text-gray-800 dark:text-gray-200">
                           +252 {testPhone}
                        </p>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                           Amount: <span className="font-semibold text-emerald-600 dark:text-emerald-400">${testAmount} USD</span>
                        </p>
                     </div>
                     <p className="text-sm text-amber-600 dark:text-amber-400">
                        The customer will receive a payment approval request on their phone.
                     </p>
                  </AlertDialogDescription>
               </AlertDialogHeader>
               <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                     onClick={handleConfirmTestPayment}
                     className="bg-emerald-600 text-white hover:bg-emerald-700"
                  >
                     Send Payment
                  </AlertDialogAction>
               </AlertDialogFooter>
            </AlertDialogContent>
         </AlertDialog>

         {/* Result Dialog */}
         <AlertDialog open={showResultDialog} onOpenChange={setShowResultDialog}>
            <AlertDialogContent className="dark:bg-gray-800">
               <AlertDialogHeader>
                  <AlertDialogTitle
                     className={`flex items-center gap-2 ${
                        testResult?.success ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'
                     }`}
                  >
                     <span className="text-2xl">{testResult?.success ? '✅' : '❌'}</span>
                     {testResult?.success ? 'Payment Sent!' : 'Payment Failed'}
                  </AlertDialogTitle>
                  <AlertDialogDescription className="text-gray-600 dark:text-gray-300">
                     <div
                        className={`mt-2 whitespace-pre-line rounded-lg p-3 ${
                           testResult?.success
                              ? 'bg-emerald-50 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200'
                              : 'bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-200'
                        }`}
                     >
                        {testResult?.message}
                     </div>
                  </AlertDialogDescription>
               </AlertDialogHeader>
               <AlertDialogFooter>
                  <AlertDialogAction
                     onClick={() => setShowResultDialog(false)}
                     className={testResult?.success ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-gray-600 hover:bg-gray-700'}
                  >
                     Close
                  </AlertDialogAction>
               </AlertDialogFooter>
            </AlertDialogContent>
         </AlertDialog>
      </Card>
   );
};

export default WaafiPay;
