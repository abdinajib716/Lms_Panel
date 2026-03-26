import { jsxs, jsx } from "react/jsx-runtime";
import { T as Tabs } from "./tabs-CPx41tqt.js";
import { T as TabsList, a as TabsTrigger, b as TabsContent } from "./tabs-BOXC0x8t.js";
import { D as DashboardLayout } from "./layout-CdQJcF1a.js";
import { usePage } from "@inertiajs/react";
import Footer from "./footer-BbO8VRu8.js";
import Navbar from "./navbar-nazYdC9l.js";
import Style from "./style-C1G69tGV.js";
import Website from "./website-b9aUGG4O.js";
import "react";
import "@radix-ui/react-tabs";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "./sidebar-6wqj6oXO.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "lucide-react";
import "./button-jZyzwgdo.js";
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
import "./card-D8SB2yrw.js";
import "./data-sort-modal-CzOtsWqf.js";
import "nprogress";
import "./dialog-DD5SXV81.js";
import "./delete-modal-BIvxKwRf.js";
import "./switch-Bijz4LyT.js";
import "@radix-ui/react-switch";
import "./input-C6-Ta46A.js";
import "./label-Dd_w2I6M.js";
import "@radix-ui/react-label";
import "./select-BxPdBi6V.js";
import "@radix-ui/react-select";
import "./badge-B4crNM73.js";
import "lucide-react/dynamic";
import "./profile-toggle-D0g01Tbw.js";
import "nanoid";
import "./input-error-CEW4jhey.js";
import "./loading-button-C4Hk_jCd.js";
import "./theme-BnORSbS2.js";
import "@codemirror/language";
import "@codemirror/view";
import "@lezer/highlight";
import "@codemirror/autocomplete";
import "@codemirror/commands";
import "@codemirror/lang-css";
import "@codemirror/search";
import "@codemirror/state";
import "./combobox-CtfF3flG.js";
import "cmdk";
import "./textarea-DctRxpgE.js";
import "./inertia-BtwbgBI3.js";
const System = () => {
  const { props } = usePage();
  const { translate } = props;
  const { settings, button } = translate;
  return /* @__PURE__ */ jsxs("div", { className: "md:px-3", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold", children: settings.system_settings }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: settings.system_settings_description })
    ] }),
    /* @__PURE__ */ jsxs(Tabs, { defaultValue: "website", children: [
      /* @__PURE__ */ jsxs(TabsList, { className: "h-13 px-2", children: [
        /* @__PURE__ */ jsx(TabsTrigger, { value: "website", className: "h-10 cursor-pointer px-6", children: button.website }),
        /* @__PURE__ */ jsx(TabsTrigger, { value: "navbar", className: "h-10 cursor-pointer px-6", children: button.navbar }),
        /* @__PURE__ */ jsx(TabsTrigger, { value: "footer", className: "h-10 cursor-pointer px-6", children: button.footer }),
        /* @__PURE__ */ jsx(TabsTrigger, { value: "style", className: "h-10 cursor-pointer px-6", children: button.style })
      ] }),
      /* @__PURE__ */ jsx(TabsContent, { value: "website", children: /* @__PURE__ */ jsx(Website, {}) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "navbar", children: /* @__PURE__ */ jsx(Navbar, {}) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "footer", children: /* @__PURE__ */ jsx(Footer, {}) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "style", children: /* @__PURE__ */ jsx(Style, {}) })
    ] })
  ] });
};
System.layout = (page) => /* @__PURE__ */ jsx(DashboardLayout, { children: page });
export {
  System as default
};
