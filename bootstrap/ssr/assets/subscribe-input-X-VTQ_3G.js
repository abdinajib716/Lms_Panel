import { jsxs, jsx } from "react/jsx-runtime";
import { u as useLang } from "./use-lang-44ndmTOc.js";
import { c as cn } from "./utils-BmtPBcb0.js";
import { useForm } from "@inertiajs/react";
import { B as ButtonGradientPrimary } from "./button-gradient-primary-Dgn8gIzu.js";
import { I as InputError } from "./input-error-CEW4jhey.js";
const SubscribeInput = ({ className, buttonText }) => {
  const { input } = useLang();
  const { data, setData, post, errors } = useForm({
    email: ""
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("subscribes.store"));
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: cn("relative z-10", className), children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-background text-primary flex items-center justify-between gap-2 rounded-md border border-gray-400", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "email",
          name: "email",
          value: data.email,
          onChange: (e) => setData("email", e.target.value),
          className: "h-[50px] w-full px-4 focus:outline-0",
          placeholder: input.email_placeholder
        }
      ),
      /* @__PURE__ */ jsx(ButtonGradientPrimary, { type: "submit", shadow: false, className: "mr-1", children: buttonText || "Subscribe" })
    ] }),
    /* @__PURE__ */ jsx(InputError, { message: errors.email })
  ] });
};
export {
  SubscribeInput as S
};
