import { jsxs, jsx } from "react/jsx-runtime";
import { T as TableHeader } from "./table-header-C_F4x8YG.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Card } from "./card-D8SB2yrw.js";
import { T as Table, a as TableBody, b as TableRow, c as TableCell } from "./table-tRsx9RfJ.js";
import { D as DashboardLayout } from "./layout-CdQJcF1a.js";
import { c as cn } from "./utils-BmtPBcb0.js";
import PayoutsTableColumn$1 from "./payouts-table-columns-Mof1_31v.js";
import PayoutsTableColumn from "./request-table-columns-bKugiQrQ.js";
import { Head, Link } from "@inertiajs/react";
import { useReactTable, getFilteredRowModel, getSortedRowModel, getCoreRowModel, flexRender } from "@tanstack/react-table";
import { useMemo } from "react";
import { FiBookOpen, FiVideo, FiUserCheck, FiUsers, FiUserPlus } from "react-icons/fi";
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import RevenueChart from "./revenue-chart-DhXDWj0C.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./sidebar-6wqj6oXO.js";
import "lucide-react";
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
import "clsx";
import "tailwind-merge";
const Dashboard = (props) => {
  var _a;
  const { auth, system, statistics, revenueData, courseStatusDistribution, pendingWithdrawals, translate } = props;
  const { frontend } = translate;
  const isAdmin = auth.user.role === "admin";
  const pieChartData = useMemo(() => {
    return Object.entries(courseStatusDistribution).map(([name, value]) => ({
      name,
      value
    }));
  }, [courseStatusDistribution]);
  const table = useReactTable({
    data: pendingWithdrawals,
    columns: isAdmin ? PayoutsTableColumn(props.translate) : PayoutsTableColumn$1(props.translate),
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel()
  });
  return /* @__PURE__ */ jsxs("div", { className: "space-y-7", children: [
    /* @__PURE__ */ jsx(Head, { title: frontend.dashboard }),
    /* @__PURE__ */ jsxs("div", { className: cn("grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3", isAdmin ? "lg:grid-cols-5" : "lg:grid-cols-4"), children: [
      /* @__PURE__ */ jsx(StatCard, { title: frontend.courses, value: statistics.courses, icon: /* @__PURE__ */ jsx(FiBookOpen, { className: "h-6 w-6 text-blue-500" }) }),
      /* @__PURE__ */ jsx(StatCard, { title: frontend.lessons, value: statistics.lessons, icon: /* @__PURE__ */ jsx(FiVideo, { className: "h-6 w-6 text-green-500" }) }),
      /* @__PURE__ */ jsx(StatCard, { title: frontend.enrollment, value: statistics.enrollments, icon: /* @__PURE__ */ jsx(FiUserCheck, { className: "h-6 w-6 text-amber-500" }) }),
      /* @__PURE__ */ jsx(StatCard, { title: frontend.students, value: statistics.students, icon: /* @__PURE__ */ jsx(FiUsers, { className: "h-6 w-6 text-purple-500" }) }),
      isAdmin && /* @__PURE__ */ jsx(StatCard, { title: "Instructors", value: statistics.instructors, icon: /* @__PURE__ */ jsx(FiUserPlus, { className: "h-6 w-6 text-rose-500" }) })
    ] }),
    system.sub_type === "collaborative" && /* @__PURE__ */ jsx(RevenueChart, {}),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-6 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs(Card, { className: "col-span-full p-6 lg:col-span-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "mb-4 text-lg font-medium", children: frontend.course_status }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx(ResponsiveContainer, { width: "100%", height: 300, children: /* @__PURE__ */ jsxs(PieChart, { children: [
          /* @__PURE__ */ jsx(
            Pie,
            {
              data: pieChartData,
              cx: "50%",
              cy: "50%",
              innerRadius: 0,
              outerRadius: 80,
              fill: "#8884d8",
              dataKey: "value",
              paddingAngle: 0,
              label: false,
              children: pieChartData.map((entry, index) => /* @__PURE__ */ jsx(
                Cell,
                {
                  fill: [
                    "oklch(0.8 0.14 160.7)",
                    // Lightest variant
                    "oklch(0.75 0.145 160.7)",
                    // Light variant
                    "oklch(0.65 0.145 160.7)",
                    // Base color (secondary-foreground)
                    "oklch(0.55 0.14 160.7)",
                    // Dark variant
                    "oklch(0.45 0.135 160.7)"
                    // Darkest variant
                  ][index % 5]
                },
                `cell-${index}`
              ))
            }
          ),
          /* @__PURE__ */ jsx(Legend, { layout: "horizontal", align: "center", verticalAlign: "bottom", iconType: "circle" }),
          /* @__PURE__ */ jsx(Tooltip, { formatter: (value) => [value, frontend.courses] })
        ] }) }) })
      ] }),
      system.sub_type === "collaborative" ? /* @__PURE__ */ jsxs(Card, { className: "col-span-full lg:col-span-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-6 p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium", children: frontend.latest_pending_withdrawal_request }),
          /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsx(Link, { href: isAdmin ? route("payouts.request.index") : route("payouts.index"), children: frontend.view_all }) })
        ] }),
        /* @__PURE__ */ jsxs(Table, { className: "border-border border-y", children: [
          /* @__PURE__ */ jsx(TableHeader, { table }),
          /* @__PURE__ */ jsx(TableBody, { children: ((_a = table.getRowModel().rows) == null ? void 0 : _a.length) ? table.getRowModel().rows.map((row) => /* @__PURE__ */ jsx(TableRow, { "data-state": row.getIsSelected() && "selected", children: row.getVisibleCells().map((cell) => /* @__PURE__ */ jsx(TableCell, { children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id)) }, row.id)) : /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { className: "h-24 text-center", children: frontend.no_results }) }) })
        ] })
      ] }) : /* @__PURE__ */ jsx("div", { className: "col-span-full lg:col-span-8", children: /* @__PURE__ */ jsx(RevenueChart, {}) })
    ] })
  ] });
};
const StatCard = ({ title, value, icon }) => {
  return /* @__PURE__ */ jsx(Card, { className: "p-4 sm:p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm font-medium", children: title }),
      /* @__PURE__ */ jsx("h4", { className: "mt-1 text-2xl font-semibold", children: value })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "rounded-full bg-gray-100 p-3", children: icon })
  ] }) });
};
Dashboard.layout = (page) => /* @__PURE__ */ jsx(DashboardLayout, { children: page });
export {
  Dashboard as default
};
