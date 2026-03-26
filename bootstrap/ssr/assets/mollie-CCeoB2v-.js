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
const mollieCurrencies = [
  { label: "United Arab Emirates Dirham", value: "AED" },
  { label: "Australian Dollar", value: "AUD" },
  { label: "Bulgarian Lev", value: "BGN" },
  { label: "Brazilian Real", value: "BRL" },
  { label: "Canadian Dollar", value: "CAD" },
  { label: "Swiss Franc", value: "CHF" },
  { label: "Czech Koruna", value: "CZK" },
  { label: "Danish Krone", value: "DKK" },
  { label: "Euro", value: "EUR" },
  { label: "British Pound", value: "GBP" },
  { label: "Hong Kong Dollar", value: "HKD" },
  { label: "Hungarian Forint", value: "HUF" },
  { label: "Israeli Shekel", value: "ILS" },
  { label: "Icelandic Króna", value: "ISK" },
  { label: "Japanese Yen", value: "JPY" },
  { label: "Mexican Peso", value: "MXN" },
  { label: "Malaysian Ringgit", value: "MYR" },
  { label: "Norwegian Krone", value: "NOK" },
  { label: "New Zealand Dollar", value: "NZD" },
  { label: "Philippine Peso", value: "PHP" },
  { label: "Polish Zloty", value: "PLN" },
  { label: "Romanian Leu", value: "RON" },
  { label: "Russian Ruble", value: "RUB" },
  { label: "Swedish Krona", value: "SEK" },
  { label: "Singapore Dollar", value: "SGD" },
  { label: "Thai Baht", value: "THB" },
  { label: "U.S. Dollar", value: "USD" },
  { label: "Taiwan New Dollar", value: "TWD" },
  { label: "South African Rand", value: "ZAR" }
];
const Mollie = ({ payment }) => {
  const { props } = usePage();
  const { translate } = props;
  const { settings, input, button, common } = translate;
  const { data, setData, post, errors, processing } = useForm({
    ...payment.fields,
    type: "mollie"
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("settings.payment.update", { id: payment.id }));
  };
  return /* @__PURE__ */ jsxs(Card, { className: "p-4 sm:p-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-6 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold", children: settings.mollie_settings }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: settings.configure_payment_gateway.replace(":gateway", "Mollie") })
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
            /* @__PURE__ */ jsx(SelectContent, { children: mollieCurrencies.map((currency) => /* @__PURE__ */ jsxs(SelectItem, { value: currency.value, children: [
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
          /* @__PURE__ */ jsx(Label, { htmlFor: "status", className: "text-gray-500", children: data.test_mode ? settings.using_test_environment : settings.using_live_environment })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "border-b pb-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "mb-4 text-lg font-medium", children: settings.api_credentials }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { children: input.test_api_key }),
            /* @__PURE__ */ jsx(
              Input,
              {
                name: "test_api_key",
                value: data.test_api_key || "",
                onChange: (e) => onHandleChange(e, setData),
                placeholder: input.test_api_key_placeholder
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.test_api_key }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-500", children: data.test_mode ? settings.use_test_mode_key.replace(":key", "api key") : settings.use_live_mode_key.replace(":key", "api key") })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { children: input.live_api_key }),
            /* @__PURE__ */ jsx(
              Input,
              {
                name: "live_api_key",
                value: data.live_api_key || "",
                onChange: (e) => onHandleChange(e, setData),
                placeholder: input.live_api_key_placeholder
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.live_api_key }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-500", children: data.test_mode ? "Use your test mode api key" : "Use your live mode api key" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx(LoadingButton, { loading: processing, type: "submit", className: "w-full", children: button.save_changes })
    ] })
  ] });
};
export {
  Mollie as default
};
