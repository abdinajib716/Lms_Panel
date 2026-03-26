import { jsxs, jsx } from "react/jsx-runtime";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Card } from "./card-D8SB2yrw.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { R as RadioGroup, a as RadioGroupItem } from "./radio-group-sSS5HHUP.js";
import { usePage } from "@inertiajs/react";
import { format, parseISO } from "date-fns";
import jsPDF from "jspdf";
import { Award, Calendar, FileImage, FileText, Download } from "lucide-react";
import { useState, useRef } from "react";
import { toast } from "sonner";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
import "@radix-ui/react-radio-group";
const Certificate = () => {
  const { props } = usePage();
  const { translate } = props;
  const { frontend } = translate;
  const courseName = props.course.title;
  const studentName = props.auth.user.name;
  const completionDate = format(parseISO(props.watchHistory.completion_date), "MMM d, yyyy");
  const [downloadFormat, setDownloadFormat] = useState("png");
  const certificateRef = useRef(null);
  const dimensions = { width: 900, height: 600 };
  const handleDownloadCertificate = () => {
    if (!certificateRef.current) return;
    if (downloadFormat === "pdf") {
      downloadAsPDF();
    } else {
      downloadAsPNG();
    }
  };
  const downloadAsPNG = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;
    drawCertificate(ctx, dimensions);
    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${studentName}_${courseName}_Certificate.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      toast.success(frontend.png_certificate_saved);
    }, "image/png");
  };
  const downloadAsPDF = () => {
    const isLandscape = dimensions.width > dimensions.height;
    const pdf = new jsPDF({
      orientation: isLandscape ? "landscape" : "portrait",
      unit: "px",
      format: [dimensions.width, dimensions.height]
    });
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;
    drawCertificate(ctx, dimensions);
    const imgData = canvas.toDataURL("image/png");
    pdf.addImage(imgData, "PNG", 0, 0, dimensions.width, dimensions.height);
    pdf.save(`${studentName}_${courseName}_Certificate.pdf`);
    toast.success(frontend.pdf_certificate_saved);
  };
  const wrapText = (ctx, text, x, y, maxWidth, lineHeight) => {
    const words = text.split(" ");
    let line = "";
    let testLine = "";
    const lines = [];
    for (let n = 0; n < words.length; n++) {
      testLine += `${words[n]} `;
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        lines.push({ text: line.trim(), width: ctx.measureText(line).width });
        testLine = `${words[n]} `;
        line = `${words[n]} `;
      } else {
        line = testLine;
      }
    }
    lines.push({ text: line.trim(), width: ctx.measureText(line).width });
    let currentY = y;
    lines.forEach((lineObj) => {
      ctx.fillText(lineObj.text, x, currentY);
      currentY += lineHeight;
    });
    return currentY;
  };
  const drawCertificate = (ctx, dimensions2) => {
    const gradient = ctx.createLinearGradient(0, 0, dimensions2.width, dimensions2.height);
    gradient.addColorStop(0, "#dbeafe");
    gradient.addColorStop(1, "#e0e7ff");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, dimensions2.width, dimensions2.height);
    ctx.strokeStyle = "#f59e0b";
    ctx.lineWidth = 8;
    ctx.strokeRect(20, 20, dimensions2.width - 40, dimensions2.height - 40);
    ctx.strokeStyle = "#3730a3";
    ctx.lineWidth = 2;
    ctx.strokeRect(40, 40, dimensions2.width - 80, dimensions2.height - 80);
    ctx.fillStyle = "#1f2937";
    ctx.textAlign = "center";
    ctx.font = "bold 42px serif";
    ctx.fillText(frontend.certificate_of_completion, dimensions2.width / 2, 120);
    ctx.strokeStyle = "#f59e0b";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(dimensions2.width / 2 - 150, 140);
    ctx.lineTo(dimensions2.width / 2 + 150, 140);
    ctx.stroke();
    ctx.font = "22px serif";
    ctx.fillStyle = "#4b5563";
    ctx.textAlign = "center";
    const descriptionText = frontend.certificate_description;
    const lineHeight = 30;
    const maxWidth = dimensions2.width - 100;
    wrapText(ctx, descriptionText, dimensions2.width / 2, 190, maxWidth, lineHeight);
    ctx.font = "bold 36px serif";
    ctx.fillStyle = "#3730a3";
    ctx.fillText(studentName, dimensions2.width / 2, 310);
    const nameWidth = ctx.measureText(studentName).width;
    ctx.strokeStyle = "#f59e0b";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo((dimensions2.width - nameWidth) / 2 - 20, 330);
    ctx.lineTo((dimensions2.width + nameWidth) / 2 + 20, 330);
    ctx.stroke();
    ctx.font = "22px serif";
    ctx.fillStyle = "#4b5563";
    ctx.fillText(frontend.has_successfully_completed, dimensions2.width / 2, 380);
    ctx.font = "bold 28px serif";
    ctx.fillStyle = "#3730a3";
    ctx.fillText(courseName, dimensions2.width / 2, 430);
    ctx.font = "18px serif";
    ctx.fillStyle = "#6b7280";
    ctx.fillText(frontend.completed_on.replace(":date", completionDate), dimensions2.width / 2, 490);
    ctx.font = "16px serif";
    ctx.fillStyle = "#9ca3af";
    ctx.fillText(frontend.authorized_certificate, dimensions2.width / 2, dimensions2.height - 60);
  };
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[800px] space-y-8 pt-10 pb-16", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "mb-4 text-4xl font-bold text-gray-800", children: frontend.course_certificate_download }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg", children: frontend.download_official_certificate })
    ] }),
    /* @__PURE__ */ jsxs(Card, { className: "space-y-7 p-6", children: [
      /* @__PURE__ */ jsxs(
        "div",
        {
          ref: certificateRef,
          className: `relative flex flex-col justify-center rounded-lg border-4 border-amber-400 bg-gradient-to-br from-blue-50 to-indigo-100 p-6 text-center`,
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-4 rounded border-2 border-indigo-700" }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
              /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
                /* @__PURE__ */ jsx(Award, { className: "mx-auto mb-3 h-12 w-12 text-amber-600" }),
                /* @__PURE__ */ jsx("h2", { className: "mb-2 font-serif text-2xl font-bold text-gray-800", children: frontend.certificate_of_completion }),
                /* @__PURE__ */ jsx("div", { className: "mx-auto h-0.5 w-32 bg-amber-400" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-gray-700", children: [
                /* @__PURE__ */ jsx("p", { className: "font-serif text-lg", children: frontend.certificate_description }),
                /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsx("p", { className: "mx-8 pb-2 font-serif text-2xl font-bold text-indigo-800", children: studentName || "Student Name" }),
                  /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-1/2 h-0.5 w-48 -translate-x-1/2 transform bg-amber-400" })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "font-serif text-lg", children: frontend.has_successfully_completed }),
                /* @__PURE__ */ jsx("p", { className: "font-serif text-xl font-semibold text-indigo-700", children: courseName || "Course Name" }),
                /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center justify-center gap-2", children: [
                  /* @__PURE__ */ jsx(Calendar, { className: "text-muted-foreground h-4 w-4" }),
                  /* @__PURE__ */ jsx("p", { className: "text-muted-foreground font-serif text-sm", children: frontend.completed_on.replace(":date", completionDate || "Date") })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mt-6 border-t border-amber-400 pt-4", children: /* @__PURE__ */ jsx("p", { className: "font-serif text-sm text-gray-500", children: frontend.authorized_certificate }) })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs(RadioGroup, { value: downloadFormat, onValueChange: setDownloadFormat, className: "flex justify-center space-x-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsx(RadioGroupItem, { className: "cursor-pointer", value: "png", id: "png" }),
            /* @__PURE__ */ jsxs(Label, { htmlFor: "png", className: "flex cursor-pointer items-center gap-2", children: [
              /* @__PURE__ */ jsx(FileImage, { className: "h-4 w-4" }),
              "PNG Image"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsx(RadioGroupItem, { className: "cursor-pointer", value: "pdf", id: "pdf" }),
            /* @__PURE__ */ jsxs(Label, { htmlFor: "pdf", className: "flex cursor-pointer items-center gap-2", children: [
              /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4" }),
              "PDF Document"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "w-full", onClick: handleDownloadCertificate, children: [
          /* @__PURE__ */ jsx(Download, { className: "mr-2 h-4 w-4" }),
          "Download as ",
          downloadFormat.toUpperCase()
        ] })
      ] })
    ] })
  ] });
};
export {
  Certificate as default
};
