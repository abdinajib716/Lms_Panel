import { jsxs, jsx } from "react/jsx-runtime";
import { T as TiptapRenderer } from "./client-renderer-CUBmzaOS.js";
import { B as Badge } from "./badge-B4crNM73.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Card, a as CardHeader, c as CardTitle, b as CardContent, d as CardDescription } from "./card-D8SB2yrw.js";
import { L as LandingLayout } from "./landing-layout-DaxsNL6G.js";
import { usePage, Head } from "@inertiajs/react";
import { Building2, MapPin, Clock, Mail, Eye, Zap } from "lucide-react";
import { useState } from "react";
/* empty css               */
import "react-icons/lu";
import "hast-util-to-jsx-runtime";
import "shiki/bundle/full";
import "rehype-parse";
import "rehype-react";
import "unified";
import "unist-util-visit";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "./app-logo-42nmPdEQ.js";
import "lucide-react/dynamic";
import "./main-BqrosZ6t.js";
import "next-themes";
import "sonner";
import "./dropdown-menu-BIfW6iuW.js";
import "@radix-ui/react-dropdown-menu";
import "./scroll-area-DPHRDnwL.js";
import "@radix-ui/react-scroll-area";
import "./use-auth-8FvJer_G.js";
import "./use-screen-B7SDA5zE.js";
import "./appearance-Df_e7R4w.js";
import "./language-BbuOCfpR.js";
import "./separator-R7EO2G8T.js";
import "@radix-ui/react-separator";
import "./notification-BXalLCUz.js";
import "./popover-BV7JTqNd.js";
import "@radix-ui/react-popover";
import "date-fns";
import "./profile-toggle-D0g01Tbw.js";
import "./avatar-Cr_jqfHL.js";
import "@radix-ui/react-avatar";
import "nanoid";
const JobCircularShow = () => {
  const { jobCircular, translate } = usePage().props;
  const { frontend, button, common } = translate;
  const [showFullDescription, setShowFullDescription] = useState(false);
  const getDaysUntilDeadline = () => {
    const deadline = new Date(jobCircular.application_deadline);
    const today = /* @__PURE__ */ new Date();
    const diffTime = deadline.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
    if (diffDays < 0) return common.expired;
    if (diffDays === 0) return common.today;
    if (diffDays === 1) return frontend.day_left;
    return `${diffDays} ${frontend.days_left}`;
  };
  const getFormattedSalary = () => {
    var _a, _b;
    const min = (_a = jobCircular.salary_min) == null ? void 0 : _a.toLocaleString();
    const max = (_b = jobCircular.salary_max) == null ? void 0 : _b.toLocaleString();
    const currency = jobCircular.salary_currency;
    if (jobCircular.salary_negotiable) {
      return `${currency} ${min} - ${max} (${frontend.negotiable})`;
    }
    return `${currency} ${min} - ${max}`;
  };
  const getStatusBadge = (status) => {
    const statusConfig = {
      active: { label: common.active, variant: "default" },
      draft: { label: common.draft, variant: "secondary" },
      closed: { label: frontend.closed, variant: "destructive" },
      expired: { label: common.expired, variant: "outline" }
    };
    const config = statusConfig[status] || { label: status, variant: "outline" };
    return /* @__PURE__ */ jsx(Badge, { variant: config.variant, children: config.label });
  };
  return /* @__PURE__ */ jsxs(LandingLayout, { customizable: false, children: [
    /* @__PURE__ */ jsx(Head, { title: jobCircular.title }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen", children: [
      /* @__PURE__ */ jsx("div", { className: "border-border border-b", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsx("h1", { className: "text-2xl font-semibold", children: jobCircular.title }),
            getStatusBadge(jobCircular.status)
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-muted-foreground mt-2 flex items-center space-x-4 text-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsx(Building2, { className: "mr-1 h-4 w-4" }),
              /* @__PURE__ */ jsx("span", { children: frontend.company_fallback })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsx(MapPin, { className: "mr-1 h-4 w-4" }),
              /* @__PURE__ */ jsx("span", { children: jobCircular.location })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsx(Clock, { className: "mr-1 h-4 w-4" }),
              /* @__PURE__ */ jsx("span", { children: getDaysUntilDeadline() })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-3", children: /* @__PURE__ */ jsx(Button, { size: "sm", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: `mailto:${jobCircular.contact_email}`, children: [
          /* @__PURE__ */ jsx(Mail, { className: "mr-2 h-4 w-4" }),
          button.apply
        ] }) }) })
      ] }) }) }),
      /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-8 lg:grid-cols-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-6 lg:col-span-2", children: [
          /* @__PURE__ */ jsxs(Card, { className: "!shadow-none", children: [
            /* @__PURE__ */ jsx(CardHeader, { className: "pb-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
              /* @__PURE__ */ jsx(CardTitle, { className: "mb-2 text-xl font-semibold", children: jobCircular.title }),
              /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
                /* @__PURE__ */ jsx("h6", { className: "text-secondary-foreground text-lg font-semibold", children: getFormattedSalary() }),
                /* @__PURE__ */ jsxs("div", { className: "text-muted-foreground mt-1 text-sm", children: [
                  jobCircular.positions_available,
                  " ",
                  jobCircular.positions_available !== 1 ? frontend.positions : frontend.position,
                  " ",
                  frontend.available
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4 md:grid-cols-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-muted rounded-lg p-4 text-center", children: [
                /* @__PURE__ */ jsx("div", { className: "mb-2 text-2xl", children: "🎯" }),
                /* @__PURE__ */ jsx("div", { className: "font-semibold capitalize", children: jobCircular.experience_level }),
                /* @__PURE__ */ jsx("div", { className: "text-muted-foreground text-sm", children: frontend.experience_level })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-muted rounded-lg p-4 text-center", children: [
                /* @__PURE__ */ jsx("div", { className: "mb-2 text-2xl", children: "💼" }),
                /* @__PURE__ */ jsx("div", { className: "font-semibold capitalize", children: jobCircular.job_type }),
                /* @__PURE__ */ jsx("div", { className: "text-muted-foreground text-sm", children: frontend.job_type })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-muted rounded-lg p-4 text-center", children: [
                /* @__PURE__ */ jsx("div", { className: "mb-2 text-2xl", children: "🏢" }),
                /* @__PURE__ */ jsx("div", { className: "font-semibold capitalize", children: jobCircular.work_type }),
                /* @__PURE__ */ jsx("div", { className: "text-muted-foreground text-sm", children: frontend.work_type })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-muted rounded-lg p-4 text-center", children: [
                /* @__PURE__ */ jsx("div", { className: "mb-2 text-2xl", children: "📅" }),
                /* @__PURE__ */ jsx("div", { className: "font-semibold capitalize", children: getDaysUntilDeadline() }),
                /* @__PURE__ */ jsx("div", { className: "text-muted-foreground text-sm", children: frontend.application_deadline })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs(Card, { className: "!shadow-none", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-xl font-semibold", children: frontend.job_description }) }),
            /* @__PURE__ */ jsxs(CardContent, { children: [
              /* @__PURE__ */ jsx("div", { className: `${showFullDescription ? "" : "max-h-96 overflow-hidden"}`, children: /* @__PURE__ */ jsx(TiptapRenderer, { children: jobCircular.description }) }),
              !showFullDescription && /* @__PURE__ */ jsx("div", { className: "mt-4 text-center", children: /* @__PURE__ */ jsxs(Button, { variant: "outline", onClick: () => setShowFullDescription(true), className: "w-full", children: [
                /* @__PURE__ */ jsx(Eye, { className: "mr-2 h-4 w-4" }),
                button.show_full
              ] }) }),
              showFullDescription && /* @__PURE__ */ jsx("div", { className: "mt-4 text-center", children: /* @__PURE__ */ jsxs(Button, { variant: "outline", onClick: () => setShowFullDescription(false), className: "w-full", children: [
                /* @__PURE__ */ jsx(Eye, { className: "mr-2 h-4 w-4" }),
                button.show_less
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Card, { className: "!shadow-none", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center text-xl font-semibold", children: [
              /* @__PURE__ */ jsx(Zap, { className: "mr-2 h-5 w-5 text-yellow-500" }),
              frontend.skills_required
            ] }) }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: jobCircular.skills_required.map((skill, index) => /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "px-3 py-1 text-sm", children: skill }, index)) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs(Card, { className: "!shadow-none", children: [
            /* @__PURE__ */ jsxs(CardHeader, { className: "text-center", children: [
              /* @__PURE__ */ jsx(CardTitle, { className: "text-xl font-semibold", children: frontend.quick_apply }),
              /* @__PURE__ */ jsx(CardDescription, { children: frontend.send_application })
            ] }),
            /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsx(Button, { className: "w-full", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: `mailto:${jobCircular.contact_email}`, children: [
                /* @__PURE__ */ jsx(Mail, { className: "mr-2 h-4 w-4" }),
                frontend.apply_via_email
              ] }) }),
              /* @__PURE__ */ jsxs("div", { className: "text-muted-foreground text-center text-sm", children: [
                /* @__PURE__ */ jsxs("p", { children: [
                  frontend.application_deadline,
                  ":"
                ] }),
                /* @__PURE__ */ jsx("p", { className: "font-semibold", children: new Date(jobCircular.application_deadline).toLocaleDateString() })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Card, { className: "!shadow-none", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-lg font-semibold", children: frontend.job_statistics }) }),
            /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-secondary text-secondary-foreground rounded-lg p-3 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-2xl font-semibold", children: jobCircular.positions_available }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm", children: frontend.positions_available })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-secondary text-secondary-foreground rounded-lg p-3 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-2xl font-semibold", children: getDaysUntilDeadline().includes("Expired") ? "0" : "Active" }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm", children: common.status })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-muted-foreground text-center text-sm", children: [
                /* @__PURE__ */ jsxs("p", { children: [
                  frontend.posted,
                  " ",
                  new Date(jobCircular.created_at).toLocaleDateString()
                ] }),
                /* @__PURE__ */ jsxs("p", { children: [
                  frontend.last_updated,
                  " ",
                  new Date(jobCircular.updated_at).toLocaleDateString()
                ] })
              ] })
            ] })
          ] })
        ] })
      ] }) })
    ] })
  ] });
};
export {
  JobCircularShow as default
};
