import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { T as TiptapRenderer } from "./client-renderer-CUBmzaOS.js";
import { format } from "date-fns";
import { Calendar, FileText, CheckCircle, Clock, AlertCircle } from "lucide-react";
/* empty css               */
import "react";
import "react-icons/lu";
import "hast-util-to-jsx-runtime";
import "shiki/bundle/full";
import "rehype-parse";
import "rehype-react";
import "unified";
import "unist-util-visit";
const AssignmentDetails = ({ assignment, deadlinePassed }) => {
  const formatDate = (date) => format(new Date(date), "MMM d, yyyy");
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 rounded-lg border p-4", children: [
        /* @__PURE__ */ jsx(Calendar, { className: "text-primary h-5 w-5" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Deadline" }),
          /* @__PURE__ */ jsx("p", { className: "font-medium", children: formatDate(assignment.deadline) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 rounded-lg border p-4", children: [
        /* @__PURE__ */ jsx(FileText, { className: "text-primary h-5 w-5" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Total Marks" }),
          /* @__PURE__ */ jsx("p", { className: "font-medium", children: assignment.total_mark })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 rounded-lg border p-4", children: [
        /* @__PURE__ */ jsx(CheckCircle, { className: "text-primary h-5 w-5" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Pass Marks" }),
          /* @__PURE__ */ jsx("p", { className: "font-medium", children: assignment.pass_mark })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 rounded-lg border p-4", children: [
        /* @__PURE__ */ jsx(Clock, { className: "text-primary h-5 w-5" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Retake Allowed" }),
          /* @__PURE__ */ jsxs("p", { className: "font-medium", children: [
            assignment.retake,
            " ",
            assignment.retake > 1 ? "times" : "time"
          ] })
        ] })
      ] })
    ] }),
    deadlinePassed && /* @__PURE__ */ jsxs("div", { className: "bg-destructive/10 border-destructive/20 rounded-lg border p-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-destructive flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(AlertCircle, { className: "h-5 w-5" }),
        /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Deadline expired" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-1 text-sm", children: assignment.late_submission ? `Late submission is allowed until ${formatDate(assignment.late_deadline || "")} with ${assignment.late_total_mark} marks.` : "Late submission is not allowed for this assignment." })
    ] }),
    assignment.summary && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold", children: "OVERVIEW" }),
      /* @__PURE__ */ jsx(TiptapRenderer, { children: assignment.summary })
    ] })
  ] });
};
export {
  AssignmentDetails as default
};
