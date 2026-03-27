import { Button } from '@/components/ui/button';
import AuthLayout from '@/layouts/auth-layout';
import { Head, Link } from '@inertiajs/react';
import { CheckCircle2 } from 'lucide-react';

interface Props {
   title: string;
   description: string;
}

export default function VerifyEmailSuccess({ title, description }: Props) {
   return (
      <AuthLayout title={title} description={description}>
         <Head title={title} />

         <div className="space-y-6 text-center">
            <div className="flex justify-center">
               <CheckCircle2 className="h-16 w-16 text-green-600" />
            </div>

            <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-700">
               Verification completed. You can now go back to the mobile app manually.
            </div>

            <div className="space-y-3">
               <p className="text-muted-foreground text-sm">If you want, you can also sign in from the browser.</p>

               <Link href={route('login')}>
                  <Button className="w-full">Open Login</Button>
               </Link>
            </div>
         </div>
      </AuthLayout>
   );
}
