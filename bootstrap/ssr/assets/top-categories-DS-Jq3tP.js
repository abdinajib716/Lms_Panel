import { jsx, jsxs } from "react/jsx-runtime";
import { C as Card } from "./card-D8SB2yrw.js";
import { u as useLang } from "./use-lang-44ndmTOc.js";
import { c as cn, h as getColorWithOpacity } from "./utils-BmtPBcb0.js";
import { Link, usePage } from "@inertiajs/react";
import { ExternalLink } from "lucide-react";
import { DynamicIcon } from "lucide-react/dynamic";
import { g as getPageSection } from "./page-CO5EAoAP.js";
import Section from "./section-7thyMMDM.js";
import "react";
import "clsx";
import "tailwind-merge";
import "./dialog-DD5SXV81.js";
import "@radix-ui/react-dialog";
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
const CategoryCard1 = ({ category, className, ...props }) => {
  const { common } = useLang();
  return /* @__PURE__ */ jsx(Link, { href: route("category.courses", { category: category.slug }), children: /* @__PURE__ */ jsxs(
    Card,
    {
      className: cn(
        "hover:!shadow-card min:h-[110px] bg-secondary-lighter border-secondary-light text-secondary-foreground gap-4 rounded-2xl p-5 !shadow-none",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx(DynamicIcon, { size: 28, name: category.icon }),
        /* @__PURE__ */ jsx("p", { className: "text-primary mt-4 mb-8 text-xl font-semibold", children: category.title }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-sm", children: [
            category.courses_count,
            " ",
            common.courses
          ] }),
          /* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4" })
        ] })
      ]
    }
  ) });
};
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
  return /* @__PURE__ */ jsxs(Section, { customize, pageSection: topCategoriesSection, containerClass: "z-10 py-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-secondary/10 mx-auto mb-10 text-center md:max-w-2xl", children: [
      /* @__PURE__ */ jsx("p", { className: "text-secondary-foreground mb-1 font-medium", children: topCategoriesSection == null ? void 0 : topCategoriesSection.title }),
      /* @__PURE__ */ jsx("h2", { className: "mb-4 text-3xl font-bold sm:text-4xl", children: topCategoriesSection == null ? void 0 : topCategoriesSection.sub_title }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: topCategoriesSection == null ? void 0 : topCategoriesSection.description })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4", children: topCategories.map((category, index) => {
      const colorIndex = index % colors.length;
      const currentColor = colors[colorIndex];
      return /* @__PURE__ */ jsx(
        CategoryCard1,
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
  ] });
};
export {
  TopCategories as default
};
