import { jsx, jsxs } from "react/jsx-runtime";
import { S as SubscribeInput } from "./subscribe-input-X-VTQ_3G.js";
import { g as getPageSection } from "./page-CO5EAoAP.js";
import Section from "./section-7thyMMDM.js";
import { usePage } from "@inertiajs/react";
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
const CallToAction = () => {
  const { props } = usePage();
  const ctaSection = getPageSection(props.page, "call_to_action");
  return /* @__PURE__ */ jsx("div", { className: "bg-secondary-lighter border-secondary-light border-t py-20", children: /* @__PURE__ */ jsxs(
    Section,
    {
      pageSection: ctaSection,
      customize: props.customize,
      containerClass: "bg-[rgba(0,114,98,1)] rounded-4xl",
      contentClass: "text-white text-center space-y-5 px-6 py-[104px] bg-[url('/assets/images/intro/home-1/cta-bg-vector.png')] bg-cover bg-center",
      children: [
        /* @__PURE__ */ jsx("h1", { className: "text-2xl leading-tight font-bold md:text-3xl md:leading-9", children: ctaSection == null ? void 0 : ctaSection.sub_title }),
        /* @__PURE__ */ jsxs("div", { className: "mx-auto w-full max-w-[420px] text-center", children: [
          /* @__PURE__ */ jsx("p", { className: "mb-8", children: ctaSection == null ? void 0 : ctaSection.description }),
          /* @__PURE__ */ jsx(SubscribeInput, {})
        ] })
      ]
    }
  ) });
};
export {
  CallToAction as default
};
