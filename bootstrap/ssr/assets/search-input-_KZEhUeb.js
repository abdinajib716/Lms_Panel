import { jsxs, jsx } from "react/jsx-runtime";
import { d as debounce } from "./debounce-ZFxqVthq.js";
import { g as getQueryParams } from "./route-DlE7FdTW.js";
import { c as cn } from "./utils-BmtPBcb0.js";
import { usePage } from "@inertiajs/react";
import { Search } from "lucide-react";
import { useRef, useEffect } from "react";
const SearchInput = (props) => {
  const { className, iconPosition = "left", placeholder = "Search", onChangeValue } = props;
  const page = usePage();
  const searchRef = useRef(null);
  const params = getQueryParams(page.url);
  const searchHandler = debounce(async (e) => {
    const query = e.target.value;
    onChangeValue(query);
  }, 300);
  useEffect(() => {
    if (params["search"] && searchRef.current) {
      searchRef.current.focus();
    }
  }, [page, params]);
  return /* @__PURE__ */ jsxs("div", { className: cn("relative w-full md:max-w-[260px]", className), children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        ref: searchRef,
        onChange: searchHandler,
        placeholder,
        className: cn(
          "focus:border-input border-input focus-visible:border-ring focus-visible:ring-ring/50 h-9 w-full rounded-md border py-[15px] text-sm font-normal text-gray-500 focus:ring-0 focus:outline-0 focus-visible:ring-[3px]",
          iconPosition === "left" ? "pr-4 pl-12" : "pr-12 pl-4"
        ),
        defaultValue: params["search"] ?? ""
      }
    ),
    /* @__PURE__ */ jsx(Search, { className: cn("absolute top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-gray-700", iconPosition === "left" ? "left-4" : "right-4") })
  ] });
};
export {
  SearchInput as S
};
