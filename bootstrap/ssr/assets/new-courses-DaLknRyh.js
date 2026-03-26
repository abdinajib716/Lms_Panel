import { jsx, jsxs } from "react/jsx-runtime";
import { C as CourseCard1 } from "./course-card-1-BLS66nbX.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Carousel, a as CarouselContent, b as CarouselItem } from "./carousel-EYxgwHQ0.js";
import { g as getPageSection } from "./page-CO5EAoAP.js";
import { c as cn } from "./utils-BmtPBcb0.js";
import { usePage } from "@inertiajs/react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import Section from "./section-7thyMMDM.js";
import "./card-D8SB2yrw.js";
import "./tooltip-DswKljFZ.js";
import "@radix-ui/react-tooltip";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "embla-carousel-react";
import "clsx";
import "tailwind-merge";
import "./dialog-DD5SXV81.js";
import "@radix-ui/react-dialog";
import "./use-lang-44ndmTOc.js";
import "./chunked-uploader-input-MwXGR7K4.js";
import "./input-C6-Ta46A.js";
import "axios";
import "sonner";
import "./input-error-CEW4jhey.js";
import "./loading-button-C4Hk_jCd.js";
import "./label-Dd_w2I6M.js";
import "@radix-ui/react-label";
import "./textarea-DctRxpgE.js";
import "./inertia-BtwbgBI3.js";
import "./icon-picker-_EIJQgy3.js";
import "./debounce-ZFxqVthq.js";
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
const NewCourses = () => {
  const { props } = usePage();
  const { page, newCourses, customize } = props;
  const [api, setApi] = useState();
  const [currentSlide, setCurrentSlide] = useState(0);
  const newCoursesSection = getPageSection(page, "new_courses");
  useEffect(() => {
    if (!api) {
      return;
    }
    const handleSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };
    api.on("select", handleSelect);
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);
  return /* @__PURE__ */ jsx("div", { className: "overflow-y-hidden bg-[url('/assets/images/intro/home-1/bg-line.png')] bg-cover bg-center py-20", children: /* @__PURE__ */ jsxs(Section, { customize, pageSection: newCoursesSection, containerClass: "relative", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto text-center md:max-w-xl", children: [
        /* @__PURE__ */ jsx("p", { className: "text-secondary-foreground mb-1 font-medium", children: newCoursesSection == null ? void 0 : newCoursesSection.title }),
        /* @__PURE__ */ jsx("h2", { className: "mb-4 text-3xl font-bold sm:text-4xl", children: newCoursesSection == null ? void 0 : newCoursesSection.sub_title }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: newCoursesSection == null ? void 0 : newCoursesSection.description })
      ] }),
      /* @__PURE__ */ jsx(Carousel, { setApi, className: "z-10 py-10", opts: { align: "start", loop: true }, plugins: [Autoplay({ delay: 3e3 })], children: /* @__PURE__ */ jsx(CarouselContent, { children: newCourses.map((course) => /* @__PURE__ */ jsx(CarouselItem, { className: "basis-full md:basis-1/2 lg:basis-1/4", children: /* @__PURE__ */ jsx("div", { className: "px-1.5 py-0.5", children: /* @__PURE__ */ jsx(CourseCard1, { course }, course.id) }) }, course.id)) }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center gap-2.5", children: api && newCourses.map(({ id }, index) => /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "cursor-pointer rounded-full transition-all duration-200",
              currentSlide === index ? "bg-primary h-2 w-4" : "h-2 w-2 bg-gray-300"
            ),
            onClick: () => api.scrollTo(index)
          },
          id
        )) }),
        /* @__PURE__ */ jsxs("div", { className: "space-x-4", children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              size: "icon",
              variant: "outline",
              disabled: !(api == null ? void 0 : api.canScrollPrev()),
              onClick: () => api == null ? void 0 : api.scrollPrev(),
              className: "hover:border-primary hover:bg-background",
              children: /* @__PURE__ */ jsx(ChevronLeft, {})
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              size: "icon",
              variant: "outline",
              disabled: !(api == null ? void 0 : api.canScrollNext()),
              onClick: () => api == null ? void 0 : api.scrollNext(),
              className: "hover:border-primary hover:bg-background",
              children: /* @__PURE__ */ jsx(ChevronRight, {})
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "after:pointer-events-none after:absolute after:top-20 after:right-0 after:h-[240px] after:w-[240px] after:rounded-full after:bg-[rgba(0,120,103,1)] after:blur-[180px] after:content-['']" }),
    /* @__PURE__ */ jsx("div", { className: "after:pointer-events-none after:absolute after:bottom-20 after:left-0 after:h-[240px] after:w-[240px] after:rounded-full after:bg-[rgba(97,95,255,1))] after:blur-[180px] after:content-['']" })
  ] }) });
};
export {
  NewCourses as default
};
