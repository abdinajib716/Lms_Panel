import { jsxs, jsx } from "react/jsx-runtime";
import { B as Button } from "./button-jZyzwgdo.js";
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, c as DropdownMenuItem } from "./dropdown-menu-BIfW6iuW.js";
import { S as ScrollArea } from "./scroll-area-DPHRDnwL.js";
import { g as getQueryParams } from "./route-DlE7FdTW.js";
import { usePage, router } from "@inertiajs/react";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-dropdown-menu";
import "lucide-react";
import "@radix-ui/react-scroll-area";
const TableFooter = (props) => {
  const { paginationInfo, paginationKey = "page" } = props;
  const { current_page, last_page, first_page_url, last_page_url, next_page_url, prev_page_url } = paginationInfo;
  const page = usePage();
  const urlParams = getQueryParams(page.url);
  const dropdownList = [];
  if (last_page > 0) {
    for (let i = 1; i <= last_page; i++) {
      dropdownList.push({
        key: `${i}`,
        value: i
      });
    }
  } else {
    dropdownList.push({
      key: "1",
      value: 1
    });
  }
  const gotoPage = (pageNumber) => {
    router.get(
      route(props.routeName, {
        ...props.routeParams || {},
        ...urlParams,
        [paginationKey]: pageNumber
      }),
      {},
      { preserveState: true }
    );
  };
  const gotoRoute = (path) => {
    const pathParams = getQueryParams(path);
    router.get(
      route(props.routeName, {
        ...props.routeParams || {},
        ...urlParams,
        [paginationKey]: pathParams.page
      }),
      {},
      { preserveState: true }
    );
  };
  const menuItem = (e) => {
    return `text-center py-1 ${current_page === e && "bg-primary-50"}`;
  };
  return /* @__PURE__ */ jsxs("div", { className: `space-y-4 ${props.className}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center", children: [
      /* @__PURE__ */ jsx("span", { className: "mr-1", children: /* @__PURE__ */ jsxs("strong", { children: [
        current_page,
        " of ",
        last_page
      ] }) }),
      /* @__PURE__ */ jsx("span", { className: "mr-3", children: "| Go to page:" }),
      /* @__PURE__ */ jsxs(DropdownMenu, { children: [
        /* @__PURE__ */ jsx(DropdownMenuTrigger, { children: /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", className: "h-8 w-[60px] rounded-md border", children: current_page }) }),
        /* @__PURE__ */ jsx(DropdownMenuContent, { align: "end", className: "min-w-[60px]", children: /* @__PURE__ */ jsx(ScrollArea, { className: "", children: dropdownList.map((item) => /* @__PURE__ */ jsx(DropdownMenuItem, { onClick: () => gotoPage(item.value), className: menuItem(item.value), children: item.value }, item.key)) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center", children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "button",
          variant: "ghost",
          disabled: !prev_page_url,
          onClick: () => gotoRoute(first_page_url),
          className: "bg-muted border-border h-8 border px-2 text-xs sm:px-3",
          children: "<<First"
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "button",
          variant: "ghost",
          disabled: !prev_page_url,
          onClick: () => gotoRoute(prev_page_url),
          className: "bg-muted border-border mx-3 h-8 border px-2 text-xs sm:px-3",
          children: "Prev"
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "button",
          variant: "ghost",
          disabled: !next_page_url,
          onClick: () => gotoRoute(next_page_url),
          className: "bg-muted border-border mx-3 h-8 border px-2 text-xs sm:px-3",
          children: "Next"
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "button",
          variant: "ghost",
          disabled: !next_page_url,
          onClick: () => gotoRoute(last_page_url),
          className: "bg-muted border-border h-8 border px-2 text-xs sm:px-3",
          children: "Last>>"
        }
      )
    ] })
  ] });
};
export {
  TableFooter as default
};
