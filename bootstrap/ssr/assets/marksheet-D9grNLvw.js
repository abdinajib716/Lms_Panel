import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Card, a as CardHeader, c as CardTitle, d as CardDescription, b as CardContent } from "./card-D8SB2yrw.js";
import { D as Dialog, b as DialogContent, c as DialogHeader, d as DialogTitle } from "./dialog-DD5SXV81.js";
import { S as ScrollArea } from "./scroll-area-DPHRDnwL.js";
import { D as DashboardLayout } from "./layout-CdQJcF1a.js";
import { usePage, Head, Link, router } from "@inertiajs/react";
import { Plus, ClipboardList, Check, Edit, Trash2 } from "lucide-react";
import { useState } from "react";
import MarksheetPreview from "./marksheet-preview-DooqmHxo.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-dialog";
import "@radix-ui/react-scroll-area";
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
import "./app-logo-42nmPdEQ.js";
import "./accordion-DVAMjldm.js";
import "@radix-ui/react-accordion";
import "./route-DlE7FdTW.js";
import "./avatar-Cr_jqfHL.js";
import "@radix-ui/react-avatar";
import "./use-lang-44ndmTOc.js";
const MarksheetIndex = () => {
  const { props } = usePage();
  const { marksheetTemplates } = props;
  const [previewMarksheet, setPreviewMarksheet] = useState(null);
  const handleMarksheetActivate = (templateId) => {
    router.post(
      route("marksheet.templates.activate", templateId),
      {},
      {
        preserveScroll: true
      }
    );
  };
  const handleMarksheetDelete = (templateId) => {
    if (confirm("Are you sure you want to delete this marksheet template?")) {
      router.delete(route("marksheet.templates.destroy", templateId), {
        preserveScroll: true
      });
    }
  };
  const handleMarksheetPreview = (template) => {
    setPreviewMarksheet(template);
  };
  const handleCloseMarksheetPreview = () => {
    setPreviewMarksheet(null);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Certificate & Marksheet Templates" }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold", children: "Marksheet Templates" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Design marksheets showing course grades" })
        ] }),
        /* @__PURE__ */ jsx(Link, { href: route("marksheet.templates.create"), children: /* @__PURE__ */ jsxs(Button, { children: [
          /* @__PURE__ */ jsx(Plus, { className: "mr-2 h-4 w-4" }),
          "Create Template"
        ] }) })
      ] }),
      marksheetTemplates.length === 0 ? /* @__PURE__ */ jsx(Card, { className: "p-12", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center text-center", children: [
        /* @__PURE__ */ jsx(ClipboardList, { className: "text-muted-foreground mb-4 h-16 w-16" }),
        /* @__PURE__ */ jsx("h3", { className: "mb-2 text-xl font-semibold", children: "No marksheet templates yet" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: "Create your first marksheet template to get started" }),
        /* @__PURE__ */ jsx(Link, { href: route("marksheet.templates.create"), children: /* @__PURE__ */ jsxs(Button, { children: [
          /* @__PURE__ */ jsx(Plus, { className: "mr-2 h-4 w-4" }),
          "Create Your First Template"
        ] }) })
      ] }) }) : /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: marksheetTemplates.map((template) => /* @__PURE__ */ jsxs(Card, { className: `relative ${template.is_active ? "ring-primary ring-2" : ""}`, children: [
        template.is_active && /* @__PURE__ */ jsxs("div", { className: "bg-primary text-primary-foreground absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-semibold", children: [
          /* @__PURE__ */ jsx(Check, { className: "mr-1 inline h-3 w-3" }),
          "Active"
        ] }),
        /* @__PURE__ */ jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center", children: [
            /* @__PURE__ */ jsx(ClipboardList, { className: "mr-2 h-5 w-5" }),
            template.name
          ] }),
          /* @__PURE__ */ jsxs(CardDescription, { children: [
            "Created: ",
            new Date(template.created_at).toLocaleDateString()
          ] })
        ] }),
        /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "cursor-pointer rounded-lg border-2 p-4 text-center transition-all hover:shadow-md",
              style: {
                backgroundColor: template.template_data.backgroundColor,
                borderColor: template.template_data.borderColor
              },
              onClick: () => handleMarksheetPreview(template),
              children: [
                /* @__PURE__ */ jsx("div", { className: "mb-2 text-xs font-bold", style: { color: template.template_data.primaryColor }, children: template.template_data.headerText }),
                /* @__PURE__ */ jsx("div", { className: "text-[8px]", style: { color: template.template_data.secondaryColor }, children: template.template_data.institutionName })
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx("div", { className: "h-4 w-4 rounded border", style: { backgroundColor: template.template_data.primaryColor } }),
              /* @__PURE__ */ jsx("span", { className: "text-xs", children: "Primary" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx("div", { className: "h-4 w-4 rounded border", style: { backgroundColor: template.template_data.secondaryColor } }),
              /* @__PURE__ */ jsx("span", { className: "text-xs", children: "Secondary" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
            !template.is_active && /* @__PURE__ */ jsxs(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "flex-1",
                onClick: () => handleMarksheetActivate(template.id),
                children: [
                  /* @__PURE__ */ jsx(Check, { className: "mr-1 h-3 w-3" }),
                  "Activate"
                ]
              }
            ),
            /* @__PURE__ */ jsx(Button, { asChild: true, size: "sm", variant: "outline", className: "flex-1", children: /* @__PURE__ */ jsxs(Link, { href: route("marksheet.templates.edit", template.id), children: [
              /* @__PURE__ */ jsx(Edit, { className: "mr-1 h-3 w-3" }),
              "Edit"
            ] }) }),
            /* @__PURE__ */ jsx(Button, { size: "sm", variant: "destructive", onClick: () => handleMarksheetDelete(template.id), children: /* @__PURE__ */ jsx(Trash2, { className: "h-3 w-3" }) })
          ] })
        ] })
      ] }, template.id)) })
    ] }),
    previewMarksheet && /* @__PURE__ */ jsx(Dialog, { open: !!previewMarksheet, onOpenChange: (open) => !open && handleCloseMarksheetPreview(), children: /* @__PURE__ */ jsx(DialogContent, { className: "w-full gap-0 overflow-y-auto p-0 sm:max-w-4xl", children: /* @__PURE__ */ jsx(ScrollArea, { className: "max-h-[90vh]", children: /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
      /* @__PURE__ */ jsx(DialogHeader, { className: "mb-6", children: /* @__PURE__ */ jsxs(DialogTitle, { children: [
        "Preview: ",
        previewMarksheet == null ? void 0 : previewMarksheet.name
      ] }) }),
      /* @__PURE__ */ jsx(
        MarksheetPreview,
        {
          template: previewMarksheet,
          studentName: "John Doe",
          courseName: "Sample Course Name",
          completionDate: "January 1, 2025"
        }
      )
    ] }) }) }) })
  ] });
};
MarksheetIndex.layout = (page) => /* @__PURE__ */ jsx(DashboardLayout, { children: page });
export {
  MarksheetIndex as default
};
