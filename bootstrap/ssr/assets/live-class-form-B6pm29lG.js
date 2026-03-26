import { jsxs, jsx } from "react/jsx-runtime";
import { D as DateTimePicker } from "./datetime-picker-Bln2jqxu.js";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { T as TiptapEditor } from "./Editor-iiR11EW9.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { D as Dialog, a as DialogTrigger, b as DialogContent, c as DialogHeader, d as DialogTitle, f as DialogClose } from "./dialog-DD5SXV81.js";
import { I as Input } from "./input-C6-Ta46A.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { S as ScrollArea } from "./scroll-area-DPHRDnwL.js";
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
import "@radix-ui/react-dialog";
import "@radix-ui/react-label";
import "@radix-ui/react-scroll-area";
const LiveClassForm = ({ title, liveClass, handler, courseId }) => {
  const [open, setOpen] = useState(false);
  const { props } = usePage();
  const { translate } = props;
  const { dashboard, input, button } = translate;
  const { data, setData, post, put, reset, errors, processing } = useForm({
    course_id: courseId,
    class_topic: (liveClass == null ? void 0 : liveClass.class_topic) || "",
    class_note: (liveClass == null ? void 0 : liveClass.class_note) || "",
    class_date_and_time: (liveClass == null ? void 0 : liveClass.class_date_and_time) ? new Date(liveClass.class_date_and_time) : /* @__PURE__ */ new Date()
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (liveClass) {
      put(route("live-class.update", liveClass.id), {
        onSuccess: () => setOpen(false)
      });
    } else {
      post(route("live-class.store"), {
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
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs(Label, { children: [
            dashboard.class_topic,
            " *"
          ] }),
          /* @__PURE__ */ jsx(
            Input,
            {
              type: "text",
              value: data.class_topic,
              onChange: (e) => setData("class_topic", e.target.value),
              placeholder: input.class_topic,
              required: true
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.class_topic })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs(Label, { children: [
            dashboard.start_date_time,
            " *"
          ] }),
          /* @__PURE__ */ jsx(DateTimePicker, { date: data.class_date_and_time, setDate: (date) => setData("class_date_and_time", date) }),
          /* @__PURE__ */ jsx(InputError, { message: errors.class_date_and_time })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: dashboard.class_notes }),
          /* @__PURE__ */ jsx(
            TiptapEditor,
            {
              output: "html",
              placeholder: {
                paragraph: input.description,
                imageCaption: input.image_url_placeholder
              },
              contentMinHeight: 256,
              contentMaxHeight: 640,
              initialContent: data.class_note,
              onContentChange: (value) => setData((prev) => ({
                ...prev,
                class_note: value
              }))
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.class_note })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-3", children: [
          /* @__PURE__ */ jsx(DialogClose, { asChild: true, children: /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", children: button.cancel }) }),
          /* @__PURE__ */ jsx(Button, { type: "submit", disabled: processing, children: processing ? dashboard.scheduling : button.schedule_class })
        ] })
      ] })
    ] }) })
  ] });
};
export {
  LiveClassForm as default
};
