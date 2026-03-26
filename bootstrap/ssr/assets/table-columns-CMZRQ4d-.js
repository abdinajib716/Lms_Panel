import { jsxs, jsx } from "react/jsx-runtime";
import { D as DeleteModal } from "./delete-modal-BIvxKwRf.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { Link, router } from "@inertiajs/react";
import { ArrowUpDown, Eye, Pencil, Trash2 } from "lucide-react";
import "./dialog-DD5SXV81.js";
import "@radix-ui/react-dialog";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
const TableColumn = (translate) => {
  const { table } = translate;
  return [
    {
      accessorKey: "creator",
      header: ({ column }) => {
        return /* @__PURE__ */ jsx("div", { className: "flex items-center pl-4", children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", className: "p-0 hover:bg-transparent", onClick: () => column.toggleSorting(column.getIsSorted() === "asc"), children: [
          table.creator,
          /* @__PURE__ */ jsx(ArrowUpDown, {})
        ] }) });
      },
      cell: ({ row }) => /* @__PURE__ */ jsxs("div", { className: "pl-4", children: [
        /* @__PURE__ */ jsx("p", { className: "mb-0.5 text-base font-medium", children: row.original.user.name }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-xs", children: row.original.user.email })
      ] }),
      sortingFn: (a, b) => a.original.user.name.localeCompare(b.original.user.name)
    },
    {
      accessorKey: "title",
      header: table.title,
      cell: ({ row }) => /* @__PURE__ */ jsx("div", { className: "py-1 capitalize", children: /* @__PURE__ */ jsx(Link, { href: route("blogs.edit", { blog: row.original.id }), children: row.getValue("title") }) })
    },
    {
      accessorKey: "category",
      header: () => /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx("p", { children: table.category }) }),
      cell: ({ row }) => {
        var _a;
        return /* @__PURE__ */ jsx("div", { className: "py-1 text-center capitalize", children: /* @__PURE__ */ jsx("p", { children: ((_a = row.original.category) == null ? void 0 : _a.name) ?? "--" }) });
      },
      sortingFn: (a, b) => {
        var _a, _b;
        return (((_a = a.original.category) == null ? void 0 : _a.name) || "").localeCompare(((_b = b.original.category) == null ? void 0 : _b.name) || "");
      }
    },
    {
      accessorKey: "status",
      header: ({ column }) => /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", onClick: () => column.toggleSorting(column.getIsSorted() === "asc"), children: [
        table.status,
        /* @__PURE__ */ jsx(ArrowUpDown, {})
      ] }) }),
      cell: ({ row }) => /* @__PURE__ */ jsx("div", { className: "py-1 text-center capitalize", children: row.getValue("status") })
    },
    {
      id: "actions",
      header: () => /* @__PURE__ */ jsx("div", { className: "pr-4 text-end", children: table.action }),
      cell: ({ row }) => {
        const blog = row.original;
        return /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-2 py-1 pr-4", children: [
          /* @__PURE__ */ jsx(Button, { asChild: true, size: "icon", variant: "secondary", className: "h-8 w-8", children: /* @__PURE__ */ jsx("a", { target: "_blank", href: route("blogs.preview", blog.id), children: /* @__PURE__ */ jsx(Eye, {}) }) }),
          /* @__PURE__ */ jsx(Button, { size: "icon", variant: "secondary", className: "h-8 w-8", onClick: () => router.get(route("blogs.edit", blog.id)), children: /* @__PURE__ */ jsx(Pencil, {}) }),
          /* @__PURE__ */ jsx(
            DeleteModal,
            {
              routePath: route("blogs.destroy", blog.id),
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
