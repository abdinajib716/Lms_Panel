import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { C as ChunkedUploaderInput } from "./chunked-uploader-input-MwXGR7K4.js";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { L as LoadingButton } from "./loading-button-C4Hk_jCd.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Card, a as CardHeader, b as CardContent } from "./card-D8SB2yrw.js";
import { D as Dialog, a as DialogTrigger, b as DialogContent, d as DialogTitle, g as DialogDescription, e as DialogFooter, f as DialogClose, c as DialogHeader } from "./dialog-DD5SXV81.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { S as ScrollArea } from "./scroll-area-DPHRDnwL.js";
import { useForm, router } from "@inertiajs/react";
import { Upload, AlertTriangle, RefreshCw, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import "./input-C6-Ta46A.js";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "axios";
import "sonner";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-dialog";
import "@radix-ui/react-label";
import "@radix-ui/react-scroll-area";
const ApplicationUpdate = ({ version }) => {
  const [open, setOpen] = useState(false);
  const [seeding, setSeeding] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isFileSelected, setIsFileSelected] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState("");
  const { data, setData, post, errors, processing, reset } = useForm({
    update_file_url: ""
  });
  const refreshForm = useForm({});
  const handleRefreshServer = () => {
    refreshForm.post(route("system.refresh"));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isFileSelected) {
      setIsSubmit(true);
      return;
    }
  };
  const onResetHandler = () => {
    setIsSubmit(false);
    setIsFileSelected(false);
    setSelectedFileName("");
    reset("update_file_url");
  };
  useEffect(() => {
    if (data.update_file_url && isSubmit) {
      post(route("system.update"), {
        onSuccess: () => {
          setOpen(false);
          onResetHandler();
        },
        onError: () => {
          onResetHandler();
        }
      });
    }
  }, [data.update_file_url]);
  const handleOpenChange = (open2) => {
    if (isSubmit) {
      setOpen(true);
    } else {
      setOpen(open2);
      if (!open2) {
        onResetHandler();
      }
    }
  };
  const seedHandler = () => {
    setSeeding(true);
    router.get(route("system.update.seeder"), {}, { onFinish: () => setSeeding(false) });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Card, { className: "border-2", children: [
      /* @__PURE__ */ jsxs(CardHeader, { className: "p-4 sm:p-6", children: [
        /* @__PURE__ */ jsxs("h2", { className: "flex items-center gap-2 text-xl font-semibold", children: [
          /* @__PURE__ */ jsx(Upload, { className: "text-warning h-5 w-5" }),
          "Application Update"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-1 text-sm", children: "Upload and install the latest version of your application" })
      ] }),
      /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6 p-4 pt-0 sm:p-6 sm:pt-0", children: [
        /* @__PURE__ */ jsx("div", { className: "dark:bg-secondary dark:border-border rounded-lg border border-amber-200 bg-amber-50 p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
          /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5 text-amber-600" }) }),
          /* @__PURE__ */ jsxs("div", { className: "ml-3", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-sm font-medium text-amber-800", children: "Important Update Guidelines" }),
            /* @__PURE__ */ jsx("div", { className: "mt-2 text-sm text-amber-700", children: /* @__PURE__ */ jsxs("ul", { className: "list-inside list-disc space-y-1", children: [
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Refresh Server:" }),
                " Every time refresh server before updating"
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Backup First:" }),
                " Always create a backup before updating"
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "File Format:" }),
                " Upload must be a valid ZIP file"
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Maintenance Mode:" }),
                " Site will be temporarily unavailable during update"
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Migrations:" }),
                " Database migrations will be automatically applied"
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Downtime:" }),
                " Update process may take several minutes"
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Browser:" }),
                " Do not refresh or close browser during update"
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Seeder:" }),
                " Run seeder only after updating the application version"
              ] })
            ] }) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 sm:flex-row", children: [
          /* @__PURE__ */ jsx(
            LoadingButton,
            {
              type: "button",
              variant: "secondary",
              onClick: handleRefreshServer,
              loading: refreshForm.processing,
              disabled: processing || isSubmit,
              children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(RefreshCw, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsx("span", { children: "Refresh Server" })
              ] })
            }
          ),
          /* @__PURE__ */ jsxs(Button, { type: "button", onClick: () => setOpen(true), children: [
            /* @__PURE__ */ jsx(Upload, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsx("span", { children: isSubmit ? "Uploading..." : processing ? "Updating Application..." : "Update Application" })
          ] }),
          /* @__PURE__ */ jsxs(Dialog, { children: [
            /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", className: "bg-destructive/8 hover:bg-destructive/6 text-destructive hover:text-destructive", children: [
              "Run ",
              version,
              " Version Seeder"
            ] }) }),
            /* @__PURE__ */ jsxs(DialogContent, { children: [
              /* @__PURE__ */ jsxs(DialogTitle, { children: [
                "Run Version ",
                version,
                " Seeder"
              ] }),
              /* @__PURE__ */ jsxs(DialogDescription, { className: "space-y-2", children: [
                /* @__PURE__ */ jsxs("p", { children: [
                  "This will run the database seeder for version ",
                  version,
                  "."
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "rounded-md bg-yellow-50 p-3 text-sm text-yellow-700", children: [
                  /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Important Notes:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "mt-1 list-inside list-disc space-y-1", children: [
                    /* @__PURE__ */ jsxs("li", { children: [
                      "Run this seeder only once after updating to version ",
                      version
                    ] }),
                    /* @__PURE__ */ jsx("li", { children: "Running this multiple times will overwrite existing data" }),
                    /* @__PURE__ */ jsx("li", { children: "Do not run this seeder after you have added your own content to the website" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs(DialogFooter, { className: "gap-2", children: [
                /* @__PURE__ */ jsx(DialogClose, { asChild: true, children: /* @__PURE__ */ jsx(Button, { type: "button", variant: "secondary", children: "Cancel" }) }),
                /* @__PURE__ */ jsx(
                  LoadingButton,
                  {
                    variant: "destructive",
                    loading: seeding,
                    disabled: seeding,
                    className: "text-primary-foreground",
                    onClick: seedHandler,
                    children: "Run Seeder"
                  }
                )
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: handleOpenChange, children: /* @__PURE__ */ jsxs(DialogContent, { className: "sm:max-w-[500px]", children: [
      processing && /* @__PURE__ */ jsx("div", { className: "bg-background/80 absolute inset-0 z-50 flex items-center justify-center rounded-lg backdrop-blur-sm", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "border-primary mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-t-transparent" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: "Updating application..." }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-1 text-xs", children: "Please do not close this window" })
      ] }) }),
      /* @__PURE__ */ jsxs(ScrollArea, { className: "max-h-[90vh]", children: [
        /* @__PURE__ */ jsxs(DialogHeader, { children: [
          /* @__PURE__ */ jsxs(DialogTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5 text-orange-600" }),
            "Confirm Application Update"
          ] }),
          /* @__PURE__ */ jsxs(DialogDescription, { className: "space-y-4 text-left", children: [
            /* @__PURE__ */ jsxs("p", { children: [
              "Are you sure you want to update the application with ",
              /* @__PURE__ */ jsxs("strong", { children: [
                '"',
                selectedFileName,
                '"'
              ] }),
              "?"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-orange-200 bg-orange-50 p-4", children: [
              /* @__PURE__ */ jsx("p", { className: "mb-2 font-medium text-orange-800", children: "This update will:" }),
              /* @__PURE__ */ jsxs("ul", { className: "list-inside list-disc space-y-1 text-sm text-orange-700", children: [
                /* @__PURE__ */ jsx("li", { children: "Put the site in maintenance mode" }),
                /* @__PURE__ */ jsx("li", { children: "Replace all application files" }),
                /* @__PURE__ */ jsx("li", { children: "Run database migrations" }),
                /* @__PURE__ */ jsx("li", { children: "Process may take several minutes" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-red-200 bg-red-50 p-4", children: [
              /* @__PURE__ */ jsx("p", { className: "mb-1 font-medium text-red-800", children: "⚠️ Important:" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-red-700", children: "Make sure you have created a backup first! This action cannot be undone." })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4 pt-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { children: "Select File (.zip only)" }),
            /* @__PURE__ */ jsx(
              ChunkedUploaderInput,
              {
                isSubmit,
                storage: "local",
                filetype: "zip",
                delayUpload: false,
                onFileSelected: (file) => {
                  setIsFileSelected(true);
                  setSelectedFileName(file.name);
                },
                onFileUploaded: (fileData) => {
                  setData("update_file_url", fileData.file_url);
                },
                onError: (errors2) => {
                  onResetHandler();
                },
                onCancelUpload: () => {
                  onResetHandler();
                }
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: String(errors.update_file_url || "") })
          ] }),
          isFileSelected && selectedFileName && /* @__PURE__ */ jsx("div", { className: "rounded-lg border border-green-200 bg-green-50 p-3", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
            /* @__PURE__ */ jsx(CheckCircle, { className: "mt-0.5 h-4 w-4 text-green-600" }),
            /* @__PURE__ */ jsxs("div", { className: "ml-2", children: [
              /* @__PURE__ */ jsxs("p", { className: "text-sm text-green-800", children: [
                /* @__PURE__ */ jsx("strong", { children: "Selected file:" }),
                " ",
                selectedFileName
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-blue-600", children: 'File selected successfully. Click "Update Application" to proceed.' })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxs(DialogFooter, { className: "w-full justify-between space-x-2 pt-8", children: [
            /* @__PURE__ */ jsx(DialogClose, { asChild: true, children: /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", children: "Close" }) }),
            /* @__PURE__ */ jsx(
              LoadingButton,
              {
                type: !isFileSelected ? "button" : "submit",
                disabled: processing || isSubmit || !isFileSelected,
                loading: processing || isSubmit,
                children: isSubmit ? "Uploading..." : "Update Application"
              }
            )
          ] })
        ] })
      ] })
    ] }) })
  ] });
};
export {
  ApplicationUpdate as default
};
