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
  const { props: pageProps } = usePage();
  const { translate } = pageProps;
  const { frontend, common } = translate;
  const { current_page, last_page, first_page_url, last_page_url, next_page_url, prev_page_url } = props.paginationInfo;
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
        page: pageNumber
      })
    );
  };
  const gotoRoute = (path) => {
    var _a, _b;
    const pathParams = getQueryParams(path);
    router.get(
      route(props.routeName, {
        category: (_a = page.props.category) == null ? void 0 : _a.id,
        category_child: (_b = page.props.categoryChild) == null ? void 0 : _b.id,
        ...props.routeParams || {},
        ...urlParams,
        ...pathParams
      })
    );
  };
  const menuItem = (e) => {
    return `text-center py-1 ${current_page === e && "bg-primary-50"}`;
  };
  return /* @__PURE__ */ jsxs("div", { className: `${props.className}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center justify-center md:hidden", children: [
      /* @__PURE__ */ jsx("span", { className: "mr-1", children: /* @__PURE__ */ jsxs("strong", { children: [
        current_page,
        " ",
        common.of,
        " ",
        last_page
      ] }) }),
      /* @__PURE__ */ jsxs("span", { className: "mr-3", children: [
        "| ",
        frontend.go_to_page_colon
      ] }),
      /* @__PURE__ */ jsxs(DropdownMenu, { children: [
        /* @__PURE__ */ jsx(DropdownMenuTrigger, { children: /* @__PURE__ */ jsx(Button, { variant: "secondary", className: "hover:border-primary h-8 w-[60px] rounded-md border border-gray-200 text-gray-700", children: current_page }) }),
        /* @__PURE__ */ jsx(DropdownMenuContent, { align: "end", className: "min-w-[60px]", children: /* @__PURE__ */ jsx(ScrollArea, { className: "", children: dropdownList.map((item) => /* @__PURE__ */ jsx(DropdownMenuItem, { onClick: () => gotoPage(item.value), className: menuItem(item.value), children: item.value }, item.key)) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center", children: [
      /* @__PURE__ */ jsx(Button, { color: "white", disabled: !prev_page_url, onClick: () => gotoRoute(first_page_url), className: "h-8 px-2 text-xs sm:px-3", children: "<<First" }),
      /* @__PURE__ */ jsx(
        Button,
        {
          color: "white",
          disabled: !prev_page_url,
          onClick: () => gotoRoute(prev_page_url),
          className: "mx-3 h-8 px-2 text-xs sm:px-3",
          children: frontend.prev
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "hidden items-center md:flex", children: [
        /* @__PURE__ */ jsxs("span", { className: "mr-1", children: [
          common.page,
          " ",
          /* @__PURE__ */ jsxs("strong", { children: [
            current_page,
            " ",
            common.of,
            " ",
            last_page
          ] })
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "mr-3", children: [
          "| ",
          frontend.go_to_page_colon
        ] }),
        /* @__PURE__ */ jsxs(DropdownMenu, { children: [
          /* @__PURE__ */ jsx(DropdownMenuTrigger, { children: /* @__PURE__ */ jsx(Button, { variant: "secondary", className: "hover:border-primary h-8 w-[60px] rounded-md border border-gray-200 text-gray-700", children: current_page }) }),
          /* @__PURE__ */ jsx(DropdownMenuContent, { align: "end", className: "min-w-[60px]", children: /* @__PURE__ */ jsx(ScrollArea, { className: "", children: dropdownList.map((item) => /* @__PURE__ */ jsx(DropdownMenuItem, { onClick: () => gotoPage(item.value), className: menuItem(item.value), children: item.value }, item.key)) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        Button,
        {
          color: "white",
          disabled: !next_page_url,
          onClick: () => gotoRoute(next_page_url),
          className: "mx-3 h-8 px-2 text-xs sm:px-3",
          children: frontend.next
        }
      ),
      /* @__PURE__ */ jsx(Button, { color: "white", disabled: !next_page_url, onClick: () => gotoRoute(last_page_url), className: "h-8 px-2 text-xs sm:px-3", children: "Last>>" })
    ] })
  ] });
};
export {
  TableFooter as default
};
