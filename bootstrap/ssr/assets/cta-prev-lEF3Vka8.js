import { jsxs, jsx } from "react/jsx-runtime";
import { S as SubscribeInput } from "./subscribe-input-X-VTQ_3G.js";
import { g as getPageSection } from "./page-CO5EAoAP.js";
import { usePage } from "@inertiajs/react";
import Section from "./section-7thyMMDM.js";
import "./use-lang-44ndmTOc.js";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "./button-gradient-primary-Dgn8gIzu.js";
import "./button-jZyzwgdo.js";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./input-error-CEW4jhey.js";
import "./dialog-DD5SXV81.js";
import "@radix-ui/react-dialog";
import "lucide-react";
import "./chunked-uploader-input-MwXGR7K4.js";
import "./input-C6-Ta46A.js";
import "axios";
import "sonner";
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
const CTA = () => {
  const { props } = usePage();
  const ctaSection = getPageSection(props.page, "call_to_action");
  return /* @__PURE__ */ jsxs(
    Section,
    {
      customize: props.customize,
      pageSection: ctaSection,
      containerClass: "py-20",
      contentClass: "relative z-10 flex flex-col items-center justify-between gap-10 md:flex-row",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "animate-fade-in w-full max-w-[400px] space-y-8 lg:space-y-10", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h1", { className: "text-2xl leading-tight font-bold md:text-3xl md:leading-9", children: ctaSection == null ? void 0 : ctaSection.sub_title }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-3", children: ctaSection == null ? void 0 : ctaSection.description })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx(SubscribeInput, {}),
            /* @__PURE__ */ jsx("div", { className: "after:pointer-events-none after:absolute after:top-0 after:-left-5 after:h-[84px] after:w-[84px] after:rounded-full after:bg-[#FFF5CC] after:blur-[50px] after:content-[''] dark:after:bg-[#fff5cc6d]" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "animate-fade-in relative flex items-center justify-center lg:justify-end", children: [
          /* @__PURE__ */ jsx("img", { src: (ctaSection == null ? void 0 : ctaSection.thumbnail) || "", alt: "Student learning online", className: "relative z-10 max-h-[444px] w-full" }),
          /* @__PURE__ */ jsx("div", { className: "after:pointer-events-none after:absolute after:right-10 after:-bottom-10 after:h-[200px] after:w-[200px] after:rounded-full after:bg-[#FFF5CC] after:blur-[250px] after:content-[''] md:after:h-[310px] md:after:w-[310px] dark:after:bg-[#fff5cc6d]" })
        ] })
      ]
    }
  );
};
export {
  CTA as default
};
