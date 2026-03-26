import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { L as LoadingButton } from "./loading-button-C4Hk_jCd.js";
import { C as Card } from "./card-D8SB2yrw.js";
import { useForm } from "@inertiajs/react";
import { Download, RefreshCw } from "lucide-react";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "react";
import "./button-jZyzwgdo.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
const ApplicationBackup = () => {
  const { post, errors, processing } = useForm({});
  const refreshForm = useForm({});
  const handleRefreshServer = () => {
    refreshForm.post(route("system.refresh"));
  };
  const handleBackup = (e) => {
    e.preventDefault();
    post(route("system.backup"));
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(Card, { className: "p-4 sm:p-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsxs("h2", { className: "flex items-center gap-2 text-xl font-semibold", children: [
        /* @__PURE__ */ jsx(Download, { className: "h-5 w-5" }),
        "Application Backup"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-1 text-sm", children: "Create a complete backup of your application including files and database" })
    ] }),
    /* @__PURE__ */ jsx("form", { onSubmit: handleBackup, children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsx("div", { className: "dark:bg-secondary dark:border-border rounded-lg border border-blue-200 bg-blue-50 p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
        /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx(Download, { className: "h-5 w-5 text-blue-600" }) }),
        /* @__PURE__ */ jsxs("div", { className: "ml-3", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-sm font-medium text-blue-800", children: "What will be backed up?" }),
          /* @__PURE__ */ jsx("div", { className: "mt-2 text-sm text-blue-700", children: /* @__PURE__ */ jsxs("ul", { className: "list-inside list-disc space-y-1", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Source Code:" }),
              " All application files and code"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Database:" }),
              " Complete MySQL database dump"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Configuration:" }),
              " Environment and config files"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Assets:" }),
              " Uploaded media and public files"
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "mt-3 text-xs text-blue-600", children: /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Note:" }),
            " Every time refresh server before backup."
          ] }) })
        ] })
      ] }) }),
      errors && Object.keys(errors).length > 0 && /* @__PURE__ */ jsx("div", { className: "space-y-1", children: Object.entries(errors).map(([key, error]) => /* @__PURE__ */ jsx(InputError, { message: String(error) }, key)) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 sm:flex-row", children: [
        /* @__PURE__ */ jsx(
          LoadingButton,
          {
            type: "button",
            variant: "secondary",
            onClick: handleRefreshServer,
            loading: refreshForm.processing,
            disabled: processing,
            children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(RefreshCw, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsx("span", { children: "Refresh Server" })
            ] })
          }
        ),
        /* @__PURE__ */ jsx(LoadingButton, { type: "submit", loading: processing, children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Download, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { children: processing ? "Creating Backup..." : "Create Backup" })
        ] }) })
      ] })
    ] }) })
  ] }) });
};
export {
  ApplicationBackup as default
};
