import { jsx, jsxs } from "react/jsx-runtime";
import { C as Combobox } from "./combobox-CtfF3flG.js";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { L as LoadingButton } from "./loading-button-C4Hk_jCd.js";
import { C as Card } from "./card-D8SB2yrw.js";
import { I as Input } from "./input-C6-Ta46A.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BxPdBi6V.js";
import { T as Textarea } from "./textarea-DctRxpgE.js";
import { f as currencies } from "./utils-BmtPBcb0.js";
import { o as onHandleChange } from "./inertia-BtwbgBI3.js";
import { usePage, useForm } from "@inertiajs/react";
import "./button-jZyzwgdo.js";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "cmdk";
import "lucide-react";
import "./popover-BV7JTqNd.js";
import "@radix-ui/react-popover";
import "@radix-ui/react-label";
import "@radix-ui/react-select";
import "clsx";
import "tailwind-merge";
const Website = () => {
  const { props } = usePage();
  const { translate } = props;
  const { input, settings } = translate;
  const mediaFields = {
    new_logo_dark: null,
    new_logo_light: null,
    new_favicon: null,
    new_banner: null
  };
  const { data, setData, post, errors, processing } = useForm({
    ...props.system.fields,
    ...mediaFields
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("settings.system.update", { id: props.system.id }));
  };
  return /* @__PURE__ */ jsx(Card, { className: "p-4 sm:p-6", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "border-b pb-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-4 text-xl font-semibold", children: settings.website_information }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: input.website_name }),
          /* @__PURE__ */ jsx(
            Input,
            {
              name: "name",
              value: data.name || "",
              onChange: (e) => onHandleChange(e, setData),
              placeholder: input.website_name_placeholder
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.name })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: input.website_title }),
          /* @__PURE__ */ jsx(
            Input,
            {
              name: "title",
              value: data.title || "",
              onChange: (e) => onHandleChange(e, setData),
              placeholder: input.website_title_placeholder
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.title })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
          /* @__PURE__ */ jsx(Label, { children: input.keywords }),
          /* @__PURE__ */ jsx(
            Input,
            {
              name: "keywords",
              value: data.keywords || "",
              onChange: (e) => onHandleChange(e, setData),
              placeholder: input.keywords_placeholder
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.keywords })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
          /* @__PURE__ */ jsx(Label, { children: input.description }),
          /* @__PURE__ */ jsx(
            Textarea,
            {
              rows: 4,
              name: "description",
              value: data.description || "",
              onChange: (e) => onHandleChange(e, setData),
              placeholder: input.description_placeholder
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.description })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: input.author }),
          /* @__PURE__ */ jsx(
            Input,
            {
              name: "author",
              value: data.author || "",
              onChange: (e) => onHandleChange(e, setData),
              placeholder: input.author_name_placeholder
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.author })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: input.slogan }),
          /* @__PURE__ */ jsx(Input, { name: "slogan", value: data.slogan || "", onChange: (e) => onHandleChange(e, setData), placeholder: input.slogan }),
          /* @__PURE__ */ jsx(InputError, { message: errors.slogan })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "border-b pb-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-4 text-xl font-semibold", children: "Contact Information" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "System Email *" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              type: "email",
              name: "email",
              value: data.email || "",
              onChange: (e) => onHandleChange(e, setData),
              placeholder: "Enter System Email"
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.email })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Phone" }),
          /* @__PURE__ */ jsx(Input, { name: "phone", value: data.phone || "", onChange: (e) => onHandleChange(e, setData), placeholder: "Enter Phone Number" }),
          /* @__PURE__ */ jsx(InputError, { message: errors.phone })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "border-b pb-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-4 text-xl font-semibold", children: "Media" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Logo Dark" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              type: "file",
              name: "new_logo_dark",
              accept: "image/*",
              onChange: (e) => onHandleChange(e, setData),
              placeholder: "Select Logo"
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.new_logo_dark })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Logo Light" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              type: "file",
              name: "new_logo_light",
              accept: "image/*",
              onChange: (e) => onHandleChange(e, setData),
              placeholder: "Select Logo"
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.new_logo_light })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Favicon" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              type: "file",
              name: "new_favicon",
              accept: "image/*",
              onChange: (e) => onHandleChange(e, setData),
              placeholder: "Select Favicon"
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.new_favicon })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Banner" }),
          /* @__PURE__ */ jsx(Input, { type: "file", name: "new_banner", accept: "image/*", onChange: (e) => onHandleChange(e, setData), placeholder: "Select Banner" }),
          /* @__PURE__ */ jsx(InputError, { message: errors.new_banner })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-4 text-xl font-semibold", children: "Additional Settings" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Website Direction" }),
          /* @__PURE__ */ jsxs(Select, { value: data.direction, onValueChange: (value) => setData("direction", value), children: [
            /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: input.select_option }) }),
            /* @__PURE__ */ jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsx(SelectItem, { value: "none", children: "None" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "ltr", children: "LTR" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "rtl", children: "RTL" })
            ] })
          ] }),
          /* @__PURE__ */ jsx(InputError, { message: errors.direction })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Default Theme" }),
          /* @__PURE__ */ jsxs(Select, { value: data.theme, onValueChange: (value) => setData("theme", value), children: [
            /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: input.select_option }) }),
            /* @__PURE__ */ jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsx(SelectItem, { value: "system", children: "System" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "light", children: "Light" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "dark", children: "Dark" })
            ] })
          ] }),
          /* @__PURE__ */ jsx(InputError, { message: errors.theme })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Language Selector" }),
          /* @__PURE__ */ jsxs(Select, { value: data.language_selector ? "1" : "0", onValueChange: (value) => setData("language_selector", value === "1"), children: [
            /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: input.select_option }) }),
            /* @__PURE__ */ jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsx(SelectItem, { value: "1", children: "Show" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "0", children: "Hide" })
            ] })
          ] }),
          /* @__PURE__ */ jsx(InputError, { message: errors.language_selector })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: `Course Selling Currency (${data.selling_currency})` }),
          /* @__PURE__ */ jsx(
            Combobox,
            {
              data: currencies,
              defaultValue: data.selling_currency || "",
              placeholder: "Select a selling currency",
              onSelect: (selected) => setData("selling_currency", selected.value)
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.selling_currency })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Course Selling Tax (%)" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              name: "selling_tax",
              value: data.selling_tax || "",
              onChange: (e) => onHandleChange(e, setData),
              placeholder: "Enter Course Selling Tax Percentage"
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.selling_tax })
        ] }),
        props.system.sub_type === "collaborative" && /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Instructor Revenue (%)" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              name: "instructor_revenue",
              value: data.instructor_revenue || "",
              onChange: (e) => onHandleChange(e, setData),
              placeholder: "Enter Instructor Revenue Percentage"
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.instructor_revenue })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(LoadingButton, { loading: processing, children: "Save Changes" }) })
  ] }) });
};
export {
  Website as default
};
