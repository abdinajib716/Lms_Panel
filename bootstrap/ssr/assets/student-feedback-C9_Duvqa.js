import { jsxs, jsx } from "react/jsx-runtime";
import { P as Progress } from "./progress-BuQTjce4.js";
import { u as useLang } from "./use-lang-44ndmTOc.js";
import { Star } from "lucide-react";
const StudentFeedback = ({ totalReviews }) => {
  const { common, frontend } = useLang();
  const calculateAverageRating = () => {
    var _a;
    if (!((_a = totalReviews == null ? void 0 : totalReviews.rating_distribution) == null ? void 0 : _a.length) || totalReviews.total_reviews === 0) {
      return 0;
    }
    const totalScore = totalReviews.rating_distribution.reduce((sum, item) => {
      return sum + item.stars * (item.percentage / 100);
    }, 0);
    return Math.round(totalScore * 10) / 10;
  };
  const averageRating = calculateAverageRating();
  const renderStars = (rating, filled = true) => {
    return Array.from({ length: 5 }, (_, index) => /* @__PURE__ */ jsx(
      Star,
      {
        className: `h-4 w-4 ${filled && index < rating - 1 ? "fill-amber-400 text-amber-400" : filled && index < Math.floor(rating - 1) + 0.5 ? "fill-amber-400 text-amber-400" : "text-gray-300"}`
      },
      index
    ));
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-6 flex items-center justify-between gap-2", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold", children: frontend.student_reviews }),
      /* @__PURE__ */ jsxs("p", { className: "font-semibold", children: [
        totalReviews.total_reviews,
        " ",
        totalReviews.total_reviews === 1 ? "Review" : "Reviews"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 sm:gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex min-w-[100px] flex-col items-center sm:min-w-[120px]", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-2 text-6xl font-bold text-amber-600", children: averageRating }),
        /* @__PURE__ */ jsx("div", { className: "mb-2 flex gap-1", children: renderStars(1 + averageRating) }),
        /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-amber-600", children: common.rating })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "w-full space-y-1.5 sm:flex-1", children: totalReviews.rating_distribution.map((item) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("div", { className: "flex w-20 flex-shrink-0 gap-1", children: renderStars(item.stars) }),
        /* @__PURE__ */ jsx("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ jsx(Progress, { value: item.percentage }) }),
        /* @__PURE__ */ jsx("div", { className: "w-12 flex-shrink-0 text-right", children: /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium", children: [
          item.percentage ? Number(item.percentage).toFixed(2) : "0",
          "%"
        ] }) })
      ] }, item.stars)) })
    ] })
  ] });
};
export {
  StudentFeedback as S
};
