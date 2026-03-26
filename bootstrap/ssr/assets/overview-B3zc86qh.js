import { jsxs, jsx } from "react/jsx-runtime";
import { C as Card } from "./card-D8SB2yrw.js";
import { g as getPageSection, b as getPropertyArray } from "./page-CO5EAoAP.js";
import { c as cn } from "./utils-BmtPBcb0.js";
import { usePage } from "@inertiajs/react";
import { DynamicIcon } from "lucide-react/dynamic";
import Section from "./section-7thyMMDM.js";
import Partners from "./partners-umsfWFNt.js";
import "react";
import "clsx";
import "tailwind-merge";
import "./dialog-DD5SXV81.js";
import "@radix-ui/react-dialog";
import "lucide-react";
import "./use-lang-44ndmTOc.js";
import "./chunked-uploader-input-MwXGR7K4.js";
import "./button-jZyzwgdo.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./input-C6-Ta46A.js";
import "axios";
import "sonner";
import "./input-error-CEW4jhey.js";
import "./loading-button-C4Hk_jCd.js";
import "./label-Dd_w2I6M.js";
import "@radix-ui/react-label";
import "./textarea-DctRxpgE.js";
import "./inertia-BtwbgBI3.js";
import "./icon-picker-_EIJQgy3.js";
import "./debounce-ZFxqVthq.js";
import "./tooltip-DswKljFZ.js";
import "@radix-ui/react-tooltip";
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
const Overview = () => {
  const { props } = usePage();
  const overviewSection = getPageSection(props.page, "overview");
  const array = getPropertyArray(overviewSection);
  const firstStat = array[0] ?? null;
  const secondStat = array[1] ?? null;
  const thirdStat = array[2] ?? null;
  return /* @__PURE__ */ jsxs(Section, { customize: props.customize, pageSection: overviewSection, containerClass: cn("relative"), contentClass: "py-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-10 flex flex-col items-center justify-between gap-12 md:flex-row", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full space-y-4 md:max-w-[420px]", children: [
        /* @__PURE__ */ jsx("h2", { className: "w-full text-3xl font-semibold md:text-4xl", children: overviewSection == null ? void 0 : overviewSection.title }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: overviewSection == null ? void 0 : overviewSection.description })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative md:max-w-[640px]", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 grid w-full grid-cols-1 gap-7 sm:grid-cols-2", children: [
          firstStat && /* @__PURE__ */ jsxs(Card, { className: "bg-background/20 dark:border-border border-2 border-white px-6 py-16 !shadow-none backdrop-blur-lg md:py-[72px]", children: [
            /* @__PURE__ */ jsx("div", { className: "shadow-card-md bg-background mx-auto mt-3 flex h-[60px] w-[60px] items-center justify-center rounded-2xl", children: /* @__PURE__ */ jsx("div", { className: "bg-secondary-foreground flex h-10 w-10 items-center justify-center rounded-full", children: /* @__PURE__ */ jsx(DynamicIcon, { name: firstStat.icon, className: "h-6 w-6 text-white" }) }) }),
            /* @__PURE__ */ jsxs("div", { className: "mt-5 space-y-2 text-center", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-4xl font-semibold md:text-[44px]", children: firstStat.count }),
              /* @__PURE__ */ jsx("p", { className: "mt-2", children: firstStat.title })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-7", children: [
            secondStat && /* @__PURE__ */ jsxs(Card, { className: "bg-background/20 dark:border-border flex items-center justify-center gap-4 border-2 border-white px-6 py-8 !shadow-none backdrop-blur-lg md:py-8", children: [
              /* @__PURE__ */ jsx("div", { className: "shadow-card-md bg-background flex h-[60px] w-[60px] items-center justify-center rounded-2xl", children: /* @__PURE__ */ jsx("div", { className: "bg-secondary-foreground flex h-10 w-10 items-center justify-center rounded-full", children: /* @__PURE__ */ jsx(DynamicIcon, { name: secondStat.icon, className: "h-6 w-6 text-white" }) }) }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-4xl font-semibold md:text-[44px]", children: secondStat.count }),
                /* @__PURE__ */ jsx("p", { className: "mt-2", children: secondStat.title })
              ] })
            ] }),
            thirdStat && /* @__PURE__ */ jsxs(Card, { className: "bg-background/20 dark:border-border flex items-center justify-center gap-4 border-2 border-white px-6 py-8 !shadow-none backdrop-blur-lg md:py-8", children: [
              /* @__PURE__ */ jsx("div", { className: "shadow-card-md bg-background flex h-[60px] w-[60px] items-center justify-center rounded-2xl", children: /* @__PURE__ */ jsx("div", { className: "bg-secondary-foreground flex h-10 w-10 items-center justify-center rounded-full", children: /* @__PURE__ */ jsx(DynamicIcon, { name: thirdStat.icon, className: "h-6 w-6 text-white" }) }) }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-4xl font-semibold md:text-[44px]", children: thirdStat.count }),
                /* @__PURE__ */ jsx("p", { className: "mt-2", children: thirdStat.title })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "after:pointer-events-none after:absolute after:top-1/2 after:left-1/2 after:h-[240px] after:w-[240px] after:-translate-x-1/2 after:-translate-y-1/2 after:bg-[rgba(97,95,255,1)] after:blur-[290px] after:content-['']" })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Partners, {}),
    /* @__PURE__ */ jsx("div", { className: "after:pointer-events-none after:absolute after:-top-14 after:-left-[180px] after:h-[240px] after:w-[240px] after:rounded-full after:bg-[rgba(0,167,111,1)] after:blur-[290px] after:content-['']" })
  ] });
};
export {
  Overview as default
};
