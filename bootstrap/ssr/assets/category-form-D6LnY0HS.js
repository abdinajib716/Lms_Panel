import { jsxs, jsx } from "react/jsx-runtime";
import { I as IconPicker } from "./icon-picker-_EIJQgy3.js";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { D as Dialog, a as DialogTrigger, b as DialogContent, c as DialogHeader, d as DialogTitle, e as DialogFooter, f as DialogClose } from "./dialog-DD5SXV81.js";
import { I as Input } from "./input-C6-Ta46A.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { S as ScrollArea } from "./scroll-area-DPHRDnwL.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BxPdBi6V.js";
import { T as Textarea } from "./textarea-DctRxpgE.js";
import { usePage, useForm } from "@inertiajs/react";
import { useState, useEffect } from "react";
import "./use-lang-44ndmTOc.js";
import "./debounce-ZFxqVthq.js";
import "lucide-react";
import "./tooltip-DswKljFZ.js";
import "@radix-ui/react-tooltip";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "lucide-react/dynamic";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-dialog";
import "@radix-ui/react-label";
import "@radix-ui/react-scroll-area";
import "@radix-ui/react-select";
const CategoryForm = ({ title, handler, category }) => {
  const { props } = usePage();
  const { translate } = props;
  const { dashboard, input, button } = translate;
  const [open, setOpen] = useState(false);
  const [openIcon, setOpenIcon] = useState(false);
  const { data, setData, post, put, processing, errors, reset } = useForm({
    name: category ? category.name : "",
    icon: category ? category.icon : "",
    status: category ? category.status : "active",
    description: category ? category.description : ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (category) {
      put(route("blogs.categories.update", category.id), {
        onSuccess: () => {
          setOpen(false);
          reset();
        }
      });
    } else {
      post(route("blogs.categories.store"), {
        onSuccess: () => {
          setOpen(false);
          reset();
        }
      });
    }
  };
  useEffect(() => {
    if (!open) {
      reset();
    }
  }, [open]);
  return /* @__PURE__ */ jsxs(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(DialogTrigger, { children: handler }),
    /* @__PURE__ */ jsxs(DialogContent, { className: "sm:max-w-[425px]", children: [
      /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: title }) }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 py-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: input.title }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "name",
                value: data.name,
                onChange: (e) => setData("name", e.target.value),
                className: errors.name ? "border-red-500" : "",
                placeholder: dashboard.enter_category_name
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.name })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { children: input.category_icon }),
            /* @__PURE__ */ jsx(
              Input,
              {
                required: true,
                readOnly: true,
                type: "text",
                name: "icon",
                value: data.icon,
                placeholder: input.icon_placeholder,
                onClick: () => setOpenIcon(true)
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.icon }),
            /* @__PURE__ */ jsx(Dialog, { open: openIcon, onOpenChange: setOpenIcon, children: /* @__PURE__ */ jsx(DialogContent, { className: "p-0", children: /* @__PURE__ */ jsxs(ScrollArea, { className: "max-h-[90vh] p-6", children: [
              /* @__PURE__ */ jsx(DialogHeader, { className: "mb-6", children: /* @__PURE__ */ jsx(DialogTitle, { children: dashboard.icon_picker }) }),
              /* @__PURE__ */ jsx(
                IconPicker,
                {
                  onSelect: (icon) => {
                    setData("icon", icon);
                    setOpenIcon(false);
                  }
                }
              )
            ] }) }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "status", children: input.category_status }),
            /* @__PURE__ */ jsxs(Select, { value: data.status, onValueChange: (value) => setData("status", value), children: [
              /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsx(SelectItem, { value: "active", children: dashboard.active }),
                /* @__PURE__ */ jsx(SelectItem, { value: "inactive", children: dashboard.inactive })
              ] })
            ] }),
            /* @__PURE__ */ jsx(InputError, { message: errors.status })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "description", children: dashboard.subtitle_80_char }),
            /* @__PURE__ */ jsx(
              Textarea,
              {
                id: "description",
                value: data.description || "",
                onChange: (e) => setData("description", e.target.value),
                className: errors.description ? "border-red-500" : "",
                placeholder: dashboard.enter_category_description,
                maxLength: 80,
                rows: 3
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.description })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(DialogFooter, { children: [
          /* @__PURE__ */ jsx(DialogClose, { children: /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", children: button.close }) }),
          /* @__PURE__ */ jsx(Button, { type: "submit", disabled: processing, children: category ? button.update : button.create })
        ] })
      ] })
    ] })
  ] });
};
export {
  CategoryForm as default
};
