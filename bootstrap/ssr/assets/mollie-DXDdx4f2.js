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
const Mollie = ({ payment }) => {
  const { data, setData, post, errors, processing } = useForm({
    ...payment.fields,
    type: "mollie"
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("payouts.settings.update"));
  };
  return /* @__PURE__ */ jsxs(Card, { className: "p-4 sm:p-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-6 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold", children: "Mollie Settings" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: "Configure Mollie payment gateway" })
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
              /* @__PURE__ */ jsx(SelectItem, { value: "INR", children: "Indian Rupee (INR)" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "EUR", children: "Euro (EUR)" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "GBP", children: "British Pound (GBP)" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "AUD", children: "Australian Dollar (AUD)" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "SGD", children: "Singapore Dollar (SGD)" })
            ] })
          ] }),
          /* @__PURE__ */ jsx(InputError, { message: errors.currency })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Test Mode:" }),
          /* @__PURE__ */ jsx(Switch, { id: "status", checked: data.test_mode, onCheckedChange: (checked) => setData("test_mode", checked) }),
          /* @__PURE__ */ jsx(Label, { htmlFor: "status", className: "text-gray-500", children: data.test_mode ? "Using Test Environment" : "Using Live Environment" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "border-b pb-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "mb-4 text-lg font-medium", children: "API Credentials" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { children: "Test API Key" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                name: "test_api_key",
                value: data.test_api_key || "",
                onChange: (e) => onHandleChange(e, setData),
                placeholder: "Enter Mollie test api key"
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.test_api_key }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-500", children: data.test_mode ? "Use your test mode api key" : "Use your live mode api key" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { children: "Live API Key" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                name: "live_api_key",
                value: data.live_api_key || "",
                onChange: (e) => onHandleChange(e, setData),
                placeholder: "Enter Mollie live api key",
                type: "password"
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.live_api_key }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-500", children: data.test_mode ? "Use your test mode api key" : "Use your live mode api key" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-500", children: data.active ? "Mollie is currently enabled" : "Mollie is currently disabled" }),
        /* @__PURE__ */ jsx(LoadingButton, { loading: processing, children: "Save Changes" })
      ] })
    ] })
  ] });
};
export {
  Mollie as default
};
