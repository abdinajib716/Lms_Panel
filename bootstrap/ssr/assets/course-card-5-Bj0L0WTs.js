import { jsxs, jsx } from "react/jsx-runtime";
import { C as Card, a as CardHeader, b as CardContent, e as CardFooter } from "./card-D8SB2yrw.js";
import { s as systemCurrency, c as cn, d as getCourseDuration } from "./utils-BmtPBcb0.js";
import { usePage, Link } from "@inertiajs/react";
import { Star, Users, Clock, TrendingUp } from "lucide-react";
import { S as Separator } from "./separator-R7EO2G8T.js";
const CourseCard5 = ({ course, className }) => {
  const { props } = usePage();
  const { common, frontend } = props.translate;
  const currency = systemCurrency(props.system.fields["selling_currency"]);
  return /* @__PURE__ */ jsxs(Card, { className: cn("flex items-center", className), children: [
    /* @__PURE__ */ jsx(CardHeader, { className: "p-0", children: /* @__PURE__ */ jsx(
      Link,
      {
        href: route("course.details", {
          slug: course.slug,
          id: course.id
        }),
        children: /* @__PURE__ */ jsx("div", { className: "relative h-[260px] w-[250px] overflow-hidden rounded-l-lg", children: /* @__PURE__ */ jsx(
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
    /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col justify-between p-5", children: [
      /* @__PURE__ */ jsxs(CardContent, { className: "p-0", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-6 flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("p", { className: "text-secondary-foreground text-xs uppercase", children: course.course_category.title }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            course.discount ? /* @__PURE__ */ jsxs("p", { className: "pt-1 text-gray-300 line-through", children: [
              currency == null ? void 0 : currency.symbol,
              course.discount_price
            ] }) : "",
            course.pricing_type === "free" ? /* @__PURE__ */ jsx("p", { className: "text-lg font-semibold", children: common.free }) : /* @__PURE__ */ jsxs("p", { className: "text-lg font-semibold", children: [
              currency == null ? void 0 : currency.symbol,
              course.price
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          Link,
          {
            href: route("course.details", {
              slug: course.slug,
              id: course.id
            }),
            children: /* @__PURE__ */ jsx("p", { className: "hover:text-secondary-foreground text-lg font-semibold", children: course.title })
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-8 py-5", children: [
          /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(Star, { className: "h-3.5 w-3.5 fill-amber-400 text-amber-400" }),
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: course.average_rating || 0 }),
            /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground text-sm", children: [
              "(",
              course.reviews_count || 0,
              " ",
              common.reviews,
              ")"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(Users, { className: "h-3.5 w-3.5" }),
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: course.enrollments_count || 0 }),
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground text-sm", children: course.enrollments_count || 0 > 0 ? common.students : frontend.student })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, { className: "bg-muted" }),
      /* @__PURE__ */ jsxs(CardFooter, { className: "flex items-center gap-5 p-0 pt-6", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm", children: getCourseDuration(course, "readable") })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(TrendingUp, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm", children: course.level })
        ] })
      ] })
    ] })
  ] });
};
export {
  CourseCard5 as C
};
