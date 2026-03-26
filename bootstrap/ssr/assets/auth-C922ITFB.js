import { jsx, jsxs } from "react/jsx-runtime";
import { T as Tabs } from "./tabs-CPx41tqt.js";
import { T as TabsList, a as TabsTrigger, b as TabsContent } from "./tabs-BOXC0x8t.js";
import { D as DashboardLayout } from "./layout-CdQJcF1a.js";
import { g as getQueryParams } from "./route-DlE7FdTW.js";
import { usePage, router } from "@inertiajs/react";
import Google from "./google-B0JPCWZY.js";
import Recaptcha from "./recaptcha-DLgTJPad.js";
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
import "./avatar-Cr_jqfHL.js";
import "@radix-ui/react-avatar";
import "./use-lang-44ndmTOc.js";
import "./input-error-CEW4jhey.js";
import "./loading-button-C4Hk_jCd.js";
import "./switch-Bijz4LyT.js";
import "@radix-ui/react-switch";
import "./card-D8SB2yrw.js";
import "./input-C6-Ta46A.js";
import "./label-Dd_w2I6M.js";
import "@radix-ui/react-label";
import "./inertia-BtwbgBI3.js";
const Auth = ({ auths }) => {
  const { props, url } = usePage();
  const params = getQueryParams(url);
  const { translate } = props;
  const { common } = translate;
  const tabs = auths.map((auth) => {
    let Component;
    switch (auth.sub_type) {
      case "google":
        Component = Google;
        break;
      case "recaptcha":
        Component = Recaptcha;
        break;
      default:
        Component = ({ auth: auth2 }) => /* @__PURE__ */ jsx("div", { children: "No component found" });
        break;
    }
    return {
      ...auth,
      Component
    };
  });
  return /* @__PURE__ */ jsx("section", { className: "md:px-3", children: /* @__PURE__ */ jsxs(Tabs, { value: params["tab"] ?? tabs[0].sub_type, className: "grid grid-rows-1 gap-5 md:grid-cols-4", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(TabsList, { className: "horizontal-tabs-list", children: tabs.map(({ id, title, sub_type }) => /* @__PURE__ */ jsx(
      TabsTrigger,
      {
        value: sub_type,
        className: "horizontal-tabs-trigger",
        onClick: () => router.get(
          route("settings.auth0", {
            tab: sub_type
          })
        ),
        children: title
      },
      id
    )) }) }),
    /* @__PURE__ */ jsx("div", { className: "md:col-span-3", children: tabs.map((auth) => /* @__PURE__ */ jsx(TabsContent, { value: auth.sub_type, className: "m-0", children: /* @__PURE__ */ jsx(auth.Component, { auth }, auth.id) }, auth.id)) })
  ] }) });
};
Auth.layout = (page) => /* @__PURE__ */ jsx(DashboardLayout, { children: page });
export {
  Auth as default
};
