import { jsx, jsxs } from "react/jsx-runtime";
import { L as LiveClassStatus } from "./live-class-status-DAOLYBAD.js";
import { T as TiptapRenderer } from "./client-renderer-CUBmzaOS.js";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-DVAMjldm.js";
import { C as Card } from "./card-D8SB2yrw.js";
import { usePage } from "@inertiajs/react";
import { format, parseISO } from "date-fns";
import { Calendar, Clock } from "lucide-react";
import "./button-jZyzwgdo.js";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
/* empty css               */
import "react-icons/lu";
import "hast-util-to-jsx-runtime";
import "shiki/bundle/full";
import "rehype-parse";
import "rehype-react";
import "unified";
import "unist-util-visit";
import "@radix-ui/react-accordion";
const LiveClasses = () => {
  const { props } = usePage();
  const { course, live_classes, zoomConfig } = props;
  return /* @__PURE__ */ jsx("div", { className: "space-y-4", children: live_classes.length <= 0 ? /* @__PURE__ */ jsxs("div", { className: "p-8 text-center", children: [
    /* @__PURE__ */ jsx(Calendar, { className: "mx-auto mb-4 h-12 w-12 text-gray-400" }),
    /* @__PURE__ */ jsx("h3", { className: "mb-2 text-lg font-medium", children: "No Live Classes Scheduled" }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: "Schedule your first live class to get started with Zoom." })
  ] }) : live_classes.map((liveClass) => {
    return /* @__PURE__ */ jsxs(Card, { className: "space-y-4 p-4", children: [
      /* @__PURE__ */ jsx("p", { className: "text-base font-medium", children: liveClass.class_topic }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-muted-foreground space-y-3 text-sm", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsx("span", { children: format(parseISO(liveClass.class_date_and_time), "p") })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsx("span", { children: format(parseISO(liveClass.class_date_and_time), "PPP") })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-2", children: /* @__PURE__ */ jsx(LiveClassStatus, { courseId: course.id, liveClass, zoomConfig }) })
      ] }),
      liveClass.class_note && /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "w-full", children: /* @__PURE__ */ jsxs(AccordionItem, { value: "item-1", className: "bg-muted overflow-hidden rounded-lg border-none", children: [
        /* @__PURE__ */ jsx(AccordionTrigger, { className: "[&[data-state=open]]:!bg-secondary-lighter px-3 py-1.5 text-sm font-normal hover:no-underline", children: "Class Note" }),
        /* @__PURE__ */ jsx(AccordionContent, { className: "p-3", children: /* @__PURE__ */ jsx(TiptapRenderer, { children: liveClass.class_note }) })
      ] }) })
    ] }, liveClass.id);
  }) });
};
export {
  LiveClasses as default
};
