import { jsxs, jsx } from "react/jsx-runtime";
import { C as CourseCard2 } from "./course-card-2-CkYsUCLz.js";
import { T as Tabs } from "./tabs-CPx41tqt.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { T as TabsList, a as TabsTrigger, b as TabsContent } from "./tabs-BOXC0x8t.js";
import { g as getPageSection } from "./page-CO5EAoAP.js";
import { usePage, Link } from "@inertiajs/react";
import Section from "./section-7thyMMDM.js";
import "./avatar-Cr_jqfHL.js";
import "react";
import "@radix-ui/react-avatar";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "./card-D8SB2yrw.js";
import "./tooltip-DswKljFZ.js";
import "@radix-ui/react-tooltip";
import "lucide-react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-tabs";
import "./dialog-DD5SXV81.js";
import "@radix-ui/react-dialog";
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
import "./icon-picker-_EIJQgy3.js";
import "./debounce-ZFxqVthq.js";
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
const CategoryCourses = () => {
  var _a, _b, _c;
  const { props } = usePage();
  const { page, customize, categoryTopCourses } = props;
  const categoryCoursesSection = getPageSection(page, "category_courses");
  console.log(categoryTopCourses);
  return /* @__PURE__ */ jsxs(Section, { customize, pageSection: categoryCoursesSection, containerClass: "py-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-4 text-3xl font-bold sm:text-4xl", children: categoryCoursesSection == null ? void 0 : categoryCoursesSection.title }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: categoryCoursesSection == null ? void 0 : categoryCoursesSection.description })
    ] }),
    categoryTopCourses[0] && /* @__PURE__ */ jsxs(Tabs, { defaultValue: categoryTopCourses[0].slug, children: [
      /* @__PURE__ */ jsx("div", { className: "mt-6 flex w-full max-w-[1000px] overflow-x-auto overflow-y-hidden", children: /* @__PURE__ */ jsx(TabsList, { className: "h-[60px] justify-center px-2", children: categoryTopCourses.map((category) => /* @__PURE__ */ jsx(TabsTrigger, { value: category.slug, className: "h-11 cursor-pointer text-base", children: category.title }, category.id)) }) }),
      categoryTopCourses.map((category) => /* @__PURE__ */ jsx(TabsContent, { value: category.slug, className: "mt-10", children: category.courses && category.courses.length > 0 ? /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3", children: category.courses.map((course) => /* @__PURE__ */ jsx(CourseCard2, { course }, course.id)) }) : /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-center", children: "No courses found" }) }, category.id))
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-10 flex items-center justify-center", children: ((_a = categoryCoursesSection == null ? void 0 : categoryCoursesSection.properties) == null ? void 0 : _a.button_text) && /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", className: "h-[42px] px-5", children: /* @__PURE__ */ jsx(Link, { href: ((_b = categoryCoursesSection == null ? void 0 : categoryCoursesSection.properties) == null ? void 0 : _b.button_link) || "", children: (_c = categoryCoursesSection == null ? void 0 : categoryCoursesSection.properties) == null ? void 0 : _c.button_text }) }) })
  ] });
};
export {
  CategoryCourses as default
};
