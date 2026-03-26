import { jsxs, jsx } from "react/jsx-runtime";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { L as LoadingButton } from "./loading-button-C4Hk_jCd.js";
import { T as TiptapEditor } from "./Editor-iiR11EW9.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { D as Dialog, a as DialogTrigger, b as DialogContent, c as DialogHeader, d as DialogTitle, e as DialogFooter, f as DialogClose } from "./dialog-DD5SXV81.js";
import { L as Label } from "./label-Dd_w2I6M.js";
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
const ForumReply = ({ url, user, forum, reply, actionComponent }) => {
  const [open, setOpen] = useState(false);
  const { props } = usePage();
  const { translate } = props;
  const { button, input, frontend } = translate;
  const { data, setData, post, put, errors, processing, reset } = useForm({
    url,
    user_id: user.id,
    course_id: forum.course_id,
    course_forum_id: forum.id,
    course_forum_user_id: forum.user_id,
    description: reply ? reply.description : ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (reply) {
      put(route("course-forum-replies.update", reply.id), {
        onSuccess: () => {
          reset();
          setOpen(false);
        }
      });
    } else {
      post(route("course-forum-replies.store"), {
        onSuccess: () => {
          reset();
          setOpen(false);
        }
      });
    }
  };
  return /* @__PURE__ */ jsxs(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: actionComponent }),
    /* @__PURE__ */ jsxs(DialogContent, { children: [
      /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsxs(DialogTitle, { children: [
        reply ? button.edit : button.add,
        " ",
        frontend.forum_reply
      ] }) }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4 p-0.5", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: input.description }),
          /* @__PURE__ */ jsx(
            TiptapEditor,
            {
              ssr: true,
              output: "html",
              placeholder: {
                paragraph: input.content_placeholder,
                imageCaption: input.image_caption_placeholder
              },
              contentMinHeight: 260,
              contentMaxHeight: 600,
              initialContent: data.description,
              onContentChange: (value) => setData("description", value)
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.description })
        ] }),
        /* @__PURE__ */ jsxs(DialogFooter, { children: [
          /* @__PURE__ */ jsx(LoadingButton, { loading: processing, children: reply ? button.update : button.submit }),
          /* @__PURE__ */ jsx(DialogClose, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: button.cancel }) })
        ] })
      ] })
    ] })
  ] });
};
export {
  ForumReply as default
};
