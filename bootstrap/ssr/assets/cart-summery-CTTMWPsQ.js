import { jsx, jsxs } from "react/jsx-runtime";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Card, b as CardContent } from "./card-D8SB2yrw.js";
import { I as Input } from "./input-C6-Ta46A.js";
import { S as Separator } from "./separator-R7EO2G8T.js";
import { s as systemCurrency } from "./utils-BmtPBcb0.js";
import { usePage, router } from "@inertiajs/react";
import { useState } from "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-separator";
import "clsx";
import "tailwind-merge";
const CartSummery = () => {
  const { props } = usePage();
  const [couponCode, setCouponCode] = useState("");
  const { cart, subtotal, coupon, discountedPrice, taxAmount, totalPrice, translate } = props;
  const { frontend, button, input } = translate;
  const taxPercentage = taxAmount > 0 && discountedPrice > 0 ? (taxAmount / discountedPrice * 100).toFixed(0) : 0;
  const currency = systemCurrency(props.system.fields["selling_currency"]);
  return /* @__PURE__ */ jsx(Card, { className: "sticky top-24", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
    /* @__PURE__ */ jsx("h2", { className: "mb-4 text-xl font-bold", children: frontend.payment_summary }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: frontend.sub_total }),
        /* @__PURE__ */ jsxs("span", { children: [
          subtotal,
          " ",
          currency == null ? void 0 : currency.symbol
        ] })
      ] }),
      coupon && /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-green-600", children: [
        /* @__PURE__ */ jsxs("span", { children: [
          frontend.discount,
          " (",
          coupon.code,
          ")"
        ] }),
        /* @__PURE__ */ jsxs("span", { children: [
          "- ",
          (subtotal - discountedPrice).toFixed(2),
          " ",
          currency == null ? void 0 : currency.symbol
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground", children: [
          frontend.tax,
          " (",
          taxPercentage ?? 0,
          "%)"
        ] }),
        /* @__PURE__ */ jsxs("span", { children: [
          "+ ",
          taxAmount.toFixed(2),
          " ",
          currency == null ? void 0 : currency.symbol
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between font-bold", children: [
        /* @__PURE__ */ jsx("span", { children: frontend.total }),
        /* @__PURE__ */ jsxs("span", { children: [
          totalPrice.toFixed(2),
          " ",
          currency == null ? void 0 : currency.symbol
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "pt-4", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsx(
          Input,
          {
            value: couponCode,
            defaultValue: coupon ? coupon.code : "",
            onChange: (e) => setCouponCode(e.target.value),
            placeholder: input.coupon_placeholder
          }
        ) }),
        /* @__PURE__ */ jsx(Button, { type: "button", onClick: () => router.get(route("course-cart.index", { coupon: couponCode })), children: button.apply })
      ] }) }),
      cart.length > 0 && /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", type: "button", className: "mt-4 w-full", disabled: cart.length === 0, children: /* @__PURE__ */ jsx("a", { href: route("payments.index", { slug: "web", coupon: coupon ? coupon.code : "" }), children: button.continue }) })
    ] })
  ] }) });
};
export {
  CartSummery as default
};
