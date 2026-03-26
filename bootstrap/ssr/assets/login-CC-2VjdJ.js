import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { L as LoadingButton } from "./loading-button-C4Hk_jCd.js";
import { T as TextLink } from "./text-link-C0Gy52xX.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Checkbox } from "./checkbox-CO4DegBm.js";
import { I as Input } from "./input-C6-Ta46A.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { A as AuthLayout } from "./auth-layout-HSZG9kAz.js";
import { usePage, useForm, Head, Link } from "@inertiajs/react";
import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "lucide-react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-checkbox";
import "@radix-ui/react-label";
import "./app-logo-42nmPdEQ.js";
import "./main-BqrosZ6t.js";
import "next-themes";
import "sonner";
function Login({ status, recaptcha, canResetPassword, googleLogIn }) {
  const { props } = usePage();
  const { auth, input, button } = props.translate;
  const recaptchaRef = useRef(null);
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false,
    recaptcha: "",
    recaptcha_status: recaptcha.status
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("login"), {
      onFinish: () => reset("password", "recaptcha"),
      onError: () => {
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
      }
    });
  };
  return /* @__PURE__ */ jsxs(AuthLayout, { title: auth.login_title, description: auth.login_description, children: [
    /* @__PURE__ */ jsx(Head, { title: auth.login_title }),
    /* @__PURE__ */ jsxs("form", { className: "flex flex-col gap-6", onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { className: "grid gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: input.email }),
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
              placeholder: input.email_placeholder
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.email })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "password", children: input.password }),
            canResetPassword && /* @__PURE__ */ jsx(TextLink, { href: route("password.request"), className: "ml-auto text-sm", tabIndex: 5, children: auth.forgot_password })
          ] }),
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
              placeholder: input.password_placeholder
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.password })
        ] }),
        recaptcha.status && /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(ReCAPTCHA, { ref: recaptchaRef, sitekey: recaptcha.siteKey, onChange: (token) => setData("recaptcha", token) }),
          /* @__PURE__ */ jsx(InputError, { message: errors.recaptcha })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ jsx(Checkbox, { id: "remember", name: "remember", checked: data.remember, onClick: () => setData("remember", !data.remember), tabIndex: 3 }),
          /* @__PURE__ */ jsx(Label, { htmlFor: "remember", children: input.remember_me })
        ] }),
        /* @__PURE__ */ jsx(LoadingButton, { loading: processing, type: "submit", className: "w-full", children: button.login }),
        googleLogIn && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("div", { className: "after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t", children: /* @__PURE__ */ jsx("span", { className: "bg-background text-muted-foreground relative z-10 px-2", children: auth.continue_with }) }),
          /* @__PURE__ */ jsx("a", { type: "button", className: "w-full", href: "auth/google", children: /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", className: "w-full", children: button.continue_with_google }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-center text-sm", children: [
        auth.no_account,
        " ",
        /* @__PURE__ */ jsx(Link, { href: route("register"), className: "underline underline-offset-4", children: button.sign_up })
      ] })
    ] }),
    status && /* @__PURE__ */ jsx("div", { className: "mb-4 text-center text-sm font-medium text-green-600", children: status })
  ] });
}
export {
  Login as default
};
