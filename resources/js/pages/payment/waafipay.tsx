import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import LandingLayout from '@/layouts/landing-layout';
import { SharedData } from '@/types/global';
import { router, useForm, usePage } from '@inertiajs/react';
import axios from 'axios';
import { CheckCircle, Clock, Loader2, Phone, ShieldCheck, XCircle } from 'lucide-react';
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';

interface WaafiPayPageProps extends SharedData {
   course: Course;
   price: number;
   wallets: { id: string; name: string; logo: string }[];
   pendingTransaction: { reference_id: string; status: string } | null;
}

type PaymentStatus = 'idle' | 'submitting' | 'processing' | 'success' | 'failed';

const WaafiPayPage = () => {
   const { course, price, wallets, pendingTransaction, flash } = usePage<WaafiPayPageProps & { flash: Record<string, string> }>().props;

   const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>(
      pendingTransaction ? 'processing' : 'idle',
   );
   const [statusMessage, setStatusMessage] = useState('');
   const [referenceId, setReferenceId] = useState(pendingTransaction?.reference_id || '');
   const pollingRef = useRef<NodeJS.Timeout | null>(null);
   const pollCountRef = useRef(0);

   const { data, setData, post, processing, errors } = useForm({
      course_id: course.id,
      phone_number: '',
   });

   const stopPolling = useCallback(() => {
      if (pollingRef.current) {
         clearInterval(pollingRef.current);
         pollingRef.current = null;
      }
      pollCountRef.current = 0;
   }, []);

   const pollStatus = useCallback(
      (refId: string) => {
         stopPolling();
         pollCountRef.current = 0;

         pollingRef.current = setInterval(async () => {
            pollCountRef.current += 1;

            // Stop polling after 60 attempts (2 minutes at 2s intervals)
            if (pollCountRef.current > 60) {
               stopPolling();
               setPaymentStatus('failed');
               setStatusMessage('Payment verification timed out. Please check your transaction history.');
               return;
            }

            try {
               const response = await axios.post(route('waafipay.check-status'), {
                  reference_id: refId,
               });

               const result = response.data;

               if (result.status === 'success') {
                  stopPolling();
                  setPaymentStatus('success');
                  setStatusMessage('Payment successful! Redirecting to your course...');

                  setTimeout(() => {
                     if (result.redirect) {
                        window.location.href = result.redirect;
                     }
                  }, 2000);
               } else if (result.status === 'failed') {
                  stopPolling();
                  setPaymentStatus('failed');
                  setStatusMessage(result.message || 'Payment failed. Please try again.');
               }
            } catch {
               // Continue polling on network errors
            }
         }, 2000);
      },
      [stopPolling],
   );

   // Start polling if there's a pending transaction
   useEffect(() => {
      if (pendingTransaction?.reference_id) {
         setReferenceId(pendingTransaction.reference_id);
         setPaymentStatus('processing');
         setStatusMessage('Waiting for payment approval on your phone...');
         pollStatus(pendingTransaction.reference_id);
      }

      return () => stopPolling();
   }, [pendingTransaction, pollStatus, stopPolling]);

   // Handle flash messages from server redirect
   useEffect(() => {
      if (flash?.reference_id) {
         setReferenceId(flash.reference_id as string);
         setPaymentStatus('processing');
         setStatusMessage('Payment request sent! Please approve on your phone...');
         pollStatus(flash.reference_id as string);
      }
      if (flash?.error) {
         setPaymentStatus('failed');
         setStatusMessage(flash.error);
      }
   }, [flash, pollStatus]);

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (paymentStatus === 'submitting' || paymentStatus === 'processing') return;

      setPaymentStatus('submitting');
      setStatusMessage('Sending payment request...');

      post(route('waafipay.initiate'), {
         preserveScroll: true,
         onError: () => {
            setPaymentStatus('failed');
            setStatusMessage('Failed to initiate payment. Please try again.');
         },
      });
   };

   const handleRetry = () => {
      stopPolling();
      setPaymentStatus('idle');
      setStatusMessage('');
      setReferenceId('');
   };

   return (
      <div className="container mx-auto max-w-4xl py-8">
         <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            {/* Payment Form */}
            <div className="lg:col-span-3">
               <Card>
                  <CardContent className="p-6">
                     <div className="mb-6">
                        <h1 className="text-2xl font-bold">Pay with WaafiPay</h1>
                        <p className="text-muted-foreground mt-1">Enter your mobile money number to complete payment</p>
                     </div>

                     {/* Wallet Providers */}
                     <div className="mb-6">
                        <Label className="mb-3 block text-sm font-medium">Supported Mobile Wallets</Label>
                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                           {wallets.map((wallet) => (
                              <div key={wallet.id} className="flex flex-col items-center gap-1.5 rounded-lg border p-3">
                                 <img src={wallet.logo} alt={wallet.name} className="h-8 w-8 object-contain" />
                                 <span className="text-xs font-medium">{wallet.name}</span>
                              </div>
                           ))}
                        </div>
                     </div>

                     {/* Payment Form */}
                     <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                           <Label htmlFor="phone" className="mb-1.5 block">
                              Phone Number
                           </Label>
                           <div className="flex">
                              <span className="inline-flex items-center rounded-l-lg border border-r-0 bg-muted px-3 text-sm font-medium">
                                 <Phone className="mr-1.5 h-4 w-4" />
                                 +252
                              </span>
                              <Input
                                 id="phone"
                                 value={data.phone_number}
                                 onChange={(e) => setData('phone_number', e.target.value.replace(/\D/g, '').slice(0, 9))}
                                 placeholder="61XXXXXXX"
                                 className="rounded-l-none"
                                 maxLength={9}
                                 disabled={paymentStatus === 'processing' || paymentStatus === 'submitting'}
                              />
                           </div>
                           {errors.phone_number && <p className="mt-1 text-sm text-red-500">{errors.phone_number}</p>}
                           <p className="text-muted-foreground mt-1 text-xs">Enter your 9-digit Somali phone number</p>
                        </div>

                        {/* Status Messages */}
                        {paymentStatus === 'processing' && (
                           <div className="flex items-start gap-3 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
                              <Loader2 className="mt-0.5 h-5 w-5 animate-spin text-blue-600" />
                              <div>
                                 <p className="font-medium text-blue-800 dark:text-blue-200">Waiting for approval</p>
                                 <p className="text-sm text-blue-600 dark:text-blue-400">
                                    {statusMessage || 'Please approve the payment on your phone...'}
                                 </p>
                                 {referenceId && (
                                    <p className="mt-1 text-xs text-blue-500">Ref: {referenceId}</p>
                                 )}
                              </div>
                           </div>
                        )}

                        {paymentStatus === 'success' && (
                           <div className="flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
                              <CheckCircle className="mt-0.5 h-5 w-5 text-green-600" />
                              <div>
                                 <p className="font-medium text-green-800 dark:text-green-200">Payment Successful!</p>
                                 <p className="text-sm text-green-600 dark:text-green-400">{statusMessage}</p>
                              </div>
                           </div>
                        )}

                        {paymentStatus === 'failed' && (
                           <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
                              <XCircle className="mt-0.5 h-5 w-5 text-red-600" />
                              <div>
                                 <p className="font-medium text-red-800 dark:text-red-200">Payment Failed</p>
                                 <p className="text-sm text-red-600 dark:text-red-400">{statusMessage}</p>
                              </div>
                           </div>
                        )}

                        {/* Action Buttons */}
                        {(paymentStatus === 'idle' || paymentStatus === 'submitting') && (
                           <Button
                              type="submit"
                              className="w-full"
                              size="lg"
                              disabled={!data.phone_number || data.phone_number.length < 9 || paymentStatus === 'submitting'}
                           >
                              {paymentStatus === 'submitting' ? (
                                 <span className="flex items-center gap-2">
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                    Sending payment request...
                                 </span>
                              ) : (
                                 `Pay $${Number(price).toFixed(2)}`
                              )}
                           </Button>
                        )}

                        {paymentStatus === 'failed' && (
                           <Button type="button" className="w-full" size="lg" onClick={handleRetry} variant="outline">
                              Try Again
                           </Button>
                        )}

                        {paymentStatus === 'processing' && (
                           <Button type="button" className="w-full" size="lg" variant="outline" onClick={handleRetry}>
                              <Clock className="mr-2 h-4 w-4" />
                              Cancel & Retry
                           </Button>
                        )}
                     </form>

                     {/* Security Note */}
                     <div className="mt-6 flex items-center gap-2 border-t pt-4">
                        <ShieldCheck className="h-4 w-4 text-green-600" />
                        <p className="text-muted-foreground text-xs">Your payment is processed securely via WaafiPay</p>
                     </div>
                  </CardContent>
               </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-2">
               <Card className="sticky top-24">
                  <CardContent className="p-6">
                     <h2 className="mb-4 text-lg font-semibold">Order Summary</h2>

                     <div className="space-y-4">
                        <div className="flex gap-3">
                           <img
                              src={course.thumbnail ?? '/assets/images/blank-image.jpg'}
                              alt={course.title}
                              className="h-16 w-24 rounded-lg object-cover"
                           />
                           <div className="flex-1">
                              <h3 className="line-clamp-2 text-sm font-medium">{course.title}</h3>
                              <p className="text-muted-foreground text-xs capitalize">{course.level}</p>
                           </div>
                        </div>

                        <div className="border-t pt-4">
                           <div className="flex justify-between">
                              <span className="text-muted-foreground">Price</span>
                              <span>
                                 {course.discount ? (
                                    <>
                                       <span className="text-muted-foreground mr-1 text-sm line-through">${Number(course.price).toFixed(2)}</span>
                                       <span className="font-semibold">${Number(course.discount_price).toFixed(2)}</span>
                                    </>
                                 ) : (
                                    <span className="font-semibold">${Number(course.price).toFixed(2)}</span>
                                 )}
                              </span>
                           </div>
                        </div>

                        <div className="border-t pt-4">
                           <div className="flex justify-between text-lg font-bold">
                              <span>Total</span>
                              <span>${Number(price).toFixed(2)}</span>
                           </div>
                        </div>
                     </div>
                  </CardContent>
               </Card>
            </div>
         </div>
      </div>
   );
};

WaafiPayPage.layout = (page: ReactNode) => <LandingLayout children={page} customizable={false} />;

export default WaafiPayPage;
