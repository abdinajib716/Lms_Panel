import { jsxs, jsx } from "react/jsx-runtime";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Card, a as CardHeader, b as CardContent, c as CardTitle, d as CardDescription } from "./card-D8SB2yrw.js";
import { useForm, router } from "@inertiajs/react";
import { Power } from "lucide-react";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
function ApplicationReboot() {
  const { post, processing } = useForm();
  const handleReboot = (e) => {
    e.preventDefault();
    post(route("system.reboot"));
  };
  return /* @__PURE__ */ jsxs(Card, { className: "border-2", children: [
    /* @__PURE__ */ jsxs(CardHeader, { className: "p-4 sm:p-6", children: [
      /* @__PURE__ */ jsxs("h2", { className: "flex items-center gap-2 text-xl font-semibold", children: [
        /* @__PURE__ */ jsx(Power, { className: "text-warning h-5 w-5" }),
        "Application Reboot"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-1 text-sm", children: "Reboot your application to apply changes" })
    ] }),
    /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6 p-4 pt-0 sm:p-6 sm:pt-0", children: [
      /* @__PURE__ */ jsxs(Card, { className: "border-yellow-200 bg-yellow-50", children: [
        /* @__PURE__ */ jsxs(CardHeader, { className: "p-4", children: [
          /* @__PURE__ */ jsx(CardTitle, { className: "text-lg text-yellow-900", children: "System Operations" }),
          /* @__PURE__ */ jsx(CardDescription, { className: "text-yellow-700", children: "The following operations will be performed:" })
        ] }),
        /* @__PURE__ */ jsxs(CardContent, { className: "space-y-2 p-4 text-sm text-yellow-800", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "1." }),
            /* @__PURE__ */ jsx("span", { children: "Clear and rebuild application cache, route, view and config" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "5." }),
            /* @__PURE__ */ jsx("span", { children: "Bring application out of maintenance mode" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx("form", { onSubmit: handleReboot, className: "space-y-4", children: /* @__PURE__ */ jsxs(Button, { type: "submit", className: "bg-orange-600 text-white hover:bg-orange-700", disabled: processing, children: [
          /* @__PURE__ */ jsx(Power, { className: "h-4 w-4" }),
          processing ? "Rebooting System..." : "Reboot System"
        ] }) }),
        /* @__PURE__ */ jsxs(Button, { onClick: () => router.post(route("system.reboot")), children: [
          /* @__PURE__ */ jsx(Power, { className: "h-4 w-4" }),
          "Clear System Cache"
        ] })
      ] })
    ] })
  ] });
}
export {
  ApplicationReboot as default
};
