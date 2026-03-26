import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-DVAMjldm.js";
import { g as getCompletedContents } from "./utils-BmtPBcb0.js";
import { usePage } from "@inertiajs/react";
import QuizStatus from "./quiz-status-D8lbUiq3.js";
import "react";
import "@radix-ui/react-accordion";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "./badge-B4crNM73.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./button-jZyzwgdo.js";
import "date-fns";
import "./quiz-result-dialog-CSPFFEM9.js";
import "./card-D8SB2yrw.js";
import "./dialog-DD5SXV81.js";
import "@radix-ui/react-dialog";
import "./scroll-area-DPHRDnwL.js";
import "@radix-ui/react-scroll-area";
const Quizzes = () => {
  const { props } = usePage();
  const { quizzes, watchHistory } = props;
  const completed = getCompletedContents(watchHistory);
  return /* @__PURE__ */ jsx(Fragment, { children: quizzes.length > 0 ? /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "space-y-4", defaultValue: quizzes[0].id, children: quizzes.map((section, ind) => {
    return /* @__PURE__ */ jsxs(AccordionItem, { value: section.id, className: "overflow-hidden rounded-lg border", children: [
      /* @__PURE__ */ jsxs(AccordionTrigger, { className: "[&[data-state=open]]:!bg-muted px-4 py-3 text-base hover:no-underline", children: [
        ind + 1,
        ". ",
        section.title
      ] }),
      /* @__PURE__ */ jsx(AccordionContent, { className: "space-y-2 p-2", children: section.section_quizzes.length > 0 ? section.section_quizzes.map((quiz) => /* @__PURE__ */ jsx(QuizStatus, { quiz, completed }, quiz.id)) : /* @__PURE__ */ jsx("div", { className: "px-4 py-3 text-center", children: /* @__PURE__ */ jsx("p", { children: "There is no quiz added" }) }) })
    ] }, section.id);
  }) }) : /* @__PURE__ */ jsx("div", { className: "p-6 text-center", children: /* @__PURE__ */ jsx("p", { children: "There is no quiz added" }) }) });
};
export {
  Quizzes as default
};
