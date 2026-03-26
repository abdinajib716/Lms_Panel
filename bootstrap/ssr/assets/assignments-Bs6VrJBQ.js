import { jsx, jsxs } from "react/jsx-runtime";
import { T as TableHeader } from "./table-header-C_F4x8YG.js";
import { T as Table, a as TableBody, b as TableRow, c as TableCell } from "./table-tRsx9RfJ.js";
import { usePage } from "@inertiajs/react";
import { useReactTable, getFilteredRowModel, getSortedRowModel, getCoreRowModel, flexRender } from "@tanstack/react-table";
import { useState, useMemo } from "react";
import { AssignmentColumns } from "./assignment-columns-CiuuLSWz.js";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "./badge-B4crNM73.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "date-fns";
import "lucide-react";
import "./assignment-dialog-Di2nG0gO.js";
import "./button-jZyzwgdo.js";
import "./dialog-DD5SXV81.js";
import "@radix-ui/react-dialog";
import "./tabs-BOXC0x8t.js";
import "@radix-ui/react-tabs";
import "./assignment-details-v4A17tNN.js";
import "./client-renderer-CUBmzaOS.js";
/* empty css               */
import "react-icons/lu";
import "hast-util-to-jsx-runtime";
import "shiki/bundle/full";
import "rehype-parse";
import "rehype-react";
import "unified";
import "unist-util-visit";
import "./assignment-submission-2iL5cT9C.js";
import "./assignment-submission-form-CbF_d9Rg.js";
import "./chunked-uploader-input-MwXGR7K4.js";
import "./input-C6-Ta46A.js";
import "axios";
import "sonner";
import "./input-error-CEW4jhey.js";
import "./loading-button-C4Hk_jCd.js";
import "./label-Dd_w2I6M.js";
import "@radix-ui/react-label";
import "./select-BxPdBi6V.js";
import "@radix-ui/react-select";
import "./textarea-DctRxpgE.js";
const Assignments = () => {
  var _a;
  const { props } = usePage();
  const { assignments } = props;
  const [sorting, setSorting] = useState([]);
  const assignmentColumns = useMemo(() => AssignmentColumns, []);
  const table = useReactTable({
    data: assignments,
    columns: assignmentColumns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: { sorting }
  });
  return /* @__PURE__ */ jsx("div", { className: "space-y-6", children: assignments && assignments.length > 0 ? /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-lg border", children: /* @__PURE__ */ jsxs(Table, { className: "border-border border-y", children: [
    /* @__PURE__ */ jsx(TableHeader, { table }),
    /* @__PURE__ */ jsx(TableBody, { children: ((_a = table.getRowModel().rows) == null ? void 0 : _a.length) ? table.getRowModel().rows.map((row) => /* @__PURE__ */ jsx(TableRow, { "data-state": row.getIsSelected() && "selected", children: row.getVisibleCells().map((cell) => /* @__PURE__ */ jsx(TableCell, { children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id)) }, row.id)) : /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { className: "h-24 text-center", children: "No assignments found." }) }) })
  ] }) }) : /* @__PURE__ */ jsx("div", { className: "py-12 text-center", children: /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg", children: "No assignments available for this course yet." }) }) });
};
export {
  Assignments as default
};
