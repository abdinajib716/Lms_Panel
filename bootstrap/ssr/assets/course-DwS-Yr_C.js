import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { C as Card, a as CardHeader, b as CardContent } from "./card-D8SB2yrw.js";
import { c as cn } from "./utils-BmtPBcb0.js";
import { usePage, Link, Head } from "@inertiajs/react";
import { B as ButtonGradientPrimary } from "./button-gradient-primary-Dgn8gIzu.js";
import { A as Avatar, a as AvatarImage, b as AvatarFallback } from "./avatar-Cr_jqfHL.js";
import { P as Progress } from "./progress-BuQTjce4.js";
import { T as Tabs } from "./tabs-CPx41tqt.js";
import { S as Separator } from "./separator-R7EO2G8T.js";
import { T as TabsList, a as TabsTrigger, b as TabsContent } from "./tabs-BOXC0x8t.js";
import Layout from "./layout-k39VoUq1.js";
import Assignments from "./assignments-Bs6VrJBQ.js";
import Certificate from "./certificate-BZ6iNkZm.js";
import LiveClasses from "./live_classes-DFdaQTZo.js";
import Modules from "./modules-BCKBof0K.js";
import Quizzes from "./quizzes-UQUoLtGp.js";
import Resources from "./resources-zCsmKzyb.js";
import "react";
import "clsx";
import "tailwind-merge";
import "./button-jZyzwgdo.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-avatar";
import "@radix-ui/react-progress";
import "@radix-ui/react-separator";
import "@radix-ui/react-tabs";
import "./scroll-area-DPHRDnwL.js";
import "@radix-ui/react-scroll-area";
import "./sheet-CuVwNO0O.js";
import "@radix-ui/react-dialog";
import "lucide-react";
import "./use-screen-B7SDA5zE.js";
import "./landing-layout-DaxsNL6G.js";
import "./app-logo-42nmPdEQ.js";
import "lucide-react/dynamic";
import "./main-BqrosZ6t.js";
import "next-themes";
import "sonner";
import "./dropdown-menu-BIfW6iuW.js";
import "@radix-ui/react-dropdown-menu";
import "./use-auth-8FvJer_G.js";
import "./appearance-Df_e7R4w.js";
import "./language-BbuOCfpR.js";
import "./notification-BXalLCUz.js";
import "./popover-BV7JTqNd.js";
import "@radix-ui/react-popover";
import "date-fns";
import "./profile-toggle-D0g01Tbw.js";
import "nanoid";
import "./tab-lists-x6p3WmGt.js";
import "./table-header-C_F4x8YG.js";
import "./table-tRsx9RfJ.js";
import "@tanstack/react-table";
import "./assignment-columns-CiuuLSWz.js";
import "./badge-B4crNM73.js";
import "./assignment-dialog-Di2nG0gO.js";
import "./dialog-DD5SXV81.js";
import "./assignment-details-v4A17tNN.js";
import "./client-renderer-CUBmzaOS.js";
/* empty css               */
import "react-icons/lu";
import "hast-util-to-jsx-runtime";
import "shiki/bundle/full";
import "rehype-parse";
import "rehype-react";
import "unified";
import "unist-util-visit";
import "./assignment-submission-2iL5cT9C.js";
import "./assignment-submission-form-CbF_d9Rg.js";
import "./chunked-uploader-input-MwXGR7K4.js";
import "./input-C6-Ta46A.js";
import "axios";
import "./input-error-CEW4jhey.js";
import "./loading-button-C4Hk_jCd.js";
import "./label-Dd_w2I6M.js";
import "@radix-ui/react-label";
import "./select-BxPdBi6V.js";
import "@radix-ui/react-select";
import "./textarea-DctRxpgE.js";
import "./radio-group-sSS5HHUP.js";
import "@radix-ui/react-radio-group";
import "jspdf";
import "./alert-BK2pCJOe.js";
import "./live-class-status-DAOLYBAD.js";
import "./accordion-DVAMjldm.js";
import "@radix-ui/react-accordion";
import "./lesson-CJOS5rxx.js";
import "./lesson-icons-CrjzYJr0.js";
import "./quiz-Dd_nsC5a.js";
import "./quiz-status-D8lbUiq3.js";
import "./quiz-result-dialog-CSPFFEM9.js";
const CourseCard7 = ({ course, watch_history, completion, className }) => {
  const { props } = usePage();
  const { translate } = props;
  const { frontend, button } = translate;
  return /* @__PURE__ */ jsxs(Card, { className: cn("flex flex-col justify-between overflow-hidden !border md:flex-row", className), children: [
    /* @__PURE__ */ jsx(CardHeader, { className: "h-[200px] w-full max-w-[360px] p-0", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: course.thumbnail || "/assets/images/blank-image.jpg",
        alt: course.title,
        className: "h-full w-full object-cover",
        onError: (e) => {
          const target = e.target;
          target.src = "/assets/images/blank-image.jpg";
        }
      }
    ) }),
    /* @__PURE__ */ jsxs(CardContent, { className: "flex w-full flex-col justify-between p-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "mb-3 flex items-center gap-2", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxs(Avatar, { className: "h-8 w-8", children: [
            /* @__PURE__ */ jsx(AvatarImage, { src: course.instructor.user.photo || "", alt: course.instructor.user.name, className: "object-cover" }),
            /* @__PURE__ */ jsx(AvatarFallback, { children: "IM" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: course.instructor.user.name })
        ] }) }),
        /* @__PURE__ */ jsx("p", { className: "hover:text-secondary-foreground text-sm font-semibold", children: course.title })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full space-y-2 pt-4 pb-2", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground flex items-center justify-between text-sm font-medium", children: [
            /* @__PURE__ */ jsx("span", { children: frontend.progress }),
            /* @__PURE__ */ jsxs("span", { children: [
              (completion == null ? void 0 : completion.completion) ?? 0,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsx(Progress, { value: Number((completion == null ? void 0 : completion.completion) ?? 0), className: "h-1.5" })
        ] }),
        watch_history && /* @__PURE__ */ jsx(
          ButtonGradientPrimary,
          {
            asChild: true,
            shadow: false,
            containerClass: "w-full",
            className: "to-primary-light hover:to-primary-light h-9 w-full",
            children: /* @__PURE__ */ jsx(
              Link,
              {
                href: route("course.player", {
                  type: watch_history.current_watching_type,
                  watch_history: watch_history.id,
                  lesson_id: watch_history.current_watching_id
                }),
                children: button.continue
              }
            )
          }
        )
      ] })
    ] })
  ] });
};
const Course = (props) => {
  const { tab, course, watchHistory, completion } = props;
  const tabs = [
    {
      value: "modules",
      label: "Modules"
    },
    {
      value: "live_classes",
      label: "Live Classes"
    },
    {
      value: "assignments",
      label: "Assignments"
    },
    {
      value: "quizzes",
      label: "Quizzes"
    },
    {
      value: "resources",
      label: "Resources"
    },
    {
      value: "certificate",
      label: "Certificate"
    }
  ];
  const renderContent = () => {
    switch (tab) {
      case "modules":
        return /* @__PURE__ */ jsx(Modules, {});
      case "live_classes":
        return /* @__PURE__ */ jsx(LiveClasses, {});
      case "assignments":
        return /* @__PURE__ */ jsx(Assignments, {});
      case "quizzes":
        return /* @__PURE__ */ jsx(Quizzes, {});
      case "resources":
        return /* @__PURE__ */ jsx(Resources, {});
      case "certificate":
        return /* @__PURE__ */ jsx(Certificate, {});
      default:
        return /* @__PURE__ */ jsx(Fragment, {});
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: course.title }),
    /* @__PURE__ */ jsx(CourseCard7, { course, watch_history: watchHistory, completion }),
    /* @__PURE__ */ jsx(Card, { className: "mt-6", children: /* @__PURE__ */ jsxs(Tabs, { value: tab, className: "bg-card w-full overflow-hidden rounded-md", children: [
      /* @__PURE__ */ jsx("div", { className: "overflow-x-auto overflow-y-hidden", children: /* @__PURE__ */ jsx(TabsList, { className: "bg-transparent px-0 py-6", children: tabs.map(({ label, value }) => {
        return /* @__PURE__ */ jsx(
          TabsTrigger,
          {
            value,
            className: "border-primary data-[state=active]:!bg-muted data-[state=active]:before:bg-primary relative flex cursor-pointer items-center justify-start gap-3 rounded-none bg-transparent px-8 py-4 text-start !shadow-none before:absolute before:right-0 before:bottom-0 before:left-0 before:h-1 before:rounded-t-xl data-[state=active]:before:content-['.']",
            asChild: true,
            children: /* @__PURE__ */ jsx(
              Link,
              {
                href: route("student.show", {
                  id: course.id,
                  tab: value
                }),
                children: /* @__PURE__ */ jsx("span", { children: label })
              }
            )
          },
          value
        );
      }) }) }),
      /* @__PURE__ */ jsx(Separator, { className: "mt-[1px]" }),
      /* @__PURE__ */ jsx(TabsContent, { value: tab, className: "m-0 p-5", children: renderContent() })
    ] }) })
  ] });
};
Course.layout = (page) => /* @__PURE__ */ jsx(Layout, { children: page, tab: "courses" });
export {
  Course as default
};
