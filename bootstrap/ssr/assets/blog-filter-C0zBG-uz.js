import { jsxs, jsx } from "react/jsx-runtime";
import { S as SearchInput } from "./search-input-_KZEhUeb.js";
import { R as RadioGroup, a as RadioGroupItem } from "./radio-group-sSS5HHUP.js";
import { g as getQueryParams } from "./route-DlE7FdTW.js";
import { usePage, router, Link } from "@inertiajs/react";
import "./debounce-ZFxqVthq.js";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "lucide-react";
import "react";
import "@radix-ui/react-radio-group";
const BlogFilter = ({ setOpen }) => {
  const page = usePage();
  const urlParams = getQueryParams(page.url);
  const { category, categories, translate } = page.props;
  const { frontend, common } = translate;
  const getQueryRoute = (newParams, category2, category_child) => {
    const updatedParams = { ...urlParams };
    if ("search" in updatedParams) {
      delete updatedParams.search;
    }
    return route("blogs.guest", {
      category: category2,
      category_child,
      ...updatedParams,
      ...newParams
    });
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsx(SearchInput, { onChangeValue: (value) => router.get(route("blogs.guest", { category: "all", search: value })) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h3", { className: "mb-3 font-semibold", children: common.categories }),
      /* @__PURE__ */ jsxs(RadioGroup, { value: (category == null ? void 0 : category.slug) || "all", className: "space-y-2", children: [
        /* @__PURE__ */ jsxs(Link, { className: "flex items-center", href: getQueryRoute({}, "all"), children: [
          /* @__PURE__ */ jsx(RadioGroupItem, { className: "cursor-pointer", id: "category", value: "all" }),
          /* @__PURE__ */ jsx("label", { htmlFor: "category", className: "cursor-pointer pl-2", children: frontend.all_blogs })
        ] }),
        categories.map((category2, ind) => {
          const key = `category${ind}`;
          if (category2.slug === "default") return null;
          return /* @__PURE__ */ jsx("div", { className: "capitalize", children: /* @__PURE__ */ jsxs(
            Link,
            {
              className: "flex items-center",
              href: getQueryRoute({}, category2.slug),
              onFinish: () => !urlParams.search && setOpen && setOpen(false),
              children: [
                /* @__PURE__ */ jsx(RadioGroupItem, { className: "cursor-pointer", id: key, value: category2.slug }),
                /* @__PURE__ */ jsx("label", { htmlFor: key, className: "cursor-pointer pl-2", children: category2.name })
              ]
            }
          ) }, key);
        })
      ] })
    ] })
  ] });
};
export {
  BlogFilter as default
};
