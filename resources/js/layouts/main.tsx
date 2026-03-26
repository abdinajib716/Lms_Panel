import { Toaster } from '@/components/ui/sonner';
import WhatsAppWidget from '@/components/whatsapp-widget';
import { SharedData } from '@/types/global';
import { usePage } from '@inertiajs/react';
import { PropsWithChildren, useEffect } from 'react';
import { toast } from 'sonner';

const Main = ({ children }: PropsWithChildren) => {
   const { props } = usePage<SharedData>();

   useEffect(() => {
      if (props.flash.error) {
         toast.error(props.flash.error);
      }

      if (props.flash.success || props.flash.warning) {
         toast.success(props.flash.success || props.flash.warning);
      }
   }, [props.flash]);

   return (
      <>
         <Toaster />

         {children}

         {/* WhatsApp Support Widget */}
         {props.whatsapp && (
            <WhatsAppWidget
               enabled={props.whatsapp.enabled}
               phoneNumber={props.whatsapp.phone_number}
               agentName={props.whatsapp.agent_name}
               agentTitle={props.whatsapp.agent_title}
               greetingMessage={props.whatsapp.greeting_message}
               buttonPosition={props.whatsapp.button_position}
               showOnlineBadge={props.whatsapp.show_online_badge}
               autoPopup={props.whatsapp.auto_popup}
               autoPopupDelay={props.whatsapp.auto_popup_delay}
               defaultMessage={props.whatsapp.default_message}
            />
         )}
      </>
   );
};

export default Main;
