import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { T as TableFilter } from "./table-filter-Fsgky9hE.js";
import { T as TableFooter } from "./table-footer-Bf3DvTcP.js";
import { T as TableHeader } from "./table-header-C_F4x8YG.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Card, b as CardContent, c as CardTitle } from "./card-D8SB2yrw.js";
import { T as Table, a as TableBody, b as TableRow, c as TableCell } from "./table-tRsx9RfJ.js";
import { D as DashboardLayout } from "./layout-CdQJcF1a.js";
import { useReactTable, getFilteredRowModel, getSortedRowModel, getCoreRowModel, flexRender } from "@tanstack/react-table";
import { CircleDollarSign, Wallet, DollarSign, Plus } from "lucide-react";
import PayoutsTableColumn from "./payouts-table-columns-Mof1_31v.js";
import WithdrawForm from "./withdraw-form-DxKELqqg.js";
import "./use-lang-44ndmTOc.js";
import "@inertiajs/react";
import "./debounce-ZFxqVthq.js";
import "./route-DlE7FdTW.js";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "react";
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
import "./input-error-CEW4jhey.js";
import "./loading-button-C4Hk_jCd.js";
import "./dialog-DD5SXV81.js";
import "./input-C6-Ta46A.js";
import "./label-Dd_w2I6M.js";
import "@radix-ui/react-label";
import "./inertia-BtwbgBI3.js";
const Index = (props) => {
  var _a;
  const { payouts, totalEarnings, totalPayouts, pendingPayouts, availableForWithdrawal, translate } = props;
  const { dashboard, button, common } = translate;
  const table = useReactTable({
    data: payouts.data,
    columns: PayoutsTableColumn(props.translate),
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel()
  });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-6 grid gap-6 sm:grid-cols-2 md:grid-cols-4", children: [
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "flex items-center gap-4 p-6", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-primary/10 rounded-lg p-2", children: /* @__PURE__ */ jsx(CircleDollarSign, { className: "text-primary h-6 w-6" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(CardTitle, { className: "text-base font-medium", children: dashboard.total_earnings }),
          /* @__PURE__ */ jsxs("p", { className: "mt-1 text-2xl font-bold", children: [
            totalEarnings,
            " $"
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "flex items-center gap-4 p-6", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-primary/10 rounded-lg p-2", children: /* @__PURE__ */ jsx(Wallet, { className: "text-primary h-6 w-6" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(CardTitle, { className: "text-base font-medium", children: dashboard.available }),
          /* @__PURE__ */ jsxs("p", { className: "mt-1 text-2xl font-bold", children: [
            availableForWithdrawal,
            " $"
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "flex items-center gap-4 p-6", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-primary/10 rounded-lg p-2", children: /* @__PURE__ */ jsx(DollarSign, { className: "text-primary h-6 w-6" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(CardTitle, { className: "text-base font-medium", children: dashboard.total_payout }),
          /* @__PURE__ */ jsxs("p", { className: "mt-1 text-2xl font-bold", children: [
            totalPayouts,
            " $"
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "flex items-center gap-4 p-6", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-primary/10 rounded-lg p-2", children: /* @__PURE__ */ jsx(CircleDollarSign, { className: "text-primary h-6 w-6" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(CardTitle, { className: "text-base font-medium", children: dashboard.requested }),
          /* @__PURE__ */ jsxs("p", { className: "mt-1 text-2xl font-bold", children: [
            pendingPayouts,
            " $"
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs(Card, { className: "gap-0 py-0", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative flex items-center justify-between", children: [
        /* @__PURE__ */ jsx(
          TableFilter,
          {
            data: payouts,
            title: dashboard.withdraw_list,
            globalSearch: true,
            tablePageSizes: [10, 15, 20, 25],
            routeName: "payouts.index",
            className: "w-full md:pr-3"
          }
        ),
        /* @__PURE__ */ jsx(
          WithdrawForm,
          {
            title: button.withdraw,
            handler: /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "absolute top-5 right-6 md:static md:mr-6 md:mb-1", children: [
              /* @__PURE__ */ jsx(Plus, {}),
              /* @__PURE__ */ jsx("span", { children: button.payout_request })
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(Table, { className: "border-border border-y", children: [
        /* @__PURE__ */ jsx(TableHeader, { table }),
        /* @__PURE__ */ jsx(TableBody, { children: ((_a = table.getRowModel().rows) == null ? void 0 : _a.length) ? table.getRowModel().rows.map((row) => /* @__PURE__ */ jsx(TableRow, { "data-state": row.getIsSelected() && "selected", children: row.getVisibleCells().map((cell) => /* @__PURE__ */ jsx(TableCell, { children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id)) }, row.id)) : /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { className: "h-24 text-center", children: common.no_results_found }) }) })
      ] }),
      /* @__PURE__ */ jsx(TableFooter, { className: "mt-1 p-5 sm:p-7", routeName: "payouts.index", paginationInfo: payouts })
    ] })
  ] });
};
Index.layout = (children) => /* @__PURE__ */ jsx(DashboardLayout, { children });
export {
  Index as default
};
