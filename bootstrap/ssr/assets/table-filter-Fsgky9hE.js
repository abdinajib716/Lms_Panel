import { jsx, jsxs } from "react/jsx-runtime";
import { u as useLang } from "./use-lang-44ndmTOc.js";
import { d as debounce } from "./debounce-ZFxqVthq.js";
import { g as getQueryParams } from "./route-DlE7FdTW.js";
import { c as cn } from "./utils-BmtPBcb0.js";
import { usePage, router } from "@inertiajs/react";
import { Download, Search } from "lucide-react";
import { useRef, useEffect } from "react";
import { B as Button } from "./button-jZyzwgdo.js";
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, c as DropdownMenuItem } from "./dropdown-menu-BIfW6iuW.js";
import { S as ScrollArea } from "./scroll-area-DPHRDnwL.js";
import { T as TablePageSize } from "./table-page-size-Xj85uK4t.js";
const TableDataExport = (props) => {
  const { className } = props;
  const { table } = useLang();
  const dataExport = () => {
  };
  return /* @__PURE__ */ jsx("div", { className: `relative ml-3 ${className}`, children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { children: /* @__PURE__ */ jsx(Button, { size: "icon", variant: "secondary", className: "group h-10 w-11 rounded-md border border-gray-200 p-0 hover:border-blue-500", children: /* @__PURE__ */ jsx(Download, { className: "h-4 w-4 text-gray-700 group-hover:text-blue-500" }) }) }),
    /* @__PURE__ */ jsx(DropdownMenuContent, { align: "end", children: /* @__PURE__ */ jsx(ScrollArea, { className: "max-h-[198px]", children: /* @__PURE__ */ jsx(DropdownMenuItem, { onClick: dataExport, className: "text-center", children: table.csv }) }) })
  ] }) });
};
const TableFilter = (props) => {
  const { Icon, data, title, component, globalSearch, tablePageSizes, routeName, routeParams, exportPath, className } = props;
  const { common } = useLang();
  const page = usePage();
  const urlParams = getQueryParams(page.url);
  const searchRef = useRef(null);
  const searchHandler = debounce(async (e) => {
    const query = e.target.value;
    router.get(
      route(routeName || "", {
        ...routeParams || {},
        ...urlParams,
        search: query
      }),
      {},
      {
        preserveState: true,
        preserveScroll: true,
        showProgress: false
      }
    );
  }, 300);
  useEffect(() => {
    if (urlParams["search"] && searchRef.current) {
      searchRef.current.focus();
    }
  }, [props]);
  return /* @__PURE__ */ jsxs("div", { className: cn("items-center justify-between p-6 md:flex", className), children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-5", children: [
      Icon && /* @__PURE__ */ jsx("div", { className: "bg-primary-25 flex h-10 w-10 items-center justify-center rounded-md", children: Icon }),
      title && /* @__PURE__ */ jsx("p", { className: "mb-4 text-lg font-semibold md:mb-0", children: title })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-3", children: [
      globalSearch && /* @__PURE__ */ jsxs("div", { className: "relative w-full md:max-w-[260px]", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            ref: searchRef,
            placeholder: common.search,
            onChange: searchHandler,
            className: "focus:border-primary border-border h-10 w-full rounded-md border py-[15px] pr-4 pl-12 text-sm font-normal focus:ring-0 focus:outline-0",
            defaultValue: urlParams["search"] ?? ""
          }
        ),
        /* @__PURE__ */ jsx(Search, { className: "text-muted-foreground absolute top-1/2 left-4 z-10 h-4 w-4 -translate-y-1/2" })
      ] }),
      routeName && /* @__PURE__ */ jsx(TablePageSize, { routeParams, routeName, pageData: data, dropdownList: tablePageSizes }),
      exportPath && /* @__PURE__ */ jsx(TableDataExport, { route: exportPath }),
      component && component
    ] })
  ] });
};
export {
  TableFilter as T
};
