import { jsxs, jsx } from "react/jsx-runtime";
import { usePage, useForm, Head, router } from "@inertiajs/react";
import { LoaderCircle } from "lucide-react";
import { B as Button } from "./button-jZyzwgdo.js";
import { A as AuthLayout } from "./auth-layout-HSZG9kAz.js";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "./app-logo-42nmPdEQ.js";
import "./main-BqrosZ6t.js";
import "next-themes";
import "sonner";
function Recaptcha({ status }) {
  const { props } = usePage();
  const { auth, button } = props.translate;
  const { post, processing } = useForm({});
  const submit = (e) => {
    e.preventDefault();
    post(route("verification.send"));
  };
  return /* @__PURE__ */ jsxs(AuthLayout, { title: auth.verify_title, description: auth.verify_description, children: [
    /* @__PURE__ */ jsx(Head, { title: auth.verify_title }),
    status === "verification-link-sent" && /* @__PURE__ */ jsx("div", { className: "mb-4 text-center text-sm font-medium text-green-600", children: auth.verification_sent }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "space-y-6 text-center", children: [
      /* @__PURE__ */ jsxs(Button, { disabled: processing, variant: "secondary", children: [
        processing && /* @__PURE__ */ jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
        button.submit
      ] }),
      /* @__PURE__ */ jsx(Button, { onClick: () => router.post(route("logout")), className: "mx-auto block text-sm", children: button.logout })
    ] })
  ] });
}
export {
  Recaptcha as default
};
