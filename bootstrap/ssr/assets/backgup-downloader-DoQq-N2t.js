import { jsxs, jsx } from "react/jsx-runtime";
import { B as Button } from "./button-jZyzwgdo.js";
import { Download } from "lucide-react";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
const BackupDownloader = ({ backup }) => {
  const handleDownload = async (id) => {
    var _a;
    try {
      const downloadBtn = document.getElementById(`download-btn-${id}`);
      if (downloadBtn) {
        downloadBtn.innerHTML = '<span class="animate-spin mr-1">↻</span> Downloading...';
      }
      const response = await fetch(`/system/backup/${id}/download`, {
        method: "GET",
        headers: {
          Accept: "application/zip",
          "X-Requested-With": "XMLHttpRequest",
          "X-CSRF-TOKEN": ((_a = document.querySelector('meta[name="csrf-token"]')) == null ? void 0 : _a.getAttribute("content")) || ""
        }
      });
      if (!response.ok) {
        throw new Error("Download failed");
      }
      const contentDisposition = response.headers.get("content-disposition");
      const filename = contentDisposition ? contentDisposition.split("filename=")[1].replace(/"/g, "") : `backup_${id}.zip`;
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Download failed:", error);
      alert("Failed to download backup. Please try again.");
    } finally {
      const downloadBtn = document.getElementById(`download-btn-${id}`);
      if (downloadBtn) {
        downloadBtn.innerHTML = '<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg><span class="ml-1">Download</span>';
      }
    }
  };
  return (
    // Update your button JSX:
    /* @__PURE__ */ jsxs(Button, { id: `download-btn-${backup.id}`, variant: "ghost", onClick: () => handleDownload(backup.id), children: [
      /* @__PURE__ */ jsx(Download, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Download" })
    ] })
  );
};
export {
  BackupDownloader as default
};
