import { jsxs, jsx } from "react/jsx-runtime";
import { R as RatingStars } from "./rating-stars-Cw4PaRTw.js";
import { A as Avatar, a as AvatarImage, b as AvatarFallback } from "./avatar-Cr_jqfHL.js";
import { c as courseLanguages } from "./course-languages-oEC7DuVF.js";
import { d as getCourseDuration } from "./utils-BmtPBcb0.js";
import { usePage, Link } from "@inertiajs/react";
import { Languages, GraduationCap, Users, Clock } from "lucide-react";
import "react";
import "@radix-ui/react-avatar";
import "clsx";
import "tailwind-merge";
const CourseHeader = ({ course }) => {
  const { props } = usePage();
  const { translate } = props;
  const { frontend } = translate;
  const { title, short_description, instructor, average_rating } = course;
  const courseLanguage = courseLanguages.find((language) => language.value === course.language);
  return /* @__PURE__ */ jsxs("div", { className: "space-y-7", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-3xl font-semibold md:text-4xl", children: title }),
    /* @__PURE__ */ jsx("p", { children: short_description }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-y-4 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsx(Link, { href: route("instructors.show", instructor.id), children: /* @__PURE__ */ jsxs("div", { className: "group flex items-center gap-2", children: [
        /* @__PURE__ */ jsxs(Avatar, { children: [
          /* @__PURE__ */ jsx(AvatarImage, { src: instructor.user.photo || "", alt: instructor.user.name, className: "object-cover" }),
          /* @__PURE__ */ jsx(AvatarFallback, { children: instructor.user.name[0] })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "font-medium group-hover:underline", children: instructor.user.name })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsx("p", { className: "font-semibold", children: average_rating ? Number(average_rating).toFixed(1) : 0 }),
        /* @__PURE__ */ jsx(RatingStars, { rating: average_rating || 0, starClass: "w-4 h-5" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Languages, { className: "h-5 w-5" }),
        /* @__PURE__ */ jsx("span", { children: courseLanguage == null ? void 0 : courseLanguage.label })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(GraduationCap, { className: "h-5 w-5" }),
        /* @__PURE__ */ jsx("span", { children: frontend.course_certificate })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Users, { className: "h-5 w-5" }),
        /* @__PURE__ */ jsxs("span", { children: [
          course.enrollments_count || 0,
          " ",
          frontend.enrolled_students
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Clock, { className: "h-5 w-5" }),
        /* @__PURE__ */ jsx("span", { children: getCourseDuration(course) })
      ] })
    ] })
  ] });
};
export {
  CourseHeader as default
};
