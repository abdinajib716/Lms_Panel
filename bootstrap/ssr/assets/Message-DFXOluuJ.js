import { jsxs, jsx } from "react/jsx-runtime";
const Message = ({ success, error }) => {
  return /* @__PURE__ */ jsxs("div", { children: [
    success && /* @__PURE__ */ jsx("div", { className: "mb-4 rounded-md bg-green-100 px-5 py-3 text-center text-sm text-green-500", children: success }),
    error && /* @__PURE__ */ jsx("div", { className: "mb-4 rounded-md bg-red-100 px-5 py-3 text-center text-sm text-red-500", children: error })
  ] });
};
export {
  Message as default
};
