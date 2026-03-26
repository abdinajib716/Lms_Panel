import { jsxs, jsx } from "react/jsx-runtime";
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
const Team = () => {
  const { props } = usePage();
  const teamSection = getPageSection(props.innerPage, "team");
  return /* @__PURE__ */ jsxs(
    Section,
    {
      customize: props.customize,
      pageSection: teamSection,
      containerClass: cn("py-20 md:py-[120px]"),
      contentClass: cn("flex flex-col items-center justify-center gap-7 md:flex-row"),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "relative w-full space-y-7 md:max-w-[384px]", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold md:text-[30px]", children: teamSection == null ? void 0 : teamSection.title }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: teamSection == null ? void 0 : teamSection.description })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-7 md:grid-cols-4", children: teamSection == null ? void 0 : teamSection.properties.array.map((stat, index) => /* @__PURE__ */ jsxs("div", { className: "group relative h-[192px] overflow-hidden rounded-lg", children: [
          /* @__PURE__ */ jsx("img", { src: stat.image, alt: stat.title, className: "h-full w-full rounded-lg object-cover object-center" }),
          /* @__PURE__ */ jsxs("div", { className: "from-primary dark:from-primary-foreground absolute bottom-0 left-1/2 flex h-full w-full -translate-x-1/2 flex-col justify-end bg-gradient-to-t p-4 text-center opacity-0 transition-all duration-200 group-hover:opacity-100", children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-white", children: stat.name }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-white", children: stat.role })
          ] })
        ] }, `item-${index}`)) })
      ]
    }
  );
};
export {
  Team as default
};
