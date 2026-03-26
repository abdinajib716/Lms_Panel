import { jsxs, jsx } from "react/jsx-runtime";
import { Star } from "lucide-react";
import { C as Card } from "./card-D8SB2yrw.js";
const ReviewCard1 = ({ review }) => {
  return /* @__PURE__ */ jsxs(Card, { className: "flex h-full flex-col border-none p-5", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-4 flex items-center", children: [...Array(parseInt(review.rating))].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "h-5 w-5 fill-yellow-500 text-yellow-400" }, i)) }),
    /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mb-4 flex-grow text-sm", children: [
      '"',
      review.description,
      '"'
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ jsx("div", { className: "mr-3 h-10 w-10 overflow-hidden rounded-full bg-gray-200", children: /* @__PURE__ */ jsx("img", { src: review.image || "/assets/icons/avatar.png", alt: review.name, className: "h-full w-full object-cover" }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: review.name }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: review.address })
      ] })
    ] })
  ] });
};
export {
  ReviewCard1 as R
};
