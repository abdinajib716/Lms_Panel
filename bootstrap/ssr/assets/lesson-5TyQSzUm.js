import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { L as LessonIcons } from "./lesson-icons-CrjzYJr0.js";
import { c as cn } from "./utils-BmtPBcb0.js";
import { usePage, Link } from "@inertiajs/react";
import "lucide-react";
import "clsx";
import "tailwind-merge";
const LessonWrapper = ({ lesson, children }) => /* @__PURE__ */ jsxs("div", { className: "relative flex items-center justify-between rounded-sm border p-2 md:gap-3", children: [
  children,
  ["video", "video_url"].includes(lesson.lesson_type) && /* @__PURE__ */ jsx("span", { className: "absolute top-0.5 right-1 text-xs md:relative md:text-sm", children: lesson.duration })
] });
const Lesson = ({ lesson, completed }) => {
  const { props } = usePage();
  const { course, watchHistory } = props;
  const dripContent = Boolean(course.drip_content);
  const isNext = lesson.id == watchHistory.next_watching_id;
  const isCompleted = completed.some((item) => item.type === "lesson" && item.id == lesson.id);
  const isCurrentLesson = watchHistory.current_watching_id == lesson.id;
  return !dripContent ? /* @__PURE__ */ jsx(LessonWrapper, { lesson, children: /* @__PURE__ */ jsxs(
    Link,
    {
      className: cn(
        "flex cursor-pointer items-center gap-3 py-1",
        isCompleted ? "text-blue-500" : isCurrentLesson ? "text-green-500" : "text-primary"
      ),
      href: route("course.player", {
        type: "lesson",
        watch_history: watchHistory.id,
        lesson_id: lesson.id
      }),
      children: [
        /* @__PURE__ */ jsx(LessonIcons, { type: "active", lesson, dripContent: true, isCompleted }),
        /* @__PURE__ */ jsx("p", { children: lesson.title })
      ]
    }
  ) }) : /* @__PURE__ */ jsx(Fragment, { children: isCompleted || isCurrentLesson || isNext ? /* @__PURE__ */ jsx(LessonWrapper, { lesson, children: /* @__PURE__ */ jsxs(
    Link,
    {
      className: cn(
        "flex cursor-pointer items-center gap-3 py-1",
        isCompleted ? "text-blue-500" : isCurrentLesson ? "text-green-500" : isNext ? "text-primary" : "text-gray-500"
      ),
      href: route("course.player", {
        type: "lesson",
        watch_history: watchHistory.id,
        lesson_id: lesson.id
      }),
      children: [
        /* @__PURE__ */ jsx(
          LessonIcons,
          {
            type: "active",
            lesson,
            dripContent: false,
            isCompleted,
            isCurrentLesson,
            isNext
          }
        ),
        /* @__PURE__ */ jsx("p", { children: lesson.title })
      ]
    }
  ) }) : /* @__PURE__ */ jsx(LessonWrapper, { lesson, children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 py-1 text-gray-500", children: [
    /* @__PURE__ */ jsx(LessonIcons, { type: "inactive", lesson, dripContent: true, isCompleted }),
    /* @__PURE__ */ jsx("p", { children: lesson.title })
  ] }) }) });
};
export {
  Lesson as default
};
