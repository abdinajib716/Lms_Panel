import { jsxs, jsx } from "react/jsx-runtime";
import { D as DataSortModal } from "./data-sort-modal-CzOtsWqf.js";
import { D as DeleteModal } from "./delete-modal-BIvxKwRf.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Card } from "./card-D8SB2yrw.js";
import { S as Separator } from "./separator-R7EO2G8T.js";
import { u as useAuth } from "./use-auth-8FvJer_G.js";
import { D as DashboardLayout } from "./layout-CdQJcF1a.js";
import { router } from "@inertiajs/react";
import { Pencil, Trash2, Plus, ArrowDownUp } from "lucide-react";
import { DynamicIcon } from "lucide-react/dynamic";
import CategoryChildForm from "./category-child-form-DEgXCY2l.js";
import CategoryForm from "./category-form-8J424SgD.js";
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
import "@radix-ui/react-separator";
import "./sidebar-6wqj6oXO.js";
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
import "./loading-button-C4Hk_jCd.js";
import "./input-C6-Ta46A.js";
import "./select-BxPdBi6V.js";
import "@radix-ui/react-select";
import "./textarea-DctRxpgE.js";
import "./inertia-BtwbgBI3.js";
const Index = (props) => {
  const { isAdmin } = useAuth();
  const { categories, lastPosition, lastChildPosition, translate } = props;
  const { button, frontend, dashboard } = translate;
  const defaultCategory = categories.find((category) => category.slug === "default");
  const otherCategories = categories.filter((category) => category.slug !== "default");
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
      /* @__PURE__ */ jsx(CategoryForm, { title: dashboard.add_category, handler: /* @__PURE__ */ jsx(Button, { children: dashboard.add_category }), lastPosition }),
      /* @__PURE__ */ jsx(
        DataSortModal,
        {
          title: dashboard.sort_categories,
          data: categories,
          handler: /* @__PURE__ */ jsx(Button, { variant: "ghost", className: "bg-muted hover:bg-muted-foreground/6", children: button.sort_categories }),
          onOrderChange: (newOrder, setOpen) => {
            router.post(
              route("categories.sort"),
              {
                sortedData: newOrder
              },
              {
                preserveScroll: true,
                onSuccess: () => setOpen && setOpen(false)
              }
            );
          },
          renderContent: (item) => /* @__PURE__ */ jsx(Card, { className: "w-full px-4 py-3", children: /* @__PURE__ */ jsx("p", { children: item.title }) })
        }
      )
    ] }),
    categories.length > 0 ? /* @__PURE__ */ jsxs("div", { className: "mt-6 grid grid-cols-1 gap-6 border-t border-gray-300 py-6 md:grid-cols-2 lg:grid-cols-4", children: [
      defaultCategory && /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(DynamicIcon, { size: 20, name: defaultCategory.icon }),
          /* @__PURE__ */ jsx("h2", { children: defaultCategory.title })
        ] }),
        /* @__PURE__ */ jsx(Separator, { className: "my-4" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx("p", { className: "font-medium", children: dashboard.protected_category }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: dashboard.default_category_description })
        ] })
      ] }, defaultCategory.id),
      otherCategories.map((category) => {
        var _a;
        return /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative text-center", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(DynamicIcon, { size: 20, name: category.icon }),
              /* @__PURE__ */ jsx("h2", { children: category.title })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "absolute -top-1 right-0 space-x-1", children: [
              /* @__PURE__ */ jsx(
                CategoryForm,
                {
                  title: dashboard.update_category,
                  category,
                  lastPosition,
                  handler: /* @__PURE__ */ jsx(Button, { size: "icon", variant: "ghost", className: "bg-muted hover:bg-muted-foreground/10 h-8 w-8 rounded-full p-0", children: /* @__PURE__ */ jsx(Pencil, { className: "text-sm" }) })
                }
              ),
              isAdmin && /* @__PURE__ */ jsx(
                DeleteModal,
                {
                  message: frontend.delete_warning,
                  routePath: route("categories.destroy", category.id),
                  actionComponent: /* @__PURE__ */ jsx(Button, { size: "icon", variant: "ghost", className: "bg-destructive/8 hover:bg-destructive/6 h-8 w-8 rounded-full p-0", children: /* @__PURE__ */ jsx(Trash2, { className: "text-destructive text-sm" }) })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx(Separator, { className: "my-4" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            (_a = category.category_children) == null ? void 0 : _a.map((child) => /* @__PURE__ */ jsxs("div", { className: "border-border relative rounded-md border px-2 py-1", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(DynamicIcon, { size: 16, name: child.icon }),
                /* @__PURE__ */ jsx("p", { children: child.title })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "absolute top-0 right-0 flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(
                  CategoryChildForm,
                  {
                    categoryChild: child,
                    categoryId: Number(category.id),
                    title: dashboard.update_category,
                    handler: /* @__PURE__ */ jsx(Button, { size: "icon", variant: "ghost", className: "h-8 w-8 p-0", children: /* @__PURE__ */ jsx(Pencil, { className: "text-sm" }) }),
                    lastChildPosition
                  }
                ),
                isAdmin && /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
                  DeleteModal,
                  {
                    message: frontend.delete_warning,
                    routePath: route("category-child.destroy", child.id),
                    actionComponent: /* @__PURE__ */ jsx(Button, { size: "icon", variant: "ghost", className: "hover:bg-destructive/6 h-8 w-8", children: /* @__PURE__ */ jsx(Trash2, { className: "text-destructive text-sm" }) })
                  }
                ) })
              ] })
            ] }, child.id)),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-baseline gap-3", children: [
              /* @__PURE__ */ jsx(
                CategoryChildForm,
                {
                  categoryId: Number(category.id),
                  title: dashboard.add_new_category,
                  handler: /* @__PURE__ */ jsxs(Button, { size: "sm", variant: "ghost", className: "bg-muted hover:!bg-muted-foreground/10 w-full", children: [
                    /* @__PURE__ */ jsx(Plus, { className: "text-sm" }),
                    /* @__PURE__ */ jsx("span", { children: button.create })
                  ] }),
                  lastChildPosition
                }
              ),
              /* @__PURE__ */ jsx(
                DataSortModal,
                {
                  title: button.sort_categories,
                  data: category.category_children || [],
                  handler: /* @__PURE__ */ jsxs(Button, { size: "sm", variant: "ghost", className: "bg-muted hover:!bg-muted-foreground/10 w-full", children: [
                    /* @__PURE__ */ jsx(ArrowDownUp, { className: "text-sm" }),
                    /* @__PURE__ */ jsx("span", { children: button.sort })
                  ] }),
                  onOrderChange: (newOrder, setOpen) => {
                    router.post(
                      route("category-child.sort"),
                      {
                        sortedData: newOrder
                      },
                      {
                        preserveScroll: true,
                        onSuccess: () => setOpen && setOpen(false)
                      }
                    );
                  },
                  renderContent: (item) => /* @__PURE__ */ jsx(Card, { className: "w-full px-4 py-3", children: /* @__PURE__ */ jsx("p", { children: item.title }) })
                }
              )
            ] })
          ] })
        ] }, category.id);
      })
    ] }) : /* @__PURE__ */ jsx(Card, { className: "mt-6 border-t border-gray-300 p-6", children: /* @__PURE__ */ jsx("h2", { className: "text-center", children: dashboard.no_results }) })
  ] });
};
Index.layout = (page) => /* @__PURE__ */ jsx(DashboardLayout, { children: page });
export {
  Index as default
};
