import { jsxs, jsx } from "react/jsx-runtime";
import { A as Avatar, a as AvatarImage, b as AvatarFallback } from "./avatar-Cr_jqfHL.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { ArrowUpDown, Star } from "lucide-react";
import "react";
import "@radix-ui/react-avatar";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
const InstructorsTableColumn = (translate) => {
  const { table } = translate;
  return [
    {
      accessorKey: "user.name",
      header: ({ column }) => /* @__PURE__ */ jsxs(Button, { type: "button", variant: "ghost", onClick: () => column.toggleSorting(column.getIsSorted() === "asc"), children: [
        table.instructor,
        /* @__PURE__ */ jsx(ArrowUpDown, { className: "ml-2 h-4 w-4" })
      ] }),
      cell: ({ row }) => /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsxs(Avatar, { className: "h-8 w-8", children: [
          /* @__PURE__ */ jsx(AvatarImage, { src: row.original.user.photo || "", alt: row.original.user.name, className: "object-cover" }),
          /* @__PURE__ */ jsx(AvatarFallback, { children: row.original.user.name.charAt(0) })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "capitalize", children: row.original.user.name })
      ] })
    },
    {
      accessorKey: "total_enrollments",
      header: ({ column }) => /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxs(Button, { type: "button", variant: "ghost", onClick: () => column.toggleSorting(column.getIsSorted() === "asc"), children: [
        table.enrollments,
        /* @__PURE__ */ jsx(ArrowUpDown, { className: "ml-2 h-4 w-4" })
      ] }) }),
      cell: ({ row }) => /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx("p", { children: row.original.total_enrollments_count }) })
    },
    {
      accessorKey: "average_rating",
      header: ({ column }) => /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxs(Button, { type: "button", variant: "ghost", onClick: () => column.toggleSorting(column.getIsSorted() === "asc"), children: [
        table.rating,
        /* @__PURE__ */ jsx(ArrowUpDown, { className: "ml-2 h-4 w-4" })
      ] }) }),
      cell: ({ row }) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-1 text-center", children: [
        /* @__PURE__ */ jsx("p", { children: Number(row.original.total_average_rating).toFixed(1) }),
        /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 fill-yellow-400 text-yellow-400" }),
        /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground text-sm", children: [
          "(",
          row.original.total_reviews_count,
          ")"
        ] })
      ] })
    }
  ];
};
export {
  InstructorsTableColumn as default
};
