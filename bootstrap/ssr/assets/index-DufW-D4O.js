import { jsx } from "react/jsx-runtime";
import CallToAction from "./call-to-action-CVZHM1nn.js";
import Hero from "./hero-BHJHIYqL.js";
import SuccessStatistics from "./success-statistics-CnCroqkn.js";
import Team from "./team-BhumrqS-.js";
import TopInstructors from "./top-instructors-DiyQFLIQ.js";
import "./subscribe-input-X-VTQ_3G.js";
import "./use-lang-44ndmTOc.js";
import "@inertiajs/react";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "./button-gradient-primary-Dgn8gIzu.js";
import "./button-jZyzwgdo.js";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./input-error-CEW4jhey.js";
import "./page-CO5EAoAP.js";
import "./section-7thyMMDM.js";
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
const Index = ({ sections }) => {
  const components = [];
  sections.filter((section) => section.active).map((section) => {
    switch (section.slug) {
      case "hero":
        components.push(Hero);
        break;
      case "success_statistics":
        components.push(SuccessStatistics);
        break;
      case "team":
        components.push(Team);
        break;
      case "call_to_action":
        components.push(CallToAction);
        break;
      case "top_instructors":
        components.push(TopInstructors);
        break;
    }
  });
  return /* @__PURE__ */ jsx("div", { children: components.map((Component, index) => /* @__PURE__ */ jsx(Component, {}, `about-us-1-${index}`)) });
};
export {
  Index as default
};
