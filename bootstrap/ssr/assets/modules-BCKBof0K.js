import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-DVAMjldm.js";
import { g as getCompletedContents } from "./utils-BmtPBcb0.js";
import { usePage } from "@inertiajs/react";
import Lesson from "./lesson-CJOS5rxx.js";
import Quiz from "./quiz-Dd_nsC5a.js";
import "react";
import "@radix-ui/react-accordion";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "./lesson-icons-CrjzYJr0.js";
const Modules = () => {
  const { props } = usePage();
  const { modules, watchHistory } = props;
  const completed = getCompletedContents(watchHistory);
  return /* @__PURE__ */ jsx(Fragment, { children: modules.length > 0 ? /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "space-y-4", defaultValue: modules[0].id, children: modules.map((section, ind) => /* @__PURE__ */ jsxs(AccordionItem, { value: section.id, className: "overflow-hidden rounded-lg border", children: [
    /* @__PURE__ */ jsxs(AccordionTrigger, { className: "[&[data-state=open]]:!bg-muted px-4 py-3 text-base hover:no-underline", children: [
      ind + 1,
      ". ",
      section.title
    ] }),
    /* @__PURE__ */ jsx(AccordionContent, { className: "space-y-2 p-2", children: section.section_lessons.length > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [
      section.section_lessons.map((lesson) => /* @__PURE__ */ jsx(Lesson, { lesson, completed }, lesson.id)),
      section.section_quizzes.map((quiz) => /* @__PURE__ */ jsx(Quiz, { quiz, completed }, quiz.id))
    ] }) : /* @__PURE__ */ jsx("div", { className: "px-4 py-3 text-center", children: /* @__PURE__ */ jsx("p", { children: "There is no lesson added" }) }) })
  ] }, section.id)) }) : /* @__PURE__ */ jsx("div", { className: "p-6 text-center", children: /* @__PURE__ */ jsx("p", { children: "There is no section added" }) }) });
};
export {
  Modules as default
};
