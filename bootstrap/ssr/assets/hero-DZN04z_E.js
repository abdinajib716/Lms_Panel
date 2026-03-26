import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { B as ButtonGradientPrimary } from "./button-gradient-primary-Dgn8gIzu.js";
import { R as RatingStars } from "./rating-stars-Cw4PaRTw.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Card } from "./card-D8SB2yrw.js";
import { D as Dialog, a as DialogTrigger, b as DialogContent } from "./dialog-DD5SXV81.js";
import { V as VideoPlayer } from "./video-player-CajLnoJG.js";
import { g as getPageSection, b as getPropertyArray } from "./page-CO5EAoAP.js";
import { c as cn } from "./utils-BmtPBcb0.js";
import { usePage, Link } from "@inertiajs/react";
import { Play } from "lucide-react";
import Section from "./section-7thyMMDM.js";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-dialog";
import "plyr-react";
/* empty css                */
import "clsx";
import "tailwind-merge";
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
const Hero = () => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  const { props } = usePage();
  const { page } = props;
  const heroSection = getPageSection(page, "hero");
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-[1440px]", children: [
      /* @__PURE__ */ jsxs(Section, { customize: props.customize, pageSection: heroSection, containerClass: "pt-20", contentClass: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: cn("relative z-10 grid grid-cols-1 items-center gap-x-20"), children: /* @__PURE__ */ jsxs("div", { className: "mx-auto mb-16 max-w-[712px] text-center", children: [
          /* @__PURE__ */ jsx("h1", { className: "mb-4 text-4xl font-bold md:text-5xl md:leading-14 md:font-extrabold", children: heroSection == null ? void 0 : heroSection.title }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6 text-lg md:px-8", children: heroSection == null ? void 0 : heroSection.description }),
          /* @__PURE__ */ jsxs("div", { className: "mb-10 flex flex-row justify-center gap-6", children: [
            ((_a = heroSection == null ? void 0 : heroSection.properties) == null ? void 0 : _a.button_text_1) && /* @__PURE__ */ jsx(ButtonGradientPrimary, { size: "lg", asChild: true, shadow: false, children: /* @__PURE__ */ jsx(Link, { href: ((_b = heroSection == null ? void 0 : heroSection.properties) == null ? void 0 : _b.button_link_1) || "", children: (_c = heroSection == null ? void 0 : heroSection.properties) == null ? void 0 : _c.button_text_1 }) }),
            ((_d = heroSection == null ? void 0 : heroSection.properties) == null ? void 0 : _d.button_text_2) && /* @__PURE__ */ jsx(Button, { size: "lg", asChild: true, variant: "outline", className: "px-4", children: /* @__PURE__ */ jsx(Link, { href: ((_e = heroSection == null ? void 0 : heroSection.properties) == null ? void 0 : _e.button_link_2) || "", children: (_f = heroSection == null ? void 0 : heroSection.properties) == null ? void 0 : _f.button_text_2 }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            ((_g = heroSection == null ? void 0 : heroSection.properties) == null ? void 0 : _g.ratings) && /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ jsx(RatingStars, { rating: 5, starClass: "w-4 h-4" }),
              /* @__PURE__ */ jsx("p", { className: "font-medium", children: (_h = heroSection == null ? void 0 : heroSection.properties) == null ? void 0 : _h.ratings })
            ] }),
            ((_i = heroSection == null ? void 0 : heroSection.properties) == null ? void 0 : _i.subscribers) && /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: (_j = heroSection == null ? void 0 : heroSection.properties) == null ? void 0 : _j.subscribers })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "shadow-card-hover relative z-10 mx-auto max-w-[780px] overflow-hidden rounded-3xl md:rounded-4xl", children: [
          /* @__PURE__ */ jsx("img", { src: (heroSection == null ? void 0 : heroSection.thumbnail) || "/assets/blank-image.png", alt: heroSection == null ? void 0 : heroSection.title, className: "mx-auto w-full" }),
          (heroSection == null ? void 0 : heroSection.video_url) && /* @__PURE__ */ jsxs(Dialog, { children: [
            /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx("button", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black/70 p-4 transition-transform hover:scale-110", children: /* @__PURE__ */ jsx(Play, { className: "h-6 w-6 text-white" }) }) }),
            /* @__PURE__ */ jsx(DialogContent, { className: "overflow-hidden p-0 md:min-w-3xl", children: /* @__PURE__ */ jsx(
              VideoPlayer,
              {
                source: {
                  type: "video",
                  sources: [
                    {
                      src: heroSection == null ? void 0 : heroSection.video_url,
                      type: "video/mp4"
                    }
                  ]
                }
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "hidden lg:block", children: getPropertyArray(heroSection).map((item, index) => /* @__PURE__ */ jsx(
          Card,
          {
            className: cn(
              "overflow-hidden rounded-xl",
              index === 0 && "absolute top-[180px] left-20 z-10",
              index === 1 && "absolute top-[200px] right-20 z-10",
              index === 2 && "absolute bottom-0 left-20 z-10",
              index === 3 && "absolute right-20 bottom-20 z-10"
            ),
            children: /* @__PURE__ */ jsx("img", { src: item.image, alt: "", className: cn("h-[180px]") })
          },
          `item-${index}`
        )) }),
        /* @__PURE__ */ jsx("div", { className: "after:pointer-events-none after:absolute after:top-0 after:left-0 after:h-[334px] after:w-[334px] after:rounded-full after:bg-[rgba(89,85,220,1)] after:blur-[320px] after:content-['']" }),
        /* @__PURE__ */ jsx("div", { className: "after:pointer-events-none after:absolute after:top-[220px] after:right-0 after:h-[300px] after:w-[300px] after:rounded-full after:bg-[rgba(255,190,0,1)] after:blur-[310px] after:content-['']" })
      ] }),
      /* @__PURE__ */ jsx("img", { src: heroSection == null ? void 0 : heroSection.background_image, alt: "", className: "absolute bottom-0 w-full object-cover" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "container grid grid-cols-2 gap-6 py-10 sm:grid-cols-4 lg:hidden", children: getPropertyArray(heroSection).map((item, index) => /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx("img", { src: item.image, alt: "", className: "shadow-card h-[160px] overflow-hidden rounded-xl sm:h-[180px]" }) }, `item-${index}`)) })
  ] });
};
export {
  Hero as default
};
