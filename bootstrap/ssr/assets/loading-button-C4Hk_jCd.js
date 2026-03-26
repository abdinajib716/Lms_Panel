import { jsxs, jsx } from "react/jsx-runtime";
import { c as cn } from "./utils-BmtPBcb0.js";
import { LoaderCircle } from "lucide-react";
import { forwardRef } from "react";
import { B as Button } from "./button-jZyzwgdo.js";
const LoadingButton = forwardRef((buttonProps, ref) => {
  const { loading, children, iconClass, className, ...props } = buttonProps;
  return /* @__PURE__ */ jsxs(Button, { ref, type: props.type || "submit", className: cn("relative", className), disabled: loading, ...props, children: [
    loading && /* @__PURE__ */ jsx(LoaderCircle, { className: cn("absolute h-4 w-4 animate-spin", iconClass) }),
    /* @__PURE__ */ jsx("div", { className: cn("opacity-100", loading ? "opacity-0" : "opacity-100"), children })
  ] });
});
LoadingButton.displayName = "LoadingButton";
export {
  LoadingButton as L
};
