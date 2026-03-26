import { jsx } from "react/jsx-runtime";
import { d as TableHeader$1, b as TableRow, e as TableHead } from "./table-tRsx9RfJ.js";
import { flexRender } from "@tanstack/react-table";
const TableHeader = (props) => {
  const { table, className, tableHeadClass } = props;
  return /* @__PURE__ */ jsx(TableHeader$1, { className, children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ jsx(TableRow, { children: headerGroup.headers.map((header) => {
    return /* @__PURE__ */ jsx(TableHead, { className: tableHeadClass, children: header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext()) }, header.id);
  }) }, headerGroup.id)) });
};
export {
  TableHeader as T
};
