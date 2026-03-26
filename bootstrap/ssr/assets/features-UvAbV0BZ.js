import { jsx, jsxs } from "react/jsx-runtime";
import { g as getPageSection, b as getPropertyArray } from "./page-CO5EAoAP.js";
import { usePage } from "@inertiajs/react";
import Section from "./section-7thyMMDM.js";
import "./dialog-DD5SXV81.js";
import "@radix-ui/react-dialog";
import "lucide-react";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "./use-lang-44ndmTOc.js";
import "react";
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
const Features = () => {
  const { props } = usePage();
  const { page, customize } = props;
  const featuresSection = getPageSection(page, "features");
  return /* @__PURE__ */ jsx(Section, { customize, pageSection: featuresSection, containerClass: "py-20", contentClass: "relative z-10 grid gap-7 md:grid-cols-3", children: getPropertyArray(featuresSection).map((feature, index) => /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-2xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 p-8", children: [
      /* @__PURE__ */ jsx("div", { className: "after:pointer-events-none after:absolute after:-top-6 after:left-0 after:h-[98px] after:w-[98px] after:rounded-full after:bg-[#E4CBA866] after:blur-[72px] after:content-[''] dark:after:bg-[#e4cba834]" }),
      /* @__PURE__ */ jsx("div", { className: "after:pointer-events-none after:absolute after:-bottom-9 after:-left-8 after:h-[116px] after:w-[116px] after:rounded-full after:bg-[#00A76F1A] after:blur-[72px] after:content-['']" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsx("img", { src: feature.image, alt: "", className: "h-[60px] w-auto" }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: feature.title }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: feature.description })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "after:pointer-events-none after:absolute after:top-0 after:left-0 after:h-20 after:w-20 after:rounded-full after:bg-[rgba(97,95,255,1))] after:blur-[140px] after:content-['']" }),
    /* @__PURE__ */ jsx("div", { className: "after:pointer-events-none after:absolute after:right-0 after:bottom-0 after:h-20 after:w-20 after:rounded-full after:bg-[rgba(0,167,111,1)] after:blur-[140px] after:content-['']" })
  ] }, `key-${index}`)) });
};
export {
  Features as default
};
