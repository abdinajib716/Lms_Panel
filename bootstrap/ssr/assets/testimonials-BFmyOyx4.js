import { jsx, jsxs } from "react/jsx-runtime";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Carousel, a as CarouselContent, b as CarouselItem } from "./carousel-EYxgwHQ0.js";
import { g as getPageSection, b as getPropertyArray } from "./page-CO5EAoAP.js";
import { c as cn } from "./utils-BmtPBcb0.js";
import { usePage } from "@inertiajs/react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
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
const Quote = (props) => {
  return /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "98", height: "69", viewBox: "0 0 98 69", fill: "none", ...props, children: /* @__PURE__ */ jsx(
    "path",
    {
      d: "M53.3856 47.0748C53.3856 43.2916 53.7296 39.2505 54.4176 34.9514C55.1915 30.5664 56.3524 26.2673 57.9003 22.0542C59.5341 17.7551 61.598 13.714 64.0918 9.93084C66.6715 6.06168 69.7673 2.7514 73.379 0L87.4388 9.80187C85.031 12.5533 83.2252 15.1757 82.0213 17.6692C80.8174 20.1626 79.8715 22.6561 79.1835 25.1495C81.7633 25.5794 84.1711 26.4822 86.4069 27.8579C88.6427 29.1477 90.5776 30.7813 92.2114 32.7589C93.8453 34.6505 95.1352 36.843 96.0811 39.3364C97.027 41.7439 97.5 44.3234 97.5 47.0748C97.5 50.0841 96.898 52.9215 95.6941 55.5869C94.5762 58.1664 92.9854 60.4879 90.9215 62.5514C88.9437 64.529 86.6219 66.1196 83.9561 67.3234C81.2903 68.4411 78.4956 69 75.5718 69C72.4761 69 69.5523 68.4411 66.8005 67.3234C64.1348 66.1196 61.7699 64.529 59.7061 62.5514C57.7283 60.4879 56.1804 58.1664 55.0625 55.5869C53.9446 52.9215 53.3856 50.0841 53.3856 47.0748ZM0.5 47.0748C0.5 43.2916 0.843972 39.2505 1.53191 34.9514C2.30585 30.5664 3.46676 26.2673 5.01463 22.0542C6.64849 17.7551 8.75532 13.714 11.3351 9.93084C13.9149 6.06168 17.0106 2.7514 20.6223 0L34.5532 9.80187C32.1454 12.5533 30.3395 15.1757 29.1356 17.6692C28.0177 20.1626 27.1148 22.6561 26.4269 25.1495C29.0066 25.5794 31.4144 26.4822 33.6503 27.8579C35.8861 29.1477 37.7779 30.7813 39.3258 32.7589C40.9597 34.6505 42.2496 36.843 43.1955 39.3364C44.1414 41.7439 44.6144 44.3234 44.6144 47.0748C44.6144 50.0841 44.0124 52.9215 42.8085 55.5869C41.6906 58.1664 40.0997 60.4879 38.0359 62.5514C36.0581 64.529 33.7363 66.1196 31.0705 67.3234C28.4047 68.4411 25.6099 69 22.6862 69C19.5904 69 16.6667 68.4411 13.9149 67.3234C11.2491 66.1196 8.92731 64.529 6.94947 62.5514C4.97163 60.4879 3.38076 58.1664 2.17686 55.5869C1.05895 52.9215 0.5 50.0841 0.5 47.0748Z",
      fill: "#FFF5CC"
    }
  ) });
};
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
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 mx-auto text-center md:max-w-[480px]", children: [
      /* @__PURE__ */ jsx("p", { className: "text-secondary-foreground mb-1 font-medium", children: testimonialsSection == null ? void 0 : testimonialsSection.title }),
      /* @__PURE__ */ jsx("h2", { className: "mb-4 text-3xl font-bold sm:text-4xl", children: testimonialsSection == null ? void 0 : testimonialsSection.title }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: testimonialsSection == null ? void 0 : testimonialsSection.description })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative mt-10", children: [
      /* @__PURE__ */ jsxs(
        Carousel,
        {
          setApi,
          className: "relative z-10 space-y-7",
          opts: {
            loop: true,
            align: "start",
            slidesToScroll: "auto"
          },
          plugins: [Autoplay({ delay: 5e3 })],
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx(Quote, {}) }),
            /* @__PURE__ */ jsx("div", { className: "mx-auto w-full max-w-[460px]", children: /* @__PURE__ */ jsx(CarouselContent, { children: getPropertyArray(testimonialsSection).map((review, index) => /* @__PURE__ */ jsx(CarouselItem, { className: "text-center", children: /* @__PURE__ */ jsx("p", { className: "text-lg", children: review.description }) }, `testimonials-${index}`)) }) }),
            /* @__PURE__ */ jsx("div", { className: "flex h-[100px] flex-wrap items-center justify-center gap-7", children: api && getPropertyArray(testimonialsSection).map(({ id, image }, index) => /* @__PURE__ */ jsx(
              "div",
              {
                className: cn(
                  "cursor-pointer overflow-hidden rounded-full transition-all duration-200",
                  currentSlide === index ? "h-[100px] w-[100px] opacity-100" : "h-[60px] w-[60px] opacity-40"
                ),
                onClick: () => api.scrollTo(index),
                children: /* @__PURE__ */ jsx("img", { src: image, alt: "", className: "h-full w-full object-cover" })
              },
              id
            )) })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "absolute top-1/2 right-0 z-10 flex w-full -translate-y-1/2 justify-between", children: [
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
      ] }),
      /* @__PURE__ */ jsx("div", { className: "after:pointer-events-none after:absolute after:top-10 after:left-20 after:h-[240px] after:w-[240px] after:rounded-full after:bg-[rgba(97,95,255,1))] after:blur-[290px] after:content-['']" }),
      /* @__PURE__ */ jsx("div", { className: "after:pointer-events-none after:absolute after:right-20 after:bottom-10 after:h-[240px] after:w-[240px] after:rounded-full after:bg-[rgba(0,167,111,1)] after:blur-[290px] after:content-['']" })
    ] })
  ] });
};
export {
  Testimonials as default
};
