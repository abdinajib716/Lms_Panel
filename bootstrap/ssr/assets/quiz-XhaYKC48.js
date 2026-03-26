import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { c as cn } from "./utils-BmtPBcb0.js";
import { usePage, Link } from "@inertiajs/react";
import { CircleCheck, Circle, CirclePlay, CirclePause, Lock, FileQuestion } from "lucide-react";
import "clsx";
import "tailwind-merge";
const QuizIcon = ({ quiz }) => {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsx("div", { className: "bg-secondary flex h-6 w-6 items-center justify-center rounded-full", children: /* @__PURE__ */ jsx(FileQuestion, { className: "h-4 w-4" }) }),
    /* @__PURE__ */ jsx("p", { children: quiz.title })
  ] });
};
const Quiz = ({ quiz, completed }) => {
  const { props } = usePage();
  const { course, watchHistory } = props;
  const dripContent = Boolean(course.drip_content);
  const isCompleted = completed.some((item) => item.type === "quiz" && item.id == quiz.id);
  const isCurrentLesson = watchHistory.current_watching_type === "quiz" && watchHistory.current_watching_id == quiz.id;
  const isNext = watchHistory.next_watching_type === "quiz" && quiz.id == watchHistory.next_watching_id;
  return !dripContent ? /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3 rounded-sm border p-2 py-2 md:gap-3", children: [
    /* @__PURE__ */ jsxs(
      Link,
      {
        className: cn(
          "flex cursor-pointer items-center gap-3 py-1",
          isCompleted ? "text-blue-500" : isCurrentLesson ? "text-green-500" : "text-primary"
        ),
        href: route("course.player", {
          type: "quiz",
          watch_history: watchHistory.id,
          lesson_id: quiz.id
        }),
        children: [
          isCompleted ? /* @__PURE__ */ jsx(CircleCheck, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx(QuizIcon, { quiz })
        ]
      }
    ),
    /* @__PURE__ */ jsx("span", { children: quiz.duration })
  ] }) : /* @__PURE__ */ jsx(Fragment, { children: isCompleted || isCurrentLesson || isNext ? /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3 rounded-sm border p-2 py-2 md:gap-3", children: [
    /* @__PURE__ */ jsxs(
      Link,
      {
        className: cn(
          "flex cursor-pointer items-center gap-3 py-1",
          isCompleted ? "text-blue-500" : isCurrentLesson ? "text-green-500" : isNext ? "text-primary" : "text-gray-500"
        ),
        href: route("course.player", {
          type: "quiz",
          watch_history: watchHistory.id,
          lesson_id: quiz.id
        }),
        children: [
          isCompleted ? /* @__PURE__ */ jsx(CircleCheck, { className: "h-4 w-4" }) : isCurrentLesson ? /* @__PURE__ */ jsx(CirclePlay, { className: "h-4 w-4" }) : isNext ? /* @__PURE__ */ jsx(CirclePause, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Lock, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx(QuizIcon, { quiz })
        ]
      }
    ),
    /* @__PURE__ */ jsx("span", { children: quiz.duration })
  ] }) : /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3 rounded-sm border p-2 py-2 md:gap-3", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 py-1 text-gray-500", children: [
      /* @__PURE__ */ jsx(Lock, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsx(QuizIcon, { quiz })
    ] }),
    /* @__PURE__ */ jsx("span", { children: quiz.duration })
  ] }) });
};
export {
  Quiz as default
};
