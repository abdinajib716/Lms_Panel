import { jsxs, jsx } from "react/jsx-runtime";
import { A as Avatar, a as AvatarImage, b as AvatarFallback } from "./avatar-Cr_jqfHL.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Card, a as CardHeader, b as CardContent, e as CardFooter } from "./card-D8SB2yrw.js";
import { T as TooltipProvider, a as Tooltip, b as TooltipTrigger, c as TooltipContent } from "./tooltip-DswKljFZ.js";
import { s as systemCurrency, c as cn, d as getCourseDuration } from "./utils-BmtPBcb0.js";
import { usePage, Link, router } from "@inertiajs/react";
import { Heart, Star, Users, Clock, TrendingUp } from "lucide-react";
const CourseCard2 = ({ course, className, wishlists }) => {
  const { props } = usePage();
  const { user } = props.auth;
  const { button, common, frontend } = props.translate;
  const isWishlisted = wishlists == null ? void 0 : wishlists.find((wishlist) => wishlist.course_id === course.id);
  const currency = systemCurrency(props.system.fields["selling_currency"]);
  const handleWishlist = () => {
    if (isWishlisted) {
      router.delete(route("course-wishlists.destroy", { id: isWishlisted.id }));
    } else {
      router.post(route("course-wishlists.store", { user_id: user == null ? void 0 : user.id, course_id: course.id }));
    }
  };
  return /* @__PURE__ */ jsxs(Card, { className: cn(className), children: [
    /* @__PURE__ */ jsx(CardHeader, { className: "p-0", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx(
        Link,
        {
          href: route("course.details", {
            slug: course.slug,
            id: course.id
          }),
          children: /* @__PURE__ */ jsx("div", { className: "relative h-[300px] w-full overflow-hidden rounded-t-lg", children: /* @__PURE__ */ jsx(
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
      ),
      wishlists && /* @__PURE__ */ jsx(TooltipProvider, { delayDuration: 0, children: /* @__PURE__ */ jsxs(Tooltip, { children: [
        /* @__PURE__ */ jsx(TooltipTrigger, { className: "absolute top-2 right-2 z-10", children: /* @__PURE__ */ jsx(Button, { size: "icon", variant: "ghost", className: "bg-white/80 hover:bg-white", onClick: handleWishlist, children: /* @__PURE__ */ jsx(Heart, { className: cn("h-4 w-4", isWishlisted && "text-red-500") }) }) }),
        /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsxs("p", { children: [
          " ",
          isWishlisted ? button.remove_from_wishlist : button.add_to_wishlist
        ] }) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
      /* @__PURE__ */ jsxs(CardContent, { className: "p-0 pb-5", children: [
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
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxs(Avatar, { className: "h-8 w-8", children: [
            /* @__PURE__ */ jsx(AvatarImage, { src: course.instructor.user.photo || "", alt: course.instructor.user.name, className: "object-cover" }),
            /* @__PURE__ */ jsx(AvatarFallback, { children: "IM" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: course.instructor.user.name })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(CardFooter, { className: "border-muted flex items-center gap-5 border-t p-0 pt-5", children: [
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
  CourseCard2 as C
};
