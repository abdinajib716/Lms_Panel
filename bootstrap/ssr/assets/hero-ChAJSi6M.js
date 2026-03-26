import { jsxs, jsx } from "react/jsx-runtime";
import { B as ButtonGradientPrimary } from "./button-gradient-primary-Dgn8gIzu.js";
import { R as RatingStars } from "./rating-stars-Cw4PaRTw.js";
import { A as Avatar, a as AvatarImage, b as AvatarFallback } from "./avatar-Cr_jqfHL.js";
import { g as getPageSection, b as getPropertyArray } from "./page-CO5EAoAP.js";
import { c as cn } from "./utils-BmtPBcb0.js";
import { usePage, Link } from "@inertiajs/react";
import Section from "./section-7thyMMDM.js";
import "./button-jZyzwgdo.js";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "lucide-react";
import "@radix-ui/react-avatar";
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
const Hero = () => {
  var _a, _b, _c, _d, _e, _f, _g;
  const { props } = usePage();
  const heroSection = getPageSection(props.page, "hero");
  return /* @__PURE__ */ jsxs(
    Section,
    {
      customize: props.customize,
      pageSection: heroSection,
      containerClass: cn("pt-20 pb-10"),
      contentClass: cn("flex flex-col items-center justify-between gap-12 md:flex-row md:gap-3"),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "relative w-full md:max-w-[480px]", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative z-10 mb-6", children: [
            /* @__PURE__ */ jsx("p", { className: "text-secondary-foreground mb-2 text-lg font-medium", children: heroSection == null ? void 0 : heroSection.title }),
            /* @__PURE__ */ jsx("h1", { className: "text-3xl leading-tight font-bold md:text-4xl lg:text-[42px] lg:leading-14", children: heroSection == null ? void 0 : heroSection.sub_title }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4 text-lg", children: heroSection == null ? void 0 : heroSection.description })
          ] }),
          ((_a = heroSection == null ? void 0 : heroSection.properties) == null ? void 0 : _a.button_text) && /* @__PURE__ */ jsx(ButtonGradientPrimary, { asChild: true, shadow: false, className: "relative z-10 mb-10 md:mb-14", children: /* @__PURE__ */ jsx(Link, { href: ((_b = heroSection == null ? void 0 : heroSection.properties) == null ? void 0 : _b.button_link) || "", children: (_c = heroSection == null ? void 0 : heroSection.properties) == null ? void 0 : _c.button_text }) }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "*:data-[slot=avatar]:ring-background flex -space-x-4 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale", children: getPropertyArray(heroSection).map((item, index) => /* @__PURE__ */ jsxs(Avatar, { className: "h-11 w-11", children: [
              /* @__PURE__ */ jsx(AvatarImage, { src: item.image || "", alt: item.name, className: "object-cover" }),
              /* @__PURE__ */ jsx(AvatarFallback, { children: "IM" })
            ] }, index)) }),
            /* @__PURE__ */ jsxs("div", { children: [
              ((_d = heroSection == null ? void 0 : heroSection.properties) == null ? void 0 : _d.ratings) && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(RatingStars, { rating: 5, starClass: "w-4 h-4" }),
                /* @__PURE__ */ jsx("p", { className: "font-medium", children: (_e = heroSection == null ? void 0 : heroSection.properties) == null ? void 0 : _e.ratings })
              ] }),
              ((_f = heroSection == null ? void 0 : heroSection.properties) == null ? void 0 : _f.subscribers) && /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: (_g = heroSection == null ? void 0 : heroSection.properties) == null ? void 0 : _g.subscribers })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "after:pointer-events-none after:absolute after:top-0 after:-right-20 after:h-[240px] after:w-[240px] after:rounded-full after:bg-[rgba(97,95,255,1))] after:blur-[290px] after:content-['']" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-[640px]", children: [
          /* @__PURE__ */ jsx("img", { src: (heroSection == null ? void 0 : heroSection.thumbnail) || "", alt: "Student learning online", className: "relative z-10 h-full w-full" }),
          /* @__PURE__ */ jsx("div", { className: "after:pointer-events-none after:absolute after:right-0 after:bottom-20 after:h-[240px] after:w-[240px] after:rounded-full after:bg-[rgba(0,167,111,1)] after:blur-[290px] after:content-['']" })
        ] })
      ]
    }
  );
};
export {
  Hero as default
};
