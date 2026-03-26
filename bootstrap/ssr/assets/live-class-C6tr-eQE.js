import { jsx, jsxs } from "react/jsx-runtime";
import { D as DeleteModal } from "./delete-modal-BIvxKwRf.js";
import { T as TiptapRenderer } from "./client-renderer-CUBmzaOS.js";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-DVAMjldm.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Card } from "./card-D8SB2yrw.js";
import { usePage, Link } from "@inertiajs/react";
import { format, parseISO } from "date-fns";
import { Plus, Calendar, Clock, Users, Trash2 } from "lucide-react";
import LiveClassForm from "./live-class-form-B6pm29lG.js";
import LiveClassStatus from "./live-class-status-gcGbh0Av.js";
import "./dialog-DD5SXV81.js";
import "@radix-ui/react-dialog";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "react";
/* empty css               */
import "react-icons/lu";
import "hast-util-to-jsx-runtime";
import "shiki/bundle/full";
import "rehype-parse";
import "rehype-react";
import "unified";
import "unist-util-visit";
import "@radix-ui/react-accordion";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./datetime-picker-Bln2jqxu.js";
import "react-day-picker";
import "./popover-BV7JTqNd.js";
import "@radix-ui/react-popover";
import "./select-BxPdBi6V.js";
import "@radix-ui/react-select";
import "./use-lang-44ndmTOc.js";
import "./input-error-CEW4jhey.js";
import "./Editor-iiR11EW9.js";
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
import "./input-C6-Ta46A.js";
import "./label-Dd_w2I6M.js";
import "@radix-ui/react-label";
import "./scroll-area-DPHRDnwL.js";
import "@radix-ui/react-scroll-area";
const zoomIsEnabled = (config) => {
  const { zoom_account_email, zoom_account_id, zoom_client_id, zoom_client_secret } = config;
  return Boolean(zoom_account_email && zoom_account_id && zoom_client_id && zoom_client_secret);
};
const LiveClass = () => {
  const { props } = usePage();
  const { translate } = props;
  const { dashboard, button } = translate;
  const { course, zoomConfig } = props;
  const isZoomEnabled = zoomIsEnabled(zoomConfig);
  const liveClasses = course.live_classes || [];
  return /* @__PURE__ */ jsx(Card, { className: "container p-4 sm:p-6", children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold", children: dashboard.live_classes }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3", children: isZoomEnabled ? /* @__PURE__ */ jsx(
        LiveClassForm,
        {
          courseId: course.id,
          title: button.schedule_class,
          handler: /* @__PURE__ */ jsxs(Button, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" }),
            button.schedule_class
          ] })
        }
      ) : /* @__PURE__ */ jsxs(Button, { disabled: true, className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" }),
        button.schedule_class
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-4", children: liveClasses.length === 0 ? /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("p", { className: "bg-destructive/5 dark:bg-destructive/30 rounded-lg p-3 text-center text-sm text-red-500", children: [
        dashboard.zoom_not_enabled_message,
        " ",
        /* @__PURE__ */ jsx(Link, { href: route("settings.live-class"), className: "text-blue-500 hover:underline", children: dashboard.enable_zoom })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-8 text-center", children: [
        /* @__PURE__ */ jsx(Calendar, { className: "mx-auto mb-4 h-12 w-12 text-gray-400" }),
        /* @__PURE__ */ jsx("h3", { className: "mb-2 text-lg font-medium", children: dashboard.no_live_classes_scheduled }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: dashboard.schedule_first_live_class })
      ] })
    ] }) : liveClasses.map((liveClass) => {
      var _a, _b;
      return /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start justify-between gap-6 md:flex-row", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx("h3", { className: "mb-4 text-lg font-semibold", children: liveClass.class_topic }),
            /* @__PURE__ */ jsxs("div", { className: "text-muted-foreground mb-4 space-y-3 text-sm", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsx("span", { children: format(parseISO(liveClass.class_date_and_time), "PPP") })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsx("span", { children: format(parseISO(liveClass.class_date_and_time), "p") })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Users, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsxs("span", { children: [
                  button.instructor,
                  ": ",
                  ((_b = (_a = course.instructor) == null ? void 0 : _a.user) == null ? void 0 : _b.name) || "Unknown"
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ jsx(LiveClassStatus, { courseId: course.id, liveClass, zoomConfig }),
            /* @__PURE__ */ jsx(
              DeleteModal,
              {
                routePath: route("live-class.destroy", liveClass.id),
                actionComponent: /* @__PURE__ */ jsxs(Button, { size: "sm", variant: "outline", className: "flex w-full items-center gap-1 text-red-600 hover:text-red-700", children: [
                  /* @__PURE__ */ jsx(Trash2, { className: "h-3 w-3" }),
                  button.delete_class
                ] })
              }
            )
          ] })
        ] }),
        liveClass.class_note && /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "mt-4 w-full", children: /* @__PURE__ */ jsxs(AccordionItem, { value: "item-1", className: "bg-muted overflow-hidden rounded-lg border-none", children: [
          /* @__PURE__ */ jsx(AccordionTrigger, { className: "[&[data-state=open]]:!bg-secondary-lighter px-4 py-2 text-base font-medium hover:no-underline", children: button.class_note }),
          /* @__PURE__ */ jsx(AccordionContent, { className: "p-4", children: /* @__PURE__ */ jsx(TiptapRenderer, { children: liveClass.class_note }) })
        ] }) })
      ] }, liveClass.id);
    }) })
  ] }) });
};
export {
  LiveClass as default
};
