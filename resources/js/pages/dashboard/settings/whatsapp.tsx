import InputError from '@/components/input-error';
import LoadingButton from '@/components/loading-button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import DashboardLayout from '@/layouts/dashboard/layout';
import { SharedData } from '@/types/global';
import { useForm, usePage } from '@inertiajs/react';
import { ReactNode } from 'react';

type WhatsAppFormData = WhatsAppFields & Record<string, any>;

interface Props extends SharedData {
   whatsapp: Settings<WhatsAppFormData>;
}

const WhatsApp = ({ whatsapp }: Props) => {
   const { props } = usePage<SharedData>();
   const { translate } = props;
   const { settings, input, button } = translate;
   const { data, setData, post, errors, processing } = useForm<WhatsAppFormData>({
      ...whatsapp.fields,
   });

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      post(route('settings.whatsapp.update', { id: whatsapp.id }));
   };

   return (
      <div className="md:px-3">
         <div className="mb-6">
            <h1 className="text-2xl font-bold">WhatsApp Support Settings</h1>
            <p className="text-gray-500">Configure your WhatsApp support widget to connect with your visitors</p>
         </div>

         <Card className="p-4 sm:p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
               {/* Widget Status */}
               <div className="border-b pb-6">
                  <h2 className="mb-4 text-xl font-semibold">Widget Status</h2>
                  
                  <div className="flex items-center justify-between">
                     <div className="space-y-0.5">
                        <Label>Enable WhatsApp Widget</Label>
                        <p className="text-sm text-gray-500">Show the WhatsApp support button on your website</p>
                     </div>
                     <Switch
                        checked={data.enabled}
                        onCheckedChange={(value) => setData('enabled', value)}
                     />
                  </div>
                  <InputError message={errors.enabled} />
               </div>

               {/* Contact Information */}
               <div className="border-b pb-6">
                  <h2 className="mb-4 text-xl font-semibold">Contact Information</h2>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                     <div>
                        <Label>WhatsApp Phone Number *</Label>
                        <Input
                           name="phone_number"
                           value={data.phone_number || ''}
                           onChange={(e) => setData('phone_number', e.target.value)}
                           placeholder="252612345678"
                        />
                        <p className="mt-1 text-xs text-gray-500">Include country code without + or spaces (e.g., 252612345678)</p>
                        <InputError message={errors.phone_number} />
                     </div>

                     <div>
                        <Label>Agent Name *</Label>
                        <Input
                           name="agent_name"
                           value={data.agent_name || ''}
                           onChange={(e) => setData('agent_name', e.target.value)}
                           placeholder="Dugsiye Support"
                        />
                        <InputError message={errors.agent_name} />
                     </div>

                     <div className="md:col-span-2">
                        <Label>Agent Title *</Label>
                        <Input
                           name="agent_title"
                           value={data.agent_title || ''}
                           onChange={(e) => setData('agent_title', e.target.value)}
                           placeholder="Typically replies instantly"
                        />
                        <InputError message={errors.agent_title} />
                     </div>

                     <div className="md:col-span-2">
                        <Label>Greeting Message *</Label>
                        <Textarea
                           name="greeting_message"
                           value={data.greeting_message || ''}
                           onChange={(e) => setData('greeting_message', e.target.value)}
                           placeholder="Assalamu Alaikum! 👋&#10;Ready to start your journey?"
                           rows={4}
                        />
                        <InputError message={errors.greeting_message} />
                     </div>

                     <div className="md:col-span-2">
                        <Label>Default Message *</Label>
                        <Input
                           name="default_message"
                           value={data.default_message || ''}
                           onChange={(e) => setData('default_message', e.target.value)}
                           placeholder="Hi Support!"
                        />
                        <p className="mt-1 text-xs text-gray-500">Pre-filled message when user clicks Start Chat</p>
                        <InputError message={errors.default_message} />
                     </div>
                  </div>
               </div>

               {/* Widget Appearance */}
               <div className="border-b pb-6">
                  <h2 className="mb-4 text-xl font-semibold">Widget Appearance</h2>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                     <div>
                        <Label>Button Position</Label>
                        <Select 
                           value={data.button_position} 
                           onValueChange={(value) => setData('button_position', value as 'bottom-right' | 'bottom-left')}
                        >
                           <SelectTrigger>
                              <SelectValue placeholder="Select position" />
                           </SelectTrigger>
                           <SelectContent>
                              <SelectItem value="bottom-right">Bottom Right</SelectItem>
                              <SelectItem value="bottom-left">Bottom Left</SelectItem>
                           </SelectContent>
                        </Select>
                        <InputError message={errors.button_position} />
                     </div>

                     <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                           <Label>Show Online Badge</Label>
                           <p className="text-sm text-gray-500">Display green online indicator</p>
                        </div>
                        <Switch
                           checked={data.show_online_badge}
                           onCheckedChange={(value) => setData('show_online_badge', value)}
                        />
                     </div>
                  </div>
               </div>

               {/* Auto Popup Settings */}
               <div className="pb-6">
                  <h2 className="mb-4 text-xl font-semibold">Auto Popup Settings</h2>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                     <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                           <Label>Enable Auto Popup</Label>
                           <p className="text-sm text-gray-500">Automatically show popup after delay</p>
                        </div>
                        <Switch
                           checked={data.auto_popup}
                           onCheckedChange={(value) => setData('auto_popup', value)}
                        />
                     </div>

                     {data.auto_popup && (
                        <div>
                           <Label>Popup Delay (seconds)</Label>
                           <Input
                              name="auto_popup_delay"
                              type="number"
                              min="0"
                              max="60"
                              value={data.auto_popup_delay || 5}
                              onChange={(e) => setData('auto_popup_delay', parseInt(e.target.value) || 5)}
                           />
                           <p className="mt-1 text-xs text-gray-500">How long to wait before showing popup (0-60 seconds)</p>
                           <InputError message={errors.auto_popup_delay} />
                        </div>
                     )}
                  </div>
               </div>

               <div className="flex items-center justify-end">
                  <LoadingButton loading={processing}>{button.save_changes}</LoadingButton>
               </div>
            </form>
         </Card>
      </div>
   );
};

WhatsApp.layout = (page: ReactNode) => <DashboardLayout children={page} />;

export default WhatsApp;
