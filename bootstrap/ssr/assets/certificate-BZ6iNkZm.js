import { jsxs, jsx } from "react/jsx-runtime";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Card, b as CardContent } from "./card-D8SB2yrw.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { R as RadioGroup, a as RadioGroupItem } from "./radio-group-sSS5HHUP.js";
import jsPDF from "jspdf";
import { Award, Calendar, FileImage, FileText, Download, ClipboardList, Lock } from "lucide-react";
import { useState, useRef } from "react";
import { toast } from "sonner";
import { A as Alert, a as AlertTitle, b as AlertDescription } from "./alert-BK2pCJOe.js";
import { c as Tabs, T as TabsList, a as TabsTrigger, b as TabsContent } from "./tabs-BOXC0x8t.js";
import { usePage } from "@inertiajs/react";
import { format, parseISO } from "date-fns";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
import "@radix-ui/react-radio-group";
import "@radix-ui/react-tabs";
const DynamicCertificate = ({ template, courseName, studentName, completionDate }) => {
  const [downloadFormat, setDownloadFormat] = useState("png");
  const certificateRef = useRef(null);
  const dimensions = { width: 900, height: 600 };
  const { template_data } = template;
  const handleDownloadCertificate = async () => {
    if (!certificateRef.current) return;
    if (downloadFormat === "pdf") {
      await downloadAsPDF();
    } else {
      await downloadAsPNG();
    }
  };
  const loadImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  };
  const downloadAsPNG = async () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;
    let logoImage = null;
    if (template.logo_path) {
      try {
        logoImage = await loadImage(template.logo_path);
      } catch (error) {
        console.error("Failed to load logo:", error);
      }
    }
    await drawCertificate(ctx, dimensions, logoImage);
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
      toast.success("Certificate saved as PNG!");
    }, "image/png");
  };
  const downloadAsPDF = async () => {
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
    let logoImage = null;
    if (template.logo_path) {
      try {
        logoImage = await loadImage(template.logo_path);
      } catch (error) {
        console.error("Failed to load logo:", error);
      }
    }
    await drawCertificate(ctx, dimensions, logoImage);
    const imgData = canvas.toDataURL("image/png");
    pdf.addImage(imgData, "PNG", 0, 0, dimensions.width, dimensions.height);
    pdf.save(`${studentName}_${courseName}_Certificate.pdf`);
    toast.success("Certificate saved as PDF!");
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
  const drawCertificate = async (ctx, dimensions2, logoImage = null) => {
    ctx.fillStyle = template_data.backgroundColor;
    ctx.fillRect(0, 0, dimensions2.width, dimensions2.height);
    ctx.strokeStyle = template_data.borderColor;
    ctx.lineWidth = 8;
    ctx.strokeRect(20, 20, dimensions2.width - 40, dimensions2.height - 40);
    ctx.strokeStyle = template_data.primaryColor;
    ctx.lineWidth = 2;
    ctx.strokeRect(40, 40, dimensions2.width - 80, dimensions2.height - 80);
    ctx.textAlign = "center";
    let currentY = 100;
    if (logoImage) {
      const logoSize = 80;
      const logoX = (dimensions2.width - logoSize) / 2;
      const logoY = 60;
      ctx.drawImage(logoImage, logoX, logoY, logoSize, logoSize);
      currentY = logoY + logoSize + 30;
    }
    ctx.font = `bold 42px ${template_data.fontFamily}`;
    ctx.fillStyle = template_data.primaryColor;
    ctx.fillText(template_data.titleText, dimensions2.width / 2, currentY);
    currentY += 20;
    ctx.strokeStyle = template_data.borderColor;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(dimensions2.width / 2 - 150, currentY);
    ctx.lineTo(dimensions2.width / 2 + 150, currentY);
    ctx.stroke();
    currentY += 50;
    ctx.font = `22px ${template_data.fontFamily}`;
    ctx.fillStyle = template_data.secondaryColor;
    currentY = wrapText(ctx, template_data.descriptionText, dimensions2.width / 2, currentY, dimensions2.width - 100, 30);
    currentY += 50;
    ctx.font = `bold 36px ${template_data.fontFamily}`;
    ctx.fillStyle = template_data.primaryColor;
    ctx.fillText(studentName, dimensions2.width / 2, currentY);
    const nameWidth = ctx.measureText(studentName).width;
    ctx.strokeStyle = template_data.borderColor;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo((dimensions2.width - nameWidth) / 2 - 20, currentY + 10);
    ctx.lineTo((dimensions2.width + nameWidth) / 2 + 20, currentY + 10);
    ctx.stroke();
    currentY += 60;
    ctx.font = `22px ${template_data.fontFamily}`;
    ctx.fillStyle = template_data.secondaryColor;
    ctx.fillText(template_data.completionText, dimensions2.width / 2, currentY);
    currentY += 50;
    ctx.font = `bold 28px ${template_data.fontFamily}`;
    ctx.fillStyle = template_data.primaryColor;
    ctx.fillText(courseName, dimensions2.width / 2, currentY);
    currentY += 60;
    ctx.font = `18px ${template_data.fontFamily}`;
    ctx.fillStyle = template_data.secondaryColor;
    ctx.fillText(`Completed on: ${completionDate}`, dimensions2.width / 2, currentY);
    currentY += 60;
    ctx.font = `16px ${template_data.fontFamily}`;
    ctx.fillStyle = template_data.secondaryColor;
    ctx.fillText(template_data.footerText, dimensions2.width / 2, dimensions2.height - 60);
  };
  return /* @__PURE__ */ jsxs(Card, { className: "mx-auto max-w-[800px] space-y-7 p-6", children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        ref: certificateRef,
        className: "relative flex flex-col justify-center rounded-lg border-4 p-8 text-center",
        style: {
          backgroundColor: template_data.backgroundColor,
          borderColor: template_data.borderColor,
          fontFamily: template_data.fontFamily
        },
        children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute inset-4 rounded border-2",
              style: {
                borderColor: template_data.primaryColor
              }
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
            template.logo_path ? /* @__PURE__ */ jsx("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center", children: /* @__PURE__ */ jsx("img", { src: template.logo_path, alt: "Logo", className: "h-full w-full object-contain" }) }) : /* @__PURE__ */ jsx(
              Award,
              {
                className: "mx-auto mb-3 h-12 w-12",
                style: {
                  color: template_data.borderColor
                }
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
              /* @__PURE__ */ jsx(
                "h2",
                {
                  className: "mb-2 font-serif text-2xl font-bold",
                  style: {
                    color: template_data.primaryColor
                  },
                  children: template_data.titleText
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "mx-auto h-0.5 w-32",
                  style: {
                    backgroundColor: template_data.borderColor
                  }
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: "font-serif text-lg",
                  style: {
                    color: template_data.secondaryColor
                  },
                  children: template_data.descriptionText
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsx(
                  "p",
                  {
                    className: "mx-8 pb-2 font-serif text-2xl font-bold",
                    style: {
                      color: template_data.primaryColor
                    },
                    children: studentName
                  }
                ),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "absolute bottom-0 left-1/2 h-0.5 w-48 -translate-x-1/2 transform",
                    style: {
                      backgroundColor: template_data.borderColor
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: "font-serif text-lg",
                  style: {
                    color: template_data.secondaryColor
                  },
                  children: template_data.completionText
                }
              ),
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: "font-serif text-xl font-semibold",
                  style: {
                    color: template_data.primaryColor
                  },
                  children: courseName
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center justify-center gap-2", children: [
                /* @__PURE__ */ jsx(
                  Calendar,
                  {
                    className: "h-4 w-4",
                    style: {
                      color: template_data.secondaryColor
                    }
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "p",
                  {
                    className: "text-muted-foreground font-serif text-sm",
                    style: {
                      color: template_data.secondaryColor
                    },
                    children: [
                      "Completed on: ",
                      completionDate
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "mt-6 border-t pt-4",
                style: {
                  borderColor: template_data.borderColor
                },
                children: /* @__PURE__ */ jsx(
                  "p",
                  {
                    className: "font-serif text-sm",
                    style: {
                      color: template_data.secondaryColor
                    },
                    children: template_data.footerText
                  }
                )
              }
            )
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
  ] });
};
const DynamicMarksheet = ({ template, courseName, studentName, completionDate, studentMarks }) => {
  const [downloadFormat, setDownloadFormat] = useState("png");
  const marksheetRef = useRef(null);
  const dimensions = { width: 700, height: 900 };
  const { template_data } = template;
  const handleDownloadMarksheet = async () => {
    if (!marksheetRef.current) return;
    if (downloadFormat === "pdf") {
      await downloadAsPDF();
    } else {
      await downloadAsPNG();
    }
  };
  const loadImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  };
  const downloadAsPNG = async () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;
    let logoImage = null;
    if (template.logo_path) {
      try {
        logoImage = await loadImage(template.logo_path);
      } catch (error) {
        console.error("Failed to load logo:", error);
      }
    }
    await drawMarksheet(ctx, dimensions, logoImage);
    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${studentName}_${courseName}_Marksheet.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      toast.success("Marksheet saved as PNG!");
    }, "image/png");
  };
  const downloadAsPDF = async () => {
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
    let logoImage = null;
    if (template.logo_path) {
      try {
        logoImage = await loadImage(template.logo_path);
      } catch (error) {
        console.error("Failed to load logo:", error);
      }
    }
    await drawMarksheet(ctx, dimensions, logoImage);
    const imgData = canvas.toDataURL("image/png");
    pdf.addImage(imgData, "PNG", 0, 0, dimensions.width, dimensions.height);
    pdf.save(`${studentName}_${courseName}_Marksheet.pdf`);
    toast.success("Marksheet saved as PDF!");
  };
  const drawMarksheet = async (ctx, dimensions2, logoImage = null) => {
    ctx.fillStyle = template_data.backgroundColor;
    ctx.fillRect(0, 0, dimensions2.width, dimensions2.height);
    ctx.strokeStyle = template_data.borderColor;
    ctx.lineWidth = 6;
    ctx.strokeRect(15, 15, dimensions2.width - 30, dimensions2.height - 30);
    const leftMargin = 80;
    const rightMargin = dimensions2.width - 80;
    const middleX = dimensions2.width / 2;
    let currentY = 60;
    const logoSize = 60;
    const logoX = leftMargin;
    const textStartX = leftMargin + logoSize + 20;
    if (logoImage) {
      ctx.drawImage(logoImage, logoX, currentY, logoSize, logoSize);
    }
    ctx.textAlign = "left";
    ctx.font = `bold 28px ${template_data.fontFamily}`;
    ctx.fillStyle = template_data.primaryColor;
    ctx.fillText(template_data.headerText, textStartX, currentY + 25);
    ctx.font = `18px ${template_data.fontFamily}`;
    ctx.fillStyle = template_data.secondaryColor;
    ctx.fillText(template_data.institutionName, textStartX, currentY + 50);
    currentY += logoSize + 30;
    ctx.strokeStyle = template_data.borderColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(leftMargin, currentY);
    ctx.lineTo(rightMargin, currentY);
    ctx.stroke();
    currentY += 40;
    const col1X = leftMargin;
    const col2X = middleX + 20;
    const labelOffset = 25;
    ctx.font = `16px ${template_data.fontFamily}`;
    ctx.fillStyle = template_data.secondaryColor;
    ctx.fillText("Student Name", col1X, currentY);
    ctx.font = `bold 20px ${template_data.fontFamily}`;
    ctx.fillStyle = template_data.primaryColor;
    ctx.fillText(studentName, col1X, currentY + labelOffset);
    ctx.font = `16px ${template_data.fontFamily}`;
    ctx.fillStyle = template_data.secondaryColor;
    ctx.fillText("Course", col2X, currentY);
    ctx.font = `bold 20px ${template_data.fontFamily}`;
    ctx.fillStyle = template_data.primaryColor;
    const maxCourseWidth = rightMargin - col2X - 10;
    const courseMetrics = ctx.measureText(courseName);
    if (courseMetrics.width > maxCourseWidth) {
      const words = courseName.split(" ");
      let line = "";
      let lineY = currentY + labelOffset;
      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + " ";
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxCourseWidth && n > 0) {
          ctx.fillText(line, col2X, lineY);
          line = words[n] + " ";
          lineY += 25;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line, col2X, lineY);
    } else {
      ctx.fillText(courseName, col2X, currentY + labelOffset);
    }
    currentY += 92;
    ctx.font = `16px ${template_data.fontFamily}`;
    ctx.fillStyle = template_data.secondaryColor;
    ctx.fillText("Completion Date", col1X, currentY);
    ctx.font = `18px ${template_data.fontFamily}`;
    ctx.fillStyle = template_data.primaryColor;
    ctx.fillText(completionDate, col1X, currentY + labelOffset);
    ctx.font = `16px ${template_data.fontFamily}`;
    ctx.fillStyle = template_data.secondaryColor;
    ctx.fillText("Overall Grade", col2X, currentY);
    ctx.font = `bold 20px ${template_data.fontFamily}`;
    ctx.fillStyle = template_data.primaryColor;
    ctx.fillText(`${studentMarks.overall.grade} (${studentMarks.overall.percentage}%)`, col2X, currentY + labelOffset);
    currentY += 80;
    ctx.textAlign = "left";
    ctx.font = `bold 22px ${template_data.fontFamily}`;
    ctx.fillStyle = template_data.primaryColor;
    ctx.fillText("Exam Type", leftMargin, currentY);
    currentY += 35;
    const tableWidth = rightMargin - leftMargin;
    ctx.fillStyle = `${template_data.primaryColor}30`;
    ctx.fillRect(leftMargin, currentY, tableWidth, 45);
    ctx.font = `bold 18px ${template_data.fontFamily}`;
    ctx.fillStyle = template_data.primaryColor;
    ctx.fillText("Exam Type", leftMargin + 15, currentY + 28);
    ctx.textAlign = "right";
    ctx.fillText("Total Marks", rightMargin - 15, currentY + 28);
    ctx.strokeStyle = template_data.borderColor;
    ctx.lineWidth = 2;
    ctx.strokeRect(leftMargin, currentY, tableWidth, 45);
    currentY += 45;
    ctx.fillStyle = template_data.backgroundColor;
    ctx.fillRect(leftMargin, currentY, tableWidth, 45);
    ctx.textAlign = "left";
    ctx.font = `18px ${template_data.fontFamily}`;
    ctx.fillStyle = template_data.secondaryColor;
    ctx.fillText("Assignment", leftMargin + 15, currentY + 28);
    ctx.textAlign = "right";
    ctx.font = `bold 18px ${template_data.fontFamily}`;
    ctx.fillStyle = template_data.primaryColor;
    ctx.fillText(`${studentMarks.assignment.obtained}/${studentMarks.assignment.total}`, rightMargin - 15, currentY + 28);
    ctx.strokeStyle = template_data.borderColor;
    ctx.lineWidth = 1;
    ctx.strokeRect(leftMargin, currentY, tableWidth, 45);
    currentY += 45;
    ctx.fillStyle = template_data.backgroundColor;
    ctx.fillRect(leftMargin, currentY, tableWidth, 45);
    ctx.textAlign = "left";
    ctx.font = `18px ${template_data.fontFamily}`;
    ctx.fillStyle = template_data.secondaryColor;
    ctx.fillText("Quiz", leftMargin + 15, currentY + 28);
    ctx.textAlign = "right";
    ctx.font = `bold 18px ${template_data.fontFamily}`;
    ctx.fillStyle = template_data.primaryColor;
    ctx.fillText(`${studentMarks.quiz.obtained}/${studentMarks.quiz.total}`, rightMargin - 15, currentY + 28);
    ctx.strokeStyle = template_data.borderColor;
    ctx.lineWidth = 1;
    ctx.strokeRect(leftMargin, currentY, tableWidth, 45);
    currentY += 70;
    ctx.strokeStyle = template_data.borderColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(leftMargin, currentY);
    ctx.lineTo(rightMargin, currentY);
    ctx.stroke();
    currentY += 30;
    ctx.textAlign = "center";
    ctx.font = `16px ${template_data.fontFamily}`;
    ctx.fillStyle = template_data.secondaryColor;
    ctx.fillText(template_data.footerText, dimensions2.width / 2, currentY);
  };
  return /* @__PURE__ */ jsxs(Card, { className: "mx-auto max-w-[800px] space-y-7 p-6", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        ref: marksheetRef,
        className: "relative rounded-lg border-4 p-8",
        style: {
          backgroundColor: template_data.backgroundColor,
          borderColor: template_data.borderColor,
          fontFamily: template_data.fontFamily
        },
        children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "mb-6 border-b-2 pb-4",
              style: {
                borderColor: template_data.borderColor
              },
              children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                template.logo_path ? /* @__PURE__ */ jsx("div", { className: "h-16 w-16", children: /* @__PURE__ */ jsx("img", { src: template.logo_path, alt: "Logo", className: "h-full w-full object-contain" }) }) : /* @__PURE__ */ jsx(
                  ClipboardList,
                  {
                    className: "h-12 w-12",
                    style: {
                      color: template_data.primaryColor
                    }
                  }
                ),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx(
                    "h2",
                    {
                      className: "text-2xl font-bold",
                      style: {
                        color: template_data.primaryColor,
                        fontFamily: template_data.fontFamily
                      },
                      children: template_data.headerText
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "p",
                    {
                      className: "text-lg",
                      style: {
                        color: template_data.secondaryColor,
                        fontFamily: template_data.fontFamily
                      },
                      children: template_data.institutionName
                    }
                  )
                ] })
              ] }) })
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "mb-6 grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: "text-sm",
                  style: {
                    color: template_data.secondaryColor
                  },
                  children: "Student Name"
                }
              ),
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: "text-lg font-semibold",
                  style: {
                    color: template_data.primaryColor
                  },
                  children: studentName
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: "text-sm",
                  style: {
                    color: template_data.secondaryColor
                  },
                  children: "Course"
                }
              ),
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: "text-lg font-semibold",
                  style: {
                    color: template_data.primaryColor
                  },
                  children: courseName
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: "text-sm",
                  style: {
                    color: template_data.secondaryColor
                  },
                  children: "Completion Date"
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(
                  Calendar,
                  {
                    className: "h-4 w-4",
                    style: {
                      color: template_data.secondaryColor
                    }
                  }
                ),
                /* @__PURE__ */ jsx(
                  "p",
                  {
                    className: "font-medium",
                    style: {
                      color: template_data.primaryColor
                    },
                    children: completionDate
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: "text-sm",
                  style: {
                    color: template_data.secondaryColor
                  },
                  children: "Overall Grade"
                }
              ),
              /* @__PURE__ */ jsxs(
                "p",
                {
                  className: "text-2xl font-bold",
                  style: {
                    color: template_data.primaryColor
                  },
                  children: [
                    studentMarks.overall.grade,
                    " (",
                    studentMarks.overall.percentage,
                    "%)"
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              "h3",
              {
                className: "mb-3 text-lg font-semibold",
                style: {
                  color: template_data.primaryColor
                },
                children: "Exam Type"
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "overflow-hidden rounded-lg border",
                style: {
                  borderColor: template_data.borderColor
                },
                children: /* @__PURE__ */ jsxs("table", { className: "w-full", children: [
                  /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs(
                    "tr",
                    {
                      style: {
                        backgroundColor: `${template_data.primaryColor}20`
                      },
                      children: [
                        /* @__PURE__ */ jsx(
                          "th",
                          {
                            className: "border-b p-3 text-left font-semibold",
                            style: {
                              color: template_data.primaryColor,
                              borderColor: template_data.borderColor
                            },
                            children: "Exam Type"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "th",
                          {
                            className: "border-b p-3 text-right font-semibold",
                            style: {
                              color: template_data.primaryColor,
                              borderColor: template_data.borderColor
                            },
                            children: "Total Marks"
                          }
                        )
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxs("tbody", { children: [
                    /* @__PURE__ */ jsxs(
                      "tr",
                      {
                        className: "border-b",
                        style: {
                          borderColor: template_data.borderColor
                        },
                        children: [
                          /* @__PURE__ */ jsx(
                            "td",
                            {
                              className: "p-3",
                              style: {
                                color: template_data.secondaryColor
                              },
                              children: "Assignment"
                            }
                          ),
                          /* @__PURE__ */ jsxs(
                            "td",
                            {
                              className: "p-3 text-right font-medium",
                              style: {
                                color: template_data.primaryColor
                              },
                              children: [
                                studentMarks.assignment.obtained,
                                "/",
                                studentMarks.assignment.total
                              ]
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs("tr", { children: [
                      /* @__PURE__ */ jsx(
                        "td",
                        {
                          className: "p-3",
                          style: {
                            color: template_data.secondaryColor
                          },
                          children: "Quiz"
                        }
                      ),
                      /* @__PURE__ */ jsxs(
                        "td",
                        {
                          className: "p-3 text-right font-medium",
                          style: {
                            color: template_data.primaryColor
                          },
                          children: [
                            studentMarks.quiz.obtained,
                            "/",
                            studentMarks.quiz.total
                          ]
                        }
                      )
                    ] })
                  ] })
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "mt-8 border-t-2 pt-4 text-center",
              style: {
                borderColor: template_data.borderColor
              },
              children: /* @__PURE__ */ jsx(
                "p",
                {
                  className: "text-sm",
                  style: {
                    color: template_data.secondaryColor,
                    fontFamily: template_data.fontFamily
                  },
                  children: template_data.footerText
                }
              )
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxs(RadioGroup, { value: downloadFormat, onValueChange: setDownloadFormat, className: "flex justify-center space-x-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(RadioGroupItem, { className: "cursor-pointer", value: "png", id: "marksheet-png" }),
          /* @__PURE__ */ jsxs(Label, { htmlFor: "marksheet-png", className: "flex cursor-pointer items-center gap-2", children: [
            /* @__PURE__ */ jsx(FileImage, { className: "h-4 w-4" }),
            "PNG Image"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(RadioGroupItem, { className: "cursor-pointer", value: "pdf", id: "marksheet-pdf" }),
          /* @__PURE__ */ jsxs(Label, { htmlFor: "marksheet-pdf", className: "flex cursor-pointer items-center gap-2", children: [
            /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4" }),
            "PDF Document"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "w-full", onClick: handleDownloadMarksheet, children: [
        /* @__PURE__ */ jsx(Download, { className: "mr-2 h-4 w-4" }),
        "Download as ",
        downloadFormat.toUpperCase()
      ] })
    ] })
  ] });
};
const Certificate = () => {
  const { props } = usePage();
  const { course, watchHistory, completion, certificateTemplate, marksheetTemplate, studentMarks, auth } = props;
  const isCompleted = (watchHistory == null ? void 0 : watchHistory.completion_date) || (completion == null ? void 0 : completion.completion) === 100;
  if (!isCompleted) {
    return /* @__PURE__ */ jsxs(Alert, { children: [
      /* @__PURE__ */ jsx(Lock, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsx(AlertTitle, { children: "Certificate & Marksheet Locked" }),
      /* @__PURE__ */ jsxs(AlertDescription, { children: [
        "Complete all course modules to unlock your certificate and marksheet. Your current progress: ",
        (completion == null ? void 0 : completion.completion) || 0,
        "%"
      ] })
    ] });
  }
  const completionDate = (watchHistory == null ? void 0 : watchHistory.completion_date) ? format(parseISO(watchHistory.completion_date), "MMMM d, yyyy") : format(/* @__PURE__ */ new Date(), "MMMM d, yyyy");
  if (!certificateTemplate && !marksheetTemplate) {
    return /* @__PURE__ */ jsx("div", { className: "p-6", children: /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "flex flex-col items-center justify-center p-12 text-center", children: [
      /* @__PURE__ */ jsx(Award, { className: "text-muted-foreground mb-4 h-16 w-16" }),
      /* @__PURE__ */ jsx("h3", { className: "mb-2 text-xl font-semibold", children: "No Certificate or Marksheet Available" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "The instructor hasn't set up certificates or marksheets for this course yet." })
    ] }) }) });
  }
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(Tabs, { defaultValue: "certificate", className: "w-full", children: [
    /* @__PURE__ */ jsxs(TabsList, { className: "mb-6 grid h-11 w-full grid-cols-2", children: [
      /* @__PURE__ */ jsxs(TabsTrigger, { value: "certificate", className: "flex h-9 cursor-pointer items-center gap-2", children: [
        /* @__PURE__ */ jsx(Award, { className: "h-4 w-4" }),
        "Certificate"
      ] }),
      /* @__PURE__ */ jsxs(TabsTrigger, { value: "marksheet", className: "flex h-9 cursor-pointer items-center gap-2", children: [
        /* @__PURE__ */ jsx(ClipboardList, { className: "h-4 w-4" }),
        "Marksheet"
      ] })
    ] }),
    /* @__PURE__ */ jsx(TabsContent, { value: "certificate", children: !certificateTemplate ? /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "flex flex-col items-center justify-center p-12 text-center", children: [
      /* @__PURE__ */ jsx(Award, { className: "text-muted-foreground mb-4 h-16 w-16" }),
      /* @__PURE__ */ jsx("h3", { className: "mb-2 text-xl font-semibold", children: "No Certificate Available" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "The instructor hasn't set up certificates for this course yet." })
    ] }) }) : /* @__PURE__ */ jsx(
      DynamicCertificate,
      {
        template: certificateTemplate,
        courseName: course.title,
        studentName: auth.user.name,
        completionDate
      }
    ) }),
    /* @__PURE__ */ jsx(TabsContent, { value: "marksheet", children: !marksheetTemplate || !studentMarks ? /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "flex flex-col items-center justify-center p-12 text-center", children: [
      /* @__PURE__ */ jsx(ClipboardList, { className: "text-muted-foreground mb-4 h-16 w-16" }),
      /* @__PURE__ */ jsx("h3", { className: "mb-2 text-xl font-semibold", children: "No Marksheet Available" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: !marksheetTemplate ? "The instructor hasn't set up marksheets for this course yet." : "No marks data available. Complete assignments and quizzes to view your marksheet." })
    ] }) }) : /* @__PURE__ */ jsx(
      DynamicMarksheet,
      {
        template: marksheetTemplate,
        courseName: course.title,
        studentName: auth.user.name,
        completionDate,
        studentMarks
      }
    ) })
  ] }) });
};
export {
  Certificate as default
};
