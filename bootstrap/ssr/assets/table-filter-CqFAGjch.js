import { jsxs, jsx } from "react/jsx-runtime";
import { T as TablePageSize } from "./table-page-size-Xj85uK4t.js";
import { d as debounce } from "./debounce-ZFxqVthq.js";
import { g as getQueryParams } from "./route-DlE7FdTW.js";
import { c as cn } from "./utils-BmtPBcb0.js";
import { usePage, router } from "@inertiajs/react";
import { Search } from "lucide-react";
import { useRef, useEffect } from "react";
import "./button-jZyzwgdo.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./dropdown-menu-BIfW6iuW.js";
import "@radix-ui/react-dropdown-menu";
import "clsx";
import "tailwind-merge";
const TableFilter = (props) => {
  const { Icon, data, title, component, globalSearch, tablePageSizes, routeName, className, searchKey = "search" } = props;
  const page = usePage();
  const urlParams = getQueryParams(page.url);
  const searchRef = useRef(null);
  const searchHandler = debounce(async (e) => {
    const query = e.target.value;
    router.get(
      route(routeName || "", {
        ...urlParams,
        [searchKey]: query
      }),
      {},
      { preserveState: true }
      // This preserves component state across navigation
    );
  }, 300);
  useEffect(() => {
    if (urlParams[searchKey] && searchRef.current) {
      searchRef.current.focus();
    }
  }, [props]);
  return /* @__PURE__ */ jsxs("div", { className: cn("items-center justify-between p-6 md:flex", className), children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-5", children: [
      Icon && /* @__PURE__ */ jsx("div", { className: "bg-primary-25 flex h-10 w-10 items-center justify-center rounded-md", children: Icon }),
      title && /* @__PURE__ */ jsx("p", { className: "mb-4 text-lg font-semibold md:mb-0", children: title })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end", children: [
      globalSearch && /* @__PURE__ */ jsxs("div", { className: "relative w-full md:max-w-[260px]", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            ref: searchRef,
            placeholder: "Search",
            onChange: searchHandler,
            className: "focus:border-primary border-border h-10 w-full rounded-md border py-[15px] pr-4 pl-12 text-sm font-normal focus:ring-0 focus:outline-0",
            defaultValue: urlParams[searchKey] ?? ""
          }
        ),
        /* @__PURE__ */ jsx(Search, { className: "absolute top-3 left-4 z-10 h-4 w-4" })
      ] }),
      routeName && /* @__PURE__ */ jsx(
        TablePageSize,
        {
          routeName,
          pageData: data,
          dropdownList: tablePageSizes,
          pageSizeKey: `${searchKey}_per_page`,
          className: "ml-3"
        }
      ),
      component && component
    ] })
  ] });
};
export {
  TableFilter as default
};
