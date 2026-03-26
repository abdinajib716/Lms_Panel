import { jsxs, jsx } from "react/jsx-runtime";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-DVAMjldm.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Card } from "./card-D8SB2yrw.js";
import { D as DashboardLayout } from "./layout-CdQJcF1a.js";
import { usePage, Head, Link } from "@inertiajs/react";
import { MoveLeft, ArrowRight } from "lucide-react";
import "react";
import "@radix-ui/react-accordion";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
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
import "./route-DlE7FdTW.js";
import "./avatar-Cr_jqfHL.js";
import "@radix-ui/react-avatar";
import "./use-lang-44ndmTOc.js";
const Update = ({ language }) => {
  const { props } = usePage();
  const { translate } = props;
  const { settings, button } = translate;
  const groupedObjects = language.properties.reduce(
    (acc, property) => {
      if (!acc[property.group]) {
        acc[property.group] = [];
      }
      acc[property.group].push(property);
      return acc;
    },
    {}
  );
  return /* @__PURE__ */ jsxs("div", { className: "md:px-3", children: [
    /* @__PURE__ */ jsx(Head, { title: settings.translation_update }),
    /* @__PURE__ */ jsxs("div", { className: "mb-6 flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold", children: settings.language_properties }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: settings.translate_language_properties })
      ] }),
      /* @__PURE__ */ jsx(Link, { href: route("language.index"), children: /* @__PURE__ */ jsxs(Button, { children: [
        /* @__PURE__ */ jsx(MoveLeft, {}),
        button.back
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, defaultValue: "faq-0", className: "w-full", children: Object.entries(groupedObjects).map(([group, properties], index) => /* @__PURE__ */ jsxs(
      AccordionItem,
      {
        value: `faq-${index}`,
        className: "bg-background border-border mb-4 rounded-lg border px-6 shadow-sm",
        children: [
          /* @__PURE__ */ jsxs(AccordionTrigger, { className: "cursor-pointer py-4 text-base font-semibold capitalize hover:no-underline", children: [
            group,
            " ",
            settings.elements
          ] }),
          /* @__PURE__ */ jsx(AccordionContent, { className: "text-muted-foreground grid grid-cols-1 gap-4 pt-0 pb-4 text-sm sm:grid-cols-2 md:grid-cols-4", children: properties.map((property) => /* @__PURE__ */ jsx(Link, { href: route("language.property.edit", property.id), children: /* @__PURE__ */ jsxs(Card, { className: "hover:border-secondary-light hover:text-secondary-foreground flex items-center justify-between border-2 p-4 !shadow-none", children: [
            /* @__PURE__ */ jsx("p", { className: "font-medium", children: property.name }),
            /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
          ] }) })) })
        ]
      },
      `faq-${index}`
    )) }) })
  ] });
};
Update.layout = (page) => /* @__PURE__ */ jsx(DashboardLayout, { children: page });
export {
  Update as default
};
