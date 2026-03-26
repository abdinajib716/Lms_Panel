import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { D as Dialog, b as DialogContent, c as DialogHeader, d as DialogTitle, a as DialogTrigger } from "./dialog-DD5SXV81.js";
import { u as useLang } from "./use-lang-44ndmTOc.js";
import * as React from "react";
import { useState, createContext, useContext, useEffect, useRef } from "react";
import { C as ChunkedUploaderInput } from "./chunked-uploader-input-MwXGR7K4.js";
import { L as LoadingButton } from "./loading-button-C4Hk_jCd.js";
import { I as Input } from "./input-C6-Ta46A.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { T as Textarea } from "./textarea-DctRxpgE.js";
import { o as onHandleChange } from "./inertia-BtwbgBI3.js";
import { i as isEmptyArrayItem, a as generatePropertyFields } from "./page-CO5EAoAP.js";
import { usePage, router, useForm } from "@inertiajs/react";
import { C as Card, b as CardContent } from "./card-D8SB2yrw.js";
import { I as IconPicker } from "./icon-picker-_EIJQgy3.js";
import { S as ScrollArea } from "./scroll-area-DPHRDnwL.js";
import { T as TooltipProvider } from "./tooltip-DswKljFZ.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { c as cn } from "./utils-BmtPBcb0.js";
import { X, Plus, ArrowUpDown, Search, Star, Pencil } from "lucide-react";
import { T as TableHeader } from "./table-header-C_F4x8YG.js";
import { T as Table, a as TableBody, b as TableRow, c as TableCell } from "./table-tRsx9RfJ.js";
import { useReactTable, getFilteredRowModel, getSortedRowModel, getCoreRowModel, flexRender } from "@tanstack/react-table";
import { T as TablePageSize } from "./table-page-size-Xj85uK4t.js";
import { d as debounce } from "./debounce-ZFxqVthq.js";
import { g as getQueryParams } from "./route-DlE7FdTW.js";
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, c as DropdownMenuItem } from "./dropdown-menu-BIfW6iuW.js";
import { A as Avatar, a as AvatarImage, b as AvatarFallback } from "./avatar-Cr_jqfHL.js";
import "@radix-ui/react-dialog";
import "axios";
import "sonner";
import "./input-error-CEW4jhey.js";
import "@radix-ui/react-label";
import "class-variance-authority";
import "lucide-react/dynamic";
import "@radix-ui/react-scroll-area";
import "@radix-ui/react-tooltip";
import "@radix-ui/react-slot";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-avatar";
const SectionEditorContext = createContext(void 0);
const SectionEditorProvider = ({ children, section, onSuccess, onError }) => {
  const [open2, setOpen] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const contextValue = {
    section,
    // Dialog state
    open: open2,
    setOpen,
    // Form submission state
    isSubmit,
    setIsSubmit
  };
  return /* @__PURE__ */ jsx(SectionEditorContext.Provider, { value: contextValue, children });
};
const useSectionEditor = () => {
  const context = useContext(SectionEditorContext);
  if (context === void 0) {
    throw new Error("useSectionEditor must be used within a SectionEditorProvider");
  }
  return context;
};
const IconPickerDialog = ({ onSelect, value, name, placeholder }) => {
  const [openIcon, setOpenIcon] = useState(false);
  const { dashboard } = useLang();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Input, { required: true, readOnly: true, type: "text", name, value, placeholder: placeholder || name, onClick: () => setOpenIcon(true) }),
    /* @__PURE__ */ jsx(TooltipProvider, { delayDuration: 0, children: /* @__PURE__ */ jsx(Dialog, { open: openIcon, onOpenChange: setOpenIcon, children: /* @__PURE__ */ jsx(DialogContent, { className: "p-0", children: /* @__PURE__ */ jsxs(ScrollArea, { className: "max-h-[90vh] p-6", children: [
      /* @__PURE__ */ jsx(DialogHeader, { className: "mb-6", children: /* @__PURE__ */ jsx(DialogTitle, { children: dashboard.icon_picker }) }),
      /* @__PURE__ */ jsx(
        IconPicker,
        {
          onSelect: (icon) => {
            onSelect(icon);
            setOpenIcon(false);
          }
        }
      )
    ] }) }) }) })
  ] });
};
const ArrayFields = ({ field, onChange }) => {
  const { button } = useLang();
  const [imagePreviews, setImagePreviews] = useState({});
  const [arrayItems, setArrayItems] = useState(Array.isArray(field.value) ? field.value : []);
  useEffect(() => {
    if (Array.isArray(field.value)) {
      setArrayItems(field.value);
    }
  }, [field.value, field.type]);
  const handleArrayFileChange = (index, key, file) => {
    handleArrayItemChange(index, "new_image", file);
    const previewKey = `${index}-${key}`;
    if (file && file.type.startsWith("image/")) {
      if (imagePreviews[previewKey]) {
        URL.revokeObjectURL(imagePreviews[previewKey]);
      }
      const previewUrl = URL.createObjectURL(file);
      setImagePreviews((prev) => ({
        ...prev,
        [previewKey]: previewUrl
      }));
    } else {
      setImagePreviews((prev) => {
        const updated = { ...prev };
        if (updated[previewKey]) {
          URL.revokeObjectURL(updated[previewKey]);
          delete updated[previewKey];
        }
        return updated;
      });
      if (file === null) {
        handleArrayItemChange(index, "new_image", null);
      }
    }
  };
  const handleArrayItemChange = (index, key, value) => {
    const updatedItems = [...arrayItems];
    if (!updatedItems[index]) {
      updatedItems[index] = {};
    }
    updatedItems[index][key] = value;
    setArrayItems(updatedItems);
    onChange(updatedItems);
  };
  const addArrayItem = () => {
    var _a;
    const emptyItem = (_a = field.fields) == null ? void 0 : _a.reduce((acc, fieldDef) => {
      acc[fieldDef.name] = fieldDef.value;
      return acc;
    }, {});
    const newItems = [...arrayItems, emptyItem];
    setArrayItems(newItems);
    onChange(newItems);
  };
  const removeArrayItem = (index) => {
    const newItems = arrayItems.filter((_, i) => i !== index);
    setArrayItems(newItems);
    onChange(newItems);
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "space-y-4", children: arrayItems.map((item, index) => {
      var _a;
      const isFirstItemEmpty = index === 0 && isEmptyArrayItem(item);
      return /* @__PURE__ */ jsx(Card, { className: cn("relative", isFirstItemEmpty && "hidden"), children: /* @__PURE__ */ jsxs(CardContent, { className: "p-4 pt-6", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            size: "icon",
            type: "button",
            variant: "ghost",
            onClick: () => removeArrayItem(index),
            className: "absolute top-2 right-2 text-red-600 hover:text-red-800",
            children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" })
          }
        ),
        (_a = field.fields) == null ? void 0 : _a.map((subField, fieldIdx) => {
          const prevImage = subField.type === "file" ? item.image : null;
          return /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: `${field.name}-${index}-${subField.name}`, className: "mb-2 block", children: subField.label }),
            /* @__PURE__ */ jsx("div", { className: "mt-1", children: subField.type === "textarea" ? /* @__PURE__ */ jsx(
              Textarea,
              {
                id: `${field.name}-${index}-${subField.name}`,
                value: item[subField.name] || "",
                onChange: (e) => handleArrayItemChange(index, subField.name, e.target.value),
                rows: 3
              }
            ) : subField.type === "file" ? /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsx(
                Input,
                {
                  type: "file",
                  id: `${field.name}-${index}-${subField.name}`,
                  accept: "image/*",
                  onChange: (e) => {
                    var _a2;
                    return handleArrayFileChange(index, subField.name, ((_a2 = e.target.files) == null ? void 0 : _a2[0]) || null);
                  },
                  className: "cursor-pointer"
                }
              ),
              (imagePreviews[`${index}-${subField.name}`] || prevImage) && /* @__PURE__ */ jsx("div", { className: "relative inline-block", children: /* @__PURE__ */ jsx(
                "img",
                {
                  alt: "Preview",
                  src: imagePreviews[`${index}-${subField.name}`] || prevImage,
                  className: "h-20 w-auto rounded-lg border object-cover shadow-sm"
                }
              ) })
            ] }) : subField.type === "icon" ? /* @__PURE__ */ jsx(
              IconPickerDialog,
              {
                name: subField.name,
                value: item[subField.name] || "",
                placeholder: "Pick your category icon",
                onSelect: (icon) => handleArrayItemChange(index, subField.name, icon)
              }
            ) : /* @__PURE__ */ jsx(
              Input,
              {
                type: subField.type === "number" ? "number" : "text",
                id: `${field.name}-${index}-${subField.name}`,
                value: item[subField.name] || "",
                onChange: (e) => handleArrayItemChange(index, subField.name, e.target.value)
              }
            ) })
          ] }, fieldIdx);
        })
      ] }) }, index);
    }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxs(Button, { type: "button", onClick: addArrayItem, variant: "outline", size: "sm", className: "flex items-center", children: [
      /* @__PURE__ */ jsx(Plus, { className: "mr-1 h-4 w-4" }),
      button.add_item
    ] }) })
  ] });
};
const CategoriesTableColumn = (translate) => [
  {
    accessorKey: "title",
    header: ({ column }) => /* @__PURE__ */ jsxs(Button, { type: "button", variant: "ghost", onClick: () => column.toggleSorting(column.getIsSorted() === "asc"), children: [
      translate.table.category_name,
      /* @__PURE__ */ jsx(ArrowUpDown, { className: "ml-2 h-4 w-4" })
    ] }),
    cell: ({ row }) => /* @__PURE__ */ jsx("div", { className: "capitalize", children: row.getValue("title") })
  },
  {
    accessorKey: "courses_count",
    header: ({ column }) => /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxs(Button, { type: "button", variant: "ghost", onClick: () => column.toggleSorting(column.getIsSorted() === "asc"), children: [
      translate.table.courses,
      /* @__PURE__ */ jsx(ArrowUpDown, { className: "ml-2 h-4 w-4" })
    ] }) }),
    cell: ({ row }) => /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx("p", { children: row.original.courses_count }) })
  }
];
const TableFilter = (props) => {
  const { Icon, data, title, component, globalSearch, tablePageSizes, routeName, className, searchKey = "search" } = props;
  const page = usePage();
  const urlParams = getQueryParams(page.url);
  const searchRef = useRef(null);
  const searchHandler = debounce(async (e) => {
    const query = e.target.value;
    router.get(
      route(routeName || "", {
        ...urlParams,
        [searchKey]: query
      }),
      {},
      { preserveState: true }
      // This preserves component state across navigation
    );
  }, 300);
  useEffect(() => {
    if (urlParams[searchKey] && searchRef.current) {
      searchRef.current.focus();
    }
  }, [props]);
  return /* @__PURE__ */ jsxs("div", { className: cn("items-center justify-between p-6 md:flex", className), children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-5", children: [
      Icon && /* @__PURE__ */ jsx("div", { className: "bg-primary-25 flex h-10 w-10 items-center justify-center rounded-md", children: Icon }),
      title && /* @__PURE__ */ jsx("p", { className: "mb-4 text-lg font-semibold md:mb-0", children: title })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end", children: [
      globalSearch && /* @__PURE__ */ jsxs("div", { className: "relative w-full md:max-w-[260px]", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            ref: searchRef,
            placeholder: "Search",
            onChange: searchHandler,
            className: "focus:border-primary border-border h-10 w-full rounded-md border py-[15px] pr-4 pl-12 text-sm font-normal focus:ring-0 focus:outline-0",
            defaultValue: urlParams[searchKey] ?? ""
          }
        ),
        /* @__PURE__ */ jsx(Search, { className: "absolute top-3 left-4 z-10 h-4 w-4" })
      ] }),
      routeName && /* @__PURE__ */ jsx(
        TablePageSize,
        {
          routeName,
          pageData: data,
          dropdownList: tablePageSizes,
          pageSizeKey: `${searchKey}_per_page`,
          className: "ml-3"
        }
      ),
      component && component
    ] })
  ] });
};
const TableFooter = (props) => {
  const { paginationInfo, paginationKey = "page" } = props;
  const { current_page, last_page, first_page_url, last_page_url, next_page_url, prev_page_url } = paginationInfo;
  const page = usePage();
  const urlParams = getQueryParams(page.url);
  const dropdownList = [];
  if (last_page > 0) {
    for (let i = 1; i <= last_page; i++) {
      dropdownList.push({
        key: `${i}`,
        value: i
      });
    }
  } else {
    dropdownList.push({
      key: "1",
      value: 1
    });
  }
  const gotoPage = (pageNumber) => {
    router.get(
      route(props.routeName, {
        ...props.routeParams || {},
        ...urlParams,
        [paginationKey]: pageNumber
      }),
      {},
      { preserveState: true }
    );
  };
  const gotoRoute = (path) => {
    const pathParams = getQueryParams(path);
    router.get(
      route(props.routeName, {
        ...props.routeParams || {},
        ...urlParams,
        [paginationKey]: pathParams.page
      }),
      {},
      { preserveState: true }
    );
  };
  const menuItem = (e) => {
    return `text-center py-1 ${current_page === e && "bg-primary-50"}`;
  };
  return /* @__PURE__ */ jsxs("div", { className: `space-y-4 ${props.className}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center", children: [
      /* @__PURE__ */ jsx("span", { className: "mr-1", children: /* @__PURE__ */ jsxs("strong", { children: [
        current_page,
        " of ",
        last_page
      ] }) }),
      /* @__PURE__ */ jsx("span", { className: "mr-3", children: "| Go to page:" }),
      /* @__PURE__ */ jsxs(DropdownMenu, { children: [
        /* @__PURE__ */ jsx(DropdownMenuTrigger, { children: /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", className: "h-8 w-[60px] rounded-md border", children: current_page }) }),
        /* @__PURE__ */ jsx(DropdownMenuContent, { align: "end", className: "min-w-[60px]", children: /* @__PURE__ */ jsx(ScrollArea, { className: "", children: dropdownList.map((item) => /* @__PURE__ */ jsx(DropdownMenuItem, { onClick: () => gotoPage(item.value), className: menuItem(item.value), children: item.value }, item.key)) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center", children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "button",
          variant: "ghost",
          disabled: !prev_page_url,
          onClick: () => gotoRoute(first_page_url),
          className: "bg-muted border-border h-8 border px-2 text-xs sm:px-3",
          children: "<<First"
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "button",
          variant: "ghost",
          disabled: !prev_page_url,
          onClick: () => gotoRoute(prev_page_url),
          className: "bg-muted border-border mx-3 h-8 border px-2 text-xs sm:px-3",
          children: "Prev"
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "button",
          variant: "ghost",
          disabled: !next_page_url,
          onClick: () => gotoRoute(next_page_url),
          className: "bg-muted border-border mx-3 h-8 border px-2 text-xs sm:px-3",
          children: "Next"
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "button",
          variant: "ghost",
          disabled: !next_page_url,
          onClick: () => gotoRoute(last_page_url),
          className: "bg-muted border-border h-8 border px-2 text-xs sm:px-3",
          children: "Last>>"
        }
      )
    ] })
  ] });
};
const Categories = ({ categories, selectedIds = [], onCourseSelect }) => {
  var _a;
  const page = usePage();
  const routeName = page.props.type === "demo" ? "home.demo" : "home";
  const [sorting, setSorting] = React.useState([]);
  const table = useReactTable({
    data: categories.data,
    columns: CategoriesTableColumn(page.props.translate),
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: { sorting }
  });
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(
      TableFilter,
      {
        data: categories,
        title: "Categories",
        globalSearch: true,
        searchKey: "category",
        tablePageSizes: [10, 15, 20, 25],
        routeName
      }
    ),
    /* @__PURE__ */ jsxs(Table, { className: "border-border border-y", children: [
      /* @__PURE__ */ jsx(TableHeader, { table }),
      /* @__PURE__ */ jsx(TableBody, { children: ((_a = table.getRowModel().rows) == null ? void 0 : _a.length) ? table.getRowModel().rows.map((row) => /* @__PURE__ */ jsx(
        TableRow,
        {
          "data-state": row.getIsSelected() && "selected",
          className: cn("hover:bg-muted cursor-pointer", (selectedIds == null ? void 0 : selectedIds.includes(Number(row.original.id))) && "bg-secondary-light"),
          onClick: () => onCourseSelect && onCourseSelect(Number(row.original.id)),
          children: row.getVisibleCells().map((cell) => /* @__PURE__ */ jsx(TableCell, { children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id))
        },
        row.id
      )) : /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { className: "h-24 text-center", children: page.props.translate.common.no_results_found }) }) })
    ] }),
    /* @__PURE__ */ jsx(TableFooter, { className: "p-4", routeName, paginationInfo: categories, paginationKey: "category" })
  ] });
};
const CoursesTableColumn = (translate) => [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => /* @__PURE__ */ jsx("div", { className: "capitalize", children: row.getValue("title") })
  },
  {
    accessorKey: "enrollments_count",
    header: ({ column }) => /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxs(Button, { type: "button", variant: "ghost", onClick: () => column.toggleSorting(column.getIsSorted() === "asc"), children: [
      translate.table.enrollments,
      /* @__PURE__ */ jsx(ArrowUpDown, {})
    ] }) }),
    cell: ({ row }) => /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx("p", { children: row.original.enrollments_count }) })
  },
  {
    accessorKey: "average_rating",
    header: ({ column }) => /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxs(Button, { type: "button", variant: "ghost", onClick: () => column.toggleSorting(column.getIsSorted() === "asc"), children: [
      translate.table.rating,
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
const Courses = ({ courses, selectedIds = [], onCourseSelect }) => {
  var _a;
  const page = usePage();
  const routeName = page.props.type === "demo" ? "home.demo" : "home";
  const [sorting, setSorting] = React.useState([]);
  const table = useReactTable({
    data: courses.data,
    columns: CoursesTableColumn(page.props.translate),
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: { sorting }
  });
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(
      TableFilter,
      {
        data: courses,
        title: "Courses",
        globalSearch: true,
        searchKey: "course",
        tablePageSizes: [10, 15, 20, 25],
        routeName
      }
    ),
    /* @__PURE__ */ jsxs(Table, { className: "border-border border-y", children: [
      /* @__PURE__ */ jsx(TableHeader, { table }),
      /* @__PURE__ */ jsx(TableBody, { children: ((_a = table.getRowModel().rows) == null ? void 0 : _a.length) ? table.getRowModel().rows.map((row) => /* @__PURE__ */ jsx(
        TableRow,
        {
          "data-state": row.getIsSelected() && "selected",
          className: cn("hover:bg-muted cursor-pointer", (selectedIds == null ? void 0 : selectedIds.includes(Number(row.original.id))) && "bg-secondary-light"),
          onClick: () => onCourseSelect && onCourseSelect(Number(row.original.id)),
          children: row.getVisibleCells().map((cell) => /* @__PURE__ */ jsx(TableCell, { children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id))
        },
        row.id
      )) : /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { className: "h-24 text-center", children: page.props.translate.common.no_results_found }) }) })
    ] }),
    /* @__PURE__ */ jsx(TableFooter, { className: "p-4", routeName, paginationInfo: courses })
  ] });
};
const InstructorsTableColumn = (translate) => [
  {
    accessorKey: "user.name",
    header: ({ column }) => /* @__PURE__ */ jsxs(Button, { type: "button", variant: "ghost", onClick: () => column.toggleSorting(column.getIsSorted() === "asc"), children: [
      translate.table.instructor,
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
      translate.table.enrollments,
      /* @__PURE__ */ jsx(ArrowUpDown, { className: "ml-2 h-4 w-4" })
    ] }) }),
    cell: ({ row }) => /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx("p", { children: row.original.total_enrollments_count }) })
  },
  {
    accessorKey: "average_rating",
    header: ({ column }) => /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxs(Button, { type: "button", variant: "ghost", onClick: () => column.toggleSorting(column.getIsSorted() === "asc"), children: [
      translate.table.rating,
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
const Instructors = ({ instructors, selectedIds = [], onCourseSelect }) => {
  var _a;
  const page = usePage();
  const routeName = page.props.type === "demo" ? "home.demo" : "home";
  const [sorting, setSorting] = React.useState([]);
  const table = useReactTable({
    data: instructors.data,
    columns: InstructorsTableColumn(page.props.translate),
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: { sorting }
  });
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(
      TableFilter,
      {
        data: instructors,
        title: "Instructors",
        globalSearch: true,
        searchKey: "instructor",
        tablePageSizes: [10, 15, 20, 25],
        routeName
      }
    ),
    /* @__PURE__ */ jsxs(Table, { className: "border-border border-y", children: [
      /* @__PURE__ */ jsx(TableHeader, { table }),
      /* @__PURE__ */ jsx(TableBody, { children: ((_a = table.getRowModel().rows) == null ? void 0 : _a.length) ? table.getRowModel().rows.map((row) => /* @__PURE__ */ jsx(
        TableRow,
        {
          "data-state": row.getIsSelected() && "selected",
          className: cn("hover:bg-muted cursor-pointer", (selectedIds == null ? void 0 : selectedIds.includes(Number(row.original.id))) && "bg-secondary-light"),
          onClick: () => onCourseSelect && onCourseSelect(Number(row.original.id)),
          children: row.getVisibleCells().map((cell) => /* @__PURE__ */ jsx(TableCell, { children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id))
        },
        row.id
      )) : /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { className: "h-24 text-center", children: page.props.translate.common.no_results_found }) }) })
    ] }),
    /* @__PURE__ */ jsx(TableFooter, { className: "p-4", routeName, paginationInfo: instructors, paginationKey: "instructor" })
  ] });
};
const Contents = ({ field, section_slug, selectedIds = [], onChange }) => {
  var _a, _b;
  const { props } = usePage();
  const { courses, categories, instructors } = props;
  const { section } = useSectionEditor();
  const [contentList, setContentList] = useState(((_a = section.properties) == null ? void 0 : _a.contents) ? (_b = section.properties) == null ? void 0 : _b.contents : []);
  useEffect(() => {
    if (field.type === "contents" && Array.isArray(field.value)) {
      setContentList(field.value);
    }
  }, [field.value, field.type]);
  const onSelectChange = (id) => {
    let updatedContents;
    if (contentList.includes(id)) {
      updatedContents = contentList.filter((item) => item !== id);
    } else {
      updatedContents = [...contentList, id];
    }
    setContentList(updatedContents);
    onChange == null ? void 0 : onChange(updatedContents);
  };
  const renderField = () => {
    switch (section_slug) {
      case "hero":
      case "top_course":
      case "top_courses":
      case "new_courses":
        return /* @__PURE__ */ jsx(Courses, { courses, selectedIds, onCourseSelect: onSelectChange });
      case "top_categories":
      case "category_courses":
        return /* @__PURE__ */ jsx(Categories, { categories, selectedIds, onCourseSelect: onSelectChange });
      case "top_instructors":
        return /* @__PURE__ */ jsx(Instructors, { instructors, selectedIds, onCourseSelect: onSelectChange });
      case "blogs":
        return /* @__PURE__ */ jsx("h1", { children: "Blogs" });
      default:
        return null;
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "rounded-md border", children: renderField() });
};
const Fields = ({ field, onChange }) => {
  const { section } = useSectionEditor();
  const [localValue, setLocalValue] = useState(field.value || "");
  useEffect(() => {
    setLocalValue(field.value || "");
  }, [field.value, field.type]);
  const handleInputChange = (e) => {
    const { value, type } = e.target;
    if (type === "checkbox") {
      const checked = e.target.checked;
      setLocalValue(checked);
      onChange(checked);
      return;
    }
    setLocalValue(value);
    onChange(value);
  };
  const handleFileChange = (e) => {
    var _a;
    const file = ((_a = e.target.files) == null ? void 0 : _a[0]) || null;
    setLocalValue(file);
    onChange(file);
  };
  const renderField = () => {
    var _a;
    switch (field.type) {
      case "contents":
        return /* @__PURE__ */ jsx(Contents, { field, section_slug: section.slug, onChange });
      case "text":
      case "url":
        return /* @__PURE__ */ jsx(Input, { type: "text", id: field.name, name: field.name, value: localValue, onChange: handleInputChange });
      case "textarea":
        return /* @__PURE__ */ jsx(Textarea, { id: field.name, name: field.name, rows: 3, value: localValue, onChange: handleInputChange });
      case "number":
        return /* @__PURE__ */ jsx(Input, { type: "number", id: field.name, name: field.name, value: localValue, onChange: handleInputChange });
      case "image":
      case "file":
        return /* @__PURE__ */ jsx(Input, { type: "file", id: field.name, name: field.name, onChange: handleFileChange });
      case "boolean":
        return /* @__PURE__ */ jsx(
          Input,
          {
            type: "checkbox",
            id: field.name,
            name: field.name,
            checked: localValue || false,
            onChange: handleInputChange,
            className: "h-4 w-4"
          }
        );
      case "array":
        return /* @__PURE__ */ jsx(ArrayFields, { field, onChange });
      case "object":
        return /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "p-4", children: (_a = field.fields) == null ? void 0 : _a.map((subField, index) => /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: `${field.name}-${subField.name}`, className: "mb-2 block", children: subField.label }),
          /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx(
            Fields,
            {
              field: {
                ...subField,
                name: `${field.name}-${subField.name}`,
                value: field.value && field.value[subField.name] !== void 0 ? field.value[subField.name] : subField.value
              },
              onChange: (value) => {
                const newValue = { ...field.value || {}, [subField.name]: value };
                onChange(newValue);
              }
            }
          ) })
        ] }, index)) }) });
      default:
        return null;
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
    field.type !== "boolean" && field.type !== "contents" && /* @__PURE__ */ jsx(Label, { htmlFor: field.name, className: "mb-2 block", children: field.label }),
    renderField(),
    field.type === "boolean" && /* @__PURE__ */ jsx(Label, { htmlFor: field.name, className: "ml-2 inline-block", children: field.label })
  ] });
};
const EditForm = () => {
  const { input, button, frontend } = useLang();
  const { section, setOpen, isSubmit, setIsSubmit } = useSectionEditor();
  const [isFileSelected, setIsFileSelected] = useState(false);
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [thumbnailPreview, setThumbnailPreview] = useState(section.thumbnail || null);
  const [backgroundPreview, setBackgroundPreview] = useState(section.background_image || null);
  const { data, setData, post, reset, processing, errors } = useForm({
    title: section.title,
    sub_title: section.sub_title,
    description: section.description || "",
    thumbnail: null,
    video_url: section.video_url,
    background_image: null,
    background_color: section.background_color,
    properties: section.properties,
    active: section.active,
    sort: section.sort
  });
  const properties = generatePropertyFields(data.properties);
  const [propertyFields, setPropertyFields] = useState(properties);
  useEffect(() => {
    setPropertyFields(generatePropertyFields(section.properties));
  }, [section]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFileSelected) {
      setIsSubmit(true);
      return;
    }
    submitForm();
  };
  const submitForm = () => {
    post(route("page.section.update", section.id), {
      onSuccess: () => {
        reset();
        setOpen(false);
        setIsSubmit(false);
      }
    });
  };
  useEffect(() => {
    if (data.video_url && isFileUploaded) {
      submitForm();
      reset("video_url");
      setIsFileUploaded(false);
    }
  }, [data.video_url]);
  const handlePropertyChange = (name, value) => {
    setData((data2) => ({
      ...data2,
      properties: {
        ...data2.properties,
        [name]: value
      }
    }));
  };
  useEffect(() => {
    if (!open) {
      reset();
    }
  }, [open]);
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      section.flags.title && /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "title", children: input.title }),
        /* @__PURE__ */ jsx(
          Input,
          {
            type: "text",
            id: "title",
            name: "title",
            value: data.title,
            onChange: (e) => onHandleChange(e, setData),
            placeholder: input.title_placeholder
          }
        ),
        errors.title && /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-red-600", children: errors.title })
      ] }),
      section.flags.sub_title && /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "sub_title", children: input.sub_title }),
        /* @__PURE__ */ jsx(
          Input,
          {
            type: "text",
            id: "sub_title",
            name: "sub_title",
            value: data.sub_title,
            onChange: (e) => onHandleChange(e, setData),
            placeholder: input.title_placeholder
          }
        ),
        errors.sub_title && /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-red-600", children: errors.sub_title })
      ] }),
      section.flags.description && /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "description", children: input.description }),
        /* @__PURE__ */ jsx(
          Textarea,
          {
            id: "description",
            name: "description",
            value: data.description || "",
            onChange: (e) => onHandleChange(e, setData),
            placeholder: input.description_placeholder,
            rows: 3
          }
        ),
        errors.description && /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-red-600", children: errors.description })
      ] }),
      section.flags.thumbnail && /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "thumbnail", children: input.thumbnail }),
        /* @__PURE__ */ jsx(
          Input,
          {
            type: "file",
            id: "thumbnail",
            name: "thumbnail",
            accept: "image/*",
            onChange: (e) => onHandleChange(e, setData, setThumbnailPreview),
            className: "cursor-pointer"
          }
        ),
        errors.thumbnail && /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-red-600", children: errors.thumbnail }),
        thumbnailPreview && /* @__PURE__ */ jsx("img", { src: thumbnailPreview, alt: "Thumbnail Preview", className: "h-32 w-auto rounded-lg border object-cover shadow-sm" })
      ] }),
      section.flags.video_url && /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "video_url", children: input.preview_video }),
        /* @__PURE__ */ jsx(
          ChunkedUploaderInput,
          {
            isSubmit,
            filetype: "video",
            delayUpload: false,
            onFileSelected: (file) => {
              setIsFileSelected(true);
            },
            onFileUploaded: (fileData) => {
              setIsFileUploaded(true);
              setData("video_url", fileData.file_url);
            },
            onError: (errors2) => {
              setIsSubmit(false);
            },
            onCancelUpload: () => {
              setIsSubmit(false);
            }
          }
        ),
        errors.video_url && /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-red-600", children: errors.video_url })
      ] }),
      section.flags.background_image && /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "background_image", children: input.background_image }),
        /* @__PURE__ */ jsx(
          Input,
          {
            type: "file",
            id: "background_image",
            name: "background_image",
            onChange: (e) => onHandleChange(e, setData, setBackgroundPreview)
          }
        ),
        errors.background_image && /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-red-600", children: errors.background_image }),
        backgroundPreview && /* @__PURE__ */ jsx("img", { src: backgroundPreview, alt: "Background Image Preview", className: "h-32 w-auto rounded-lg border object-cover shadow-sm" })
      ] }),
      section.flags.background_color && /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "background_color", children: input.background_color }),
        /* @__PURE__ */ jsx(
          Input,
          {
            type: "color",
            id: "background_color",
            name: "background_color",
            value: data.background_color,
            onChange: (e) => onHandleChange(e, setData)
          }
        ),
        errors.background_color && /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-red-600", children: errors.background_color })
      ] }),
      propertyFields.length > 0 && /* @__PURE__ */ jsxs("div", { className: "", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium", children: frontend.section_properties }),
        /* @__PURE__ */ jsx("div", { className: "mt-4 space-y-6", children: propertyFields.map((field, index) => {
          return /* @__PURE__ */ jsx(Fields, { field, onChange: (value) => handlePropertyChange(field.name, value) }, `${field.name}-${index}`);
        }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 flex justify-end", children: /* @__PURE__ */ jsx(LoadingButton, { loading: processing || isSubmit, disabled: processing || isSubmit, children: button.save }) })
  ] });
};
const SectionEditor = ({ section, actionComponent }) => {
  return /* @__PURE__ */ jsx(SectionEditorProvider, { section, children: /* @__PURE__ */ jsx(SectionEditorContent, { actionComponent }) });
};
const SectionEditorContent = ({ actionComponent }) => {
  const { button, frontend } = useLang();
  const { open: open2, setOpen, isSubmit, section } = useSectionEditor();
  return /* @__PURE__ */ jsxs(Dialog, { open: open2, onOpenChange: (value) => !isSubmit && setOpen(value), children: [
    /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: actionComponent }),
    /* @__PURE__ */ jsxs(DialogContent, { className: "max-h-[90vh] overflow-y-auto", children: [
      /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsxs(DialogTitle, { className: "text-lg font-medium", children: [
        button.update,
        " ",
        section.name,
        " ",
        frontend.section
      ] }) }),
      /* @__PURE__ */ jsx(EditForm, {})
    ] })
  ] });
};
const Section = ({ containerClass, contentClass, children, pageSection, customize, containerStyle, contentStyle, ...props }) => {
  return /* @__PURE__ */ jsx("section", { className: cn("container", containerClass), ...props, style: containerStyle, children: /* @__PURE__ */ jsxs("div", { className: cn(contentClass, customize && "section-edit"), style: contentStyle, children: [
    customize && pageSection && /* @__PURE__ */ jsx(
      SectionEditor,
      {
        section: pageSection,
        actionComponent: /* @__PURE__ */ jsx(Button, { size: "icon", variant: "secondary", className: "absolute top-3 right-3 z-20", children: /* @__PURE__ */ jsx(Pencil, { className: "h-7 w-7" }) })
      }
    ),
    children
  ] }) });
};
export {
  Section as default
};
