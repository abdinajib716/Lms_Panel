import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { L as LoadingButton } from "./loading-button-C4Hk_jCd.js";
import { C as Card } from "./card-D8SB2yrw.js";
import { I as Input } from "./input-C6-Ta46A.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BxPdBi6V.js";
import { D as DashboardLayout } from "./layout-CdQJcF1a.js";
import { usePage, useForm } from "@inertiajs/react";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "lucide-react";
import "react";
import "./button-jZyzwgdo.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-label";
import "@radix-ui/react-select";
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
const Storage = ({ storage }) => {
  const { props } = usePage();
  const { translate } = props;
  const { settings, input, button } = translate;
  const { data, setData, post, errors, processing } = useForm({
    ...storage.fields
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("settings.storage.update", { id: storage.id }));
  };
  return /* @__PURE__ */ jsxs("div", { className: "md:px-3", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold", children: settings.storage_settings }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: settings.storage_settings_description })
    ] }),
    /* @__PURE__ */ jsx(Card, { className: "p-4 sm:p-6", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-4 text-xl font-semibold", children: settings.storage_settings }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs(Label, { children: [
          input.storage_driver,
          " *"
        ] }),
        /* @__PURE__ */ jsxs(Select, { value: data.storage_driver, onValueChange: (value) => setData("storage_driver", value), children: [
          /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: input.select_option }) }),
          /* @__PURE__ */ jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsx(SelectItem, { value: "local", children: "Local" }),
            /* @__PURE__ */ jsx(SelectItem, { value: "s3", children: "AWS S3" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(InputError, { message: errors.storage_driver })
      ] }),
      data.storage_driver === "s3" && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs(Label, { children: [
            input.aws_access_key_id,
            " *"
          ] }),
          /* @__PURE__ */ jsx(
            Input,
            {
              name: "aws_access_key_id",
              value: data.aws_access_key_id || "",
              onChange: (e) => setData(e.target.name, e.target.value),
              placeholder: input.aws_access_key_id_placeholder
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.aws_access_key_id })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: input.secret_access_key }),
          /* @__PURE__ */ jsx(
            Input,
            {
              type: "password",
              name: "aws_secret_access_key",
              value: data.aws_secret_access_key || "",
              onChange: (e) => setData(e.target.name, e.target.value),
              placeholder: input.secret_access_key_placeholder
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.aws_secret_access_key })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs(Label, { children: [
            input.aws_default_region,
            " *"
          ] }),
          /* @__PURE__ */ jsx(
            Input,
            {
              name: "aws_default_region",
              value: data.aws_default_region || "",
              onChange: (e) => setData(e.target.name, e.target.value),
              placeholder: input.aws_default_region_placeholder
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.aws_default_region })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: input.bucket_name }),
          /* @__PURE__ */ jsx(
            Input,
            {
              name: "aws_bucket",
              value: data.aws_bucket || "",
              onChange: (e) => setData(e.target.name, e.target.value),
              placeholder: input.bucket_name_placeholder
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.aws_bucket })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsx(LoadingButton, { loading: processing, children: button.save_changes }) })
    ] }) })
  ] });
};
Storage.layout = (page) => /* @__PURE__ */ jsx(DashboardLayout, { children: page });
export {
  Storage as default
};
