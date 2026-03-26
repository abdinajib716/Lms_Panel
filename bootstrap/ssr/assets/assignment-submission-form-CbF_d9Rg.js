import { jsxs, jsx } from "react/jsx-runtime";
import { C as ChunkedUploaderInput } from "./chunked-uploader-input-MwXGR7K4.js";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { L as LoadingButton } from "./loading-button-C4Hk_jCd.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { I as Input } from "./input-C6-Ta46A.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BxPdBi6V.js";
import { T as Textarea } from "./textarea-DctRxpgE.js";
import { useForm } from "@inertiajs/react";
import { useState, useEffect } from "react";
import "axios";
import "lucide-react";
import "sonner";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-label";
import "@radix-ui/react-select";
const AssignmentSubmissionForm = ({ assignment, setDialogOpen }) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const { data, setData, post, processing, errors, reset, clearErrors } = useForm({
    course_assignment_id: assignment.id,
    attachment_type: "url",
    attachment_path: "",
    comment: ""
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.attachment_type === "url") {
      submitForm();
      return;
    }
    setIsSubmit(true);
  };
  const submitForm = () => {
    clearErrors();
    post(route("assignment.submission.store"), {
      preserveScroll: true,
      onSuccess: () => {
        reset();
        setIsSubmit(false);
        setDialogOpen(false);
      },
      onError: () => {
        setIsSubmit(false);
      }
    });
  };
  useEffect(() => {
    if (data.attachment_path && isFileUploaded) {
      submitForm();
      setIsFileUploaded(false);
    }
  }, [data.attachment_path]);
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsx(Label, { children: "Submission Type *" }),
      /* @__PURE__ */ jsxs(Select, { required: true, name: "attachment_type", value: data.attachment_type, onValueChange: (type) => setData("attachment_type", type), children: [
        /* @__PURE__ */ jsx(SelectTrigger, { className: "w-full", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select Submission Type" }) }),
        /* @__PURE__ */ jsxs(SelectContent, { children: [
          /* @__PURE__ */ jsx(SelectItem, { value: "url", children: "URL Link" }),
          /* @__PURE__ */ jsx(SelectItem, { value: "file", children: "Upload File" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(InputError, { message: errors.attachment_type })
    ] }),
    data.attachment_type === "url" && /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: "url", children: "URL Link *" }),
      /* @__PURE__ */ jsx(
        Input,
        {
          id: "url",
          type: "url",
          placeholder: "Enter URL here...",
          value: data.attachment_path,
          onChange: (e) => setData("attachment_path", e.target.value),
          required: true
        }
      ),
      /* @__PURE__ */ jsx(InputError, { message: errors.attachment_path }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-xs", children: "Share your GitHub repository, Google Drive, or any public URL" })
    ] }),
    data.attachment_type === "file" && /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: "file", children: "Upload File *" }),
      /* @__PURE__ */ jsx(
        ChunkedUploaderInput,
        {
          isSubmit,
          courseId: assignment.course_id,
          filetype: "document",
          delayUpload: true,
          onFileUploaded: (fileData) => {
            setIsFileUploaded(true);
            setData("attachment_path", fileData.file_url);
          },
          onError: (errors2) => {
            setIsSubmit(false);
          },
          onCancelUpload: () => {
            setIsSubmit(false);
          }
        }
      ),
      /* @__PURE__ */ jsx(InputError, { message: errors.attachment_path }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-1 text-xs", children: "Formats: .JPEG, .PNG, .DOC, .PDF, .ZIP (Max: 10MB)" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: "comment", children: "Comment (Optional)" }),
      /* @__PURE__ */ jsx(
        Textarea,
        {
          id: "comment",
          placeholder: "Add any notes or comments about your submission...",
          value: data.comment,
          onChange: (e) => setData("comment", e.target.value),
          rows: 4
        }
      ),
      /* @__PURE__ */ jsx(InputError, { message: errors.comment })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-3 pt-3", children: [
      /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", disabled: processing || isSubmit, children: "Cancel" }),
      /* @__PURE__ */ jsx(LoadingButton, { type: "submit", className: "gap-2", loading: processing || isSubmit, children: "Submit Assignment" })
    ] })
  ] });
};
export {
  AssignmentSubmissionForm as default
};
