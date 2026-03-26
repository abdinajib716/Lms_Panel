import { jsx, jsxs } from "react/jsx-runtime";
import { B as ButtonGradientPrimary } from "./button-gradient-primary-Dgn8gIzu.js";
import { g as getPageSection } from "./page-CO5EAoAP.js";
import Section from "./section-7thyMMDM.js";
import { usePage, Link } from "@inertiajs/react";
import "./button-jZyzwgdo.js";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "./dialog-DD5SXV81.js";
import "@radix-ui/react-dialog";
import "lucide-react";
import "./use-lang-44ndmTOc.js";
import "./chunked-uploader-input-MwXGR7K4.js";
import "./input-C6-Ta46A.js";
import "axios";
import "sonner";
import "./input-error-CEW4jhey.js";
import "./loading-button-C4Hk_jCd.js";
import "./label-Dd_w2I6M.js";
import "@radix-ui/react-label";
import "./textarea-DctRxpgE.js";
import "./inertia-BtwbgBI3.js";
import "./card-D8SB2yrw.js";
import "./icon-picker-_EIJQgy3.js";
import "./debounce-ZFxqVthq.js";
import "./tooltip-DswKljFZ.js";
import "@radix-ui/react-tooltip";
import "lucide-react/dynamic";
import "./scroll-area-DPHRDnwL.js";
import "@radix-ui/react-scroll-area";
import "./table-header-C_F4x8YG.js";
import "./table-tRsx9RfJ.js";
import "@tanstack/react-table";
import "./table-page-size-Xj85uK4t.js";
import "./dropdown-menu-BIfW6iuW.js";
import "@radix-ui/react-dropdown-menu";
import "./route-DlE7FdTW.js";
import "./avatar-Cr_jqfHL.js";
import "@radix-ui/react-avatar";
const SuccessStatistics = () => {
  const { props } = usePage();
  const { customize, innerPage } = props;
  const successStatistics = getPageSection(innerPage, "success_statistics");
  return /* @__PURE__ */ jsx("div", { className: "overflow-y-hidden bg-cover bg-center py-[120px]", children: /* @__PURE__ */ jsxs(Section, { customize, pageSection: successStatistics, containerClass: "relative", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col items-center justify-center gap-7 md:flex-row", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative w-full space-y-7 md:max-w-[384px]", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 mb-6", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold md:text-[30px]", children: successStatistics == null ? void 0 : successStatistics.title }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-2", children: successStatistics == null ? void 0 : successStatistics.description })
        ] }),
        /* @__PURE__ */ jsx(ButtonGradientPrimary, { asChild: true, shadow: false, children: /* @__PURE__ */ jsx(Link, { href: "/courses/all", children: "Browse Courses" }) }),
        /* @__PURE__ */ jsx("div", { className: "relative z-10 flex items-center justify-center gap-2.5 lg:justify-start", children: successStatistics == null ? void 0 : successStatistics.properties.array.map((stat, index) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h6", { className: "text-2xl font-bold md:text-[30px]", children: stat.count }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: stat.title })
        ] }, `item-${index}`)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-7 md:grid-cols-3", children: successStatistics == null ? void 0 : successStatistics.properties.array.map((stat, index) => /* @__PURE__ */ jsx("div", { className: "h-[400px]", children: /* @__PURE__ */ jsx("img", { src: stat.image, alt: stat.title, className: "h-full w-full rounded-2xl object-cover object-center" }) }, `item-${index}`)) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:h-[240px] after:w-[240px] after:rounded-full after:bg-[rgba(0,120,103,1)] after:blur-[200px] after:content-['']" }),
    /* @__PURE__ */ jsx("div", { className: "after:pointer-events-none after:absolute after:top-0 after:right-0 after:h-[240px] after:w-[240px] after:rounded-full after:bg-[rgba(97,95,255,1))] after:blur-[200px] after:content-['']" })
  ] }) });
};
export {
  SuccessStatistics as default
};
