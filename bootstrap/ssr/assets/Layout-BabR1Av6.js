import { jsx, jsxs } from "react/jsx-runtime";
const Layout = ({ children }) => {
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-gray-900 px-6 py-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto w-full max-w-[750px] bg-white", children: [
    /* @__PURE__ */ jsx("div", { className: "bg-gray-100 p-6 md:p-10", children: /* @__PURE__ */ jsx("h5", { className: "text-center text-3xl font-semibold", children: "App Installation" }) }),
    /* @__PURE__ */ jsx("div", { className: "p-6 md:p-10", children })
  ] }) });
};
export {
  Layout as default
};
