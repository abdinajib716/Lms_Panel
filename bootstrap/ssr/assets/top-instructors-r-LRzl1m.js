import { jsxs, jsx } from "react/jsx-runtime";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Card } from "./card-D8SB2yrw.js";
import { C as Carousel, a as CarouselContent, b as CarouselItem } from "./carousel-EYxgwHQ0.js";
import { g as getPageSection } from "./page-CO5EAoAP.js";
import { c as cn } from "./utils-BmtPBcb0.js";
import { usePage, Link } from "@inertiajs/react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import InstructorSocials from "./instructor-socials-Dio3oqYc.js";
import Section from "./section-7thyMMDM.js";
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
const TopInstructors = () => {
  const { props } = usePage();
  const { page, customize, topInstructors } = props;
  const topInstructorsSection = getPageSection(page, "top_instructors");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState();
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
  return /* @__PURE__ */ jsxs(Section, { customize, pageSection: topInstructorsSection, containerClass: "py-20", contentClass: "relative", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-4 text-3xl font-bold sm:text-4xl", children: topInstructorsSection == null ? void 0 : topInstructorsSection.title }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: topInstructorsSection == null ? void 0 : topInstructorsSection.description })
    ] }),
    /* @__PURE__ */ jsx(Carousel, { setApi, className: "relative z-10 my-5", opts: { align: "start", loop: true }, plugins: [Autoplay({ delay: 3e3 })], children: /* @__PURE__ */ jsx(CarouselContent, { children: topInstructors.map((instructor) => {
      return /* @__PURE__ */ jsx(CarouselItem, { className: "basis-full md:basis-1/2 lg:basis-1/4", children: /* @__PURE__ */ jsx("div", { className: "px-1.5 py-5", children: /* @__PURE__ */ jsxs(Card, { className: "group !shadow-card-lg relative overflow-hidden rounded-2xl", children: [
        /* @__PURE__ */ jsx(Link, { href: route("instructors.show", instructor.id), children: /* @__PURE__ */ jsxs("div", { className: "relative h-[300px] overflow-hidden", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              className: "h-full w-full object-cover object-center",
              src: instructor.user.photo || "/assets/images/intro/default/instructors/instructor-1.png",
              alt: ""
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "from-primary dark:from-primary-foreground absolute bottom-0 left-1/2 flex h-full w-full -translate-x-1/2 flex-col justify-end bg-gradient-to-t p-4 text-center opacity-0 transition-all duration-200 group-hover:opacity-100", children: [
            /* @__PURE__ */ jsx("p", { className: "mb-1 text-lg font-semibold text-white", children: instructor.user.name }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-white", children: instructor.designation })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(InstructorSocials, { instructor })
      ] }) }) }, instructor.id);
    }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex items-center justify-between", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center gap-2.5", children: api && topInstructors.map(({ id }, index) => /* @__PURE__ */ jsx(
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
    ] }),
    /* @__PURE__ */ jsx("div", { className: "after:pointer-events-none after:absolute after:top-10 after:left-0 after:h-[240px] after:w-[240px] after:rounded-full after:bg-[rgba(97,95,255,1))] after:blur-[290px] after:content-['']" }),
    /* @__PURE__ */ jsx("div", { className: "after:pointer-events-none after:absolute after:right-0 after:bottom-9 after:h-[240px] after:w-[240px] after:rounded-full after:bg-[rgba(0,167,111,1)] after:blur-[290px] after:content-['']" })
  ] });
};
export {
  TopInstructors as default
};
