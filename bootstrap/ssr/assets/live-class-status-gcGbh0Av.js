import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { B as Button } from "./button-jZyzwgdo.js";
import { usePage, Link } from "@inertiajs/react";
import { ExternalLink, Pencil } from "lucide-react";
import { useState, useEffect } from "react";
import LiveClassForm from "./live-class-form-B6pm29lG.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "./datetime-picker-Bln2jqxu.js";
import "react-day-picker";
import "./popover-BV7JTqNd.js";
import "@radix-ui/react-popover";
import "./select-BxPdBi6V.js";
import "@radix-ui/react-select";
import "./use-lang-44ndmTOc.js";
import "date-fns";
import "./input-error-CEW4jhey.js";
import "./Editor-iiR11EW9.js";
/* empty css               */
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
import "./dialog-DD5SXV81.js";
import "@radix-ui/react-dialog";
import "./input-C6-Ta46A.js";
import "./label-Dd_w2I6M.js";
import "@radix-ui/react-label";
import "./scroll-area-DPHRDnwL.js";
import "@radix-ui/react-scroll-area";
const LiveClassStatus = ({ courseId, liveClass, zoomConfig }) => {
  var _a;
  const [currentTime, setCurrentTime] = useState(/* @__PURE__ */ new Date());
  const { props } = usePage();
  const { translate } = props;
  const { button, dashboard } = translate;
  const getClassStatus = (liveClass2) => {
    var _a2;
    const now = currentTime;
    const classStart = new Date(liveClass2.class_date_and_time);
    const classEnd = ((_a2 = liveClass2.additional_info) == null ? void 0 : _a2.end_time) ? new Date(liveClass2.additional_info.end_time) : new Date(classStart.getTime() + 60 * 60 * 1e3);
    if (now > classEnd) {
      return "ended";
    } else if (now >= classStart && now <= classEnd) {
      return "live";
    } else if (classStart > now) {
      return "upcoming";
    }
    return "scheduled";
  };
  const status = getClassStatus(liveClass);
  useEffect(() => {
    const updateTimeAndCheckStatus = () => {
      var _a2;
      const newTime = /* @__PURE__ */ new Date();
      setCurrentTime(newTime);
      const classEnd = ((_a2 = liveClass.additional_info) == null ? void 0 : _a2.end_time) ? new Date(liveClass.additional_info.end_time) : new Date(new Date(liveClass.class_date_and_time).getTime() + 60 * 60 * 1e3);
      return newTime > classEnd;
    };
    const hasEnded = updateTimeAndCheckStatus();
    if (hasEnded) {
      return;
    }
    const interval = setInterval(() => {
      const classEnded = updateTimeAndCheckStatus();
      if (classEnded) {
        clearInterval(interval);
      }
    }, 6e4);
    return () => {
      clearInterval(interval);
    };
  }, [liveClass.class_date_and_time, (_a = liveClass.additional_info) == null ? void 0 : _a.end_time]);
  const isSdkConfig = zoomConfig.zoom_web_sdk && zoomConfig.zoom_sdk_client_id && zoomConfig.zoom_sdk_client_secret ? true : false;
  const getStatusColor = (status2) => {
    switch (status2) {
      case "live":
        return "text-green-600 bg-green-100";
      case "upcoming":
        return "text-blue-600 bg-blue-100";
      case "ended":
        return "text-muted-foreground bg-gray-100";
      default:
        return "text-orange-600 bg-orange-100";
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("span", { className: `rounded-full px-2 py-1 text-center text-xs font-medium capitalize ${getStatusColor(status)}`, children: status }),
    status === "live" ? isSdkConfig ? /* @__PURE__ */ jsx(Link, { href: route("live-class.start", liveClass.id), children: /* @__PURE__ */ jsxs(Button, { size: "sm", variant: status === "live" ? "default" : "outline", className: "flex w-full items-center gap-2", children: [
      /* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4" }),
      button.join_class
    ] }) }) : /* @__PURE__ */ jsx("a", { href: liveClass.additional_info.join_url, target: "_blank", children: /* @__PURE__ */ jsxs(Button, { size: "sm", variant: status === "live" ? "default" : "outline", className: "flex w-full items-center gap-2", children: [
      /* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4" }),
      button.join_class
    ] }) }) : /* @__PURE__ */ jsxs(Button, { disabled: true, variant: "outline", size: "sm", className: "flex w-full items-center gap-2", children: [
      /* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4" }),
      button.join_class
    ] }),
    status === "upcoming" ? /* @__PURE__ */ jsx(
      LiveClassForm,
      {
        courseId,
        liveClass,
        title: button.edit_live_class,
        handler: /* @__PURE__ */ jsxs(
          Button,
          {
            size: "sm",
            variant: "secondary",
            className: "bg-background border-secondary-foreground/20 flex w-full items-center gap-2 border",
            children: [
              /* @__PURE__ */ jsx(Pencil, { className: "h-4 w-4" }),
              button.edit_live_class
            ]
          }
        )
      }
    ) : /* @__PURE__ */ jsxs(
      Button,
      {
        size: "sm",
        disabled: true,
        variant: "secondary",
        className: "bg-background border-secondary-foreground/20 flex w-full items-center gap-2 border",
        children: [
          /* @__PURE__ */ jsx(Pencil, { className: "h-4 w-4" }),
          button.edit_live_class
        ]
      }
    )
  ] });
};
export {
  LiveClassStatus as default
};
