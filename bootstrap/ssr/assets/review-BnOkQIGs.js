import { jsxs, jsx } from "react/jsx-runtime";
import { D as DeleteModal } from "./delete-modal-BIvxKwRf.js";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { L as LoadingButton } from "./loading-button-C4Hk_jCd.js";
import { T as TableFooter } from "./table-footer-Bf3DvTcP.js";
import { A as Avatar, a as AvatarImage, b as AvatarFallback } from "./avatar-Cr_jqfHL.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { T as Textarea } from "./textarea-DctRxpgE.js";
import { c as cn } from "./utils-BmtPBcb0.js";
import { usePage, useForm } from "@inertiajs/react";
import { format } from "date-fns";
import { Trash, Star } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import ReviewEdit from "./review-edit-DiN0groi.js";
import "./dialog-DD5SXV81.js";
import "@radix-ui/react-dialog";
import "./dropdown-menu-BIfW6iuW.js";
import "@radix-ui/react-dropdown-menu";
import "./use-lang-44ndmTOc.js";
import "./route-DlE7FdTW.js";
import "./scroll-area-DPHRDnwL.js";
import "@radix-ui/react-scroll-area";
import "@radix-ui/react-avatar";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-label";
import "clsx";
import "tailwind-merge";
const ReviewForm = () => {
  const { props } = usePage();
  const { translate } = props;
  const { button, input, frontend, common } = translate;
  const [hoverRating, setHoverRating] = useState(0);
  const { data, setData, post, errors, processing, reset } = useForm({
    rating: 0,
    review: "",
    user_id: props.auth.user.id,
    course_id: props.course.id
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("course-reviews.store"), {
      onError: (errors2) => {
        if (errors2.user_id) {
          toast.error(errors2.user_id);
        }
        if (errors2.course_id) {
          toast.error(errors2.course_id);
        }
      },
      onSuccess: () => {
        reset();
      }
    });
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    props.course.instructor.user_id !== props.auth.user.id && /* @__PURE__ */ jsxs("div", { className: "border-t py-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("h3", { className: "mb-6 text-xl font-semibold", children: props.userReview ? frontend.review : frontend.submit_review }),
        props.userReview && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(ReviewEdit, { review: props.userReview }),
          /* @__PURE__ */ jsx(
            DeleteModal,
            {
              routePath: route("course-reviews.destroy", props.userReview.id),
              actionComponent: /* @__PURE__ */ jsx(Button, { size: "icon", variant: "secondary", children: /* @__PURE__ */ jsx(Trash, {}) })
            }
          )
        ] })
      ] }),
      props.userReview ? /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "flex gap-1", children: [1, 2, 3, 4, 5].map((star) => {
          var _a;
          return /* @__PURE__ */ jsx("button", { type: "button", children: /* @__PURE__ */ jsx(
            Star,
            {
              className: cn(
                "h-6 w-6",
                star <= (hoverRating || ((_a = props.userReview) == null ? void 0 : _a.rating) || 0) ? "fill-amber-400 text-amber-400" : "text-gray-300"
              )
            }
          ) }, star);
        }) }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm", children: props.userReview.review })
      ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs(Label, { className: "text-sm font-medium", children: [
            common.rating,
            " *"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex gap-1", children: [1, 2, 3, 4, 5].map((star) => /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              className: "transition-transform hover:scale-110",
              onMouseEnter: () => setHoverRating(star),
              onMouseLeave: () => setHoverRating(0),
              onClick: () => setData("rating", star),
              children: /* @__PURE__ */ jsx(
                Star,
                {
                  className: cn(
                    "h-8 w-8 cursor-pointer transition-colors",
                    star <= (hoverRating || data.rating) ? "fill-amber-400 text-amber-400" : "text-gray-300 hover:text-amber-200"
                  )
                }
              )
            },
            star
          )) }),
          data.rating > 0 && /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground text-sm", children: [
            frontend.you_rated_this,
            " ",
            data.rating,
            " ",
            data.rating !== 1 ? frontend.stars : frontend.star
          ] }),
          /* @__PURE__ */ jsx(InputError, { message: errors.rating })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs(Label, { className: "text-sm font-medium text-gray-700", children: [
            frontend.review,
            " *"
          ] }),
          /* @__PURE__ */ jsx(
            Textarea,
            {
              required: true,
              value: data.review,
              onChange: (e) => setData("review", e.target.value),
              placeholder: input.review_placeholder,
              className: "min-h-[120px] w-full resize-none"
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.review })
        ] }),
        /* @__PURE__ */ jsx(LoadingButton, { loading: processing, children: button.submit_review })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "border-t py-6", children: [
      /* @__PURE__ */ jsx("h3", { className: "mb-6 text-xl font-semibold", children: frontend.student_reviews }),
      /* @__PURE__ */ jsx("div", { className: "space-y-6", children: props.reviews.data.length > 0 ? props.reviews.data.map((review) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxs(Avatar, { className: "h-8 w-8", children: [
            /* @__PURE__ */ jsx(AvatarImage, { src: review.user.photo || "", alt: review.user.name, className: "object-cover" }),
            /* @__PURE__ */ jsx(AvatarFallback, { children: review.user.name.charAt(0) })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold", children: review.user.name }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("div", { className: "flex gap-1", children: [1, 2, 3, 4, 5].map((star) => /* @__PURE__ */ jsx("button", { type: "button", children: /* @__PURE__ */ jsx(
                Star,
                {
                  className: cn("h-4 w-4", star <= review.rating ? "fill-amber-400 text-amber-400" : "text-gray-300")
                }
              ) }, star)) }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-xs", children: format(new Date(review.created_at), "MMM d, yyyy h:mm a") })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm", children: review.review })
      ] }, review.id)) : /* @__PURE__ */ jsx("p", { className: "p-3 text-center", children: frontend.no_reviews_found }) }),
      /* @__PURE__ */ jsx(
        TableFooter,
        {
          className: "mt-6",
          routeName: "course.player",
          paginationInfo: props.reviews,
          routeParams: { slug: props.course.slug, watch_history: props.watchHistory.id, lesson_id: props.watchHistory.current_watching_id }
        }
      )
    ] })
  ] });
};
export {
  ReviewForm as default
};
