import { jsxs, jsx } from "react/jsx-runtime";
import { ClipboardList, Calendar } from "lucide-react";
const MarksheetPreview = ({ template, studentName, courseName, completionDate, logoUrl }) => {
  const { template_data } = template;
  const overallGrade = "A";
  const overallPercentage = 91;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "relative min-h-[500px] rounded-lg border-4 p-8 shadow-lg",
      style: {
        backgroundColor: template_data.backgroundColor,
        borderColor: template_data.borderColor,
        fontFamily: template_data.fontFamily
      },
      children: [
        /* @__PURE__ */ jsx("div", { className: "mb-6 border-b-2 pb-4", style: { borderColor: template_data.borderColor }, children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          logoUrl || template.logo_path ? /* @__PURE__ */ jsx("div", { className: "h-16 w-16", children: /* @__PURE__ */ jsx("img", { src: logoUrl || template.logo_path || "", alt: "Logo", className: "h-full w-full object-contain" }) }) : /* @__PURE__ */ jsx(ClipboardList, { className: "h-12 w-12", style: { color: template_data.primaryColor } }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold", style: { color: template_data.primaryColor, fontFamily: template_data.fontFamily }, children: template_data.headerText }),
            /* @__PURE__ */ jsx("p", { className: "text-lg", style: { color: template_data.secondaryColor, fontFamily: template_data.fontFamily }, children: template_data.institutionName })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "mb-6 grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm", style: { color: template_data.secondaryColor }, children: "Student Name" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg font-semibold", style: { color: template_data.primaryColor }, children: studentName })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm", style: { color: template_data.secondaryColor }, children: "Course" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg font-semibold", style: { color: template_data.primaryColor }, children: courseName })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm", style: { color: template_data.secondaryColor }, children: "Completion Date" }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4", style: { color: template_data.secondaryColor } }),
              /* @__PURE__ */ jsx("p", { className: "font-medium", style: { color: template_data.primaryColor }, children: completionDate })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm", style: { color: template_data.secondaryColor }, children: "Overall Grade" }),
            /* @__PURE__ */ jsxs("p", { className: "text-2xl font-bold", style: { color: template_data.primaryColor }, children: [
              overallGrade,
              " (",
              overallPercentage,
              "%)"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "mb-3 text-lg font-semibold", style: { color: template_data.primaryColor }, children: "Exam Type" }),
          /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-lg border", style: { borderColor: template_data.borderColor }, children: /* @__PURE__ */ jsxs("table", { className: "w-full", children: [
            /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { style: { backgroundColor: `${template_data.primaryColor}20` }, children: [
              /* @__PURE__ */ jsx(
                "th",
                {
                  className: "border-b p-3 text-left font-semibold",
                  style: { color: template_data.primaryColor, borderColor: template_data.borderColor },
                  children: "Exam Type"
                }
              ),
              /* @__PURE__ */ jsx(
                "th",
                {
                  className: "border-b p-3 text-right font-semibold",
                  style: { color: template_data.primaryColor, borderColor: template_data.borderColor },
                  children: "Total Marks"
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxs("tbody", { children: [
              /* @__PURE__ */ jsxs("tr", { className: "border-b", style: { borderColor: template_data.borderColor }, children: [
                /* @__PURE__ */ jsx("td", { className: "p-3", style: { color: template_data.secondaryColor }, children: "Assignment" }),
                /* @__PURE__ */ jsx("td", { className: "p-3 text-right font-medium", style: { color: template_data.primaryColor }, children: "10/50" })
              ] }),
              /* @__PURE__ */ jsxs("tr", { children: [
                /* @__PURE__ */ jsx("td", { className: "p-3", style: { color: template_data.secondaryColor }, children: "Quiz" }),
                /* @__PURE__ */ jsx("td", { className: "p-3 text-right font-medium", style: { color: template_data.primaryColor }, children: "0/0" })
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 border-t-2 pt-4 text-center", style: { borderColor: template_data.borderColor }, children: /* @__PURE__ */ jsx("p", { className: "text-sm", style: { color: template_data.secondaryColor, fontFamily: template_data.fontFamily }, children: template_data.footerText }) })
      ]
    }
  );
};
export {
  MarksheetPreview as default
};
