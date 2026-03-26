import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@inertiajs/react";
import Layout from "./Layout-BabR1Av6.js";
const Finish = () => {
  return /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsx("h6", { className: "mb-4 text-2xl font-medium", children: "Setup complete" }),
    /* @__PURE__ */ jsx("p", { className: "mb-2", children: "Your changed environment variables are set in the .env file now." }),
    /* @__PURE__ */ jsxs("p", { children: [
      /* @__PURE__ */ jsx(Link, { href: "/", className: "text-blue-500", children: "Click here" }),
      " ",
      "to get back to your project."
    ] })
  ] });
};
Finish.layout = (page) => /* @__PURE__ */ jsx(Layout, { children: page });
export {
  Finish as default
};
