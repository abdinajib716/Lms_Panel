import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { L as LoadingButton } from "./loading-button-C4Hk_jCd.js";
import { T as Tabs } from "./tabs-CPx41tqt.js";
import { T as TagInput } from "./tag-input-BplrELmW.js";
import { T as TiptapEditor } from "./Editor-iiR11EW9.js";
import { D as Dialog, a as DialogTrigger, b as DialogContent, c as DialogHeader, d as DialogTitle } from "./dialog-DD5SXV81.js";
import { I as Input } from "./input-C6-Ta46A.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { S as ScrollArea } from "./scroll-area-DPHRDnwL.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BxPdBi6V.js";
import { T as TabsList, a as TabsTrigger } from "./tabs-BOXC0x8t.js";
import { usePage, useForm } from "@inertiajs/react";
import { useState } from "react";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "lucide-react";
import "./button-jZyzwgdo.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@yaireo/tagify";
/* empty css               */
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
import "@radix-ui/react-dialog";
import "@radix-ui/react-label";
import "@radix-ui/react-scroll-area";
import "@radix-ui/react-select";
import "@radix-ui/react-tabs";
const getQuestionTypes = (translate) => [
  { value: "single", label: translate.dashboard.single_choice, flag: false },
  { value: "multiple", label: translate.dashboard.multiple_choice, flag: false },
  { value: "boolean", label: translate.dashboard.true_false, flag: false }
];
const QuestionForm = ({ title, handler, quiz, question }) => {
  const [open, setOpen] = useState(false);
  const { props } = usePage();
  const { translate } = props;
  const { frontend, dashboard, input, button } = translate;
  const questionTypes = getQuestionTypes(translate);
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
  const handleSubmit = (e) => {
    e.preventDefault();
    if (question) {
      put(route("quiz.question.update", { id: question.id }), {
        onSuccess: () => setOpen(false)
      });
    } else {
      post(route("quiz.question.store"), {
        onSuccess: () => {
          reset();
          setOpen(false);
        }
      });
    }
  };
  return /* @__PURE__ */ jsxs(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(DialogTrigger, { children: handler }),
    /* @__PURE__ */ jsx(DialogContent, { className: "p-0", children: /* @__PURE__ */ jsxs(ScrollArea, { className: "max-h-[90vh] p-6", children: [
      /* @__PURE__ */ jsx(DialogHeader, { className: "mb-6", children: /* @__PURE__ */ jsx(DialogTitle, { children: title }) }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "relative space-y-4 p-0.5", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: dashboard.question_type }),
          /* @__PURE__ */ jsxs(
            Select,
            {
              value: data.type,
              onValueChange: (value) => {
                setData("type", value);
                if (value === "boolean") {
                  setData("answer", ["True"]);
                } else {
                  setData("answer", []);
                }
              },
              children: [
                /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: input.question_type }) }),
                /* @__PURE__ */ jsx(SelectContent, { children: questionTypes.map((type) => /* @__PURE__ */ jsx(SelectItem, { value: type.value, children: type.label }, type.value)) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: dashboard.question_title }),
          /* @__PURE__ */ jsx(
            TiptapEditor,
            {
              ssr: true,
              output: "html",
              placeholder: {
                paragraph: "Type your content here...",
                imageCaption: "Type caption for image (optional)"
              },
              contentMinHeight: 256,
              contentMaxHeight: 640,
              initialContent: data.title,
              onContentChange: (value) => setData((prev) => ({
                ...prev,
                title: value
              }))
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.title })
        ] }),
        data.type !== "boolean" && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { children: input.options }),
            /* @__PURE__ */ jsx(
              TagInput,
              {
                defaultTags: data.options,
                placeholder: input.question_options_placeholder,
                onChange: (values) => setData("options", values)
              }
            )
          ] }),
          data.type === "multiple" ? /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { children: input.answer }),
            /* @__PURE__ */ jsx(
              TagInput,
              {
                defaultTags: data.answer,
                whitelist: data.options,
                enforceWhitelist: true,
                placeholder: input.answer_options_placeholder,
                onChange: (values) => setData("answer", values)
              }
            )
          ] }) : /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { children: input.answer }),
            /* @__PURE__ */ jsx(
              Input,
              {
                type: "text",
                value: data.answer,
                placeholder: input.answer_placeholder,
                onChange: (e) => setData("answer", [e.target.value])
              }
            )
          ] })
        ] }),
        data.type === "boolean" && /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: input.answer }),
          /* @__PURE__ */ jsx(Tabs, { defaultValue: "True", value: data.answer[0], onValueChange: (value) => setData("answer", [value]), children: /* @__PURE__ */ jsxs(TabsList, { className: "w-full", children: [
            /* @__PURE__ */ jsx(TabsTrigger, { value: "True", className: "w-full", children: frontend.true }),
            /* @__PURE__ */ jsx(TabsTrigger, { value: "False", className: "w-full", children: frontend.false })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx(LoadingButton, { loading: processing, className: "absolute right-0 -bottom-16", children: button.submit })
      ] })
    ] }) })
  ] });
};
export {
  QuestionForm as default
};
