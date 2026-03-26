import { jsxs, jsx } from "react/jsx-runtime";
import { B as Button } from "./button-jZyzwgdo.js";
import { c as cn } from "./utils-BmtPBcb0.js";
const ButtonGradientPrimary = ({ children, className, shadow = true, shadowClass, containerClass, ...props }) => {
  return /* @__PURE__ */ jsxs("div", { className: cn("relative", containerClass), children: [
    shadow && /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "after:pointer-events-none after:absolute after:top-1/2 after:-left-7 after:h-[84px] after:w-[84px] after:-translate-y-1/2 after:rounded-full after:bg-[#E4CBA8A6] after:blur-[30px] after:content-[''] dark:after:bg-[#e4cba857]",
          shadowClass
        )
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        className: cn(
          "from-primary to-secondary-dark hover:from-secondary-dark hover:to-secondary-dark dark:from-secondary-dark dark:to-secondary-foreground dark:hover:from-secondary-dark dark:hover:to-secondary-dark relative z-10 h-auto bg-gradient-to-r px-5 py-2.5 text-white shadow-none",
          className
        ),
        ...props,
        children
      }
    )
  ] });
};
export {
  ButtonGradientPrimary as B
};
