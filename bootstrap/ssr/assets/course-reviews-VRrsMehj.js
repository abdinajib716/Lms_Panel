import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { S as StudentFeedback } from "./student-feedback-C9_Duvqa.js";
import { T as TableFooter } from "./table-footer-Bf3DvTcP.js";
import { A as Avatar, a as AvatarImage, b as AvatarFallback } from "./avatar-Cr_jqfHL.js";
import { c as cn } from "./utils-BmtPBcb0.js";
import { usePage } from "@inertiajs/react";
import { format } from "date-fns";
import { Star } from "lucide-react";
import "./progress-BuQTjce4.js";
import "@radix-ui/react-progress";
import "./use-lang-44ndmTOc.js";
import "./dropdown-menu-BIfW6iuW.js";
import "react";
import "@radix-ui/react-dropdown-menu";
import "./route-DlE7FdTW.js";
import "./button-jZyzwgdo.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./scroll-area-DPHRDnwL.js";
import "@radix-ui/react-scroll-area";
import "@radix-ui/react-avatar";
import "clsx";
import "tailwind-merge";
const CourseReviews = () => {
  const { props } = usePage();
  const { translate } = props;
  const { frontend } = translate;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(StudentFeedback, { totalReviews: props.totalReviews }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 border-t pt-6", children: [
      /* @__PURE__ */ jsx("h3", { className: "mb-6 text-xl font-semibold", children: frontend.student_reviews }),
      /* @__PURE__ */ jsx("div", { className: "space-y-6", children: props.reviews.data.length > 0 ? props.reviews.data.map((review) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxs(Avatar, { className: "mt-1 h-8 w-8", children: [
            /* @__PURE__ */ jsx(AvatarImage, { src: review.user.photo || "", alt: review.user.name, className: "object-cover" }),
            /* @__PURE__ */ jsx(AvatarFallback, { children: review.user.name.charAt(0) })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold", children: review.user.name }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("div", { className: "flex gap-1", children: [1, 2, 3, 4, 5].map((star) => /* @__PURE__ */ jsx("button", { type: "button", children: /* @__PURE__ */ jsx(
                Star,
                {
                  className: cn("h-4 w-4", star <= review.rating ? "fill-amber-400 text-amber-400" : "text-gray-300")
                }
              ) }, star)) }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-xs", children: format(new Date(review.created_at), "MMM d, yyyy h:mm a") })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm", children: review.review })
      ] }, review.id)) : /* @__PURE__ */ jsx("p", { className: "p-3 text-center", children: frontend.no_reviews_found }) }),
      /* @__PURE__ */ jsx(
        TableFooter,
        {
          className: "mt-6",
          routeName: "course.details",
          paginationInfo: props.reviews,
          routeParams: { slug: props.course.slug, id: props.course.id }
        }
      )
    ] })
  ] });
};
export {
  CourseReviews as default
};
