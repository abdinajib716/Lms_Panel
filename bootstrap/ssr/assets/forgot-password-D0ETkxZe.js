import { jsxs, jsx } from "react/jsx-runtime";
import { usePage, useForm, Head } from "@inertiajs/react";
import { LoaderCircle } from "lucide-react";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { T as TextLink } from "./text-link-C0Gy52xX.js";
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
function ForgotPassword({ status }) {
  const { props } = usePage();
  const { auth, input, button } = props.translate;
  const { data, setData, post, processing, errors } = useForm({
    email: ""
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("password.email"));
  };
  return /* @__PURE__ */ jsxs(AuthLayout, { title: auth.forgot_password, description: auth.forgot_description, children: [
    /* @__PURE__ */ jsx(Head, { title: auth.forgot_password }),
    status && /* @__PURE__ */ jsx("div", { className: "mb-4 text-center text-sm font-medium text-green-600", children: status }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: input.email }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "email",
              type: "email",
              name: "email",
              autoComplete: "off",
              value: data.email,
              autoFocus: true,
              onChange: (e) => setData("email", e.target.value),
              placeholder: input.email_placeholder
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.email })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "my-6 flex items-center justify-start", children: /* @__PURE__ */ jsxs(Button, { className: "w-full", disabled: processing, children: [
          processing && /* @__PURE__ */ jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
          button.submit
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-muted-foreground space-x-1 text-center text-sm", children: [
        /* @__PURE__ */ jsx("span", { children: auth.return_to_login }),
        /* @__PURE__ */ jsx(TextLink, { href: route("login"), children: button.login })
      ] })
    ] })
  ] });
}
export {
  ForgotPassword as default
};
