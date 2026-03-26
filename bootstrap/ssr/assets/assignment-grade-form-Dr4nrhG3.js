import { jsxs, jsx } from "react/jsx-runtime";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { L as LoadingButton } from "./loading-button-C4Hk_jCd.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { f as DialogClose } from "./dialog-DD5SXV81.js";
import { I as Input } from "./input-C6-Ta46A.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BxPdBi6V.js";
import { T as Textarea } from "./textarea-DctRxpgE.js";
import { useForm } from "@inertiajs/react";
import { CheckCircle } from "lucide-react";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-dialog";
import "@radix-ui/react-label";
import "@radix-ui/react-select";
const AssignmentGradeForm = ({ isGraded, isLate, totalMarks, submission }) => {
  const { data, setData, post, put, processing, errors } = useForm({
    marks_obtained: submission ? submission.marks_obtained : "",
    instructor_feedback: submission ? submission.instructor_feedback : "",
    status: submission ? submission.status : "pending"
  });
  const handleGradeSubmit = (e) => {
    e.preventDefault();
    if (submission) {
      put(route("assignment.submission.update", submission.id));
    } else {
      post(route("assignment.submission.store"));
    }
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleGradeSubmit, className: "space-y-4 rounded-lg border p-4", children: [
    /* @__PURE__ */ jsxs("h3", { className: "flex items-center gap-2 font-semibold", children: [
      /* @__PURE__ */ jsx(CheckCircle, { className: "text-primary h-5 w-5" }),
      isGraded ? "Update Grade" : "Grade Submission"
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxs(Label, { htmlFor: "marks", children: [
          "Marks Obtained *",
          /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground ml-1 text-xs", children: [
            "(Max: ",
            totalMarks,
            isLate && /* @__PURE__ */ jsx("span", { className: "text-destructive", children: " - Late Submission" }),
            ")"
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "marks",
            type: "number",
            min: "0",
            max: totalMarks,
            step: "0.01",
            placeholder: "Enter marks",
            value: data.marks_obtained,
            onChange: (e) => setData("marks_obtained", e.target.value),
            required: true
          }
        ),
        isLate && data.marks_obtained && parseFloat(data.marks_obtained) > totalMarks && /* @__PURE__ */ jsxs("p", { className: "text-destructive text-xs", children: [
          "Cannot exceed late submission maximum (",
          totalMarks,
          ")"
        ] }),
        /* @__PURE__ */ jsx(InputError, { message: errors.marks_obtained })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "status", children: "Status" }),
        /* @__PURE__ */ jsxs(Select, { value: data.status, onValueChange: (value) => setData("status", value), children: [
          /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }),
          /* @__PURE__ */ jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsx(SelectItem, { value: "pending", children: "Pending" }),
            /* @__PURE__ */ jsx(SelectItem, { value: "graded", children: "Graded" }),
            /* @__PURE__ */ jsx(SelectItem, { value: "resubmitted", children: "Resubmitted" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(InputError, { message: errors.status })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: "feedback", children: "Instructor Feedback (Optional)" }),
      /* @__PURE__ */ jsx(
        Textarea,
        {
          id: "feedback",
          placeholder: "Provide feedback to the student...",
          value: data.instructor_feedback || "",
          onChange: (e) => setData("instructor_feedback", e.target.value),
          rows: 4
        }
      ),
      /* @__PURE__ */ jsx(InputError, { message: errors.instructor_feedback })
    ] }),
    data.status === "graded" && (submission == null ? void 0 : submission.grader) && /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-green-200 bg-green-50 p-3 dark:border-green-800 dark:bg-green-950", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-sm", children: [
        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Previously graded:" }),
        " ",
        submission.marks_obtained,
        " / ",
        totalMarks
      ] }),
      submission.instructor_feedback && /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mt-1 text-sm", children: [
        "Previous feedback: ",
        submission.instructor_feedback
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-3 pt-4", children: [
      /* @__PURE__ */ jsx(DialogClose, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: "Cancel" }) }),
      /* @__PURE__ */ jsx(LoadingButton, { type: "submit", className: "gap-2", loading: processing, disabled: processing || !data.marks_obtained, children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4" }),
        isGraded ? "Update Grade" : "Submit Grade"
      ] }) })
    ] })
  ] });
};
export {
  AssignmentGradeForm as default
};
