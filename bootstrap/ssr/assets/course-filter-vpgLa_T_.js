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
const CourseFilter = ({ setOpen }) => {
  const page = usePage();
  const urlParams = getQueryParams(page.url);
  const { levels, prices, categories, category, categoryChild, translate } = page.props;
  const { button, frontend, common, input } = translate;
  const getQueryRoute = (newParams, category2, category_child) => {
    const updatedParams = { ...urlParams };
    if ("search" in updatedParams) {
      delete updatedParams.search;
    }
    return route("category.courses", {
      category: category2,
      category_child,
      ...updatedParams,
      ...newParams
    });
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsx(SearchInput, { onChangeValue: (value) => router.get(route("category.courses", { category: "all", search: value })) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h3", { className: "mb-3 font-semibold", children: common.categories }),
      /* @__PURE__ */ jsxs(RadioGroup, { value: categoryChild ? categoryChild == null ? void 0 : categoryChild.slug : (category == null ? void 0 : category.slug) || "all", children: [
        /* @__PURE__ */ jsxs(Link, { className: "flex items-center", href: getQueryRoute({}, "all"), children: [
          /* @__PURE__ */ jsx(RadioGroupItem, { className: "cursor-pointer", id: "category", value: "all" }),
          /* @__PURE__ */ jsx("label", { htmlFor: "category", className: "cursor-pointer pl-2", children: frontend.all })
        ] }),
        categories.map((category2, ind) => {
          var _a;
          const key = `category${ind}`;
          if (category2.slug === "default") return null;
          return /* @__PURE__ */ jsxs("div", { className: "capitalize", children: [
            /* @__PURE__ */ jsxs(
              Link,
              {
                className: "flex items-center",
                href: getQueryRoute({}, category2.slug),
                onFinish: () => !urlParams.search && setOpen && setOpen(false),
                children: [
                  /* @__PURE__ */ jsx(RadioGroupItem, { className: "cursor-pointer", id: key, value: category2.slug }),
                  /* @__PURE__ */ jsx("label", { htmlFor: key, className: "cursor-pointer pl-2", children: category2.title })
                ]
              }
            ),
            (_a = category2.category_children) == null ? void 0 : _a.map((child, ind2) => {
              const key2 = `category_child${ind2}`;
              return /* @__PURE__ */ jsxs(
                Link,
                {
                  className: "mt-2 flex items-center pl-3",
                  href: getQueryRoute({}, category2.slug, child.slug),
                  onFinish: () => !urlParams.search && setOpen && setOpen(false),
                  children: [
                    /* @__PURE__ */ jsx(RadioGroupItem, { className: "cursor-pointer", id: key2, value: child.slug }),
                    /* @__PURE__ */ jsx("label", { htmlFor: key2, className: "cursor-pointer pl-2", children: child.title })
                  ]
                },
                key2
              );
            })
          ] }, key);
        })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h3", { className: "mb-3 font-semibold", children: common.price }),
      /* @__PURE__ */ jsxs(RadioGroup, { value: urlParams["price"] || "all", children: [
        /* @__PURE__ */ jsxs(
          Link,
          {
            className: "flex items-center",
            href: getQueryRoute({ price: "all" }, (category == null ? void 0 : category.slug) || "all", categoryChild == null ? void 0 : categoryChild.slug),
            onFinish: () => !urlParams.search && setOpen && setOpen(false),
            children: [
              /* @__PURE__ */ jsx(RadioGroupItem, { className: "cursor-pointer", id: "price", value: "all" }),
              /* @__PURE__ */ jsx("label", { htmlFor: "price", className: "cursor-pointer pl-2", children: frontend.all })
            ]
          }
        ),
        prices.map((price) => /* @__PURE__ */ jsxs(
          Link,
          {
            className: "flex items-center capitalize",
            href: getQueryRoute({ price }, (category == null ? void 0 : category.slug) || "all", categoryChild == null ? void 0 : categoryChild.slug),
            onFinish: () => !urlParams.search && setOpen && setOpen(false),
            children: [
              /* @__PURE__ */ jsx(RadioGroupItem, { className: "cursor-pointer", value: price, id: price }),
              /* @__PURE__ */ jsx("label", { htmlFor: price, className: "cursor-pointer pl-2", children: price })
            ]
          },
          price
        ))
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h3", { className: "mb-3 font-semibold", children: common.level }),
      /* @__PURE__ */ jsxs(RadioGroup, { value: urlParams["level"] || "all", children: [
        /* @__PURE__ */ jsxs(
          Link,
          {
            className: "flex items-center",
            href: getQueryRoute({ level: "all" }, (category == null ? void 0 : category.slug) || "all", categoryChild == null ? void 0 : categoryChild.slug),
            onFinish: () => !urlParams.search && setOpen && setOpen(false),
            children: [
              /* @__PURE__ */ jsx(RadioGroupItem, { className: "cursor-pointer", id: "level", value: "all" }),
              /* @__PURE__ */ jsx("label", { htmlFor: "level", className: "cursor-pointer pl-2", children: frontend.all })
            ]
          }
        ),
        levels.map((level) => /* @__PURE__ */ jsxs(
          Link,
          {
            className: "flex items-center capitalize",
            href: getQueryRoute({ level }, (category == null ? void 0 : category.slug) || "all", categoryChild == null ? void 0 : categoryChild.slug),
            onFinish: () => !urlParams.search && setOpen && setOpen(false),
            children: [
              /* @__PURE__ */ jsx(RadioGroupItem, { className: "cursor-pointer", value: level, id: level }),
              /* @__PURE__ */ jsx("label", { htmlFor: level, className: "cursor-pointer pl-2", children: level })
            ]
          },
          level
        ))
      ] })
    ] })
  ] });
};
export {
  CourseFilter as default
};
