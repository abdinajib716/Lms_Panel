import { jsx } from "react/jsx-runtime";
import { usePage } from "@inertiajs/react";
import { c as Tabs$1 } from "./tabs-BOXC0x8t.js";
const Tabs = ({ children, ...props }) => {
  const page = usePage();
  return /* @__PURE__ */ jsx(Tabs$1, { dir: page.props.direction, ...props, children });
};
export {
  Tabs as T
};
