import { jsxs, jsx } from "react/jsx-runtime";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { I as Input } from "./input-C6-Ta46A.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { A as AuthLayout } from "./auth-layout-HSZG9kAz.js";
import { useForm, Head } from "@inertiajs/react";
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
const Index = () => {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: ""
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("system.verify"), {
      onFinish: () => reset("password")
    });
  };
  return /* @__PURE__ */ jsxs(AuthLayout, { title: "System Access", description: "Enter admin credentials to access system", children: [
    /* @__PURE__ */ jsx(Head, { title: "System Access" }),
    /* @__PURE__ */ jsx("form", { className: "flex flex-col gap-6", onSubmit: submit, children: /* @__PURE__ */ jsxs("div", { className: "grid gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "Admin Email" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "email",
            type: "email",
            required: true,
            autoFocus: true,
            tabIndex: 1,
            autoComplete: "email",
            value: data.email,
            onChange: (e) => setData("email", e.target.value),
            placeholder: "admin@example.com"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.email })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "password", children: "Password" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "password",
            type: "password",
            required: true,
            tabIndex: 2,
            autoComplete: "current-password",
            value: data.password,
            onChange: (e) => setData("password", e.target.value),
            placeholder: "Password"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password })
      ] }),
      /* @__PURE__ */ jsx(Button, { type: "submit", className: "w-full", disabled: processing, children: processing ? "Verifying..." : "Verify Admin Access" })
    ] }) })
  ] });
};
export {
  Index as default
};
