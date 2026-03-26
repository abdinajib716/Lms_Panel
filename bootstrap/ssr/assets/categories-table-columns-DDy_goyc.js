import { jsx, jsxs } from "react/jsx-runtime";
import { B as Button } from "./button-jZyzwgdo.js";
import { ArrowUpDown } from "lucide-react";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
const CategoriesTableColumn = (translate) => {
  const { table } = translate;
  return [
    {
      accessorKey: "title",
      header: ({ column }) => /* @__PURE__ */ jsxs(Button, { type: "button", variant: "ghost", onClick: () => column.toggleSorting(column.getIsSorted() === "asc"), children: [
        table.category_name,
        /* @__PURE__ */ jsx(ArrowUpDown, { className: "ml-2 h-4 w-4" })
      ] }),
      cell: ({ row }) => /* @__PURE__ */ jsx("div", { className: "capitalize", children: row.getValue("title") })
    },
    {
      accessorKey: "courses_count",
      header: ({ column }) => /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxs(Button, { type: "button", variant: "ghost", onClick: () => column.toggleSorting(column.getIsSorted() === "asc"), children: [
        table.courses,
        /* @__PURE__ */ jsx(ArrowUpDown, { className: "ml-2 h-4 w-4" })
      ] }) }),
      cell: ({ row }) => /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx("p", { children: row.original.courses_count }) })
    }
  ];
};
export {
  CategoriesTableColumn as default
};
