import { jsxs, jsx } from "react/jsx-runtime";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { C as Card } from "./card-D8SB2yrw.js";
import { I as Input } from "./input-C6-Ta46A.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { usePage, useForm } from "@inertiajs/react";
import { L as LoadingButton } from "./loading-button-C4Hk_jCd.js";
const ChangeEmail = () => {
  const { props } = usePage();
  const { email } = props.auth.user;
  const { errors, translate } = props;
  const { auth, button, input } = translate;
  const { data, setData, post, processing } = useForm({
    current_email: email,
    new_email: ""
  });
  const onHandleChange = (event) => {
    setData(event.target.name, event.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    post(route("account.change-email"));
  };
  return /* @__PURE__ */ jsxs(Card, { className: "border-none", children: [
    /* @__PURE__ */ jsx("div", { className: "border-b-border border-b px-7 pt-7 pb-4", children: /* @__PURE__ */ jsx("p", { className: "text18 font-bold", children: auth.change_email }) }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "px-7 py-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { children: input.current_email }),
        /* @__PURE__ */ jsx(Input, { required: true, readOnly: true, type: "email", name: "current_email", value: data.current_email, placeholder: input.current_email_placeholder }),
        /* @__PURE__ */ jsx(InputError, { message: errors.current_email, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "py-5", children: [
        /* @__PURE__ */ jsx(Label, { children: input.new_email }),
        /* @__PURE__ */ jsx(
          Input,
          {
            required: true,
            type: "email",
            name: "new_email",
            value: data.new_email,
            placeholder: input.new_email_placeholder,
            onChange: onHandleChange
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.new_email, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsx(LoadingButton, { loading: processing, children: button.get_email_change_link })
    ] })
  ] });
};
const ChangePassword = () => {
  const { props } = usePage();
  const { errors, translate } = props;
  const { button, input } = translate;
  const { data, setData, put, processing } = useForm({
    current_password: "",
    password: "",
    password_confirmation: ""
  });
  const onHandleChange = (event) => {
    setData(event.target.name, event.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    put(route("account.change-password"));
  };
  return /* @__PURE__ */ jsxs(Card, { className: "border-none", children: [
    /* @__PURE__ */ jsx("div", { className: "border-b-border border-b px-7 pt-7 pb-4", children: /* @__PURE__ */ jsx("p", { className: "text18 font-bold", children: button.change_password }) }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "flex flex-col gap-5 px-7 py-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { children: input.current_password }),
        /* @__PURE__ */ jsx(
          Input,
          {
            required: true,
            type: "password",
            name: "current_password",
            value: data.current_password,
            placeholder: input.current_password_placeholder,
            onChange: onHandleChange
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.current_password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { children: input.new_password }),
        /* @__PURE__ */ jsx(
          Input,
          {
            required: true,
            type: "password",
            name: "password",
            value: data.password,
            placeholder: input.new_password_placeholder,
            onChange: onHandleChange
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { children: input.confirm_new_password }),
        /* @__PURE__ */ jsx(
          Input,
          {
            required: true,
            type: "password",
            name: "password_confirmation",
            value: data.password_confirmation,
            placeholder: input.confirm_new_password,
            onChange: onHandleChange
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(LoadingButton, { loading: processing, className: "h-9", children: button.change_password }) })
    ] })
  ] });
};
const ForgetPassword = () => {
  const { props } = usePage();
  const { email } = props.auth.user;
  const { translate } = props;
  const { button, input } = translate;
  const { data, post, errors, clearErrors, processing } = useForm({
    email
  });
  const submit = (e) => {
    e.preventDefault();
    clearErrors();
    post(route("account.forgot-password"));
  };
  return /* @__PURE__ */ jsxs(Card, { className: "border-none", children: [
    /* @__PURE__ */ jsx("div", { className: "border-b-border border-b px-7 pt-7 pb-4", children: /* @__PURE__ */ jsx("p", { className: "text18 font-bold", children: button.forget_password }) }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "px-7 py-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { children: input.your_email }),
        /* @__PURE__ */ jsx(Input, { readOnly: true, required: true, type: "email", value: data.email }),
        /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsx(LoadingButton, { className: "mt-5 h-9", loading: processing, children: button.get_password_reset_link })
    ] })
  ] });
};
export {
  ChangeEmail as C,
  ForgetPassword as F,
  ChangePassword as a
};
