import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { D as DeleteModal } from "./delete-modal-BIvxKwRf.js";
import { T as TableFilter } from "./table-filter-Fsgky9hE.js";
import { T as TableFooter } from "./table-footer-Bf3DvTcP.js";
import { B as Badge } from "./badge-B4crNM73.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Card, a as CardHeader, c as CardTitle, b as CardContent } from "./card-D8SB2yrw.js";
import { D as DashboardLayout } from "./layout-CdQJcF1a.js";
import { usePage, Head, Link, router } from "@inertiajs/react";
import { Plus, Briefcase, PlayCircle, Edit, Clock, MapPin, Building2, TrendingUp, BriefcaseBusiness, Calendar, Eye, PauseCircle, Trash2 } from "lucide-react";
import "./dialog-DD5SXV81.js";
import "@radix-ui/react-dialog";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "react";
import "./use-lang-44ndmTOc.js";
import "./debounce-ZFxqVthq.js";
import "./route-DlE7FdTW.js";
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
const JobCircularsIndex = () => {
  const { props } = usePage();
  const { jobCirculars, statistics, jobTypes, workTypes, experienceLevels, statuses, translate } = props;
  const { dashboard, button, common } = translate;
  const getStatusBadge = (status) => {
    const variants = {
      draft: "outline",
      active: "default",
      paused: "secondary",
      closed: "destructive",
      expired: "destructive"
    };
    return /* @__PURE__ */ jsx(Badge, { variant: variants[status] || "outline", children: statuses[status] || status });
  };
  const handleToggleStatus = (jobId) => {
    router.put(
      route("job-circulars.toggle-status", jobId),
      {},
      {
        preserveState: true,
        preserveScroll: true
      }
    );
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: dashboard.job_circulars }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold", children: dashboard.job_circulars }),
        /* @__PURE__ */ jsx(Button, { asChild: true, children: /* @__PURE__ */ jsxs(Link, { href: route("job-circulars.create"), children: [
          /* @__PURE__ */ jsx(Plus, { className: "mr-2 h-4 w-4" }),
          "Create Job Circular"
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-5", children: [
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
            /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: dashboard.total_jobs }),
            /* @__PURE__ */ jsx(Briefcase, { className: "text-muted-foreground h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: statistics.total }) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
            /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: common.active }),
            /* @__PURE__ */ jsx(PlayCircle, { className: "h-4 w-4 text-green-600" })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-green-600", children: statistics.active }) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
            /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: common.draft }),
            /* @__PURE__ */ jsx(Edit, { className: "h-4 w-4 text-yellow-600" })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-yellow-600", children: statistics.draft }) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
            /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: common.closed }),
            /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 text-orange-600" })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-orange-600", children: statistics.closed }) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
            /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: common.expired }),
            /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 text-red-600" })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-red-600", children: statistics.expired }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(
          TableFilter,
          {
            data: jobCirculars,
            title: "Job Circulars",
            globalSearch: true,
            tablePageSizes: [10, 15, 20, 25],
            routeName: "job-circulars.index"
          }
        ),
        /* @__PURE__ */ jsx(CardContent, { className: "p-4 sm:p-6", children: jobCirculars.data.length > 0 ? /* @__PURE__ */ jsx("div", { className: "space-y-4", children: jobCirculars.data.map((job) => /* @__PURE__ */ jsx("div", { className: "hover:bg-muted/50 rounded-lg border p-4 transition-colors", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start justify-between gap-7 md:flex-row md:gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold", children: job.title }),
              getStatusBadge(job.status)
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-muted-foreground flex flex-wrap items-center gap-4 text-sm", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4" }),
                job.location
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(Briefcase, { className: "h-4 w-4" }),
                jobTypes[job.job_type]
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(Building2, { className: "h-4 w-4" }),
                workTypes[job.work_type]
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(TrendingUp, { className: "h-4 w-4" }),
                experienceLevels[job.experience_level]
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(BriefcaseBusiness, { className: "h-4 w-4" }),
                job.positions_available,
                " Position",
                job.positions_available !== 1 ? "s" : ""
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4" }),
                new Date(job.application_deadline).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", asChild: true, children: /* @__PURE__ */ jsx(Link, { href: route("job-circulars.show", job.id), children: /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4" }) }) }),
            /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", asChild: true, children: /* @__PURE__ */ jsx(Link, { href: route("job-circulars.edit", job.id), children: /* @__PURE__ */ jsx(Edit, { className: "h-4 w-4" }) }) }),
            /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", onClick: () => handleToggleStatus(Number(job.id)), children: job.status === "active" ? /* @__PURE__ */ jsx(PauseCircle, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(PlayCircle, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsx(
              DeleteModal,
              {
                routePath: route("job-circulars.destroy", job.id),
                actionComponent: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", children: /* @__PURE__ */ jsx(Trash2, { className: "text-destructive h-4 w-4" }) })
              }
            )
          ] })
        ] }) }, job.id)) }) : /* @__PURE__ */ jsxs("div", { className: "py-12 text-center", children: [
          /* @__PURE__ */ jsx(Briefcase, { className: "text-muted-foreground mx-auto h-12 w-12" }),
          /* @__PURE__ */ jsx("h3", { className: "mt-4 text-lg font-semibold", children: dashboard.no_job_circulars_found }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-2 text-sm", children: "Get started by creating your first job circular." }),
          /* @__PURE__ */ jsx(Button, { className: "mt-4", asChild: true, children: /* @__PURE__ */ jsxs(Link, { href: route("job-circulars.create"), children: [
            /* @__PURE__ */ jsx(Plus, { className: "mr-2 h-4 w-4" }),
            button.create_job
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsx(TableFooter, { className: "p-5 sm:p-7", routeName: "job-circulars.index", paginationInfo: jobCirculars })
      ] })
    ] })
  ] });
};
JobCircularsIndex.layout = (page) => /* @__PURE__ */ jsx(DashboardLayout, { children: page });
export {
  JobCircularsIndex as default
};
