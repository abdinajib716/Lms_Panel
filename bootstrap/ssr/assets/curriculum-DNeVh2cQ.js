import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-DVAMjldm.js";
import { S as Separator } from "./separator-R7EO2G8T.js";
import { usePage } from "@inertiajs/react";
import { Video, File, FileText, Image, FileQuestion } from "lucide-react";
import "react";
import "@radix-ui/react-accordion";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-separator";
const Curriculum = ({ course }) => {
  const { props } = usePage();
  const { translate } = props;
  const { frontend } = translate;
  const videoTypes = ["video", "video_url"];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h6", { className: "mb-4 text-xl font-semibold", children: frontend.course_curriculum }),
    /* @__PURE__ */ jsx(Separator, { className: "my-6" }),
    /* @__PURE__ */ jsx(
      Accordion,
      {
        type: "single",
        collapsible: true,
        className: "space-y-4",
        defaultValue: course.sections.length > 0 ? course.sections[0].id : "",
        children: course.sections.map((section, index) => /* @__PURE__ */ jsxs(AccordionItem, { value: section.id, className: "overflow-hidden rounded-lg border", children: [
          /* @__PURE__ */ jsxs(AccordionTrigger, { className: "[&[data-state=open]]:!bg-muted px-4 py-3 text-base hover:no-underline", children: [
            index + 1,
            ". ",
            section.title
          ] }),
          /* @__PURE__ */ jsx(AccordionContent, { className: "space-y-1 p-4", children: section.section_lessons.length > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [
            section.section_lessons.map((lesson) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3 py-2", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-secondary flex h-6 w-6 items-center justify-center rounded-full", children: [
                  videoTypes.includes(lesson.lesson_type) && /* @__PURE__ */ jsx(Video, { className: "h-4 w-4" }),
                  ["document", "iframe"].includes(lesson.lesson_type) && /* @__PURE__ */ jsx(File, { className: "h-4 w-4" }),
                  lesson.lesson_type === "text" && /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4" }),
                  lesson.lesson_type === "image" && /* @__PURE__ */ jsx(Image, { className: "h-4 w-4" })
                ] }),
                /* @__PURE__ */ jsx("p", { children: lesson.title })
              ] }),
              videoTypes.includes(lesson.lesson_type) && /* @__PURE__ */ jsx("span", { children: lesson.duration })
            ] }, lesson.id)),
            section.section_quizzes.map((quiz) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3 py-2", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("div", { className: "bg-secondary flex h-6 w-6 items-center justify-center rounded-full", children: /* @__PURE__ */ jsx(FileQuestion, { className: "h-4 w-4" }) }),
                /* @__PURE__ */ jsx("p", { children: quiz.title })
              ] }),
              /* @__PURE__ */ jsx("span", { children: quiz.duration })
            ] }, quiz.id))
          ] }) : /* @__PURE__ */ jsx("div", { className: "px-4 py-3 text-center", children: /* @__PURE__ */ jsx("p", { children: frontend.there_is_no_lesson_added }) }) })
        ] }, section.id))
      }
    )
  ] });
};
export {
  Curriculum as default
};
