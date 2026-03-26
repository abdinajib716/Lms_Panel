import { jsx, jsxs } from "react/jsx-runtime";
import { C as Combobox } from "./combobox-CtfF3flG.js";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { L as LoadingButton } from "./loading-button-C4Hk_jCd.js";
import { T as TagInput } from "./tag-input-BplrELmW.js";
import { C as Card } from "./card-D8SB2yrw.js";
import { I as Input } from "./input-C6-Ta46A.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { T as Textarea } from "./textarea-DctRxpgE.js";
import { D as DashboardLayout } from "./layout-CdQJcF1a.js";
import { o as onHandleChange } from "./inertia-BtwbgBI3.js";
import { useForm } from "@inertiajs/react";
import "./button-jZyzwgdo.js";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "cmdk";
import "lucide-react";
import "./popover-BV7JTqNd.js";
import "@radix-ui/react-popover";
import "@yaireo/tagify";
import "@radix-ui/react-label";
import "./sidebar-6wqj6oXO.js";
import "./separator-R7EO2G8T.js";
import "@radix-ui/react-separator";
import "./sheet-CuVwNO0O.js";
import "@radix-ui/react-dialog";
import "./tooltip-DswKljFZ.js";
import "@radix-ui/react-tooltip";
import "./main-BqrosZ6t.js";
import "next-themes";
import "sonner";
import "./appearance-Df_e7R4w.js";
import "./dropdown-menu-BIfW6iuW.js";
import "@radix-ui/react-dropdown-menu";
import "./language-BbuOCfpR.js";
import "./notification-BXalLCUz.js";
import "date-fns";
import "./scroll-area-DPHRDnwL.js";
import "@radix-ui/react-scroll-area";
import "./app-logo-42nmPdEQ.js";
import "./accordion-DVAMjldm.js";
import "@radix-ui/react-accordion";
import "./route-DlE7FdTW.js";
import "./avatar-Cr_jqfHL.js";
import "@radix-ui/react-avatar";
import "./use-lang-44ndmTOc.js";
const CreateUpdate = ({ instructor, users, translate }) => {
  const initialOptions = (instructor == null ? void 0 : instructor.skills) ? typeof instructor.skills === "string" ? JSON.parse(instructor.skills) : instructor.skills : [];
  const { dashboard, input, button } = translate;
  const { data, setData, post, processing, errors, reset } = useForm({
    user_id: "",
    designation: (instructor == null ? void 0 : instructor.designation) || "",
    skills: initialOptions,
    biography: (instructor == null ? void 0 : instructor.biography) || "",
    resume: null
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (instructor) {
      post(route("become-instructor.update", { id: instructor.id }));
    } else {
      post(route("become-instructor.store"), {
        onSuccess: () => {
          reset();
        }
      });
    }
  };
  const transformedUsers = users.map((user) => ({
    value: user.id.toString(),
    label: user.name
  }));
  return /* @__PURE__ */ jsx(Card, { className: "p-4 sm:p-6", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "relative space-y-4", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs(Label, { children: [
        dashboard.course_instructor,
        " *"
      ] }),
      /* @__PURE__ */ jsx(Combobox, { data: transformedUsers, placeholder: input.select_user, onSelect: (selected) => setData("user_id", selected.value) }),
      /* @__PURE__ */ jsx(InputError, { message: errors.user_id })
    ] }),
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
      /* @__PURE__ */ jsx(TagInput, { defaultTags: data.skills, placeholder: input.skills, onChange: (values) => setData("skills", values) })
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
    /* @__PURE__ */ jsx(LoadingButton, { loading: processing, className: "mt-2", children: instructor ? button.update : button.submit })
  ] }) });
};
CreateUpdate.layout = (page) => /* @__PURE__ */ jsx(DashboardLayout, { children: page });
export {
  CreateUpdate as default
};
