import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { C as ChangeEmail, a as ChangePassword, F as ForgetPassword } from "./forget-password-3yhJCIlw.js";
import { T as Tabs } from "./tabs-CPx41tqt.js";
import { T as TabsList, a as TabsTrigger, b as TabsContent } from "./tabs-BOXC0x8t.js";
import { D as DashboardLayout } from "./layout-CdQJcF1a.js";
import { g as getQueryParams } from "./route-DlE7FdTW.js";
import { usePage, Head, router } from "@inertiajs/react";
import { nanoid } from "nanoid";
import UpdateProfile from "./update-profile-DQgtstPw.js";
import "./input-error-CEW4jhey.js";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "./card-D8SB2yrw.js";
import "react";
import "./input-C6-Ta46A.js";
import "./label-Dd_w2I6M.js";
import "@radix-ui/react-label";
import "class-variance-authority";
import "./loading-button-C4Hk_jCd.js";
import "lucide-react";
import "./button-jZyzwgdo.js";
import "@radix-ui/react-slot";
import "@radix-ui/react-tabs";
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
import "./avatar-Cr_jqfHL.js";
import "@radix-ui/react-avatar";
import "./use-lang-44ndmTOc.js";
import "./tag-input-BplrELmW.js";
import "@yaireo/tagify";
import "./textarea-DctRxpgE.js";
import "./inertia-BtwbgBI3.js";
const Account = ({ instructor, translate }) => {
  const page = usePage();
  const params = getQueryParams(page.url);
  const { button, settings } = translate;
  const tabs = [
    {
      id: nanoid(),
      slug: "profile-update",
      title: button.profile_update,
      Component: () => /* @__PURE__ */ jsx(UpdateProfile, { instructor })
    },
    {
      id: nanoid(),
      slug: "change-email",
      title: button.change_email,
      Component: ChangeEmail
    },
    {
      id: nanoid(),
      slug: "change-password",
      title: button.change_password,
      Component: ChangePassword
    },
    {
      id: nanoid(),
      slug: "forget-password",
      title: button.forget_password,
      Component: ForgetPassword
    }
    // {
    //    id: nanoid(),
    //    slug: 'delete-account',
    //    title: 'Delete Account',
    //    Component: DeleteUser,
    // },
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: settings.account_settings }),
    /* @__PURE__ */ jsxs(Tabs, { value: params["tab"] ?? tabs[0].slug, className: "grid grid-rows-1 gap-5 md:grid-cols-4 md:px-3", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(TabsList, { className: "horizontal-tabs-list", children: tabs.map(({ id, slug, title }) => /* @__PURE__ */ jsx(
        TabsTrigger,
        {
          value: slug,
          className: "horizontal-tabs-trigger",
          onClick: () => router.get(
            route("settings.account", {
              tab: slug
            })
          ),
          children: title
        },
        id
      )) }) }),
      /* @__PURE__ */ jsx("div", { className: "md:col-span-3", children: tabs.map(({ id, slug, Component }) => /* @__PURE__ */ jsx(TabsContent, { value: slug, className: "m-0", children: /* @__PURE__ */ jsx(Component, {}) }, id)) })
    ] })
  ] });
};
Account.layout = (page) => /* @__PURE__ */ jsx(DashboardLayout, { children: page });
export {
  Account as default
};
