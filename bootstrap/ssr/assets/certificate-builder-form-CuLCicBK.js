import { jsxs, jsx } from "react/jsx-runtime";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Card, a as CardHeader, c as CardTitle, d as CardDescription, b as CardContent } from "./card-D8SB2yrw.js";
import { I as Input } from "./input-C6-Ta46A.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BxPdBi6V.js";
import { T as Textarea } from "./textarea-DctRxpgE.js";
import { useForm } from "@inertiajs/react";
import { Save } from "lucide-react";
import { useState } from "react";
import CertificatePreview from "./certificate-preview-qrVQ0C-Z.js";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-label";
import "@radix-ui/react-select";
const CertificateBuilderForm = ({ template }) => {
  const [logoPreview, setLogoPreview] = useState(template == null ? void 0 : template.logo_path);
  const { data, setData, post, processing, errors } = useForm({
    name: (template == null ? void 0 : template.name) || "My Certificate Template",
    logo: null,
    template_data: (template == null ? void 0 : template.template_data) || {
      primaryColor: "#3730a3",
      secondaryColor: "#4b5563",
      backgroundColor: "#dbeafe",
      borderColor: "#f59e0b",
      titleText: "Certificate of Completion",
      descriptionText: "This certificate is proudly presented to",
      completionText: "for successfully completing the course",
      footerText: "Authorized Certificate",
      fontFamily: "serif"
    }
  });
  const onLogoChange = (name, value) => {
    setData(name, value);
    setLogoPreview(URL.createObjectURL(value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (template) {
      post(route("certificate.templates.update", template.id));
    } else {
      post(route("certificate.templates.store"));
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "grid gap-6 lg:grid-cols-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsx(CardTitle, { children: "Basic Information" }),
          /* @__PURE__ */ jsx(CardDescription, { children: "Set the template name and activation status" })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Template Name" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "name",
              value: data.name,
              onChange: (e) => setData("name", e.target.value),
              placeholder: "e.g., Modern Blue Certificate"
            }
          ),
          errors.name && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500", children: errors.name })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsx(CardTitle, { children: "Logo & Branding" }),
          /* @__PURE__ */ jsx(CardDescription, { children: "Upload your institution or course logo" })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "logo", children: "Logo Image" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            logoPreview && /* @__PURE__ */ jsx("div", { className: "h-20 w-20 overflow-hidden rounded border", children: /* @__PURE__ */ jsx("img", { src: logoPreview, alt: "Logo preview", className: "h-full w-full object-contain" }) }),
            /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsx(Input, { id: "logo", type: "file", accept: "image/*", onChange: (e) => {
              var _a;
              return onLogoChange("logo", (_a = e.target.files) == null ? void 0 : _a[0]);
            } }) })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-xs", children: "Recommended: PNG or SVG, max 1MB" }),
          /* @__PURE__ */ jsx(InputError, { message: errors.logo })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsx(CardTitle, { children: "Colors" }),
          /* @__PURE__ */ jsx(CardDescription, { children: "Customize the certificate color scheme" })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "primaryColor", children: "Primary Color" }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsx(
                Input,
                {
                  id: "primaryColor",
                  type: "color",
                  value: data.template_data.primaryColor,
                  onChange: (e) => setData("template_data", { ...data.template_data, primaryColor: e.target.value }),
                  className: "h-10 w-16"
                }
              ),
              /* @__PURE__ */ jsx(
                Input,
                {
                  value: data.template_data.primaryColor,
                  onChange: (e) => setData("template_data", { ...data.template_data, primaryColor: e.target.value }),
                  placeholder: "#3730a3"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "secondaryColor", children: "Secondary Color" }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsx(
                Input,
                {
                  id: "secondaryColor",
                  type: "color",
                  value: data.template_data.secondaryColor,
                  onChange: (e) => setData("template_data", { ...data.template_data, secondaryColor: e.target.value }),
                  className: "h-10 w-16"
                }
              ),
              /* @__PURE__ */ jsx(
                Input,
                {
                  value: data.template_data.secondaryColor,
                  onChange: (e) => setData("template_data", { ...data.template_data, secondaryColor: e.target.value }),
                  placeholder: "#4b5563"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "backgroundColor", children: "Background Color" }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsx(
                Input,
                {
                  id: "backgroundColor",
                  type: "color",
                  value: data.template_data.backgroundColor,
                  onChange: (e) => setData("template_data", { ...data.template_data, backgroundColor: e.target.value }),
                  className: "h-10 w-16"
                }
              ),
              /* @__PURE__ */ jsx(
                Input,
                {
                  value: data.template_data.backgroundColor,
                  onChange: (e) => setData("template_data", { ...data.template_data, backgroundColor: e.target.value }),
                  placeholder: "#dbeafe"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "borderColor", children: "Border Color" }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsx(
                Input,
                {
                  id: "borderColor",
                  type: "color",
                  value: data.template_data.borderColor,
                  onChange: (e) => setData("template_data", { ...data.template_data, borderColor: e.target.value }),
                  className: "h-10 w-16"
                }
              ),
              /* @__PURE__ */ jsx(
                Input,
                {
                  value: data.template_data.borderColor,
                  onChange: (e) => setData("template_data", { ...data.template_data, borderColor: e.target.value }),
                  placeholder: "#f59e0b"
                }
              )
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsx(CardTitle, { children: "Typography" }),
          /* @__PURE__ */ jsx(CardDescription, { children: "Choose the font style for your certificate" })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "fontFamily", children: "Font Family" }),
          /* @__PURE__ */ jsxs(
            Select,
            {
              value: data.template_data.fontFamily,
              onValueChange: (value) => setData("template_data", { ...data.template_data, fontFamily: value }),
              children: [
                /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsx(SelectItem, { value: "serif", children: "Serif (Classic)" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "sans-serif", children: "Sans Serif (Modern)" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "monospace", children: "Monospace (Technical)" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "cursive", children: "Cursive (Elegant)" })
                ] })
              ]
            }
          )
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsx(CardTitle, { children: "Certificate Text" }),
          /* @__PURE__ */ jsx(CardDescription, { children: "Customize the text content of your certificate" })
        ] }),
        /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "titleText", children: "Title Text" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "titleText",
                value: data.template_data.titleText,
                onChange: (e) => setData("template_data", { ...data.template_data, titleText: e.target.value }),
                placeholder: "Certificate of Completion"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "descriptionText", children: "Description Text" }),
            /* @__PURE__ */ jsx(
              Textarea,
              {
                id: "descriptionText",
                value: data.template_data.descriptionText,
                onChange: (e) => setData("template_data", { ...data.template_data, descriptionText: e.target.value }),
                placeholder: "This certificate is proudly presented to",
                rows: 3
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "completionText", children: "Completion Text" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "completionText",
                value: data.template_data.completionText,
                onChange: (e) => setData("template_data", { ...data.template_data, completionText: e.target.value }),
                placeholder: "for successfully completing the course"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "footerText", children: "Footer Text" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "footerText",
                value: data.template_data.footerText,
                onChange: (e) => setData("template_data", { ...data.template_data, footerText: e.target.value }),
                placeholder: "Authorized Certificate"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Button, { onClick: handleSubmit, disabled: processing, className: "w-full", children: [
        /* @__PURE__ */ jsx(Save, { className: "mr-2 h-4 w-4" }),
        processing ? "Saving..." : template ? "Update Template" : "Create Template"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "lg:sticky lg:top-6", children: /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx(CardTitle, { children: "Live Preview" }),
        /* @__PURE__ */ jsx(CardDescription, { children: "See how your certificate will look" })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(
        CertificatePreview,
        {
          template: data,
          studentName: "John Doe",
          courseName: "Sample Course Name",
          completionDate: "January 1, 2025",
          logoUrl: logoPreview
        }
      ) })
    ] }) })
  ] });
};
export {
  CertificateBuilderForm as default
};
