import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { usePage } from "@inertiajs/react";
import { AlertCircle, ExternalLink, Download } from "lucide-react";
const DocumentViewer = ({ src, fileName, className, ...props }) => {
  const { props: pageProps } = usePage();
  const { translate } = pageProps;
  const { frontend } = translate;
  const documentInfo = useMemo(() => {
    const getFileExtension = (url) => {
      var _a;
      const urlWithoutQuery = url.split("?")[0];
      const extension2 = ((_a = urlWithoutQuery.split(".").pop()) == null ? void 0 : _a.toLowerCase()) || "";
      return extension2;
    };
    const getDocumentType = (extension2) => {
      const pdfFormats = ["pdf"];
      const officeFormats = ["doc", "docx", "xls", "xlsx", "ppt", "pptx", "odt", "ods", "odp"];
      const imageFormats = ["jpg", "jpeg", "png", "gif", "bmp", "webp", "svg"];
      const textFormats = ["txt", "rtf", "csv"];
      if (pdfFormats.includes(extension2)) return "pdf";
      if (officeFormats.includes(extension2)) return "office";
      if (imageFormats.includes(extension2)) return "image";
      if (textFormats.includes(extension2)) return "text";
      return "unsupported";
    };
    const extension = getFileExtension(src);
    const type = getDocumentType(extension);
    return { extension, type };
  }, [src]);
  const renderDocument = () => {
    const baseClassName = "h-full max-h-[calc(100vh-60px)] min-h-[80vh] w-full";
    switch (documentInfo.type) {
      case "pdf":
        return /* @__PURE__ */ jsx(
          "iframe",
          {
            src,
            width: "100%",
            height: "100%",
            allowFullScreen: true,
            title: frontend.pdf_document,
            className: baseClassName
          }
        );
      case "office": {
        const officeViewerUrl = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(src)}`;
        return /* @__PURE__ */ jsxs("div", { className: "relative h-full", children: [
          /* @__PURE__ */ jsx(
            "iframe",
            {
              src: officeViewerUrl,
              width: "100%",
              height: "100%",
              allowFullScreen: true,
              title: `${documentInfo.extension.toUpperCase()} Document`,
              className: baseClassName,
              onError: () => {
                const googleViewerUrl = `https://docs.google.com/gview?url=${encodeURIComponent(src)}&embedded=true`;
                const iframe = document.querySelector('iframe[src*="officeapps.live.com"]');
                if (iframe) {
                  iframe.src = googleViewerUrl;
                }
              }
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "absolute top-2 right-2 flex gap-2", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: src,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "bg-white/90 hover:bg-white p-2 rounded-md shadow-sm transition-colors",
                title: frontend.open_in_new_tab,
                children: /* @__PURE__ */ jsx(ExternalLink, { className: "w-4 h-4 text-gray-600" })
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: src,
                download: fileName,
                className: "bg-white/90 hover:bg-white p-2 rounded-md shadow-sm transition-colors",
                title: frontend.download_document,
                children: /* @__PURE__ */ jsx(Download, { className: "w-4 h-4 text-gray-600" })
              }
            )
          ] })
        ] });
      }
      case "image":
        return /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center h-full bg-gray-50", children: /* @__PURE__ */ jsx(
          "img",
          {
            src,
            alt: fileName || frontend.document,
            className: "max-w-full max-h-full object-contain"
          }
        ) });
      case "text":
        return /* @__PURE__ */ jsx(
          "iframe",
          {
            src,
            width: "100%",
            height: "100%",
            title: frontend.text_document,
            className: baseClassName
          }
        );
      default:
        return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center h-full bg-gray-50 text-gray-600", children: [
          /* @__PURE__ */ jsx(AlertCircle, { className: "w-16 h-16 mb-4 text-gray-400" }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium mb-2", children: frontend.unsupported_document_format }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-center mb-6 max-w-md", children: frontend.document_format_cannot_be_previewed.replace("{extension}", documentInfo.extension) }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: src,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",
                children: [
                  /* @__PURE__ */ jsx(ExternalLink, { className: "w-4 h-4" }),
                  frontend.open_in_new_tab_button
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: src,
                download: fileName,
                className: "inline-flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors",
                children: [
                  /* @__PURE__ */ jsx(Download, { className: "w-4 h-4" }),
                  frontend.download
                ]
              }
            )
          ] })
        ] });
    }
  };
  return /* @__PURE__ */ jsx("div", { className: `h-full ${className || ""}`, ...props, children: renderDocument() });
};
export {
  DocumentViewer as default
};
