import { jsxs, jsx } from "react/jsx-runtime";
import { L as LoadingButton } from "./loading-button-C4Hk_jCd.js";
import { T as Tabs } from "./tabs-CPx41tqt.js";
import { T as TiptapRenderer } from "./client-renderer-CUBmzaOS.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Card } from "./card-D8SB2yrw.js";
import { C as Checkbox } from "./checkbox-CO4DegBm.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { R as RadioGroup, a as RadioGroupItem } from "./radio-group-sSS5HHUP.js";
import { S as Separator } from "./separator-R7EO2G8T.js";
import { b as TabsContent } from "./tabs-BOXC0x8t.js";
import { usePage, useForm } from "@inertiajs/react";
import { useState } from "react";
import LessonControl from "./lesson-control-2pONF3aa.js";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "lucide-react";
/* empty css               */
import "react-icons/lu";
import "hast-util-to-jsx-runtime";
import "shiki/bundle/full";
import "rehype-parse";
import "rehype-react";
import "unified";
import "unist-util-visit";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-checkbox";
import "@radix-ui/react-label";
import "@radix-ui/react-radio-group";
import "@radix-ui/react-separator";
import "@radix-ui/react-tabs";
const QuizViewer = ({ quiz }) => {
  var _a, _b, _c, _d, _e, _f;
  const { auth, translate } = usePage().props;
  const { frontend } = translate;
  const [finished, setFinished] = useState(false);
  const [currentTab, setCurrentTab] = useState("summary");
  const submissions = quiz.quiz_submissions;
  const { data, setData, post, reset, processing } = useForm({
    submission_id: submissions.length > 0 ? submissions[0].id : null,
    section_quiz_id: quiz.id,
    user_id: auth.user.id,
    answers: []
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("quiz-submissions.store"), {
      onSuccess: () => {
        reset();
        setFinished(false);
        setCurrentTab("summary");
      }
    });
  };
  const handleCheckboxChange = (questionId, option, checked) => {
    if (checked) {
      const existingAnswer = data.answers.find((ans) => ans.question_id === questionId);
      if (existingAnswer) {
        setData(
          "answers",
          data.answers.map(
            (ans) => ans.question_id === questionId ? {
              ...ans,
              answer: [...ans.answer, option]
            } : ans
          )
        );
      } else {
        setData("answers", [
          ...data.answers,
          {
            question_id: questionId,
            answer: [option]
          }
        ]);
      }
    } else {
      setData(
        "answers",
        data.answers.map(
          (ans) => ans.question_id === questionId ? {
            ...ans,
            answer: ans.answer.filter((a) => a !== option)
          } : ans
        ).filter((ans) => ans.answer.length > 0)
      );
    }
  };
  const handleRadioChange = (questionId, value) => {
    const existingAnswerIndex = data.answers.findIndex((ans) => ans.question_id === questionId);
    if (existingAnswerIndex >= 0) {
      setData(
        "answers",
        data.answers.map((ans, index) => index === existingAnswerIndex ? { ...ans, answer: [value] } : ans)
      );
    } else {
      setData("answers", [
        ...data.answers,
        {
          question_id: questionId,
          answer: [value]
        }
      ]);
    }
  };
  const quizBack = (index) => {
    const previousQuestion = index - 1;
    if (previousQuestion < 0) {
      setCurrentTab("summary");
    } else {
      setCurrentTab(quiz.quiz_questions[previousQuestion].id.toString());
    }
    setFinished(false);
  };
  const quizNext = (index) => {
    const totalQuestions = quiz.quiz_questions.length;
    const currentQuestion = index + 1;
    if (currentQuestion === totalQuestions) {
      setFinished(true);
    } else {
      setCurrentTab(quiz.quiz_questions[currentQuestion].id.toString());
    }
  };
  const hasAnswerForCurrentQuestion = (questionId) => {
    return data.answers.some((ans) => ans.question_id === questionId && ans.answer.length > 0);
  };
  const startQuiz = () => {
    setData({
      submission_id: submissions.length > 0 ? submissions[0].id : null,
      section_quiz_id: quiz.id,
      user_id: auth.user.id,
      answers: []
    });
    setFinished(false);
    setCurrentTab(quiz.quiz_questions[0].id.toString());
  };
  return /* @__PURE__ */ jsxs(Card, { className: "group relative h-full max-h-[80vh] w-full overflow-hidden rounded-lg", children: [
    /* @__PURE__ */ jsx(LessonControl, { className: "opacity-0 transition-all duration-300 group-hover:opacity-100" }),
    /* @__PURE__ */ jsx("p", { className: "p-6 text-center text-lg font-bold", children: quiz.title }),
    /* @__PURE__ */ jsx(Separator, {}),
    /* @__PURE__ */ jsx("form", { onSubmit: handleSubmit, children: /* @__PURE__ */ jsxs(Tabs, { value: currentTab, onValueChange: setCurrentTab, className: "w-full p-6", children: [
      /* @__PURE__ */ jsxs(TabsContent, { value: "summary", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between p-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("p", { children: frontend.summery }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-2 text-sm", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: frontend.duration }),
              /* @__PURE__ */ jsxs("p", { children: [
                ":",
                ` ${quiz.hours} ${frontend.hours} ${quiz.minutes} ${frontend.minutes} ${quiz.seconds} ${frontend.seconds}`
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-2 text-sm", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: frontend.total_questions }),
              /* @__PURE__ */ jsxs("p", { children: [
                ": ",
                quiz.quiz_questions.length
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-2 text-sm", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: frontend.total_marks }),
              /* @__PURE__ */ jsxs("p", { children: [
                ": ",
                quiz.total_mark
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-2 text-sm", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: frontend.pass_marks }),
              /* @__PURE__ */ jsxs("p", { children: [
                ": ",
                quiz.pass_mark
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-2 text-sm", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: frontend.retake }),
              /* @__PURE__ */ jsxs("p", { children: [
                ": ",
                quiz.retake
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("p", { children: frontend.result }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-2 text-sm", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: frontend.retake_attempts }),
              /* @__PURE__ */ jsxs("p", { children: [
                ": ",
                ((_a = submissions[0]) == null ? void 0 : _a.attempts) || 0
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-2 text-sm", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: frontend.correct_answers }),
              /* @__PURE__ */ jsxs("p", { children: [
                ": ",
                ((_b = submissions[0]) == null ? void 0 : _b.correct_answers) || 0
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-2 text-sm", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: frontend.incorrect_answers }),
              /* @__PURE__ */ jsxs("p", { children: [
                ": ",
                ((_c = submissions[0]) == null ? void 0 : _c.incorrect_answers) || 0
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-2 text-sm", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: frontend.total_marks }),
              /* @__PURE__ */ jsxs("p", { children: [
                ": ",
                ((_d = submissions[0]) == null ? void 0 : _d.total_marks) || 0
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-2 text-sm", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: "Status" }),
              /* @__PURE__ */ jsxs("p", { children: [
                ": ",
                ((_e = submissions[0]) == null ? void 0 : _e.is_passed) ? frontend.passed : frontend.not_passed
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center p-6", children: ((_f = submissions[0]) == null ? void 0 : _f.attempts) >= quiz.retake ? /* @__PURE__ */ jsx(Button, { type: "button", size: "lg", children: frontend.quiz_submitted }) : /* @__PURE__ */ jsx(Button, { size: "lg", type: "button", onClick: startQuiz, children: submissions[0] ? frontend.retake_quiz : frontend.start_quiz }) })
      ] }),
      quiz.quiz_questions.map((question, index) => {
        var _a2;
        const options = (question == null ? void 0 : question.options) ? typeof question.options === "string" ? JSON.parse(question.options) : question.options : [];
        return /* @__PURE__ */ jsxs(TabsContent, { value: question.id.toString(), className: "space-y-6", children: [
          /* @__PURE__ */ jsx(TiptapRenderer, { children: question.title }),
          question.type === "boolean" ? /* @__PURE__ */ jsxs(
            RadioGroup,
            {
              className: "space-y-2",
              defaultValue: ((_a2 = data.answers.find((ans) => ans.question_id === question.id.toString())) == null ? void 0 : _a2.answer[0]) || void 0,
              onValueChange: (value) => handleRadioChange(question.id.toString(), value),
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsx(RadioGroupItem, { className: "cursor-pointer", id: "True", value: "True" }),
                  /* @__PURE__ */ jsx(Label, { htmlFor: "True", className: "capitalize", children: frontend.true })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsx(RadioGroupItem, { className: "cursor-pointer", id: "False", value: "False" }),
                  /* @__PURE__ */ jsx(Label, { htmlFor: "False", className: "capitalize", children: frontend.false })
                ] })
              ]
            }
          ) : /* @__PURE__ */ jsx("div", { className: "space-y-4", children: options.map((option) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(
              Checkbox,
              {
                id: option,
                checked: data.answers.some((ans) => ans.question_id === question.id.toString() && ans.answer.includes(option)),
                onCheckedChange: (checked) => handleCheckboxChange(question.id.toString(), option, checked)
              }
            ),
            /* @__PURE__ */ jsx(Label, { htmlFor: option, className: "capitalize", children: option })
          ] }, option)) }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-2 p-6", children: [
            /* @__PURE__ */ jsx(Button, { type: "button", onClick: () => quizBack(index), children: "Back" }),
            finished ? /* @__PURE__ */ jsx(LoadingButton, { loading: processing, children: "Finish" }) : /* @__PURE__ */ jsx(Button, { type: "button", onClick: () => quizNext(index), disabled: !hasAnswerForCurrentQuestion(question.id.toString()), children: "Next" })
          ] })
        ] });
      })
    ] }) })
  ] });
};
export {
  QuizViewer as default
};
