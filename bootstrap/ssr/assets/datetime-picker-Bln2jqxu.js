import { jsx, jsxs } from "react/jsx-runtime";
import { b as buttonVariants, B as Button } from "./button-jZyzwgdo.js";
import { ChevronRight, ChevronLeft, CalendarIcon } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { c as cn } from "./utils-BmtPBcb0.js";
import { P as Popover, a as PopoverTrigger, b as PopoverContent } from "./popover-BV7JTqNd.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BxPdBi6V.js";
import { u as useLang } from "./use-lang-44ndmTOc.js";
import { format } from "date-fns";
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DayPicker,
    {
      showOutsideDays,
      className: cn("p-3", className),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range" ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md" : "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-8 w-8 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames
      },
      components: {
        IconLeft: ({ className: className2, ...props2 }) => /* @__PURE__ */ jsx(ChevronLeft, { className: cn("h-4 w-4", className2), ...props2 }),
        IconRight: ({ className: className2, ...props2 }) => /* @__PURE__ */ jsx(ChevronRight, { className: cn("h-4 w-4", className2), ...props2 })
      },
      ...props
    }
  );
}
Calendar.displayName = "Calendar";
function DateTimePicker({ date, setDate }) {
  const { button } = useLang();
  const minuteOptions = Array.from({ length: 60 }, (_, i) => i);
  const hourOptions = Array.from({ length: 12 }, (_, i) => i + 1);
  const handleTimeChange = (type, value) => {
    const newDate = new Date(date);
    if (type === "hour") {
      let hour = parseInt(value);
      if (date.getHours() >= 12) {
        hour = hour === 12 ? 12 : hour + 12;
      } else {
        hour = hour === 12 ? 0 : hour;
      }
      newDate.setHours(hour);
    } else if (type === "minute") {
      newDate.setMinutes(parseInt(value));
    } else if (type === "meridiem") {
      const hours = newDate.getHours();
      if (value === "PM" && hours < 12) {
        newDate.setHours(hours + 12);
      } else if (value === "AM" && hours >= 12) {
        newDate.setHours(hours - 12);
      }
    }
    setDate(newDate);
  };
  return /* @__PURE__ */ jsxs(Popover, { children: [
    /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "outline", className: cn("w-full justify-between px-3 text-left font-normal", !date && "text-muted-foreground"), children: [
      date ? format(date, "PPP p") : /* @__PURE__ */ jsx("span", { children: button.pick_a_date }),
      /* @__PURE__ */ jsx(CalendarIcon, { className: "ml-2 h-4 w-4" })
    ] }) }),
    /* @__PURE__ */ jsxs(PopoverContent, { className: "w-auto p-0", align: "start", children: [
      /* @__PURE__ */ jsx(Calendar, { mode: "single", selected: date, onSelect: (newDate) => newDate && setDate(newDate), initialFocus: true }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 border-t p-3", children: [
        /* @__PURE__ */ jsxs(Select, { value: format(date, "h"), onValueChange: (value) => handleTimeChange("hour", value), children: [
          /* @__PURE__ */ jsx(SelectTrigger, { className: "w-[70px]", children: /* @__PURE__ */ jsx(SelectValue, {}) }),
          /* @__PURE__ */ jsx(SelectContent, { children: hourOptions.map((hour) => /* @__PURE__ */ jsx(SelectItem, { value: hour.toString(), children: hour.toString().padStart(2, "0") }, hour)) })
        ] }),
        /* @__PURE__ */ jsx("span", { children: ":" }),
        /* @__PURE__ */ jsxs(Select, { value: date.getMinutes().toString(), onValueChange: (value) => handleTimeChange("minute", value), children: [
          /* @__PURE__ */ jsx(SelectTrigger, { className: "w-[70px]", children: /* @__PURE__ */ jsx(SelectValue, {}) }),
          /* @__PURE__ */ jsx(SelectContent, { children: minuteOptions.map((minute) => /* @__PURE__ */ jsx(SelectItem, { value: minute.toString(), children: minute.toString().padStart(2, "0") }, minute)) })
        ] }),
        /* @__PURE__ */ jsxs(Select, { value: format(date, "a"), onValueChange: (value) => handleTimeChange("meridiem", value), children: [
          /* @__PURE__ */ jsx(SelectTrigger, { className: "w-[70px]", children: /* @__PURE__ */ jsx(SelectValue, {}) }),
          /* @__PURE__ */ jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsx(SelectItem, { value: "AM", children: "AM" }),
            /* @__PURE__ */ jsx(SelectItem, { value: "PM", children: "PM" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  DateTimePicker as D
};
