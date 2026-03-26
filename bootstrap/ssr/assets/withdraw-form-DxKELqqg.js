import { jsxs, jsx } from "react/jsx-runtime";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { L as LoadingButton } from "./loading-button-C4Hk_jCd.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { D as Dialog, a as DialogTrigger, b as DialogContent, c as DialogHeader, d as DialogTitle, e as DialogFooter, f as DialogClose } from "./dialog-DD5SXV81.js";
import { I as Input } from "./input-C6-Ta46A.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { S as ScrollArea } from "./scroll-area-DPHRDnwL.js";
import { u as useLang } from "./use-lang-44ndmTOc.js";
import { o as onHandleChange } from "./inertia-BtwbgBI3.js";
import { useForm } from "@inertiajs/react";
import { useState } from "react";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "lucide-react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-dialog";
import "@radix-ui/react-label";
import "@radix-ui/react-scroll-area";
const WithdrawForm = ({ title, handler }) => {
  const [open, setOpen] = useState(false);
  const { input, button } = useLang();
  const { data, setData, post, errors, processing } = useForm({
    amount: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("payouts.store"), {
      onSuccess: () => setOpen(false)
    });
  };
  return /* @__PURE__ */ jsxs(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(DialogTrigger, { children: handler }),
    /* @__PURE__ */ jsx(DialogContent, { className: "p-0", children: /* @__PURE__ */ jsxs(ScrollArea, { className: "max-h-[90vh] p-6", children: [
      /* @__PURE__ */ jsx(DialogHeader, { className: "mb-6", children: /* @__PURE__ */ jsx(DialogTitle, { children: title }) }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4 p-0.5", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: input.amount }),
          /* @__PURE__ */ jsx(
            Input,
            {
              required: true,
              type: "number",
              name: "amount",
              value: data.amount,
              placeholder: input.your_amount_placeholder,
              onChange: (e) => onHandleChange(e, setData)
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.amount })
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
  WithdrawForm as default
};
