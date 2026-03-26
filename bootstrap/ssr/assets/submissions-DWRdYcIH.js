import { jsx, jsxs } from "react/jsx-runtime";
import { T as TableFilter } from "./table-filter-Fsgky9hE.js";
import { T as TableFooter } from "./table-footer-Bf3DvTcP.js";
import { T as TableHeader } from "./table-header-C_F4x8YG.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Card } from "./card-D8SB2yrw.js";
import { T as Table, a as TableBody, b as TableRow, c as TableCell } from "./table-tRsx9RfJ.js";
import { usePage, Link } from "@inertiajs/react";
import { useReactTable, getFilteredRowModel, getSortedRowModel, getCoreRowModel, flexRender } from "@tanstack/react-table";
import { ArrowLeft } from "lucide-react";
import * as React from "react";
import SubmissionsTableColumn from "./submissions-table-column-CuAA9en5.js";
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
import "./badge-B4crNM73.js";
import "date-fns";
import "./grade-submission-dialog-BhpH7r-2.js";
import "./dialog-DD5SXV81.js";
import "@radix-ui/react-dialog";
import "./assignment-grade-form-Dr4nrhG3.js";
import "./input-error-CEW4jhey.js";
import "./loading-button-C4Hk_jCd.js";
import "./input-C6-Ta46A.js";
import "./label-Dd_w2I6M.js";
import "@radix-ui/react-label";
import "./select-BxPdBi6V.js";
import "@radix-ui/react-select";
import "./textarea-DctRxpgE.js";
const Submissions = () => {
  var _a;
  const { props } = usePage();
  const { course, translate, tab, submissions, assignment } = props;
  console.log(submissions);
  const [sorting, setSorting] = React.useState([]);
  const table = useReactTable({
    data: (submissions == null ? void 0 : submissions.data) || [],
    columns: SubmissionsTableColumn(translate),
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: { sorting }
  });
  return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1", children: /* @__PURE__ */ jsxs(Card, { className: "space-y-6 p-4 sm:p-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsx(
        TableFilter,
        {
          data: submissions,
          title: "Assignment Submissions",
          globalSearch: true,
          tablePageSizes: [10, 15, 20, 25],
          routeName: "courses.edit",
          routeParams: {
            course: course.id,
            tab: tab || "",
            assignment: assignment || ""
          },
          className: "w-full p-0"
        }
      ),
      /* @__PURE__ */ jsx(Button, { asChild: true, className: "absolute top-0 right-0 flex h-8 items-center gap-2 md:relative md:top-auto md:h-9", children: /* @__PURE__ */ jsxs(
        Link,
        {
          href: route("courses.edit", {
            course: course.id,
            tab
          }),
          children: [
            /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsx("span", { children: "Back" })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs(Table, { className: "border-border min-w-3xl border-y", children: [
      /* @__PURE__ */ jsx(TableHeader, { table }),
      /* @__PURE__ */ jsx(TableBody, { children: ((_a = table.getRowModel().rows) == null ? void 0 : _a.length) ? table.getRowModel().rows.map((row) => /* @__PURE__ */ jsx(TableRow, { "data-state": row.getIsSelected() && "selected", children: row.getVisibleCells().map((cell) => /* @__PURE__ */ jsx(TableCell, { children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id)) }, row.id)) : /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { className: "h-24 text-center", children: translate.frontend.no_results }) }) })
    ] }),
    /* @__PURE__ */ jsx(
      TableFooter,
      {
        className: "",
        paginationInfo: submissions,
        routeName: "courses.edit",
        routeParams: {
          course: course.id,
          tab: tab || "",
          assignment: assignment || ""
        }
      }
    )
  ] }) });
};
export {
  Submissions as default
};
