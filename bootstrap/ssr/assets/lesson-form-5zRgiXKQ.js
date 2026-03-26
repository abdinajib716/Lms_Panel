import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { C as ChunkedUploaderInput } from "./chunked-uploader-input-MwXGR7K4.js";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { L as LoadingButton } from "./loading-button-C4Hk_jCd.js";
import { T as Tabs } from "./tabs-CPx41tqt.js";
import { T as TiptapEditor } from "./Editor-iiR11EW9.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { D as Dialog, a as DialogTrigger, b as DialogContent, c as DialogHeader, d as DialogTitle, e as DialogFooter, f as DialogClose } from "./dialog-DD5SXV81.js";
import { I as Input } from "./input-C6-Ta46A.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { R as RadioGroup, a as RadioGroupItem } from "./radio-group-sSS5HHUP.js";
import { S as ScrollArea } from "./scroll-area-DPHRDnwL.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BxPdBi6V.js";
import { b as TabsContent, T as TabsList, a as TabsTrigger } from "./tabs-BOXC0x8t.js";
import { T as Textarea } from "./textarea-DctRxpgE.js";
import { g as getFileMetadata } from "./file-metadata-CvVo69cP.js";
import { o as onHandleChange } from "./inertia-BtwbgBI3.js";
import { c as cn } from "./utils-BmtPBcb0.js";
import { usePage, useForm } from "@inertiajs/react";
import { useState, useEffect } from "react";
import "axios";
import "lucide-react";
import "sonner";
/* empty css               */
import "clsx";
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
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-dialog";
import "@radix-ui/react-label";
import "@radix-ui/react-radio-group";
import "@radix-ui/react-scroll-area";
import "@radix-ui/react-select";
import "@radix-ui/react-tabs";
import "tailwind-merge";
const getLessonTypes = (translate) => [
  // { value: 'vimeo', label: 'Vimeo Video', flag: true },
  // { value: 'drive', label: 'Google drive video', flag: true },
  { value: "video", label: translate.dashboard.video_file, flag: false },
  { value: "video_url", label: translate.dashboard.video_url, flag: false },
  { value: "document", label: translate.dashboard.document_file, flag: false },
  { value: "image", label: translate.dashboard.image_file, flag: false },
  { value: "text", label: translate.dashboard.text_content, flag: false },
  { value: "embed", label: translate.dashboard.embed_source, flag: false }
];
const LessonForm = ({ title, handler, lesson, sectionId }) => {
  const [open, setOpen] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [lessonType, setLessonType] = useState("type");
  const [isFileSelected, setIsFileSelected] = useState(false);
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const { props } = usePage();
  const { translate } = props;
  const { dashboard, input, button } = translate;
  const lessonTypes = getLessonTypes(translate);
  const { data, setData, post, put, reset, processing, errors, clearErrors } = useForm({
    title: lesson ? lesson.title : "",
    status: lesson ? lesson.status : "",
    is_free: lesson ? lesson.is_free : 0,
    description: lesson ? lesson.description : "",
    sort: lesson ? lesson.sort : props.lastLessonSort + 1,
    lesson_type: lesson ? lesson.lesson_type : "video",
    lesson_provider: lesson ? lesson.lesson_provider : "",
    lesson_src: lesson ? lesson.lesson_src : "",
    lesson_src_new: null,
    embed_source: lesson ? lesson.embed_source : "",
    duration: lesson ? lesson.duration : "00:00:00",
    summary: lesson ? lesson.summary : "",
    course_id: lesson ? lesson.course_id : props.course.id,
    course_section_id: sectionId
  });
  const isFileUpload = ["video", "document", "image"].includes(data.lesson_type);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isFileUpload && isFileSelected) {
      setIsSubmit(true);
      return;
    }
    submitForm();
  };
  const submitForm = () => {
    clearErrors();
    if (lesson) {
      put(route("lesson.update", { id: lesson.id }), {
        preserveScroll: true,
        onSuccess: () => {
          reset();
          setOpen(false);
          setIsSubmit(false);
        }
      });
    } else {
      post(route("lesson.store"), {
        preserveScroll: true,
        onSuccess: () => {
          reset();
          setOpen(false);
          setIsSubmit(false);
        }
      });
    }
  };
  useEffect(() => {
    if (data.lesson_src_new && isFileUploaded) {
      submitForm();
      reset("lesson_src_new");
      setIsFileUploaded(false);
    }
  }, [data.lesson_src_new]);
  useEffect(() => {
    if (!open) {
      reset();
      setLessonType("type");
    }
  }, [open]);
  const onDurationChange = (e) => {
    const value = e.target.value;
    const formattedTime = value.match(/^([0-2]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/);
    if (formattedTime) {
      setData("duration", value);
    }
  };
  return /* @__PURE__ */ jsxs(Dialog, { open, onOpenChange: () => isSubmit ? setOpen(true) : setOpen((prev) => !prev), children: [
    /* @__PURE__ */ jsx(DialogTrigger, { children: handler }),
    /* @__PURE__ */ jsx(DialogContent, { className: "p-0", children: /* @__PURE__ */ jsxs(ScrollArea, { className: "max-h-[90vh] p-6", children: [
      /* @__PURE__ */ jsx(DialogHeader, { className: "mb-6", children: /* @__PURE__ */ jsx(DialogTitle, { children: title }) }),
      /* @__PURE__ */ jsx("form", { onSubmit: handleSubmit, children: /* @__PURE__ */ jsxs(Tabs, { value: lesson ? "form" : lessonType, onValueChange: setLessonType, children: [
        /* @__PURE__ */ jsx(TabsContent, { value: "type", children: /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx(Label, { className: "font-semibold", children: input.lesson_type }),
          /* @__PURE__ */ jsx(
            RadioGroup,
            {
              value: data.lesson_type,
              onValueChange: (lesson2) => setData("lesson_type", lesson2),
              className: "grid grid-cols-2 gap-3",
              children: lessonTypes.map((type) => /* @__PURE__ */ jsxs(
                Label,
                {
                  className: cn(
                    "flex items-center space-x-2 rounded-lg border p-2",
                    type.flag ? "cursor-not-allowed" : "cursor-pointer"
                  ),
                  children: [
                    /* @__PURE__ */ jsx(RadioGroupItem, { className: "cursor-pointer", value: type.value, disabled: type.flag }),
                    /* @__PURE__ */ jsx("span", { children: type.label })
                  ]
                },
                type.value
              ))
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxs(TabsContent, { value: "form", className: "space-y-4 p-0.5", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs(Label, { children: [
              input.title,
              " *"
            ] }),
            /* @__PURE__ */ jsx(Input, { required: true, name: "title", value: data.title, placeholder: input.title, onChange: (e) => onHandleChange(e, setData) }),
            /* @__PURE__ */ jsx(InputError, { message: errors.title })
          ] }),
          ["video_url"].includes(data.lesson_type) && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "lesson_provider", children: input.video_url_provider }),
              /* @__PURE__ */ jsxs(
                Select,
                {
                  required: true,
                  name: "lesson_provider",
                  value: data.lesson_provider,
                  onValueChange: (provider) => setData("lesson_provider", provider),
                  children: [
                    /* @__PURE__ */ jsx(SelectTrigger, { className: "w-full", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: input.provider_placeholder }) }),
                    /* @__PURE__ */ jsx(SelectContent, { children: /* @__PURE__ */ jsx(SelectItem, { value: "youtube", children: "YouTube" }) })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs(Label, { children: [
                "Video URL",
                /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-500", children: "(Provide the shareable url only)" })
              ] }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  required: true,
                  name: "lesson_src",
                  value: data.lesson_src || "",
                  placeholder: `Type your ${data.lesson_provider} video url`,
                  onChange: (e) => onHandleChange(e, setData)
                }
              ),
              /* @__PURE__ */ jsx(InputError, { message: errors.lesson_src })
            ] })
          ] }),
          ["video", "document", "image"].includes(data.lesson_type) && /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs(Label, { children: [
              input.select,
              " ",
              data.lesson_type
            ] }),
            /* @__PURE__ */ jsx(
              ChunkedUploaderInput,
              {
                isSubmit,
                courseId: data.course_id || "",
                sectionId: data.course_section_id || "",
                filetype: data.lesson_type,
                delayUpload: true,
                onFileSelected: (file) => {
                  setIsFileSelected(true);
                  getFileMetadata(file).then((metadata) => {
                    setData("title", metadata.name);
                    setData("duration", metadata.duration || "00:00:00");
                  });
                },
                onFileUploaded: (fileData) => {
                  setIsFileUploaded(true);
                  setData("lesson_src_new", fileData.file_url);
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
          data.lesson_type === "embed" && /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs(Label, { children: [
              "Embed source",
              /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-500", children: "(Provide the source url only)" })
            ] }),
            /* @__PURE__ */ jsx(
              Textarea,
              {
                required: true,
                name: "embed_source",
                placeholder: input.embed_source_placeholder,
                value: data.embed_source,
                rows: 4,
                onChange: (e) => onHandleChange(e, setData)
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.embed_source })
          ] }),
          data.lesson_type === "text" && /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { children: input.your_text }),
            /* @__PURE__ */ jsx(
              TiptapEditor,
              {
                ssr: true,
                output: "html",
                placeholder: {
                  paragraph: "Type your content here...",
                  imageCaption: "Type caption for image (optional)"
                },
                contentMinHeight: 256,
                contentMaxHeight: 640,
                initialContent: data.lesson_src,
                onContentChange: (value) => setData((prev) => ({
                  ...prev,
                  lesson_src: value
                }))
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.lesson_src })
          ] }),
          ["video_url", "video"].includes(data.lesson_type) && /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "duration", children: input.duration }),
            /* @__PURE__ */ jsx(
              Input,
              {
                required: true,
                maxLength: 8,
                type: "text",
                name: "duration",
                value: data.duration,
                placeholder: "00:00:00",
                onChange: onDurationChange,
                readOnly: data.lesson_type === "video"
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.duration })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "summary", children: "Summary" }),
            /* @__PURE__ */ jsx(
              TiptapEditor,
              {
                ssr: true,
                output: "html",
                placeholder: {
                  paragraph: "Type your content here...",
                  imageCaption: "Type caption for image (optional)"
                },
                contentMinHeight: 256,
                contentMaxHeight: 640,
                initialContent: data.summary,
                onContentChange: (value) => setData("summary", value)
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.summary })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { children: "Lesson type" }),
            /* @__PURE__ */ jsx(
              RadioGroup,
              {
                required: true,
                defaultValue: data.is_free ? "free" : "paid",
                className: "flex items-center space-x-4 pt-2 pb-1",
                onValueChange: (value) => setData("is_free", value === "free" ? 1 : 0),
                children: props.prices.map((price) => /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsx(RadioGroupItem, { className: "cursor-pointer", id: price, value: price }),
                  /* @__PURE__ */ jsx(Label, { htmlFor: price, className: "capitalize", children: price })
                ] }, price))
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.is_free })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(DialogFooter, { className: "w-full justify-between space-x-2 pt-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex w-full items-center gap-4", children: [
            /* @__PURE__ */ jsx(DialogClose, { asChild: true, children: /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", children: button.close }) }),
            !lesson && /* @__PURE__ */ jsxs(TabsList, { className: "p-0", children: [
              /* @__PURE__ */ jsx(TabsTrigger, { asChild: true, value: "form", className: cn(lessonType === "form" ? "hidden" : "block"), children: /* @__PURE__ */ jsx(Button, { children: button.next }) }),
              /* @__PURE__ */ jsx(TabsTrigger, { asChild: true, value: "type", className: cn(lessonType === "type" ? "hidden" : "block"), children: /* @__PURE__ */ jsx(Button, { children: button.back }) })
            ] })
          ] }),
          (lesson || lessonType === "form") && /* @__PURE__ */ jsx(LoadingButton, { loading: processing || isSubmit, disabled: processing || isSubmit, children: isSubmit ? "Uploading..." : button.submit })
        ] })
      ] }) })
    ] }) })
  ] });
};
export {
  LessonForm as default
};
