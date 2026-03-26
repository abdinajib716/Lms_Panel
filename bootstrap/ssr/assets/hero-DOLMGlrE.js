import { jsxs, jsx } from "react/jsx-runtime";
import { C as Card, a as CardHeader, b as CardContent } from "./card-D8SB2yrw.js";
import { s as systemCurrency, c as cn } from "./utils-BmtPBcb0.js";
import { usePage, Link, router } from "@inertiajs/react";
import { Clock, VideoIcon, BadgeCheck } from "lucide-react";
import { B as Button } from "./button-jZyzwgdo.js";
import { g as getPageSection } from "./page-CO5EAoAP.js";
import Section from "./section-7thyMMDM.js";
import "react";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
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
const CourseCard3 = ({ course, className }) => {
  const { props } = usePage();
  const { user } = props.auth;
  const { translate } = props;
  const { frontend, common, button } = translate;
  const currency = systemCurrency(props.system.fields["selling_currency"]);
  const enrollmentHandler = (course2) => {
    if (course2.pricing_type === "free") {
      router.post(route("enrollments.store"), {
        user_id: user == null ? void 0 : user.id,
        course_id: course2.id,
        enrollment_type: "free"
      });
    } else {
      router.post(route("course-cart.store"), {
        course_id: course2.id
      });
    }
  };
  return /* @__PURE__ */ jsxs(Card, { className: cn(className), children: [
    /* @__PURE__ */ jsx(CardHeader, { className: "p-0", children: /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx("div", { className: "p-2 pb-0", children: /* @__PURE__ */ jsx(
      Link,
      {
        href: route("course.details", {
          slug: course.slug,
          id: course.id
        }),
        children: /* @__PURE__ */ jsxs("div", { className: "group relative h-[320px] w-full overflow-hidden rounded-lg", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: course.thumbnail || "/assets/images/blank-image.jpg",
              alt: course.title,
              className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105",
              onError: (e) => {
                const target = e.target;
                target.src = "/assets/images/blank-image.jpg";
              }
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "from-primary dark:from-primary-foreground absolute bottom-0 left-1/2 flex h-full w-full -translate-x-1/2 flex-col justify-end bg-gradient-to-t p-4 text-center text-white opacity-0 transition-all duration-200 group-hover:opacity-100", children: [
            /* @__PURE__ */ jsx("h6", { className: "text-2xl font-semibold md:text-3xl", children: course.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 md:text-lg", children: course.course_category.title })
          ] })
        ] })
      }
    ) }) }) }),
    /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4 p-5", children: [
      /* @__PURE__ */ jsx("p", { children: course.short_description }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxs(Button, { className: "px-5", onClick: () => enrollmentHandler(course), children: [
          /* @__PURE__ */ jsx(Clock, {}),
          " ",
          course.pricing_type === "free" ? common.free : `${currency == null ? void 0 : currency.symbol}${course.price}`,
          " | ",
          button.enroll_now
        ] }),
        /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "outline",
            className: "px-5",
            onClick: () => router.get(
              route("course.details", {
                slug: course.slug,
                id: course.id
              })
            ),
            children: [
              /* @__PURE__ */ jsx(VideoIcon, {}),
              " ",
              frontend.course_details
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(BadgeCheck, { size: 16 }),
        /* @__PURE__ */ jsx("span", { className: "text-sm", children: course.course_category.title })
      ] })
    ] })
  ] });
};
const Hero = () => {
  const { props } = usePage();
  const { page, heroCourses } = props;
  const heroSection = getPageSection(page, "hero");
  const courseLength = (heroCourses == null ? void 0 : heroCourses.length) ?? 0;
  return /* @__PURE__ */ jsxs(Section, { customize: props.customize, pageSection: heroSection, containerClass: "py-20", contentClass: "relative", children: [
    heroCourses.length > 0 ? /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "relative z-10 grid grid-cols-1 items-center gap-x-20",
          courseLength > 1 ? "lg:grid-cols-2" : "lg:grid-cols-1",
          courseLength > 2 ? "gap-y-10" : "gap-y-14"
        ),
        children: heroCourses == null ? void 0 : heroCourses.map((course) => /* @__PURE__ */ jsx(CourseCard3, { course, className: "h-full" }, course.id))
      }
    ) : /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "text-center font-medium", children: "Top Courses Hero Section. There is no course added." }) }),
    /* @__PURE__ */ jsx("div", { className: "after:pointer-events-none after:absolute after:bottom-10 after:left-0 after:h-[240px] after:w-[240px] after:rounded-full after:bg-[rgba(0,167,111,1)] after:blur-[290px] after:content-['']" }),
    /* @__PURE__ */ jsx("div", { className: "after:pointer-events-none after:absolute after:top-10 after:right-0 after:h-[240px] after:w-[240px] after:rounded-full after:bg-[rgba(97,95,255,1))] after:blur-[290px] after:content-['']" })
  ] });
};
export {
  Hero as default
};
