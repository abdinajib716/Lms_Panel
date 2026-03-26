import { jsx, jsxs } from "react/jsx-runtime";
import { T as TableFilter } from "./table-filter-Fsgky9hE.js";
import { T as TableFooter } from "./table-footer-Bf3DvTcP.js";
import { B as Badge } from "./badge-B4crNM73.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Card, b as CardContent } from "./card-D8SB2yrw.js";
import { Link } from "@inertiajs/react";
import { MapPin, Briefcase, Building2, TrendingUp, BriefcaseBusiness, Calendar, Eye } from "lucide-react";
import "./use-lang-44ndmTOc.js";
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
const Career = ({ jobCirculars }) => {
  const getStatusBadge = (status) => {
    const variants = {
      draft: "outline",
      active: "default",
      paused: "secondary",
      closed: "destructive",
      expired: "destructive"
    };
    return /* @__PURE__ */ jsx(Badge, { variant: variants[status] || "outline", children: status });
  };
  return /* @__PURE__ */ jsx("div", { className: "container my-20", children: /* @__PURE__ */ jsxs(Card, { className: "!shadow-none", children: [
    /* @__PURE__ */ jsx(
      TableFilter,
      {
        data: jobCirculars,
        title: "Job Circulars",
        globalSearch: true,
        tablePageSizes: [10, 15, 20, 25],
        routeName: "inner.page",
        routeParams: { slug: "careers" }
      }
    ),
    /* @__PURE__ */ jsx(CardContent, { children: jobCirculars.data.length > 0 ? /* @__PURE__ */ jsx("div", { className: "space-y-4", children: jobCirculars.data.map((job) => /* @__PURE__ */ jsx("div", { className: "hover:bg-muted/50 rounded-lg border p-4 transition-colors", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start justify-between gap-7 md:flex-row md:gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 hover:underline", children: [
          /* @__PURE__ */ jsx(Link, { href: route("job-circulars.show", job.id), children: /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold", children: job.title }) }),
          getStatusBadge(job.status)
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-muted-foreground flex flex-wrap items-center gap-4 text-sm", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4" }),
            job.location
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 capitalize", children: [
            /* @__PURE__ */ jsx(Briefcase, { className: "h-4 w-4" }),
            job.job_type
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 capitalize", children: [
            /* @__PURE__ */ jsx(Building2, { className: "h-4 w-4" }),
            job.work_type
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 capitalize", children: [
            /* @__PURE__ */ jsx(TrendingUp, { className: "h-4 w-4" }),
            job.experience_level
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 capitalize", children: [
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
      /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "icon", asChild: true, children: /* @__PURE__ */ jsx(Link, { href: route("job-circulars.show", job.id), children: /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4" }) }) })
    ] }) }, job.id)) }) : /* @__PURE__ */ jsxs("div", { className: "py-12 text-center", children: [
      /* @__PURE__ */ jsx(Briefcase, { className: "text-muted-foreground mx-auto h-12 w-12" }),
      /* @__PURE__ */ jsx("h3", { className: "mt-4 text-lg font-semibold", children: "No job circulars found" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-2", children: "Get started by creating your first job circular" })
    ] }) }),
    /* @__PURE__ */ jsx(TableFooter, { className: "p-5 sm:p-7", routeName: "inner.page", routeParams: { slug: "careers" }, paginationInfo: jobCirculars })
  ] }) });
};
export {
  Career as default
};
