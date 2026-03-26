import { jsxs, jsx } from "react/jsx-runtime";
import { S as SidebarProvider, a as Sidebar, b as SidebarInset } from "./sidebar-6wqj6oXO.js";
import { M as Main } from "./main-BqrosZ6t.js";
import { A as AppLogo } from "./app-logo-42nmPdEQ.js";
import { D as DataSortModal } from "./data-sort-modal-CzOtsWqf.js";
import { S as Switch } from "./switch-Bijz4LyT.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Card } from "./card-D8SB2yrw.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { g as getPageSection } from "./page-CO5EAoAP.js";
import { c as cn, g as getCompletedContents, a as getCourseCompletion } from "./utils-BmtPBcb0.js";
import { usePage, router, Link } from "@inertiajs/react";
import { getYear } from "date-fns";
import { Settings } from "lucide-react";
import { g as getQueryParams } from "./route-DlE7FdTW.js";
import { useState, useEffect } from "react";
import ContentList from "./content-list-2qlwqit9.js";
import ContentSummery from "./content-summery-Cz5CD9T-.js";
import LessonViewer from "./lesson-viewer-DUjewlJL.js";
import Navbar from "./navbar-CAtYIG7e.js";
import QuizViewer from "./quiz-viewer-D4F0copr.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./separator-R7EO2G8T.js";
import "@radix-ui/react-separator";
import "./sheet-CuVwNO0O.js";
import "@radix-ui/react-dialog";
import "./tooltip-DswKljFZ.js";
import "@radix-ui/react-tooltip";
import "next-themes";
import "sonner";
import "nprogress";
import "./dialog-DD5SXV81.js";
import "./scroll-area-DPHRDnwL.js";
import "@radix-ui/react-scroll-area";
import "@radix-ui/react-switch";
import "@radix-ui/react-label";
import "clsx";
import "tailwind-merge";
import "./live-class-status-DAOLYBAD.js";
import "./tabs-CPx41tqt.js";
import "./tabs-BOXC0x8t.js";
import "@radix-ui/react-tabs";
import "./client-renderer-CUBmzaOS.js";
/* empty css               */
import "react-icons/lu";
import "hast-util-to-jsx-runtime";
import "shiki/bundle/full";
import "rehype-parse";
import "rehype-react";
import "unified";
import "unist-util-visit";
import "./accordion-DVAMjldm.js";
import "@radix-ui/react-accordion";
import "./progress-BuQTjce4.js";
import "@radix-ui/react-progress";
import "./lesson-5TyQSzUm.js";
import "./lesson-icons-CrjzYJr0.js";
import "./quiz-XhaYKC48.js";
import "./student-feedback-C9_Duvqa.js";
import "./use-lang-44ndmTOc.js";
import "./review-BnOkQIGs.js";
import "./delete-modal-BIvxKwRf.js";
import "./input-error-CEW4jhey.js";
import "./loading-button-C4Hk_jCd.js";
import "./table-footer-Bf3DvTcP.js";
import "./dropdown-menu-BIfW6iuW.js";
import "@radix-ui/react-dropdown-menu";
import "./avatar-Cr_jqfHL.js";
import "@radix-ui/react-avatar";
import "./textarea-DctRxpgE.js";
import "./review-edit-DiN0groi.js";
import "./forum-CpSyQVk9.js";
import "./Editor-iiR11EW9.js";
import "react-icons/tb";
import "react-icons/ai";
import "@radix-ui/react-popover";
import "@tiptap/react";
import "prettier/plugins/html";
import "prettier/standalone";
import "@codemirror/lang-html";
import "@codemirror/state";
import "@codemirror/view";
import "codemirror";
import "./theme-BnORSbS2.js";
import "@codemirror/language";
import "@lezer/highlight";
import "react-dom";
import "react-colorful";
import "@tiptap/extension-bubble-menu";
import "@tiptap/pm/state";
import "@tiptap/starter-kit";
import "@tiptap/extension-character-count";
import "@tiptap/extension-underline";
import "@tiptap/extension-placeholder";
import "@tiptap/extension-text-align";
import "@tiptap/extension-text-style";
import "@tiptap/extension-subscript";
import "@tiptap/extension-superscript";
import "@tiptap/extension-bullet-list";
import "@tiptap/extension-ordered-list";
import "@tiptap/extension-list-keymap";
import "@tiptap/extension-color";
import "@tiptap/extension-highlight";
import "@tiptap/extension-code-block-lowlight";
import "@tiptap/core";
import "@tiptap/pm/view";
import "highlight.js/lib/core";
import "lowlight";
import "highlight.js/lib/languages/plaintext";
import "@tiptap/pm/model";
import "@tiptap/extension-image";
import "@tiptap/extension-link";
import "@tiptap/extension-table";
import "@tiptap/extension-table-cell";
import "@tiptap/extension-table-header";
import "@tiptap/extension-table-row";
import "./input-C6-Ta46A.js";
import "./inertia-BtwbgBI3.js";
import "./forum-edit-C8UWY74J.js";
import "./forum-reply-DjXsjdAz.js";
import "./resource-DG0THxN3.js";
import "./video-player-CajLnoJG.js";
import "plyr-react";
/* empty css                */
import "./document-viewer-Cu3KnL-a.js";
import "./embed-viewer-CRjXuKs5.js";
import "./lesson-control-2pONF3aa.js";
import "./notification-BXalLCUz.js";
import "./popover-BV7JTqNd.js";
import "./use-screen-B7SDA5zE.js";
import "nanoid";
import "./checkbox-CO4DegBm.js";
import "@radix-ui/react-checkbox";
import "./radio-group-sSS5HHUP.js";
import "@radix-ui/react-radio-group";
const LandingFooter = () => {
  const { page, customize, system } = usePage().props;
  const aboutUsSection = getPageSection(page, "footer_list_1");
  const customerCareSection = getPageSection(page, "footer_list_2");
  const contactUsSection = getPageSection(page, "footer_list_3");
  const sections = [aboutUsSection, customerCareSection, contactUsSection].filter((section) => section !== void 0).sort((a, b) => (a.sort || 0) - (b.sort || 0));
  const sectionActiveChange = (id, active) => {
    router.post(route("page.section.update", id), {
      active
    });
  };
  return /* @__PURE__ */ jsxs("div", { className: "text-primary-foreground dark:text-primary relative bg-gray-900 pt-20 pb-10 dark:bg-gray-800", children: [
    customize && page && /* @__PURE__ */ jsx("div", { className: "absolute top-6 right-6 z-20", children: /* @__PURE__ */ jsx(
      DataSortModal,
      {
        title: "Footer Links",
        data: sections,
        handler: /* @__PURE__ */ jsx(Button, { size: "icon", children: /* @__PURE__ */ jsx(Settings, { className: "h-7 w-7" }) }),
        onOrderChange: (newOrder, setOpen) => {
          router.post(
            route("page.section.sort"),
            {
              sortedData: newOrder
            },
            { preserveScroll: true, onSuccess: () => setOpen && setOpen(false) }
          );
        },
        renderContent: (item) => /* @__PURE__ */ jsxs(Card, { className: "flex w-full items-center justify-between px-4 py-3", children: [
          /* @__PURE__ */ jsx("p", { children: item.name }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "active", children: "Active" }),
            /* @__PURE__ */ jsx(Switch, { id: "active", defaultChecked: item.active, onCheckedChange: (checked) => sectionActiveChange(item.id, checked) })
          ] })
        ] })
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-11 flex flex-col items-start justify-between gap-10 md:flex-row", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:max-w-[300px]", children: [
          /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(AppLogo, { theme: "light" }) }),
          /* @__PURE__ */ jsx("p", { className: "mt-5 text-sm", children: system.fields.description })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex w-full flex-col justify-between gap-10 md:max-w-[640px] md:flex-row", children: sections.map(
          (section) => section.active && /* @__PURE__ */ jsxs("div", { className: cn("relative w-full", customize && "section-edit"), children: [
            /* @__PURE__ */ jsx("p", { className: "mb-3 text-lg font-semibold", children: section == null ? void 0 : section.title }),
            /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-2 text-sm", children: section == null ? void 0 : section.properties.array.map(
              (item, itemIndex) => section.slug === "footer_list_3" ? /* @__PURE__ */ jsx("li", { children: item.title }, `item-${itemIndex}`) : /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: item.url, children: item.title }) }, `item-${itemIndex}`)
            ) })
          ] })
        ) })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-center text-sm", children: [
        "Copyright © ",
        getYear(/* @__PURE__ */ new Date()),
        " ",
        /* @__PURE__ */ jsx("a", { href: "https://ui-lib.com/", children: "UI Lib" }),
        ". All rights reserved"
      ] })
    ] })
  ] });
};
const Index = (props) => {
  const { type, watching, watchHistory } = props;
  const page = usePage();
  getQueryParams(page.url);
  const [sidebarWidth, setSidebarWidth] = useState("calc(var(--spacing) * 100)");
  const completed = getCompletedContents(watchHistory);
  const completion = getCourseCompletion(props.course, completed);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 880) {
        setSidebarWidth("calc(var(--spacing) * 70)");
      } else if (window.innerWidth < 1024) {
        setSidebarWidth("calc(var(--spacing) * 80)");
      } else {
        setSidebarWidth("calc(var(--spacing) * 100)");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return /* @__PURE__ */ jsxs(
    SidebarProvider,
    {
      className: "flex-col",
      style: {
        "--sidebar-width": sidebarWidth
      },
      children: [
        /* @__PURE__ */ jsx(Navbar, {}),
        /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-row-reverse", children: [
          /* @__PURE__ */ jsx(Sidebar, { side: "right", className: "top-[60px] shadow-lg", children: /* @__PURE__ */ jsx(ContentList, { completedContents: completed, courseCompletion: completion }) }),
          /* @__PURE__ */ jsx(SidebarInset, { children: /* @__PURE__ */ jsxs(Main, { children: [
            type === "lesson" ? /* @__PURE__ */ jsx(LessonViewer, { lesson: watching }) : /* @__PURE__ */ jsx(QuizViewer, { quiz: watching }),
            /* @__PURE__ */ jsx(ContentSummery, {}),
            /* @__PURE__ */ jsx(LandingFooter, {})
          ] }) })
        ] })
      ]
    }
  );
};
export {
  Index as default
};
