import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { B as Button } from "./button-jZyzwgdo.js";
import { usePage, Link } from "@inertiajs/react";
import { ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
const LiveClassStatus = ({ courseId, liveClass, zoomConfig }) => {
  var _a;
  const { props } = usePage();
  const { translate } = props;
  const { frontend } = translate;
  const [currentTime, setCurrentTime] = useState(/* @__PURE__ */ new Date());
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
      frontend.join_class
    ] }) }) : /* @__PURE__ */ jsx("a", { href: liveClass.additional_info.join_url, target: "_blank", children: /* @__PURE__ */ jsxs(Button, { size: "sm", variant: status === "live" ? "default" : "outline", className: "flex w-full items-center gap-2", children: [
      /* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4" }),
      frontend.join_class
    ] }) }) : /* @__PURE__ */ jsxs(Button, { disabled: true, variant: "outline", size: "sm", className: "flex w-full items-center gap-2", children: [
      /* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4" }),
      frontend.join_class
    ] })
  ] });
};
export {
  LiveClassStatus as L
};
