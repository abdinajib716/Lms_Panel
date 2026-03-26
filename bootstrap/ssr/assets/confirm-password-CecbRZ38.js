import { jsxs, jsx } from "react/jsx-runtime";
import { usePage, useForm, Head } from "@inertiajs/react";
import { LoaderCircle } from "lucide-react";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { I as Input } from "./input-C6-Ta46A.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { A as AuthLayout } from "./auth-layout-HSZG9kAz.js";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-label";
import "./app-logo-42nmPdEQ.js";
import "./main-BqrosZ6t.js";
import "next-themes";
import "sonner";
function ConfirmPassword() {
  const { props } = usePage();
  const { auth, input, button } = props.translate;
  const { data, setData, post, processing, errors, reset } = useForm({
    password: ""
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("password.confirm"), {
      onFinish: () => reset("password")
    });
  };
  return /* @__PURE__ */ jsxs(AuthLayout, { title: auth.confirm_title, description: auth.confirm_description, children: [
    /* @__PURE__ */ jsx(Head, { title: auth.confirm_title }),
    /* @__PURE__ */ jsx("form", { onSubmit: submit, children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "password", children: input.password }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "password",
            type: "password",
            name: "password",
            placeholder: input.password_placeholder,
            autoComplete: "current-password",
            value: data.password,
            autoFocus: true,
            onChange: (e) => setData("password", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsxs(Button, { className: "w-full", disabled: processing, children: [
        processing && /* @__PURE__ */ jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
        button.confirm_password
      ] }) })
    ] }) })
  ] });
}
export {
  ConfirmPassword as default
};
