import { jsx, jsxs } from "react/jsx-runtime";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { L as LoadingButton } from "./loading-button-C4Hk_jCd.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Card } from "./card-D8SB2yrw.js";
import { I as Input } from "./input-C6-Ta46A.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { S as Separator } from "./separator-R7EO2G8T.js";
import { D as DashboardLayout } from "./layout-CdQJcF1a.js";
import { usePage, useForm, Link } from "@inertiajs/react";
import { MoveLeft } from "lucide-react";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-label";
import "@radix-ui/react-separator";
import "./sidebar-6wqj6oXO.js";
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
import "./popover-BV7JTqNd.js";
import "@radix-ui/react-popover";
import "date-fns";
import "./scroll-area-DPHRDnwL.js";
import "@radix-ui/react-scroll-area";
import "./app-logo-42nmPdEQ.js";
import "./accordion-DVAMjldm.js";
import "@radix-ui/react-accordion";
import "./route-DlE7FdTW.js";
import "./avatar-Cr_jqfHL.js";
import "@radix-ui/react-avatar";
import "./use-lang-44ndmTOc.js";
const SMTP = ({ property }) => {
  const { props } = usePage();
  const { translate } = props;
  const { button } = translate;
  const { data, setData, put, errors, processing } = useForm(property.properties);
  const handleSubmit = (e) => {
    e.preventDefault();
    put(route("language.property.update", property.id));
  };
  return /* @__PURE__ */ jsx("div", { className: "md:px-3", children: /* @__PURE__ */ jsx(Card, { className: "p-4 sm:p-6", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold", children: property.name }),
      /* @__PURE__ */ jsx(Link, { href: route("language.edit", property.language.code), children: /* @__PURE__ */ jsxs(Button, { children: [
        /* @__PURE__ */ jsx(MoveLeft, {}),
        button.back
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Separator, {}),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2", children: Object.entries(data).map(([key, value]) => /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { children: key }),
      /* @__PURE__ */ jsx(
        Input,
        {
          name: key,
          value: data[key],
          placeholder: "Enter value",
          onChange: (e) => setData(e.target.name, e.target.value)
        }
      ),
      /* @__PURE__ */ jsx(InputError, { message: errors[key] })
    ] }, key)) }),
    /* @__PURE__ */ jsx(Separator, {}),
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end", children: /* @__PURE__ */ jsx(LoadingButton, { loading: processing, children: button.save }) })
  ] }) }) });
};
SMTP.layout = (page) => /* @__PURE__ */ jsx(DashboardLayout, { children: page });
export {
  SMTP as default
};
