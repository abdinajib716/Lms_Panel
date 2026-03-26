import { jsx, jsxs } from "react/jsx-runtime";
import { C as Card } from "./card-D8SB2yrw.js";
import { Link, usePage } from "@inertiajs/react";
import { g as getPageSection } from "./page-CO5EAoAP.js";
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
const CategoryCard2 = ({ category }) => {
  return /* @__PURE__ */ jsx(Link, { href: route("category.courses", { category: category.slug }), children: /* @__PURE__ */ jsxs(Card, { className: "border-muted hover:!shadow-card h-[110px] gap-4 rounded-2xl px-12 py-6 !shadow-none", children: [
    /* @__PURE__ */ jsx("p", { className: "text-lg font-medium", children: category.title }),
    /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
      category.courses_count,
      " Courses"
    ] })
  ] }) });
};
const TopCategories = () => {
  const { props } = usePage();
  const { page, customize, topCategories } = props;
  const topCategoriesSection = getPageSection(page, "top_categories");
  return /* @__PURE__ */ jsxs(Section, { customize, pageSection: topCategoriesSection, containerClass: "py-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 mx-auto mb-10", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-4 text-3xl font-bold sm:text-4xl", children: topCategoriesSection == null ? void 0 : topCategoriesSection.title }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: topCategoriesSection == null ? void 0 : topCategoriesSection.description })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4", children: topCategories.map((category) => /* @__PURE__ */ jsx(CategoryCard2, { category }, category.id)) }),
      /* @__PURE__ */ jsx("div", { className: "after:pointer-events-none after:absolute after:top-0 after:left-0 after:h-[240px] after:w-[240px] after:rounded-full after:bg-[rgba(0,167,111,1)] after:blur-[290px] after:content-['']" }),
      /* @__PURE__ */ jsx("div", { className: "after:pointer-events-none after:absolute after:right-0 after:bottom-0 after:h-[240px] after:w-[240px] after:rounded-full after:bg-[rgba(97,95,255,1))] after:blur-[290px] after:content-['']" })
    ] })
  ] });
};
export {
  TopCategories as default
};
