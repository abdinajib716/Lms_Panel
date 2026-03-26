import { jsxs, jsx } from "react/jsx-runtime";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Card, b as CardContent, a as CardHeader, c as CardTitle } from "./card-D8SB2yrw.js";
import { I as Input } from "./input-C6-Ta46A.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { R as RadioGroup, a as RadioGroupItem } from "./radio-group-sSS5HHUP.js";
import { S as Separator } from "./separator-R7EO2G8T.js";
import { D as DashboardLayout } from "./layout-CdQJcF1a.js";
import { usePage, useForm } from "@inertiajs/react";
import { Settings, Video } from "lucide-react";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
import "@radix-ui/react-radio-group";
import "@radix-ui/react-separator";
import "./sidebar-6wqj6oXO.js";
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
const LiveClass = ({ liveClass }) => {
  const { props } = usePage();
  const { translate } = props;
  const { settings, input, button } = translate;
  const { data, setData, post, errors, processing } = useForm({
    ...liveClass.fields
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("settings.live-class.update", liveClass.id), {
      preserveScroll: true
    });
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6 md:px-3", children: [
    /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "px-6 py-4", children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxs("h1", { className: "flex items-center gap-2 text-2xl font-bold", children: [
      /* @__PURE__ */ jsx(Settings, { className: "h-6 w-6" }),
      settings.live_class_settings
    ] }) }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Video, { className: "h-5 w-5" }),
          settings.configure_zoom
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxs(Label, { htmlFor: "zoom_account_email", children: [
              input.account_email,
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
            ] }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "zoom_account_email",
                type: "email",
                value: data.zoom_account_email,
                onChange: (e) => setData("zoom_account_email", e.target.value),
                placeholder: input.zoom_account_email_placeholder,
                required: true
              }
            ),
            errors.zoom_account_email && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500", children: errors.zoom_account_email })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxs(Label, { htmlFor: "zoom_account_id", children: [
              input.account_id,
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
            ] }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "zoom_account_id",
                type: "text",
                value: data.zoom_account_id,
                onChange: (e) => setData("zoom_account_id", e.target.value),
                placeholder: input.zoom_account_id_placeholder,
                required: true
              }
            ),
            errors.zoom_account_id && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500", children: errors.zoom_account_id })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxs(Label, { htmlFor: "zoom_client_id", children: [
              input.client_id,
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
            ] }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "zoom_client_id",
                type: "text",
                value: data.zoom_client_id,
                onChange: (e) => setData("zoom_client_id", e.target.value),
                placeholder: input.zoom_client_id_placeholder,
                required: true
              }
            ),
            errors.zoom_client_id && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500", children: errors.zoom_client_id })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxs(Label, { htmlFor: "zoom_client_secret", children: [
              "Client Secret ",
              /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
            ] }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "zoom_client_secret",
                type: "password",
                value: data.zoom_client_secret,
                onChange: (e) => setData("zoom_client_secret", e.target.value),
                placeholder: input.zoom_client_secret_placeholder,
                required: true
              }
            ),
            errors.zoom_client_secret && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500", children: errors.zoom_client_secret })
          ] }),
          /* @__PURE__ */ jsx(Separator, {}),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs(Label, { children: [
              "Do you want to use Web SDK for your live class? ",
              /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
            ] }),
            /* @__PURE__ */ jsxs(
              RadioGroup,
              {
                value: data.zoom_web_sdk ? "activate" : "deactivate",
                onValueChange: (value) => setData("zoom_web_sdk", value === "activate" ? true : false),
                className: "flex gap-6",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                    /* @__PURE__ */ jsx(RadioGroupItem, { className: "cursor-pointer", value: "activate", id: "activate" }),
                    /* @__PURE__ */ jsx(Label, { htmlFor: "activate", children: "Yes" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                    /* @__PURE__ */ jsx(RadioGroupItem, { className: "cursor-pointer", value: "deactivate", id: "deactivate" }),
                    /* @__PURE__ */ jsx(Label, { htmlFor: "deactivate", children: "No" })
                  ] })
                ]
              }
            ),
            errors.zoom_web_sdk && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500", children: errors.zoom_web_sdk })
          ] }),
          data.zoom_web_sdk && /* @__PURE__ */ jsxs("div", { className: "space-y-4 rounded-lg border bg-blue-50 p-4", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-medium text-blue-900", children: "Meeting SDK Credentials" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxs(Label, { children: [
                "Meeting SDK Client ID ",
                /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
              ] }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  required: true,
                  type: "text",
                  value: data.zoom_sdk_client_id,
                  onChange: (e) => setData("zoom_sdk_client_id", e.target.value),
                  placeholder: "Enter your Meeting SDK client ID"
                }
              ),
              errors.zoom_sdk_client_id && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500", children: errors.zoom_sdk_client_id })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxs(Label, { children: [
                "Meeting SDK Client Secret ",
                /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
              ] }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  required: true,
                  type: "password",
                  value: data.zoom_sdk_client_secret,
                  onChange: (e) => setData("zoom_sdk_client_secret", e.target.value),
                  placeholder: "Enter your Meeting SDK client secret"
                }
              ),
              errors.zoom_sdk_client_secret && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500", children: errors.zoom_sdk_client_secret })
            ] })
          ] }),
          /* @__PURE__ */ jsx(Button, { type: "submit", disabled: processing, className: "w-full sm:w-auto", children: processing ? "Saving..." : "Save Changes" })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: "Setup Instructions" }) }),
          /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "mb-2 font-medium", children: "Step 1: Create Zoom App" }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Go to the Zoom Marketplace and create a Server-to-Server OAuth app." })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "mb-2 font-medium", children: "Step 2: Get Credentials" }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Copy your Account ID, Client ID, and Client Secret from your app settings." })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "mb-2 font-medium", children: "Step 3: Web SDK (Optional)" }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "If you want to embed Zoom meetings directly in your website, enable Web SDK and provide Meeting SDK credentials." })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: "Required Scopes" }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-sm", children: [
            /* @__PURE__ */ jsx("li", { children: "• meeting:write" }),
            /* @__PURE__ */ jsx("li", { children: "• meeting:read" }),
            /* @__PURE__ */ jsx("li", { children: "• user:read" })
          ] }) })
        ] })
      ] })
    ] })
  ] });
};
LiveClass.layout = (page) => /* @__PURE__ */ jsx(DashboardLayout, { children: page });
export {
  LiveClass as default
};
