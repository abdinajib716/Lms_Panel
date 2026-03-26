import { jsxs, jsx } from "react/jsx-runtime";
import { B as Button } from "./button-jZyzwgdo.js";
import { c as cn } from "./utils-BmtPBcb0.js";
import { usePage, useForm } from "@inertiajs/react";
import { ThumbsUp, ThumbsDown, MessageCircle } from "lucide-react";
import { useEffect } from "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
const BlogLikeDislike = () => {
  const { props } = usePage();
  const { blog, likesCount, dislikesCount, userReaction, commentsCount, translate } = props;
  const { button, common } = translate;
  const { data, setData, post, processing } = useForm({
    blog_id: blog.id,
    type: ""
  });
  const handleReaction = (type) => {
    if (processing) return;
    setData("type", type);
  };
  useEffect(() => {
    if (data.type === "like" || data.type === "dislike") {
      post(route("blogs.like-dislike.toggle"), {
        preserveScroll: true
      });
    }
  }, [data]);
  return /* @__PURE__ */ jsxs("div", { className: "flex w-full items-center justify-between", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxs(
        Button,
        {
          variant: userReaction === "like" ? "default" : "outline",
          size: "sm",
          onClick: () => handleReaction("like"),
          disabled: processing,
          className: cn("flex items-center gap-2 transition-colors", userReaction === "like" && "bg-blue-500 text-white hover:bg-blue-600"),
          children: [
            /* @__PURE__ */ jsx(ThumbsUp, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsx("span", { children: likesCount }),
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: button.like })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        Button,
        {
          variant: userReaction === "dislike" ? "default" : "outline",
          size: "sm",
          onClick: () => handleReaction("dislike"),
          disabled: processing,
          className: cn("flex items-center gap-2 transition-colors", userReaction === "dislike" && "bg-red-500 text-white hover:bg-red-600"),
          children: [
            /* @__PURE__ */ jsx(ThumbsDown, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsx("span", { children: dislikesCount }),
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: button.dislike })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx(MessageCircle, { className: "h-5 w-5" }),
      /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold", children: [
        commentsCount,
        " ",
        commentsCount > 1 ? common.comments : common.comment
      ] })
    ] })
  ] });
};
export {
  BlogLikeDislike as default
};
