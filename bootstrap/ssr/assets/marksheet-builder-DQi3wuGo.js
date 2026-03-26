import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { B as Button } from "./button-jZyzwgdo.js";
import { D as DashboardLayout } from "./layout-CdQJcF1a.js";
import { Head, Link } from "@inertiajs/react";
import { ArrowLeft } from "lucide-react";
import MarksheetBuilderForm from "./marksheet-builder-form-Ctiuezbd.js";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
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
import "./input-error-CEW4jhey.js";
import "./card-D8SB2yrw.js";
import "./input-C6-Ta46A.js";
import "./label-Dd_w2I6M.js";
import "@radix-ui/react-label";
import "./select-BxPdBi6V.js";
import "@radix-ui/react-select";
import "./textarea-DctRxpgE.js";
import "./marksheet-preview-DooqmHxo.js";
const MarksheetBuilder = ({ template }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: `${template ? "Edit" : "Create"} Marksheet Template` }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold", children: [
            template ? "Edit" : "Create",
            " Marksheet Template"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Customize your marksheet design and content" })
        ] }),
        /* @__PURE__ */ jsx(Link, { href: route("marksheet.templates.index"), children: /* @__PURE__ */ jsxs(Button, { variant: "outline", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
          "Back to Templates"
        ] }) })
      ] }),
      /* @__PURE__ */ jsx(MarksheetBuilderForm, { template })
    ] })
  ] });
};
MarksheetBuilder.layout = (page) => /* @__PURE__ */ jsx(DashboardLayout, { children: page });
export {
  MarksheetBuilder as default
};
