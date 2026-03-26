import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { B as Button } from "./button-jZyzwgdo.js";
import { D as Dialog, a as DialogTrigger, b as DialogContent, c as DialogHeader } from "./dialog-DD5SXV81.js";
import { c as Tabs, T as TabsList, a as TabsTrigger, b as TabsContent } from "./tabs-BOXC0x8t.js";
import { CheckCircle } from "lucide-react";
import { useState } from "react";
import AssignmentDetails from "./assignment-details-v4A17tNN.js";
import AssignmentSubmission from "./assignment-submission-2iL5cT9C.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-dialog";
import "@radix-ui/react-tabs";
import "./client-renderer-CUBmzaOS.js";
/* empty css               */
import "react-icons/lu";
import "hast-util-to-jsx-runtime";
import "shiki/bundle/full";
import "rehype-parse";
import "rehype-react";
import "unified";
import "unist-util-visit";
import "date-fns";
import "./badge-B4crNM73.js";
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
const AssignmentDialog = ({ assignment }) => {
  const [open, setOpen] = useState(false);
  const hasSubmission = assignment.submissions && assignment.submissions.length > 0;
  const isDeadlinePassed = (deadline) => {
    if (!deadline) return false;
    return /* @__PURE__ */ new Date() > new Date(deadline);
  };
  const deadlinePassed = isDeadlinePassed(assignment.deadline);
  return /* @__PURE__ */ jsxs(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", className: "h-8 gap-2", children: hasSubmission ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsx("span", { children: "Check" })
    ] }) : /* @__PURE__ */ jsx("span", { children: "Submit" }) }) }),
    /* @__PURE__ */ jsx(DialogContent, { className: "max-h-[90vh] max-w-4xl p-0", children: /* @__PURE__ */ jsxs(Tabs, { defaultValue: "details", className: "w-full", children: [
      /* @__PURE__ */ jsx(DialogHeader, { className: "p-6 pb-0", children: /* @__PURE__ */ jsxs(TabsList, { className: "grid h-11 w-full grid-cols-2", children: [
        /* @__PURE__ */ jsx(TabsTrigger, { value: "details", className: "h-9", children: "Assignment Details" }),
        /* @__PURE__ */ jsx(TabsTrigger, { value: deadlinePassed ? "" : "submit", className: "h-9", disabled: deadlinePassed, children: "Assignment Submission" })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "max-h-[calc(90vh-92px)] overflow-y-auto p-6", children: [
        /* @__PURE__ */ jsx(TabsContent, { value: "details", className: "m-0", children: /* @__PURE__ */ jsx(AssignmentDetails, { assignment, deadlinePassed }) }),
        !deadlinePassed && /* @__PURE__ */ jsx(TabsContent, { value: "submit", className: "m-0", children: /* @__PURE__ */ jsx(AssignmentSubmission, { assignment, setDialogOpen: setOpen }) })
      ] })
    ] }) })
  ] });
};
export {
  AssignmentDialog as default
};
