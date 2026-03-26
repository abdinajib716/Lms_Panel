import { jsx, jsxs } from "react/jsx-runtime";
import { B as ButtonGradientPrimary } from "./button-gradient-primary-Dgn8gIzu.js";
import { C as Card } from "./card-D8SB2yrw.js";
import { g as getPageSection } from "./page-CO5EAoAP.js";
import { usePage, router } from "@inertiajs/react";
import Section from "./section-7thyMMDM.js";
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
const TopCourse = () => {
  var _a, _b;
  const { props } = usePage();
  const { page, topCourse, customize } = props;
  const topCourseSection = getPageSection(page, "top_course");
  return /* @__PURE__ */ jsx(Section, { customize, pageSection: topCourseSection, containerClass: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 items-end gap-20 md:grid-cols-2 md:gap-28", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 mb-10", children: [
        /* @__PURE__ */ jsx("p", { className: "text-secondary-foreground mb-1 font-medium", children: topCourseSection == null ? void 0 : topCourseSection.title }),
        /* @__PURE__ */ jsx("h2", { className: "mb-4 text-2xl font-bold sm:text-3xl", children: topCourse == null ? void 0 : topCourse.title })
      ] }),
      /* @__PURE__ */ jsx(
        "img",
        {
          alt: topCourse == null ? void 0 : topCourse.title,
          src: (topCourse == null ? void 0 : topCourse.thumbnail) || "/assets/images/blank-image.jpg",
          className: "relative z-10 h-[348px] w-full rounded-xl object-cover object-center"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "after:pointer-events-none after:absolute after:top-1/2 after:left-1/2 after:h-[260px] after:w-[260px] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-[rgba(0,167,111,1)] after:blur-[290px] after:content-['']" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 grid grid-cols-1 gap-7 pt-12 pb-7 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxs(Card, { className: "px-6 py-7", children: [
          /* @__PURE__ */ jsx("h2", { className: "mb-2 font-bold sm:text-3xl", children: topCourse == null ? void 0 : topCourse.formatted_duration }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Course Duration" })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "px-6 py-7", children: [
          /* @__PURE__ */ jsx("h2", { className: "mb-2 font-bold sm:text-3xl", children: topCourse == null ? void 0 : topCourse.total_lessons }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
            "Course Lesson",
            (topCourse == null ? void 0 : topCourse.total_lessons) > 1 ? "s" : ""
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "px-6 py-7", children: [
          /* @__PURE__ */ jsx("h2", { className: "mb-2 font-bold sm:text-3xl", children: topCourse == null ? void 0 : topCourse.total_quizzes }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
            "Total Quiz",
            (topCourse == null ? void 0 : topCourse.total_quizzes) > 1 ? "zes" : ""
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "px-6 py-7", children: [
          /* @__PURE__ */ jsx("h2", { className: "mb-2 font-bold sm:text-3xl", children: topCourse == null ? void 0 : topCourse.enrollments_count }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
            "Enrolled Student",
            ((topCourse == null ? void 0 : topCourse.enrollments_count) ?? 0) > 1 ? "s" : ""
          ] })
        ] })
      ] }),
      ((_a = topCourseSection == null ? void 0 : topCourseSection.properties) == null ? void 0 : _a.button_text) && /* @__PURE__ */ jsx(
        ButtonGradientPrimary,
        {
          shadow: false,
          onClick: () => router.post(route("course-cart.store"), {
            course_id: topCourse.id
          }),
          className: "relative z-10 mt-10 md:mt-14",
          children: (_b = topCourseSection == null ? void 0 : topCourseSection.properties) == null ? void 0 : _b.button_text
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "after:pointer-events-none after:absolute after:right-[120px] after:bottom-10 after:h-[200px] after:w-[200px] after:rounded-full after:bg-[rgba(97,95,255,1))] after:blur-[290px] after:content-['']" })
    ] })
  ] }) });
};
export {
  TopCourse as default
};
