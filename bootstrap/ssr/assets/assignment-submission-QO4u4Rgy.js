import { jsxs, jsx } from "react/jsx-runtime";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { L as LoadingButton } from "./loading-button-C4Hk_jCd.js";
import { T as TiptapEditor } from "./Editor-iiR11EW9.js";
import { A as Alert, a as AlertTitle, b as AlertDescription } from "./alert-BK2pCJOe.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Card, a as CardHeader, c as CardTitle, d as CardDescription, b as CardContent } from "./card-D8SB2yrw.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { S as Separator } from "./separator-R7EO2G8T.js";
import { useForm } from "@inertiajs/react";
import { Calendar, FileText, Clock, AlertCircle, Upload, XCircle, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
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
import "class-variance-authority";
import "@radix-ui/react-slot";
import "@radix-ui/react-label";
import "@radix-ui/react-separator";
const AssignmentSubmission = ({ assignment, submissions = [] }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const latestSubmission = submissions.length > 0 ? submissions[0] : null;
  const { data, setData, post, reset, errors, processing } = useForm({
    course_assignment_id: assignment.id,
    submission_text: "",
    attachment: null
  });
  const handleFileChange = (e) => {
    var _a;
    const file = ((_a = e.target.files) == null ? void 0 : _a[0]) || null;
    setSelectedFile(file);
    setData("attachment", file);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    post("/dashboard/assignment/submission", {
      onSuccess: () => {
        reset();
        setSelectedFile(null);
      }
    });
  };
  const isDeadlinePassed = assignment.deadline ? new Date(assignment.deadline) < /* @__PURE__ */ new Date() : false;
  const isLateDeadlinePassed = assignment.late_deadline ? new Date(assignment.late_deadline) < /* @__PURE__ */ new Date() : false;
  const canSubmit = !isDeadlinePassed || assignment.late_submission && !isLateDeadlinePassed;
  const remainingAttempts = assignment.retake - submissions.length;
  const getStatusBadge = (status) => {
    switch (status) {
      case "graded":
        return /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3" }),
          "Graded"
        ] });
      case "pending":
        return /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-700", children: [
          /* @__PURE__ */ jsx(Clock, { className: "h-3 w-3" }),
          "Pending"
        ] });
      case "late":
        return /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 rounded-full bg-orange-100 px-2 py-1 text-xs font-medium text-orange-700", children: [
          /* @__PURE__ */ jsx(AlertCircle, { className: "h-3 w-3" }),
          "Late Submission"
        ] });
      default:
        return /* @__PURE__ */ jsx("span", { className: "inline-flex items-center gap-1 rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700", children: status });
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl space-y-6 p-6", children: [
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx(CardTitle, { children: assignment.title }),
        /* @__PURE__ */ jsx(CardDescription, { children: assignment.summary && /* @__PURE__ */ jsx("div", { className: "prose prose-sm mt-2 max-w-none", dangerouslySetInnerHTML: { __html: assignment.summary } }) })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Calendar, { className: "text-muted-foreground h-4 w-4" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: "Deadline" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: assignment.deadline ? new Date(assignment.deadline).toLocaleString() : "No deadline" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(FileText, { className: "text-muted-foreground h-4 w-4" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: "Total Marks" }),
            /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground text-sm", children: [
              assignment.total_mark,
              " (Pass: ",
              assignment.pass_mark,
              ")"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Clock, { className: "text-muted-foreground h-4 w-4" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: "Attempts" }),
            /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground text-sm", children: [
              submissions.length,
              " / ",
              assignment.retake
            ] })
          ] })
        ] }),
        assignment.late_submission && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(AlertCircle, { className: "text-muted-foreground h-4 w-4" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: "Late Deadline" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: assignment.late_deadline ? new Date(assignment.late_deadline).toLocaleString() : "N/A" })
          ] })
        ] })
      ] }) })
    ] }),
    latestSubmission && /* @__PURE__ */ jsxs(Alert, { children: [
      /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsx(AlertTitle, { children: "Latest Submission" }),
      /* @__PURE__ */ jsx(AlertDescription, { children: /* @__PURE__ */ jsxs("div", { className: "mt-2 space-y-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("span", { children: [
            "Status: ",
            getStatusBadge(latestSubmission.status)
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground text-sm", children: [
            "Attempt ",
            latestSubmission.attempt_number,
            " of ",
            assignment.retake
          ] })
        ] }),
        latestSubmission.marks_obtained !== null && /* @__PURE__ */ jsxs("p", { className: "text-sm", children: [
          /* @__PURE__ */ jsx("strong", { children: "Grade:" }),
          " ",
          latestSubmission.marks_obtained,
          " / ",
          assignment.total_mark
        ] }),
        latestSubmission.instructor_feedback && /* @__PURE__ */ jsxs("div", { className: "bg-muted rounded-md p-3", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: "Instructor Feedback:" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: latestSubmission.instructor_feedback })
        ] })
      ] }) })
    ] }),
    canSubmit && remainingAttempts > 0 ? /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx(CardTitle, { children: "Submit Assignment" }),
        /* @__PURE__ */ jsx(CardDescription, { children: isDeadlinePassed && assignment.late_submission ? `Late submission allowed until ${new Date(assignment.late_deadline).toLocaleString()}` : `You have ${remainingAttempts} attempt(s) remaining` })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "submission_text", children: "Your Answer" }),
          /* @__PURE__ */ jsx(
            TiptapEditor,
            {
              ssr: true,
              output: "html",
              placeholder: {
                paragraph: "Type your assignment answer here...",
                imageCaption: "Add caption (optional)"
              },
              contentMinHeight: 200,
              contentMaxHeight: 500,
              initialContent: data.submission_text,
              onContentChange: (value) => setData((prev) => ({
                ...prev,
                submission_text: value
              }))
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.submission_text })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "attachment", children: "Attach File (Optional)" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-2", children: [
            /* @__PURE__ */ jsxs(
              "label",
              {
                htmlFor: "attachment",
                className: "flex cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 px-6 py-8 hover:border-gray-400 hover:bg-gray-100",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-center", children: [
                    /* @__PURE__ */ jsx(Upload, { className: "mx-auto h-12 w-12 text-gray-400" }),
                    /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-600", children: [
                      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Click to upload" }),
                      " or drag and drop"
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500", children: "PDF, DOC, DOCX, TXT, ZIP, JPG, PNG (MAX 10MB)" })
                  ] }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      id: "attachment",
                      type: "file",
                      className: "hidden",
                      onChange: handleFileChange,
                      accept: ".pdf,.doc,.docx,.txt,.zip,.jpg,.jpeg,.png"
                    }
                  )
                ]
              }
            ),
            selectedFile && /* @__PURE__ */ jsxs("div", { className: "bg-muted mt-2 flex items-center justify-between rounded-md p-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-sm", children: selectedFile.name }),
              /* @__PURE__ */ jsx(
                Button,
                {
                  type: "button",
                  variant: "ghost",
                  size: "sm",
                  onClick: () => {
                    setSelectedFile(null);
                    setData("attachment", null);
                  },
                  children: /* @__PURE__ */ jsx(XCircle, { className: "h-4 w-4" })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx(InputError, { message: errors.attachment })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-2 pt-4", children: [
          /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", onClick: () => reset(), children: "Reset" }),
          /* @__PURE__ */ jsx(LoadingButton, { loading: processing, disabled: !data.submission_text && !data.attachment, children: "Submit Assignment" })
        ] })
      ] }) })
    ] }) : /* @__PURE__ */ jsxs(Alert, { variant: "destructive", children: [
      /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsx(AlertTitle, { children: "Cannot Submit" }),
      /* @__PURE__ */ jsx(AlertDescription, { children: remainingAttempts <= 0 ? "You have used all your attempts for this assignment." : "The deadline for this assignment has passed." })
    ] }),
    submissions.length > 0 && /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx(CardTitle, { children: "Submission History" }),
        /* @__PURE__ */ jsx(CardDescription, { children: "View all your previous submissions" })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-4", children: submissions.map((submission, index) => /* @__PURE__ */ jsxs("div", { children: [
        index > 0 && /* @__PURE__ */ jsx(Separator, { className: "my-4" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("p", { className: "font-medium", children: [
                "Attempt ",
                submission.attempt_number
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground text-sm", children: [
                "Submitted: ",
                submission.submitted_at ? new Date(submission.submitted_at).toLocaleString() : "N/A"
              ] })
            ] }),
            getStatusBadge(submission.status)
          ] }),
          submission.attachment_name && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
            /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsx("span", { children: submission.attachment_name })
          ] }),
          submission.marks_obtained !== null && /* @__PURE__ */ jsxs("div", { className: "bg-muted rounded-md p-3", children: [
            /* @__PURE__ */ jsxs("p", { className: "text-sm font-medium", children: [
              "Grade: ",
              submission.marks_obtained,
              " / ",
              assignment.total_mark
            ] }),
            submission.instructor_feedback && /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-1 text-sm", children: submission.instructor_feedback })
          ] })
        ] })
      ] }, submission.id)) }) })
    ] })
  ] });
};
export {
  AssignmentSubmission as default
};
