import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import DashboardLayout from '@/layouts/dashboard/layout';
import { Link, router, usePage } from '@inertiajs/react';
import { CheckCircle, Clock, Loader2, Phone, Search, XCircle } from 'lucide-react';
import { ReactNode, useState } from 'react';

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
   channel: string;
   created_at: string;
   completed_at: string | null;
   user: { id: number; name: string; email: string } | null;
   course: { id: number; title: string; slug: string } | null;
}

interface PaginatedData {
   data: Transaction[];
   current_page: number;
   last_page: number;
   per_page: number;
   total: number;
   links: { url: string | null; label: string; active: boolean }[];
}

interface Props {
   transactions: PaginatedData;
   filters: { search?: string; status?: string };
}

const statusConfig: Record<string, { icon: ReactNode; label: string; variant: 'default' | 'secondary' | 'destructive' | 'outline' }> = {
   success: { icon: <CheckCircle className="h-3.5 w-3.5" />, label: 'Success', variant: 'default' },
   pending: { icon: <Clock className="h-3.5 w-3.5" />, label: 'Pending', variant: 'secondary' },
   processing: { icon: <Loader2 className="h-3.5 w-3.5 animate-spin" />, label: 'Processing', variant: 'secondary' },
   failed: { icon: <XCircle className="h-3.5 w-3.5" />, label: 'Failed', variant: 'destructive' },
   cancelled: { icon: <XCircle className="h-3.5 w-3.5" />, label: 'Cancelled', variant: 'outline' },
};

const TransactionsIndex = () => {
   const { transactions, filters } = usePage<{ transactions: PaginatedData; filters: Props['filters'] }>().props;
   const [search, setSearch] = useState(filters.search || '');

   const handleSearch = (e: React.FormEvent) => {
      e.preventDefault();
      router.get(route('admin.transactions'), { search, status: filters.status }, { preserveState: true });
   };

   const handleStatusFilter = (value: string) => {
      const status = value === 'all' ? undefined : value;
      router.get(route('admin.transactions'), { search: filters.search, status }, { preserveState: true });
   };

   return (
      <section className="space-y-6 md:px-3">
         <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
               <h1 className="text-2xl font-bold">Transactions</h1>
               <p className="text-muted-foreground text-sm">Manage all WaafiPay payment transactions</p>
            </div>
            <Badge variant="outline" className="w-fit text-sm">
               {transactions.total} total
            </Badge>
         </div>

         {/* Filters */}
         <div className="flex flex-col gap-3 sm:flex-row">
            <form onSubmit={handleSearch} className="relative flex-1">
               <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
               <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by reference, phone, or name..."
                  className="pl-9"
               />
            </form>
            <Select value={filters.status || 'all'} onValueChange={handleStatusFilter}>
               <SelectTrigger className="w-full sm:w-[160px]">
                  <SelectValue placeholder="All Status" />
               </SelectTrigger>
               <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="success">Success</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="processing">Processing</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
               </SelectContent>
            </Select>
         </div>

         {/* Table */}
         {transactions.data.length === 0 ? (
            <Card>
               <CardContent className="p-12 text-center">
                  <Phone className="text-muted-foreground mx-auto mb-4 h-12 w-12" />
                  <h3 className="text-lg font-medium">No transactions found</h3>
                  <p className="text-muted-foreground mt-1">Transactions will appear here once students make payments</p>
               </CardContent>
            </Card>
         ) : (
            <Card>
               <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                     <thead>
                        <tr className="border-b">
                           <th className="px-4 py-3 text-left font-medium">Reference</th>
                           <th className="px-4 py-3 text-left font-medium">Student</th>
                           <th className="px-4 py-3 text-left font-medium">Course</th>
                           <th className="px-4 py-3 text-left font-medium">Phone</th>
                           <th className="px-4 py-3 text-left font-medium">Amount</th>
                           <th className="px-4 py-3 text-left font-medium">Status</th>
                           <th className="px-4 py-3 text-left font-medium">Date</th>
                        </tr>
                     </thead>
                     <tbody>
                        {transactions.data.map((tx) => {
                           const config = statusConfig[tx.status] || statusConfig.pending;

                           return (
                              <tr key={tx.id} className="border-b last:border-0">
                                 <td className="px-4 py-3">
                                    <span className="font-mono text-xs">{tx.reference_id}</span>
                                 </td>
                                 <td className="px-4 py-3">
                                    <div>
                                       <p className="font-medium">{tx.user?.name || 'N/A'}</p>
                                       <p className="text-muted-foreground text-xs">{tx.user?.email}</p>
                                    </div>
                                 </td>
                                 <td className="max-w-[200px] px-4 py-3">
                                    {tx.course ? (
                                       <span className="line-clamp-1 text-xs">{tx.course.title}</span>
                                    ) : (
                                       <span className="text-muted-foreground text-xs">—</span>
                                    )}
                                 </td>
                                 <td className="px-4 py-3">
                                    <span className="text-xs">{tx.phone_number}</span>
                                    {tx.wallet_type && (
                                       <p className="text-muted-foreground text-xs">{tx.wallet_type}</p>
                                    )}
                                 </td>
                                 <td className="px-4 py-3 font-semibold">
                                    ${Number(tx.amount).toFixed(2)}
                                 </td>
                                 <td className="px-4 py-3">
                                    <Badge variant={config.variant} className="flex w-fit items-center gap-1">
                                       {config.icon}
                                       {config.label}
                                    </Badge>
                                 </td>
                                 <td className="px-4 py-3">
                                    <span className="text-muted-foreground text-xs">
                                       {new Date(tx.created_at).toLocaleDateString('en-US', {
                                          month: 'short',
                                          day: 'numeric',
                                          year: 'numeric',
                                       })}
                                    </span>
                                 </td>
                              </tr>
                           );
                        })}
                     </tbody>
                  </table>
               </div>

               {/* Pagination */}
               {transactions.last_page > 1 && (
                  <div className="flex items-center justify-center gap-1 border-t p-4">
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
            </Card>
         )}
      </section>
   );
};

TransactionsIndex.layout = (page: ReactNode) => <DashboardLayout children={page} />;

export default TransactionsIndex;
