import { jsxs, jsx } from "react/jsx-runtime";
import { T as TableHeader } from "./table-header-C_F4x8YG.js";
import { T as Table, a as TableBody, b as TableRow, c as TableCell } from "./table-tRsx9RfJ.js";
import { c as cn } from "./utils-BmtPBcb0.js";
import { usePage } from "@inertiajs/react";
import { useReactTable, getFilteredRowModel, getSortedRowModel, getCoreRowModel, flexRender } from "@tanstack/react-table";
import * as React from "react";
import InstructorsTableColumn from "./instructors-table-columns-DAEVgN3X.js";
import TableFilter from "./table-filter-CqFAGjch.js";
import TableFooter from "./table-footer-DvbT0AGV.js";
import "clsx";
import "tailwind-merge";
import "./avatar-Cr_jqfHL.js";
import "@radix-ui/react-avatar";
import "./button-jZyzwgdo.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "lucide-react";
import "./table-page-size-Xj85uK4t.js";
import "./dropdown-menu-BIfW6iuW.js";
import "@radix-ui/react-dropdown-menu";
import "./route-DlE7FdTW.js";
import "./debounce-ZFxqVthq.js";
import "./scroll-area-DPHRDnwL.js";
import "@radix-ui/react-scroll-area";
const Instructors = ({ instructors, selectedIds = [], onCourseSelect }) => {
  var _a;
  const page = usePage();
  const routeName = page.props.type === "demo" ? "home.demo" : "home";
  const [sorting, setSorting] = React.useState([]);
  const table = useReactTable({
    data: instructors.data,
    columns: InstructorsTableColumn(page.props.translate),
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: { sorting }
  });
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(
      TableFilter,
      {
        data: instructors,
        title: "Instructors",
        globalSearch: true,
        searchKey: "instructor",
        tablePageSizes: [10, 15, 20, 25],
        routeName
      }
    ),
    /* @__PURE__ */ jsxs(Table, { className: "border-border border-y", children: [
      /* @__PURE__ */ jsx(TableHeader, { table }),
      /* @__PURE__ */ jsx(TableBody, { children: ((_a = table.getRowModel().rows) == null ? void 0 : _a.length) ? table.getRowModel().rows.map((row) => /* @__PURE__ */ jsx(
        TableRow,
        {
          "data-state": row.getIsSelected() && "selected",
          className: cn("hover:bg-muted cursor-pointer", (selectedIds == null ? void 0 : selectedIds.includes(Number(row.original.id))) && "bg-secondary-light"),
          onClick: () => onCourseSelect && onCourseSelect(Number(row.original.id)),
          children: row.getVisibleCells().map((cell) => /* @__PURE__ */ jsx(TableCell, { children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id))
        },
        row.id
      )) : /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { className: "h-24 text-center", children: "No results." }) }) })
    ] }),
    /* @__PURE__ */ jsx(TableFooter, { className: "p-4", routeName, paginationInfo: instructors, paginationKey: "instructor" })
  ] });
};
export {
  Instructors as default
};
