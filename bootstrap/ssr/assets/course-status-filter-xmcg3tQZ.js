import { jsxs, jsx } from "react/jsx-runtime";
import { B as Button } from "./button-jZyzwgdo.js";
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, c as DropdownMenuItem } from "./dropdown-menu-BIfW6iuW.js";
import { g as getQueryParams } from "./route-DlE7FdTW.js";
import { c as cn } from "./utils-BmtPBcb0.js";
import { usePage, router } from "@inertiajs/react";
import { ChevronsUpDown } from "lucide-react";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-dropdown-menu";
import "clsx";
import "tailwind-merge";
const CourseStatusFilter = () => {
  const page = usePage();
  const urlParams = getQueryParams(page.url);
  const statuses = page.props.statuses;
  return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", className: "text-muted-foreground capitalize", children: [
      /* @__PURE__ */ jsx("span", { children: urlParams["status"] ?? "Status" }),
      /* @__PURE__ */ jsx(ChevronsUpDown, { className: "h-3 w-3 text-gray-700" })
    ] }) }),
    /* @__PURE__ */ jsx(DropdownMenuContent, { align: "center", className: "min-w-[72px]", children: ["all", ...statuses].map((status) => /* @__PURE__ */ jsx(
      DropdownMenuItem,
      {
        onClick: () => router.get(
          route("courses.index", {
            ...urlParams,
            status
          })
        ),
        className: cn("cursor-pointer text-center capitalize", urlParams["status"] === status && "bg-gray-100"),
        children: status
      },
      status
    )) })
  ] });
};
export {
  CourseStatusFilter as default
};
