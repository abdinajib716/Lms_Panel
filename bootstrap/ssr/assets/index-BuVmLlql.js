import { jsxs, jsx } from "react/jsx-runtime";
import { T as TableFilter } from "./table-filter-Fsgky9hE.js";
import { T as TableFooter } from "./table-footer-Bf3DvTcP.js";
import { T as TableHeader } from "./table-header-C_F4x8YG.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Card } from "./card-D8SB2yrw.js";
import { S as Separator } from "./separator-R7EO2G8T.js";
import { T as Table, a as TableBody, b as TableRow, c as TableCell } from "./table-tRsx9RfJ.js";
import { D as DashboardLayout } from "./layout-CdQJcF1a.js";
import { Link } from "@inertiajs/react";
import { useReactTable, getFilteredRowModel, getSortedRowModel, getCoreRowModel, flexRender } from "@tanstack/react-table";
import * as React from "react";
import AdminTableColumn from "./admin-table-columns-utuoga6P.js";
import InstructorTableColumn from "./instructor-table-columns-BtkfWYao.js";
import "./use-lang-44ndmTOc.js";
import "./debounce-ZFxqVthq.js";
import "./route-DlE7FdTW.js";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "lucide-react";
import "./dropdown-menu-BIfW6iuW.js";
import "@radix-ui/react-dropdown-menu";
import "./scroll-area-DPHRDnwL.js";
import "@radix-ui/react-scroll-area";
import "./table-page-size-Xj85uK4t.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-separator";
import "./sidebar-6wqj6oXO.js";
import "./sheet-CuVwNO0O.js";
import "@radix-ui/react-dialog";
import "./tooltip-DswKljFZ.js";
import "@radix-ui/react-tooltip";
import "./main-BqrosZ6t.js";
import "next-themes";
import "sonner";
import "./appearance-Df_e7R4w.js";
import "./language-BbuOCfpR.js";
import "./notification-BXalLCUz.js";
import "./popover-BV7JTqNd.js";
import "@radix-ui/react-popover";
import "date-fns";
import "./app-logo-42nmPdEQ.js";
import "./accordion-DVAMjldm.js";
import "@radix-ui/react-accordion";
import "./avatar-Cr_jqfHL.js";
import "@radix-ui/react-avatar";
import "./delete-modal-BIvxKwRf.js";
import "./dialog-DD5SXV81.js";
import "./badge-B4crNM73.js";
const Index = (props) => {
  const [sorting, setSorting] = React.useState([]);
  const { translate, enrollments } = props;
  const { button, dashboard } = translate;
  const table = useReactTable({
    data: enrollments.data,
    columns: props.auth.user.role === "admin" ? AdminTableColumn(translate) : InstructorTableColumn(translate),
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: { sorting }
  });
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Link, { href: route("enrollments.create"), children: /* @__PURE__ */ jsx(Button, { children: button.add_new_enrollment }) }),
    /* @__PURE__ */ jsx(Separator, { className: "my-6" }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(
        TableFilter,
        {
          data: enrollments,
          title: dashboard.course_list,
          globalSearch: true,
          tablePageSizes: [10, 15, 20, 25],
          routeName: "enrollments.index"
        }
      ),
      /* @__PURE__ */ jsxs(Table, { className: "border-border border-y", children: [
        /* @__PURE__ */ jsx(TableHeader, { table }),
        /* @__PURE__ */ jsx(TableBody, { children: enrollments.data && enrollments.data.length > 0 ? table.getRowModel().rows.map((row) => /* @__PURE__ */ jsx(TableRow, { "data-state": row.getIsSelected() && "selected", children: row.getVisibleCells().map((cell) => /* @__PURE__ */ jsx(TableCell, { children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id)) }, row.id)) : /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { className: "h-24 text-center", children: dashboard.no_results }) }) })
      ] }),
      /* @__PURE__ */ jsx(TableFooter, { className: "p-5 sm:p-7", routeName: "enrollments.index", paginationInfo: enrollments })
    ] })
  ] });
};
Index.layout = (page) => /* @__PURE__ */ jsx(DashboardLayout, { children: page });
export {
  Index as default
};
