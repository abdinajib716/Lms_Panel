import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { B as Badge } from "./badge-B4crNM73.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { c as cn } from "./utils-BmtPBcb0.js";
import { usePage, Link } from "@inertiajs/react";
import { format } from "date-fns";
import { Lock, ClipboardList } from "lucide-react";
import QuizResultDialog from "./quiz-result-dialog-CSPFFEM9.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "react";
import "clsx";
import "tailwind-merge";
import "./card-D8SB2yrw.js";
import "./dialog-DD5SXV81.js";
import "@radix-ui/react-dialog";
import "./scroll-area-DPHRDnwL.js";
import "@radix-ui/react-scroll-area";
const QuizIcon = ({ quiz, latestSubmission }) => {
  const { props } = usePage();
  const { translate } = props;
  const { frontend } = translate;
  const isPassed = latestSubmission == null ? void 0 : latestSubmission.is_passed;
  const hasAttempted = latestSubmission !== null;
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsx("div", { className: "bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg", children: /* @__PURE__ */ jsx(ClipboardList, { className: "text-primary h-6 w-6" }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("p", { className: "text-primary text-base font-medium", children: quiz.title }),
        latestSubmission && /* @__PURE__ */ jsx(Badge, { variant: isPassed ? "default" : "destructive", className: "text-xs", children: isPassed ? frontend.passed : frontend.not_passed }),
        !hasAttempted && /* @__PURE__ */ jsx(Badge, { variant: "destructive", className: "text-xs", children: "Not Submitted" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: format(new Date(quiz.created_at), "PPpp") })
    ] })
  ] });
};
const QuizStatus = ({ quiz, completed }) => {
  const { props } = usePage();
  const { watchHistory, translate } = props;
  const { frontend } = translate;
  const isCompleted = completed.some((item) => item.type === "quiz" && item.id == quiz.id);
  const isCurrentLesson = watchHistory.current_watching_type === "quiz" && watchHistory.current_watching_id == quiz.id;
  const isNext = watchHistory.next_watching_type === "quiz" && quiz.id == watchHistory.next_watching_id;
  const latestSubmission = quiz.quiz_submissions && quiz.quiz_submissions.length > 0 ? quiz.quiz_submissions[quiz.quiz_submissions.length - 1] : null;
  const totalMarks = (latestSubmission == null ? void 0 : latestSubmission.total_marks) || 0;
  const hasAttempted = latestSubmission !== null;
  return /* @__PURE__ */ jsx(Fragment, { children: isCompleted || isCurrentLesson || isNext ? /* @__PURE__ */ jsxs("div", { className: "bg-card flex items-center justify-between gap-3 rounded-lg border p-3", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "flex flex-1 items-center gap-3",
          isCompleted ? "text-blue-500" : isCurrentLesson ? "text-green-500" : isNext ? "text-primary" : "text-gray-500"
        ),
        children: /* @__PURE__ */ jsx(QuizIcon, { quiz, latestSubmission })
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-end gap-3 md:flex-row", children: [
      hasAttempted && /* @__PURE__ */ jsx("div", { className: "text-right", children: /* @__PURE__ */ jsxs("p", { className: "text-sm font-medium", children: [
        frontend.total_marks,
        ": ",
        totalMarks,
        "/",
        quiz.total_mark
      ] }) }),
      hasAttempted ? /* @__PURE__ */ jsx(QuizResultDialog, { quiz, submission: latestSubmission }) : /* @__PURE__ */ jsx(Button, { size: "sm", asChild: true, children: /* @__PURE__ */ jsx(
        Link,
        {
          href: route("course.player", {
            type: "quiz",
            watch_history: watchHistory.id,
            lesson_id: quiz.id
          }),
          children: "Take Quiz"
        }
      ) })
    ] })
  ] }) : /* @__PURE__ */ jsxs("div", { className: "bg-card flex items-center justify-between gap-3 rounded-lg border p-3", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-1 items-center gap-3 text-gray-500", children: [
      /* @__PURE__ */ jsx(Lock, { className: "h-5 w-5" }),
      /* @__PURE__ */ jsx(QuizIcon, { quiz, latestSubmission: null })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3", children: hasAttempted && /* @__PURE__ */ jsx("div", { className: "text-right", children: /* @__PURE__ */ jsxs("p", { className: "text-sm font-medium text-gray-500", children: [
      frontend.total_marks,
      ": ",
      totalMarks,
      "/",
      quiz.total_mark
    ] }) }) })
  ] }) });
};
export {
  QuizStatus as default
};
