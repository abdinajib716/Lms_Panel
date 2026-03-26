import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { D as DateTimePicker } from "./datetime-picker-Bln2jqxu.js";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { L as LoadingButton } from "./loading-button-C4Hk_jCd.js";
import { T as TiptapEditor } from "./Editor-iiR11EW9.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Checkbox } from "./checkbox-CO4DegBm.js";
import { D as Dialog, a as DialogTrigger, b as DialogContent, c as DialogHeader, d as DialogTitle, e as DialogFooter, f as DialogClose } from "./dialog-DD5SXV81.js";
import { I as Input } from "./input-C6-Ta46A.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { S as ScrollArea } from "./scroll-area-DPHRDnwL.js";
import { o as onHandleChange } from "./inertia-BtwbgBI3.js";
import { usePage, useForm } from "@inertiajs/react";
import { useState } from "react";
import "lucide-react";
import "react-day-picker";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "./popover-BV7JTqNd.js";
import "@radix-ui/react-popover";
import "./select-BxPdBi6V.js";
import "@radix-ui/react-select";
import "./use-lang-44ndmTOc.js";
import "date-fns";
/* empty css               */
import "@radix-ui/react-tooltip";
import "react-icons/tb";
import "react-icons/ai";
import "@radix-ui/react-dropdown-menu";
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
import "@radix-ui/react-checkbox";
import "@radix-ui/react-dialog";
import "@radix-ui/react-label";
import "@radix-ui/react-scroll-area";
const AssignmentForm = ({ title, assignment, handler }) => {
  const [open, setOpen] = useState(false);
  const { props } = usePage();
  const { translate } = props;
  const { dashboard, input, button } = translate;
  const { data, setData, post, put, reset, errors, processing } = useForm({
    title: (assignment == null ? void 0 : assignment.title) || "",
    course_id: props.course.id,
    total_mark: (assignment == null ? void 0 : assignment.total_mark) || "",
    pass_mark: (assignment == null ? void 0 : assignment.pass_mark) || "",
    retake: (assignment == null ? void 0 : assignment.retake) || 1,
    summary: (assignment == null ? void 0 : assignment.summary) || "",
    deadline: (assignment == null ? void 0 : assignment.deadline) ? new Date(assignment.deadline) : /* @__PURE__ */ new Date(),
    late_submission: (assignment == null ? void 0 : assignment.late_submission) || false,
    late_total_mark: (assignment == null ? void 0 : assignment.late_total_mark) || 0,
    late_deadline: (assignment == null ? void 0 : assignment.late_deadline) ? new Date(assignment.late_deadline) : ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (assignment) {
      put(route("assignment.update", assignment.id), {
        onSuccess: () => {
          reset();
          setOpen(false);
        }
      });
    } else {
      post(route("assignment.store"), {
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
              placeholder: "Enter assignment title",
              onChange: (e) => onHandleChange(e, setData)
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.title })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Deadline" }),
          /* @__PURE__ */ jsx(DateTimePicker, { date: data.deadline, setDate: (date) => setData("deadline", date) }),
          /* @__PURE__ */ jsx(InputError, { message: errors.deadline })
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
          /* @__PURE__ */ jsx(Label, { htmlFor: "summary", children: "Summary" }),
          /* @__PURE__ */ jsx(
            TiptapEditor,
            {
              ssr: true,
              output: "html",
              placeholder: {
                paragraph: "Type assignment summary here...",
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
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(
            Checkbox,
            {
              id: "late_submission",
              checked: data.late_submission,
              onCheckedChange: (checked) => setData((prev) => ({
                ...prev,
                late_submission: checked
              }))
            }
          ),
          /* @__PURE__ */ jsx(Label, { htmlFor: "late_submission", className: "cursor-pointer", children: "Allow Late Submission" })
        ] }),
        data.late_submission && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { children: "Late Submission Mark" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                type: "number",
                name: "late_total_mark",
                value: data.late_total_mark,
                placeholder: "Enter marks for late submission",
                onChange: (e) => onHandleChange(e, setData)
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.late_total_mark })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { children: "Late Submission Deadline" }),
            /* @__PURE__ */ jsx(
              DateTimePicker,
              {
                date: data.late_deadline ? new Date(data.late_deadline) : /* @__PURE__ */ new Date(),
                setDate: (date) => setData("late_deadline", date)
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.late_deadline })
          ] })
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
  AssignmentForm as default
};
