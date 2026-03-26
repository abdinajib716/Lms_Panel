import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { L as LoadingButton } from "./loading-button-C4Hk_jCd.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Card } from "./card-D8SB2yrw.js";
import { D as Dialog, b as DialogContent, c as DialogHeader, d as DialogTitle, g as DialogDescription, e as DialogFooter } from "./dialog-DD5SXV81.js";
import { useForm, router } from "@inertiajs/react";
import { Trash2, RotateCcw, AlertTriangle, Download, Calendar, HardDrive, RefreshCw } from "lucide-react";
import { useState } from "react";
import BackupDownloader from "./backgup-downloader-DoQq-N2t.js";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-dialog";
const ApplicationBackupList = ({ recentBackups }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showRestoreDialog, setShowRestoreDialog] = useState(false);
  const [selectedBackup, setSelectedBackup] = useState(null);
  const refreshForm = useForm({});
  const handleRefreshServer = () => {
    refreshForm.post(route("system.refresh"));
  };
  const handleDeleteClick = (backup) => {
    setSelectedBackup(backup);
    setShowDeleteDialog(true);
  };
  const handleRestoreClick = (backup) => {
    setSelectedBackup(backup);
    setShowRestoreDialog(true);
  };
  const { delete: deleteBackup, processing: deleteProcessing } = useForm({});
  const handleConfirmDelete = (e) => {
    if (!selectedBackup) return;
    setIsProcessing(true);
    deleteBackup(route("system.backup.delete", selectedBackup.id), {
      onSuccess: () => {
        setShowDeleteDialog(false);
        setSelectedBackup(null);
        setIsProcessing(false);
      },
      onError: () => {
        setIsProcessing(false);
      }
    });
  };
  const handleConfirmRestore = () => {
    if (!selectedBackup) return;
    setIsProcessing(true);
    router.post(
      route("system.backup.restore", selectedBackup.id),
      {},
      {
        onSuccess: () => {
          setShowRestoreDialog(false);
          setSelectedBackup(null);
          setIsProcessing(false);
        },
        onError: () => {
          setIsProcessing(false);
        }
      }
    );
  };
  const handleCancelDialog = () => {
    if (!isProcessing) {
      setShowDeleteDialog(false);
      setShowRestoreDialog(false);
      setSelectedBackup(null);
    }
  };
  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Dialog,
      {
        open: showDeleteDialog,
        onOpenChange: (open) => {
          if (!isProcessing) {
            setShowDeleteDialog(open);
            if (!open) setSelectedBackup(null);
          }
        },
        children: /* @__PURE__ */ jsxs(
          DialogContent,
          {
            className: "sm:max-w-[500px]",
            onInteractOutside: (e) => {
              if (isProcessing) e.preventDefault();
            },
            onEscapeKeyDown: (e) => {
              if (isProcessing) e.preventDefault();
            },
            children: [
              isProcessing && /* @__PURE__ */ jsx("div", { className: "bg-background/80 absolute inset-0 z-10 flex items-center justify-center rounded-lg backdrop-blur-sm", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsx("div", { className: "border-primary mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-t-transparent" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: "Deleting backup..." }),
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-1 text-xs", children: "Please wait" })
              ] }) }),
              /* @__PURE__ */ jsxs(DialogHeader, { children: [
                /* @__PURE__ */ jsxs(DialogTitle, { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Trash2, { className: "h-5 w-5 text-red-600" }),
                  "Delete Backup"
                ] }),
                /* @__PURE__ */ jsxs(DialogDescription, { className: "space-y-4 text-left", children: [
                  /* @__PURE__ */ jsxs("p", { children: [
                    "Are you sure you want to delete the backup ",
                    /* @__PURE__ */ jsxs("strong", { children: [
                      '"',
                      selectedBackup == null ? void 0 : selectedBackup.backup_name,
                      '"'
                    ] }),
                    "?"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-red-200 bg-red-50 p-4", children: [
                    /* @__PURE__ */ jsx("p", { className: "mb-2 font-medium text-red-800", children: "⚠️ This action will:" }),
                    /* @__PURE__ */ jsxs("ul", { className: "list-inside list-disc space-y-1 text-sm text-red-700", children: [
                      /* @__PURE__ */ jsx("li", { children: "Permanently delete the backup files from storage" }),
                      /* @__PURE__ */ jsx("li", { children: "Remove the backup record from the database" }),
                      /* @__PURE__ */ jsx("li", { children: "Cannot be undone or recovered" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "rounded-lg border border-amber-200 bg-amber-50 p-4", children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-amber-700", children: [
                    /* @__PURE__ */ jsx("strong", { children: "Backup Details:" }),
                    /* @__PURE__ */ jsx("br", {}),
                    "Source Code: ",
                    selectedBackup ? formatFileSize(selectedBackup.source_code_size) : "",
                    /* @__PURE__ */ jsx("br", {}),
                    "Database: ",
                    selectedBackup ? formatFileSize(selectedBackup.database_size) : "",
                    /* @__PURE__ */ jsx("br", {}),
                    "Created: ",
                    selectedBackup ? formatDate(selectedBackup.created_at) : ""
                  ] }) })
                ] })
              ] }),
              /* @__PURE__ */ jsxs(DialogFooter, { className: "flex-col gap-2 sm:flex-row", children: [
                /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: handleCancelDialog, disabled: isProcessing, className: "w-full sm:w-auto", children: "Cancel" }),
                /* @__PURE__ */ jsx("form", { onSubmit: handleConfirmDelete, children: /* @__PURE__ */ jsx(Button, { type: "submit", variant: "destructive", disabled: deleteProcessing, className: "w-full sm:w-auto", children: deleteProcessing ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx("span", { className: "mr-2 animate-spin", children: "⏳" }),
                  "Deleting..."
                ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx(Trash2, { className: "mr-2 h-4 w-4" }),
                  "Delete Backup"
                ] }) }) })
              ] })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      Dialog,
      {
        open: showRestoreDialog,
        onOpenChange: (open) => {
          if (!isProcessing) {
            setShowRestoreDialog(open);
            if (!open) setSelectedBackup(null);
          }
        },
        children: /* @__PURE__ */ jsxs(
          DialogContent,
          {
            className: "sm:max-w-[500px]",
            onInteractOutside: (e) => {
              if (isProcessing) e.preventDefault();
            },
            onEscapeKeyDown: (e) => {
              if (isProcessing) e.preventDefault();
            },
            children: [
              isProcessing && /* @__PURE__ */ jsx("div", { className: "bg-background/80 absolute inset-0 z-10 flex items-center justify-center rounded-lg backdrop-blur-sm", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsx("div", { className: "border-primary mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-t-transparent" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: "Restoring backup..." }),
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-1 text-xs", children: "Please do not close this window" })
              ] }) }),
              /* @__PURE__ */ jsxs(DialogHeader, { children: [
                /* @__PURE__ */ jsxs(DialogTitle, { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(RotateCcw, { className: "h-5 w-5 text-blue-600" }),
                  "Restore Backup"
                ] }),
                /* @__PURE__ */ jsxs(DialogDescription, { className: "space-y-4 text-left", children: [
                  /* @__PURE__ */ jsxs("p", { children: [
                    "Are you sure you want to restore the backup ",
                    /* @__PURE__ */ jsxs("strong", { children: [
                      '"',
                      selectedBackup == null ? void 0 : selectedBackup.backup_name,
                      '"'
                    ] }),
                    "?"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-orange-200 bg-orange-50 p-4", children: [
                    /* @__PURE__ */ jsx("p", { className: "mb-2 font-medium text-orange-800", children: "This restore will:" }),
                    /* @__PURE__ */ jsxs("ul", { className: "list-inside list-disc space-y-1 text-sm text-orange-700", children: [
                      /* @__PURE__ */ jsx("li", { children: "Put the site in maintenance mode" }),
                      /* @__PURE__ */ jsx("li", { children: "Overwrite all current application files" }),
                      /* @__PURE__ */ jsx("li", { children: "Replace the entire database with backup data" }),
                      /* @__PURE__ */ jsx("li", { children: "Process may take several minutes" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-red-200 bg-red-50 p-4", children: [
                    /* @__PURE__ */ jsx("p", { className: "mb-1 font-medium text-red-800", children: "⚠️ Critical Warning:" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-red-700", children: "All current data and files will be lost! Make sure you have a recent backup of your current state if needed. This action cannot be undone." })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "rounded-lg border border-blue-200 bg-blue-50 p-4", children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-blue-700", children: [
                    /* @__PURE__ */ jsx("strong", { children: "Backup Details:" }),
                    /* @__PURE__ */ jsx("br", {}),
                    "Created: ",
                    selectedBackup ? formatDate(selectedBackup.created_at) : "",
                    /* @__PURE__ */ jsx("br", {}),
                    "Source Code: ",
                    selectedBackup ? formatFileSize(selectedBackup.source_code_size) : "",
                    /* @__PURE__ */ jsx("br", {}),
                    "Database: ",
                    selectedBackup ? formatFileSize(selectedBackup.database_size) : "",
                    /* @__PURE__ */ jsx("br", {}),
                    "Status: ",
                    (selectedBackup == null ? void 0 : selectedBackup.status) || ""
                  ] }) })
                ] })
              ] }),
              /* @__PURE__ */ jsxs(DialogFooter, { className: "flex-col gap-2 sm:flex-row", children: [
                /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: handleCancelDialog, disabled: isProcessing, className: "w-full sm:w-auto", children: "Cancel" }),
                /* @__PURE__ */ jsx(Button, { variant: "destructive", onClick: handleConfirmRestore, disabled: isProcessing, className: "w-full sm:w-auto", children: isProcessing ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx("span", { className: "mr-2 animate-spin", children: "⏳" }),
                  "Restoring..."
                ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx(RotateCcw, { className: "mr-2 h-4 w-4" }),
                  "Confirm Restore"
                ] }) })
              ] })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxs(Card, { className: "p-4 sm:p-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold", children: "Recent Backups" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-1 text-sm", children: "View and manage your recent application backups" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "dark:bg-secondary dark:border-border mb-6 rounded-lg border border-amber-200 bg-amber-50 p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
        /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5 text-amber-600" }) }),
        /* @__PURE__ */ jsxs("div", { className: "ml-3", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-sm font-medium text-amber-800", children: "Important Update Guidelines" }),
          /* @__PURE__ */ jsx("div", { className: "mt-2 text-sm text-amber-700", children: /* @__PURE__ */ jsx("ul", { className: "list-inside list-disc space-y-1", children: /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Refresh Server:" }),
            " Every time refresh server before updating"
          ] }) }) })
        ] })
      ] }) }),
      recentBackups && recentBackups.length > 0 ? /* @__PURE__ */ jsx("div", { className: "space-y-4", children: recentBackups.map((backup) => /* @__PURE__ */ jsx("div", { className: "rounded-lg border p-4 transition-colors hover:bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-2 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Download, { className: "h-4 w-4 text-blue-600" }),
              /* @__PURE__ */ jsx("span", { className: "font-medium", children: backup.backup_name })
            ] }),
            /* @__PURE__ */ jsx(
              "span",
              {
                className: `rounded-full px-2 py-1 text-xs ${backup.status === "completed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`,
                children: backup.status
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-muted-foreground grid grid-cols-1 gap-4 text-sm md:grid-cols-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsx("span", { children: formatDate(backup.created_at) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(HardDrive, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxs("span", { children: [
                "Source: ",
                formatFileSize(backup.source_code_size)
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(HardDrive, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxs("span", { children: [
                "Database: ",
                formatFileSize(backup.database_size)
              ] })
            ] })
          ] }),
          backup.notes && /* @__PURE__ */ jsxs("div", { className: "mt-2 text-sm text-gray-500", children: [
            /* @__PURE__ */ jsx("strong", { children: "Notes:" }),
            " ",
            backup.notes
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(
            LoadingButton,
            {
              type: "button",
              variant: "ghost",
              onClick: handleRefreshServer,
              loading: refreshForm.processing,
              disabled: refreshForm.processing,
              children: /* @__PURE__ */ jsxs("div", { className: "text-secondary-foreground flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(RefreshCw, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsx("span", { children: "Refresh" })
              ] })
            }
          ),
          /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "ghost",
              onClick: () => handleRestoreClick(backup),
              className: "flex items-center gap-1 rounded-md px-3 py-2 text-blue-600 transition-colors hover:bg-blue-50 hover:text-blue-800",
              title: "Restore backup",
              children: [
                /* @__PURE__ */ jsx(RotateCcw, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Restore" })
              ]
            }
          ),
          /* @__PURE__ */ jsx(BackupDownloader, { backup }),
          /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "ghost",
              onClick: () => handleDeleteClick(backup),
              className: "flex items-center gap-1 rounded-md px-3 py-2 text-red-600 transition-colors hover:bg-red-50 hover:text-red-800",
              title: "Delete backup",
              children: [
                /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Delete" })
              ]
            }
          )
        ] })
      ] }) }, backup.id)) }) : /* @__PURE__ */ jsxs("div", { className: "py-8 text-center text-gray-500", children: [
        /* @__PURE__ */ jsx(Download, { className: "mx-auto mb-3 h-12 w-12 opacity-50" }),
        /* @__PURE__ */ jsx("p", { children: "No recent backups found." }),
        /* @__PURE__ */ jsx("p", { className: "text-sm", children: "Create your first backup using the form above." })
      ] })
    ] })
  ] });
};
export {
  ApplicationBackupList as default
};
