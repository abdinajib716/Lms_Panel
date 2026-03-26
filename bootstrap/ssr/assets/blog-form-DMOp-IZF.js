import { jsxs, jsx } from "react/jsx-runtime";
import { C as Combobox } from "./combobox-CtfF3flG.js";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { T as TiptapEditor } from "./Editor-iiR11EW9.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Card, a as CardHeader, c as CardTitle, d as CardDescription, b as CardContent } from "./card-D8SB2yrw.js";
import { I as Input } from "./input-C6-Ta46A.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BxPdBi6V.js";
import { o as onHandleChange } from "./inertia-BtwbgBI3.js";
import { usePage, useForm, Link } from "@inertiajs/react";
import { FileText, Image, Save } from "lucide-react";
import { useState } from "react";
import "cmdk";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "./popover-BV7JTqNd.js";
import "@radix-ui/react-popover";
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
import "@radix-ui/react-label";
import "@radix-ui/react-select";
const BlogForm = () => {
  const { props } = usePage();
  const { auth, blog, categories, statuses, translate } = props;
  const { dashboard, input, button } = translate;
  const [banner, setBanner] = useState((blog == null ? void 0 : blog.banner) || "/assets/images/blank-image.jpg");
  const [thumbnail, setThumbnail] = useState((blog == null ? void 0 : blog.thumbnail) || "/assets/images/blank-image.jpg");
  const { data, setData, post, processing, errors } = useForm({
    title: blog ? blog.title : "",
    slug: blog ? blog.slug : "",
    description: blog ? blog.description : "",
    keywords: blog ? blog.keywords || "" : "",
    status: blog ? blog.status : "draft",
    thumbnail: null,
    banner: null,
    user_id: blog ? blog.user_id : auth.user.id,
    blog_category_id: blog ? blog.blog_category_id : ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (blog) {
      post(route("blogs.update", blog.id));
    } else {
      post(route("blogs.store"));
    }
  };
  const transformedCategories = categories == null ? void 0 : categories.map((category) => ({
    label: category.name,
    value: category.id
  }));
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(FileText, { className: "h-5 w-5" }),
          dashboard.blog_information
        ] }),
        /* @__PURE__ */ jsx(CardDescription, { children: dashboard.provide_blog_details })
      ] }),
      /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "title", children: dashboard.title_80_char }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "title",
              value: data.title,
              onChange: (e) => setData("title", e.target.value),
              placeholder: dashboard.enter_blog_title,
              maxLength: 80
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.title })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs(Label, { htmlFor: "blog_category_id", children: [
              input.category,
              " *"
            ] }),
            /* @__PURE__ */ jsx(
              Combobox,
              {
                defaultValue: data.blog_category_id,
                data: transformedCategories || [],
                placeholder: dashboard.select_category,
                onSelect: (selected) => setData("blog_category_id", selected.value)
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.blog_category_id })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs(Label, { htmlFor: "status", children: [
              input.status,
              " *"
            ] }),
            /* @__PURE__ */ jsxs(Select, { value: data.status, onValueChange: (value) => setData("status", value), children: [
              /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsx(SelectContent, { children: Object.entries(statuses).map(([key, label]) => /* @__PURE__ */ jsx(SelectItem, { value: key, children: label }, key)) })
            ] }),
            /* @__PURE__ */ jsx(InputError, { message: errors.status })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "keywords", children: dashboard.keywords_80_char }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "keywords",
              value: data.keywords,
              onChange: (e) => setData("keywords", e.target.value),
              placeholder: dashboard.enter_your_keywords,
              maxLength: 80
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.keywords })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs(Label, { htmlFor: "description", children: [
            input.description,
            " *"
          ] }),
          /* @__PURE__ */ jsx(
            TiptapEditor,
            {
              ssr: true,
              output: "html",
              placeholder: {
                paragraph: dashboard.write_blog_content_here,
                imageCaption: dashboard.type_caption_optional
              },
              contentMinHeight: 256,
              contentMaxHeight: 640,
              initialContent: data.description,
              onContentChange: (value) => setData((prev) => ({
                ...prev,
                description: value
              }))
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.description })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Image, { className: "h-5 w-5" }),
          dashboard.media_files
        ] }),
        /* @__PURE__ */ jsx(CardDescription, { children: dashboard.upload_banner_thumbnail_desc })
      ] }),
      /* @__PURE__ */ jsxs(CardContent, { className: "grid gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "banner", children: dashboard.blog_banner }),
          /* @__PURE__ */ jsx(Input, { id: "banner", type: "file", accept: "image/*", name: "banner", onChange: (e) => onHandleChange(e, setData, setBanner) }),
          /* @__PURE__ */ jsx(InputError, { message: errors.banner }),
          /* @__PURE__ */ jsx("div", { className: "border-border mt-3 overflow-hidden rounded-lg border-2 border-dashed", children: /* @__PURE__ */ jsx("img", { src: banner, alt: "" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "thumbnail", children: dashboard.blog_thumbnail }),
          /* @__PURE__ */ jsx(Input, { id: "thumbnail", type: "file", accept: "image/*", name: "thumbnail", onChange: (e) => onHandleChange(e, setData, setThumbnail) }),
          /* @__PURE__ */ jsx(InputError, { message: errors.thumbnail }),
          /* @__PURE__ */ jsx("div", { className: "border-border mt-3 overflow-hidden rounded-lg border-2 border-dashed", children: /* @__PURE__ */ jsx("img", { src: thumbnail, alt: "" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-4", children: [
      /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", asChild: true, children: /* @__PURE__ */ jsx(Link, { href: route("blogs.index"), children: button.cancel }) }),
      /* @__PURE__ */ jsxs(Button, { type: "submit", disabled: processing, children: [
        /* @__PURE__ */ jsx(Save, { className: "mr-2 h-4 w-4" }),
        blog ? dashboard.update_blog : dashboard.add_blog
      ] })
    ] })
  ] });
};
export {
  BlogForm as default
};
