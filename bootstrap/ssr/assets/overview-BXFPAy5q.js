import { jsxs, jsx } from "react/jsx-runtime";
import { T as TiptapRenderer } from "./client-renderer-CUBmzaOS.js";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-DVAMjldm.js";
/* empty css               */
import "react";
import "react-icons/lu";
import "hast-util-to-jsx-runtime";
import "shiki/bundle/full";
import "rehype-parse";
import "rehype-react";
import "unified";
import "unist-util-visit";
import "@radix-ui/react-accordion";
import "lucide-react";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
const Overview = ({ course }) => {
  var _a;
  return /* @__PURE__ */ jsxs("div", { className: "space-y-10", children: [
    /* @__PURE__ */ jsx(TiptapRenderer, { children: course.description }),
    /* @__PURE__ */ jsxs(Accordion, { type: "single", collapsible: true, children: [
      /* @__PURE__ */ jsx("h6", { className: "mb-4 text-xl font-semibold", children: "Faqs" }),
      /* @__PURE__ */ jsx("div", { className: "border-border border-y", children: (_a = course.faqs) == null ? void 0 : _a.map((faq) => /* @__PURE__ */ jsxs(AccordionItem, { value: faq.id, className: "px-4 last:border-none", children: [
        /* @__PURE__ */ jsx(AccordionTrigger, { className: "cursor-pointer text-lg hover:no-underline [&[data-state=open]]:text-blue-500", children: faq.question }),
        /* @__PURE__ */ jsx(AccordionContent, { className: "pt-2", children: faq.answer })
      ] }, faq.id)) })
    ] })
  ] });
};
export {
  Overview as default
};
