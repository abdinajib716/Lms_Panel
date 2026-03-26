import { jsx, jsxs } from "react/jsx-runtime";
import { T as TableHeader } from "./table-header-C_F4x8YG.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Card } from "./card-D8SB2yrw.js";
import { T as Table, a as TableBody, b as TableRow, c as TableCell } from "./table-tRsx9RfJ.js";
import { usePage } from "@inertiajs/react";
import { useReactTable, getFilteredRowModel, getSortedRowModel, getCoreRowModel, flexRender } from "@tanstack/react-table";
import { Plus } from "lucide-react";
import * as React from "react";
import AssignmentTableColumn from "./assignment-table-column-JNuRtEMA.js";
import AssignmentForm from "./assignment-form-BGWLhMK-.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "./badge-B4crNM73.js";
import "./dropdown-menu-BIfW6iuW.js";
import "@radix-ui/react-dropdown-menu";
import "date-fns";
import "./datetime-picker-Bln2jqxu.js";
import "react-day-picker";
import "./popover-BV7JTqNd.js";
import "@radix-ui/react-popover";
import "./select-BxPdBi6V.js";
import "@radix-ui/react-select";
import "./use-lang-44ndmTOc.js";
import "./input-error-CEW4jhey.js";
import "./loading-button-C4Hk_jCd.js";
import "./Editor-iiR11EW9.js";
/* empty css               */
import "@radix-ui/react-tooltip";
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
import "./checkbox-CO4DegBm.js";
import "@radix-ui/react-checkbox";
import "./dialog-DD5SXV81.js";
import "@radix-ui/react-dialog";
import "./input-C6-Ta46A.js";
import "./label-Dd_w2I6M.js";
import "@radix-ui/react-label";
import "./scroll-area-DPHRDnwL.js";
import "@radix-ui/react-scroll-area";
import "./inertia-BtwbgBI3.js";
const Assignment = () => {
  var _a;
  const { props } = usePage();
  const { course, translate, tab } = props;
  const [sorting, setSorting] = React.useState([]);
  const table = useReactTable({
    data: course.assignments,
    columns: AssignmentTableColumn(tab, translate, course.enrollments_count || 0),
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: { sorting }
  });
  return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1", children: /* @__PURE__ */ jsxs(Card, { className: "space-y-6 overflow-hidden p-4 sm:p-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold", children: "Assignments" }),
      /* @__PURE__ */ jsx(
        AssignmentForm,
        {
          title: "Add Assignment",
          handler: /* @__PURE__ */ jsxs(Button, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsx("span", { children: "Add Assignment" })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxs(Table, { className: "border-border min-w-3xl border-y", children: [
      /* @__PURE__ */ jsx(TableHeader, { table }),
      /* @__PURE__ */ jsx(TableBody, { children: ((_a = table.getRowModel().rows) == null ? void 0 : _a.length) ? table.getRowModel().rows.map((row) => /* @__PURE__ */ jsx(TableRow, { "data-state": row.getIsSelected() && "selected", children: row.getVisibleCells().map((cell) => /* @__PURE__ */ jsx(TableCell, { children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id)) }, row.id)) : /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { className: "h-24 text-center", children: translate.frontend.no_results }) }) })
    ] }) })
  ] }) });
};
export {
  Assignment as default
};
