import { jsx, jsxs } from "react/jsx-runtime";
import { S as SubscribeInput } from "./subscribe-input-X-VTQ_3G.js";
import { A as Avatar, a as AvatarImage, b as AvatarFallback } from "./avatar-Cr_jqfHL.js";
import { g as getPageSection, b as getPropertyArray } from "./page-CO5EAoAP.js";
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
import "@radix-ui/react-avatar";
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
const CallToAction = () => {
  var _a, _b;
  const { props } = usePage();
  const ctaSection = getPageSection(props.page, "call_to_action");
  return /* @__PURE__ */ jsx("div", { className: "bg-[#004B50] py-[120px]", children: /* @__PURE__ */ jsxs(Section, { customize: props.customize, pageSection: ctaSection, contentClass: "text-white text-center space-y-5", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-2xl leading-tight font-bold md:text-3xl md:leading-9", children: ctaSection == null ? void 0 : ctaSection.title }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto w-full max-w-[420px] text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "mb-3", children: ctaSection == null ? void 0 : ctaSection.description }),
      /* @__PURE__ */ jsx(SubscribeInput, { buttonText: (_a = ctaSection == null ? void 0 : ctaSection.properties) == null ? void 0 : _a.button_text })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center", children: [
      /* @__PURE__ */ jsx("div", { className: "*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale", children: getPropertyArray(ctaSection).map((item, index) => /* @__PURE__ */ jsxs(Avatar, { className: "h-8 w-8", children: [
        /* @__PURE__ */ jsx(AvatarImage, { src: item.image || "", alt: item.name, className: "object-cover" }),
        /* @__PURE__ */ jsx(AvatarFallback, { children: "IM" })
      ] }, index)) }),
      /* @__PURE__ */ jsx("p", { className: "font-medium", children: (_b = ctaSection == null ? void 0 : ctaSection.properties) == null ? void 0 : _b.subscribers })
    ] })
  ] }) });
};
export {
  CallToAction as default
};
