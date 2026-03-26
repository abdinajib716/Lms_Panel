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
const Google = (props) => {
  const { auth, input, button, common } = useLang();
  const { data, setData, post, errors, processing } = useForm({
    ...props.auth.fields,
    type: "google_auth"
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("settings.auth0.update", { id: props.auth.id }));
  };
  return /* @__PURE__ */ jsxs(Card, { className: "p-4 sm:p-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-7 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold", children: auth.google_auth_settings }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: auth.google_auth_description })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "status", children: data.active ? common.enabled : common.disabled }),
        /* @__PURE__ */ jsx(Switch, { id: "status", checked: data.active, onCheckedChange: (checked) => setData("active", checked) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "border-b pb-6", children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-4 text-xl font-semibold", children: auth.google_auth }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { children: input.google_client_id }),
            /* @__PURE__ */ jsx(
              Input,
              {
                name: "client_id",
                value: data.client_id || "",
                onChange: (e) => onHandleChange(e, setData),
                placeholder: input.google_client_id_placeholder
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.client_id })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { children: input.google_client_secret }),
            /* @__PURE__ */ jsx(
              Input,
              {
                name: "client_secret",
                value: data.client_secret || "",
                onChange: (e) => onHandleChange(e, setData),
                placeholder: input.google_client_secret_placeholder
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.client_secret })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { children: input.google_redirect_uri }),
            /* @__PURE__ */ jsx(
              Input,
              {
                name: "redirect",
                value: data.redirect || "",
                onChange: (e) => onHandleChange(e, setData),
                placeholder: input.google_redirect_uri
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.redirect })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx(LoadingButton, { loading: processing, children: button.save_changes })
    ] })
  ] });
};
export {
  Google as default
};
