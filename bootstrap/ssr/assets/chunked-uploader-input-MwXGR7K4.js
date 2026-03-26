import { jsxs, jsx } from "react/jsx-runtime";
import { B as Button } from "./button-jZyzwgdo.js";
import { I as Input } from "./input-C6-Ta46A.js";
import axios from "axios";
import { CheckCircle, Loader2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { toast } from "sonner";
import { I as InputError } from "./input-error-CEW4jhey.js";
const ChunkedUploaderInput = ({
  storage,
  isSubmit,
  courseId,
  sectionId,
  filetype,
  delayUpload = false,
  onError,
  onCancelUpload,
  onFileSelected,
  onFileUploaded
}) => {
  const [file, setFile] = useState(null);
  const [uploadId, setUploadId] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState("idle");
  const fileInputRef = useRef(null);
  const abortControllerRef = useRef(null);
  const maxFileSize = 1024 * 1024 * 1024;
  const chunkSize = 5 * 1024 * 1024;
  useEffect(() => {
    var _a, _b;
    axios.defaults.withCredentials = true;
    const token = (_a = document.cookie.split("; ").find((row) => row.startsWith("XSRF-TOKEN="))) == null ? void 0 : _a.split("=")[1];
    if (token) {
      axios.defaults.headers.common["X-XSRF-TOKEN"] = decodeURIComponent(token);
    } else {
      const metaToken = (_b = document.querySelector('meta[name="csrf-token"]')) == null ? void 0 : _b.getAttribute("content");
      if (metaToken) {
        axios.defaults.headers.common["X-CSRF-TOKEN"] = metaToken;
      }
    }
  }, []);
  useEffect(() => {
    if (isSubmit) {
      initiateUpload();
    }
  }, [isSubmit]);
  const handleFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      if (selectedFile.size > maxFileSize) {
        setErrorMessage(`File is too large. Maximum file size is ${maxFileSize / (1024 * 1024)} MB`);
        return;
      }
      setFile(selectedFile);
      setErrorMessage("");
      setUploadStatus("idle");
      setUploadProgress(0);
      if (delayUpload) {
        if (onFileSelected) {
          onFileSelected(selectedFile);
        }
      } else {
        initiateUpload();
      }
    }
  };
  const initiateUpload = async () => {
    var _a, _b, _c, _d;
    if (!file) return;
    setUploadStatus("initializing");
    setErrorMessage("");
    try {
      const totalChunks = Math.ceil(file.size / chunkSize);
      const response = await axios.post(
        "/dashboard/uploads/chunked/initialize",
        {
          storage,
          filename: file.name,
          mimetype: file.type,
          filesize: (file.size || 0) / 1024,
          filetype,
          total_chunks: totalChunks,
          course_id: courseId,
          course_section_id: sectionId
        },
        {
          timeout: 12e4
          // 2 minutes timeout for initialization request
        }
      );
      if (response.data.success) {
        setUploadId(response.data.upload_id);
        await uploadChunks(response.data.upload_id, totalChunks);
      } else {
        throw new Error(response.data.message || "Failed to initialize upload");
      }
    } catch (error) {
      setUploadStatus("error");
      setErrorMessage(((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || error.message || "Failed to initialize upload");
      if (onError) onError(((_d = (_c = error.response) == null ? void 0 : _c.data) == null ? void 0 : _d.message) || error.message || "Failed to initialize upload");
    }
  };
  const uploadChunks = async (uploadId2, totalChunks) => {
    var _a, _b, _c, _d;
    if (!file) return;
    setUploadStatus("uploading");
    abortControllerRef.current = new AbortController();
    const signal = abortControllerRef.current.signal;
    try {
      const uploadedParts = [];
      let uploadedChunks = 0;
      for (let chunkIndex = 0; chunkIndex < totalChunks && !signal.aborted; chunkIndex++) {
        const start = chunkIndex * chunkSize;
        const end = Math.min(start + chunkSize, file.size);
        const chunk = file.slice(start, end);
        const reader = new FileReader();
        const readChunk = new Promise((resolve, reject) => {
          reader.onloadend = () => {
            const base64data2 = reader.result;
            resolve(base64data2);
          };
          reader.onerror = () => reject(reader.error);
          reader.readAsDataURL(chunk);
        });
        const base64data = await readChunk;
        const response = await axios.post(
          `/dashboard/uploads/chunked/${uploadId2}/chunk`,
          {
            storage,
            chunk_data: base64data,
            part_number: chunkIndex + 1,
            filename: file.name,
            mimetype: file.type
          },
          {
            signal,
            timeout: 12e4,
            // 2 minute timeout for chunk uploads
            maxContentLength: Infinity,
            // Allow large content
            maxBodyLength: Infinity
            // Allow large body
          }
        );
        if (response.data.success) {
          uploadedChunks++;
          const progress = Math.round(uploadedChunks / totalChunks * 100);
          setUploadProgress(progress);
          uploadedParts.push({
            PartNumber: chunkIndex + 1,
            ETag: response.data.etag || ""
            // The server should return the ETag
          });
        } else {
          throw new Error(response.data.message || "Failed to upload chunk");
        }
      }
      if (signal.aborted) {
        return;
      }
      await completeUpload(uploadId2);
    } catch (error) {
      if (signal.aborted) {
        setUploadStatus("idle");
        setUploadProgress(0);
        return;
      }
      setUploadStatus("error");
      setErrorMessage(((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || error.message || "Failed to upload file chunks");
      if (onError) onError(((_d = (_c = error.response) == null ? void 0 : _c.data) == null ? void 0 : _d.message) || error.message || "Failed to upload file chunks");
    }
  };
  const completeUpload = async (uploadId2) => {
    var _a, _b, _c, _d;
    setUploadStatus("completing");
    try {
      const response = await axios.post(
        `/dashboard/uploads/chunked/${uploadId2}/complete`,
        {
          storage
        },
        {
          timeout: 12e4
          // 2 minute timeout for completion request
        }
      );
      if (response.data.success) {
        setUploadStatus("completed");
        const fileData = {
          file_path: response.data.file_path,
          file_url: response.data.file_url,
          signed_url: response.data.signed_url,
          mime_type: response.data.mime_type,
          file_name: response.data.file_name,
          file_size: response.data.file_size
        };
        onFileUploaded == null ? void 0 : onFileUploaded(fileData);
        setTimeout(() => {
          if (fileInputRef.current) fileInputRef.current.value = "";
          setFile(null);
          setUploadId(null);
          setUploadProgress(0);
          setUploadStatus("idle");
        }, 3e3);
      } else {
        throw new Error(response.data.message || "Failed to complete upload");
      }
    } catch (error) {
      setUploadStatus("error");
      setErrorMessage(((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || error.message || "Failed to complete upload");
      if (onError) onError(((_d = (_c = error.response) == null ? void 0 : _c.data) == null ? void 0 : _d.message) || error.message || "Failed to complete upload");
    }
  };
  const cancelUpload = async () => {
    if (uploadId && uploadStatus !== "idle" && uploadStatus !== "completed") {
      onCancelUpload == null ? void 0 : onCancelUpload();
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      try {
        await axios.delete(`/dashboard/uploads/chunked/${uploadId}/abort`);
      } catch (error) {
        toast.error("Error aborting upload:" + error);
      }
      setUploadStatus("idle");
      setUploadProgress(0);
      if (fileInputRef.current) fileInputRef.current.value = "";
      setFile(null);
    }
  };
  const renderStatus = () => {
    switch (uploadStatus) {
      case "initializing":
        return /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx(Loader2, { className: "mr-2 h-4 w-4 animate-spin" }),
          "Initializing upload..."
        ] });
      case "uploading":
        return /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx(Loader2, { className: "mr-2 h-4 w-4 animate-spin" }),
          "Uploading file chunks..."
        ] });
      case "completing":
        return /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx(Loader2, { className: "mr-2 h-4 w-4 animate-spin" }),
          "Finalizing upload..."
        ] });
      case "completed":
        return /* @__PURE__ */ jsxs("div", { className: "text-secondary-foreground flex items-center", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "mr-2 h-4 w-4" }),
          "Completed upload"
        ] });
      // case 'error':
      //    return (
      //       <div className="text-destructive flex items-center text-sm">
      //          <AlertCircle className="mr-2 h-4 w-4" />
      //          Error: {errorMessage}
      //       </div>
      //    );
      default:
        return null;
    }
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-sm", children: [
      /* @__PURE__ */ jsx(
        Input,
        {
          type: "file",
          name: "file",
          onChange: (e) => {
            var _a;
            handleFileChange(e);
            const file2 = (_a = e.target.files) == null ? void 0 : _a[0];
            if (file2) {
              setFile(file2);
              onFileSelected == null ? void 0 : onFileSelected(file2);
            }
          }
        }
      ),
      uploadStatus === "uploading" && file && /* @__PURE__ */ jsxs("div", { className: "absolute top-0 left-0 z-10 flex h-full w-full items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative h-full w-full overflow-hidden bg-gray-200", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "bg-secondary absolute top-0 left-0 h-full transition-all duration-300 ease-in-out",
              style: { width: `${uploadProgress}%` }
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex h-full items-center justify-between gap-2 px-2 text-xs", children: [
            /* @__PURE__ */ jsxs("span", { children: [
              uploadProgress,
              "%"
            ] }),
            renderStatus(),
            /* @__PURE__ */ jsxs("span", { className: "text-gray-800", children: [
              "Size: (",
              (file ? file.size / (1024 * 1024) : 0).toFixed(2),
              " MB)"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "bg-gray-200", children: /* @__PURE__ */ jsx(Button, { type: "button", variant: "destructive", onClick: cancelUpload, className: "text-xs", children: "Cancel" }) })
      ] })
    ] }),
    errorMessage && /* @__PURE__ */ jsx(InputError, { message: errorMessage })
  ] });
};
export {
  ChunkedUploaderInput as C
};
