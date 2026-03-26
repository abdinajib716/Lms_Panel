import { jsxs, jsx } from "react/jsx-runtime";
import { T as Tabs } from "./tabs-CPx41tqt.js";
import { D as Dialog, a as DialogTrigger, b as DialogContent, c as DialogHeader, d as DialogTitle } from "./dialog-DD5SXV81.js";
import { S as ScrollArea } from "./scroll-area-DPHRDnwL.js";
import { T as TabsList, a as TabsTrigger, b as TabsContent } from "./tabs-BOXC0x8t.js";
import { useState } from "react";
import ResourceForm from "./resource-form-DzQB08Jf.js";
import ResourceList from "./resource-list-CI4-EHCo.js";
import "@inertiajs/react";
import "@radix-ui/react-dialog";
import "lucide-react";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-scroll-area";
import "@radix-ui/react-tabs";
import "./chunked-uploader-input-MwXGR7K4.js";
import "./button-jZyzwgdo.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./input-C6-Ta46A.js";
import "axios";
import "sonner";
import "./input-error-CEW4jhey.js";
import "./loading-button-C4Hk_jCd.js";
import "./label-Dd_w2I6M.js";
import "@radix-ui/react-label";
import "./select-BxPdBi6V.js";
import "@radix-ui/react-select";
import "./file-metadata-CvVo69cP.js";
import "./inertia-BtwbgBI3.js";
const ResourceModal = ({ title, handler, lesson, resource }) => {
  const [open, setOpen] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  return /* @__PURE__ */ jsxs(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(DialogTrigger, { children: handler }),
    /* @__PURE__ */ jsx(DialogContent, { className: "p-0", children: /* @__PURE__ */ jsxs(ScrollArea, { className: "max-h-[90vh] p-6", children: [
      /* @__PURE__ */ jsx(DialogHeader, { className: "mb-6", children: /* @__PURE__ */ jsx(DialogTitle, { children: title }) }),
      /* @__PURE__ */ jsxs(Tabs, { defaultValue: "list", children: [
        /* @__PURE__ */ jsxs(TabsList, { className: "h-11 w-full", children: [
          /* @__PURE__ */ jsx(TabsTrigger, { value: "list", className: "h-9 w-full", children: "Resource List" }),
          /* @__PURE__ */ jsx(TabsTrigger, { value: "add", className: "h-9 w-full", children: "Add Resource" })
        ] }),
        /* @__PURE__ */ jsx(TabsContent, { value: "list", className: "!cursor-default", children: /* @__PURE__ */ jsx(ResourceList, { lesson, isSubmit, setIsSubmit, setOpen }) }),
        /* @__PURE__ */ jsx(TabsContent, { value: "add", className: "space-y-4 p-0.5", children: /* @__PURE__ */ jsx(ResourceForm, { lesson, isSubmit, setIsSubmit, setIsOpen: setOpen }) })
      ] })
    ] }) })
  ] });
};
export {
  ResourceModal as default
};
