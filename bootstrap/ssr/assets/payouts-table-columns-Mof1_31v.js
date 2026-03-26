import { jsxs, jsx } from "react/jsx-runtime";
const PayoutsTableColumn = (translate) => {
  const { table } = translate;
  return [
    {
      accessorKey: "payout_amount",
      header: () => /* @__PURE__ */ jsx("div", { className: "pl-4", children: table.payout_amount }),
      cell: ({ row }) => /* @__PURE__ */ jsxs("div", { className: "pl-4 capitalize", children: [
        /* @__PURE__ */ jsx("p", { children: row.original.amount }),
        /* @__PURE__ */ jsx("p", { children: new Date(row.original.created_at).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }) })
      ] })
    },
    {
      accessorKey: "status",
      header: () => /* @__PURE__ */ jsx("div", { className: "text-center", children: table.status }),
      cell: ({ row }) => /* @__PURE__ */ jsx("div", { className: "text-center capitalize", children: row.getValue("status") })
    },
    {
      accessorKey: "payout_method",
      header: () => /* @__PURE__ */ jsx("div", { className: "text-center", children: table.payout_method }),
      cell: ({ row }) => /* @__PURE__ */ jsx("div", { className: "text-center capitalize", children: /* @__PURE__ */ jsx("p", { children: row.original.payout_method }) })
    },
    {
      id: "processed",
      header: () => /* @__PURE__ */ jsx("div", { className: "pr-4 text-end", children: table.processed_date }),
      cell: ({ row }) => /* @__PURE__ */ jsx("div", { className: "pr-4 text-end", children: new Date(row.original.updated_at).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }) })
    }
  ];
};
export {
  PayoutsTableColumn as default
};
