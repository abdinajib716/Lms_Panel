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
const CallToAction = () => {
  var _a;
  const { props } = usePage();
  const ctaSection = getPageSection(props.page, "call_to_action");
  return /* @__PURE__ */ jsxs(Section, { customize: props.customize, pageSection: ctaSection, containerClass: "py-20", contentClass: "relative z-10", children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto w-full max-w-[820px] rounded-2xl bg-[#007867] px-6 py-20 md:rounded-3xl md:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto w-full max-w-[420px] text-center text-white", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-2xl leading-tight font-bold text-white md:text-3xl md:leading-9", children: ctaSection == null ? void 0 : ctaSection.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 mb-6", children: ctaSection == null ? void 0 : ctaSection.description }),
      /* @__PURE__ */ jsx(SubscribeInput, { buttonText: (_a = ctaSection == null ? void 0 : ctaSection.properties) == null ? void 0 : _a.button_text })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "after:pointer-events-none after:absolute after:top-0 after:left-16 after:h-[240px] after:w-[240px] after:rounded-full after:bg-[rgba(97,95,255,1))] after:blur-[290px] after:content-['']" }),
    /* @__PURE__ */ jsx("div", { className: "after:pointer-events-none after:absolute after:right-16 after:bottom-0 after:h-[240px] after:w-[240px] after:rounded-full after:bg-[rgba(0,167,111,1)] after:blur-[290px] after:content-['']" })
  ] });
};
export {
  CallToAction as default
};
