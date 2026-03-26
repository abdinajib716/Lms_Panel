import { jsxs, jsx } from "react/jsx-runtime";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { L as LoadingButton } from "./loading-button-C4Hk_jCd.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { D as Dialog, a as DialogTrigger, b as DialogContent, c as DialogHeader, d as DialogTitle, e as DialogFooter, f as DialogClose } from "./dialog-DD5SXV81.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { S as ScrollArea } from "./scroll-area-DPHRDnwL.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BxPdBi6V.js";
import { u as useLang } from "./use-lang-44ndmTOc.js";
import { useForm } from "@inertiajs/react";
import { Send } from "lucide-react";
import { useState } from "react";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-dialog";
import "@radix-ui/react-label";
import "@radix-ui/react-scroll-area";
import "@radix-ui/react-select";
const NewsletterSend = ({ id, translate }) => {
  const [open, setOpen] = useState(false);
  const { dashboard, button } = useLang();
  const { data, setData, post, errors, processing } = useForm({
    user_type: "",
    newsletter_id: id
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("newsletters.send"), {
      onSuccess: () => setOpen(false)
    });
  };
  const users = [
    { title: dashboard.all, value: "all" },
    { title: dashboard.student, value: "student" },
    { title: button.instructor, value: "instructor" }
  ];
  return /* @__PURE__ */ jsxs(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(DialogTrigger, { children: /* @__PURE__ */ jsx(Button, { size: "icon", variant: "secondary", className: "h-7 w-7", children: /* @__PURE__ */ jsx(Send, { className: "h-3 w-3" }) }) }),
    /* @__PURE__ */ jsx(DialogContent, { className: "p-0", children: /* @__PURE__ */ jsxs(ScrollArea, { className: "max-h-[90vh] p-6", children: [
      /* @__PURE__ */ jsx(DialogHeader, { className: "mb-6", children: /* @__PURE__ */ jsx(DialogTitle, { children: dashboard.send_newsletter }) }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4 p-0.5", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: dashboard.send_to }),
          /* @__PURE__ */ jsxs(Select, { value: data.user_type, onValueChange: (value) => setData("user_type", value), children: [
            /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: dashboard.select_user_type }) }),
            /* @__PURE__ */ jsx(SelectContent, { children: users.map(({ title, value }) => /* @__PURE__ */ jsx(SelectItem, { value, className: "capitalize", children: title }, value)) })
          ] }),
          /* @__PURE__ */ jsx(InputError, { message: errors.user_type })
        ] }),
        /* @__PURE__ */ jsxs(DialogFooter, { className: "flex justify-end space-x-2 pt-4", children: [
          /* @__PURE__ */ jsx(DialogClose, { asChild: true, children: /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", children: button.close }) }),
          /* @__PURE__ */ jsx(LoadingButton, { loading: processing, children: button.submit })
        ] })
      ] })
    ] }) })
  ] });
};
export {
  NewsletterSend as default
};
