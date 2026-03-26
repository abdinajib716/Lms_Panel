import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { T as TableFilter } from "./table-filter-Fsgky9hE.js";
import { T as TableFooter } from "./table-footer-Bf3DvTcP.js";
import { T as TableHeader } from "./table-header-C_F4x8YG.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Card, a as CardHeader, c as CardTitle, b as CardContent } from "./card-D8SB2yrw.js";
import { T as Table, a as TableBody, b as TableRow, c as TableCell } from "./table-tRsx9RfJ.js";
import { D as DashboardLayout } from "./layout-CdQJcF1a.js";
import { usePage, Head, Link } from "@inertiajs/react";
import { useReactTable, getFilteredRowModel, getSortedRowModel, getCoreRowModel, flexRender } from "@tanstack/react-table";
import { Plus, BookOpen, Eye, Edit, Archive } from "lucide-react";
import * as React from "react";
import TableColumn from "./table-columns-CMZRQ4d-.js";
import "./use-lang-44ndmTOc.js";
import "./debounce-ZFxqVthq.js";
import "./route-DlE7FdTW.js";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "./dropdown-menu-BIfW6iuW.js";
import "@radix-ui/react-dropdown-menu";
import "./scroll-area-DPHRDnwL.js";
import "@radix-ui/react-scroll-area";
import "./table-page-size-Xj85uK4t.js";
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
const BlogsIndex = () => {
  var _a;
  const { props } = usePage();
  const { blogs, statistics, translate } = props;
  const { dashboard, frontend } = translate;
  const [sorting, setSorting] = React.useState([]);
  const table = useReactTable({
    data: blogs.data,
    columns: TableColumn(props.translate),
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: { sorting }
  });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: dashboard.blog }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold", children: dashboard.blog }),
        /* @__PURE__ */ jsx(Button, { asChild: true, children: /* @__PURE__ */ jsxs(Link, { href: route("blogs.create"), children: [
          /* @__PURE__ */ jsx(Plus, { className: "mr-2 h-4 w-4" }),
          dashboard.add_new_blog
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4 md:grid-cols-4", children: [
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
            /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: dashboard.total_blogs }),
            /* @__PURE__ */ jsx(BookOpen, { className: "text-muted-foreground h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: statistics.total }) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
            /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: dashboard.published }),
            /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4 text-green-600" })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-green-600", children: statistics.published }) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
            /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: dashboard.draft }),
            /* @__PURE__ */ jsx(Edit, { className: "h-4 w-4 text-yellow-600" })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-yellow-600", children: statistics.draft }) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
            /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: dashboard.archived }),
            /* @__PURE__ */ jsx(Archive, { className: "h-4 w-4 text-gray-600" })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-gray-600", children: statistics.archived }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(TableFilter, { data: blogs, title: dashboard.blog, globalSearch: true, tablePageSizes: [10, 15, 20, 25], routeName: "blogs.index" }),
        /* @__PURE__ */ jsxs(Table, { className: "border-border border-y", children: [
          /* @__PURE__ */ jsx(TableHeader, { table }),
          /* @__PURE__ */ jsx(TableBody, { children: ((_a = table.getRowModel().rows) == null ? void 0 : _a.length) ? table.getRowModel().rows.map((row) => /* @__PURE__ */ jsx(TableRow, { "data-state": row.getIsSelected() && "selected", children: row.getVisibleCells().map((cell) => /* @__PURE__ */ jsx(TableCell, { children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id)) }, row.id)) : /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { colSpan: table.getAllColumns().length, className: "h-24 text-center", children: frontend.no_results }) }) })
        ] }),
        /* @__PURE__ */ jsx(TableFooter, { className: "p-5 sm:p-7", routeName: "blogs.index", paginationInfo: blogs })
      ] })
    ] })
  ] });
};
BlogsIndex.layout = (page) => /* @__PURE__ */ jsx(DashboardLayout, { children: page });
export {
  BlogsIndex as default
};
