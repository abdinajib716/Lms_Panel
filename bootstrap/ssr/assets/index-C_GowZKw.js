import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { D as DeleteModal } from "./delete-modal-BIvxKwRf.js";
import { S as Switch } from "./switch-Bijz4LyT.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Card } from "./card-D8SB2yrw.js";
import { D as DashboardLayout } from "./layout-CdQJcF1a.js";
import { usePage, Head, Link, router } from "@inertiajs/react";
import { Pencil, Trash2 } from "lucide-react";
import AddLanguage from "./add-language-Cpy9mzbu.js";
import "./dialog-DD5SXV81.js";
import "@radix-ui/react-dialog";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "react";
import "@radix-ui/react-switch";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./sidebar-6wqj6oXO.js";
import "./separator-R7EO2G8T.js";
import "@radix-ui/react-separator";
import "./sheet-CuVwNO0O.js";
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
import "./combobox-CtfF3flG.js";
import "cmdk";
import "./input-error-CEW4jhey.js";
import "./label-Dd_w2I6M.js";
import "@radix-ui/react-label";
const Index = () => {
  const { props } = usePage();
  const { translate } = props;
  const { settings, common } = translate;
  const languageStatus = (lang, checked) => {
    router.put(
      route("language.update", lang.id),
      { is_active: checked },
      {
        preserveScroll: true
      }
    );
  };
  const defaultLanguage = (lang) => {
    router.post(route("language.default", lang.id), {
      preserveScroll: true
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: settings.language_settings }),
    /* @__PURE__ */ jsxs(Card, { className: "mx-auto w-full max-w-[1000px] space-y-6 p-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-b-gray-200 pb-6", children: [
        /* @__PURE__ */ jsx("p", { className: "text-lg font-bold text-gray-900", children: settings.language_settings }),
        /* @__PURE__ */ jsx(AddLanguage, {})
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-5", children: props.langs.map(
        (lang) => lang.is_default ? /* @__PURE__ */ jsxs("div", { className: "mb-5 flex items-center justify-between rounded-md border border-gray-300 p-5", children: [
          /* @__PURE__ */ jsxs("h6", { className: "text-xl", children: [
            lang.name,
            " (",
            lang.nativeName,
            ")"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx("span", { className: "mr-4 rounded-full bg-blue-50 px-2 py-0.5 text-sm font-medium", children: common.default }),
            /* @__PURE__ */ jsx(Link, { href: route("language.edit", lang.code), children: /* @__PURE__ */ jsx(Button, { size: "icon", variant: "secondary", className: "mr-3 h-7 w-7 rounded-full text-blue-500", children: /* @__PURE__ */ jsx(Pencil, { className: "h-4 w-4" }) }) }),
            /* @__PURE__ */ jsx(Switch, { disabled: true, checked: true, name: lang.code })
          ] })
        ] }, lang.code) : /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between rounded-md border border-gray-300 p-5", children: [
          /* @__PURE__ */ jsxs("h6", { className: "text-xl", children: [
            lang.name,
            " (",
            lang.nativeName,
            ")"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            lang.is_active ? /* @__PURE__ */ jsx(Button, { onClick: () => defaultLanguage(lang), size: "sm", variant: "secondary", className: "rounded-full", children: "Set Default" }) : null,
            /* @__PURE__ */ jsx(Link, { href: route("language.edit", lang.code), children: /* @__PURE__ */ jsx(Button, { size: "icon", variant: "secondary", className: "h-7 w-7 rounded-full text-blue-500", children: /* @__PURE__ */ jsx(Pencil, { className: "h-4 w-4" }) }) }),
            /* @__PURE__ */ jsx(
              DeleteModal,
              {
                routePath: route("language.destroy", lang.id),
                actionComponent: /* @__PURE__ */ jsx(Button, { size: "icon", variant: "ghost", className: "bg-destructive/8 hover:bg-destructive/6 h-8 w-8 rounded-full p-0", children: /* @__PURE__ */ jsx(Trash2, { className: "text-destructive text-sm" }) })
              }
            ),
            /* @__PURE__ */ jsx(
              Switch,
              {
                name: lang.code,
                defaultChecked: lang.is_active,
                onCheckedChange: (checked) => languageStatus(lang, checked),
                className: "cursor-pointer"
              }
            )
          ] })
        ] }, lang.code)
      ) })
    ] })
  ] });
};
Index.layout = (page) => /* @__PURE__ */ jsx(DashboardLayout, { children: page });
export {
  Index as default
};
