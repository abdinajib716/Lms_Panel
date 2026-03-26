import { jsxs, jsx } from "react/jsx-runtime";
import { usePage, useForm, Head } from "@inertiajs/react";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { L as LoadingButton } from "./loading-button-C4Hk_jCd.js";
import { I as Input } from "./input-C6-Ta46A.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { A as AuthLayout } from "./auth-layout-HSZG9kAz.js";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "lucide-react";
import "react";
import "./button-jZyzwgdo.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-label";
import "./app-logo-42nmPdEQ.js";
import "./main-BqrosZ6t.js";
import "next-themes";
import "sonner";
function ResetPassword({ token, email }) {
  const { props } = usePage();
  const { auth, input, button } = props.translate;
  const { data, setData, post, processing, errors, reset } = useForm({
    token,
    email,
    password: "",
    password_confirmation: ""
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("password.store"), {
      onFinish: () => reset("password", "password_confirmation")
    });
  };
  return /* @__PURE__ */ jsxs(AuthLayout, { title: auth.reset_title, description: auth.reset_description, children: [
    /* @__PURE__ */ jsx(Head, { title: auth.reset_title }),
    /* @__PURE__ */ jsx("form", { onSubmit: submit, children: /* @__PURE__ */ jsxs("div", { className: "grid gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: input.email }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "email",
            type: "email",
            name: "email",
            autoComplete: "email",
            value: data.email,
            className: "mt-1 block w-full",
            readOnly: true,
            onChange: (e) => setData("email", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "password", children: input.password }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "password",
            type: "password",
            name: "password",
            autoComplete: "new-password",
            value: data.password,
            className: "mt-1 block w-full",
            autoFocus: true,
            onChange: (e) => setData("password", e.target.value),
            placeholder: input.password_placeholder
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "password_confirmation", children: input.confirm_password }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "password_confirmation",
            type: "password",
            name: "password_confirmation",
            autoComplete: "new-password",
            value: data.password_confirmation,
            className: "mt-1 block w-full",
            onChange: (e) => setData("password_confirmation", e.target.value),
            placeholder: input.confirm_password
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password_confirmation, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsx(LoadingButton, { className: "mt-4 w-full", loading: processing, children: button.submit })
    ] }) })
  ] });
}
export {
  ResetPassword as default
};
