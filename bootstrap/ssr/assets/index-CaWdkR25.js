import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { T as TableHeader } from "./table-header-C_F4x8YG.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Card } from "./card-D8SB2yrw.js";
import { D as Dialog, b as DialogContent } from "./dialog-DD5SXV81.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BxPdBi6V.js";
import { T as Table, a as TableBody, b as TableRow, c as TableCell } from "./table-tRsx9RfJ.js";
import { D as DashboardLayout } from "./layout-CdQJcF1a.js";
import { c as cn } from "./utils-BmtPBcb0.js";
import { Head, router } from "@inertiajs/react";
import { useReactTable, getFilteredRowModel, getSortedRowModel, getCoreRowModel, flexRender } from "@tanstack/react-table";
import * as React from "react";
import CustomPageCreateForm from "./custom-page-create-form-BA3WDWt0.js";
import TableColumn$1 from "./custom-pages-table-columns-C1A3FUTs.js";
import TableColumn from "./home-pages-table-columns-Ca0QNyv5.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-dialog";
import "lucide-react";
import "@radix-ui/react-label";
import "@radix-ui/react-select";
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
import "clsx";
import "tailwind-merge";
import "./input-error-CEW4jhey.js";
import "./loading-button-C4Hk_jCd.js";
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
import "./input-C6-Ta46A.js";
import "./radio-group-sSS5HHUP.js";
import "@radix-ui/react-radio-group";
import "./textarea-DctRxpgE.js";
import "./inertia-BtwbgBI3.js";
import "./delete-modal-BIvxKwRf.js";
const Pages = ({ pages, home, system, translate }) => {
  var _a, _b;
  const { settings, button, common, input } = translate;
  const [modal, setModal] = React.useState(false);
  const [systemType, setSystemType] = React.useState(system.sub_type);
  const homePages = React.useMemo(() => pages.filter((page) => page.type !== "inner_page"), [pages]);
  const customPages = React.useMemo(() => pages.filter((page) => page.type === "inner_page"), [pages]);
  const homeColumns = React.useMemo(() => TableColumn(home, system, translate), [home, system, translate]);
  const customColumns = React.useMemo(() => TableColumn$1(translate), []);
  const homePagesTable = useReactTable({
    data: homePages,
    columns: homeColumns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel()
  });
  const customPagesTable = useReactTable({
    data: customPages,
    columns: customColumns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel()
  });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: settings.page_settings }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto space-y-10 md:px-3", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-6 flex items-center justify-between", children: /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold", children: settings.page_settings }) }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium", children: settings.available_home_pages }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: settings.home_pages_description })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "system-type", children: common.type }),
            /* @__PURE__ */ jsxs(
              Select,
              {
                name: "system-type",
                value: system.sub_type,
                onValueChange: (value) => {
                  setModal(true);
                  setSystemType(value);
                },
                children: [
                  /* @__PURE__ */ jsx(SelectTrigger, { className: "cursor-pointer", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: input.system_type_placeholder }) }),
                  /* @__PURE__ */ jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsx(SelectItem, { value: "collaborative", className: "cursor-pointer", children: button.collaborative }),
                    /* @__PURE__ */ jsx(SelectItem, { value: "administrative", className: "cursor-pointer", children: button.administrative })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsx(Dialog, { open: modal, onOpenChange: setModal, children: /* @__PURE__ */ jsxs(DialogContent, { className: cn("px-6 py-8 sm:max-w-[425px]"), children: [
              /* @__PURE__ */ jsx("div", { className: "bg-destructive/5 rounded-xl p-4", children: /* @__PURE__ */ jsx("p", { className: "text-destructive text-center text-sm", children: settings.update_system_type_warning }) }),
              /* @__PURE__ */ jsxs("div", { className: "mb-0 flex items-center justify-center gap-6", children: [
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    onClick: () => setModal(false),
                    className: "text-destructive border-destructive border bg-transparent px-5 hover:bg-transparent",
                    children: "Cancel"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    type: "button",
                    onClick: () => {
                      router.post(
                        route("settings.system-type.update"),
                        {
                          sub_type: systemType
                        },
                        {
                          onSuccess: () => {
                            setModal(false);
                          }
                        }
                      );
                    },
                    className: "hover:bg-primary-hover bg-primary px-5",
                    children: "Submit"
                  }
                )
              ] })
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Table, { className: "border-border border-y last:border-b-0", children: [
          /* @__PURE__ */ jsx(TableHeader, { table: homePagesTable }),
          /* @__PURE__ */ jsx(TableBody, { children: ((_a = homePagesTable.getRowModel().rows) == null ? void 0 : _a.length) ? homePagesTable.getRowModel().rows.map((row) => {
            var _a2;
            return /* @__PURE__ */ jsx(
              TableRow,
              {
                "data-state": row.getIsSelected() && "selected",
                className: cn(row.original.slug === ((_a2 = home == null ? void 0 : home.fields) == null ? void 0 : _a2.page_slug) ? "bg-secondary-lighter" : "hover:bg-secondary-lighter"),
                children: row.getVisibleCells().map((cell) => /* @__PURE__ */ jsx(TableCell, { children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id))
              },
              row.id
            );
          }) : /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { className: "h-24 text-center", children: "No results." }) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start justify-between gap-4 p-4 md:flex-row md:items-center", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium", children: settings.custom_pages }),
            /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground text-sm", children: [
              "Page slug will be the page path. Example:",
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-secondary-foreground", children: "http://app-domain.com/cookie-policy" })
            ] })
          ] }),
          /* @__PURE__ */ jsx(CustomPageCreateForm, { title: "Add New Page", actionComponent: /* @__PURE__ */ jsx(Button, { children: "Add New Page" }) })
        ] }),
        /* @__PURE__ */ jsxs(Table, { className: "border-border border-y last:border-b-0", children: [
          /* @__PURE__ */ jsx(TableHeader, { table: customPagesTable }),
          /* @__PURE__ */ jsx(TableBody, { children: ((_b = customPagesTable.getRowModel().rows) == null ? void 0 : _b.length) ? customPagesTable.getRowModel().rows.map((row) => {
            var _a2;
            return /* @__PURE__ */ jsx(
              TableRow,
              {
                "data-state": row.getIsSelected() && "selected",
                className: cn(row.original.slug === ((_a2 = home == null ? void 0 : home.fields) == null ? void 0 : _a2.page_slug) ? "bg-secondary-lighter" : "hover:bg-secondary-lighter"),
                children: row.getVisibleCells().map((cell) => /* @__PURE__ */ jsx(TableCell, { children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id))
              },
              row.id
            );
          }) : /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { className: "h-24 text-center", children: "No results." }) }) })
        ] })
      ] })
    ] })
  ] });
};
Pages.layout = (page) => /* @__PURE__ */ jsx(DashboardLayout, { children: page });
export {
  Pages as default
};
