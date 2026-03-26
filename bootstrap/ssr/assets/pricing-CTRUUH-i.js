import { jsx, jsxs } from "react/jsx-runtime";
import { D as DateTimePicker } from "./datetime-picker-Bln2jqxu.js";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { L as LoadingButton } from "./loading-button-C4Hk_jCd.js";
import { A as Accordion, a as AccordionItem, c as AccordionContent } from "./accordion-DVAMjldm.js";
import { C as Card } from "./card-D8SB2yrw.js";
import { C as Checkbox } from "./checkbox-CO4DegBm.js";
import { I as Input } from "./input-C6-Ta46A.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { R as RadioGroup, a as RadioGroupItem } from "./radio-group-sSS5HHUP.js";
import { D as DashboardLayout } from "./layout-CdQJcF1a.js";
import { o as onHandleChange } from "./inertia-BtwbgBI3.js";
import { usePage, useForm } from "@inertiajs/react";
import "./button-jZyzwgdo.js";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "lucide-react";
import "react-day-picker";
import "./popover-BV7JTqNd.js";
import "@radix-ui/react-popover";
import "./select-BxPdBi6V.js";
import "@radix-ui/react-select";
import "./use-lang-44ndmTOc.js";
import "date-fns";
import "@radix-ui/react-accordion";
import "@radix-ui/react-checkbox";
import "@radix-ui/react-label";
import "@radix-ui/react-radio-group";
import "./sidebar-6wqj6oXO.js";
import "./separator-R7EO2G8T.js";
import "@radix-ui/react-separator";
import "./sheet-CuVwNO0O.js";
import "@radix-ui/react-dialog";
import "./tooltip-DswKljFZ.js";
import "@radix-ui/react-tooltip";
import "./main-BqrosZ6t.js";
import "next-themes";
import "sonner";
import "./appearance-Df_e7R4w.js";
import "./dropdown-menu-BIfW6iuW.js";
import "@radix-ui/react-dropdown-menu";
import "./language-BbuOCfpR.js";
import "./notification-BXalLCUz.js";
import "./scroll-area-DPHRDnwL.js";
import "@radix-ui/react-scroll-area";
import "./app-logo-42nmPdEQ.js";
import "./route-DlE7FdTW.js";
import "./avatar-Cr_jqfHL.js";
import "@radix-ui/react-avatar";
const Pricing = () => {
  const { props } = usePage();
  const { translate } = props;
  const { dashboard, input, button } = translate;
  const { tab, prices, expiries, course } = props;
  const { data, setData, post, errors, processing } = useForm({
    tab,
    pricing_type: course.pricing_type || "",
    price: course.price || "",
    discount: Boolean(course.discount) || false,
    discount_price: course.discount_price || "",
    expiry_type: course.expiry_type || "",
    expiry_duration: course.expiry_duration ? new Date(course.expiry_duration) : /* @__PURE__ */ new Date()
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("courses.update", { id: course.id }));
  };
  return /* @__PURE__ */ jsx(Card, { className: "container p-4 sm:p-6", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
    /* @__PURE__ */ jsxs(Accordion, { collapsible: true, type: "single", value: data.pricing_type, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs(Label, { children: [
          dashboard.pricing_type,
          " *"
        ] }),
        /* @__PURE__ */ jsx(
          RadioGroup,
          {
            defaultValue: data.pricing_type,
            className: "flex items-center space-x-4 pt-2 pb-1",
            onValueChange: (value) => setData("pricing_type", value),
            children: prices.map((price) => /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsx(RadioGroupItem, { className: "cursor-pointer", id: price, value: price }),
              /* @__PURE__ */ jsx(Label, { htmlFor: price, className: "capitalize", children: price })
            ] }, price))
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.pricing_type })
      ] }),
      /* @__PURE__ */ jsx(AccordionItem, { value: prices[1], className: "border-none", children: /* @__PURE__ */ jsxs(AccordionContent, { className: "space-y-4 p-0.5", children: [
        /* @__PURE__ */ jsxs("div", { className: "pt-3", children: [
          /* @__PURE__ */ jsxs(Label, { children: [
            dashboard.price,
            " *"
          ] }),
          /* @__PURE__ */ jsx(
            Input,
            {
              type: "number",
              name: "price",
              value: data.price,
              onChange: (e) => onHandleChange(e, setData),
              placeholder: input.course_price_placeholder
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.price })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsx(
              Checkbox,
              {
                id: "discount",
                name: "discount",
                checked: data.discount,
                onCheckedChange: (checked) => {
                  setData("discount", checked);
                }
              }
            ),
            /* @__PURE__ */ jsx(Label, { htmlFor: "discount", children: dashboard.check_course_discount })
          ] }),
          data.discount && /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              Input,
              {
                type: "number",
                name: "discount_price",
                value: data.discount_price,
                onChange: (e) => onHandleChange(e, setData),
                placeholder: input.discount_price_placeholder
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.discount_price })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs(Accordion, { collapsible: true, type: "single", value: data.expiry_type, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { children: "Expiry period type" }),
        /* @__PURE__ */ jsx(
          RadioGroup,
          {
            defaultValue: data.expiry_type,
            className: "flex items-center space-x-4 pt-2 pb-1",
            onValueChange: (value) => setData("expiry_type", value),
            children: expiries.map((expiry) => /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsx(RadioGroupItem, { className: "cursor-pointer", id: expiry, value: expiry }),
              /* @__PURE__ */ jsx(Label, { htmlFor: expiry, className: "capitalize", children: expiry })
            ] }, expiry))
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.expiry_type })
      ] }),
      /* @__PURE__ */ jsx(AccordionItem, { value: expiries[1], className: "border-none", children: /* @__PURE__ */ jsx(AccordionContent, { className: "space-y-4 p-0.5", children: /* @__PURE__ */ jsxs("div", { className: "pt-3", children: [
        /* @__PURE__ */ jsx(Label, { children: "Expiry date" }),
        /* @__PURE__ */ jsx(DateTimePicker, { date: data.expiry_duration, setDate: (date) => setData("expiry_duration", date) }),
        /* @__PURE__ */ jsx(InputError, { message: errors.expiry_duration })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsx(LoadingButton, { loading: processing, children: button.save_changes }) })
  ] }) });
};
Pricing.layout = (page) => /* @__PURE__ */ jsx(DashboardLayout, { children: page });
export {
  Pricing as default
};
