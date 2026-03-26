import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { c as cn } from "./utils-BmtPBcb0.js";
import { usePage } from "@inertiajs/react";
const AppLogo = ({ className, theme }) => {
  const { system } = usePage().props;
  if (theme && theme === "dark") {
    return /* @__PURE__ */ jsx("img", { src: system.fields.logo_dark || "", alt: system.fields.name || "", className: cn("block h-6 w-auto", className) });
  }
  if (theme && theme === "light") {
    return /* @__PURE__ */ jsx("img", { src: system.fields.logo_light || "", alt: system.fields.name || "", className: cn("block h-6 w-auto", className) });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("img", { src: system.fields.logo_dark || "", alt: system.fields.name || "", className: cn("block h-6 w-auto dark:hidden", className) }),
    /* @__PURE__ */ jsx("img", { src: system.fields.logo_light || "", alt: system.fields.name || "", className: cn("hidden h-6 w-auto dark:block", className) })
  ] });
};
export {
  AppLogo as A
};
