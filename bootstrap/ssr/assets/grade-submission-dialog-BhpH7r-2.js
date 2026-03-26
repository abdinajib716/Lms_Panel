import { jsxs, jsx } from "react/jsx-runtime";
import { B as Badge } from "./badge-B4crNM73.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { D as Dialog, a as DialogTrigger, b as DialogContent, c as DialogHeader, d as DialogTitle } from "./dialog-DD5SXV81.js";
import { S as ScrollArea } from "./scroll-area-DPHRDnwL.js";
import { format } from "date-fns";
import { Star, AlertCircle, Calendar, FileText, CheckCircle, Clock, ExternalLink, Download } from "lucide-react";
import { useState } from "react";
import AssignmentGradeForm from "./assignment-grade-form-Dr4nrhG3.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-dialog";
import "@radix-ui/react-scroll-area";
import "./input-error-CEW4jhey.js";
import "./loading-button-C4Hk_jCd.js";
import "./input-C6-Ta46A.js";
import "./label-Dd_w2I6M.js";
import "@radix-ui/react-label";
import "./select-BxPdBi6V.js";
import "@radix-ui/react-select";
import "./textarea-DctRxpgE.js";
import "@inertiajs/react";
const GradeSubmissionDialog = ({ submission }) => {
  var _a, _b, _c, _d, _e;
  const [open, setOpen] = useState(false);
  const isLate = submission.is_late;
  const isGraded = submission.status === "graded";
  const totalMarks = isLate ? ((_a = submission.assignment) == null ? void 0 : _a.late_total_mark) || 0 : ((_b = submission.assignment) == null ? void 0 : _b.total_mark) || 0;
  const formatDate = (dateString) => {
    return format(new Date(dateString), "MMMM dd, yyyy, hh:mm a");
  };
  return /* @__PURE__ */ jsxs(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "secondary", size: "sm", className: "gap-2", children: [
      /* @__PURE__ */ jsx(Star, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsx("span", { children: isGraded ? "Review" : "Grade" })
    ] }) }),
    /* @__PURE__ */ jsx(DialogContent, { className: "max-h-[90vh] max-w-4xl p-0", children: /* @__PURE__ */ jsx(ScrollArea, { className: "max-h-[90vh]", children: /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
      /* @__PURE__ */ jsx(DialogHeader, { className: "mb-6", children: /* @__PURE__ */ jsx(DialogTitle, { className: "text-lg", children: isGraded ? "Review Submission" : "Grade Submission" }) }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        isLate && /* @__PURE__ */ jsxs("div", { className: "bg-destructive/10 mt-2 rounded-lg p-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-destructive flex items-center gap-2 text-sm font-medium", children: [
            /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsx("p", { children: "Late Submission" })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mt-1 text-xs", children: [
            "Maximum marks is considered as ",
            (_c = submission.assignment) == null ? void 0 : _c.late_total_mark,
            " ",
            submission.is_late ? "for late submission" : ""
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 rounded-lg border p-4", children: [
            /* @__PURE__ */ jsx(Calendar, { className: "text-primary h-5 w-5" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Submitted At" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: formatDate(submission.submitted_at) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 rounded-lg border p-4", children: [
            /* @__PURE__ */ jsx(FileText, { className: "text-primary h-5 w-5" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Assignment" }),
              /* @__PURE__ */ jsx("p", { className: "font-medium", children: ((_d = submission.assignment) == null ? void 0 : _d.title) || "N/A" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 rounded-lg border p-4", children: [
            /* @__PURE__ */ jsx(CheckCircle, { className: "text-primary h-5 w-5" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Total Marks" }),
              /* @__PURE__ */ jsxs("p", { className: "font-medium", children: [
                totalMarks,
                isLate && /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground ml-1 text-xs", children: [
                  "(Late: ",
                  (_e = submission.assignment) == null ? void 0 : _e.late_total_mark,
                  ")"
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 rounded-lg border p-4", children: [
            /* @__PURE__ */ jsx(Clock, { className: "text-primary h-5 w-5" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Attempt Number" }),
              /* @__PURE__ */ jsxs(Badge, { variant: "outline", children: [
                "Attempt #",
                submission.attempt_number
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 rounded-lg border p-4", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: "Submission Details" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("p", { className: "mb-2 text-sm font-medium", children: [
              "Submitted ",
              submission.attachment_type === "url" ? "URL" : "File",
              ":"
            ] }),
            submission.attachment_type === "url" ? /* @__PURE__ */ jsxs(
              "a",
              {
                href: submission.attachment_path,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-primary flex items-center gap-2 hover:underline",
                children: [
                  /* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4" }),
                  submission.attachment_path
                ]
              }
            ) : /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", className: "gap-2", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: submission.attachment_path, download: true, children: [
              /* @__PURE__ */ jsx(Download, { className: "h-4 w-4" }),
              "Download Submission File"
            ] }) })
          ] }),
          submission.comment && /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "mb-2 text-sm font-medium", children: "Student Comment:" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground bg-muted rounded-lg p-3 text-sm", children: submission.comment })
          ] })
        ] }),
        /* @__PURE__ */ jsx(AssignmentGradeForm, { isGraded, isLate, totalMarks, submission })
      ] })
    ] }) }) })
  ] });
};
export {
  GradeSubmissionDialog as default
};
