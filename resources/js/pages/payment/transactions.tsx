import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import LandingLayout from '@/layouts/landing-layout';
import { SharedData } from '@/types/global';
import { Link, usePage } from '@inertiajs/react';
import { CheckCircle, Clock, ExternalLink, Loader2, Phone, XCircle } from 'lucide-react';
import { ReactNode } from 'react';

interface Transaction {
   id: number;
   reference_id: string;
   course_id: number | null;
   phone_number: string;
   amount: string;
   currency: string;
   status: string;
   wallet_type: string | null;
   description: string | null;
   created_at: string;
   completed_at: string | null;
   course: {
      id: number;
      title: string;
      slug: string;
      thumbnail: string | null;
   } | null;
}

interface PaginatedData {
   data: Transaction[];
   current_page: number;
   last_page: number;
   per_page: number;
   total: number;
   links: { url: string | null; label: string; active: boolean }[];
}

interface TransactionsPageProps extends SharedData {
   transactions: PaginatedData;
}

const statusConfig: Record<string, { icon: ReactNode; label: string; variant: 'default' | 'secondary' | 'destructive' | 'outline' }> = {
   success: { icon: <CheckCircle className="h-3.5 w-3.5" />, label: 'Success', variant: 'default' },
   pending: { icon: <Clock className="h-3.5 w-3.5" />, label: 'Pending', variant: 'secondary' },
   processing: { icon: <Loader2 className="h-3.5 w-3.5 animate-spin" />, label: 'Processing', variant: 'secondary' },
   failed: { icon: <XCircle className="h-3.5 w-3.5" />, label: 'Failed', variant: 'destructive' },
   cancelled: { icon: <XCircle className="h-3.5 w-3.5" />, label: 'Cancelled', variant: 'outline' },
};

const TransactionsPage = () => {
   const { transactions } = usePage<TransactionsPageProps>().props;

   return (
      <div className="container mx-auto max-w-4xl py-8">
         <div className="mb-6">
            <h1 className="text-2xl font-bold">My Transactions</h1>
            <p className="text-muted-foreground mt-1">View your payment history</p>
         </div>

         {transactions.data.length === 0 ? (
            <Card>
               <CardContent className="p-12 text-center">
                  <Phone className="text-muted-foreground mx-auto mb-4 h-12 w-12" />
                  <h3 className="text-lg font-medium">No transactions yet</h3>
                  <p className="text-muted-foreground mt-1">Your payment history will appear here</p>
               </CardContent>
            </Card>
         ) : (
            <div className="space-y-3">
               {transactions.data.map((tx) => {
                  const config = statusConfig[tx.status] || statusConfig.pending;

                  return (
                     <Card key={tx.id} className="transition-shadow hover:shadow-md">
                        <CardContent className="p-4">
                           <div className="flex items-start justify-between gap-4">
                              <div className="flex gap-3">
                                 {tx.course?.thumbnail ? (
                                    <img
                                       src={tx.course.thumbnail}
                                       alt={tx.course.title}
                                       className="h-14 w-20 flex-shrink-0 rounded-md object-cover"
                                    />
                                 ) : (
                                    <div className="bg-muted flex h-14 w-20 flex-shrink-0 items-center justify-center rounded-md">
                                       <Phone className="text-muted-foreground h-5 w-5" />
                                    </div>
                                 )}

                                 <div className="min-w-0">
                                    {tx.course ? (
                                       <Link
                                          href={route('course.details', { slug: tx.course.slug, id: tx.course.id })}
                                          className="line-clamp-1 text-sm font-medium hover:underline"
                                       >
                                          {tx.course.title}
                                          <ExternalLink className="ml-1 inline h-3 w-3" />
                                       </Link>
                                    ) : (
                                       <p className="text-sm font-medium">{tx.description || 'Payment'}</p>
                                    )}
                                    <p className="text-muted-foreground mt-0.5 text-xs">
                                       {tx.phone_number} {tx.wallet_type && `· ${tx.wallet_type}`}
                                    </p>
                                    <p className="text-muted-foreground text-xs">
                                       {new Date(tx.created_at).toLocaleDateString('en-US', {
                                          year: 'numeric',
                                          month: 'short',
                                          day: 'numeric',
                                          hour: '2-digit',
                                          minute: '2-digit',
                                       })}
                                    </p>
                                    <p className="text-muted-foreground mt-0.5 text-xs font-mono">Ref: {tx.reference_id}</p>
                                 </div>
                              </div>

                              <div className="flex flex-col items-end gap-1.5">
                                 <span className="text-lg font-bold">
                                    ${Number(tx.amount).toFixed(2)}
                                 </span>
                                 <Badge variant={config.variant} className="flex items-center gap-1">
                                    {config.icon}
                                    {config.label}
                                 </Badge>
                              </div>
                           </div>
                        </CardContent>
                     </Card>
                  );
               })}

               {/* Pagination */}
               {transactions.last_page > 1 && (
                  <div className="flex items-center justify-center gap-1 pt-4">
                     {transactions.links.map((link, i) => (
                        <Link
                           key={i}
                           href={link.url || '#'}
                           className={`rounded-md px-3 py-1.5 text-sm ${
                              link.active
                                 ? 'bg-primary text-primary-foreground'
                                 : link.url
                                   ? 'hover:bg-muted'
                                   : 'text-muted-foreground pointer-events-none'
                           }`}
                           dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                     ))}
                  </div>
               )}
            </div>
         )}
      </div>
   );
};

TransactionsPage.layout = (page: ReactNode) => <LandingLayout children={page} customizable={false} />;

export default TransactionsPage;
