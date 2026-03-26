import { jsxs, jsx } from "react/jsx-runtime";
import { c as cn } from "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
const StepCircle = ({ step, title }) => {
  return /* @__PURE__ */ jsxs("div", { className: `relative flex items-center text-red-500 ${step}`, children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "h-4 w-4 rounded-full border-2 border-gray-300 transition duration-500 ease-in-out",
          step === "active" && "border-orange-500",
          step === "fill" && "border-orange-600 bg-orange-600"
        )
      }
    ),
    /* @__PURE__ */ jsx(
      "p",
      {
        className: cn(
          "absolute top-0 -ml-14 mt-6 w-32 text-center text-xs font-medium uppercase text-gray-500",
          (step === "active" || step === "fill") && "text-orange-500"
        ),
        children: title
      }
    )
  ] });
};
const StepNavigator = (props) => {
  const {
    step1 = "",
    step2 = "",
    step3 = "",
    step4 = "",
    step5 = ""
  } = props;
  return /* @__PURE__ */ jsxs("div", { className: "mb-20 flex items-center px-6", children: [
    /* @__PURE__ */ jsx(StepCircle, { step: step1, title: "SERVER" }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "flex-auto border-t-2 border-gray-300 transition duration-500 ease-in-out",
          (step2 === "active" || step2 === "fill") && "border-orange-600"
        )
      }
    ),
    /* @__PURE__ */ jsx(StepCircle, { step: step2, title: "SETTINGS" }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "flex-auto border-t-2 border-gray-300 transition duration-500 ease-in-out",
          (step3 === "active" || step3 === "fill") && "border-orange-600"
        )
      }
    ),
    /* @__PURE__ */ jsx(StepCircle, { step: step3, title: "DATABASE" }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "flex-auto border-t-2 border-gray-300 transition duration-500 ease-in-out",
          (step4 === "active" || step4 === "fill") && "border-orange-600"
        )
      }
    ),
    /* @__PURE__ */ jsx(StepCircle, { step: step4, title: "ADMIN" }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "flex-auto border-t-2 border-gray-300 transition duration-500 ease-in-out",
          (step5 === "active" || step5 === "fill") && "border-orange-600"
        )
      }
    ),
    /* @__PURE__ */ jsx(StepCircle, { step: step4, title: "FINISH" })
  ] });
};
export {
  StepNavigator as default
};
