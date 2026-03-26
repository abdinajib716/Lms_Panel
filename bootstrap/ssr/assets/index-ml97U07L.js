import { jsxs, jsx } from "react/jsx-runtime";
import { C as Card, b as CardContent } from "./card-D8SB2yrw.js";
import { L as LandingLayout } from "./landing-layout-DaxsNL6G.js";
import CartSummery from "./cart-summery-CTTMWPsQ.js";
import CourseCard from "./course-card-Cpwex7w_.js";
import "react";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "./app-logo-42nmPdEQ.js";
import "@inertiajs/react";
import "./button-jZyzwgdo.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "lucide-react/dynamic";
import "./main-BqrosZ6t.js";
import "next-themes";
import "sonner";
import "./dropdown-menu-BIfW6iuW.js";
import "@radix-ui/react-dropdown-menu";
import "lucide-react";
import "./scroll-area-DPHRDnwL.js";
import "@radix-ui/react-scroll-area";
import "./use-auth-8FvJer_G.js";
import "./use-screen-B7SDA5zE.js";
import "./appearance-Df_e7R4w.js";
import "./language-BbuOCfpR.js";
import "./separator-R7EO2G8T.js";
import "@radix-ui/react-separator";
import "./notification-BXalLCUz.js";
import "./popover-BV7JTqNd.js";
import "@radix-ui/react-popover";
import "date-fns";
import "./profile-toggle-D0g01Tbw.js";
import "./avatar-Cr_jqfHL.js";
import "@radix-ui/react-avatar";
import "nanoid";
import "./input-C6-Ta46A.js";
const Index = (props) => {
  const { cart, translate } = props;
  const { frontend } = translate;
  return /* @__PURE__ */ jsxs("div", { className: "container grid grid-cols-1 gap-8 py-6 lg:grid-cols-3", children: [
    /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2", children: [
      /* @__PURE__ */ jsx("h1", { className: "mb-6 text-2xl font-bold", children: frontend.cart_items }),
      cart.length === 0 ? /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsx("p", { className: "text-muted-foreground py-8 text-center", children: frontend.your_cart_is_empty }) }) }) : /* @__PURE__ */ jsx("div", { className: "space-y-4", children: cart.map((item) => /* @__PURE__ */ jsx(CourseCard, { course: item.course }, item.id)) })
    ] }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(CartSummery, {}) })
  ] });
};
Index.layout = (page) => /* @__PURE__ */ jsx(LandingLayout, { children: page, customizable: false });
export {
  Index as default
};
