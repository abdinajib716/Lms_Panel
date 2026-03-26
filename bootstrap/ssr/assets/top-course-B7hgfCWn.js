import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-DVAMjldm.js";
import { D as Dialog, a as DialogTrigger, b as DialogContent } from "./dialog-DD5SXV81.js";
import { V as VideoPlayer } from "./video-player-CajLnoJG.js";
import { g as getPageSection } from "./page-CO5EAoAP.js";
import { usePage } from "@inertiajs/react";
import { Play, Video, File, FileText, Image, FileQuestion } from "lucide-react";
import Section from "./section-7thyMMDM.js";
import "react";
import "@radix-ui/react-accordion";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-dialog";
import "plyr-react";
/* empty css                */
import "./use-lang-44ndmTOc.js";
import "./chunked-uploader-input-MwXGR7K4.js";
import "./button-jZyzwgdo.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./input-C6-Ta46A.js";
import "axios";
import "sonner";
import "./input-error-CEW4jhey.js";
import "./loading-button-C4Hk_jCd.js";
import "./label-Dd_w2I6M.js";
import "@radix-ui/react-label";
import "./textarea-DctRxpgE.js";
import "./inertia-BtwbgBI3.js";
import "./card-D8SB2yrw.js";
import "./icon-picker-_EIJQgy3.js";
import "./debounce-ZFxqVthq.js";
import "./tooltip-DswKljFZ.js";
import "@radix-ui/react-tooltip";
import "lucide-react/dynamic";
import "./scroll-area-DPHRDnwL.js";
import "@radix-ui/react-scroll-area";
import "./table-header-C_F4x8YG.js";
import "./table-tRsx9RfJ.js";
import "@tanstack/react-table";
import "./table-page-size-Xj85uK4t.js";
import "./dropdown-menu-BIfW6iuW.js";
import "@radix-ui/react-dropdown-menu";
import "./route-DlE7FdTW.js";
import "./avatar-Cr_jqfHL.js";
import "@radix-ui/react-avatar";
const TopCourse = () => {
  const { props } = usePage();
  const { page, topCourse, customize } = props;
  const topCourseSection = getPageSection(page, "top_course");
  const videoTypes = ["video", "video_url"];
  return /* @__PURE__ */ jsx("div", { className: "overflow-y-hidden", children: /* @__PURE__ */ jsxs(Section, { customize, pageSection: topCourseSection, containerClass: "py-20 relative", children: [
    topCourse ? /* @__PURE__ */ jsxs("div", { className: "mx-auto w-full max-w-[960px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative mb-10", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            className: "relative z-10 w-full rounded-3xl md:rounded-4xl",
            src: topCourse.thumbnail ?? "/assets/images/blank-image.jpg",
            alt: ""
          }
        ),
        topCourse.preview && /* @__PURE__ */ jsxs(Dialog, { children: [
          /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx("button", { className: "absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black/70 p-4 transition-transform hover:scale-110", children: /* @__PURE__ */ jsx(Play, { className: "h-6 w-6 text-white" }) }) }),
          /* @__PURE__ */ jsx(DialogContent, { className: "overflow-hidden p-0 md:min-w-3xl", children: /* @__PURE__ */ jsx(
            VideoPlayer,
            {
              source: {
                type: "video",
                sources: [
                  {
                    src: topCourse.preview,
                    type: "video/mp4"
                  }
                ]
              }
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("h6", { className: "relative z-10 py-5 text-2xl font-bold md:text-[28px]", children: topCourse.title }),
      /* @__PURE__ */ jsx(
        Accordion,
        {
          type: "single",
          collapsible: true,
          className: "relative z-10 space-y-4",
          defaultValue: topCourse.sections.length > 0 ? topCourse.sections[0].id : "",
          children: topCourse.sections.map((section, index) => /* @__PURE__ */ jsxs(AccordionItem, { value: section.id, className: "overflow-hidden rounded-lg border", children: [
            /* @__PURE__ */ jsxs(AccordionTrigger, { className: "[&[data-state=open]]:!bg-muted cursor-pointer px-4 py-3 text-base hover:no-underline", children: [
              "Module ",
              index + 1,
              ": ",
              section.title
            ] }),
            /* @__PURE__ */ jsx(AccordionContent, { className: "space-y-1 p-4", children: section.section_lessons.length > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [
              section.section_lessons.map((lesson) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3 py-2", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-secondary flex h-6 w-6 items-center justify-center rounded-full", children: [
                    videoTypes.includes(lesson.lesson_type) && /* @__PURE__ */ jsx(Video, { className: "h-4 w-4" }),
                    ["document", "iframe"].includes(lesson.lesson_type) && /* @__PURE__ */ jsx(File, { className: "h-4 w-4" }),
                    lesson.lesson_type === "text" && /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4" }),
                    lesson.lesson_type === "image" && /* @__PURE__ */ jsx(Image, { className: "h-4 w-4" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { children: lesson.title })
                ] }),
                videoTypes.includes(lesson.lesson_type) && /* @__PURE__ */ jsx("span", { children: lesson.duration })
              ] }, lesson.id)),
              section.section_quizzes.map((quiz) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3 py-2", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx("div", { className: "bg-secondary flex h-6 w-6 items-center justify-center rounded-full", children: /* @__PURE__ */ jsx(FileQuestion, { className: "h-4 w-4" }) }),
                  /* @__PURE__ */ jsx("p", { children: quiz.title })
                ] }),
                /* @__PURE__ */ jsx("span", { children: quiz.duration })
              ] }, quiz.id))
            ] }) : /* @__PURE__ */ jsx("div", { className: "px-4 py-3 text-center", children: /* @__PURE__ */ jsx("p", { children: "There is no lesson added" }) }) })
          ] }, section.id))
        }
      )
    ] }) : /* @__PURE__ */ jsx("div", { className: "relative z-10 mx-auto w-full max-w-[960px] space-y-4", children: /* @__PURE__ */ jsx("p", { className: "text-center text-lg font-medium", children: "Top Course Sections. There is no course added." }) }),
    /* @__PURE__ */ jsx("div", { className: "after:pointer-events-none after:absolute after:top-[50%] after:left-0 after:h-[240px] after:w-[240px] after:rounded-full after:bg-[rgba(97,95,255,1)] after:blur-[310px] after:content-['']" }),
    /* @__PURE__ */ jsx("div", { className: "after:pointer-events-none after:absolute after:top-[40%] after:right-0 after:h-[240px] after:w-[240px] after:rounded-full after:bg-[rgba(0,167,111,1)] after:blur-[240px] after:content-['']" })
  ] }) });
};
export {
  TopCourse as default
};
