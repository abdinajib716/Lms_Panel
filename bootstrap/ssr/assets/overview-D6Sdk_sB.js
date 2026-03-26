import { jsxs, jsx } from "react/jsx-runtime";
import { C as Card } from "./card-D8SB2yrw.js";
import { g as getPageSection, b as getPropertyArray } from "./page-CO5EAoAP.js";
import { usePage } from "@inertiajs/react";
import { DynamicIcon } from "lucide-react/dynamic";
import Section from "./section-7thyMMDM.js";
import "react";
import "./utils-BmtPBcb0.js";
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
  return /* @__PURE__ */ jsxs(Section, { customize: props.customize, pageSection: overviewSection, containerClass: "py-20", contentClass: "text-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 mx-auto mb-10 text-center md:max-w-2xl", children: [
      /* @__PURE__ */ jsx("p", { className: "text-secondary-foreground mb-1 font-medium", children: overviewSection == null ? void 0 : overviewSection.title }),
      /* @__PURE__ */ jsx("h2", { className: "mb-4 text-3xl font-bold sm:text-4xl", children: overviewSection == null ? void 0 : overviewSection.sub_title }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: overviewSection == null ? void 0 : overviewSection.description })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto grid max-w-5xl grid-cols-1 gap-7 md:grid-cols-3", children: [
      getPropertyArray(overviewSection).map((stat, index) => {
        return /* @__PURE__ */ jsxs(
          Card,
          {
            className: "bg-background/20 dark:border-border relative z-10 border-2 border-white px-6 py-16 !shadow-none backdrop-blur-lg md:py-20",
            children: [
              /* @__PURE__ */ jsx("div", { className: "shadow-card-md mx-auto flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-white/5", children: /* @__PURE__ */ jsx("div", { className: "bg-secondary-foreground flex h-10 w-10 items-center justify-center rounded-full", children: /* @__PURE__ */ jsx(DynamicIcon, { name: stat.icon, className: "h-6 w-6 text-white" }) }) }),
              /* @__PURE__ */ jsxs("div", { className: "mt-5 space-y-2", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-4xl font-semibold md:text-[44px]", children: stat.count }),
                /* @__PURE__ */ jsx("p", { className: "mt-2", children: stat.title })
              ] })
            ]
          },
          `element-${index}`
        );
      }),
      /* @__PURE__ */ jsx("div", { className: "after:pointer-events-none after:absolute after:top-[72px] after:left-1/2 after:h-[120px] after:w-[600px] after:-translate-x-1/2 after:-rotate-[15deg] after:bg-[rgba(97,95,255,1)] after:blur-[300px] after:content-[''] dark:after:bg-[#fff5cc6d]" })
    ] })
  ] });
};
export {
  Overview as default
};
