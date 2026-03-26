import { jsxs, jsx } from "react/jsx-runtime";
import { C as Card } from "./card-D8SB2yrw.js";
import { g as getPageSection } from "./page-CO5EAoAP.js";
import Section from "./section-7thyMMDM.js";
import { usePage, Link } from "@inertiajs/react";
import "react";
import "./utils-BmtPBcb0.js";
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
const TopInstructors = () => {
  const { props } = usePage();
  const { innerPage, customize, topInstructors } = props;
  const topInstructorsSection = getPageSection(innerPage, "top_instructors");
  return /* @__PURE__ */ jsxs(Section, { customize, pageSection: topInstructorsSection, containerClass: "py-[120px]", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 mx-auto mb-8 max-w-lg text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-2 text-2xl font-bold sm:text-[30px]", children: topInstructorsSection == null ? void 0 : topInstructorsSection.title }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: topInstructorsSection == null ? void 0 : topInstructorsSection.description })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "relative z-10 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4", children: topInstructors.map((instructor) => /* @__PURE__ */ jsxs(Card, { className: "!shadow-card-lg relative overflow-hidden rounded-2xl", children: [
        /* @__PURE__ */ jsx(Link, { href: route("instructors.show", instructor.id), children: /* @__PURE__ */ jsx("div", { className: "relative h-[300px] overflow-hidden", children: /* @__PURE__ */ jsx(
          "img",
          {
            className: "h-full w-full object-cover object-center",
            src: instructor.user.photo || "/assets/images/intro/default/instructors/instructor-1.png",
            alt: ""
          }
        ) }) }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-1 py-4 text-center", children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold", children: instructor.user.name }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: instructor.designation })
        ] })
      ] }, instructor.id)) }),
      /* @__PURE__ */ jsx("div", { className: "after:pointer-events-none after:absolute after:top-1/2 after:left-1/2 after:h-[240px] after:w-[240px] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-[rgba(97,95,255,1))] after:blur-[250px] after:content-['']" })
    ] })
  ] });
};
export {
  TopInstructors as default
};
