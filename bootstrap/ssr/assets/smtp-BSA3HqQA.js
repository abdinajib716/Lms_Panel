import { jsxs, jsx } from "react/jsx-runtime";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { L as LoadingButton } from "./loading-button-C4Hk_jCd.js";
import { C as Card } from "./card-D8SB2yrw.js";
import { I as Input } from "./input-C6-Ta46A.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BxPdBi6V.js";
import { D as DashboardLayout } from "./layout-CdQJcF1a.js";
import { usePage, useForm } from "@inertiajs/react";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "lucide-react";
import "react";
import "./button-jZyzwgdo.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-label";
import "@radix-ui/react-select";
import "./sidebar-6wqj6oXO.js";
import "./separator-R7EO2G8T.js";
import "@radix-ui/react-separator";
import "./sheet-CuVwNO0O.js";
import "@radix-ui/react-dialog";
import "./tooltip-DswKljFZ.js";
import "@radix-ui/react-tooltip";
import "./main-BqrosZ6t.js";
import "next-themes";
import "sonner";
import "./appearance-Df_e7R4w.js";
import "./dropdown-menu-BIfW6iuW.js";
import "@radix-ui/react-dropdown-menu";
import "./language-BbuOCfpR.js";
import "./notification-BXalLCUz.js";
import "./popover-BV7JTqNd.js";
import "@radix-ui/react-popover";
import "date-fns";
import "./scroll-area-DPHRDnwL.js";
import "@radix-ui/react-scroll-area";
import "./app-logo-42nmPdEQ.js";
import "./accordion-DVAMjldm.js";
import "@radix-ui/react-accordion";
import "./route-DlE7FdTW.js";
import "./avatar-Cr_jqfHL.js";
import "@radix-ui/react-avatar";
import "./use-lang-44ndmTOc.js";
const SMTP = ({ smtp }) => {
  const { props } = usePage();
  const { translate } = props;
  const { settings, input, button } = translate;
  const { data, setData, post, errors, processing } = useForm({
    ...smtp.fields
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("settings.smtp.update", { id: smtp.id }));
  };
  return /* @__PURE__ */ jsxs("div", { className: "md:px-3", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold", children: settings.smtp_settings }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: settings.email_settings_description })
    ] }),
    /* @__PURE__ */ jsx(Card, { className: "p-4 sm:p-6", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "border-b pb-6", children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-4 text-xl font-semibold", children: input.mail_driver }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs(Label, { children: [
              input.mail_driver,
              " *"
            ] }),
            /* @__PURE__ */ jsxs(Select, { value: data.mail_mailer, onValueChange: (value) => setData("mail_mailer", value), children: [
              /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: input.select_option }) }),
              /* @__PURE__ */ jsx(SelectContent, { children: /* @__PURE__ */ jsx(SelectItem, { value: "smtp", children: "SMTP" }) })
            ] }),
            /* @__PURE__ */ jsx(InputError, { message: errors.mail_mailer })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs(Label, { children: [
              input.mail_host,
              " *"
            ] }),
            /* @__PURE__ */ jsx(
              Input,
              {
                name: "mail_host",
                value: data.mail_host || "",
                onChange: (e) => setData(e.target.name, e.target.value),
                placeholder: input.mail_host_placeholder
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.mail_host })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs(Label, { children: [
              input.mail_port,
              " *"
            ] }),
            /* @__PURE__ */ jsx(
              Input,
              {
                name: "mail_port",
                value: data.mail_port || "",
                onChange: (e) => setData(e.target.name, e.target.value),
                placeholder: input.mail_port_placeholder
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.mail_port })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { children: input.mail_encryption }),
            /* @__PURE__ */ jsxs(Select, { value: data.mail_encryption, onValueChange: (value) => setData("mail_encryption", value), children: [
              /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: input.select_option }) }),
              /* @__PURE__ */ jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsx(SelectItem, { value: "tls", children: "TLS" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "ssl", children: "SSL" })
              ] })
            ] }),
            /* @__PURE__ */ jsx(InputError, { message: errors.mail_encryption })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs(Label, { children: [
              input.mail_username,
              " *"
            ] }),
            /* @__PURE__ */ jsx(
              Input,
              {
                name: "mail_username",
                value: data.mail_username || "",
                onChange: (e) => setData(e.target.name, e.target.value),
                placeholder: input.mail_username_placeholder
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.mail_username })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs(Label, { children: [
              input.mail_password,
              " *"
            ] }),
            /* @__PURE__ */ jsx(
              Input,
              {
                name: "mail_password",
                value: data.mail_password || "",
                onChange: (e) => setData(e.target.name, e.target.value),
                placeholder: input.mail_password_placeholder,
                type: "password"
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.mail_password })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs(Label, { children: [
              input.mail_from_address,
              " *"
            ] }),
            /* @__PURE__ */ jsx(
              Input,
              {
                name: "mail_from_address",
                value: data.mail_from_address || "",
                onChange: (e) => setData(e.target.name, e.target.value),
                placeholder: input.mail_from_address_placeholder
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.mail_from_address })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs(Label, { children: [
              input.mail_from_name,
              " *"
            ] }),
            /* @__PURE__ */ jsx(
              Input,
              {
                name: "mail_from_name",
                value: data.mail_from_name || "",
                onChange: (e) => setData(e.target.name, e.target.value),
                placeholder: input.mail_from_name_placeholder
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.mail_from_name })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end", children: /* @__PURE__ */ jsx(LoadingButton, { loading: processing, children: button.save_changes }) })
    ] }) })
  ] });
};
SMTP.layout = (page) => /* @__PURE__ */ jsx(DashboardLayout, { children: page });
export {
  SMTP as default
};
