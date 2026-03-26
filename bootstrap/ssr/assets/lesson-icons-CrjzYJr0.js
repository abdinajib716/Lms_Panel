import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { CircleCheck, Circle, Lock, Video, File, FileText, Image } from "lucide-react";
const LessonIcons = (props) => {
  const { type, lesson, dripContent, isCompleted, isCurrentLesson, isNext } = props;
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
    type === "active" ? /* @__PURE__ */ jsx(Fragment, { children: isCompleted ? /* @__PURE__ */ jsx(CircleCheck, { className: "h-4 w-4" }) : dripContent ? /* @__PURE__ */ jsx(Fragment, { children: !isCurrentLesson ? /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4" }) : isNext ? /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Lock, { className: "h-4 w-4" }) }) : /* @__PURE__ */ jsx(Lock, { className: "h-4 w-4" }) }) : /* @__PURE__ */ jsx(Lock, { className: "h-4 w-4" }),
    /* @__PURE__ */ jsxs("div", { className: "bg-secondary flex h-6 w-6 items-center justify-center rounded-full", children: [
      ["video", "video_url", "embed"].includes(lesson.lesson_type) && /* @__PURE__ */ jsx(Video, { className: "h-4 w-4" }),
      ["document", "iframe"].includes(lesson.lesson_type) && /* @__PURE__ */ jsx(File, { className: "h-4 w-4" }),
      lesson.lesson_type === "text" && /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4" }),
      lesson.lesson_type === "image" && /* @__PURE__ */ jsx(Image, { className: "h-4 w-4" })
    ] })
  ] });
};
export {
  LessonIcons as L
};
