import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { C as CourseCard1 } from "./course-card-1-BLS66nbX.js";
import { T as TableFooter } from "./table-footer-Bf3DvTcP.js";
import { g as getQueryParams } from "./route-DlE7FdTW.js";
import { c as cn } from "./utils-BmtPBcb0.js";
import { usePage, Head } from "@inertiajs/react";
import Layout from "./layout-UEVwaaRo.js";
import "./button-jZyzwgdo.js";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./card-D8SB2yrw.js";
import "./tooltip-DswKljFZ.js";
import "@radix-ui/react-tooltip";
import "lucide-react";
import "./dropdown-menu-BIfW6iuW.js";
import "@radix-ui/react-dropdown-menu";
import "./use-lang-44ndmTOc.js";
import "./scroll-area-DPHRDnwL.js";
import "@radix-ui/react-scroll-area";
import "clsx";
import "tailwind-merge";
import "./sheet-CuVwNO0O.js";
import "@radix-ui/react-dialog";
import "./use-screen-B7SDA5zE.js";
import "./landing-layout-DaxsNL6G.js";
import "./app-logo-42nmPdEQ.js";
import "lucide-react/dynamic";
import "./main-BqrosZ6t.js";
import "next-themes";
import "sonner";
import "./use-auth-8FvJer_G.js";
import "./appearance-Df_e7R4w.js";
import "./language-BbuOCfpR.js";
import "./separator-R7EO2G8T.js";
import "@radix-ui/react-separator";
import "./notification-BXalLCUz.js";
import "./popover-BV7JTqNd.js";
import "@radix-ui/react-popover";
import "date-fns";
import "./profile-toggle-D0g01Tbw.js";
import "./avatar-Cr_jqfHL.js";
import "@radix-ui/react-avatar";
import "nanoid";
import "./course-filter-vpgLa_T_.js";
import "./search-input-_KZEhUeb.js";
import "./debounce-ZFxqVthq.js";
import "./radio-group-sSS5HHUP.js";
import "@radix-ui/react-radio-group";
const Index = (props) => {
  var _a, _b, _c, _d, _e;
  const { url } = usePage();
  const { courses, wishlists, category, categoryChild, system, translate } = props;
  const { frontend } = translate;
  const urlParams = getQueryParams(url);
  const siteName = ((_a = system == null ? void 0 : system.fields) == null ? void 0 : _a.name) || "Mentor Learning Management System";
  const totalCourses = (courses == null ? void 0 : courses.total) || 0;
  const siteUrl = url;
  const siteOrigin = typeof window !== "undefined" ? window.location.origin : url.split("/").slice(0, 3).join("/");
  let pageTitle = category ? category.title : "All";
  let pageDescription = `Browse ${totalCourses}+ online courses from expert instructors. Learn new skills with our comprehensive course catalog.`;
  let pageKeywords = "online courses, learning platform, education, skills, training, e-learning";
  let ogTitle = frontend.all_courses;
  if (category && categoryChild) {
    pageTitle = `${categoryChild.title} Courses in ${category.title}`;
    ogTitle = `${categoryChild.title} - ${category.title} Courses`;
    pageDescription = `Learn ${categoryChild.title.toLowerCase()} with ${totalCourses} specialized courses in ${category.title.toLowerCase()}. Expert instructors, practical projects, and industry-relevant curriculum.`;
    pageKeywords = `${categoryChild.title.toLowerCase()}, ${category.title.toLowerCase()}, courses, training, ${categoryChild.title} certification, ${category.title} skills`;
  } else if (category) {
    pageTitle = `${category.title} Courses`;
    ogTitle = `${category.title} Courses`;
    pageDescription = `Explore ${totalCourses} ${category.title.toLowerCase()} courses taught by industry experts. Master ${category.title.toLowerCase()} skills with hands-on projects and comprehensive curriculum.`;
    pageKeywords = `${category.title.toLowerCase()}, courses, training, online learning, ${category.title} certification, ${category.title} skills`;
  }
  const fullTitle = `${pageTitle} | ${siteName}`;
  const courseImage = (_c = (_b = courses == null ? void 0 : courses.data) == null ? void 0 : _b[0]) == null ? void 0 : _c.thumbnail;
  const categoryImage = (category == null ? void 0 : category.thumbnail) || courseImage;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: fullTitle }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: pageDescription }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: pageKeywords }),
      /* @__PURE__ */ jsx("meta", { name: "author", content: ((_d = system == null ? void 0 : system.fields) == null ? void 0 : _d.author) || "UiLib" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: siteUrl }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: ogTitle }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: pageDescription }),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: siteName }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: categoryImage }),
      /* @__PURE__ */ jsx("meta", { property: "og:image:width", content: "1200" }),
      /* @__PURE__ */ jsx("meta", { property: "og:image:height", content: "630" }),
      /* @__PURE__ */ jsx("meta", { property: "og:image:alt", content: `${pageTitle} - Course Catalog` }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: ogTitle }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: pageDescription }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: categoryImage }),
      category && /* @__PURE__ */ jsx("meta", { name: "category:name", content: category.title }),
      category && /* @__PURE__ */ jsx("meta", { name: "category:slug", content: category.slug }),
      categoryChild && /* @__PURE__ */ jsx("meta", { name: "category:child", content: categoryChild.title }),
      /* @__PURE__ */ jsx("meta", { name: "courses:total", content: totalCourses.toString() }),
      /* @__PURE__ */ jsx("meta", { name: "courses:page", content: ((courses == null ? void 0 : courses.current_page) || 1).toString() }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: pageTitle,
        description: pageDescription,
        url: siteUrl,
        image: categoryImage,
        provider: {
          "@type": "Organization",
          name: siteName,
          url: siteOrigin
        },
        mainEntity: {
          "@type": "ItemList",
          name: `${pageTitle} Collection`,
          description: pageDescription,
          numberOfItems: totalCourses,
          itemListElement: ((_e = courses == null ? void 0 : courses.data) == null ? void 0 : _e.slice(0, 10).map((course, index) => {
            var _a2, _b2;
            return {
              "@type": "Course",
              position: index + 1,
              name: course.title,
              description: course.short_description || course.description || "",
              image: course.thumbnail || course.banner || "",
              provider: {
                "@type": "Organization",
                name: siteName
              },
              instructor: ((_b2 = (_a2 = course.instructor) == null ? void 0 : _a2.user) == null ? void 0 : _b2.name) ? {
                "@type": "Person",
                name: course.instructor.user.name
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
            };
          }).filter(Boolean)) || []
        },
        ...category && {
          about: {
            "@type": "Thing",
            name: category.title,
            description: `Learn ${category.title.toLowerCase()} with comprehensive online courses`
          }
        },
        ...categoryChild && {
          specialty: {
            "@type": "Thing",
            name: categoryChild.title,
            description: `Specialized ${categoryChild.title.toLowerCase()} courses and training`
          }
        }
      }) })
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(urlParams["view"] && urlParams["view"] === "list" ? "space-y-7" : "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"),
        children: courses.data.map((course) => /* @__PURE__ */ jsx(CourseCard1, { course, wishlists, viewType: urlParams["view"] }, course.id))
      }
    ),
    /* @__PURE__ */ jsx(
      TableFooter,
      {
        className: "mt-6 p-5 sm:p-7",
        routeName: "category.courses",
        paginationInfo: courses,
        routeParams: {
          category: category ? category.slug : "all",
          category_child: categoryChild ? categoryChild.slug : ""
        }
      }
    )
  ] });
};
Index.layout = (page) => /* @__PURE__ */ jsx(Layout, { children: page });
export {
  Index as default
};
