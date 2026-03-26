import { jsx, jsxs } from "react/jsx-runtime";
import { C as Card } from "./card-D8SB2yrw.js";
import { g as getPageSection, b as getPropertyArray } from "./page-CO5EAoAP.js";
import { h as getColorWithOpacity } from "./utils-BmtPBcb0.js";
import { usePage } from "@inertiajs/react";
import { DynamicIcon } from "lucide-react/dynamic";
import Section from "./section-7thyMMDM.js";
import "react";
import "clsx";
import "tailwind-merge";
import "./dialog-DD5SXV81.js";
import "@radix-ui/react-dialog";
import "lucide-react";
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
import "./icon-picker-_EIJQgy3.js";
import "./debounce-ZFxqVthq.js";
import "./tooltip-DswKljFZ.js";
import "@radix-ui/react-tooltip";
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
const Overview = () => {
  const { props } = usePage();
  const overviewSection = getPageSection(props.page, "overview");
  return /* @__PURE__ */ jsx(Section, { customize: props.customize, pageSection: overviewSection, containerClass: "py-20", contentClass: "text-center", children: /* @__PURE__ */ jsx("div", { className: "relative grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-4", children: getPropertyArray(overviewSection).map((stat, index) => {
    return /* @__PURE__ */ jsxs(
      Card,
      {
        className: "bg-secondary-lighter rounded-3xl border-none px-6 py-10 !shadow-none md:py-12",
        style: { backgroundColor: getColorWithOpacity(stat.color, 0.1) },
        children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "bg-secondary-foreground mx-auto flex h-14 w-14 items-center justify-center rounded-full",
              style: { backgroundColor: getColorWithOpacity(stat.color, 1) },
              children: /* @__PURE__ */ jsx(DynamicIcon, { name: stat.icon, className: "h-8 w-8 text-white" })
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "mt-4 space-y-2", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-4xl font-semibold md:text-[44px]", children: stat.count }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-6", children: stat.title })
          ] })
        ]
      },
      `element-${index}`
    );
  }) }) });
};
export {
  Overview as default
};
