import { jsxs, jsx } from "react/jsx-runtime";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { L as LoadingButton } from "./loading-button-C4Hk_jCd.js";
import { I as Input } from "./input-C6-Ta46A.js";
import { o as onHandleChange } from "./inertia-BtwbgBI3.js";
import { usePage, useForm } from "@inertiajs/react";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "lucide-react";
import "react";
import "./button-jZyzwgdo.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
const RequirementForm = ({ requirement }) => {
  const { props } = usePage();
  const { translate } = props;
  const { input, button } = translate;
  const {
    data,
    setData,
    put,
    delete: destroy,
    errors,
    processing
  } = useForm({
    requirement: requirement ? requirement.requirement : ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    put(route("requirements.update", { requirement: requirement.id }));
  };
  const handleDelete = () => {
    destroy(route("requirements.destroy", { requirement: requirement.id }));
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-2", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        Input,
        {
          required: true,
          type: "text",
          name: "requirement",
          value: data.requirement || "",
          placeholder: input.requirement,
          onChange: (e) => onHandleChange(e, setData)
        }
      ),
      /* @__PURE__ */ jsx(InputError, { message: errors.requirement })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-2", children: [
      /* @__PURE__ */ jsx(
        LoadingButton,
        {
          type: "button",
          variant: "outline",
          loading: processing,
          onClick: handleDelete,
          className: "h-7 w-full bg-red-50 text-xs hover:bg-red-100",
          children: button.remove
        }
      ),
      /* @__PURE__ */ jsx(LoadingButton, { variant: "secondary", className: "h-7 w-full text-xs", loading: processing, children: button.save })
    ] })
  ] });
};
export {
  RequirementForm as default
};
