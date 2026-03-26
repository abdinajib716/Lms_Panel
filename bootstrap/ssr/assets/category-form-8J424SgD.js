import { jsxs, jsx } from "react/jsx-runtime";
import { I as IconPicker } from "./icon-picker-_EIJQgy3.js";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { L as LoadingButton } from "./loading-button-C4Hk_jCd.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { D as Dialog, a as DialogTrigger, b as DialogContent, c as DialogHeader, d as DialogTitle, e as DialogFooter, f as DialogClose } from "./dialog-DD5SXV81.js";
import { I as Input } from "./input-C6-Ta46A.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { S as ScrollArea } from "./scroll-area-DPHRDnwL.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BxPdBi6V.js";
import { T as Textarea } from "./textarea-DctRxpgE.js";
import { u as useLang } from "./use-lang-44ndmTOc.js";
import { o as onHandleChange } from "./inertia-BtwbgBI3.js";
import { useForm } from "@inertiajs/react";
import { useState } from "react";
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
const CategoryForm = ({ title, category, lastPosition, handler }) => {
  const [open, setOpen] = useState(false);
  const [openIcon, setOpenIcon] = useState(false);
  const { dashboard, input, button } = useLang();
  const { data, setData, post, errors, processing, reset } = useForm({
    title: category ? category.title : "",
    icon: category ? category.icon : "",
    sort: category ? category.sort : lastPosition + 1,
    status: category ? category.status : 1,
    description: category ? category.description : "",
    thumbnail: null
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (category) {
      post(route("categories.update", category.id), {
        onSuccess: () => setOpen(false)
      });
    } else {
      post(route("categories.store"), {
        onSuccess: () => {
          reset();
          setOpen(false);
        }
      });
    }
  };
  return /* @__PURE__ */ jsxs(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(DialogTrigger, { children: handler }),
    /* @__PURE__ */ jsx(DialogContent, { className: "p-0", children: /* @__PURE__ */ jsxs(ScrollArea, { className: "max-h-[90vh] p-6", children: [
      /* @__PURE__ */ jsx(DialogHeader, { className: "mb-6", children: /* @__PURE__ */ jsx(DialogTitle, { children: title }) }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4 p-0.5", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: input.title }),
          /* @__PURE__ */ jsx(
            Input,
            {
              required: true,
              type: "text",
              name: "title",
              value: data.title,
              placeholder: input.title_placeholder,
              onChange: (e) => onHandleChange(e, setData)
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.title })
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
          /* @__PURE__ */ jsx(Label, { children: input.category_status }),
          /* @__PURE__ */ jsxs(Select, { value: data.status.toString(), onValueChange: (value) => setData("status", Number(value)), children: [
            /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: input.status_placeholder }) }),
            /* @__PURE__ */ jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsx(SelectItem, { value: "1", children: "Active" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "0", children: "Inactive" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: input.description }),
          /* @__PURE__ */ jsx(
            Textarea,
            {
              name: "description",
              value: data.description,
              placeholder: input.description_placeholder,
              onChange: (e) => onHandleChange(e, setData)
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.description })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: input.thumbnail }),
          /* @__PURE__ */ jsx(Input, { type: "file", name: "thumbnail", accept: "image/*", onChange: (e) => {
            var _a;
            return setData("thumbnail", (_a = e.target.files) == null ? void 0 : _a[0]);
          } }),
          /* @__PURE__ */ jsx(InputError, { message: errors.thumbnail })
        ] }),
        /* @__PURE__ */ jsxs(DialogFooter, { className: "flex justify-end space-x-2 pt-4", children: [
          /* @__PURE__ */ jsx(DialogClose, { asChild: true, children: /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", children: button.close }) }),
          /* @__PURE__ */ jsx(LoadingButton, { loading: processing, children: button.save_changes })
        ] })
      ] })
    ] }) })
  ] });
};
export {
  CategoryForm as default
};
