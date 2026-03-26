import { jsxs, jsx } from "react/jsx-runtime";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { L as LoadingButton } from "./loading-button-C4Hk_jCd.js";
import { T as TiptapEditor } from "./Editor-iiR11EW9.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { D as Dialog, a as DialogTrigger, b as DialogContent, c as DialogHeader, d as DialogTitle } from "./dialog-DD5SXV81.js";
import { I as Input } from "./input-C6-Ta46A.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { R as RadioGroup, a as RadioGroupItem } from "./radio-group-sSS5HHUP.js";
import { S as ScrollArea } from "./scroll-area-DPHRDnwL.js";
import { T as Textarea } from "./textarea-DctRxpgE.js";
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
import "@radix-ui/react-radio-group";
import "@radix-ui/react-scroll-area";
const CustomPageCreateForm = ({ title, actionComponent }) => {
  const { props } = usePage();
  const { translate } = props;
  const { input, button, common } = translate;
  const [open, setOpen] = useState(false);
  const { data, setData, post, reset, errors, processing } = useForm({
    name: "",
    slug: "",
    title: "",
    description: "",
    meta_description: "",
    meta_keywords: "",
    active: true
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("settings.custom-page.store"), {
      onSuccess: () => {
        reset();
        setOpen(false);
      }
    });
  };
  return /* @__PURE__ */ jsxs(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(DialogTrigger, { children: actionComponent }),
    /* @__PURE__ */ jsx(DialogContent, { className: "p-0", children: /* @__PURE__ */ jsxs(ScrollArea, { className: "max-h-[90vh] p-6", children: [
      /* @__PURE__ */ jsx(DialogHeader, { className: "mb-6", children: /* @__PURE__ */ jsx(DialogTitle, { children: title }) }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: common.name }),
          /* @__PURE__ */ jsx(Input, { name: "name", value: data.name, onChange: (e) => onHandleChange(e, setData), placeholder: input.page_name_placeholder }),
          /* @__PURE__ */ jsx(InputError, { message: errors.name })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: input.slug }),
          /* @__PURE__ */ jsx(Input, { name: "slug", value: data.slug, onChange: (e) => onHandleChange(e, setData), placeholder: input.page_slug_placeholder }),
          /* @__PURE__ */ jsx(InputError, { message: errors.slug })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: common.title }),
          /* @__PURE__ */ jsx(Input, { name: "title", value: data.title, onChange: (e) => onHandleChange(e, setData), placeholder: input.page_title_placeholder }),
          /* @__PURE__ */ jsx(InputError, { message: errors.title })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: input.page_contents }),
          /* @__PURE__ */ jsx(
            TiptapEditor,
            {
              ssr: false,
              output: "html",
              placeholder: {
                paragraph: input.description_placeholder,
                imageCaption: input.image_url_placeholder
              },
              contentMaxHeight: 640,
              initialContent: data.description,
              onContentChange: (value) => setData((prev) => ({
                ...prev,
                description: value
              }))
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.description })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: input.meta_description }),
          /* @__PURE__ */ jsx(
            Textarea,
            {
              rows: 3,
              name: "meta_description",
              value: data.meta_description,
              onChange: (e) => onHandleChange(e, setData),
              placeholder: input.meta_description_placeholder
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.meta_description })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: input.meta_keywords }),
          /* @__PURE__ */ jsx(
            Textarea,
            {
              rows: 2,
              name: "meta_keywords",
              value: data.meta_keywords,
              onChange: (e) => onHandleChange(e, setData),
              placeholder: input.meta_keywords_placeholder
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.meta_keywords })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: common.status }),
          /* @__PURE__ */ jsxs(RadioGroup, { value: data.active ? "on" : "off", onValueChange: (value) => setData("active", value === "on"), children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsx(RadioGroupItem, { value: "off", id: "off" }),
              /* @__PURE__ */ jsx(Label, { htmlFor: "off", children: common.off })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsx(RadioGroupItem, { value: "on", id: "on" }),
              /* @__PURE__ */ jsx(Label, { htmlFor: "on", children: common.on })
            ] })
          ] }),
          /* @__PURE__ */ jsx(InputError, { message: errors.active })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-4", children: [
          /* @__PURE__ */ jsx(Button, { variant: "outline", type: "button", onClick: () => setOpen(false), children: button.cancel }),
          /* @__PURE__ */ jsx(LoadingButton, { loading: processing, type: "submit", children: button.submit })
        ] })
      ] })
    ] }) })
  ] });
};
export {
  CustomPageCreateForm as default
};
