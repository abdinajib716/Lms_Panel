import { jsx, jsxs } from "react/jsx-runtime";
import { B as Button } from "./button-jZyzwgdo.js";
import { c as cn } from "./utils-BmtPBcb0.js";
import { router } from "@inertiajs/react";
import { ArrowUpDown } from "lucide-react";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
const TableColumn = (home, system, translate) => {
  const { table, common } = translate;
  return [
    {
      accessorKey: "name",
      header: () => /* @__PURE__ */ jsx("p", { className: "px-3", children: table.name }),
      cell: ({ row }) => /* @__PURE__ */ jsx("div", { className: "px-3 py-1 text-sm font-medium", children: row.getValue("name") })
    },
    {
      accessorKey: "type",
      header: ({ column }) => {
        return /* @__PURE__ */ jsx("div", { className: "px-3", children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", onClick: () => column.toggleSorting(column.getIsSorted() === "asc"), children: [
          table.type,
          /* @__PURE__ */ jsx(ArrowUpDown, { className: "ml-2 h-4 w-4" })
        ] }) });
      },
      cell: ({ row }) => /* @__PURE__ */ jsx("div", { className: "text-muted-foreground px-3 py-1 text-sm capitalize", children: row.getValue("type") })
    },
    {
      accessorKey: "use_case",
      header: () => /* @__PURE__ */ jsx("p", { className: "px-3", children: table.use_case }),
      cell: ({ row }) => /* @__PURE__ */ jsx("div", { className: "text-muted-foreground px-3 py-1 text-sm", children: row.original.type === "administrative" ? table.best_single_instructor : table.best_multiple_instructors })
    },
    {
      accessorKey: "title",
      header: () => /* @__PURE__ */ jsx("p", { className: "px-3", children: table.title }),
      cell: ({ row }) => /* @__PURE__ */ jsx("div", { className: "text-muted-foreground px-3 py-1 text-sm", children: row.getValue("title") })
    },
    {
      accessorKey: "sections",
      header: () => /* @__PURE__ */ jsx("p", { className: "px-3", children: table.sections }),
      cell: ({ row }) => {
        var _a;
        return /* @__PURE__ */ jsx("div", { className: "text-muted-foreground px-3 py-1 text-sm", children: ((_a = row.original.sections) == null ? void 0 : _a.length) || 0 });
      }
    },
    {
      id: "action",
      header: () => /* @__PURE__ */ jsx("div", { className: "px-3 text-end", children: table.action }),
      cell: ({ row }) => {
        var _a;
        const page = row.original;
        const isSelected = page.slug === ((_a = home == null ? void 0 : home.fields) == null ? void 0 : _a.page_slug);
        return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end space-x-3 px-3 py-1", children: [
          /* @__PURE__ */ jsx(Button, { asChild: true, size: "sm", variant: "ghost", className: "border-border border", children: /* @__PURE__ */ jsx("a", { target: "_blank", href: route("home.demo", { slug: page.slug }), children: common.preview }) }),
          system.sub_type === page.type && /* @__PURE__ */ jsx(
            Button,
            {
              size: "sm",
              disabled: isSelected,
              variant: isSelected ? "outline" : "secondary",
              className: cn("rounded-sm", isSelected ? "border-secondary-foreground text-secondary-foreground" : ""),
              onClick: () => isSelected ? "" : router.post(route("settings.home-page.update", home == null ? void 0 : home.id), {
                page_id: page.id,
                page_name: page.name,
                page_slug: page.slug
              }),
              children: isSelected ? table.selected : table.select
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
