import { jsxs, jsx } from "react/jsx-runtime";
import { S as Separator } from "./separator-R7EO2G8T.js";
import { usePage } from "@inertiajs/react";
import { Check } from "lucide-react";
import "react";
import "@radix-ui/react-separator";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
const Details = ({ course }) => {
  var _a, _b;
  const { props } = usePage();
  const { translate } = props;
  const { frontend } = translate;
  return /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h6", { className: "mb-4 text-xl font-semibold", children: frontend.requirements }),
      /* @__PURE__ */ jsx(Separator, { className: "my-4" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4", children: (_a = course.requirements) == null ? void 0 : _a.map(({ id, requirement }) => /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-secondary-light mt-0.5 flex h-5 w-full max-w-5 items-center justify-center rounded-full", children: /* @__PURE__ */ jsx(Check, { className: "text-secondary-foreground h-4 w-4 shrink-0" }) }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: requirement })
      ] }, id)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h6", { className: "mb-4 text-xl font-semibold", children: frontend.outcomes }),
      /* @__PURE__ */ jsx(Separator, { className: "my-4" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4", children: (_b = course.outcomes) == null ? void 0 : _b.map(({ id, outcome }) => /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-secondary-light mt-0.5 flex h-5 w-full max-w-5 items-center justify-center rounded-full", children: /* @__PURE__ */ jsx(Check, { className: "text-secondary-foreground h-4 w-4 shrink-0" }) }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: outcome })
      ] }, id)) })
    ] })
  ] });
};
export {
  Details as default
};
