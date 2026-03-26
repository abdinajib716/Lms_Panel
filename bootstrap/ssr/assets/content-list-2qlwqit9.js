import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { L as LiveClassStatus } from "./live-class-status-DAOLYBAD.js";
import { T as Tabs } from "./tabs-CPx41tqt.js";
import { T as TiptapRenderer } from "./client-renderer-CUBmzaOS.js";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-DVAMjldm.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { a as CardHeader, C as Card } from "./card-D8SB2yrw.js";
import { P as Progress } from "./progress-BuQTjce4.js";
import { S as ScrollArea } from "./scroll-area-DPHRDnwL.js";
import { S as Separator } from "./separator-R7EO2G8T.js";
import { T as TabsList, a as TabsTrigger, b as TabsContent } from "./tabs-BOXC0x8t.js";
import { usePage, Link, router } from "@inertiajs/react";
import { format, parseISO } from "date-fns";
import { Calendar, Clock } from "lucide-react";
import Lesson from "./lesson-5TyQSzUm.js";
import Quiz from "./quiz-XhaYKC48.js";
import "react";
/* empty css               */
import "react-icons/lu";
import "hast-util-to-jsx-runtime";
import "shiki/bundle/full";
import "rehype-parse";
import "rehype-react";
import "unified";
import "unist-util-visit";
import "@radix-ui/react-accordion";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-progress";
import "@radix-ui/react-scroll-area";
import "@radix-ui/react-separator";
import "@radix-ui/react-tabs";
import "./lesson-icons-CrjzYJr0.js";
const ContentList = ({ completedContents, courseCompletion }) => {
  const { props } = usePage();
  const { course, zoomConfig, section, watchHistory, translate } = props;
  const { button, common } = translate;
  const liveClasses = course.live_classes || [];
  const lastSection = props.course.sections[props.course.sections.length - 1];
  if (watchHistory.current_watching_type === "lesson") {
    lastSection.section_lessons.find((lesson) => lesson.id.toString() === watchHistory.current_watching_id);
  } else {
    lastSection.section_quizzes.find((quiz) => quiz.id.toString() === watchHistory.current_watching_id);
  }
  const finishCourseHandler = () => {
    router.get(route("course.player.finish", { watch_history: watchHistory.id }));
  };
  return /* @__PURE__ */ jsx("div", { className: "relative h-full md:h-[calc(100vh-60px)]", children: /* @__PURE__ */ jsxs(Tabs, { defaultValue: "lessons", className: "w-full", children: [
    /* @__PURE__ */ jsxs(TabsList, { className: "h-12 w-full", children: [
      /* @__PURE__ */ jsx(TabsTrigger, { value: "lessons", className: "h-10 w-full cursor-pointer", children: button.lessons }),
      /* @__PURE__ */ jsx(TabsTrigger, { value: "live-classes", className: "h-10 w-full cursor-pointer", children: button.live_classes })
    ] }),
    /* @__PURE__ */ jsxs(ScrollArea, { className: "h-[calc(100vh-48px)] md:h-[calc(100vh-108px)]", children: [
      /* @__PURE__ */ jsxs(TabsContent, { value: "lessons", className: "mt-0", children: [
        /* @__PURE__ */ jsx(CardHeader, { className: "px-4 py-6 text-center", children: /* @__PURE__ */ jsxs("div", { className: "w-full space-y-1", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground flex items-center text-xs font-medium", children: [
            /* @__PURE__ */ jsxs("span", { children: [
              courseCompletion.percentage,
              "%"
            ] }),
            /* @__PURE__ */ jsxs("span", { children: [
              common.completed,
              " ",
              courseCompletion.completedContents,
              "/",
              courseCompletion.totalContents
            ] })
          ] }),
          /* @__PURE__ */ jsx(Progress, { value: Number(courseCompletion.percentage), className: "[&>div]:bg-secondary-foreground h-1" })
        ] }) }),
        /* @__PURE__ */ jsx(Separator, {}),
        section ? /* @__PURE__ */ jsxs(
          Accordion,
          {
            type: "single",
            collapsible: true,
            className: "space-y-4 px-4 py-6",
            defaultValue: section.id,
            children: [
              props.course.sections.map((section2, ind) => /* @__PURE__ */ jsxs(AccordionItem, { value: section2.id, className: "overflow-hidden rounded-lg border", children: [
                /* @__PURE__ */ jsxs(AccordionTrigger, { className: "[&[data-state=open]]:!bg-muted px-4 py-3 text-base hover:no-underline", children: [
                  ind + 1,
                  ". ",
                  section2.title
                ] }),
                /* @__PURE__ */ jsx(AccordionContent, { className: "space-y-2 p-2", children: section2.section_lessons.length > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  section2.section_lessons.map((lesson) => /* @__PURE__ */ jsx(Lesson, { lesson, completed: completedContents }, lesson.id)),
                  section2.section_quizzes.map((quiz) => /* @__PURE__ */ jsx(Quiz, { quiz, completed: completedContents }, quiz.id))
                ] }) : /* @__PURE__ */ jsx("div", { className: "px-4 py-3 text-center", children: /* @__PURE__ */ jsx("p", { children: "There is no lesson added" }) }) })
              ] }, section2.id)),
              watchHistory.completion_date ? /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
                Link,
                {
                  href: route("student.show", {
                    id: course.id,
                    tab: "certificate"
                  }),
                  children: /* @__PURE__ */ jsx(Button, { className: "w-full", variant: "secondary", size: "lg", disabled: courseCompletion.percentage !== "100.00", children: "Course Certificate" })
                }
              ) }) : /* @__PURE__ */ jsx("div", { children: !watchHistory.next_watching_id ? /* @__PURE__ */ jsx(Button, { className: "w-full", variant: "secondary", size: "lg", onClick: finishCourseHandler, children: "Finish Course" }) : /* @__PURE__ */ jsx(Button, { className: "w-full", variant: "secondary", size: "lg", disabled: true, children: "Finish Course" }) })
            ]
          }
        ) : /* @__PURE__ */ jsx("div", { className: "p-6 text-center", children: /* @__PURE__ */ jsx("p", { children: "There is no section added" }) })
      ] }),
      /* @__PURE__ */ jsx(TabsContent, { value: "live-classes", className: "mt-0", children: /* @__PURE__ */ jsx("div", { className: "space-y-4 p-4", children: liveClasses.length <= 0 ? /* @__PURE__ */ jsxs(Card, { className: "p-8 text-center", children: [
        /* @__PURE__ */ jsx(Calendar, { className: "mx-auto mb-4 h-12 w-12 text-gray-400" }),
        /* @__PURE__ */ jsx("h3", { className: "mb-2 text-lg font-medium", children: "No Live Classes Scheduled" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: "Schedule your first live class to get started with Zoom." })
      ] }) : liveClasses.map((liveClass) => {
        return /* @__PURE__ */ jsxs(Card, { className: "space-y-4 p-4", children: [
          /* @__PURE__ */ jsx("p", { className: "text-base font-medium", children: liveClass.class_topic }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-muted-foreground space-y-3 text-sm", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsx("span", { children: format(parseISO(liveClass.class_date_and_time), "p") })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsx("span", { children: format(parseISO(liveClass.class_date_and_time), "PPP") })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-2", children: /* @__PURE__ */ jsx(LiveClassStatus, { courseId: course.id, liveClass, zoomConfig }) })
          ] }),
          liveClass.class_note && /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "w-full", children: /* @__PURE__ */ jsxs(AccordionItem, { value: "item-1", className: "bg-muted overflow-hidden rounded-lg border-none", children: [
            /* @__PURE__ */ jsx(AccordionTrigger, { className: "[&[data-state=open]]:!bg-secondary-lighter px-3 py-1.5 text-sm font-normal hover:no-underline", children: "Class Note" }),
            /* @__PURE__ */ jsx(AccordionContent, { className: "p-3", children: /* @__PURE__ */ jsx(TiptapRenderer, { children: liveClass.class_note }) })
          ] }) })
        ] }, liveClass.id);
      }) }) })
    ] })
  ] }) });
};
export {
  ContentList as default
};
