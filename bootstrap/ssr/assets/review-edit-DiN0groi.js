import { jsxs, jsx } from "react/jsx-runtime";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { L as LoadingButton } from "./loading-button-C4Hk_jCd.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { D as Dialog, a as DialogTrigger, b as DialogContent, c as DialogHeader, d as DialogTitle, e as DialogFooter, f as DialogClose } from "./dialog-DD5SXV81.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { T as Textarea } from "./textarea-DctRxpgE.js";
import { c as cn } from "./utils-BmtPBcb0.js";
import { usePage, useForm } from "@inertiajs/react";
import { SquarePen, Star } from "lucide-react";
import { useState } from "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-dialog";
import "@radix-ui/react-label";
import "clsx";
import "tailwind-merge";
const ReviewEdit = ({ review }) => {
  const [open, setOpen] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);
  const { props } = usePage();
  const { translate } = props;
  const { button, input, frontend, common } = translate;
  const { data, setData, put, errors, processing, reset } = useForm({
    rating: review.rating,
    review: review.review
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    put(route("course-reviews.update", review.id), {
      onSuccess: () => {
        setOpen(false);
        reset();
      }
    });
  };
  return /* @__PURE__ */ jsxs(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { size: "icon", variant: "secondary", children: /* @__PURE__ */ jsx(SquarePen, { className: "h-4 w-4" }) }) }),
    /* @__PURE__ */ jsxs(DialogContent, { children: [
      /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: frontend.edit_review }) }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs(Label, { className: "text-sm font-medium", children: [
            input.rating,
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
            input.review,
            " *"
          ] }),
          /* @__PURE__ */ jsx(
            Textarea,
            {
              required: true,
              value: data.review,
              onChange: (e) => setData("review", e.target.value),
              placeholder: input.description,
              className: "min-h-[120px] w-full resize-none"
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.review })
        ] }),
        /* @__PURE__ */ jsxs(DialogFooter, { children: [
          /* @__PURE__ */ jsxs(LoadingButton, { loading: processing, children: [
            button.update,
            " ",
            button.review
          ] }),
          /* @__PURE__ */ jsx(DialogClose, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: button.cancel }) })
        ] })
      ] })
    ] })
  ] });
};
export {
  ReviewEdit as default
};
