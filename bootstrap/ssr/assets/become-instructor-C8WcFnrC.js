import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { L as LoadingButton } from "./loading-button-C4Hk_jCd.js";
import { T as TagInput } from "./tag-input-BplrELmW.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Card } from "./card-D8SB2yrw.js";
import { I as Input } from "./input-C6-Ta46A.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { T as Textarea } from "./textarea-DctRxpgE.js";
import { o as onHandleChange } from "./inertia-BtwbgBI3.js";
import { usePage, useForm } from "@inertiajs/react";
import { useState } from "react";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "lucide-react";
import "@yaireo/tagify";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-label";
const BecomeInstructor = ({ instructor }) => {
  const { props } = usePage();
  const { translate } = props;
  const { button, input, frontend, common } = translate;
  const [isEditing, setIsEditing] = useState(instructor ? false : true);
  const initialOptions = (instructor == null ? void 0 : instructor.skills) ? typeof instructor.skills === "string" ? JSON.parse(instructor.skills) : instructor.skills : [];
  const { data, setData, post, processing, errors } = useForm({
    user_id: props.auth.user.id,
    skills: initialOptions,
    designation: (instructor == null ? void 0 : instructor.designation) || "",
    biography: (instructor == null ? void 0 : instructor.biography) || "",
    resume: null
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (instructor) {
      post(route("become-instructor.update", instructor.id));
    } else {
      post(route("become-instructor.store"));
    }
  };
  return /* @__PURE__ */ jsx(Card, { className: "p-4 sm:p-6", children: !isEditing ? /* @__PURE__ */ jsx("div", { className: "space-y-6 text-center", children: instructor.status === "rejected" ? /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("p", { className: "text-red-600", children: frontend.application_rejected }),
    /* @__PURE__ */ jsx(Button, { type: "button", onClick: () => setIsEditing(true), variant: "destructive", className: "text-primary-foreground capitalize", children: button.reapply })
  ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("p", { children: frontend.application_under_review }),
    /* @__PURE__ */ jsxs(Button, { type: "button", className: "capitalize", children: [
      frontend.application_status,
      ": ",
      instructor.status
    ] })
  ] }) }) : /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "relative space-y-4", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { children: input.designation }),
      /* @__PURE__ */ jsx(Input, { type: "text", name: "designation", onChange: (e) => onHandleChange(e, setData), placeholder: input.designation_placeholder }),
      /* @__PURE__ */ jsx(InputError, { message: errors.designation })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { children: input.resume }),
      /* @__PURE__ */ jsx(Input, { readOnly: true, type: "file", name: "resume", onChange: (e) => onHandleChange(e, setData) }),
      /* @__PURE__ */ jsx(InputError, { message: errors.resume })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { children: input.skills }),
      /* @__PURE__ */ jsx(
        TagInput,
        {
          defaultTags: data.skills,
          placeholder: input.skills_tag_placeholder,
          onChange: (values) => setData("skills", values)
        }
      ),
      /* @__PURE__ */ jsx(InputError, { message: errors.skills })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "pb-3", children: [
      /* @__PURE__ */ jsx(Label, { children: input.biography }),
      /* @__PURE__ */ jsx(
        Textarea,
        {
          rows: 5,
          required: true,
          name: "biography",
          value: data.biography,
          onChange: (e) => onHandleChange(e, setData),
          placeholder: input.biography_placeholder
        }
      ),
      /* @__PURE__ */ jsx(InputError, { message: errors.biography })
    ] }),
    /* @__PURE__ */ jsx(LoadingButton, { loading: processing, className: "mt-2", children: instructor ? button.submit : button.update })
  ] }) });
};
export {
  BecomeInstructor as default
};
