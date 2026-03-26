import { jsxs, jsx } from "react/jsx-runtime";
import { R as RatingStars } from "./rating-stars-Cw4PaRTw.js";
import { A as Avatar, a as AvatarImage, b as AvatarFallback } from "./avatar-Cr_jqfHL.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { S as Separator } from "./separator-R7EO2G8T.js";
import { usePage, Link } from "@inertiajs/react";
import { Users, Book, Star } from "lucide-react";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "react";
import "@radix-ui/react-avatar";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-separator";
const Instructor = ({ course }) => {
  const { props } = usePage();
  const { translate } = props;
  const { frontend } = translate;
  const { instructor } = course;
  const { user, courses } = instructor;
  const enrollmentsCount = courses.reduce((acc, course2) => acc + (course2.enrollments_count || 0), 0);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h6", { className: "mb-4 text-xl font-semibold", children: frontend.instructor }),
    /* @__PURE__ */ jsx(Separator, { className: "my-4" }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsx(Link, { href: route("instructors.show", instructor.id), children: /* @__PURE__ */ jsxs(Avatar, { className: "h-12 w-12", children: [
        /* @__PURE__ */ jsx(AvatarImage, { src: user.photo || "", alt: "@shadcn", className: "object-cover" }),
        /* @__PURE__ */ jsx(AvatarFallback, { children: "CN" })
      ] }) }),
      /* @__PURE__ */ jsx(Link, { href: route("instructors.show", instructor.id), children: /* @__PURE__ */ jsxs("div", { className: "group", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold group-hover:underline", children: user.name }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: user.email })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "ml-auto flex items-center gap-1", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xl font-semibold", children: instructor.total_average_rating ? Number(instructor.total_average_rating).toFixed(1) : 0 }),
        /* @__PURE__ */ jsx(RatingStars, { rating: instructor.total_average_rating, starClass: "w-4 h-5" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Users, { className: "h-5 w-5 text-gray-500" }),
        /* @__PURE__ */ jsxs("span", { children: [
          enrollmentsCount,
          " ",
          frontend.students
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Book, { className: "h-5 w-5 text-gray-500" }),
        /* @__PURE__ */ jsxs("span", { children: [
          courses.length,
          " Courses"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Star, { className: "h-5 w-5 text-gray-500" }),
        /* @__PURE__ */ jsxs("span", { children: [
          instructor.total_reviews_count,
          " Reviews"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Button, { className: "mt-6", children: /* @__PURE__ */ jsx(Link, { href: route("instructors.show", instructor.id), children: frontend.view_details }) })
  ] });
};
export {
  Instructor as default
};
