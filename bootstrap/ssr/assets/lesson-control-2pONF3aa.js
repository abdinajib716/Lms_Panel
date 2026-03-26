import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { B as Button } from "./button-jZyzwgdo.js";
import { c as cn } from "./utils-BmtPBcb0.js";
import { usePage, Link } from "@inertiajs/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
const LessonControl = ({ className }) => {
  const { props } = usePage();
  const { watchHistory } = props;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    watchHistory.prev_watching_id ? /* @__PURE__ */ jsx(
      Link,
      {
        href: route("course.player", {
          type: watchHistory.prev_watching_type,
          watch_history: watchHistory.id,
          lesson_id: watchHistory.prev_watching_id
        }),
        children: /* @__PURE__ */ jsx(
          Button,
          {
            variant: "outline",
            className: cn(
              "bg-secondary-foreground text-primary-foreground hover:bg-secondary-foreground hover:text-primary-foreground absolute top-1/2 left-0 z-10 h-10 w-8 -translate-y-1/2 rounded-none rounded-r border-none p-0 shadow-none hover:opacity-85",
              className
            ),
            children: /* @__PURE__ */ jsx(ChevronLeft, { className: "!h-6 !w-6" })
          }
        )
      }
    ) : /* @__PURE__ */ jsx(
      Button,
      {
        disabled: true,
        variant: "outline",
        className: cn(
          "bg-secondary-foreground text-primary-foreground hover:bg-secondary-foreground hover:text-primary-foreground absolute top-1/2 left-0 z-10 h-10 w-8 -translate-y-1/2 rounded-none rounded-r border-none p-0 shadow-none",
          className
        ),
        children: /* @__PURE__ */ jsx(ChevronLeft, { className: "!h-6 !w-6" })
      }
    ),
    watchHistory.next_watching_id ? /* @__PURE__ */ jsx(
      Link,
      {
        href: route("course.player", {
          type: watchHistory.next_watching_type,
          watch_history: watchHistory.id,
          lesson_id: watchHistory.next_watching_id
        }),
        children: /* @__PURE__ */ jsx(
          Button,
          {
            variant: "outline",
            className: cn(
              "bg-secondary-foreground text-primary-foreground hover:bg-secondary-foreground hover:text-primary-foreground absolute top-1/2 right-0 z-10 h-10 w-8 -translate-y-1/2 rounded-none rounded-l border-none p-0 shadow-none hover:opacity-85",
              className
            ),
            children: /* @__PURE__ */ jsx(ChevronRight, { className: "!h-6 !w-6" })
          }
        )
      }
    ) : /* @__PURE__ */ jsx(
      Button,
      {
        disabled: true,
        variant: "outline",
        className: cn(
          "bg-secondary-foreground text-primary-foreground hover:bg-secondary-foreground hover:text-primary-foreground absolute top-1/2 right-0 z-10 h-10 w-8 -translate-y-1/2 rounded-none rounded-l border-none p-0 shadow-none",
          className
        ),
        children: /* @__PURE__ */ jsx(ChevronRight, { className: "!h-6 !w-6" })
      }
    )
  ] });
};
export {
  LessonControl as default
};
