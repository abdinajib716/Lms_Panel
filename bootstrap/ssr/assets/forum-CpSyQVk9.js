import { jsxs, jsx } from "react/jsx-runtime";
import { D as DeleteModal } from "./delete-modal-BIvxKwRf.js";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { L as LoadingButton } from "./loading-button-C4Hk_jCd.js";
import { T as TiptapEditor } from "./Editor-iiR11EW9.js";
import { T as TiptapRenderer } from "./client-renderer-CUBmzaOS.js";
import { A as Avatar, a as AvatarImage, b as AvatarFallback } from "./avatar-Cr_jqfHL.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, c as DropdownMenuItem } from "./dropdown-menu-BIfW6iuW.js";
import { I as Input } from "./input-C6-Ta46A.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { S as Separator } from "./separator-R7EO2G8T.js";
import { o as onHandleChange } from "./inertia-BtwbgBI3.js";
import { usePage, useForm } from "@inertiajs/react";
import { format } from "date-fns";
import { EllipsisVertical, Trash, MessageCircle, SquarePen } from "lucide-react";
import ForumEdit from "./forum-edit-C8UWY74J.js";
import ForumReply from "./forum-reply-DjXsjdAz.js";
import "./dialog-DD5SXV81.js";
import "@radix-ui/react-dialog";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "react";
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
import "react-icons/lu";
import "hast-util-to-jsx-runtime";
import "shiki/bundle/full";
import "rehype-parse";
import "rehype-react";
import "unified";
import "unist-util-visit";
import "@radix-ui/react-avatar";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-label";
import "@radix-ui/react-separator";
const Forum = () => {
  const { props, url } = usePage();
  const { translate } = props;
  const { button, input, frontend } = translate;
  const lesson = props.watching;
  const { data, setData, post, errors, processing, reset } = useForm({
    url,
    title: "",
    description: "",
    user_id: props.auth.user.id,
    course_id: props.course.id,
    section_lesson_id: props.watching.id
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("course-forums.store"), {
      onSuccess: () => {
        reset();
      }
    });
  };
  return /* @__PURE__ */ jsxs("div", { children: [
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
            placeholder: input.title_placeholder,
            onChange: (e) => onHandleChange(e, setData)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.title })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { children: input.description }),
        /* @__PURE__ */ jsx(
          TiptapEditor,
          {
            ssr: true,
            output: "html",
            placeholder: {
              paragraph: input.description,
              imageCaption: input.image_url_placeholder
            },
            contentMinHeight: 160,
            contentMaxHeight: 400,
            initialContent: data.description,
            onContentChange: (value) => setData("description", value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.description })
      ] }),
      /* @__PURE__ */ jsx(LoadingButton, { loading: processing, children: button.submit })
    ] }),
    /* @__PURE__ */ jsx(Separator, { className: "my-6" }),
    lesson.forums.map((forum) => /* @__PURE__ */ jsxs("div", { className: "space-y-4 rounded-lg border p-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxs(Avatar, { className: "h-8 w-8", children: [
            /* @__PURE__ */ jsx(AvatarImage, { src: forum.user.photo || "", alt: forum.user.name, className: "object-cover" }),
            /* @__PURE__ */ jsx(AvatarFallback, { children: forum.user.name.charAt(0) })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold", children: forum.user.name }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-xs", children: format(new Date(forum.created_at), "MMM d, yyyy h:mm a") })
          ] })
        ] }),
        forum.user_id === props.auth.user.id && /* @__PURE__ */ jsxs(DropdownMenu, { children: [
          /* @__PURE__ */ jsx(DropdownMenuTrigger, { children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "icon", className: "size-8", children: /* @__PURE__ */ jsx(EllipsisVertical, {}) }) }),
          /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", children: [
            /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsx(ForumEdit, { url, forum }) }),
            /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsx(
              DeleteModal,
              {
                routePath: route("course-forums.destroy", forum.id),
                actionComponent: /* @__PURE__ */ jsxs(Button, { size: "sm", variant: "ghost", className: "w-full cursor-pointer justify-start px-2", children: [
                  /* @__PURE__ */ jsx(Trash, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsx("span", { children: button.delete })
                ] })
              }
            ) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-lg font-medium", children: forum.title }),
        /* @__PURE__ */ jsx(TiptapRenderer, { children: forum.description })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx(
          ForumReply,
          {
            url,
            forum,
            user: props.auth.user,
            actionComponent: /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", className: "flex items-center gap-2 shadow-none", children: [
              /* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsx("span", { children: button.reply })
            ] })
          }
        ),
        /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground text-xs", children: [
          forum.replies.length,
          " ",
          frontend.replies
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, { className: "my-6" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-8 pl-6", children: forum.replies.map((reply) => /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxs(Avatar, { className: "h-8 w-8", children: [
              /* @__PURE__ */ jsx(AvatarImage, { src: reply.user.photo || "", alt: reply.user.name, className: "object-cover" }),
              /* @__PURE__ */ jsx(AvatarFallback, { children: reply.user.name.charAt(0) })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-semibold", children: reply.user.name }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-xs", children: format(new Date(reply.created_at), "MMM d, yyyy h:mm a") })
            ] })
          ] }),
          reply.user_id === props.auth.user.id && /* @__PURE__ */ jsxs(DropdownMenu, { children: [
            /* @__PURE__ */ jsx(DropdownMenuTrigger, { children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "icon", className: "size-8", children: /* @__PURE__ */ jsx(EllipsisVertical, {}) }) }),
            /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", children: [
              /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsx(
                ForumReply,
                {
                  url,
                  forum,
                  reply,
                  user: props.auth.user,
                  actionComponent: /* @__PURE__ */ jsxs(Button, { size: "sm", variant: "ghost", className: "w-full cursor-pointer justify-start px-2", children: [
                    /* @__PURE__ */ jsx(SquarePen, { className: "h-4 w-4" }),
                    /* @__PURE__ */ jsx("span", { children: button.edit })
                  ] })
                }
              ) }),
              /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsx(
                DeleteModal,
                {
                  routePath: route("course-forum-replies.destroy", reply.id),
                  actionComponent: /* @__PURE__ */ jsxs(Button, { size: "sm", variant: "ghost", className: "w-full cursor-pointer justify-start px-2", children: [
                    /* @__PURE__ */ jsx(Trash, { className: "h-4 w-4" }),
                    /* @__PURE__ */ jsx("span", { children: "Delete" })
                  ] })
                }
              ) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(TiptapRenderer, { children: reply.description })
      ] }, reply.id)) })
    ] }, forum.id))
  ] });
};
export {
  Forum as default
};
