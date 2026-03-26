import { jsx, jsxs } from "react/jsx-runtime";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { L as LoadingButton } from "./loading-button-C4Hk_jCd.js";
import { C as Card } from "./card-D8SB2yrw.js";
import { I as Input } from "./input-C6-Ta46A.js";
import { usePage, useForm } from "@inertiajs/react";
import { Camera } from "lucide-react";
import { useState } from "react";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "./button-jZyzwgdo.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
const Profile = () => {
  const { props } = usePage();
  const { translate } = props;
  const { input, button, common, dashboard } = translate;
  const { name, photo } = props.auth.user;
  const [imageUrl, setImageUrl] = useState(photo);
  const { data, setData, post, errors, clearErrors, processing } = useForm({
    name,
    photo: null
  });
  const submit = (e) => {
    e.preventDefault();
    clearErrors();
    post(route("settings.profile"));
  };
  const handleImageChange = (e) => {
    const files = e.target.files;
    if (files && files[0]) {
      setData("photo", files[0]);
      setImageUrl(URL.createObjectURL(files[0]));
    }
  };
  return /* @__PURE__ */ jsx(Card, { className: "p-4 sm:p-6", children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "flex flex-col items-center gap-6 md:flex-row", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col items-center text-center md:max-w-[250px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative mb-4 h-[100px] w-[100px] md:h-[120px] md:w-[120px]", children: [
        imageUrl ? /* @__PURE__ */ jsx("img", { alt: "item-1", src: imageUrl, className: "h-[100px] w-[100px] rounded-full md:h-[120px] md:w-[120px]" }) : /* @__PURE__ */ jsx("div", { className: "h-[100px] w-[100px] rounded-full bg-gray-300 md:h-[120px] md:w-[120px]" }),
        /* @__PURE__ */ jsx("label", { htmlFor: "formFileSm", className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", children: /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-100", children: /* @__PURE__ */ jsx(Camera, { className: "h-6 w-6 text-gray-500" }) }) }),
        /* @__PURE__ */ jsx("input", { hidden: true, id: "formFileSm", type: "file", onChange: handleImageChange })
      ] }),
      /* @__PURE__ */ jsx("small", { className: "text-gray-500", children: dashboard.image_upload_requirements }),
      errors.photo && /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-red-500", children: errors.photo })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
      /* @__PURE__ */ jsxs("div", { className: "mt-6 mb-10", children: [
        /* @__PURE__ */ jsx(
          Input,
          {
            required: true,
            type: "name",
            name: "name",
            value: data.name,
            placeholder: input.name_placeholder,
            onChange: (e) => setData("name", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.name, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsx(LoadingButton, { loading: processing, className: "h-9 w-full", children: button.save_changes })
    ] })
  ] }) });
};
export {
  Profile as default
};
