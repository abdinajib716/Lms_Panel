import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Card, a as CardHeader, b as CardContent, e as CardFooter } from "./card-D8SB2yrw.js";
import { T as TooltipProvider, a as Tooltip, b as TooltipTrigger, c as TooltipContent } from "./tooltip-DswKljFZ.js";
import { s as systemCurrency, c as cn, d as getCourseDuration } from "./utils-BmtPBcb0.js";
import { usePage, Link, router } from "@inertiajs/react";
import { Heart, Users, Clock, Star } from "lucide-react";
const CourseCard1 = ({ course, viewType = "grid", className, wishlists }) => {
  const { props } = usePage();
  const { user } = props.auth;
  const { translate } = props;
  const { button, frontend, common } = translate;
  const isWishlisted = wishlists == null ? void 0 : wishlists.find((wishlist) => wishlist.course_id === course.id);
  const currency = systemCurrency(props.system.fields["selling_currency"]);
  const handleWishlist = () => {
    if (isWishlisted) {
      router.delete(route("course-wishlists.destroy", { id: isWishlisted.id }));
    } else {
      router.post(route("course-wishlists.store", { user_id: user == null ? void 0 : user.id, course_id: course.id }));
    }
  };
  return /* @__PURE__ */ jsxs(Card, { className: cn("group p-0", viewType === "list" && "sm:flex sm:w-full sm:flex-row sm:justify-between", className), children: [
    /* @__PURE__ */ jsx(CardHeader, { className: "p-0", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: cn("p-2 pb-0", viewType === "list" && "pb-2"), children: /* @__PURE__ */ jsx(
        Link,
        {
          href: route("course.details", {
            slug: course.slug,
            id: course.id
          }),
          children: /* @__PURE__ */ jsx("div", { className: cn("relative h-[190px] overflow-hidden rounded-lg", viewType === "list" && "sm:w-[260px]"), children: /* @__PURE__ */ jsx(
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
      wishlists && /* @__PURE__ */ jsx(TooltipProvider, { delayDuration: 0, children: /* @__PURE__ */ jsxs(Tooltip, { children: [
        /* @__PURE__ */ jsx(TooltipTrigger, { className: "absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100", children: /* @__PURE__ */ jsx(Button, { size: "icon", variant: "ghost", className: "bg-white/80 hover:bg-white", onClick: handleWishlist, children: /* @__PURE__ */ jsx(Heart, { className: cn("h-4 w-4", isWishlisted && "text-red-500") }) }) }),
        /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsxs("p", { children: [
          " ",
          isWishlisted ? frontend.remove_from_wishlist : frontend.add_to_wishlist
        ] }) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: cn(viewType === "list" && "flex w-[calc(100%-272px)] flex-col justify-between"), children: [
      /* @__PURE__ */ jsxs(CardContent, { className: cn("p-4", viewType === "list" && "h-full"), children: [
        /* @__PURE__ */ jsxs("div", { className: "text-secondary-foreground mb-1 flex items-center gap-1.5 text-xs", children: [
          /* @__PURE__ */ jsx(Users, { className: "h-3 w-3" }),
          /* @__PURE__ */ jsxs("span", { children: [
            course.enrollments_count || 0,
            " ",
            course.enrollments_count || 0 > 0 ? ` ${common.students}` : ` ${frontend.student}`
          ] }),
          /* @__PURE__ */ jsx(Clock, { className: "ml-2 h-3 w-3" }),
          /* @__PURE__ */ jsx("span", { children: getCourseDuration(course, "readable") })
        ] }),
        /* @__PURE__ */ jsxs(
          Link,
          {
            className: cn("space-y-3", viewType === "list" && "sm:flex sm:h-full sm:flex-col sm:justify-between sm:py-4"),
            href: route("course.details", {
              slug: course.slug,
              id: course.id
            }),
            children: [
              /* @__PURE__ */ jsx("p", { className: "hover:text-secondary-foreground font-semibold", children: course.title }),
              /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground flex items-center gap-1.5 text-sm", children: [
                /* @__PURE__ */ jsx(Star, { className: "h-3.5 w-3.5 fill-amber-400 text-amber-400" }),
                /* @__PURE__ */ jsx("span", { children: course.average_rating ? Number(course.average_rating).toFixed(2) : "0.00" }),
                /* @__PURE__ */ jsxs("span", { children: [
                  "(",
                  course.reviews_count || 0,
                  " ",
                  common.reviews,
                  ")"
                ] })
              ] })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(CardFooter, { className: "flex w-full items-center justify-between p-4 pt-0", children: [
        /* @__PURE__ */ jsx("p", { className: "capitalize", children: course.pricing_type === "free" ? common.free : course.discount ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("span", { className: "font-semibold", children: [
            currency == null ? void 0 : currency.symbol,
            course.discount_price
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground ml-2 text-sm font-medium line-through", children: [
            currency == null ? void 0 : currency.symbol,
            course.price
          ] })
        ] }) : /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("span", { className: "font-semibold", children: [
          currency == null ? void 0 : currency.symbol,
          course.price
        ] }) }) }),
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", className: "border-secondary-light hover:bg-background hover:border-primary px-2.5", children: /* @__PURE__ */ jsx(
          Link,
          {
            href: route("course.details", {
              slug: course.slug,
              id: course.id
            }),
            children: button.learn_more
          }
        ) })
      ] })
    ] })
  ] });
};
export {
  CourseCard1 as C
};
