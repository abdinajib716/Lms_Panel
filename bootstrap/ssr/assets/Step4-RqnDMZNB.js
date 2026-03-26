import { jsxs, jsx } from "react/jsx-runtime";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { I as Input } from "./input-C6-Ta46A.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { useForm, Link } from "@inertiajs/react";
import Layout from "./Layout-BabR1Av6.js";
import Message from "./Message-DFXOluuJ.js";
import StepNavigator from "./StepNavigator-Ce2PCpaO.js";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-label";
const Step4 = (props) => {
  const { NAME, EMAIL, PASSWORD, flash } = props;
  const { data, errors, post, setData } = useForm({
    name: NAME || "",
    email: EMAIL || "",
    password: PASSWORD || "",
    password_confirmation: PASSWORD || ""
  });
  const onHandleChange = (event) => {
    const target = event.target;
    setData({
      ...data,
      [target.name]: target.value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("install.store-step4"));
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(StepNavigator, { step1: "fill", step2: "fill", step3: "fill", step4: "active" }),
    /* @__PURE__ */ jsxs("form", { id: "dataForm", onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsx(Message, { error: flash.error, success: flash.success }),
      /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsx(Label, { children: "Name" }),
        /* @__PURE__ */ jsx(Input, { id: "name", type: "text", name: "name", value: data.name, onChange: onHandleChange, placeholder: "Username" }),
        /* @__PURE__ */ jsx(InputError, { message: errors.name })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsx(Label, { children: "Email" }),
        /* @__PURE__ */ jsx(Input, { id: "email", type: "email", name: "email", value: data.email, onChange: onHandleChange, placeholder: "Email" }),
        /* @__PURE__ */ jsx(InputError, { message: errors.email })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsx(Label, { children: "Password" }),
        /* @__PURE__ */ jsx(Input, { id: "password", type: "password", name: "password", value: data.password, onChange: onHandleChange, placeholder: "Password" }),
        /* @__PURE__ */ jsx(InputError, { message: errors.password })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsx(Label, { children: "Confirm Password" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "password_confirmation",
            type: "password",
            name: "password_confirmation",
            value: data.password_confirmation,
            onChange: onHandleChange,
            placeholder: "Confirm Password"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password_confirmation })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 flex items-center justify-end gap-4", children: [
        /* @__PURE__ */ jsx(Link, { href: route("install.show-step3"), children: /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", className: "border border-orange-500 !bg-transparent !text-orange-500 uppercase", children: "Previous Step" }) }),
        /* @__PURE__ */ jsx(Button, { type: "submit", className: "bg-orange-500 px-6 py-3 text-white uppercase hover:bg-orange-600/90", children: "Next Step" })
      ] })
    ] })
  ] });
};
Step4.layout = (page) => /* @__PURE__ */ jsx(Layout, { children: page });
export {
  Step4 as default
};
