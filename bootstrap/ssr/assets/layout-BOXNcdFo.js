import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { D as DataSortModal } from "./data-sort-modal-CzOtsWqf.js";
import { S as Switch } from "./switch-Bijz4LyT.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Card } from "./card-D8SB2yrw.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { L as LandingLayout } from "./landing-layout-DaxsNL6G.js";
import { usePage, router } from "@inertiajs/react";
import { Settings } from "lucide-react";
import "nprogress";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "react";
import "./dialog-DD5SXV81.js";
import "@radix-ui/react-dialog";
import "./scroll-area-DPHRDnwL.js";
import "@radix-ui/react-scroll-area";
import "@radix-ui/react-switch";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-label";
import "./app-logo-42nmPdEQ.js";
import "lucide-react/dynamic";
import "./main-BqrosZ6t.js";
import "next-themes";
import "sonner";
import "./dropdown-menu-BIfW6iuW.js";
import "@radix-ui/react-dropdown-menu";
import "./use-auth-8FvJer_G.js";
import "./use-screen-B7SDA5zE.js";
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
const Layout = ({ page: innerPage, navbarHeight = true, children }) => {
  const { props } = usePage();
  const { customize } = props;
  const page = innerPage || props.page;
  const slug = page.slug;
  const customizable = slug === "about-us" || slug === "our-team" || page.type !== "inner_page";
  const sections = page.sections.filter(
    (section) => section.slug !== "footer_list_1" && section.slug !== "footer_list_2" && section.slug !== "footer_list_3"
  );
  const sectionActiveChange = (id, active) => {
    router.post(route("page.section.update", id), {
      active
    });
  };
  return /* @__PURE__ */ jsx(LandingLayout, { navbarHeight, customizable, children: customize ? /* @__PURE__ */ jsxs(Fragment, { children: [
    customize && page && /* @__PURE__ */ jsx("div", { className: "fixed top-20 right-6 z-20", children: /* @__PURE__ */ jsx(
      DataSortModal,
      {
        title: "Page Sections",
        data: sections,
        handler: /* @__PURE__ */ jsx(Button, { size: "icon", children: /* @__PURE__ */ jsx(Settings, { className: "h-7 w-7" }) }),
        onOrderChange: (newOrder, setOpen) => {
          router.post(
            route("page.section.sort"),
            {
              sortedData: newOrder
            },
            { preserveScroll: true, onSuccess: () => setOpen && setOpen(false) }
          );
        },
        renderContent: (item) => /* @__PURE__ */ jsxs(Card, { className: "flex w-full items-center justify-between px-4 py-3", children: [
          /* @__PURE__ */ jsx("p", { children: item.name }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "active", children: "Active" }),
            /* @__PURE__ */ jsx(
              Switch,
              {
                id: "active",
                defaultChecked: item.active,
                onCheckedChange: (checked) => sectionActiveChange(item.id, checked)
              }
            )
          ] })
        ] })
      }
    ) }),
    children
  ] }) : children });
};
export {
  Layout as default
};
