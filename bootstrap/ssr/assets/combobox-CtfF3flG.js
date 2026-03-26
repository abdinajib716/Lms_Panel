import { jsx, jsxs } from "react/jsx-runtime";
import { B as Button } from "./button-jZyzwgdo.js";
import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { Command as Command$1 } from "cmdk";
import { Search, ChevronsUpDown, Check } from "lucide-react";
import { c as cn } from "./utils-BmtPBcb0.js";
import { P as Popover, a as PopoverTrigger, b as PopoverContent } from "./popover-BV7JTqNd.js";
const Command = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1,
  {
    ref,
    className: cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    ),
    ...props
  }
));
Command.displayName = Command$1.displayName;
const CommandInput = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ jsx(Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ jsx(
    Command$1.Input,
    {
      ref,
      className: cn(
        "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    }
  )
] }));
CommandInput.displayName = Command$1.Input.displayName;
const CommandList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1.List,
  {
    ref,
    className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
    ...props
  }
));
CommandList.displayName = Command$1.List.displayName;
const CommandEmpty = React.forwardRef((props, ref) => /* @__PURE__ */ jsx(
  Command$1.Empty,
  {
    ref,
    className: "py-6 text-center text-sm",
    ...props
  }
));
CommandEmpty.displayName = Command$1.Empty.displayName;
const CommandGroup = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1.Group,
  {
    ref,
    className: cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    ),
    ...props
  }
));
CommandGroup.displayName = Command$1.Group.displayName;
const CommandSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1.Separator,
  {
    ref,
    className: cn("-mx-1 h-px bg-border", className),
    ...props
  }
));
CommandSeparator.displayName = Command$1.Separator.displayName;
const CommandItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      className
    ),
    ...props
  }
));
CommandItem.displayName = Command$1.Item.displayName;
const Combobox = ({ data, placeholder, onSelect, defaultValue, translate }) => {
  var _a, _b, _c;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue || "");
  const initialRenderRef = useRef(true);
  useEffect(() => {
    if (defaultValue && (initialRenderRef.current || defaultValue !== value)) {
      const defaultItem = data.find((item) => item.value === defaultValue);
      if (defaultItem) {
        setValue(defaultValue);
        if (!initialRenderRef.current) {
          onSelect(defaultItem);
        }
      }
    }
    initialRenderRef.current = false;
  }, [defaultValue, data, value, onSelect]);
  const handleSelect = (selected) => {
    const newValue = selected.value === value ? "" : selected.value;
    setValue(newValue);
    onSelect(selected);
    setOpen(false);
  };
  return /* @__PURE__ */ jsxs(Popover, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(PopoverTrigger, { className: "w-full", children: /* @__PURE__ */ jsxs(Button, { type: "button", variant: "outline", role: "combobox", "aria-expanded": open, className: "w-full justify-between", children: [
      value ? (_a = data.find((item) => item.value === value)) == null ? void 0 : _a.label : placeholder,
      /* @__PURE__ */ jsx(ChevronsUpDown, { className: "opacity-50" })
    ] }) }),
    /* @__PURE__ */ jsx(PopoverContent, { className: "w-[var(--radix-popover-trigger-width)] p-0", children: /* @__PURE__ */ jsxs(Command, { children: [
      /* @__PURE__ */ jsx(CommandInput, { placeholder: ((_b = translate == null ? void 0 : translate.input) == null ? void 0 : _b.search_placeholder) || "Search element...", className: "focus:border-none focus:ring-0 focus:outline-none" }),
      /* @__PURE__ */ jsxs(CommandList, { children: [
        /* @__PURE__ */ jsx(CommandEmpty, { children: ((_c = translate == null ? void 0 : translate.frontend) == null ? void 0 : _c.no_element_found) || "No element found." }),
        /* @__PURE__ */ jsx(CommandGroup, { className: "max-h-[300px] overflow-y-auto", children: data.map((item) => /* @__PURE__ */ jsxs(CommandItem, { value: item.value, onSelect: () => handleSelect(item), children: [
          item.label,
          /* @__PURE__ */ jsx(Check, { className: cn("ml-auto", value === item.value ? "opacity-100" : "opacity-0") })
        ] }, item.value)) })
      ] })
    ] }) })
  ] });
};
export {
  Combobox as C
};
