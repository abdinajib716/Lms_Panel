import { jsxs, jsx } from "react/jsx-runtime";
import { P as Popover, a as PopoverTrigger, b as PopoverContent } from "./popover-BV7JTqNd.js";
import { c as cn } from "./utils-BmtPBcb0.js";
import { usePage, router, Link } from "@inertiajs/react";
import { formatDistanceToNow, format } from "date-fns";
import { Bell } from "lucide-react";
import { B as Button } from "./button-jZyzwgdo.js";
import { S as ScrollArea } from "./scroll-area-DPHRDnwL.js";
const Notification = () => {
  const { notifications, translate } = usePage().props;
  const { button, frontend, dashboard } = translate;
  return /* @__PURE__ */ jsxs(Popover, { children: [
    /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "secondary", size: "icon", className: "relative h-9 w-9 rounded-full p-0", children: [
      /* @__PURE__ */ jsx(Bell, { className: "!h-5 !w-5" }),
      notifications.length > 0 && /* @__PURE__ */ jsx("span", { className: "absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white", children: notifications.length })
    ] }) }),
    /* @__PURE__ */ jsxs(PopoverContent, { align: "end", className: "w-80 p-0", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b px-4 py-2", children: [
        /* @__PURE__ */ jsx("h4", { className: "font-semibold", children: dashboard.notifications }),
        /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", className: "px-2 text-xs", onClick: () => router.put(route("notifications.mark-all-as-read")), children: button.mark_all_as_read })
      ] }),
      /* @__PURE__ */ jsx(ScrollArea, { children: /* @__PURE__ */ jsx("div", { className: "flex max-h-[300px] flex-col gap-1 py-2", children: notifications.length > 0 ? notifications.map(({ id, data, created_at }) => {
        const time = formatDistanceToNow(new Date(created_at), { addSuffix: true });
        const timeText = time.slice(0, 1).toUpperCase() + time.slice(1);
        return /* @__PURE__ */ jsxs(
          Link,
          {
            href: route("notifications.show", id),
            className: cn("hover:bg-accent/50 flex flex-col gap-1 px-4 py-2 transition-colors"),
            children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium capitalize", children: data.title }),
              /* @__PURE__ */ jsx("span", { className: "text-muted-foreground text-xs", title: format(new Date(created_at), "PPpp"), children: timeText })
            ]
          },
          id
        );
      }) : /* @__PURE__ */ jsx("p", { className: "text-muted-foreground p-6 text-center text-sm", children: frontend.no_unread_notifications }) }) }),
      /* @__PURE__ */ jsx("div", { className: "border-t p-2", children: /* @__PURE__ */ jsx(Button, { asChild: true, variant: "ghost", className: "w-full justify-center", size: "sm", children: /* @__PURE__ */ jsx(Link, { href: route("notifications.index"), children: button.view_all_notifications }) }) })
    ] })
  ] });
};
export {
  Notification as N
};
