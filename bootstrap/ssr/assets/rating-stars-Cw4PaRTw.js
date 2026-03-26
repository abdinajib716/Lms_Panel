import { jsx } from "react/jsx-runtime";
import { c as cn } from "./utils-BmtPBcb0.js";
import { Star } from "lucide-react";
const RatingStars = ({ rating, starClass, wrapperClass }) => {
  const renderRatingStars = (rating2) => {
    const stars = [];
    const fullStars = Math.floor(rating2);
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(/* @__PURE__ */ jsx(Star, { className: cn("h-5 w-5 fill-yellow-400 text-yellow-400", starClass) }, i));
      } else {
        stars.push(/* @__PURE__ */ jsx(Star, { className: cn("h-5 w-5 text-yellow-400", starClass) }, i));
      }
    }
    return stars;
  };
  return /* @__PURE__ */ jsx("div", { className: cn("flex items-center gap-[1px]", wrapperClass), children: renderRatingStars(rating) });
};
export {
  RatingStars as R
};
