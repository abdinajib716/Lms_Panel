import { jsxs, jsx } from "react/jsx-runtime";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { L as LoadingButton } from "./loading-button-C4Hk_jCd.js";
import { I as Input } from "./input-C6-Ta46A.js";
import { T as Textarea } from "./textarea-DctRxpgE.js";
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
const FaqForm = ({ faq }) => {
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
    question: faq ? faq.question : "",
    answer: faq ? faq.answer : ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    put(route("faqs.update", { faq: faq.id }));
  };
  const handleDelete = () => {
    destroy(route("faqs.destroy", { faq: faq.id }));
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-2", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        Input,
        {
          required: true,
          type: "text",
          name: "question",
          value: data.question || "",
          placeholder: input.question,
          onChange: (e) => onHandleChange(e, setData)
        }
      ),
      /* @__PURE__ */ jsx(InputError, { message: errors.question })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Textarea, { required: true, name: "answer", value: data.answer || "", placeholder: input.answer, onChange: (e) => onHandleChange(e, setData) }),
      /* @__PURE__ */ jsx(InputError, { message: errors.question })
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
  FaqForm as default
};
