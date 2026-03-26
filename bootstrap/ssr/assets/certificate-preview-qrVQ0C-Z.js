import { jsxs, jsx } from "react/jsx-runtime";
import { Award, Calendar } from "lucide-react";
const CertificatePreview = ({ template, studentName, courseName, completionDate, logoUrl }) => {
  const { template_data } = template;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "relative flex min-h-[400px] flex-col justify-center rounded-lg border-4 p-8 text-center shadow-lg",
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
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 space-y-6", children: [
          (logoUrl || template.logo_path) && /* @__PURE__ */ jsx("div", { className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center", children: /* @__PURE__ */ jsx("img", { src: logoUrl || template.logo_path || "", alt: "Logo", className: "h-full w-full object-contain" }) }),
          !logoUrl && !template.logo_path && /* @__PURE__ */ jsx(
            Award,
            {
              className: "mx-auto mb-3 h-12 w-12",
              style: {
                color: template_data.borderColor
              }
            }
          ),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              "h2",
              {
                className: "mb-2 text-3xl font-bold",
                style: {
                  color: template_data.primaryColor,
                  fontFamily: template_data.fontFamily
                },
                children: template_data.titleText
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "mx-auto h-1 w-32",
                style: {
                  backgroundColor: template_data.borderColor
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "p",
            {
              className: "text-lg",
              style: {
                color: template_data.secondaryColor,
                fontFamily: template_data.fontFamily
              },
              children: template_data.descriptionText
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "relative py-4", children: [
            /* @__PURE__ */ jsx(
              "p",
              {
                className: "text-3xl font-bold",
                style: {
                  color: template_data.primaryColor,
                  fontFamily: template_data.fontFamily
                },
                children: studentName
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "mx-auto mt-2 h-0.5 w-48",
                style: {
                  backgroundColor: template_data.borderColor
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "p",
            {
              className: "text-lg",
              style: {
                color: template_data.secondaryColor,
                fontFamily: template_data.fontFamily
              },
              children: template_data.completionText
            }
          ),
          /* @__PURE__ */ jsx(
            "p",
            {
              className: "text-2xl font-semibold",
              style: {
                color: template_data.primaryColor,
                fontFamily: template_data.fontFamily
              },
              children: courseName
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 pt-4", children: [
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
                className: "text-sm",
                style: {
                  color: template_data.secondaryColor,
                  fontFamily: template_data.fontFamily
                },
                children: [
                  "Completed on: ",
                  completionDate
                ]
              }
            )
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
      ]
    }
  );
};
export {
  CertificatePreview as default
};
