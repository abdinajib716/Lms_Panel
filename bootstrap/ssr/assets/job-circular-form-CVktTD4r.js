import { jsxs, jsx } from "react/jsx-runtime";
import { C as Combobox } from "./combobox-CtfF3flG.js";
import { D as DateTimePicker } from "./datetime-picker-Bln2jqxu.js";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { S as Switch } from "./switch-Bijz4LyT.js";
import { T as TagInput } from "./tag-input-BplrELmW.js";
import { T as TiptapEditor } from "./Editor-iiR11EW9.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Card, a as CardHeader, c as CardTitle, d as CardDescription, b as CardContent } from "./card-D8SB2yrw.js";
import { I as Input } from "./input-C6-Ta46A.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BxPdBi6V.js";
import { e as generateSlug, f as currencies } from "./utils-BmtPBcb0.js";
import { usePage, useForm, Link } from "@inertiajs/react";
import { FileText, Briefcase, DollarSign, Save } from "lucide-react";
import { useEffect } from "react";
import "cmdk";
import "./popover-BV7JTqNd.js";
import "@radix-ui/react-popover";
import "react-day-picker";
import "./use-lang-44ndmTOc.js";
import "date-fns";
import "@radix-ui/react-switch";
import "@yaireo/tagify";
/* empty css               */
import "clsx";
import "@radix-ui/react-tooltip";
import "react-icons/tb";
import "react-icons/ai";
import "@radix-ui/react-dropdown-menu";
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
import "@radix-ui/react-label";
import "@radix-ui/react-select";
import "tailwind-merge";
const JobCircularForm = ({ jobCircular }) => {
  var _a, _b;
  const { props } = usePage();
  const { jobTypes, workTypes, experienceLevels, statuses, translate } = props;
  const { dashboard, input, button } = translate;
  const { data, setData, post, put, processing, errors } = useForm({
    title: jobCircular ? jobCircular.title : "",
    slug: jobCircular ? jobCircular.slug : "",
    description: jobCircular ? jobCircular.description : "",
    experience_level: jobCircular ? jobCircular.experience_level : "mid",
    location: jobCircular ? jobCircular.location : "",
    salary_min: jobCircular ? (_a = jobCircular.salary_min) == null ? void 0 : _a.toString() : "",
    salary_max: jobCircular ? (_b = jobCircular.salary_max) == null ? void 0 : _b.toString() : "",
    salary_currency: jobCircular ? jobCircular.salary_currency : "",
    salary_negotiable: jobCircular ? jobCircular.salary_negotiable : false,
    application_deadline: jobCircular ? new Date(jobCircular.application_deadline) : /* @__PURE__ */ new Date(),
    contact_email: jobCircular ? jobCircular.contact_email : "",
    skills_required: jobCircular ? jobCircular.skills_required : [""],
    positions_available: jobCircular ? jobCircular.positions_available : 1,
    job_type: jobCircular ? jobCircular.job_type : "full-time",
    work_type: jobCircular ? jobCircular.work_type : "on-site",
    status: jobCircular ? jobCircular.status : "draft"
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (jobCircular) {
      put(route("job-circulars.update", jobCircular.id));
    } else {
      post(route("job-circulars.store"));
    }
  };
  useEffect(() => {
    setData("slug", generateSlug(data.title));
  }, [data.title]);
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { className: "p-4 sm:p-6", children: [
        /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(FileText, { className: "h-5 w-5" }),
          dashboard.basic_information
        ] }),
        /* @__PURE__ */ jsx(CardDescription, { children: dashboard.provide_essential_job_details })
      ] }),
      /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4 p-4 pt-0 sm:p-6 sm:pt-0", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "title", children: input.job_title }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "title",
                value: data.title,
                onChange: (e) => setData("title", e.target.value),
                placeholder: input.job_title_placeholder
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.title })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "slug", children: input.url_slug }),
            /* @__PURE__ */ jsx(Input, { id: "slug", value: data.slug, onChange: (e) => setData("slug", e.target.value), placeholder: input.url_slug_placeholder }),
            /* @__PURE__ */ jsx(InputError, { message: errors.slug })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "description", children: input.job_description }),
          /* @__PURE__ */ jsx(
            TiptapEditor,
            {
              ssr: true,
              output: "html",
              placeholder: {
                paragraph: input.job_description_placeholder,
                imageCaption: input.image_url_placeholder
              },
              contentMinHeight: 256,
              contentMaxHeight: 640,
              initialContent: data.description,
              onContentChange: (value) => setData((prev) => ({
                ...prev,
                description: value
              }))
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.description })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "status", children: input.status }),
            /* @__PURE__ */ jsxs(Select, { value: data.status, onValueChange: (value) => setData("status", value), children: [
              /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsx(SelectContent, { children: Object.entries(statuses).map(([key, label]) => /* @__PURE__ */ jsx(SelectItem, { value: key, children: label }, key)) })
            ] }),
            /* @__PURE__ */ jsx(InputError, { message: errors.status })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "contact_email", children: input.contact_email }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "contact_email",
                type: "email",
                value: data.contact_email,
                onChange: (e) => setData("contact_email", e.target.value),
                placeholder: input.contact_email_placeholder
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.contact_email })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { className: "p-4 sm:p-6", children: [
        /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Briefcase, { className: "h-5 w-5" }),
          dashboard.job_details
        ] }),
        /* @__PURE__ */ jsx(CardDescription, { children: dashboard.job_details_title })
      ] }),
      /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4 p-4 pt-0 sm:p-6 sm:pt-0", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-4 md:grid-cols-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "job_type", children: input.job_type }),
            /* @__PURE__ */ jsxs(
              Select,
              {
                value: data.job_type,
                onValueChange: (value) => setData("job_type", value),
                children: [
                  /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsx(SelectContent, { children: Object.entries(jobTypes).map(([key, label]) => /* @__PURE__ */ jsx(SelectItem, { value: key, children: label }, key)) })
                ]
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.job_type })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "work_type", children: input.work_type }),
            /* @__PURE__ */ jsxs(Select, { value: data.work_type, onValueChange: (value) => setData("work_type", value), children: [
              /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsx(SelectContent, { children: Object.entries(workTypes).map(([key, label]) => /* @__PURE__ */ jsx(SelectItem, { value: key, children: label }, key)) })
            ] }),
            /* @__PURE__ */ jsx(InputError, { message: errors.work_type })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "experience_level", children: input.experience_level }),
            /* @__PURE__ */ jsxs(
              Select,
              {
                value: data.experience_level,
                onValueChange: (value) => setData("experience_level", value),
                children: [
                  /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsx(SelectContent, { children: Object.entries(experienceLevels).map(([key, label]) => /* @__PURE__ */ jsx(SelectItem, { value: key, children: label }, key)) })
                ]
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.experience_level })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "positions_available", children: input.positions_available }),
            /* @__PURE__ */ jsx(
              Input,
              {
                min: "1",
                max: "100",
                type: "number",
                value: data.positions_available,
                onChange: (e) => setData("positions_available", parseInt(e.target.value) || 1)
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.positions_available })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "location", children: input.location }),
            /* @__PURE__ */ jsx(
              Input,
              {
                type: "text",
                value: data.location,
                onChange: (e) => setData("location", e.target.value),
                placeholder: input.location_placeholder
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.location })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "application_deadline", children: input.application_deadline }),
            /* @__PURE__ */ jsx(DateTimePicker, { date: data.application_deadline, setDate: (date) => setData("application_deadline", date) }),
            /* @__PURE__ */ jsx(InputError, { message: errors.application_deadline })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "skills_required", children: input.skills_required }),
          /* @__PURE__ */ jsx(
            TagInput,
            {
              defaultTags: data.skills_required,
              placeholder: input.skills_tag_placeholder,
              onChange: (values) => setData("skills_required", values)
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.skills_required })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { className: "p-4 sm:p-6", children: [
        /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(DollarSign, { className: "h-5 w-5" }),
          dashboard.salary_information
        ] }),
        /* @__PURE__ */ jsx(CardDescription, { children: dashboard.salary_information_title })
      ] }),
      /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4 p-4 pt-0 sm:p-6 sm:pt-0", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(
            Switch,
            {
              id: "salary_negotiable",
              checked: data.salary_negotiable,
              onCheckedChange: (checked) => setData("salary_negotiable", checked)
            }
          ),
          /* @__PURE__ */ jsx(Label, { htmlFor: "salary_negotiable", children: input.salary_is_negotiable })
        ] }),
        !data.salary_negotiable && /* @__PURE__ */ jsxs("div", { className: "grid gap-4 md:grid-cols-3", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "salary_currency", children: input.currency }),
            /* @__PURE__ */ jsx(
              Combobox,
              {
                data: currencies,
                placeholder: input.currency_placeholder,
                onSelect: (selected) => setData("salary_currency", selected.value)
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.salary_currency })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "salary_min", children: input.minimum_salary }),
            /* @__PURE__ */ jsx(
              Input,
              {
                min: "0",
                type: "number",
                value: data.salary_min,
                onChange: (e) => setData("salary_min", e.target.value),
                placeholder: input.minimum_salary_placeholder
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.salary_min })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "salary_max", children: input.maximum_salary }),
            /* @__PURE__ */ jsx(
              Input,
              {
                min: "0",
                type: "number",
                value: data.salary_max,
                onChange: (e) => setData("salary_max", e.target.value),
                placeholder: input.maximum_salary_placeholder
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.salary_max })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-4", children: [
      /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", asChild: true, children: /* @__PURE__ */ jsx(Link, { href: route("job-circulars.index"), children: button.cancel }) }),
      /* @__PURE__ */ jsxs(Button, { type: "submit", disabled: processing, children: [
        /* @__PURE__ */ jsx(Save, { className: "mr-2 h-4 w-4" }),
        jobCircular ? button.update : button.create
      ] })
    ] })
  ] });
};
export {
  JobCircularForm as default
};
