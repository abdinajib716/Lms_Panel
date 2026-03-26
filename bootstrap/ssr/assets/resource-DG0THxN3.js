import { jsx, jsxs } from "react/jsx-runtime";
import { B as Button } from "./button-jZyzwgdo.js";
import { usePage } from "@inertiajs/react";
import { Eye, Download } from "lucide-react";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
const Resource = () => {
  const { props } = usePage();
  const resources = props.watching.resources;
  const handleDownload = async (resource, e) => {
    e.preventDefault();
    try {
      const url = route("resources.download", resource.id);
      window.open(url, "_blank");
    } catch (error) {
      window.open(resource.resource, "_blank");
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "space-y-5", children: resources.map(
    (resource) => resource.type === "link" ? /* @__PURE__ */ jsx("div", { className: "bg-muted rounded-md p-1.5", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2", children: [
      /* @__PURE__ */ jsx("div", { className: "w-full px-1", children: /* @__PURE__ */ jsx("a", { target: "_blank", href: resource.resource, className: "cursor-pointer text-sm hover:underline", children: resource.title.slice(0, 50) + (resource.title.length > 50 ? "..." : "") }) }),
      /* @__PURE__ */ jsx(Button, { asChild: true, size: "icon", variant: "secondary", className: "h-7 w-7", children: /* @__PURE__ */ jsx("a", { target: "_blank", href: resource.resource, children: /* @__PURE__ */ jsx(Eye, { className: "h-3 w-3" }) }) })
    ] }, resource.id) }) : /* @__PURE__ */ jsx("div", { className: "bg-muted rounded-md p-1.5", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2", children: [
      /* @__PURE__ */ jsx("div", { className: "w-full px-1", children: /* @__PURE__ */ jsx("span", { className: "cursor-pointer text-sm hover:underline", onClick: (e) => handleDownload(resource, e), children: resource.title.slice(0, 50) + (resource.title.length > 50 ? "..." : "") }) }),
      /* @__PURE__ */ jsx(Button, { size: "icon", variant: "secondary", className: "h-7 w-7", onClick: (e) => handleDownload(resource, e), children: /* @__PURE__ */ jsx(Download, { className: "h-3 w-3" }) })
    ] }, resource.id) })
  ) });
};
export {
  Resource as default
};
