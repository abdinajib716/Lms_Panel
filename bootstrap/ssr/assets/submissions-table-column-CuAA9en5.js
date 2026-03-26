import { jsx, jsxs } from "react/jsx-runtime";
import { B as Badge } from "./badge-B4crNM73.js";
import { format } from "date-fns";
import GradeSubmissionDialog from "./grade-submission-dialog-BhpH7r-2.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "./button-jZyzwgdo.js";
import "react";
import "./dialog-DD5SXV81.js";
import "@radix-ui/react-dialog";
import "lucide-react";
import "./scroll-area-DPHRDnwL.js";
import "@radix-ui/react-scroll-area";
import "./assignment-grade-form-Dr4nrhG3.js";
import "./input-error-CEW4jhey.js";
import "./loading-button-C4Hk_jCd.js";
import "./input-C6-Ta46A.js";
import "./label-Dd_w2I6M.js";
import "@radix-ui/react-label";
import "./select-BxPdBi6V.js";
import "@radix-ui/react-select";
import "./textarea-DctRxpgE.js";
import "@inertiajs/react";
const SubmissionsTableColumn = (translate) => {
  const { table } = translate;
  return [
    {
      accessorKey: "student",
      header: "Student Name",
      cell: ({ row }) => {
        const student = row.original.student;
        return /* @__PURE__ */ jsxs("div", { className: "py-1", children: [
          /* @__PURE__ */ jsx("p", { className: "font-medium", children: (student == null ? void 0 : student.name) || "N/A" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-xs", children: (student == null ? void 0 : student.email) || "" })
        ] });
      }
    },
    {
      accessorKey: "is_late",
      header: () => /* @__PURE__ */ jsx("div", { className: "text-center", children: "Submission" }),
      cell: ({ row }) => {
        const isLate = row.getValue("is_late");
        return /* @__PURE__ */ jsx("div", { className: "py-1 text-center", children: /* @__PURE__ */ jsx(Badge, { variant: isLate ? "destructive" : "default", children: isLate ? "Late Submission" : "On Time" }) });
      }
    },
    // {
    //    accessorKey: 'attachment_path',
    //    header: 'Submission',
    //    cell: ({ row }) => {
    //       const submission = row.original;
    //       return (
    //          <div className="py-1">
    //             {submission.attachment_type === 'url' ? (
    //                <a
    //                   target="_blank"
    //                   rel="noopener noreferrer"
    //                   href={submission.attachment_path}
    //                   className="text-primary flex items-center gap-1 text-sm hover:underline"
    //                >
    //                   <ExternalLink className="h-3 w-3" />
    //                   View URL
    //                </a>
    //             ) : (
    //                <a href={submission.attachment_path} download className="text-primary flex items-center gap-1 text-sm hover:underline">
    //                   <FileText className="h-3 w-3" />
    //                   Download File
    //                </a>
    //             )}
    //          </div>
    //       );
    //    },
    // },
    {
      accessorKey: "submitted_at",
      header: "Submitted At",
      cell: ({ row }) => {
        const date = row.getValue("submitted_at");
        return /* @__PURE__ */ jsxs("div", { className: "py-1 text-sm", children: [
          /* @__PURE__ */ jsx("p", { children: format(new Date(date), "MMM dd, yyyy") }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-xs", children: format(new Date(date), "hh:mm a") })
        ] });
      }
    },
    {
      accessorKey: "status",
      header: () => /* @__PURE__ */ jsx("div", { className: "text-center", children: "Status" }),
      cell: ({ row }) => {
        const status = row.getValue("status");
        const isLate = row.original.is_late;
        const getVariant = () => {
          if (status === "graded") return "default";
          if (isLate) return "destructive";
          return "secondary";
        };
        const getLabel = () => {
          if (status === "graded") return "Graded";
          if (isLate) return "Late";
          return "Pending";
        };
        return /* @__PURE__ */ jsx("div", { className: "py-1 text-center", children: /* @__PURE__ */ jsx(Badge, { variant: getVariant(), children: getLabel() }) });
      }
    },
    {
      accessorKey: "marks_obtained",
      header: () => /* @__PURE__ */ jsx("div", { className: "text-center", children: "Marks" }),
      cell: ({ row }) => {
        var _a, _b, _c;
        const marks = row.getValue("marks_obtained");
        const submission = row.original;
        const isGraded = submission.status === "graded";
        const isLate = submission.is_late;
        const totalMarks = isLate ? ((_a = submission.assignment) == null ? void 0 : _a.late_total_mark) || 0 : ((_b = submission.assignment) == null ? void 0 : _b.total_mark) || 0;
        return /* @__PURE__ */ jsx("div", { className: "py-1 text-center", children: isGraded ? /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("p", { className: "font-semibold", children: [
            marks,
            " / ",
            totalMarks
          ] }),
          isLate && /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground text-xs", children: [
            "(Late: Max ",
            (_c = submission.assignment) == null ? void 0 : _c.late_total_mark,
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
      id: "actions",
      header: () => /* @__PURE__ */ jsx("div", { className: "text-end", children: table.action }),
      cell: ({ row }) => {
        const submission = row.original;
        return /* @__PURE__ */ jsx("div", { className: "flex justify-end gap-2 py-1", children: /* @__PURE__ */ jsx(GradeSubmissionDialog, { submission }) });
      }
    }
  ];
};
export {
  SubmissionsTableColumn as default
};
