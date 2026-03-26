import { jsxs, jsx } from "react/jsx-runtime";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { L as LoadingButton } from "./loading-button-C4Hk_jCd.js";
import { T as TiptapEditor } from "./Editor-iiR11EW9.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { D as Dialog, a as DialogTrigger, b as DialogContent, c as DialogHeader, d as DialogTitle } from "./dialog-DD5SXV81.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BxPdBi6V.js";
import { c as cn } from "./utils-BmtPBcb0.js";
import { usePage, useForm, Link, router } from "@inertiajs/react";
import { useState } from "react";
import "lucide-react";
/* empty css               */
import "clsx";
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
import "@radix-ui/react-select";
import "tailwind-merge";
const CourseUpdateHeader = () => {
  const [open, setOpen] = useState(false);
  const { props } = usePage();
  const { translate } = props;
  const { dashboard, button, input, common } = translate;
  const user = props.auth.user;
  const { course, watchHistory, approvalStatus } = props;
  const statuses = props.statuses.filter((status) => status !== course.status);
  const { approve_able, validation_messages, counts } = approvalStatus;
  const { data, put, setData, processing, errors, reset } = useForm({
    status: "",
    feedback: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    put(route("course.status", { id: course.id }), {
      onSuccess: () => {
        reset();
        setOpen(false);
      }
    });
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-4 md:gap-6", children: [
    /* @__PURE__ */ jsx(Button, { children: /* @__PURE__ */ jsx(
      Link,
      {
        href: route("course.details", {
          slug: course.slug,
          id: course.id
        }),
        children: button.course_preview
      }
    ) }),
    watchHistory ? /* @__PURE__ */ jsx(Button, { children: /* @__PURE__ */ jsx(
      Link,
      {
        href: route("course.player", {
          type: watchHistory.current_watching_type,
          watch_history: watchHistory.id,
          lesson_id: watchHistory.current_watching_id
        }),
        children: button.course_player
      }
    ) }) : approve_able ? /* @__PURE__ */ jsx(Button, { onClick: () => router.post(route("player.init.watch-history"), { course_id: course.id }), children: button.course_player }) : /* @__PURE__ */ jsx(Button, { disabled: true, children: button.course_player }),
    /* @__PURE__ */ jsx(
      Button,
      {
        className: cn("capitalize", course.status === "approved" ? "bg-green-500" : course.status === "rejected" ? "bg-red-500" : "bg-gray-500"),
        disabled: true,
        children: course.status
      }
    ),
    user.role === "instructor" && course.status !== "approved" && course.status !== "pending" && (approve_able ? /* @__PURE__ */ jsx(Button, { onClick: () => router.put(route("course.status", { id: course.id }), { status: "pending" }), children: button.submit_for_approval }) : /* @__PURE__ */ jsxs(Dialog, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsx(DialogTrigger, { children: /* @__PURE__ */ jsx(Button, { children: button.submit_for_approval }) }),
      /* @__PURE__ */ jsxs(DialogContent, { children: [
        /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: dashboard.course_approval_status }) }),
        approve_able ? /* @__PURE__ */ jsx("div", { className: "text-green-600", children: dashboard.course_ready_approval }) : /* @__PURE__ */ jsxs("div", { className: "text-red-600", children: [
          /* @__PURE__ */ jsx("h3", { children: dashboard.course_needs_attention }),
          /* @__PURE__ */ jsx("ul", { className: "list-disc pl-5", children: validation_messages.map((message, index) => /* @__PURE__ */ jsx("li", { children: message }, index)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium", children: dashboard.course_content_summary }),
          /* @__PURE__ */ jsxs("p", { children: [
            dashboard.sections,
            ": ",
            counts.sections_count
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            dashboard.lessons,
            ": ",
            counts.lessons_count
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            dashboard.quizzes,
            ": ",
            counts.quizzes_count
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "font-medium", children: [
            dashboard.total_content_items,
            ": ",
            counts.total_content_count
          ] })
        ] })
      ] })
    ] })),
    user.role === "admin" && /* @__PURE__ */ jsxs(Dialog, { children: [
      /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { className: "capitalize", children: button.approval_status }) }),
      /* @__PURE__ */ jsx(DialogContent, { children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: common.status }),
          /* @__PURE__ */ jsxs(Select, { required: true, value: data.status, onValueChange: (value) => setData("status", value), children: [
            /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: common.select_the_approval_status }) }),
            /* @__PURE__ */ jsx(SelectContent, { children: statuses.map((status) => /* @__PURE__ */ jsx(SelectItem, { value: status, children: status }, status)) })
          ] }),
          /* @__PURE__ */ jsx(InputError, { message: errors.status })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "pb-6", children: [
          /* @__PURE__ */ jsxs(Label, { children: [
            input.feedback,
            " ",
            `(Optional)`
          ] }),
          /* @__PURE__ */ jsx(
            TiptapEditor,
            {
              ssr: true,
              output: "html",
              placeholder: {
                paragraph: input.description_placeholder,
                imageCaption: input.image_url_placeholder
              },
              contentMinHeight: 256,
              contentMaxHeight: 640,
              initialContent: data.feedback,
              onContentChange: (value) => setData((prev) => ({
                ...prev,
                feedback: value
              }))
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.feedback })
        ] }),
        /* @__PURE__ */ jsx(LoadingButton, { loading: processing, className: "w-full", children: button.submit })
      ] }) })
    ] })
  ] });
};
export {
  CourseUpdateHeader as default
};
