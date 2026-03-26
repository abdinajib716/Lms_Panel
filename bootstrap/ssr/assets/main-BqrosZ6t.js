import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useTheme } from "next-themes";
import { Toaster as Toaster$1, toast } from "sonner";
import { usePage } from "@inertiajs/react";
import { useEffect } from "react";
const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();
  return /* @__PURE__ */ jsx(
    Toaster$1,
    {
      theme,
      className: "toaster group",
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)"
      },
      ...props
    }
  );
};
const Main = ({ children }) => {
  const { props } = usePage();
  useEffect(() => {
    if (props.flash.error) {
      toast.error(props.flash.error);
    }
    if (props.flash.success || props.flash.warning) {
      toast.success(props.flash.success || props.flash.warning);
    }
  }, [props.flash]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Toaster, {}),
    children
  ] });
};
export {
  Main as M
};
