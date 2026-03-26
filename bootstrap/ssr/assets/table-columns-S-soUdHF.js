import { jsxs, jsx } from "react/jsx-runtime";
import { D as DeleteModal } from "./delete-modal-BIvxKwRf.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { Link, router } from "@inertiajs/react";
import { ArrowUpDown, Pencil, Trash2 } from "lucide-react";
import CourseStatusFilter from "./course-status-filter-xmcg3tQZ.js";
import "./dialog-DD5SXV81.js";
import "@radix-ui/react-dialog";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./dropdown-menu-BIfW6iuW.js";
import "@radix-ui/react-dropdown-menu";
import "./route-DlE7FdTW.js";
const TableColumn = (isAdmin, translate) => {
  const { table } = translate;
  return [
    {
      accessorKey: "name",
      header: ({ column }) => {
        return /* @__PURE__ */ jsx("div", { className: "flex items-center pl-4", children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", className: "p-0 hover:bg-transparent", onClick: () => column.toggleSorting(column.getIsSorted() === "asc"), children: [
          table.instructor,
          /* @__PURE__ */ jsx(ArrowUpDown, {})
        ] }) });
      },
      cell: ({ row }) => /* @__PURE__ */ jsxs("div", { className: "pl-4", children: [
        /* @__PURE__ */ jsx("p", { className: "mb-0.5 text-base font-medium", children: row.original.instructor.user.name }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-xs", children: row.original.instructor.user.email })
      ] })
    },
    {
      accessorKey: "title",
      header: table.course_title,
      cell: ({ row }) => /* @__PURE__ */ jsx("div", { className: "py-1 capitalize", children: /* @__PURE__ */ jsx(
        Link,
        {
          href: route("courses.edit", {
            course: row.original.id
          }),
          children: row.getValue("title")
        }
      ) })
    },
    {
      accessorKey: "status",
      header: ({ column }) => /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(CourseStatusFilter, {}) }),
      cell: ({ row }) => /* @__PURE__ */ jsx("div", { className: "py-1 text-center capitalize", children: row.getValue("status") })
    },
    {
      accessorKey: "category",
      header: ({ column }) => {
        return /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx("p", { children: table.category }) });
      },
      cell: ({ row }) => /* @__PURE__ */ jsx("div", { className: "py-1 text-center capitalize", children: /* @__PURE__ */ jsx("p", { children: row.original.course_category.title }) })
    },
    {
      accessorKey: "category_child",
      header: ({ column }) => {
        return /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx("p", { children: table.category_child }) });
      },
      cell: ({ row }) => {
        var _a;
        return /* @__PURE__ */ jsx("div", { className: "py-1 text-center capitalize", children: /* @__PURE__ */ jsx("p", { children: ((_a = row.original.course_category_child) == null ? void 0 : _a.title) || "--" }) });
      }
    },
    {
      accessorKey: "price",
      header: ({ column }) => /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", onClick: () => column.toggleSorting(column.getIsSorted() === "asc"), children: [
        table.price,
        /* @__PURE__ */ jsx(ArrowUpDown, {})
      ] }) }),
      cell: ({ row }) => /* @__PURE__ */ jsx("div", { className: "py-1 text-center capitalize", children: /* @__PURE__ */ jsx("p", { children: row.original.price ?? table.free }) })
    },
    {
      id: "actions",
      header: () => /* @__PURE__ */ jsx("div", { className: "pr-4 text-end", children: table.action }),
      cell: ({ row }) => {
        const course = row.original;
        return /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-2 py-1 pr-4", children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              size: "icon",
              variant: "secondary",
              className: "h-8 w-8",
              onClick: () => router.get(
                route("courses.edit", {
                  course: course.id
                })
              ),
              children: /* @__PURE__ */ jsx(Pencil, {})
            }
          ),
          isAdmin && /* @__PURE__ */ jsx(
            DeleteModal,
            {
              routePath: route("courses.destroy", course.id),
              message: table.delete_course_warning,
              actionComponent: /* @__PURE__ */ jsx(Button, { size: "icon", variant: "ghost", className: "bg-destructive/8 hover:bg-destructive/6 h-8 w-8 p-0", children: /* @__PURE__ */ jsx(Trash2, { className: "text-destructive text-sm" }) })
            }
          )
        ] });
      }
    }
  ];
};
export {
  TableColumn as default
};
