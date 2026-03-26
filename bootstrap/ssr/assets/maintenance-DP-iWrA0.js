import { jsxs, jsx } from "react/jsx-runtime";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Card, a as CardHeader, c as CardTitle } from "./card-D8SB2yrw.js";
import { Head, Link } from "@inertiajs/react";
import { Shield, CheckCircle, AlertTriangle } from "lucide-react";
import ApplicationBackup from "./application-backup-tCxHqXQl.js";
import ApplicationBackupList from "./application-backup-list-CDxoiTGM.js";
import ApplicationReboot from "./application-reboot-BJwoDrMZ.js";
import ApplicationUpdate from "./application-update-BMLaTlbi.js";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "./input-error-CEW4jhey.js";
import "./loading-button-C4Hk_jCd.js";
import "./dialog-DD5SXV81.js";
import "@radix-ui/react-dialog";
import "./backgup-downloader-DoQq-N2t.js";
import "./chunked-uploader-input-MwXGR7K4.js";
import "./input-C6-Ta46A.js";
import "axios";
import "sonner";
import "./label-Dd_w2I6M.js";
import "@radix-ui/react-label";
import "./scroll-area-DPHRDnwL.js";
import "@radix-ui/react-scroll-area";
const Maintenance = ({ version, flash, recentBackups }) => {
  return /* @__PURE__ */ jsxs("div", { className: "px-3 py-6 sm:p-6 md:p-10", children: [
    /* @__PURE__ */ jsx(Head, { title: "App Maintenance" }),
    /* @__PURE__ */ jsx(Card, { className: "mb-7 border-blue-200 bg-blue-50", children: /* @__PURE__ */ jsxs(CardHeader, { className: "flex-row items-center justify-between p-3 sm:p-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "m-0 flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5 text-blue-600" }),
        /* @__PURE__ */ jsx(CardTitle, { className: "text-lg text-blue-900", children: "Admin Verified" })
      ] }),
      /* @__PURE__ */ jsx(Link, { href: route("dashboard"), children: /* @__PURE__ */ jsx(Button, { children: "Back To Dashboard" }) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "md:px-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-6 flex flex-col justify-between gap-7 sm:flex-row sm:items-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold text-nowrap", children: "App Maintenance" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm md:text-base", children: "Update, backup and restore your application safely and automatically." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold text-nowrap", children: "App Version" }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground text-sm text-nowrap md:text-base", children: [
            "Current Version: ",
            /* @__PURE__ */ jsx("span", { className: "text-primary font-bold", children: version })
          ] })
        ] })
      ] }),
      (flash == null ? void 0 : flash.success) && /* @__PURE__ */ jsx("div", { className: "mb-6 rounded-lg border border-green-200 bg-green-50 p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
        /* @__PURE__ */ jsx(CheckCircle, { className: "mt-0.5 h-5 w-5 text-green-600" }),
        /* @__PURE__ */ jsx("div", { className: "ml-3", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-green-800", children: String(flash.success) }) })
      ] }) }),
      (flash == null ? void 0 : flash.error) && /* @__PURE__ */ jsx("div", { className: "mb-6 rounded-lg border border-red-200 bg-red-50 p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
        /* @__PURE__ */ jsx(AlertTriangle, { className: "mt-0.5 h-5 w-5 text-red-600" }),
        /* @__PURE__ */ jsx("div", { className: "ml-3", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-red-800", children: String(flash.error) }) })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsx(ApplicationUpdate, { version }),
        /* @__PURE__ */ jsx(ApplicationReboot, {}),
        /* @__PURE__ */ jsx(ApplicationBackup, {}),
        /* @__PURE__ */ jsx(ApplicationBackupList, { recentBackups })
      ] })
    ] })
  ] });
};
export {
  Maintenance as default
};
