import { jsx, jsxs } from "react/jsx-runtime";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-DVAMjldm.js";
import { g as getPageSection, b as getPropertyArray } from "./page-CO5EAoAP.js";
import { usePage } from "@inertiajs/react";
import Section from "./section-7thyMMDM.js";
import "react";
import "@radix-ui/react-accordion";
import "lucide-react";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "./dialog-DD5SXV81.js";
import "@radix-ui/react-dialog";
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
const FAQs = () => {
  const { props } = usePage();
  const { page, customize } = props;
  const faqsCoursesSection = getPageSection(page, "faqs");
  const array = getPropertyArray(faqsCoursesSection);
  const midPoint = Math.floor(array.length / 2);
  const firstPart = array.slice(0, midPoint);
  const secondPart = array.slice(midPoint);
  return /* @__PURE__ */ jsx(Section, { customize, pageSection: faqsCoursesSection, containerClass: "py-20", contentClass: "relative", children: /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 mx-auto mb-10 max-w-lg text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-2 text-3xl font-bold sm:text-4xl", children: faqsCoursesSection == null ? void 0 : faqsCoursesSection.title }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: faqsCoursesSection == null ? void 0 : faqsCoursesSection.description })
    ] }),
    /* @__PURE__ */ jsxs(Accordion, { type: "single", collapsible: true, defaultValue: "faq-0-first", className: "relative w-full", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 grid grid-cols-1 items-start gap-x-7 gap-y-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsx("div", { children: firstPart.map((faq, index) => /* @__PURE__ */ jsxs(
          AccordionItem,
          {
            value: `faq-${index}-first`,
            className: "bg-background border-border mb-4 rounded-lg border px-6 shadow-sm",
            children: [
              /* @__PURE__ */ jsx(AccordionTrigger, { className: "cursor-pointer py-4 text-base font-semibold hover:no-underline", children: faq.title }),
              /* @__PURE__ */ jsx(AccordionContent, { className: "text-muted-foreground pt-0 pb-4 text-sm", children: faq.description })
            ]
          },
          `faq-${index}-first`
        )) }),
        /* @__PURE__ */ jsx("div", { children: secondPart.map((faq, index) => /* @__PURE__ */ jsxs(
          AccordionItem,
          {
            value: `faq-${index}-second`,
            className: "bg-background border-border mb-4 rounded-lg border px-6 shadow-sm",
            children: [
              /* @__PURE__ */ jsx(AccordionTrigger, { className: "cursor-pointer py-4 text-base font-semibold hover:no-underline", children: faq.title }),
              /* @__PURE__ */ jsx(AccordionContent, { className: "text-muted-foreground pt-0 pb-4 text-sm", children: faq.description })
            ]
          },
          `faq-${index}-second`
        )) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "after:pointer-events-none after:absolute after:top-1/2 after:left-1/2 after:h-[240px] after:w-[240px] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-[rgba(97,95,255,1))] after:blur-[280px] after:content-['']" })
    ] })
  ] }) });
};
export {
  FAQs as default
};
