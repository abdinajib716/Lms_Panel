import { jsx, jsxs } from "react/jsx-runtime";
import { C as Combobox } from "./combobox-CtfF3flG.js";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { L as LoadingButton } from "./loading-button-C4Hk_jCd.js";
import { C as Card } from "./card-D8SB2yrw.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { R as RadioGroup, a as RadioGroupItem } from "./radio-group-sSS5HHUP.js";
import { D as DashboardLayout } from "./layout-CdQJcF1a.js";
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
import "@radix-ui/react-label";
import "@radix-ui/react-radio-group";
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
const Index = (props) => {
  const { users, courses, prices, translate } = props;
  const { input, button } = translate;
  const { data, setData, post, errors, processing } = useForm({
    user_id: "",
    course_id: "",
    enrollment_type: "free"
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("enrollments.store"));
  };
  const transformedUsers = users.map((user) => ({
    label: user.name,
    value: user.id
  }));
  const transformedCourses = courses.map((course) => ({
    label: course.title,
    value: course.id
  }));
  return /* @__PURE__ */ jsx(Card, { className: "mx-auto max-w-2xl p-6", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { children: input.select }),
      /* @__PURE__ */ jsx(
        Combobox,
        {
          data: transformedUsers,
          defaultValue: data.user_id,
          placeholder: input.select_user,
          onSelect: (selected) => setData("user_id", selected.value)
        }
      ),
      /* @__PURE__ */ jsx(InputError, { message: errors.user_id })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { children: input.select_course }),
      /* @__PURE__ */ jsx(
        Combobox,
        {
          data: transformedCourses,
          defaultValue: data.course_id,
          placeholder: input.select_course_placeholder,
          onSelect: (selected) => setData("course_id", selected.value)
        }
      ),
      /* @__PURE__ */ jsx(InputError, { message: errors.course_id })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { children: input.enrollment_type }),
      /* @__PURE__ */ jsx(
        RadioGroup,
        {
          defaultValue: data.enrollment_type,
          className: "flex items-center space-x-4 pt-2 pb-1",
          onValueChange: (value) => setData("enrollment_type", value),
          children: prices.map((price) => /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsx(RadioGroupItem, { className: "cursor-pointer", id: price, value: price }),
            /* @__PURE__ */ jsx(Label, { htmlFor: price, className: "capitalize", children: price })
          ] }, price))
        }
      ),
      /* @__PURE__ */ jsx(InputError, { message: errors.enrollment_type })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "col-span-2 mt-6 text-right", children: /* @__PURE__ */ jsx(LoadingButton, { loading: processing, children: button.submit }) })
  ] }) });
};
Index.layout = (page) => /* @__PURE__ */ jsx(DashboardLayout, { children: page });
export {
  Index as default
};
