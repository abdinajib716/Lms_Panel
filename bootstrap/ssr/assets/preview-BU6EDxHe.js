import { jsxs, jsx } from "react/jsx-runtime";
import { T as TiptapRenderer } from "./client-renderer-CUBmzaOS.js";
import { A as Avatar, a as AvatarImage, b as AvatarFallback } from "./avatar-Cr_jqfHL.js";
import { B as Badge } from "./badge-B4crNM73.js";
import { S as Separator } from "./separator-R7EO2G8T.js";
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
const Preview = ({ blog }) => {
  var _a, _b, _c, _d, _e;
  const createdAt = new Date(blog.created_at).toLocaleDateString();
  const authorInitials = ((_a = blog.user) == null ? void 0 : _a.name) ? blog.user.name.split(" ").map((n) => n.charAt(0)).join("").toUpperCase() : "AU";
  const bannerSrc = blog.banner || "/assets/images/blank-image.jpg";
  const thumbnailSrc = blog.thumbnail || "/assets/images/blank-image.jpg";
  const keywords = (blog.keywords || "").split(",").map((k) => k.trim()).filter(Boolean);
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto w-full max-w-4xl space-y-6", children: [
    /* @__PURE__ */ jsx("div", { className: "overflow-hidden border", children: /* @__PURE__ */ jsx("img", { src: bannerSrc, alt: "Blog banner", className: "max-h-64 w-full object-cover sm:max-h-80 md:max-h-[420px]" }) }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-3 px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
        ((_b = blog.category) == null ? void 0 : _b.name) && /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: blog.category.name }),
        keywords.slice(0, 3).map((k) => /* @__PURE__ */ jsx(Badge, { variant: "outline", children: k }, k))
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "text-2xl leading-tight font-semibold md:text-3xl", children: blog.title }),
      /* @__PURE__ */ jsxs("div", { className: "text-muted-foreground flex flex-wrap items-center gap-3 text-sm", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxs(Avatar, { className: "h-8 w-8", children: [
            /* @__PURE__ */ jsx(AvatarImage, { src: ((_c = blog.user) == null ? void 0 : _c.photo) || void 0, alt: ((_d = blog.user) == null ? void 0 : _d.name) || "Author" }),
            /* @__PURE__ */ jsx(AvatarFallback, { children: authorInitials })
          ] }),
          /* @__PURE__ */ jsx("span", { children: (_e = blog.user) == null ? void 0 : _e.name })
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
            alt: "Blog thumbnail",
            className: "max-h-60 w-full overflow-hidden rounded-lg border object-cover sm:max-h-72 md:max-h-96"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "prose dark:prose-invert max-w-none py-6", children: /* @__PURE__ */ jsx(TiptapRenderer, { children: blog.description }) })
      ] }),
      keywords.length > 0 && /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: keywords.map((k) => /* @__PURE__ */ jsxs(Badge, { variant: "secondary", children: [
        "#",
        k
      ] }, k)) })
    ] })
  ] });
};
export {
  Preview as default
};
