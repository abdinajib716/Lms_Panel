import { jsxs, jsx } from "react/jsx-runtime";
import { B as Button } from "./button-jZyzwgdo.js";
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, c as DropdownMenuItem } from "./dropdown-menu-BIfW6iuW.js";
import { g as getQueryParams } from "./route-DlE7FdTW.js";
import { usePage, router } from "@inertiajs/react";
import { ChevronsUpDown } from "lucide-react";
const TablePageSize = (props) => {
  const page = usePage();
  const urlParams = getQueryParams(page.url);
  const { pageData, dropdownList, className, routeName, routeParams, pageSizeKey = "per_page" } = props;
  const { per_page } = pageData;
  const gotoPage = (size) => {
    router.get(
      route(routeName, {
        ...routeParams || {},
        ...urlParams,
        [pageSizeKey]: size
      }),
      {},
      { preserveState: true }
    );
  };
  return /* @__PURE__ */ jsxs("div", { className: `relative h-10 ${className}`, children: [
    /* @__PURE__ */ jsx("span", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4", children: /* @__PURE__ */ jsx(ChevronsUpDown, { className: "text-muted-foreground h-3 w-3" }) }),
    /* @__PURE__ */ jsxs(DropdownMenu, { children: [
      /* @__PURE__ */ jsx(DropdownMenuTrigger, { children: /* @__PURE__ */ jsx(Button, { type: "button", variant: "ghost", className: "hover:border-primary border-border h-10 w-[72px] justify-start border", children: per_page }) }),
      /* @__PURE__ */ jsx(DropdownMenuContent, { align: "end", className: "min-w-[72px]", children: dropdownList.map((item) => /* @__PURE__ */ jsx(DropdownMenuItem, { onClick: () => gotoPage(item), className: `text-center ${per_page === item && "bg-muted"}`, children: item }, item)) })
    ] })
  ] });
};
export {
  TablePageSize as T
};
