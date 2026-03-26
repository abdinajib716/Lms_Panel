import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { B as BlogCard1 } from "./blog-card-1-Bph0lmT4.js";
import { T as TableFooter } from "./table-footer-Bf3DvTcP.js";
import { g as getQueryParams } from "./route-DlE7FdTW.js";
import { c as cn } from "./utils-BmtPBcb0.js";
import { usePage, Head } from "@inertiajs/react";
import Layout from "./layout-CrgnYND_.js";
import "./card-D8SB2yrw.js";
import "react";
import "date-fns";
import "./avatar-Cr_jqfHL.js";
import "@radix-ui/react-avatar";
import "./dropdown-menu-BIfW6iuW.js";
import "@radix-ui/react-dropdown-menu";
import "lucide-react";
import "./use-lang-44ndmTOc.js";
import "./button-jZyzwgdo.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
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
import "./profile-toggle-D0g01Tbw.js";
import "nanoid";
import "./blog-filter-C0zBG-uz.js";
import "./search-input-_KZEhUeb.js";
import "./debounce-ZFxqVthq.js";
import "./radio-group-sSS5HHUP.js";
import "@radix-ui/react-radio-group";
const Index = (props) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  const { url } = usePage();
  const { blogs, category, system, translate } = props;
  const { frontend } = translate;
  const urlParams = getQueryParams(url);
  const siteUrl = url;
  const siteName = ((_a = system == null ? void 0 : system.fields) == null ? void 0 : _a.name) || frontend.default_site_name;
  const siteAuthor = ((_b = system == null ? void 0 : system.fields) == null ? void 0 : _b.author) || frontend.default_author;
  const totalBlogs = ((_c = props.blogs) == null ? void 0 : _c.total) || 0;
  const siteOrigin = typeof window !== "undefined" ? window.location.origin : url.split("/").slice(0, 3).join("/");
  const pageTitle = frontend.all_blogs;
  const pageDescription = frontend.blog_page_description.replace(":total", totalBlogs.toString());
  const pageKeywords = frontend.blog_page_keywords;
  const ogTitle = frontend.latest_blog_posts;
  const fullTitle = `${pageTitle} | ${siteName}`;
  const firstBlogImage = ((_f = (_e = (_d = props.blogs) == null ? void 0 : _d.data) == null ? void 0 : _e[0]) == null ? void 0 : _f.thumbnail) || ((_i = (_h = (_g = props.blogs) == null ? void 0 : _g.data) == null ? void 0 : _h[0]) == null ? void 0 : _i.banner) || "";
  const ogImage = firstBlogImage || "/assets/images/blank-image.jpg";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: fullTitle }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: pageDescription }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: pageKeywords }),
      /* @__PURE__ */ jsx("meta", { name: "author", content: siteAuthor }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: siteUrl }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: ogTitle }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: pageDescription }),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: siteName }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: ogImage }),
      /* @__PURE__ */ jsx("meta", { property: "og:image:width", content: "1200" }),
      /* @__PURE__ */ jsx("meta", { property: "og:image:height", content: "630" }),
      /* @__PURE__ */ jsx("meta", { property: "og:image:alt", content: `${pageTitle} - ${frontend.blog_list_alt}` }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: ogTitle }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: pageDescription }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: ogImage }),
      /* @__PURE__ */ jsx("meta", { name: "blogs:total", content: totalBlogs.toString() }),
      /* @__PURE__ */ jsx("meta", { name: "blogs:page", content: (((_j = props.blogs) == null ? void 0 : _j.current_page) || 1).toString() }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: pageTitle,
        description: pageDescription,
        url: siteUrl,
        image: ogImage,
        provider: {
          "@type": "Organization",
          name: siteName,
          url: siteOrigin
        },
        mainEntity: {
          "@type": "ItemList",
          name: `${pageTitle} Collection`,
          description: pageDescription,
          numberOfItems: totalBlogs,
          itemListElement: ((_l = (_k = props.blogs) == null ? void 0 : _k.data) == null ? void 0 : _l.slice(0, 10).map((blog, index) => ({
            "@type": "BlogPosting",
            position: index + 1,
            name: blog.title,
            headline: blog.title,
            description: (blog.description || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim(),
            image: blog.thumbnail || blog.banner || "",
            provider: {
              "@type": "Organization",
              name: siteName
            }
          })).filter(Boolean)) || []
        }
      }) })
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(urlParams["view"] && urlParams["view"] === "list" ? "space-y-7" : "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"),
        children: blogs.data.map((blog) => /* @__PURE__ */ jsx(BlogCard1, { blog, viewType: urlParams["view"] }, blog.id))
      }
    ),
    /* @__PURE__ */ jsx(
      TableFooter,
      {
        className: "mt-6 p-5 sm:p-7",
        routeName: "blogs.guest",
        paginationInfo: blogs,
        routeParams: { category: category ? category.slug : "all" }
      }
    )
  ] });
};
Index.layout = (page) => /* @__PURE__ */ jsx(Layout, { children: page });
export {
  Index as default
};
