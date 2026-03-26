import { jsxs, jsx } from "react/jsx-runtime";
import { C as ChunkedUploaderInput } from "./chunked-uploader-input-MwXGR7K4.js";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { L as LoadingButton } from "./loading-button-C4Hk_jCd.js";
import { I as Input } from "./input-C6-Ta46A.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BxPdBi6V.js";
import { g as getFileMetadata } from "./file-metadata-CvVo69cP.js";
import { o as onHandleChange } from "./inertia-BtwbgBI3.js";
import { usePage, useForm } from "@inertiajs/react";
import { useState, useEffect } from "react";
import "./button-jZyzwgdo.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "axios";
import "lucide-react";
import "sonner";
import "@radix-ui/react-label";
import "@radix-ui/react-select";
const ResourceForm = ({ lesson, resource, isSubmit, setIsSubmit, setIsOpen }) => {
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const { props } = usePage();
  const { translate } = props;
  const { input, button } = translate;
  const { data, setData, post, put, reset, processing, errors, clearErrors } = useForm({
    title: resource ? resource.title : "",
    type: resource ? resource.type : "document",
    resource: resource ? resource.resource : "",
    resource_url: null,
    section_lesson_id: lesson.id
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.type === "link") {
      submitForm();
      return;
    }
    setIsSubmit(true);
  };
  const submitForm = () => {
    clearErrors();
    if (resource) {
      put(route("resources.update", resource.id), {
        preserveScroll: true,
        onSuccess: () => {
          reset();
          setIsSubmit(false);
          setIsOpen(true);
        }
      });
    } else {
      post(route("resources.store"), {
        preserveScroll: true,
        onSuccess: () => {
          reset();
          setIsSubmit(false);
          setIsOpen(true);
        }
      });
    }
  };
  useEffect(() => {
    if (data.resource_url && isFileUploaded) {
      submitForm();
      reset("resource_url");
      setIsFileUploaded(false);
    }
  }, [data.resource_url]);
  const resourceTypes = [
    { label: "Document", value: "document" },
    { label: "Image File", value: "image" },
    { label: "Video File", value: "video" },
    { label: "Zip/Archive", value: "zip" },
    { label: "External Link", value: "link" }
  ];
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { children: input.title }),
      /* @__PURE__ */ jsx(Input, { required: true, name: "title", value: data.title, placeholder: input.title, onChange: (e) => onHandleChange(e, setData) }),
      /* @__PURE__ */ jsx(InputError, { message: errors.title })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { children: "Resource Type" }),
      /* @__PURE__ */ jsxs(Select, { required: true, name: "type", value: data.type, onValueChange: (type) => setData("type", type), children: [
        /* @__PURE__ */ jsx(SelectTrigger, { className: "w-full", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: input.select }) }),
        /* @__PURE__ */ jsx(SelectContent, { children: resourceTypes.map((type) => /* @__PURE__ */ jsx(SelectItem, { value: type.value, children: type.label }, type.value)) })
      ] })
    ] }),
    data.type === "link" ? /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { children: "Resource" }),
      /* @__PURE__ */ jsx(
        Input,
        {
          required: true,
          type: "url",
          name: "resource",
          value: data.resource,
          placeholder: input.url,
          onChange: (e) => onHandleChange(e, setData)
        }
      ),
      /* @__PURE__ */ jsx(InputError, { message: errors.resource })
    ] }) : /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { children: "Resource" }),
      /* @__PURE__ */ jsx(
        ChunkedUploaderInput,
        {
          isSubmit,
          courseId: lesson.course_id,
          sectionId: lesson.course_section_id,
          filetype: data.type,
          delayUpload: true,
          onFileSelected: (file) => {
            getFileMetadata(file).then((metadata) => {
              setData("title", metadata.name);
            });
          },
          onFileUploaded: (fileData) => {
            setIsFileUploaded(true);
            setData("resource_url", fileData.file_url);
          },
          onError: (errors2) => {
            setIsSubmit(false);
          },
          onCancelUpload: () => {
            setIsSubmit(false);
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsx(LoadingButton, { loading: processing || isSubmit, disabled: processing || isSubmit, children: resource ? "Update" : button.submit })
  ] });
};
export {
  ResourceForm as default
};
