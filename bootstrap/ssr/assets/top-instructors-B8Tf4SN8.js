import { jsxs, jsx } from "react/jsx-runtime";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Carousel, a as CarouselContent, b as CarouselItem } from "./carousel-EYxgwHQ0.js";
import { g as getPageSection } from "./page-CO5EAoAP.js";
import { usePage, Link } from "@inertiajs/react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import InstructorSocials from "./instructor-socials-Dio3oqYc.js";
import Section from "./section-7thyMMDM.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "embla-carousel-react";
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
const TopInstructors = () => {
  const { props } = usePage();
  const { page, customize, topInstructors } = props;
  const topInstructorsSection = getPageSection(page, "top_instructors");
  const [api, setApi] = useState();
  return /* @__PURE__ */ jsxs(Section, { customize, pageSection: topInstructorsSection, containerClass: "py-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto mb-10 text-center md:max-w-[480px]", children: [
      /* @__PURE__ */ jsx("p", { className: "text-secondary-foreground mb-1 font-medium", children: topInstructorsSection == null ? void 0 : topInstructorsSection.title }),
      /* @__PURE__ */ jsx("h2", { className: "mb-4 text-3xl font-bold sm:text-4xl", children: topInstructorsSection == null ? void 0 : topInstructorsSection.sub_title }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: topInstructorsSection == null ? void 0 : topInstructorsSection.description })
    ] }),
    /* @__PURE__ */ jsxs(Carousel, { setApi, className: "relative", opts: { align: "start", loop: true }, plugins: [Autoplay({ delay: 3e3 })], children: [
      /* @__PURE__ */ jsx(CarouselContent, { children: topInstructors.map((instructor) => {
        return /* @__PURE__ */ jsx(CarouselItem, { className: "basis-full md:basis-1/2 lg:basis-1/4", children: /* @__PURE__ */ jsx(Link, { href: route("instructors.show", instructor.id), children: /* @__PURE__ */ jsx("div", { className: "px-1.5 py-0.5", children: /* @__PURE__ */ jsxs("div", { className: "group relative h-[380px] overflow-hidden rounded-2xl", children: [
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
            /* @__PURE__ */ jsx("p", { className: "text-sm text-white", children: instructor.designation }),
            /* @__PURE__ */ jsx(
              InstructorSocials,
              {
                instructor,
                buttonVariant: "ghost",
                buttonClass: "bg-muted hover:bg-muted/80 dark:bg-primary/90 dark:hover:bg-primary/80 dark:text-primary-foreground"
              }
            )
          ] })
        ] }) }) }) }, instructor.id);
      }) }),
      /* @__PURE__ */ jsx(
        Button,
        {
          size: "icon",
          variant: "outline",
          disabled: !(api == null ? void 0 : api.canScrollPrev()),
          onClick: () => api == null ? void 0 : api.scrollPrev(),
          className: "hover:border-primary hover:bg-background absolute top-1/2 -left-3 -translate-y-1/2",
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
          className: "hover:border-primary hover:bg-background absolute top-1/2 -right-3 -translate-y-1/2",
          children: /* @__PURE__ */ jsx(ChevronRight, {})
        }
      )
    ] })
  ] });
};
export {
  TopInstructors as default
};
