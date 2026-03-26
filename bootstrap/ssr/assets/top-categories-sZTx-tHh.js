import { jsx, jsxs } from "react/jsx-runtime";
import { C as CategoryCard3 } from "./category-card-4-CRB8OUZz.js";
import { g as getPageSection } from "./page-CO5EAoAP.js";
import { h as getColorWithOpacity } from "./utils-BmtPBcb0.js";
import { usePage } from "@inertiajs/react";
import Section from "./section-7thyMMDM.js";
import "./card-D8SB2yrw.js";
import "react";
import "lucide-react/dynamic";
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
const TopCategories = () => {
  const { props } = usePage();
  const { page, customize, topCategories } = props;
  const topCategoriesSection = getPageSection(page, "top_categories");
  const colors = [
    "rgba(79,57,246,1)",
    "rgba(0,122,85,1)",
    "rgba(255,171,0,1)",
    "rgba(236,0,63,1)",
    "rgba(255,171,0,1)"
    // 'rgba(236,0,63,1)',
    // 'rgba(79,57,246,1)',
    // 'rgba(0,122,85,1)',
  ];
  return /* @__PURE__ */ jsx(Section, { customize, pageSection: topCategoriesSection, containerClass: "mt-20 py-20", contentClass: "relative", children: /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col items-center justify-between gap-8 md:flex-row", children: [
    /* @__PURE__ */ jsxs("div", { className: "w-full md:max-w-[306px]", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-2 text-3xl font-bold sm:text-4xl", children: topCategoriesSection == null ? void 0 : topCategoriesSection.title }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: topCategoriesSection == null ? void 0 : topCategoriesSection.description })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "z-10 grid w-full grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3", children: topCategories.map((category, index) => {
      const colorIndex = index % colors.length;
      const currentColor = colors[colorIndex];
      return /* @__PURE__ */ jsx(
        CategoryCard3,
        {
          category,
          style: {
            color: currentColor,
            borderColor: getColorWithOpacity(currentColor, 0.15),
            backgroundColor: getColorWithOpacity(currentColor, 0.04)
          }
        },
        category.id
      );
    }) })
  ] }) });
};
export {
  TopCategories as default
};
