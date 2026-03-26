import { jsxs, jsx } from "react/jsx-runtime";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { L as LoadingButton } from "./loading-button-C4Hk_jCd.js";
import { S as Switch } from "./switch-Bijz4LyT.js";
import { C as Card } from "./card-D8SB2yrw.js";
import { I as Input } from "./input-C6-Ta46A.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { u as useLang } from "./use-lang-44ndmTOc.js";
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
const Recaptcha = (props) => {
  const { button, common } = useLang();
  const { data, setData, post, errors, processing } = useForm({
    ...props.auth.fields,
    type: "google_recaptcha"
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("settings.auth0.update", { id: props.auth.id }));
  };
  return /* @__PURE__ */ jsxs(Card, { className: "p-4 sm:p-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-7 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold", children: "ReCaptcha Settings" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: "Provide the ReCaptcha site key and secret key." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "status", children: data.active ? common.enabled : common.disabled }),
        /* @__PURE__ */ jsx(Switch, { id: "status", checked: data.active, onCheckedChange: (checked) => setData("active", checked) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "border-b pb-6", children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-4 text-xl font-semibold", children: "ReCaptcha Settings" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { children: "Site Key" }),
            /* @__PURE__ */ jsx(Input, { name: "site_key", value: data.site_key || "", onChange: (e) => onHandleChange(e, setData), placeholder: "Site Key" }),
            /* @__PURE__ */ jsx(InputError, { message: errors.site_key })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { children: "Secret Key" }),
            /* @__PURE__ */ jsx(Input, { name: "secret_key", value: data.secret_key || "", onChange: (e) => onHandleChange(e, setData), placeholder: "Secret Key" }),
            /* @__PURE__ */ jsx(InputError, { message: errors.secret_key })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx(LoadingButton, { loading: processing, children: button.save_changes })
    ] })
  ] });
};
export {
  Recaptcha as default
};
