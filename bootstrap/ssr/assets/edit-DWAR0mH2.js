import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { B as Badge } from "./badge-B4crNM73.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { D as DashboardLayout } from "./layout-CdQJcF1a.js";
import { Head, Link } from "@inertiajs/react";
import { ArrowLeft, Eye } from "lucide-react";
import JobCircularForm from "./job-circular-form-CVktTD4r.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "react";
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
import "./combobox-CtfF3flG.js";
import "cmdk";
import "./datetime-picker-Bln2jqxu.js";
import "react-day-picker";
import "./select-BxPdBi6V.js";
import "@radix-ui/react-select";
import "./input-error-CEW4jhey.js";
import "./switch-Bijz4LyT.js";
import "@radix-ui/react-switch";
import "./tag-input-BplrELmW.js";
import "@yaireo/tagify";
import "./Editor-iiR11EW9.js";
/* empty css               */
import "react-icons/tb";
import "react-icons/ai";
import "@tiptap/react";
import "prettier/plugins/html";
import "prettier/standalone";
import "@codemirror/lang-html";
import "@codemirror/state";
import "@codemirror/view";
import "codemirror";
import "./theme-BnORSbS2.js";
import "@codemirror/language";
import "@lezer/highlight";
import "react-dom";
import "react-colorful";
import "@tiptap/extension-bubble-menu";
import "@tiptap/pm/state";
import "@tiptap/starter-kit";
import "@tiptap/extension-character-count";
import "@tiptap/extension-underline";
import "@tiptap/extension-placeholder";
import "@tiptap/extension-text-align";
import "@tiptap/extension-text-style";
import "@tiptap/extension-subscript";
import "@tiptap/extension-superscript";
import "@tiptap/extension-bullet-list";
import "@tiptap/extension-ordered-list";
import "@tiptap/extension-list-keymap";
import "@tiptap/extension-color";
import "@tiptap/extension-highlight";
import "@tiptap/extension-code-block-lowlight";
import "@tiptap/core";
import "@tiptap/pm/view";
import "highlight.js/lib/core";
import "lowlight";
import "highlight.js/lib/languages/plaintext";
import "@tiptap/pm/model";
import "@tiptap/extension-image";
import "@tiptap/extension-link";
import "@tiptap/extension-table";
import "@tiptap/extension-table-cell";
import "@tiptap/extension-table-header";
import "@tiptap/extension-table-row";
import "./card-D8SB2yrw.js";
import "./input-C6-Ta46A.js";
import "./label-Dd_w2I6M.js";
import "@radix-ui/react-label";
const EditJobCircular = ({ jobCircular, statuses, translate }) => {
  const { button, dashboard, common } = translate;
  const getStatusBadge = (status) => {
    const variants = {
      draft: "outline",
      active: "default",
      paused: "secondary",
      closed: "destructive",
      expired: "destructive"
    };
    return /* @__PURE__ */ jsx(Badge, { variant: variants[status] || "outline", children: statuses[status] || status });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: `Edit ${jobCircular.title}` }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsx(Button, { variant: "outline", size: "icon", asChild: true, children: /* @__PURE__ */ jsx(Link, { href: route("job-circulars.index"), children: /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }) }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold", children: button.edit_job }),
            getStatusBadge(jobCircular.status)
          ] })
        ] }),
        /* @__PURE__ */ jsx(Button, { variant: "outline", asChild: true, children: /* @__PURE__ */ jsxs(Link, { href: route("job-circulars.show", jobCircular.id), children: [
          /* @__PURE__ */ jsx(Eye, { className: "mr-2 h-4 w-4" }),
          common.preview
        ] }) })
      ] }),
      /* @__PURE__ */ jsx(JobCircularForm, { jobCircular })
    ] })
  ] });
};
EditJobCircular.layout = (page) => /* @__PURE__ */ jsx(DashboardLayout, { children: page });
export {
  EditJobCircular as default
};
