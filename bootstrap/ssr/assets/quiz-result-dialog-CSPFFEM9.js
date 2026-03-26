import { jsxs, jsx } from "react/jsx-runtime";
import { B as Badge } from "./badge-B4crNM73.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Card, b as CardContent } from "./card-D8SB2yrw.js";
import { D as Dialog, a as DialogTrigger, b as DialogContent, c as DialogHeader, d as DialogTitle } from "./dialog-DD5SXV81.js";
import { S as ScrollArea } from "./scroll-area-DPHRDnwL.js";
import { usePage } from "@inertiajs/react";
import { Eye, Award, Target, CheckCircle2, XCircle } from "lucide-react";
import { useState } from "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-dialog";
import "@radix-ui/react-scroll-area";
const QuizResultDialog = ({ quiz, submission }) => {
  const [open, setOpen] = useState(false);
  const { props } = usePage();
  const { translate } = props;
  const { frontend } = translate;
  const isPassed = submission.is_passed;
  const percentage = Math.round(submission.total_marks / quiz.total_mark * 100);
  const parseJSON = (data) => {
    if (typeof data === "string") {
      try {
        return JSON.parse(data);
      } catch {
        return [];
      }
    }
    return Array.isArray(data) ? data : [];
  };
  const isAnswerCorrect = (question) => {
    const userAnswer = question.answers && question.answers.length > 0 ? question.answers[0] : null;
    if (!userAnswer) return false;
    return userAnswer.is_correct;
  };
  const getUserAnswer = (question) => {
    const userAnswer = question.answers && question.answers.length > 0 ? question.answers[0] : null;
    if (!userAnswer) return [];
    return parseJSON(userAnswer.answers);
  };
  const renderHTML = (html) => {
    return /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: html } });
  };
  return /* @__PURE__ */ jsxs(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "secondary", size: "sm", className: "text-sm", children: [
      /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsx("span", { children: frontend.result })
    ] }) }),
    /* @__PURE__ */ jsx(DialogContent, { className: "max-w-4xl p-0", children: /* @__PURE__ */ jsxs(ScrollArea, { className: "max-h-[90vh] p-6", children: [
      /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { className: "text-xl", children: quiz.title }) }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsx(Card, { className: isPassed ? "border-green-500" : "border-red-500", children: /* @__PURE__ */ jsxs(CardContent, { className: "flex items-center gap-2 p-4", children: [
          /* @__PURE__ */ jsx(Award, { className: `h-8 w-8 ${isPassed ? "text-green-500" : "text-red-500"}` }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("p", { className: "text-2xl font-bold", children: [
              percentage,
              "%"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-xs", children: "Total Score" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "flex items-center gap-3 p-4", children: [
          /* @__PURE__ */ jsx(Target, { className: "h-8 w-8 text-blue-500" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("p", { className: "text-2xl font-bold", children: [
              submission.total_marks,
              "/",
              quiz.total_mark
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-xs", children: frontend.total_marks })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "flex items-center gap-3 p-4", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "h-8 w-8 text-green-500" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold", children: submission.correct_answers }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-xs", children: frontend.correct_answers })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "flex items-center gap-3 p-4", children: [
          /* @__PURE__ */ jsx(XCircle, { className: "h-8 w-8 text-red-500" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold", children: submission.incorrect_answers }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-xs", children: frontend.incorrect_answers })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold", children: "Quiz Questions" }),
        quiz.quiz_questions && quiz.quiz_questions.map((question, index) => {
          const isCorrect = isAnswerCorrect(question);
          const userAnswers = getUserAnswer(question);
          const correctAnswers = parseJSON(question.answer);
          const options = parseJSON(question.options);
          return /* @__PURE__ */ jsx(Card, { className: isCorrect ? "border-l-green-500" : "border-l-red-500", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-3 flex items-start justify-between", children: [
              /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxs("div", { className: "mb-2 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxs("span", { className: "font-semibold", children: [
                  index + 1,
                  "."
                ] }),
                /* @__PURE__ */ jsx("div", { className: "flex-1", children: renderHTML(question.title) })
              ] }) }),
              /* @__PURE__ */ jsxs(Badge, { variant: isCorrect ? "default" : "destructive", className: "ml-2", children: [
                isCorrect ? /* @__PURE__ */ jsx(CheckCircle2, { className: "mr-1 h-3 w-3" }) : /* @__PURE__ */ jsx(XCircle, { className: "mr-1 h-3 w-3" }),
                isCorrect ? "Correct" : "Wrong"
              ] })
            ] }),
            (question.type === "single" || question.type === "multiple") && /* @__PURE__ */ jsx("div", { className: "space-y-2", children: options.map((option, optIndex) => {
              const isUserAnswer = userAnswers.includes(option);
              const isCorrectAnswer = correctAnswers.includes(option);
              return /* @__PURE__ */ jsx(
                "div",
                {
                  className: `rounded-md border p-3 ${isCorrectAnswer ? "border-green-500 bg-green-50 dark:bg-green-950/20" : isUserAnswer ? "border-red-500 bg-red-50 dark:bg-red-950/20" : "bg-muted/50"}`,
                  children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsx("span", { children: option }),
                    /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                      isUserAnswer && /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: "Your Answer" }),
                      isCorrectAnswer && /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600" })
                    ] })
                  ] })
                },
                optIndex
              );
            }) }),
            question.type === "boolean" && /* @__PURE__ */ jsx("div", { className: "space-y-2", children: ["True", "False"].map((option) => {
              const isUserAnswer = userAnswers.includes(option);
              const isCorrectAnswer = correctAnswers.includes(option);
              return /* @__PURE__ */ jsx(
                "div",
                {
                  className: `rounded-md border p-3 ${isCorrectAnswer ? "border-green-500 bg-green-50 dark:bg-green-950/20" : isUserAnswer ? "border-red-500 bg-red-50 dark:bg-red-950/20" : "bg-muted/50"}`,
                  children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsx("span", { children: option }),
                    /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                      isUserAnswer && /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: "Your Answer" }),
                      isCorrectAnswer && /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600" })
                    ] })
                  ] })
                },
                option
              );
            }) })
          ] }) }, question.id);
        })
      ] })
    ] }) })
  ] });
};
export {
  QuizResultDialog as default
};
