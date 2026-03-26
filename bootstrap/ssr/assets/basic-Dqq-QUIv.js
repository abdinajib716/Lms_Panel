import { jsx, jsxs } from "react/jsx-runtime";
import { C as Combobox } from "./combobox-CtfF3flG.js";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { L as LoadingButton } from "./loading-button-C4Hk_jCd.js";
import { T as TiptapEditor } from "./Editor-iiR11EW9.js";
import { C as Card } from "./card-D8SB2yrw.js";
import { I as Input } from "./input-C6-Ta46A.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { R as RadioGroup, a as RadioGroupItem } from "./radio-group-sSS5HHUP.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BxPdBi6V.js";
import { T as Textarea } from "./textarea-DctRxpgE.js";
import { c as courseLanguages } from "./course-languages-oEC7DuVF.js";
import { D as DashboardLayout } from "./layout-CdQJcF1a.js";
import { o as onHandleChange } from "./inertia-BtwbgBI3.js";
import { usePage, useForm } from "@inertiajs/react";
import { useMemo } from "react";
import "./button-jZyzwgdo.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "cmdk";
import "lucide-react";
import "./popover-BV7JTqNd.js";
import "@radix-ui/react-popover";
/* empty css               */
import "@radix-ui/react-tooltip";
import "react-icons/tb";
import "react-icons/ai";
import "@radix-ui/react-dropdown-menu";
import "@tiptap/react";
import "prettier/plugins/html";
import "prettier/standalone";
import "@codemirror/lang-html";
import "@codemirror/state";
import "@codemirror/view";
import "codemirror";
import "./theme-BnORSbS2.js";
import "@codemirror/language";
import "@lezer/highlight";
import "react-dom";
import "react-colorful";
import "@tiptap/extension-bubble-menu";
import "@tiptap/pm/state";
import "@tiptap/starter-kit";
import "@tiptap/extension-character-count";
import "@tiptap/extension-underline";
import "@tiptap/extension-placeholder";
import "@tiptap/extension-text-align";
import "@tiptap/extension-text-style";
import "@tiptap/extension-subscript";
import "@tiptap/extension-superscript";
import "@tiptap/extension-bullet-list";
import "@tiptap/extension-ordered-list";
import "@tiptap/extension-list-keymap";
import "@tiptap/extension-color";
import "@tiptap/extension-highlight";
import "@tiptap/extension-code-block-lowlight";
import "@tiptap/core";
import "@tiptap/pm/view";
import "highlight.js/lib/core";
import "lowlight";
import "highlight.js/lib/languages/plaintext";
import "@tiptap/pm/model";
import "@tiptap/extension-image";
import "@tiptap/extension-link";
import "@tiptap/extension-table";
import "@tiptap/extension-table-cell";
import "@tiptap/extension-table-header";
import "@tiptap/extension-table-row";
import "@radix-ui/react-label";
import "@radix-ui/react-radio-group";
import "@radix-ui/react-select";
import "./sidebar-6wqj6oXO.js";
import "./separator-R7EO2G8T.js";
import "@radix-ui/react-separator";
import "./sheet-CuVwNO0O.js";
import "@radix-ui/react-dialog";
import "./tooltip-DswKljFZ.js";
import "./main-BqrosZ6t.js";
import "next-themes";
import "sonner";
import "./appearance-Df_e7R4w.js";
import "./dropdown-menu-BIfW6iuW.js";
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
const Basic = () => {
  const { props } = usePage();
  const { auth, system, tab, labels, categories, course, instructors, translate } = props;
  const { input, button, common } = translate;
  const { data, setData, post, errors, processing } = useForm({
    tab,
    title: course.title,
    short_description: course.short_description,
    description: course.description,
    status: course.status,
    level: course.level,
    language: course.language,
    instructor_id: course.instructor_id,
    drip_content: Boolean(course.drip_content),
    course_category_id: course.course_category_id,
    course_category_child_id: course.course_category_child_id
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("courses.update", { id: course.id }));
  };
  const transformedCategories = useMemo(() => {
    return categories.flatMap((category) => {
      var _a;
      const categoryItem = {
        id: category.id,
        label: category.title,
        value: category.title,
        child_id: ""
      };
      const childItems = ((_a = category.category_children) == null ? void 0 : _a.map((child) => ({
        id: child.course_category_id,
        label: `--${child.title}`,
        value: child.title,
        child_id: child.id
      }))) || [];
      return [categoryItem, ...childItems];
    });
  }, [categories]);
  const transformedInstructors = instructors == null ? void 0 : instructors.map((instructor) => ({
    label: instructor.user.name,
    value: instructor.id
  }));
  let selectedCategory;
  categories.map((category) => {
    var _a;
    if (course.course_category_child_id) {
      (_a = category.category_children) == null ? void 0 : _a.map((child) => {
        if (child.id === data.course_category_child_id) {
          selectedCategory = child;
          return;
        }
      });
    } else {
      if (category.id === data.course_category_id) {
        selectedCategory = category;
        return;
      }
    }
  });
  return /* @__PURE__ */ jsx(Card, { className: "container p-4 sm:p-6", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs(Label, { children: [
        input.title,
        " *"
      ] }),
      /* @__PURE__ */ jsx(Input, { name: "title", value: data.title, onChange: (e) => onHandleChange(e, setData), placeholder: input.title_placeholder }),
      /* @__PURE__ */ jsx(InputError, { message: errors.title })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { children: input.short_description }),
      /* @__PURE__ */ jsx(
        Textarea,
        {
          rows: 5,
          name: "short_description",
          value: data.short_description,
          onChange: (e) => onHandleChange(e, setData),
          placeholder: input.short_description_placeholder
        }
      ),
      /* @__PURE__ */ jsx(InputError, { message: errors.short_description })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { children: input.description }),
      /* @__PURE__ */ jsx(
        TiptapEditor,
        {
          ssr: true,
          output: "html",
          placeholder: {
            paragraph: input.description_placeholder,
            imageCaption: input.description_placeholder
          },
          contentMinHeight: 256,
          contentMaxHeight: 640,
          initialContent: data.description,
          onContentChange: (value) => setData((prev) => ({
            ...prev,
            description: value
          }))
        }
      ),
      /* @__PURE__ */ jsx(InputError, { message: errors.description })
    ] }),
    auth.user.role === "admin" && system.sub_type === "collaborative" && /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs(Label, { children: [
        input.course_instructor,
        " *"
      ] }),
      /* @__PURE__ */ jsx(
        Combobox,
        {
          defaultValue: data.instructor_id,
          data: transformedInstructors || [],
          placeholder: input.instructor_placeholder,
          onSelect: (selected) => setData("instructor_id", selected.value)
        }
      ),
      /* @__PURE__ */ jsx(InputError, { message: errors.instructor_id })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs(Label, { children: [
          input.category,
          " *"
        ] }),
        /* @__PURE__ */ jsx(
          Combobox,
          {
            data: transformedCategories,
            placeholder: input.category_placeholder,
            defaultValue: (selectedCategory == null ? void 0 : selectedCategory.title) || "",
            onSelect: (selected) => {
              setData("course_category_id", selected.id);
              setData("course_category_child_id", selected.child_id);
            }
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.course_category_id })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs(Label, { children: [
          input.course_level,
          " *"
        ] }),
        /* @__PURE__ */ jsxs(Select, { value: data.level, onValueChange: (value) => setData("level", value), children: [
          /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: input.course_level_placeholder }) }),
          /* @__PURE__ */ jsx(SelectContent, { children: labels.map((label) => /* @__PURE__ */ jsx(SelectItem, { value: label, className: "capitalize", children: label }, label)) })
        ] }),
        /* @__PURE__ */ jsx(InputError, { message: errors.level })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs(Label, { children: [
          input.course_language,
          " *"
        ] }),
        /* @__PURE__ */ jsx(
          Combobox,
          {
            defaultValue: data.language,
            data: courseLanguages,
            placeholder: input.course_language_placeholder,
            onSelect: (selected) => setData("language", selected.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.language })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs(Label, { children: [
          input.enable_drip_content,
          " *"
        ] }),
        /* @__PURE__ */ jsxs(
          RadioGroup,
          {
            defaultValue: data.drip_content ? "on" : "off",
            className: "flex items-center space-x-4 pt-2 pb-1",
            onValueChange: (value) => setData("drip_content", value == "on" ? true : false),
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsx(RadioGroupItem, { className: "cursor-pointer", id: "off", value: "off" }),
                /* @__PURE__ */ jsx(Label, { htmlFor: "off", children: common.off })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsx(RadioGroupItem, { className: "cursor-pointer", id: "on", value: "on" }),
                /* @__PURE__ */ jsx(Label, { htmlFor: "on", children: common.on })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.drip_content })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsx(LoadingButton, { loading: processing, children: button.save_changes }) })
  ] }) });
};
Basic.layout = (page) => /* @__PURE__ */ jsx(DashboardLayout, { children: page });
export {
  Basic as default
};
