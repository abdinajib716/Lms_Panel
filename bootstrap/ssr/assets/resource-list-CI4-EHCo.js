import { jsx, jsxs } from "react/jsx-runtime";
import { B as Button } from "./button-jZyzwgdo.js";
import { Pencil, Eye, Download } from "lucide-react";
import { useState } from "react";
import ResourceForm from "./resource-form-DzQB08Jf.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
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
import "./file-metadata-CvVo69cP.js";
import "./inertia-BtwbgBI3.js";
import "@inertiajs/react";
const ResourceList = ({ lesson, isSubmit, setIsSubmit, setOpen }) => {
  const [editId, setEditId] = useState("");
  const handleDownload = async (resource, e) => {
    e.preventDefault();
    try {
      const url = route("resources.download", resource.id);
      window.open(url, "_blank");
    } catch (error) {
      window.open(resource.resource, "_blank");
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "space-y-4 py-3", children: lesson.resources.length > 0 ? lesson.resources.map((resource) => /* @__PURE__ */ jsx("div", { className: "bg-muted rounded-md p-1.5", children: resource.id === editId ? /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx(ResourceForm, { lesson, resource, isSubmit, setIsSubmit, setIsOpen: setOpen }),
    /* @__PURE__ */ jsx(Button, { variant: "secondary", className: "absolute right-0 bottom-0", onClick: () => setEditId(""), children: "Cancel" })
  ] }) : /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2", children: [
    /* @__PURE__ */ jsx("div", { className: "w-full px-1", children: resource.type === "link" ? /* @__PURE__ */ jsx("a", { target: "_blank", href: resource.resource, className: "cursor-pointer text-sm hover:underline", children: resource.title.slice(0, 50) + (resource.title.length > 50 ? "..." : "") }) : /* @__PURE__ */ jsx("span", { className: "cursor-pointer text-sm hover:underline", onClick: (e) => handleDownload(resource, e), children: resource.title.slice(0, 50) + (resource.title.length > 50 ? "..." : "") }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end space-x-2", children: [
      /* @__PURE__ */ jsx(Button, { size: "icon", variant: "secondary", className: "h-7 w-7", onClick: () => setEditId(resource.id), children: /* @__PURE__ */ jsx(Pencil, { className: "h-3 w-3" }) }),
      resource.type !== "link" ? /* @__PURE__ */ jsx(Button, { asChild: true, size: "icon", variant: "secondary", className: "h-7 w-7", children: /* @__PURE__ */ jsx("a", { target: "_blank", href: resource.resource, children: /* @__PURE__ */ jsx(Eye, { className: "h-3 w-3" }) }) }) : /* @__PURE__ */ jsx(Button, { size: "icon", variant: "secondary", className: "h-7 w-7", onClick: (e) => handleDownload(resource, e), children: /* @__PURE__ */ jsx(Download, { className: "h-3 w-3" }) })
    ] })
  ] }, resource.id) })) : /* @__PURE__ */ jsx("div", { className: "bg-muted rounded-md p-1.5", children: /* @__PURE__ */ jsx("div", { className: "w-full px-1 py-6 text-center", children: /* @__PURE__ */ jsx("p", { className: "text-sm", children: "No resources available" }) }) }) });
};
export {
  ResourceList as default
};
