import { jsx, jsxs } from "react/jsx-runtime";
import { A as AppLogo } from "./app-logo-42nmPdEQ.js";
import { Link } from "@inertiajs/react";
import { M as Main } from "./main-BqrosZ6t.js";
const AuthLayout = ({ children, title, description }) => {
  return /* @__PURE__ */ jsx(Main, { children: /* @__PURE__ */ jsxs("div", { className: "bg-background flex min-h-svh flex-col items-center justify-center gap-10 p-6 md:p-10", children: [
    /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(AppLogo, { className: "h-9" }) }),
    /* @__PURE__ */ jsx("div", { className: "w-full max-w-sm", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-center", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-2xl font-semibold", children: title }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-center text-sm", children: description })
      ] }),
      children
    ] }) })
  ] }) });
};
export {
  AuthLayout as A
};
