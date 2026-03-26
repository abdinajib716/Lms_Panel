import { jsxs, jsx } from "react/jsx-runtime";
import { D as DataSortModal } from "./data-sort-modal-CzOtsWqf.js";
import { D as DeleteModal } from "./delete-modal-BIvxKwRf.js";
import { T as TiptapRenderer } from "./client-renderer-CUBmzaOS.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Card } from "./card-D8SB2yrw.js";
import { D as Dialog, a as DialogTrigger, b as DialogContent, c as DialogHeader, d as DialogTitle, e as DialogFooter, f as DialogClose } from "./dialog-DD5SXV81.js";
import { S as ScrollArea } from "./scroll-area-DPHRDnwL.js";
import { T as TabsList, a as TabsTrigger } from "./tabs-BOXC0x8t.js";
import { c as cn } from "./utils-BmtPBcb0.js";
import { usePage, useForm, router } from "@inertiajs/react";
import { Trash2, Pencil } from "lucide-react";
import { useState, useEffect } from "react";
import QuestionForm from "./question-form-CH0HGsWO.js";
import "nprogress";
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
import "@radix-ui/react-dialog";
import "@radix-ui/react-scroll-area";
import "@radix-ui/react-tabs";
import "clsx";
import "tailwind-merge";
import "./input-error-CEW4jhey.js";
import "./loading-button-C4Hk_jCd.js";
import "./tabs-CPx41tqt.js";
import "./tag-input-BplrELmW.js";
import "@yaireo/tagify";
import "./Editor-iiR11EW9.js";
import "@radix-ui/react-tooltip";
import "react-icons/tb";
import "react-icons/ai";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-popover";
import "@tiptap/react";
import "prettier/plugins/html";
import "prettier/standalone";
import "@codemirror/lang-html";
import "@codemirror/state";
import "@codemirror/view";
import "codemirror";
import "./theme-BnORSbS2.js";
import "@codemirror/language";
import "@lezer/highlight";
import "react-dom";
import "react-colorful";
import "@tiptap/extension-bubble-menu";
import "@tiptap/pm/state";
import "@tiptap/starter-kit";
import "@tiptap/extension-character-count";
import "@tiptap/extension-underline";
import "@tiptap/extension-placeholder";
import "@tiptap/extension-text-align";
import "@tiptap/extension-text-style";
import "@tiptap/extension-subscript";
import "@tiptap/extension-superscript";
import "@tiptap/extension-bullet-list";
import "@tiptap/extension-ordered-list";
import "@tiptap/extension-list-keymap";
import "@tiptap/extension-color";
import "@tiptap/extension-highlight";
import "@tiptap/extension-code-block-lowlight";
import "@tiptap/core";
import "@tiptap/pm/view";
import "highlight.js/lib/core";
import "lowlight";
import "highlight.js/lib/languages/plaintext";
import "@tiptap/pm/model";
import "@tiptap/extension-image";
import "@tiptap/extension-link";
import "@tiptap/extension-table";
import "@tiptap/extension-table-cell";
import "@tiptap/extension-table-header";
import "@tiptap/extension-table-row";
import "./input-C6-Ta46A.js";
import "./label-Dd_w2I6M.js";
import "@radix-ui/react-label";
import "./select-BxPdBi6V.js";
import "@radix-ui/react-select";
const getQuestionTypes = (translate) => [
  { value: "single", label: translate.dashboard.single_choice, flag: false },
  { value: "multiple", label: translate.dashboard.multiple_choice, flag: false },
  { value: "boolean", label: translate.dashboard.true_false, flag: false }
];
const QuestionQuestions = ({ title, handler, quiz, question }) => {
  const [open, setOpen] = useState(false);
  const [questionType, setQuestionType] = useState(question ? "add-question" : "questions");
  const { props } = usePage();
  const { translate } = props;
  const { input, button, dashboard, frontend } = translate;
  getQuestionTypes(translate);
  const maxSort = quiz.quiz_questions.length > 0 ? Math.max(...quiz.quiz_questions.map((question2) => question2.sort)) : 0;
  const initialOptions = (question == null ? void 0 : question.options) ? typeof question.options === "string" ? JSON.parse(question.options) : question.options : [];
  const initialAnswer = (question == null ? void 0 : question.answer) ? typeof question.answer === "string" ? JSON.parse(question.answer) : question.answer : [];
  const { data, setData, post, put, reset, processing, errors } = useForm({
    title: (question == null ? void 0 : question.title) || "",
    type: (question == null ? void 0 : question.type) || "single",
    options: initialOptions,
    answer: initialAnswer,
    sort: (question == null ? void 0 : question.sort) || maxSort + 1,
    section_quiz_id: quiz.id
  });
  useEffect(() => {
    if (!open) {
      reset();
      setQuestionType(question ? "add-question" : "questions");
    }
  }, [open]);
  return /* @__PURE__ */ jsxs(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(DialogTrigger, { children: handler }),
    /* @__PURE__ */ jsx(DialogContent, { className: "p-0", children: /* @__PURE__ */ jsxs(ScrollArea, { className: "max-h-[90vh] p-6", children: [
      /* @__PURE__ */ jsx(DialogHeader, { className: "mb-6", children: /* @__PURE__ */ jsx(DialogTitle, { children: title }) }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-7", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsx(
            QuestionForm,
            {
              quiz,
              title: button.add_question,
              question,
              handler: /* @__PURE__ */ jsx(Button, { variant: "secondary", className: "h-8 text-xs", children: button.add_question })
            }
          ),
          /* @__PURE__ */ jsx(
            DataSortModal,
            {
              title: button.sort,
              data: quiz.quiz_questions,
              handler: /* @__PURE__ */ jsx(Button, { variant: "secondary", className: "h-8 text-xs", children: button.sort }),
              onOrderChange: (newOrder) => {
                router.post(
                  route("quiz.question.sort"),
                  {
                    sortedData: newOrder
                  },
                  { preserveScroll: true }
                );
              },
              renderContent: (item) => /* @__PURE__ */ jsx(Card, { className: "w-full px-4 py-3", children: /* @__PURE__ */ jsx(
                "div",
                {
                  dangerouslySetInnerHTML: {
                    __html: item.title
                  }
                }
              ) })
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-2", children: quiz.quiz_questions.length > 0 ? quiz.quiz_questions.map((question2) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "group border-border flex w-full items-center justify-between rounded-md border px-4 py-3",
            children: [
              /* @__PURE__ */ jsx(TiptapRenderer, { children: question2.title }),
              /* @__PURE__ */ jsxs("div", { className: "invisible flex items-center gap-2 group-hover:visible", children: [
                /* @__PURE__ */ jsx(
                  DeleteModal,
                  {
                    routePath: route("quiz.question.delete", {
                      id: question2.id
                    }),
                    actionComponent: /* @__PURE__ */ jsx(Button, { size: "icon", variant: "secondary", className: "text-destructive h-7 w-7", children: /* @__PURE__ */ jsx(Trash2, { className: "h-3 w-3" }) })
                  }
                ),
                /* @__PURE__ */ jsx(
                  QuestionForm,
                  {
                    quiz,
                    title: dashboard.edit_question,
                    question: question2,
                    handler: /* @__PURE__ */ jsx(Button, { size: "icon", variant: "secondary", className: "h-7 w-7", children: /* @__PURE__ */ jsx(Pencil, { className: "h-3 w-3" }) })
                  }
                )
              ] })
            ]
          },
          question2.id
        )) : /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: frontend.no_results }) }) })
      ] }),
      /* @__PURE__ */ jsx(DialogFooter, { className: "w-full justify-between space-x-2 pt-8", children: /* @__PURE__ */ jsxs("div", { className: "flex w-full items-center gap-4", children: [
        /* @__PURE__ */ jsx(DialogClose, { asChild: true, children: /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", children: button.close }) }),
        /* @__PURE__ */ jsx(TabsList, { className: "p-0", children: /* @__PURE__ */ jsx(TabsTrigger, { asChild: true, value: "questions", className: cn(questionType === "questions" ? "hidden" : "block"), children: /* @__PURE__ */ jsx(Button, { children: button.back }) }) })
      ] }) })
    ] }) })
  ] });
};
export {
  QuestionQuestions as default
};
