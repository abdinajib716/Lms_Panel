import { jsxs, jsx } from "react/jsx-runtime";
import { T as TiptapRenderer } from "./client-renderer-CUBmzaOS.js";
import { A as Avatar, a as AvatarImage, b as AvatarFallback } from "./avatar-Cr_jqfHL.js";
import { B as Badge } from "./badge-B4crNM73.js";
import { S as Separator } from "./separator-R7EO2G8T.js";
import { L as LandingLayout } from "./landing-layout-DaxsNL6G.js";
import { usePage, Head } from "@inertiajs/react";
import BlogComments from "./blog-comments-GA1XRYNU.js";
import BlogLikeDislike from "./blog-like-dislike-BnfnB3qL.js";
/* empty css               */
import "react";
import "react-icons/lu";
import "hast-util-to-jsx-runtime";
import "shiki/bundle/full";
import "rehype-parse";
import "rehype-react";
import "unified";
import "unist-util-visit";
import "@radix-ui/react-avatar";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-separator";
import "./app-logo-42nmPdEQ.js";
import "./button-jZyzwgdo.js";
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
import "nanoid";
import "./delete-modal-BIvxKwRf.js";
import "./dialog-DD5SXV81.js";
import "@radix-ui/react-dialog";
import "./card-D8SB2yrw.js";
import "./textarea-DctRxpgE.js";
const ShowBlog = ({ blog }) => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const { url, props } = usePage();
  const { translate } = props;
  const { frontend } = translate;
  const createdAt = new Date(blog.created_at).toLocaleDateString();
  const authorInitials = ((_a = blog.user) == null ? void 0 : _a.name) ? blog.user.name.split(" ").map((n) => n.charAt(0)).join("").toUpperCase() : frontend.author_initials_fallback;
  const bannerSrc = blog.banner || "/assets/images/blank-image.jpg";
  const thumbnailSrc = blog.thumbnail || "/assets/images/blank-image.jpg";
  const keywords = (blog.keywords || "").split(",").map((k) => k.trim()).filter(Boolean);
  const siteName = typeof window !== "undefined" && ((_b = window == null ? void 0 : window.App) == null ? void 0 : _b.name) || frontend.default_site_name;
  const siteUrl = url;
  const siteOrigin = typeof window !== "undefined" ? window.location.origin : url.split("/").slice(0, 3).join("/");
  const pageTitle = `${blog.title} | ${siteName}`;
  const plainText = ((_c = blog.description) == null ? void 0 : _c.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim()) || "";
  const pageDescription = plainText.length > 160 ? `${plainText.slice(0, 157)}...` : plainText;
  const ogImage = bannerSrc;
  return /* @__PURE__ */ jsxs(LandingLayout, { customizable: false, children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: pageTitle }),
      pageDescription && /* @__PURE__ */ jsx("meta", { name: "description", content: pageDescription }),
      keywords.length > 0 && /* @__PURE__ */ jsx("meta", { name: "keywords", content: keywords.join(", ") }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "article" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: siteUrl }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: blog.title }),
      pageDescription && /* @__PURE__ */ jsx("meta", { property: "og:description", content: pageDescription }),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: siteName }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: ogImage }),
      /* @__PURE__ */ jsx("meta", { property: "og:image:width", content: "1200" }),
      /* @__PURE__ */ jsx("meta", { property: "og:image:height", content: "630" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: blog.title }),
      pageDescription && /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: pageDescription }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: ogImage }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: blog.title,
        description: pageDescription,
        image: ogImage,
        url: siteUrl,
        mainEntityOfPage: siteUrl,
        datePublished: blog.created_at,
        dateModified: blog.updated_at,
        author: ((_d = blog.user) == null ? void 0 : _d.name) ? {
          "@type": "Person",
          name: blog.user.name
        } : void 0,
        publisher: {
          "@type": "Organization",
          name: siteName,
          url: siteOrigin
        },
        keywords: keywords.join(", ")
      }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto w-full max-w-4xl space-y-6", children: [
      /* @__PURE__ */ jsx("div", { className: "overflow-hidden border", children: /* @__PURE__ */ jsx("img", { src: bannerSrc, alt: frontend.blog_banner_alt, className: "max-h-64 w-full object-cover sm:max-h-80 md:max-h-[420px]" }) }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3 px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
          ((_e = blog.category) == null ? void 0 : _e.name) && /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: blog.category.name }),
          keywords.slice(0, 3).map((k) => /* @__PURE__ */ jsx(Badge, { variant: "outline", children: k }, k))
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "text-2xl leading-tight font-semibold md:text-3xl", children: blog.title }),
        /* @__PURE__ */ jsxs("div", { className: "text-muted-foreground flex flex-wrap items-center gap-3 text-sm", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxs(Avatar, { className: "h-8 w-8", children: [
              /* @__PURE__ */ jsx(AvatarImage, { src: ((_f = blog.user) == null ? void 0 : _f.photo) || void 0, alt: ((_g = blog.user) == null ? void 0 : _g.name) || frontend.author_alt }),
              /* @__PURE__ */ jsx(AvatarFallback, { children: authorInitials })
            ] }),
            /* @__PURE__ */ jsx("span", { children: (_h = blog.user) == null ? void 0 : _h.name })
          ] }),
          /* @__PURE__ */ jsx("span", { children: "•" }),
          /* @__PURE__ */ jsx("span", { children: createdAt })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6 px-6 pb-10", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: thumbnailSrc,
              alt: frontend.blog_thumbnail_alt,
              className: "max-h-60 w-full overflow-hidden rounded-lg border object-cover sm:max-h-72 md:max-h-96"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "prose dark:prose-invert max-w-none py-6", children: /* @__PURE__ */ jsx(TiptapRenderer, { children: blog.description }) })
        ] }),
        keywords.length > 0 && /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: keywords.map((k) => /* @__PURE__ */ jsxs(Badge, { variant: "secondary", children: [
          "#",
          k
        ] }, k)) }),
        /* @__PURE__ */ jsx(Separator, { className: "my-6" }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center py-4", children: /* @__PURE__ */ jsx(BlogLikeDislike, {}) }),
        /* @__PURE__ */ jsx(Separator, { className: "my-6" }),
        /* @__PURE__ */ jsx(BlogComments, {})
      ] })
    ] })
  ] });
};
export {
  ShowBlog as default
};
