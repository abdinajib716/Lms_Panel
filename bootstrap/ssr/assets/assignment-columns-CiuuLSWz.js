import { jsx, jsxs } from "react/jsx-runtime";
import { B as Badge } from "./badge-B4crNM73.js";
import { format } from "date-fns";
import { AlertCircle, Clock } from "lucide-react";
import AssignmentDialog from "./assignment-dialog-Di2nG0gO.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "./button-jZyzwgdo.js";
import "react";
import "./dialog-DD5SXV81.js";
import "@radix-ui/react-dialog";
import "./tabs-BOXC0x8t.js";
import "@radix-ui/react-tabs";
import "./assignment-details-v4A17tNN.js";
import "./client-renderer-CUBmzaOS.js";
/* empty css               */
import "react-icons/lu";
import "hast-util-to-jsx-runtime";
import "shiki/bundle/full";
import "rehype-parse";
import "rehype-react";
import "unified";
import "unist-util-visit";
import "./assignment-submission-2iL5cT9C.js";
import "./assignment-submission-form-CbF_d9Rg.js";
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
const formatDate = (dateString) => {
  if (!dateString) return "N/A";
  const date = new Date(dateString);
  return format(date, "MMMM dd, yyyy, hh:mm a");
};
const isDeadlinePassed = (deadline) => {
  if (!deadline) return false;
  return /* @__PURE__ */ new Date() > new Date(deadline);
};
const getSubmissionStatus = (assignment) => {
  if (!assignment.submissions || assignment.submissions.length === 0) {
    return { status: "not_submitted", label: "Not Submitted", variant: "secondary" };
  }
  const latestSubmission = assignment.submissions[0];
  if (latestSubmission.status === "graded") {
    return { status: "graded", label: "Graded", variant: "default" };
  } else if (latestSubmission.is_late) {
    return { status: "late", label: "Late Submission", variant: "destructive" };
  } else {
    return { status: "submitted", label: "Submitted", variant: "default" };
  }
};
const AssignmentColumns = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      const assignment = row.original;
      return /* @__PURE__ */ jsxs("div", { className: "space-y-1 py-1", children: [
        /* @__PURE__ */ jsx("p", { className: "font-medium", children: assignment.title }),
        /* @__PURE__ */ jsxs("div", { className: "text-muted-foreground flex items-center gap-4 text-sm", children: [
          /* @__PURE__ */ jsxs("span", { children: [
            "Total Marks: ",
            assignment.total_mark
          ] }),
          /* @__PURE__ */ jsxs("span", { children: [
            "Pass Marks: ",
            assignment.pass_mark
          ] })
        ] })
      ] });
    }
  },
  {
    accessorKey: "deadline",
    header: "Deadline",
    cell: ({ row }) => {
      const assignment = row.original;
      const deadlinePassed = isDeadlinePassed(assignment.deadline);
      return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 py-1", children: [
        deadlinePassed ? /* @__PURE__ */ jsx(AlertCircle, { className: "text-destructive h-4 w-4" }) : /* @__PURE__ */ jsx(Clock, { className: "text-muted-foreground h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: deadlinePassed ? "text-destructive" : "", children: formatDate(assignment.deadline) })
      ] });
    }
  },
  {
    accessorKey: "marks_obtained",
    header: () => /* @__PURE__ */ jsx("div", { className: "text-center", children: "Obtained Marks" }),
    cell: ({ row }) => {
      var _a;
      const assignment = row.original;
      const hasSubmission = assignment.submissions && assignment.submissions.length > 0;
      const latestSubmission = hasSubmission ? assignment.submissions[0] : null;
      const isGraded = (latestSubmission == null ? void 0 : latestSubmission.status) === "graded";
      const isLate = latestSubmission == null ? void 0 : latestSubmission.is_late;
      const totalMarks = isLate ? assignment.late_total_mark || 0 : assignment.total_mark || 0;
      return /* @__PURE__ */ jsx("div", { className: "py-1 text-center", children: isGraded ? /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("p", { className: "font-semibold", children: [
          latestSubmission == null ? void 0 : latestSubmission.marks_obtained,
          " / ",
          totalMarks
        ] }),
        isLate && /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground text-xs", children: [
          "(Late: Max ",
          (_a = latestSubmission == null ? void 0 : latestSubmission.assignment) == null ? void 0 : _a.late_total_mark,
          ")"
        ] })
      ] }) : /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Not Graded" }),
        /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground text-xs", children: [
          "Max: ",
          totalMarks
        ] })
      ] }) });
    }
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const assignment = row.original;
      const submissionStatus = getSubmissionStatus(assignment);
      return /* @__PURE__ */ jsx("div", { className: "py-1", children: /* @__PURE__ */ jsx(Badge, { variant: submissionStatus.variant, children: submissionStatus.label }) });
    }
  },
  {
    id: "actions",
    header: () => /* @__PURE__ */ jsx("div", { className: "text-right", children: "Action" }),
    cell: ({ row }) => {
      const assignment = row.original;
      return /* @__PURE__ */ jsx("div", { className: "flex justify-end py-1", children: /* @__PURE__ */ jsx(AssignmentDialog, { assignment }) });
    }
  }
];
export {
  AssignmentColumns
};
