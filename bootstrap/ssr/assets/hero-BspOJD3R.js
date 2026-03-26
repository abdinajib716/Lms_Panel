import { jsxs, jsx } from "react/jsx-runtime";
import { S as SearchInput } from "./search-input-_KZEhUeb.js";
import { g as getPageSection } from "./page-CO5EAoAP.js";
import { c as cn } from "./utils-BmtPBcb0.js";
import { usePage, router } from "@inertiajs/react";
import Section from "./section-7thyMMDM.js";
import "./debounce-ZFxqVthq.js";
import "./route-DlE7FdTW.js";
import "lucide-react";
import "react";
import "clsx";
import "tailwind-merge";
import "./dialog-DD5SXV81.js";
import "@radix-ui/react-dialog";
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
import "./avatar-Cr_jqfHL.js";
import "@radix-ui/react-avatar";
const Hero = () => {
  const { props } = usePage();
  const heroSection = getPageSection(props.page, "hero");
  return /* @__PURE__ */ jsxs(
    Section,
    {
      customize: props.customize,
      pageSection: heroSection,
      containerClass: cn("py-20"),
      contentClass: cn("grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-3"),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-8 lg:space-y-10", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-secondary-foreground mb-2 text-lg font-medium", children: heroSection == null ? void 0 : heroSection.title }),
            /* @__PURE__ */ jsx("h1", { className: "text-3xl leading-tight font-bold md:text-4xl lg:text-[42px] lg:leading-14", children: heroSection == null ? void 0 : heroSection.sub_title }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-5 text-lg", children: heroSection == null ? void 0 : heroSection.description })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx(
              SearchInput,
              {
                iconPosition: "right",
                placeholder: "Search for courses that fit your goals",
                className: "[&>svg]:text-secondary-foreground bg-background z-10 w-full rounded md:max-w-[440px] [&>input]:h-10",
                onChangeValue: (value) => router.get(route("category.courses", { category: "all", search: value }))
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "after:pointer-events-none after:absolute after:top-1/2 after:-left-[60px] after:h-[240px] after:w-[240px] after:-translate-y-1/2 after:rounded-full after:bg-[rgba(0,167,111,1)] after:blur-[290px] after:content-[''] dark:after:bg-[#fff5cc6d]" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "animate-fade-in relative flex items-center justify-center lg:justify-end", children: [
          /* @__PURE__ */ jsx("img", { src: (heroSection == null ? void 0 : heroSection.thumbnail) || "", alt: "Student learning online", className: "relative z-10 h-full max-h-[460px]" }),
          /* @__PURE__ */ jsx("div", { className: "after:pointer-events-none after:absolute after:top-0 after:right-0 after:h-[240px] after:w-[240px] after:rounded-full after:bg-[rgba(97,95,255,1))] after:blur-[290px] after:content-[''] dark:after:bg-[#fff5cc6d]" })
        ] })
      ]
    }
  );
};
export {
  Hero as default
};
