import { jsxs, jsx } from "react/jsx-runtime";
import { D as DeleteModal } from "./delete-modal-BIvxKwRf.js";
import { A as Avatar, a as AvatarImage, b as AvatarFallback } from "./avatar-Cr_jqfHL.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Card, a as CardHeader, b as CardContent } from "./card-D8SB2yrw.js";
import { T as Textarea } from "./textarea-DctRxpgE.js";
import { c as cn } from "./utils-BmtPBcb0.js";
import { usePage, useForm } from "@inertiajs/react";
import { Send, MessageCircle, Trash2 } from "lucide-react";
import "./dialog-DD5SXV81.js";
import "@radix-ui/react-dialog";
import "react";
import "@radix-ui/react-avatar";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
const BlogComments = () => {
  const { props } = usePage();
  const { auth, blog, translate } = props;
  const { button, frontend, input } = translate;
  const {
    data: commentData,
    setData: setCommentData,
    post: postComment,
    processing: commentProcessing,
    reset: resetComment
  } = useForm({
    content: "",
    blog_id: blog.id
  });
  const {
    data: replyData,
    setData: setReplyData,
    post: postReply,
    processing: replyProcessing,
    reset: resetReply
  } = useForm({
    content: "",
    blog_id: blog.id,
    parent_id: null
  });
  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!commentData.content.trim()) return;
    postComment(route("blogs.comments.store"), {
      preserveScroll: true,
      onSuccess: () => {
        resetComment();
      }
    });
  };
  const handleSubmitReply = (e) => {
    e.preventDefault();
    if (!replyData.content.trim()) return;
    postReply(route("blogs.comments.store"), {
      preserveScroll: true,
      onSuccess: () => {
        resetReply();
      }
    });
  };
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };
  const getUserInitials = (name) => {
    return name.split(" ").map((n) => n.charAt(0)).join("").toUpperCase().slice(0, 2);
  };
  return /* @__PURE__ */ jsxs("div", { className: cn("space-y-6"), children: [
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx("h4", { className: "text-base font-medium", children: frontend.post_a_comment }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmitComment, className: "space-y-4", children: [
        /* @__PURE__ */ jsx(
          Textarea,
          {
            placeholder: input.description,
            value: commentData.content,
            onChange: (e) => setCommentData("content", e.target.value),
            className: "min-h-[100px] resize-none",
            maxLength: 1e3
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground text-sm", children: [
            commentData.content.length,
            "/1000 ",
            frontend.characters
          ] }),
          /* @__PURE__ */ jsxs(Button, { type: "submit", disabled: !commentData.content.trim() || commentProcessing, className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Send, { className: "h-4 w-4" }),
            commentProcessing ? frontend.posting : button.post_comment
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-4", children: blog.comments.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "py-8 text-center", children: [
      /* @__PURE__ */ jsx(MessageCircle, { className: "text-muted-foreground mx-auto mb-2 h-12 w-12" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: frontend.no_comments_yet })
    ] }) : blog.comments.map((comment) => {
      var _a;
      return /* @__PURE__ */ jsx(Card, { className: "overflow-hidden", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-3 flex items-start justify-between", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxs(Avatar, { className: "h-10 w-10", children: [
              /* @__PURE__ */ jsx(AvatarImage, { src: comment.user.photo || "", alt: comment.user.name }),
              /* @__PURE__ */ jsx(AvatarFallback, { children: getUserInitials(comment.user.name) })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-medium", children: comment.user.name }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: formatDate(comment.created_at) })
            ] })
          ] }),
          ((_a = auth == null ? void 0 : auth.user) == null ? void 0 : _a.id) === comment.user.id && /* @__PURE__ */ jsx(
            DeleteModal,
            {
              routePath: route("blogs.comments.destroy", { id: comment.id }),
              actionComponent: /* @__PURE__ */ jsx(Button, { variant: "ghost", className: "bg-destructive/8 hover:bg-destructive/6 h-8 w-8", children: /* @__PURE__ */ jsx(Trash2, { className: "text-destructive h-3 w-3" }) })
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed whitespace-pre-wrap", children: comment.content }) }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsx(Button, { size: "sm", variant: "outline", onClick: () => setReplyData("parent_id", comment.id), className: "text-xs", children: button.reply }) }),
        replyData.parent_id === comment.id && /* @__PURE__ */ jsx("div", { className: "mt-4 space-y-3 border-t pt-4", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmitReply, className: "space-y-3", children: [
          /* @__PURE__ */ jsx(
            Textarea,
            {
              placeholder: input.description,
              value: replyData.content,
              onChange: (e) => setReplyData("content", e.target.value),
              className: "min-h-[80px] resize-none",
              maxLength: 1e3
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground text-xs", children: [
              replyData.content.length,
              "/1000 ",
              frontend.characters
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", size: "sm", onClick: () => resetReply(), children: button.cancel }),
              /* @__PURE__ */ jsx(Button, { type: "submit", size: "sm", disabled: !replyData.content.trim() || replyProcessing, children: replyProcessing ? frontend.replying : button.reply })
            ] })
          ] })
        ] }) }),
        comment.replies && comment.replies.length > 0 && /* @__PURE__ */ jsx("div", { className: "mt-5 space-y-5", children: comment.replies.map((reply) => {
          var _a2;
          return /* @__PURE__ */ jsxs("div", { className: "border-border space-y-2 border-l pl-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxs(Avatar, { className: "h-8 w-8", children: [
                  /* @__PURE__ */ jsx(AvatarImage, { src: reply.user.photo || "", alt: reply.user.name }),
                  /* @__PURE__ */ jsx(AvatarFallback, { className: "text-xs", children: getUserInitials(reply.user.name) })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: reply.user.name }),
                  /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-xs", children: formatDate(reply.created_at) })
                ] })
              ] }),
              ((_a2 = auth == null ? void 0 : auth.user) == null ? void 0 : _a2.id) === reply.user.id && /* @__PURE__ */ jsx(
                DeleteModal,
                {
                  routePath: route("blogs.comments.destroy", { id: reply.id }),
                  actionComponent: /* @__PURE__ */ jsx(Button, { variant: "ghost", className: "bg-destructive/8 hover:bg-destructive/6 h-8 w-8", children: /* @__PURE__ */ jsx(Trash2, { className: "text-destructive h-3 w-3" }) })
                }
              )
            ] }),
            /* @__PURE__ */ jsx("p", { className: "pl-10 text-sm leading-relaxed whitespace-pre-wrap", children: reply.content })
          ] }, reply.id);
        }) })
      ] }) }, comment.id);
    }) })
  ] });
};
export {
  BlogComments as default
};
