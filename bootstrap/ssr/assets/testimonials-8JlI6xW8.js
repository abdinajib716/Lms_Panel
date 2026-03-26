import { jsxs, jsx } from "react/jsx-runtime";
import { R as ReviewCard1 } from "./review-card-1-ZCNeviiD.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Carousel, a as CarouselContent, b as CarouselItem } from "./carousel-EYxgwHQ0.js";
import { g as getPageSection, b as getPropertyArray } from "./page-CO5EAoAP.js";
import { c as cn } from "./utils-BmtPBcb0.js";
import { usePage } from "@inertiajs/react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import Section from "./section-7thyMMDM.js";
import "./card-D8SB2yrw.js";
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
const Testimonials = () => {
  const { props } = usePage();
  const { customize } = props;
  const [api, setApi] = useState();
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonialsSection = getPageSection(props.page, "testimonials");
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
  return /* @__PURE__ */ jsxs(Section, { customize, pageSection: testimonialsSection, containerClass: "py-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 mx-auto max-w-lg text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-secondary-foreground mb-1 font-medium", children: testimonialsSection == null ? void 0 : testimonialsSection.title }),
      /* @__PURE__ */ jsx("h2", { className: "mb-4 text-2xl font-bold sm:text-3xl", children: testimonialsSection == null ? void 0 : testimonialsSection.sub_title }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: testimonialsSection == null ? void 0 : testimonialsSection.description })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx(
        Carousel,
        {
          setApi,
          className: "relative z-10 py-10",
          opts: {
            loop: true,
            align: "start",
            slidesToScroll: "auto"
          },
          plugins: [Autoplay({ delay: 5e3 })],
          children: /* @__PURE__ */ jsx(CarouselContent, { children: getPropertyArray(testimonialsSection).map((review, index) => /* @__PURE__ */ jsx(CarouselItem, { className: "md:basis-1/2 lg:basis-1/3", children: /* @__PURE__ */ jsx("div", { className: "h-full px-1.5 py-0.5", children: /* @__PURE__ */ jsx(ReviewCard1, { review }) }) }, `testimonials-${index}`)) })
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "after:pointer-events-none after:absolute after:top-0 after:left-0 after:h-[200px] after:w-[200px] after:rounded-full after:bg-[rgba(97,95,255,1))] after:blur-[290px] after:content-['']" }),
      /* @__PURE__ */ jsx("div", { className: "after:pointer-events-none after:absolute after:right-0 after:bottom-0 after:h-[260px] after:w-[260px] after:rounded-full after:bg-[rgba(0,167,111,1)] after:blur-[290px] after:content-['']" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center gap-2.5", children: api && getPropertyArray(testimonialsSection).map(({ id }, index) => /* @__PURE__ */ jsx(
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
  ] });
};
export {
  Testimonials as default
};
