import { jsxs, jsx } from "react/jsx-runtime";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { L as LoadingButton } from "./loading-button-C4Hk_jCd.js";
import { T as TiptapEditor } from "./Editor-iiR11EW9.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { D as Dialog, a as DialogTrigger, b as DialogContent, c as DialogHeader, d as DialogTitle, e as DialogFooter, f as DialogClose } from "./dialog-DD5SXV81.js";
import { I as Input } from "./input-C6-Ta46A.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { S as ScrollArea } from "./scroll-area-DPHRDnwL.js";
import { o as onHandleChange } from "./inertia-BtwbgBI3.js";
import { usePage, useForm } from "@inertiajs/react";
import { useState } from "react";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "lucide-react";
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
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-dialog";
import "@radix-ui/react-label";
import "@radix-ui/react-scroll-area";
const QuizForm = ({ title, quiz, handler, sectionId }) => {
  const [open, setOpen] = useState(false);
  const { props } = usePage();
  const { translate } = props;
  const { dashboard, input, button } = translate;
  const { data, setData, post, put, reset, errors, processing } = useForm({
    title: (quiz == null ? void 0 : quiz.title) || "",
    course_section_id: sectionId,
    course_id: props.course.id,
    total_mark: (quiz == null ? void 0 : quiz.total_mark) || "",
    pass_mark: (quiz == null ? void 0 : quiz.pass_mark) || "",
    retake: (quiz == null ? void 0 : quiz.retake) || 1,
    summary: (quiz == null ? void 0 : quiz.summary) || "",
    hours: (quiz == null ? void 0 : quiz.hours) || "",
    minutes: (quiz == null ? void 0 : quiz.minutes) || "",
    seconds: (quiz == null ? void 0 : quiz.seconds) || ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (quiz) {
      put(route("quiz.update", quiz.id), {
        onSuccess: () => {
          reset();
          setOpen(false);
        }
      });
    } else {
      post(route("quiz.store"), {
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
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4 p-0.5", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: input.title }),
          /* @__PURE__ */ jsx(
            Input,
            {
              required: true,
              type: "text",
              name: "title",
              value: data.title,
              placeholder: input.quiz_title_placeholder,
              onChange: (e) => onHandleChange(e, setData)
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.title })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { children: dashboard.hours }),
            /* @__PURE__ */ jsx(
              Input,
              {
                required: true,
                type: "number",
                name: "hours",
                value: data.hours,
                placeholder: input.hours_placeholder,
                onChange: (e) => onHandleChange(e, setData)
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.hours })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { children: dashboard.minutes }),
            /* @__PURE__ */ jsx(
              Input,
              {
                required: true,
                type: "number",
                name: "minutes",
                value: data.minutes,
                placeholder: input.minutes_placeholder,
                onChange: (e) => onHandleChange(e, setData)
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.minutes })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { children: dashboard.seconds }),
            /* @__PURE__ */ jsx(
              Input,
              {
                required: true,
                type: "number",
                name: "seconds",
                value: data.seconds,
                placeholder: input.seconds_placeholder,
                onChange: (e) => onHandleChange(e, setData)
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.seconds })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { children: dashboard.total_mark }),
            /* @__PURE__ */ jsx(Input, { required: true, type: "number", name: "total_mark", value: data.total_mark, onChange: (e) => onHandleChange(e, setData) }),
            /* @__PURE__ */ jsx(InputError, { message: errors.total_mark })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { children: dashboard.pass_mark }),
            /* @__PURE__ */ jsx(Input, { required: true, type: "number", name: "pass_mark", value: data.pass_mark, onChange: (e) => onHandleChange(e, setData) }),
            /* @__PURE__ */ jsx(InputError, { message: errors.pass_mark })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { children: input.retake_attempts }),
            /* @__PURE__ */ jsx(
              Input,
              {
                min: "1",
                required: true,
                type: "number",
                name: "retake",
                value: data.retake,
                placeholder: "00",
                onChange: (e) => onHandleChange(e, setData)
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.retake })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "summary", children: dashboard.quiz_summary }),
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
              initialContent: data.summary,
              onContentChange: (value) => setData((prev) => ({
                ...prev,
                summary: value
              }))
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.summary })
        ] }),
        /* @__PURE__ */ jsxs(DialogFooter, { className: "flex justify-end space-x-2 pt-4", children: [
          /* @__PURE__ */ jsx(DialogClose, { asChild: true, children: /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", children: button.close }) }),
          /* @__PURE__ */ jsx(LoadingButton, { loading: processing, children: button.submit })
        ] })
      ] })
    ] }) })
  ] });
};
export {
  QuizForm as default
};
