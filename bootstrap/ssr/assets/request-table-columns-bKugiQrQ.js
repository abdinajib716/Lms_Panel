import { jsxs, jsx } from "react/jsx-runtime";
import { A as Avatar, a as AvatarImage, b as AvatarFallback } from "./avatar-Cr_jqfHL.js";
import { B as Button } from "./button-jZyzwgdo.js";
import "react";
import "@radix-ui/react-avatar";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
const PayoutsTableColumn = (translate) => {
  const { table } = translate;
  return [
    {
      accessorKey: "profile",
      header: () => /* @__PURE__ */ jsx("div", { className: "pl-4", children: table.name }),
      cell: ({ row }) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 pl-4 capitalize", children: [
        /* @__PURE__ */ jsxs(Avatar, { children: [
          /* @__PURE__ */ jsx(AvatarImage, { src: row.original.user.photo || "", alt: row.original.user.name, className: "object-cover" }),
          /* @__PURE__ */ jsx(AvatarFallback, { children: row.original.user.name.charAt(0) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { children: row.original.user.name }),
          /* @__PURE__ */ jsx("p", { children: row.original.user.email })
        ] })
      ] })
    },
    {
      accessorKey: "amount",
      header: () => /* @__PURE__ */ jsx("div", { className: "text-center", children: table.payout_amount }),
      cell: ({ row }) => /* @__PURE__ */ jsx("div", { className: "text-center capitalize", children: /* @__PURE__ */ jsxs("p", { children: [
        row.original.amount,
        "$"
      ] }) })
    },
    {
      accessorKey: "status",
      header: () => /* @__PURE__ */ jsx("div", { className: "text-center", children: table.status }),
      cell: ({ row }) => /* @__PURE__ */ jsx("div", { className: "text-center capitalize", children: row.getValue("status") })
    },
    {
      id: "action",
      header: () => /* @__PURE__ */ jsx("div", { className: "pr-4 text-end", children: table.action }),
      cell: ({ row }) => /* @__PURE__ */ jsx("div", { className: "pr-4 text-end", children: /* @__PURE__ */ jsx(Button, { asChild: true, type: "button", children: /* @__PURE__ */ jsx("a", { href: route("payouts.gateway.index", { slug: "web", request_id: row.original.id }), children: table.pay }) }) })
    }
  ];
};
export {
  PayoutsTableColumn as default
};
