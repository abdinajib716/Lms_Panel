import { jsxs, jsx } from "react/jsx-runtime";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { L as LoadingButton } from "./loading-button-C4Hk_jCd.js";
import { T as TiptapEditor } from "./Editor-iiR11EW9.js";
import { D as Dialog, a as DialogTrigger, b as DialogContent, c as DialogHeader, d as DialogTitle } from "./dialog-DD5SXV81.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BxPdBi6V.js";
import { usePage, useForm } from "@inertiajs/react";
import { useState } from "react";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "lucide-react";
import "./button-jZyzwgdo.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
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
import "@radix-ui/react-select";
const ApplicationApproval = ({ instructor, actionComponent }) => {
  const [open, setOpen] = useState(false);
  const statuses = ["pending", "approved", "rejected"].filter((status) => status !== instructor.status);
  const { props } = usePage();
  const { translate } = props;
  const { dashboard, input, button } = translate;
  const { data, put, setData, processing, errors, reset } = useForm({
    status: "",
    feedback: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    put(route("instructors.status", { id: instructor.id }), {
      onSuccess: () => {
        reset();
        setOpen(false);
      }
    });
  };
  return /* @__PURE__ */ jsxs(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: actionComponent }),
    /* @__PURE__ */ jsx(DialogContent, { children: /* @__PURE__ */ jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsx(DialogTitle, { children: dashboard.are_you_absolutely_sure }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs(Label, { children: [
            dashboard.approval_status,
            " *"
          ] }),
          /* @__PURE__ */ jsxs(Select, { required: true, value: data.status, onValueChange: (value) => setData("status", value), children: [
            /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select the approval status" }) }),
            /* @__PURE__ */ jsx(SelectContent, { children: statuses.map((status) => /* @__PURE__ */ jsx(SelectItem, { value: status, className: "capitalize", children: status }, status)) })
          ] }),
          /* @__PURE__ */ jsx(InputError, { message: errors.status })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "pb-6", children: [
          /* @__PURE__ */ jsx(Label, { children: dashboard.feedback }),
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
      ] })
    ] }) })
  ] });
};
export {
  ApplicationApproval as default
};
