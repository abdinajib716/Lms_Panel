import { jsx, jsxs } from "react/jsx-runtime";
import { C as Card } from "./card-D8SB2yrw.js";
import { c as cn } from "./utils-BmtPBcb0.js";
import { Link } from "@inertiajs/react";
import { DynamicIcon } from "lucide-react/dynamic";
const CategoryCard3 = ({ category, className, ...props }) => {
  return /* @__PURE__ */ jsx(Link, { href: route("category.courses", { category: category.slug }), children: /* @__PURE__ */ jsxs(Card, { className: cn("border-muted hover:!shadow-card rounded-2xl p-6 !shadow-none", className), ...props, children: [
    /* @__PURE__ */ jsx(DynamicIcon, { size: 24, name: category.icon }),
    /* @__PURE__ */ jsx("p", { className: "text-primary pt-5 pb-8 text-xl font-semibold", children: category.title }),
    /* @__PURE__ */ jsxs("p", { className: "text-sm", children: [
      category.courses_count,
      " Courses"
    ] })
  ] }) });
};
export {
  CategoryCard3 as C
};
