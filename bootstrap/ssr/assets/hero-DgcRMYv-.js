import { jsxs, jsx } from "react/jsx-runtime";
import { B as ButtonGradientPrimary } from "./button-gradient-primary-Dgn8gIzu.js";
import { g as getPageSection, b as getPropertyArray } from "./page-CO5EAoAP.js";
import { c as cn } from "./utils-BmtPBcb0.js";
import { usePage, Link } from "@inertiajs/react";
import Section from "./section-7thyMMDM.js";
import "./button-jZyzwgdo.js";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "./dialog-DD5SXV81.js";
import "@radix-ui/react-dialog";
import "lucide-react";
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
const Hero = () => {
  var _a, _b, _c;
  const { props } = usePage();
  const heroSection = getPageSection(props.page, "hero");
  return /* @__PURE__ */ jsxs(
    Section,
    {
      customize: props.customize,
      pageSection: heroSection,
      containerClass: cn("py-20"),
      contentClass: cn("flex flex-col items-center justify-between gap-20 md:gap-10 lg:flex-row"),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "animate-fade-in relative w-full space-y-8 md:max-w-[480px] lg:space-y-10", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
            /* @__PURE__ */ jsx("p", { className: "text-secondary-foreground mb-2 text-lg font-medium", children: heroSection == null ? void 0 : heroSection.title }),
            /* @__PURE__ */ jsx("h1", { className: "text-3xl leading-tight font-bold md:text-4xl lg:text-[44px] lg:leading-14", children: heroSection == null ? void 0 : heroSection.sub_title }),
            /* @__PURE__ */ jsx("p", { className: "mt-5 text-lg", children: heroSection == null ? void 0 : heroSection.description })
          ] }),
          ((_a = heroSection == null ? void 0 : heroSection.properties) == null ? void 0 : _a.button_text) && /* @__PURE__ */ jsx(ButtonGradientPrimary, { asChild: true, shadow: false, className: "relative z-10 mb-10 md:mb-14", children: /* @__PURE__ */ jsx(Link, { href: ((_b = heroSection == null ? void 0 : heroSection.properties) == null ? void 0 : _b.button_link) || "", children: (_c = heroSection == null ? void 0 : heroSection.properties) == null ? void 0 : _c.button_text }) }),
          /* @__PURE__ */ jsx("div", { className: "relative z-10 flex items-center justify-center gap-2.5 lg:justify-start", children: getPropertyArray(heroSection).map((stat, index) => /* @__PURE__ */ jsxs("div", { className: "animate-fade-in p-2.5", style: { animationDelay: `${index * 0.2}s` }, children: [
            /* @__PURE__ */ jsx("h6", { className: "text-lg font-bold lg:text-xl", children: stat.value }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: stat.label })
          ] }, `item${stat.number}`)) }),
          /* @__PURE__ */ jsx("div", { className: "after:pointer-events-none after:absolute after:top-0 after:-right-20 after:h-[240px] after:w-[240px] after:rounded-full after:bg-[rgba(97,95,255,1))] after:blur-[290px] after:content-['']" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative flex w-full max-w-[680px] items-center justify-center lg:justify-end", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: (heroSection == null ? void 0 : heroSection.thumbnail) || "/assets/images/intro/default/hero-image.png",
              alt: "Student learning online",
              className: "relative z-10 w-full"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "after:pointer-events-none after:absolute after:right-0 after:bottom-0 after:h-[240px] after:w-[240px] after:rounded-full after:bg-[rgba(0,167,111,1)] after:blur-[290px] after:content-['']" })
        ] })
      ]
    }
  );
};
export {
  Hero as default
};
