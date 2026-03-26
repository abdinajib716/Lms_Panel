import { jsx, jsxs } from "react/jsx-runtime";
import { B as Button } from "./button-jZyzwgdo.js";
import { ArrowUpDown } from "lucide-react";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
const CoursesTableColumn = (translate) => {
  const { table } = translate;
  return [
    {
      accessorKey: "title",
      header: table.title,
      cell: ({ row }) => /* @__PURE__ */ jsx("div", { className: "capitalize", children: row.getValue("title") })
    },
    {
      accessorKey: "enrollments_count",
      header: ({ column }) => /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxs(Button, { type: "button", variant: "ghost", onClick: () => column.toggleSorting(column.getIsSorted() === "asc"), children: [
        table.enrollments,
        /* @__PURE__ */ jsx(ArrowUpDown, {})
      ] }) }),
      cell: ({ row }) => /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx("p", { children: row.original.enrollments_count }) })
    },
    {
      accessorKey: "average_rating",
      header: ({ column }) => /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxs(Button, { type: "button", variant: "ghost", onClick: () => column.toggleSorting(column.getIsSorted() === "asc"), children: [
        table.rating,
        /* @__PURE__ */ jsx(ArrowUpDown, {})
      ] }) }),
      cell: ({ row }) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-1 text-center", children: [
        /* @__PURE__ */ jsx("p", { children: Number(row.original.average_rating).toFixed(1) }),
        /* @__PURE__ */ jsx("span", { className: "text-yellow-500", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", stroke: "currentColor", children: /* @__PURE__ */ jsx("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }) }) }),
        /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground text-sm", children: [
          "(",
          row.original.reviews_count,
          ")"
        ] })
      ] })
    }
  ];
};
export {
  CoursesTableColumn as default
};
