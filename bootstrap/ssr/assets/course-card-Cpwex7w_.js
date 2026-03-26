import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Card, b as CardContent } from "./card-D8SB2yrw.js";
import { s as systemCurrency } from "./utils-BmtPBcb0.js";
import { usePage, useForm } from "@inertiajs/react";
import { Trash } from "lucide-react";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
const CourseCard = ({ course }) => {
  const { system } = usePage().props;
  const { delete: destroy, processing } = useForm();
  const currency = systemCurrency(system.fields["selling_currency"]);
  return /* @__PURE__ */ jsx(Card, { className: "overflow-hidden", children: /* @__PURE__ */ jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row", children: [
    /* @__PURE__ */ jsx("div", { className: "bg-muted h-48 w-full overflow-hidden md:w-60", children: /* @__PURE__ */ jsx("img", { alt: course.title, className: "h-full w-full object-cover", src: course.thumbnail ?? "/assets/images/blank-image.jpg" }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col justify-between p-5", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "mb-2 text-xl font-semibold", children: course.title }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4 line-clamp-2", children: course.short_description })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("p", { className: "capitalize", children: course.pricing_type === "free" ? course.pricing_type : course.discount ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("span", { className: "text-xl font-bold", children: [
            currency == null ? void 0 : currency.symbol,
            course.discount_price
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground ml-2 text-sm line-through", children: [
            currency == null ? void 0 : currency.symbol,
            course.price
          ] })
        ] }) : /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("span", { className: "text-xl font-bold", children: [
          currency == null ? void 0 : currency.symbol,
          course.price
        ] }) }) }),
        /* @__PURE__ */ jsx(Button, { size: "icon", variant: "ghost", onClick: () => destroy(route("course-cart.destroy", course.id)), disabled: processing, children: /* @__PURE__ */ jsx(Trash, { className: "h-5 w-5" }) })
      ] })
    ] })
  ] }) }) });
};
export {
  CourseCard as default
};
