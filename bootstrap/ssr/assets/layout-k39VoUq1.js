import { jsx, jsxs } from "react/jsx-runtime";
import { T as Tabs } from "./tabs-CPx41tqt.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Card } from "./card-D8SB2yrw.js";
import { S as ScrollArea } from "./scroll-area-DPHRDnwL.js";
import { S as Sheet, a as SheetTrigger, b as SheetContent } from "./sheet-CuVwNO0O.js";
import { b as TabsContent } from "./tabs-BOXC0x8t.js";
import { u as useScreen } from "./use-screen-B7SDA5zE.js";
import { L as LandingLayout } from "./landing-layout-DaxsNL6G.js";
import { usePage } from "@inertiajs/react";
import { GraduationCap, Heart, UserCircle, Settings, ListFilter } from "lucide-react";
import { useState, useMemo } from "react";
import TabLists from "./tab-lists-x6p3WmGt.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-scroll-area";
import "@radix-ui/react-dialog";
import "@radix-ui/react-tabs";
import "./app-logo-42nmPdEQ.js";
import "lucide-react/dynamic";
import "./main-BqrosZ6t.js";
import "next-themes";
import "sonner";
import "./dropdown-menu-BIfW6iuW.js";
import "@radix-ui/react-dropdown-menu";
import "./use-auth-8FvJer_G.js";
import "./appearance-Df_e7R4w.js";
import "./language-BbuOCfpR.js";
import "./separator-R7EO2G8T.js";
import "@radix-ui/react-separator";
import "./notification-BXalLCUz.js";
import "./popover-BV7JTqNd.js";
import "@radix-ui/react-popover";
import "date-fns";
import "./profile-toggle-D0g01Tbw.js";
import "./avatar-Cr_jqfHL.js";
import "@radix-ui/react-avatar";
import "nanoid";
const Layout = ({ children, tab }) => {
  const { screen } = useScreen();
  const [open, setOpen] = useState(false);
  const { props } = usePage();
  const { translate } = props;
  const { button } = translate;
  const tabs = useMemo(
    () => [
      {
        id: "courses",
        name: button.courses,
        slug: "courses",
        Icon: GraduationCap
      },
      {
        id: "wishlist",
        name: button.wishlist,
        slug: "wishlist",
        Icon: Heart
      },
      {
        id: "profile",
        name: button.profile,
        slug: "profile",
        Icon: UserCircle
      },
      {
        id: "settings",
        name: button.settings,
        slug: "settings",
        Icon: Settings
      }
    ],
    []
  );
  return /* @__PURE__ */ jsx(LandingLayout, { customizable: false, language: true, children: /* @__PURE__ */ jsx("div", { className: "container py-6", children: /* @__PURE__ */ jsxs(Tabs, { value: tab, defaultValue: tabs[0].slug, className: "flex items-start gap-6 lg:gap-10", children: [
    screen > 768 && /* @__PURE__ */ jsx(Card, { className: "sticky top-24 w-full max-w-[270px] border-none p-4", children: /* @__PURE__ */ jsx(TabLists, { tabs }) }),
    /* @__PURE__ */ jsx("div", { className: "w-full overflow-hidden", children: tabs.map(({ id, slug }) => /* @__PURE__ */ jsxs(TabsContent, { value: slug, className: "m-0", children: [
      screen < 768 && /* @__PURE__ */ jsxs(Sheet, { open, onOpenChange: setOpen, children: [
        /* @__PURE__ */ jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { size: "icon", variant: "outline", children: /* @__PURE__ */ jsx(ListFilter, { className: "h-5 w-5" }) }) }),
        /* @__PURE__ */ jsx(SheetContent, { side: "left", className: "border-border w-[230px]", children: /* @__PURE__ */ jsx(ScrollArea, { className: "h-full", children: /* @__PURE__ */ jsx(TabLists, { tabs }) }) })
      ] }),
      children
    ] }, id)) })
  ] }) }) });
};
export {
  Layout as default
};
