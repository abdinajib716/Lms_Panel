import { jsx } from "react/jsx-runtime";
import { C as CourseCard1 } from "./course-card-1-BLS66nbX.js";
import { C as Card } from "./card-D8SB2yrw.js";
import { usePage } from "@inertiajs/react";
import "./button-jZyzwgdo.js";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "./tooltip-DswKljFZ.js";
import "@radix-ui/react-tooltip";
import "lucide-react";
const Wishlist = ({ wishlists }) => {
  const { props } = usePage();
  const { frontend } = props.translate;
  return wishlists && wishlists.length > 0 ? /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3", children: wishlists.map(({ id, course }) => /* @__PURE__ */ jsx(CourseCard1, { course, wishlists }, id)) }) : /* @__PURE__ */ jsx(Card, { className: "flex items-center justify-center p-6", children: /* @__PURE__ */ jsx("p", { children: frontend.no_wishlist_items }) });
};
export {
  Wishlist as default
};
