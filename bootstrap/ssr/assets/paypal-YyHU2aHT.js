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
const paypalCurrencies = [
  { label: "Australian Dollar", value: "AUD" },
  { label: "Brazilian Real", value: "BRL" },
  { label: "Canadian Dollar", value: "CAD" },
  { label: "Chinese Yuan", value: "CNY" },
  { label: "Czech Koruna", value: "CZK" },
  { label: "Danish Krone", value: "DKK" },
  { label: "Euro", value: "EUR" },
  { label: "Hong Kong Dollar", value: "HKD" },
  { label: "Hungarian Forint", value: "HUF" },
  { label: "Israeli Shekel", value: "ILS" },
  { label: "Japanese Yen", value: "JPY" },
  { label: "Malaysian Ringgit", value: "MYR" },
  { label: "Mexican Peso", value: "MXN" },
  { label: "Norwegian Krone", value: "NOK" },
  { label: "New Zealand Dollar", value: "NZD" },
  { label: "Philippine Peso", value: "PHP" },
  { label: "Polish Zloty", value: "PLN" },
  { label: "Pound Sterling", value: "GBP" },
  { label: "Russian Ruble", value: "RUB" },
  { label: "Singapore Dollar", value: "SGD" },
  { label: "Swedish Krona", value: "SEK" },
  { label: "Swiss Franc", value: "CHF" },
  { label: "Taiwan New Dollar", value: "TWD" },
  { label: "Thai Baht", value: "THB" },
  { label: "U.S. Dollar", value: "USD" }
];
const Paypal = ({ payment }) => {
  const { props } = usePage();
  const { translate } = props;
  const { settings, input, button, common } = translate;
  const { data, setData, post, errors, processing } = useForm({
    ...payment.fields,
    type: "paypal"
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("settings.payment.update", { id: payment.id }));
  };
  return /* @__PURE__ */ jsxs(Card, { className: "p-4 sm:p-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-6 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold", children: settings.paypal_settings }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: settings.configure_payment_gateway.replace(":gateway", "PayPal") })
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
            /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: input.currency }) }),
            /* @__PURE__ */ jsx(SelectContent, { children: paypalCurrencies.map((currency) => /* @__PURE__ */ jsxs(SelectItem, { value: currency.value, children: [
              currency.label,
              " (",
              currency.value,
              ")"
            ] }, currency.value)) })
          ] }),
          /* @__PURE__ */ jsx(InputError, { message: errors.currency })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium", children: [
            settings.test_mode,
            ":"
          ] }),
          /* @__PURE__ */ jsx(Switch, { id: "status", checked: data.test_mode, onCheckedChange: (checked) => setData("test_mode", checked) }),
          /* @__PURE__ */ jsx(Label, { htmlFor: "status", className: "text-gray-500", children: data.test_mode ? settings.using_sandbox_environment : settings.using_production_environment })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `border-b pb-6 ${!data.test_mode ? "opacity-60" : ""}`, children: [
        /* @__PURE__ */ jsx("h3", { className: "mb-4 text-lg font-medium", children: settings.sandbox_credentials }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-1", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { children: input.sandbox_client_id }),
            /* @__PURE__ */ jsx(
              Input,
              {
                name: "sandbox_client_id",
                value: data.sandbox_client_id || "",
                onChange: (e) => onHandleChange(e, setData),
                placeholder: input.sandbox_client_id_placeholder,
                disabled: !data.test_mode
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.sandbox_client_id })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { children: input.sandbox_secret_key }),
            /* @__PURE__ */ jsx(
              Input,
              {
                name: "sandbox_secret_key",
                value: data.sandbox_secret_key || "",
                onChange: (e) => onHandleChange(e, setData),
                placeholder: input.sandbox_secret_key_placeholder,
                disabled: !data.test_mode,
                type: "password"
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.sandbox_secret_key })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `border-b pb-6 ${data.test_mode ? "opacity-60" : ""}`, children: [
        /* @__PURE__ */ jsx("h3", { className: "mb-4 text-lg font-medium", children: settings.production_credentials }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-1", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { children: input.production_client_id }),
            /* @__PURE__ */ jsx(
              Input,
              {
                name: "production_client_id",
                value: data.production_client_id || "",
                onChange: (e) => onHandleChange(e, setData),
                placeholder: input.production_client_id_placeholder,
                disabled: data.test_mode
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.production_client_id })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { children: input.production_secret_key }),
            /* @__PURE__ */ jsx(
              Input,
              {
                name: "production_secret_key",
                value: data.production_secret_key || "",
                onChange: (e) => onHandleChange(e, setData),
                placeholder: input.production_secret_key_placeholder,
                disabled: data.test_mode,
                type: "password"
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.production_secret_key })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx(LoadingButton, { loading: processing, type: "submit", className: "w-full", children: button.save_changes })
    ] })
  ] });
};
export {
  Paypal as default
};
