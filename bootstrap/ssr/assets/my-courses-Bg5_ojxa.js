import { jsxs, jsx } from "react/jsx-runtime";
import { A as Avatar, a as AvatarImage, b as AvatarFallback } from "./avatar-Cr_jqfHL.js";
import { C as Card, a as CardHeader, b as CardContent } from "./card-D8SB2yrw.js";
import { c as cn } from "./utils-BmtPBcb0.js";
import { Link, usePage } from "@inertiajs/react";
import "react";
import "@radix-ui/react-avatar";
import "clsx";
import "tailwind-merge";
const CourseCard4 = ({ enrollment, className }) => {
  const { course } = enrollment;
  return /* @__PURE__ */ jsxs(Card, { className: cn("overflow-hidden shadow-sm", className), children: [
    /* @__PURE__ */ jsx(CardHeader, { className: "p-0", children: /* @__PURE__ */ jsx(
      Link,
      {
        className: "p-2 pb-0",
        href: route("student.show", {
          id: course.id,
          tab: "modules"
        }),
        children: /* @__PURE__ */ jsx("div", { className: "relative h-[220px] w-full overflow-hidden rounded-lg", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: course.thumbnail || "/assets/images/blank-image.jpg",
            alt: course.title,
            className: "h-full w-full object-cover transition-transform duration-300 hover:scale-105",
            onError: (e) => {
              const target = e.target;
              target.src = "/assets/images/blank-image.jpg";
            }
          }
        ) })
      }
    ) }),
    /* @__PURE__ */ jsxs(CardContent, { className: "p-4", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-3 flex items-center gap-2", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxs(Avatar, { className: "h-5 w-5", children: [
          /* @__PURE__ */ jsx(AvatarImage, { src: course.instructor.user.photo || "", alt: course.instructor.user.name, className: "object-cover" }),
          /* @__PURE__ */ jsx(AvatarFallback, { children: "IM" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xs font-medium", children: course.instructor.user.name })
      ] }) }),
      /* @__PURE__ */ jsx(
        Link,
        {
          href: route("student.show", {
            id: course.id,
            tab: "modules"
          }),
          children: /* @__PURE__ */ jsx("p", { className: "hover:text-secondary-foreground text-sm font-semibold", children: course.title })
        }
      )
    ] })
  ] });
};
const MyCourses = ({ enrollments }) => {
  const { props } = usePage();
  const { frontend } = props.translate;
  return enrollments && enrollments.length > 0 ? /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3", children: enrollments.map((enrollment) => /* @__PURE__ */ jsx(CourseCard4, { enrollment }, enrollment.id)) }) : /* @__PURE__ */ jsx(Card, { className: "flex items-center justify-center p-6", children: /* @__PURE__ */ jsx("p", { children: frontend.no_courses_found }) });
};
export {
  MyCourses as default
};
