import { jsxs, jsx } from "react/jsx-runtime";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { D as Dialog, b as DialogContent } from "./dialog-DD5SXV81.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { R as RadioGroup, a as RadioGroupItem } from "./radio-group-sSS5HHUP.js";
import { useForm, Link } from "@inertiajs/react";
import { useState } from "react";
import Layout from "./Layout-BabR1Av6.js";
import Message from "./Message-DFXOluuJ.js";
import StepNavigator from "./StepNavigator-Ce2PCpaO.js";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-dialog";
import "lucide-react";
import "@radix-ui/react-label";
import "@radix-ui/react-radio-group";
const Install = ({ flash }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { data, errors, post, processing, setData } = useForm({
    course_creation: "collaborative"
  });
  const handleConfirm = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setShowModal(true);
    post(route("install.store-processing"), {
      onFinish() {
        setIsLoading(false);
        setShowModal(false);
      }
    });
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(StepNavigator, { step1: "fill", step2: "fill", step3: "fill", step4: "fill", step5: "active" }),
    isLoading && /* @__PURE__ */ jsx("div", { id: "loader", className: "mb-4 rounded-md bg-green-100 px-5 py-3 text-center text-sm font-medium text-green-500", children: "Loading..." }),
    /* @__PURE__ */ jsx(Message, { success: flash.success, error: flash.error }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleConfirm, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { children: "Select Course Creation Mode" }),
        /* @__PURE__ */ jsxs(
          RadioGroup,
          {
            required: true,
            defaultValue: data.course_creation,
            className: "flex items-center space-x-4 pt-2 pb-1",
            onValueChange: (value) => setData("course_creation", value),
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsx(RadioGroupItem, { className: "cursor-pointer", id: "collaborative", value: "collaborative" }),
                /* @__PURE__ */ jsx(Label, { htmlFor: "collaborative", children: "Collaborative" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsx(RadioGroupItem, { className: "cursor-pointer", id: "administrative", value: "administrative" }),
                /* @__PURE__ */ jsx(Label, { htmlFor: "administrative", children: "Administrative" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.course_creation }),
        data.course_creation === "collaborative" ? /* @__PURE__ */ jsx("div", { className: "mt-3 rounded-md border border-orange-200 bg-orange-50 p-4", children: /* @__PURE__ */ jsxs("p", { className: "text-sm leading-relaxed text-gray-700", children: [
          /* @__PURE__ */ jsx("span", { className: "mb-1 block font-medium text-orange-600", children: "Collaborative Mode:" }),
          "Enable a collaborative platform where qualified users can become instructors and create their own courses. The platform administrator will receive a percentage of revenue from each instructor's course sales."
        ] }) }) : /* @__PURE__ */ jsx("div", { className: "mt-3 rounded-md border border-orange-200 bg-orange-50 p-4", children: /* @__PURE__ */ jsxs("p", { className: "text-sm leading-relaxed text-gray-700", children: [
          /* @__PURE__ */ jsx("span", { className: "mb-1 block font-medium text-orange-600", children: "Administrative Mode:" }),
          "Centralize course management where only administrators can create and publish educational content. Students can enroll in these official courses, with all revenue flowing directly to the platform administration."
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 flex w-full items-center justify-end gap-4", children: [
        /* @__PURE__ */ jsx(Link, { href: route("install.show-step4"), children: /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", className: "border border-orange-500 !bg-transparent !text-orange-500 uppercase", children: "Previous Step" }) }),
        /* @__PURE__ */ jsx(Button, { type: "submit", className: "bg-orange-500 px-6 py-3 text-white uppercase hover:bg-orange-600/90", children: "Confirm" })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Dialog, { open: showModal, onOpenChange: setShowModal, children: /* @__PURE__ */ jsx(DialogContent, { children: /* @__PURE__ */ jsxs("div", { className: "modal-box ! !rounded-md !bg-orange-50 !p-4 md:max-w-md", children: [
      /* @__PURE__ */ jsx("p", { className: "!mb-6 !text-justify !font-medium", children: "Your app is currently undergoing an automatic installation. This process will take a few minutes. Please don't refresh your page or turn off your device. Just stay with this process." }),
      /* @__PURE__ */ jsx("div", { className: "relative mt-6 w-full rounded-full bg-gray-200", children: /* @__PURE__ */ jsx("div", { id: "shim-blue", className: "absolute h-2 animate-pulse rounded-full bg-blue-500", style: { width: "100%" } }) })
    ] }) }) })
  ] });
};
Install.layout = (page) => /* @__PURE__ */ jsx(Layout, { children: page });
export {
  Install as default
};
