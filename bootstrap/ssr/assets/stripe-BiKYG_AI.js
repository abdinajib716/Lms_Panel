import { jsxs, jsx } from "react/jsx-runtime";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { L as LoadingButton } from "./loading-button-C4Hk_jCd.js";
import { S as Switch } from "./switch-Bijz4LyT.js";
import { C as Card } from "./card-D8SB2yrw.js";
import { I as Input } from "./input-C6-Ta46A.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BxPdBi6V.js";
import { o as onHandleChange } from "./inertia-BtwbgBI3.js";
import { useForm } from "@inertiajs/react";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "lucide-react";
import "react";
import "./button-jZyzwgdo.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-switch";
import "@radix-ui/react-label";
import "@radix-ui/react-select";
const Stripe = ({ payment }) => {
  const { data, setData, post, errors, processing } = useForm({
    ...payment.fields,
    type: "stripe"
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("payouts.settings.update"));
  };
  return /* @__PURE__ */ jsxs(Card, { className: "p-4 sm:p-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-6 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold", children: "Stripe Settings" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: "Configure Stripe payment gateway" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "status", children: data.active ? "Enabled" : "Disabled" }),
        /* @__PURE__ */ jsx(Switch, { id: "status", checked: data.active, onCheckedChange: (checked) => setData("active", checked) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Currency" }),
          /* @__PURE__ */ jsxs(Select, { value: data.currency, onValueChange: (value) => setData("currency", value), children: [
            /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select Currency" }) }),
            /* @__PURE__ */ jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsx(SelectItem, { value: "USD", children: "US Dollar (USD)" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "EUR", children: "Euro (EUR)" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "GBP", children: "British Pound (GBP)" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "CAD", children: "Canadian Dollar (CAD)" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "AUD", children: "Australian Dollar (AUD)" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "JPY", children: "Japanese Yen (JPY)" })
            ] })
          ] }),
          /* @__PURE__ */ jsx(InputError, { message: errors.currency })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Test Mode:" }),
          /* @__PURE__ */ jsx(Switch, { id: "status", checked: data.test_mode, onCheckedChange: (checked) => setData("test_mode", checked) }),
          /* @__PURE__ */ jsx(Label, { htmlFor: "status", className: "text-gray-500", children: data.test_mode ? "Using Test Keys" : "Using Live Keys" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `border-b pb-6 ${!data.test_mode ? "opacity-60" : ""}`, children: [
        /* @__PURE__ */ jsx("h3", { className: "mb-4 text-lg font-medium", children: "Test Credentials" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-1", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { children: "Public Test Key *" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                name: "test_public_key",
                value: data.test_public_key || "",
                onChange: (e) => onHandleChange(e, setData),
                placeholder: "Enter test public key",
                disabled: !data.test_mode
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.test_public_key })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { children: "Secret Test Key *" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                name: "test_secret_key",
                value: data.test_secret_key || "",
                onChange: (e) => onHandleChange(e, setData),
                placeholder: "Enter test secret key",
                disabled: !data.test_mode,
                type: "password"
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.test_secret_key })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `border-b pb-6 ${data.test_mode ? "opacity-60" : ""}`, children: [
        /* @__PURE__ */ jsx("h3", { className: "mb-4 text-lg font-medium", children: "Live Credentials" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-1", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { children: "Public Live Key *" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                name: "live_public_key",
                value: data.live_public_key || "",
                onChange: (e) => onHandleChange(e, setData),
                placeholder: "Enter live public key",
                disabled: data.test_mode
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.live_public_key })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { children: "Secret Live Key *" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                name: "live_secret_key",
                value: data.live_secret_key || "",
                onChange: (e) => onHandleChange(e, setData),
                placeholder: "Enter live secret key",
                disabled: data.test_mode,
                type: "password"
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.live_secret_key })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "border-b pb-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "mb-4 text-lg font-medium", children: "Webhook Settings" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-1", children: /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Webhook Secret" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              name: "webhook_secret",
              value: data.webhook_secret || "",
              onChange: (e) => onHandleChange(e, setData),
              placeholder: "Enter webhook secret",
              type: "password"
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.webhook_secret }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-500", children: "Webhooks are used to handle events from Stripe like successful payments" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-500", children: data.active ? "Stripe is currently enabled" : "Stripe is currently disabled" }),
        /* @__PURE__ */ jsx(LoadingButton, { loading: processing, children: "Save Changes" })
      ] })
    ] })
  ] });
};
export {
  Stripe as default
};
