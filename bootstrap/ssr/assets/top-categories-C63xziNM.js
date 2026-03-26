import { jsxs, jsx } from "react/jsx-runtime";
import { C as CategoryCard3 } from "./category-card-4-CRB8OUZz.js";
import { g as getPageSection } from "./page-CO5EAoAP.js";
import { usePage } from "@inertiajs/react";
import Section from "./section-7thyMMDM.js";
import "./card-D8SB2yrw.js";
import "react";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "lucide-react/dynamic";
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
const TopCategories = () => {
  const { props } = usePage();
  const { page, customize, topCategories } = props;
  const topCategoriesSection = getPageSection(page, "top_categories");
  return /* @__PURE__ */ jsxs(Section, { customize, pageSection: topCategoriesSection, containerClass: "py-20", contentClass: "relative", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col items-center justify-between gap-10 md:flex-row", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full md:max-w-[360px]", children: [
        /* @__PURE__ */ jsx("p", { className: "text-secondary-foreground mb-1 font-medium", children: topCategoriesSection == null ? void 0 : topCategoriesSection.title }),
        /* @__PURE__ */ jsx("h2", { className: "mb-4 text-2xl font-bold sm:text-3xl", children: topCategoriesSection == null ? void 0 : topCategoriesSection.sub_title }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: topCategoriesSection == null ? void 0 : topCategoriesSection.description })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "z-10 grid w-full max-w-[800px] grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3", children: topCategories.map((category) => /* @__PURE__ */ jsx(CategoryCard3, { category }, category.id)) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "after:pointer-events-none after:absolute after:top-1/2 after:left-1/2 after:h-[200px] after:w-[200px] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-[rgba(97,95,255,1))] after:blur-[290px] after:content-['']" })
  ] });
};
export {
  TopCategories as default
};
