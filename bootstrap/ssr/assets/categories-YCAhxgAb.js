import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { D as DataSortModal } from "./data-sort-modal-CzOtsWqf.js";
import { D as DeleteModal } from "./delete-modal-BIvxKwRf.js";
import { B as Badge } from "./badge-B4crNM73.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Card, a as CardHeader, c as CardTitle, b as CardContent } from "./card-D8SB2yrw.js";
import { D as DashboardLayout } from "./layout-CdQJcF1a.js";
import { usePage, Head, router } from "@inertiajs/react";
import { SortAsc, Plus, FolderOpen, PlayCircle, PauseCircle, Edit, Trash2 } from "lucide-react";
import { DynamicIcon } from "lucide-react/dynamic";
import CategoryForm from "./category-form-D6LnY0HS.js";
import "nprogress";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "react";
import "./dialog-DD5SXV81.js";
import "@radix-ui/react-dialog";
import "./scroll-area-DPHRDnwL.js";
import "@radix-ui/react-scroll-area";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./sidebar-6wqj6oXO.js";
import "./separator-R7EO2G8T.js";
import "@radix-ui/react-separator";
import "./sheet-CuVwNO0O.js";
import "./tooltip-DswKljFZ.js";
import "@radix-ui/react-tooltip";
import "./main-BqrosZ6t.js";
import "next-themes";
import "sonner";
import "./appearance-Df_e7R4w.js";
import "./dropdown-menu-BIfW6iuW.js";
import "@radix-ui/react-dropdown-menu";
import "./language-BbuOCfpR.js";
import "./notification-BXalLCUz.js";
import "./popover-BV7JTqNd.js";
import "@radix-ui/react-popover";
import "date-fns";
import "./app-logo-42nmPdEQ.js";
import "./accordion-DVAMjldm.js";
import "@radix-ui/react-accordion";
import "./route-DlE7FdTW.js";
import "./avatar-Cr_jqfHL.js";
import "@radix-ui/react-avatar";
import "./use-lang-44ndmTOc.js";
import "./icon-picker-_EIJQgy3.js";
import "./debounce-ZFxqVthq.js";
import "./label-Dd_w2I6M.js";
import "@radix-ui/react-label";
import "./input-error-CEW4jhey.js";
import "./input-C6-Ta46A.js";
import "./select-BxPdBi6V.js";
import "@radix-ui/react-select";
import "./textarea-DctRxpgE.js";
const BlogCategoriesIndex = () => {
  const { props } = usePage();
  const { categories, statistics, translate } = props;
  const { dashboard, button } = translate;
  const defaultCategory = categories.find((category) => category.slug === "default");
  const allCategories = categories.filter((category) => category.slug !== "default");
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: dashboard.blog_categories }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("h1", { className: "hidden text-xl font-semibold sm:block", children: dashboard.blog_category }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsx(
            DataSortModal,
            {
              title: dashboard.sort_categories,
              data: allCategories,
              handler: /* @__PURE__ */ jsxs(Button, { variant: "ghost", className: "bg-muted hover:bg-muted-foreground/6", children: [
                /* @__PURE__ */ jsx(SortAsc, {}),
                " ",
                button.sort_categories
              ] }),
              onOrderChange: (newOrder, setOpen) => {
                router.post(
                  route("blogs.categories.sort"),
                  {
                    sortedData: newOrder
                  },
                  {
                    preserveScroll: true,
                    onSuccess: () => setOpen && setOpen(false)
                  }
                );
              },
              renderContent: (item) => /* @__PURE__ */ jsx(Card, { className: "w-full px-4 py-3", children: /* @__PURE__ */ jsx("p", { children: item.name }) })
            }
          ),
          /* @__PURE__ */ jsx(
            CategoryForm,
            {
              title: dashboard.create_category,
              handler: /* @__PURE__ */ jsxs(Button, { children: [
                /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" }),
                button.create
              ] })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-4 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
            /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: dashboard.total_categories }),
            /* @__PURE__ */ jsx(FolderOpen, { className: "text-muted-foreground h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: statistics.total }) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
            /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: dashboard.active }),
            /* @__PURE__ */ jsx(PlayCircle, { className: "h-4 w-4 text-green-600" })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-green-600", children: statistics.active }) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
            /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: dashboard.inactive }),
            /* @__PURE__ */ jsx(PauseCircle, { className: "h-4 w-4 text-red-600" })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-red-600", children: statistics.inactive }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: [
        defaultCategory && /* @__PURE__ */ jsxs(Card, { className: "relative", children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "pb-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(DynamicIcon, { name: defaultCategory.icon }),
              /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: defaultCategory.name })
            ] }),
            defaultCategory.description && /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: defaultCategory.description })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm", children: [
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: dashboard.total_number_of_blog }),
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: defaultCategory.blogs_count })
          ] }) })
        ] }),
        allCategories.map((category) => /* @__PURE__ */ jsxs(Card, { className: "relative", children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "pb-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(DynamicIcon, { name: category.icon }),
                /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: category.name }),
                /* @__PURE__ */ jsx(Badge, { variant: category.status === "active" ? "default" : "destructive", children: category.status })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-1", children: [
                /* @__PURE__ */ jsx(
                  CategoryForm,
                  {
                    title: button.update,
                    category,
                    handler: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", children: /* @__PURE__ */ jsx(Edit, { className: "h-4 w-4" }) })
                  }
                ),
                /* @__PURE__ */ jsx(
                  DeleteModal,
                  {
                    routePath: route("blogs.categories.destroy", category.id),
                    actionComponent: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", children: /* @__PURE__ */ jsx(Trash2, { className: "text-destructive h-4 w-4" }) })
                  }
                )
              ] })
            ] }),
            category.description && /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: category.description })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm", children: [
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: dashboard.total_number_of_blog }),
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: category.blogs_count })
          ] }) })
        ] }, category.id))
      ] }),
      categories.length === 0 && /* @__PURE__ */ jsxs("div", { className: "py-12 text-center", children: [
        /* @__PURE__ */ jsx(FolderOpen, { className: "text-muted-foreground mx-auto h-12 w-12" }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 text-lg font-semibold", children: "No categories found" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-2", children: "Get started by creating your first blog category" }),
        /* @__PURE__ */ jsx(
          CategoryForm,
          {
            title: "Create Category",
            handler: /* @__PURE__ */ jsxs(Button, { children: [
              /* @__PURE__ */ jsx(Plus, { className: "mr-2 h-4 w-4" }),
              "Add New Category"
            ] })
          }
        )
      ] })
    ] })
  ] });
};
BlogCategoriesIndex.layout = (page) => /* @__PURE__ */ jsx(DashboardLayout, { children: page });
export {
  BlogCategoriesIndex as default
};
