import { jsxs, jsx } from "react/jsx-runtime";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { L as LoadingButton } from "./loading-button-C4Hk_jCd.js";
import { S as Switch } from "./switch-Bijz4LyT.js";
import { C as Card } from "./card-D8SB2yrw.js";
import { I as Input } from "./input-C6-Ta46A.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BxPdBi6V.js";
import { o as onHandleChange } from "./inertia-BtwbgBI3.js";
import { usePage, useForm } from "@inertiajs/react";
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
const Paytm = ({ payment }) => {
  const { props } = usePage();
  const { translate } = props;
  const { settings, input, button, common } = translate;
  const { data, setData, post, errors, processing } = useForm({
    ...payment.fields,
    type: "paytm"
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("settings.payment.update", { id: payment.id }));
  };
  return /* @__PURE__ */ jsxs(Card, { className: "p-4 sm:p-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-6 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold", children: settings.paytm_settings }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: settings.configure_payment_gateway.replace(":gateway", "Paytm") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "status", children: data.active ? common.enabled : common.disabled }),
        /* @__PURE__ */ jsx(Switch, { id: "status", checked: data.active, onCheckedChange: (checked) => setData("active", checked) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: input.currency }),
          /* @__PURE__ */ jsxs(Select, { value: data.currency, onValueChange: (value) => setData("currency", value), children: [
            /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: input.select_currency }) }),
            /* @__PURE__ */ jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsx(SelectItem, { value: "USD", children: "US Dollar (USD)" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "INR", children: "Indian Rupee (INR)" })
            ] })
          ] }),
          /* @__PURE__ */ jsx(InputError, { message: errors.currency })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium", children: [
            settings.test_mode,
            ":"
          ] }),
          /* @__PURE__ */ jsx(Switch, { id: "status", checked: data.test_mode, onCheckedChange: (checked) => setData("test_mode", checked) }),
          /* @__PURE__ */ jsx(Label, { htmlFor: "status", className: "text-gray-500", children: data.test_mode ? settings.using_staging_environment : settings.using_production_environment })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "border-b pb-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "mb-4 text-lg font-medium", children: settings.api_credentials }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { children: input.merchant_id }),
            /* @__PURE__ */ jsx(
              Input,
              {
                name: "public_key",
                value: data.public_key || "",
                onChange: (e) => onHandleChange(e, setData),
                placeholder: input.merchant_id_placeholder
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.public_key }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-500", children: data.test_mode ? settings.use_staging_key.replace(":key", "merchant ID") : settings.use_production_key.replace(":key", "merchant ID") })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { children: input.merchant_key }),
            /* @__PURE__ */ jsx(
              Input,
              {
                name: "secret_key",
                value: data.secret_key || "",
                onChange: (e) => onHandleChange(e, setData),
                placeholder: input.merchant_key_placeholder,
                type: "password"
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.secret_key }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-500", children: data.test_mode ? settings.use_staging_key.replace(":key", "merchant key") : settings.use_production_key.replace(":key", "merchant key") })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx(LoadingButton, { loading: processing, type: "submit", className: "w-full", children: button.save_changes })
    ] })
  ] });
};
export {
  Paytm as default
};
