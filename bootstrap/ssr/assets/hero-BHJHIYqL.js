import { jsx, jsxs } from "react/jsx-runtime";
import { g as getPageSection } from "./page-CO5EAoAP.js";
import { c as cn } from "./utils-BmtPBcb0.js";
import Section from "./section-7thyMMDM.js";
import { usePage } from "@inertiajs/react";
import "clsx";
import "tailwind-merge";
import "./dialog-DD5SXV81.js";
import "@radix-ui/react-dialog";
import "lucide-react";
import "./use-lang-44ndmTOc.js";
import "react";
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
  const { props } = usePage();
  const heroSection = getPageSection(props.innerPage, "hero");
  return /* @__PURE__ */ jsx(
    Section,
    {
      customize: props.customize,
      pageSection: heroSection,
      containerClass: cn("py-20 md:py-[120px]"),
      contentClass: cn("flex flex-col items-center justify-between gap-12 md:flex-row md:gap-3"),
      children: /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col items-center justify-center gap-7 md:flex-row", children: [
        /* @__PURE__ */ jsx("div", { className: "grid w-full grid-cols-1 gap-7 md:grid-cols-2", children: heroSection == null ? void 0 : heroSection.properties.array.map((item, index) => /* @__PURE__ */ jsx("div", { className: "h-[356px]", children: /* @__PURE__ */ jsx("img", { src: item.image, alt: "", className: "h-full w-full rounded-2xl object-cover object-center" }, `image-${index}`) }, `image-${index}`)) }),
        /* @__PURE__ */ jsx("div", { className: "w-full space-y-7 md:max-w-[480px]", children: heroSection == null ? void 0 : heroSection.properties.array.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold md:text-[30px]", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: item.description })
        ] }, `contents-${index}`)) })
      ] })
    }
  );
};
export {
  Hero as default
};
