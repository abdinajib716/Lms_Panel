import { jsxs, jsx } from "react/jsx-runtime";
import { D as DataSortModal } from "./data-sort-modal-CzOtsWqf.js";
import { D as DeleteModal } from "./delete-modal-BIvxKwRf.js";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-DVAMjldm.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Card } from "./card-D8SB2yrw.js";
import { P as Popover, a as PopoverTrigger, b as PopoverContent } from "./popover-BV7JTqNd.js";
import { S as Separator } from "./separator-R7EO2G8T.js";
import { usePage, router } from "@inertiajs/react";
import { ChevronDown, FolderOpen, Pencil, Trash2, ListOrdered } from "lucide-react";
import LessonForm from "./lesson-form-5zRgiXKQ.js";
import QuestionQuestions from "./question-questions-BvjW4gxT.js";
import QuizForm from "./quiz-form-X7dPDFVl.js";
import SectionForm from "./section-form-3uK8X9At.js";
import ResourceModal from "./resource-modal-BgClk7WV.js";
import "nprogress";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "react";
import "./dialog-DD5SXV81.js";
import "@radix-ui/react-dialog";
import "./scroll-area-DPHRDnwL.js";
import "@radix-ui/react-scroll-area";
import "@radix-ui/react-accordion";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-popover";
import "@radix-ui/react-separator";
import "./chunked-uploader-input-MwXGR7K4.js";
import "./input-C6-Ta46A.js";
import "axios";
import "sonner";
import "./input-error-CEW4jhey.js";
import "./loading-button-C4Hk_jCd.js";
import "./tabs-CPx41tqt.js";
import "./tabs-BOXC0x8t.js";
import "@radix-ui/react-tabs";
import "./Editor-iiR11EW9.js";
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
import "./label-Dd_w2I6M.js";
import "@radix-ui/react-label";
import "./radio-group-sSS5HHUP.js";
import "@radix-ui/react-radio-group";
import "./select-BxPdBi6V.js";
import "@radix-ui/react-select";
import "./textarea-DctRxpgE.js";
import "./file-metadata-CvVo69cP.js";
import "./inertia-BtwbgBI3.js";
import "./client-renderer-CUBmzaOS.js";
import "react-icons/lu";
import "hast-util-to-jsx-runtime";
import "shiki/bundle/full";
import "rehype-parse";
import "rehype-react";
import "unified";
import "unist-util-visit";
import "./question-form-CH0HGsWO.js";
import "./tag-input-BplrELmW.js";
import "@yaireo/tagify";
import "./resource-form-DzQB08Jf.js";
import "./resource-list-CI4-EHCo.js";
const Curriculum = () => {
  const { props } = usePage();
  const { translate } = props;
  const { button, dashboard } = translate;
  return /* @__PURE__ */ jsxs(Card, { className: "p-4 sm:p-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-4", children: [
      /* @__PURE__ */ jsx(
        SectionForm,
        {
          title: button.add_section,
          handler: /* @__PURE__ */ jsx(Button, { variant: "ghost", className: "bg-muted hover:!bg-muted-foreground/10", children: button.add_section })
        }
      ),
      /* @__PURE__ */ jsx(
        DataSortModal,
        {
          title: button.sort,
          data: props.course.sections,
          handler: /* @__PURE__ */ jsx(Button, { variant: "ghost", className: "bg-muted hover:!bg-muted-foreground/10", children: button.sort_section }),
          onOrderChange: (newOrder) => {
            router.post(
              route("section.sort"),
              {
                sortedData: newOrder
              },
              { preserveScroll: true }
            );
          },
          renderContent: (item) => /* @__PURE__ */ jsx(Card, { className: "w-full px-4 py-3", children: /* @__PURE__ */ jsx("p", { children: item.title }) })
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Separator, { className: "my-6" }),
    /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "space-y-4", children: props.course.sections.map((section, index) => /* @__PURE__ */ jsxs(AccordionItem, { value: section.id, className: "w-full overflow-hidden rounded-lg border", children: [
      /* @__PURE__ */ jsx(AccordionTrigger, { className: "[&[data-state=open]]:!bg-muted px-4 py-3 text-base hover:no-underline", children: /* @__PURE__ */ jsxs("div", { className: "flex w-full items-center justify-between pr-4", children: [
        /* @__PURE__ */ jsxs("span", { children: [
          index + 1,
          ". ",
          section.title
        ] }),
        /* @__PURE__ */ jsx("div", { onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxs(Popover, { children: [
          /* @__PURE__ */ jsx(PopoverTrigger, { children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", className: "bg-muted hover:!bg-muted-foreground/10 px-2.5", children: [
            /* @__PURE__ */ jsx("span", { children: "Section Menu" }),
            /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4" })
          ] }) }),
          /* @__PURE__ */ jsxs(PopoverContent, { align: "end", className: "flex w-[160px] flex-col space-y-1 p-2", children: [
            /* @__PURE__ */ jsx(
              LessonForm,
              {
                title: button.add_lesson,
                sectionId: section.id,
                handler: /* @__PURE__ */ jsx(Button, { variant: "ghost", className: "bg-muted hover:!bg-muted-foreground/10 h-8 w-full", children: /* @__PURE__ */ jsx("span", { children: button.add_lesson }) })
              }
            ),
            /* @__PURE__ */ jsx(
              DataSortModal,
              {
                title: dashboard.sort_items,
                data: section.section_lessons,
                handler: /* @__PURE__ */ jsx(Button, { variant: "ghost", className: "bg-muted hover:!bg-muted-foreground/10 h-8 w-full", children: /* @__PURE__ */ jsx("span", { children: "Sort Lessons" }) }),
                onOrderChange: (newOrder) => {
                  router.post(
                    route("lesson.sort"),
                    {
                      sortedData: newOrder
                    },
                    { preserveScroll: true }
                  );
                },
                renderContent: (lesson) => /* @__PURE__ */ jsx(Card, { className: "w-full px-4 py-3", children: /* @__PURE__ */ jsx("p", { children: lesson.title }) })
              }
            ),
            /* @__PURE__ */ jsx(
              QuizForm,
              {
                title: button.add_quiz,
                sectionId: section.id,
                handler: /* @__PURE__ */ jsx(Button, { variant: "ghost", className: "bg-muted hover:!bg-muted-foreground/10 h-8 w-full", children: /* @__PURE__ */ jsx("span", { children: button.add_quiz }) })
              }
            ),
            /* @__PURE__ */ jsx(
              SectionForm,
              {
                title: dashboard.update_section,
                section,
                handler: /* @__PURE__ */ jsx(Button, { variant: "secondary", className: "h-8 w-full", children: /* @__PURE__ */ jsx("span", { children: dashboard.update_section }) })
              }
            ),
            /* @__PURE__ */ jsx(
              DeleteModal,
              {
                routePath: route("section.delete", {
                  id: section.id
                }),
                actionComponent: /* @__PURE__ */ jsx(
                  Button,
                  {
                    variant: "ghost",
                    className: "bg-destructive/8 hover:bg-destructive/6 text-destructive hover:text-destructive h-8 w-full",
                    children: button.delete_section
                  }
                )
              }
            )
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxs(AccordionContent, { className: "space-y-4 p-4", children: [
        section.section_lessons.length > 0 ? section.section_lessons.map((lesson) => /* @__PURE__ */ jsxs("div", { className: "group border-border flex w-full items-center justify-between rounded-md border px-4 py-3", children: [
          /* @__PURE__ */ jsx("p", { children: lesson.title }),
          /* @__PURE__ */ jsxs("div", { className: "invisible flex items-center gap-2 group-hover:visible", children: [
            /* @__PURE__ */ jsx(
              ResourceModal,
              {
                lesson,
                title: "Lesson Resources",
                handler: /* @__PURE__ */ jsxs(Button, { variant: "secondary", className: "h-7 px-2", children: [
                  /* @__PURE__ */ jsx(FolderOpen, { className: "h-3 w-3" }),
                  " ",
                  /* @__PURE__ */ jsx("span", { children: "Resource" })
                ] })
              }
            ),
            /* @__PURE__ */ jsx(
              LessonForm,
              {
                lesson,
                sectionId: section.id,
                title: dashboard.update_lesson,
                handler: /* @__PURE__ */ jsx(Button, { size: "icon", variant: "secondary", className: "h-7 w-7", children: /* @__PURE__ */ jsx(Pencil, { className: "h-3 w-3" }) })
              }
            ),
            /* @__PURE__ */ jsx(
              DeleteModal,
              {
                routePath: route("lesson.delete", {
                  id: lesson.id
                }),
                actionComponent: /* @__PURE__ */ jsx(Button, { size: "icon", variant: "secondary", className: "text-destructive h-7 w-7", children: /* @__PURE__ */ jsx(Trash2, { className: "h-3 w-3" }) })
              }
            )
          ] })
        ] }, lesson.id)) : /* @__PURE__ */ jsx("div", { className: "text-muted-foreground py-4 text-center text-sm", children: "No lessons found in this section." }),
        section.section_quizzes.map((quiz) => /* @__PURE__ */ jsxs("div", { className: "group border-border flex w-full items-center justify-between rounded-md border px-4 py-3", children: [
          /* @__PURE__ */ jsx("p", { children: quiz.title }),
          /* @__PURE__ */ jsxs("div", { className: "invisible flex items-center gap-2 group-hover:visible", children: [
            /* @__PURE__ */ jsx(
              QuestionQuestions,
              {
                quiz,
                title: button.quiz_questions,
                handler: /* @__PURE__ */ jsx(Button, { size: "icon", variant: "secondary", className: "h-7 w-7", children: /* @__PURE__ */ jsx(ListOrdered, { className: "h-3 w-3" }) })
              }
            ),
            /* @__PURE__ */ jsx(
              DeleteModal,
              {
                routePath: route("quiz.delete", {
                  id: quiz.id
                }),
                actionComponent: /* @__PURE__ */ jsx(Button, { size: "icon", variant: "secondary", className: "text-destructive h-7 w-7", children: /* @__PURE__ */ jsx(Trash2, { className: "h-3 w-3" }) })
              }
            ),
            /* @__PURE__ */ jsx(
              QuizForm,
              {
                quiz,
                title: dashboard.update_quiz,
                sectionId: section.id,
                handler: /* @__PURE__ */ jsx(Button, { size: "icon", variant: "secondary", className: "h-7 w-7", children: /* @__PURE__ */ jsx(Pencil, { className: "h-3 w-3" }) })
              }
            )
          ] })
        ] }, quiz.id))
      ] })
    ] }, section.id)) })
  ] });
};
export {
  Curriculum as default
};
