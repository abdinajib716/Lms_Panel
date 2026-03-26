import { jsxs, jsx } from "react/jsx-runtime";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Card } from "./card-D8SB2yrw.js";
import { g as getPageSection, b as getPropertyArray } from "./page-CO5EAoAP.js";
import { c as cn } from "./utils-BmtPBcb0.js";
import { usePage, Link } from "@inertiajs/react";
import { Pencil } from "lucide-react";
import { DynamicIcon } from "lucide-react/dynamic";
import InstructorSocials from "./instructor-socials-Dio3oqYc.js";
import Section from "./section-7thyMMDM.js";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "./dialog-DD5SXV81.js";
import "@radix-ui/react-dialog";
import "./use-lang-44ndmTOc.js";
import "./chunked-uploader-input-MwXGR7K4.js";
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
const Instructor = () => {
  const { props } = usePage();
  const { page, instructor, customize } = props;
  const instructorSection = getPageSection(page, "instructor");
  const oddElements = getPropertyArray(instructorSection).filter((_, index) => index % 2 === 0);
  const evenElements = getPropertyArray(instructorSection).filter((_, index) => index % 2 !== 0);
  return /* @__PURE__ */ jsxs(Section, { customize, pageSection: instructorSection, containerClass: "py-20 overflow-y-hidden", contentClass: "relative", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 mx-auto mb-10 w-full text-center md:max-w-lg", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-2 text-3xl font-bold sm:text-4xl", children: instructorSection == null ? void 0 : instructorSection.title }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: instructorSection == null ? void 0 : instructorSection.description })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 mx-auto grid w-full max-w-[964px] grid-cols-1 gap-8 md:grid-cols-3", children: [
      /* @__PURE__ */ jsx("div", { className: "space-y-12", children: oddElements == null ? void 0 : oddElements.map((item, index) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "bg-background shadow-card-md h-10 w-10 rounded p-2", children: /* @__PURE__ */ jsx(DynamicIcon, { name: item.icon, className: "text-secondary-foreground h-6 w-6" }) }),
        /* @__PURE__ */ jsx("h3", { className: "pt-4 pb-2 font-semibold", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: item.description })
      ] }, index)) }),
      /* @__PURE__ */ jsxs(Card, { className: "!shadow-card-hover space-y-6 p-5", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            className: "h-[190px] w-full rounded-lg object-cover object-top",
            src: (instructorSection == null ? void 0 : instructorSection.thumbnail) || "/assets/images/blank-image.jpg",
            alt: instructor ? instructor.user.name : ""
          }
        ),
        instructor && /* @__PURE__ */ jsxs("div", { className: cn("space-y-6", customize && "section-edit"), children: [
          customize && /* @__PURE__ */ jsx(Button, { asChild: true, size: "icon", variant: "secondary", className: "absolute top-3 right-3 z-20", children: /* @__PURE__ */ jsx(Link, { href: route("settings.account", { tab: "profile-update" }), children: /* @__PURE__ */ jsx(Pencil, { className: "h-7 w-7" }) }) }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: instructor.user.name }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: instructor.designation }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: instructor.biography })
          ] }),
          /* @__PURE__ */ jsx(InstructorSocials, { instructor, className: "py-0", buttonClass: "w-8 h-8" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-12", children: evenElements == null ? void 0 : evenElements.map((item, index) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "bg-background shadow-card-md h-10 w-10 rounded p-2", children: /* @__PURE__ */ jsx(DynamicIcon, { name: item.icon, className: "text-secondary-foreground h-6 w-6" }) }),
        /* @__PURE__ */ jsx("h3", { className: "pt-4 pb-2 font-semibold", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: item.description })
      ] }, index)) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "after:pointer-events-none after:absolute after:top-1/2 after:left-1/2 after:h-[290px] after:w-[290px] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-[rgba(97,95,255,1))] after:blur-[320px] after:content-['']" })
  ] });
};
export {
  Instructor as default
};
