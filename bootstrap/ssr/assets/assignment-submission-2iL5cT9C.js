import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { B as Badge } from "./badge-B4crNM73.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { format } from "date-fns";
import { CheckCircle, AlertCircle, Clock, Download } from "lucide-react";
import AssignmentSubmissionForm from "./assignment-submission-form-CbF_d9Rg.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "react";
import "./chunked-uploader-input-MwXGR7K4.js";
import "./input-C6-Ta46A.js";
import "axios";
import "sonner";
import "./input-error-CEW4jhey.js";
import "./loading-button-C4Hk_jCd.js";
import "./label-Dd_w2I6M.js";
import "@radix-ui/react-label";
import "./select-BxPdBi6V.js";
import "@radix-ui/react-select";
import "./textarea-DctRxpgE.js";
import "@inertiajs/react";
const AssignmentSubmission = ({ assignment, setDialogOpen }) => {
  const hasSubmission = assignment.submissions && assignment.submissions.length > 0;
  const latestSubmission = hasSubmission ? assignment.submissions[0] : null;
  const isGraded = (latestSubmission == null ? void 0 : latestSubmission.status) === "graded";
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return format(new Date(dateString), "MMMM dd, yyyy, hh:mm a");
  };
  return /* @__PURE__ */ jsx("div", { className: "space-y-6", children: hasSubmission ? /* @__PURE__ */ jsxs("div", { className: "overflow-hidden rounded-lg border", children: [
    /* @__PURE__ */ jsx("div", { className: "bg-primary/10 border-b p-4", children: /* @__PURE__ */ jsx("h3", { className: "flex items-center gap-2 font-semibold", children: isGraded ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-600" }),
      "Graded"
    ] }) : (latestSubmission == null ? void 0 : latestSubmission.is_late) ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(AlertCircle, { className: "text-destructive h-5 w-5" }),
      "Late Submission"
    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(Clock, { className: "h-5 w-5 text-blue-600" }),
      "Under Review"
    ] }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-4 p-6", children: [
      isGraded && /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-2 flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Marks Obtained" }),
          /* @__PURE__ */ jsxs("span", { className: "text-2xl font-bold text-green-600", children: [
            latestSubmission == null ? void 0 : latestSubmission.marks_obtained,
            " / ",
            assignment.total_mark
          ] })
        ] }),
        (latestSubmission == null ? void 0 : latestSubmission.instructor_feedback) && /* @__PURE__ */ jsxs("div", { className: "mt-4 border-t border-green-200 pt-4 dark:border-green-800", children: [
          /* @__PURE__ */ jsx("p", { className: "mb-2 text-sm font-medium", children: "Instructor Feedback:" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: latestSubmission.instructor_feedback })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm", children: [
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Submitted At:" }),
          /* @__PURE__ */ jsx("span", { className: "font-medium", children: formatDate(latestSubmission == null ? void 0 : latestSubmission.submitted_at) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm", children: [
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Attempt Number:" }),
          /* @__PURE__ */ jsxs(Badge, { variant: "secondary", children: [
            "Attempt ",
            latestSubmission == null ? void 0 : latestSubmission.attempt_number
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm", children: [
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Status:" }),
          /* @__PURE__ */ jsx(Badge, { variant: isGraded ? "default" : (latestSubmission == null ? void 0 : latestSubmission.is_late) ? "destructive" : "secondary", children: (latestSubmission == null ? void 0 : latestSubmission.status) === "graded" ? "Graded" : (latestSubmission == null ? void 0 : latestSubmission.is_late) ? "Late Submission" : "Pending" })
        ] })
      ] }),
      (latestSubmission == null ? void 0 : latestSubmission.comment) && /* @__PURE__ */ jsxs("div", { className: "border-t pt-4", children: [
        /* @__PURE__ */ jsx("p", { className: "mb-2 text-sm font-medium", children: "Your Comment:" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground bg-muted rounded-lg p-3 text-sm", children: latestSubmission.comment })
      ] }),
      (latestSubmission == null ? void 0 : latestSubmission.attachment_path) && /* @__PURE__ */ jsxs("div", { className: "border-t pt-4", children: [
        /* @__PURE__ */ jsxs("p", { className: "mb-2 text-sm font-medium", children: [
          "Submitted ",
          latestSubmission.attachment_type === "url" ? "URL" : "File",
          ":"
        ] }),
        latestSubmission.attachment_type === "url" ? /* @__PURE__ */ jsx(
          "a",
          {
            href: latestSubmission.attachment_path,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-primary hover:underline",
            children: latestSubmission.attachment_path
          }
        ) : /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", className: "gap-2", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: `/storage/${latestSubmission.attachment_path}`, download: true, children: [
          /* @__PURE__ */ jsx(Download, { className: "h-4 w-4" }),
          "Download File"
        ] }) })
      ] })
    ] })
  ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-secondary-lighter rounded-lg p-4", children: [
      /* @__PURE__ */ jsx("h3", { className: "mb-2 font-semibold", children: "Submission Guidelines" }),
      /* @__PURE__ */ jsxs("ul", { className: "text-muted-foreground list-inside list-disc space-y-2 text-sm", children: [
        /* @__PURE__ */ jsx("li", { children: "Follow the instructions carefully." }),
        /* @__PURE__ */ jsx("li", { children: "Submit your assignment by following one of the two methods" }),
        /* @__PURE__ */ jsx("li", { className: "ml-6", children: "○ Upload a file (ZIP, PDF, DOC, etc.)" }),
        /* @__PURE__ */ jsx("li", { className: "ml-6", children: "○ Share a public URL (GitHub, Google Drive, etc.)" }),
        /* @__PURE__ */ jsx("li", { children: "Add any comments or notes in the comment field below." })
      ] })
    ] }),
    /* @__PURE__ */ jsx(AssignmentSubmissionForm, { assignment, setDialogOpen })
  ] }) });
};
export {
  AssignmentSubmission as default
};
