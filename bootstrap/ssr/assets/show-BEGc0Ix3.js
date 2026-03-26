import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { T as Tabs } from "./tabs-CPx41tqt.js";
import { S as Separator } from "./separator-R7EO2G8T.js";
import { T as TabsList, a as TabsTrigger, b as TabsContent } from "./tabs-BOXC0x8t.js";
import { L as LandingLayout } from "./landing-layout-DaxsNL6G.js";
import { Head } from "@inertiajs/react";
import CourseHeader from "./course-header-O9FaLB9v.js";
import CoursePreview from "./course-preview-C4AKSgcW.js";
import CourseReviews from "./course-reviews-VRrsMehj.js";
import Curriculum from "./curriculum-DNeVh2cQ.js";
import Details from "./details-GkTmZFY3.js";
import Instructor from "./instructor-BtUYKCtR.js";
import Overview from "./overview-BXFPAy5q.js";
import "react";
import "@radix-ui/react-separator";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-tabs";
import "./app-logo-42nmPdEQ.js";
import "./button-jZyzwgdo.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "lucide-react/dynamic";
import "./main-BqrosZ6t.js";
import "next-themes";
import "sonner";
import "./dropdown-menu-BIfW6iuW.js";
import "@radix-ui/react-dropdown-menu";
import "lucide-react";
import "./scroll-area-DPHRDnwL.js";
import "@radix-ui/react-scroll-area";
import "./use-auth-8FvJer_G.js";
import "./use-screen-B7SDA5zE.js";
import "./appearance-Df_e7R4w.js";
import "./language-BbuOCfpR.js";
import "./notification-BXalLCUz.js";
import "./popover-BV7JTqNd.js";
import "@radix-ui/react-popover";
import "date-fns";
import "./profile-toggle-D0g01Tbw.js";
import "./avatar-Cr_jqfHL.js";
import "@radix-ui/react-avatar";
import "nanoid";
import "./rating-stars-Cw4PaRTw.js";
import "./course-languages-oEC7DuVF.js";
import "./dialog-DD5SXV81.js";
import "@radix-ui/react-dialog";
import "./video-player-CajLnoJG.js";
import "plyr-react";
/* empty css                */
import "./course-player-button-B3G_ImHb.js";
import "./student-feedback-C9_Duvqa.js";
import "./progress-BuQTjce4.js";
import "@radix-ui/react-progress";
import "./use-lang-44ndmTOc.js";
import "./table-footer-Bf3DvTcP.js";
import "./route-DlE7FdTW.js";
import "./accordion-DVAMjldm.js";
import "@radix-ui/react-accordion";
import "./client-renderer-CUBmzaOS.js";
/* empty css               */
import "react-icons/lu";
import "hast-util-to-jsx-runtime";
import "shiki/bundle/full";
import "rehype-parse";
import "rehype-react";
import "unified";
import "unist-util-visit";
const Show = ({ course, system, translate }) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const { button, frontend } = translate;
  const tabs = [
    {
      value: "overview",
      label: button.overview,
      Component: /* @__PURE__ */ jsx(Overview, { course })
    },
    {
      value: "curriculum",
      label: button.curriculum,
      Component: /* @__PURE__ */ jsx(Curriculum, { course })
    },
    {
      value: "details",
      label: button.details,
      Component: /* @__PURE__ */ jsx(Details, { course })
    },
    {
      value: "instructor",
      label: button.instructor,
      Component: /* @__PURE__ */ jsx(Instructor, { course })
    },
    {
      value: "reviews",
      label: button.reviews,
      Component: /* @__PURE__ */ jsx(CourseReviews, {})
    }
  ].filter((tab) => {
    if (tab.value === "instructor") {
      return system.sub_type === "collaborative" ? true : false;
    }
    return true;
  });
  const pageTitle = course.meta_title || `${course.title} | ${(_a = system.fields) == null ? void 0 : _a.name}`;
  const pageDescription = course.meta_description || course.short_description || course.description || frontend.learn_comprehensive_course;
  const pageKeywords = course.meta_keywords || `${course.title}, ${frontend.online_course_learning_lms}, ${((_b = system.fields) == null ? void 0 : _b.keywords) || "LMS"}`;
  const ogTitle = course.og_title || course.title;
  const ogDescription = course.og_description || pageDescription;
  const courseImage = course.thumbnail || "";
  const siteName = (_c = system.fields) == null ? void 0 : _c.name;
  const siteUrl = window.location.href;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: pageTitle }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: pageDescription }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: pageKeywords }),
      /* @__PURE__ */ jsx("meta", { name: "author", content: ((_d = system.fields) == null ? void 0 : _d.author) || frontend.default_author }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "article" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: siteUrl }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: ogTitle }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: ogDescription }),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: siteName }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: courseImage }),
      /* @__PURE__ */ jsx("meta", { property: "og:image:width", content: "1200" }),
      /* @__PURE__ */ jsx("meta", { property: "og:image:height", content: "630" }),
      /* @__PURE__ */ jsx("meta", { property: "og:image:alt", content: course.title }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: ogTitle }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: ogDescription }),
      courseImage && /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: courseImage }),
      /* @__PURE__ */ jsx("meta", { name: "course:title", content: course.title }),
      /* @__PURE__ */ jsx("meta", { name: "course:level", content: course.level }),
      /* @__PURE__ */ jsx("meta", { name: "course:language", content: course.language }),
      /* @__PURE__ */ jsx("meta", { name: "course:price", content: ((_e = course.price) == null ? void 0 : _e.toString()) || "0" }),
      /* @__PURE__ */ jsx("meta", { name: "course:pricing_type", content: course.pricing_type }),
      course.instructor && /* @__PURE__ */ jsx("meta", { name: "course:instructor", content: ((_f = course.instructor.user) == null ? void 0 : _f.name) || "" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        name: course.title,
        description: pageDescription,
        image: courseImage,
        provider: {
          "@type": "Organization",
          name: siteName,
          url: window.location.origin
        },
        instructor: course.instructor ? {
          "@type": "Person",
          name: ((_g = course.instructor.user) == null ? void 0 : _g.name) || ""
        } : void 0,
        courseCode: course.slug,
        educationalLevel: course.level,
        inLanguage: course.language,
        offers: course.pricing_type === "paid" ? {
          "@type": "Offer",
          price: course.price || 0,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock"
        } : {
          "@type": "Offer",
          price: 0,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock"
        }
      }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "container grid grid-cols-1 gap-7 py-10 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-8 md:col-span-2", children: [
        /* @__PURE__ */ jsx(CourseHeader, { course }),
        /* @__PURE__ */ jsxs(Tabs, { defaultValue: "overview", className: "bg-card overflow-hidden rounded-md border shadow", children: [
          /* @__PURE__ */ jsx("div", { className: "overflow-x-auto overflow-y-hidden", children: /* @__PURE__ */ jsx(TabsList, { className: "vertical-tabs-list", children: tabs.map(({ label, value }) => /* @__PURE__ */ jsx(TabsTrigger, { value, className: "vertical-tabs-trigger", children: /* @__PURE__ */ jsx("span", { children: label }) }, value)) }) }),
          /* @__PURE__ */ jsx(Separator, { className: "mt-[1px]" }),
          tabs.map(({ value, Component }) => /* @__PURE__ */ jsx(TabsContent, { value, className: "m-0 p-5", children: Component }, value))
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(CoursePreview, {}) })
    ] })
  ] });
};
Show.layout = (page) => /* @__PURE__ */ jsx(LandingLayout, { children: page, customizable: false });
export {
  Show as default
};
