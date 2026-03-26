import { jsxs, jsx } from "react/jsx-runtime";
import { C as Card, a as CardHeader, b as CardContent, e as CardFooter } from "./card-D8SB2yrw.js";
import { c as cn, b as getReadingTime } from "./utils-BmtPBcb0.js";
import { Link } from "@inertiajs/react";
import { formatDistanceToNowStrict } from "date-fns";
import { A as Avatar, a as AvatarImage, b as AvatarFallback } from "./avatar-Cr_jqfHL.js";
const BlogCard1 = ({ blog, viewType = "grid", className }) => {
  return /* @__PURE__ */ jsxs(Card, { className: cn("group p-0", viewType === "list" && "sm:flex sm:w-full sm:flex-row sm:justify-between", className), children: [
    /* @__PURE__ */ jsx(CardHeader, { className: "p-0", children: /* @__PURE__ */ jsx("div", { className: cn("p-2 pb-0", viewType === "list" && "pb-2"), children: /* @__PURE__ */ jsx(
      Link,
      {
        href: route("blogs.read", {
          slug: blog.slug,
          id: blog.id
        }),
        children: /* @__PURE__ */ jsx("div", { className: cn("relative h-[190px] overflow-hidden rounded-lg", viewType === "list" && "sm:w-[260px]"), children: /* @__PURE__ */ jsx(
          "img",
          {
            src: blog.thumbnail || "/assets/images/blank-image.jpg",
            alt: blog.title,
            className: "h-full w-full object-cover transition-transform duration-300 hover:scale-105",
            onError: (e) => {
              const target = e.target;
              target.src = "/assets/images/blank-image.jpg";
            }
          }
        ) })
      }
    ) }) }),
    /* @__PURE__ */ jsxs("div", { className: cn(viewType === "list" && "flex w-[calc(100%-272px)] flex-col justify-between"), children: [
      /* @__PURE__ */ jsx(CardContent, { className: cn("p-4", viewType === "list" && "h-full"), children: /* @__PURE__ */ jsx(
        Link,
        {
          className: cn("space-y-3", viewType === "list" && "sm:flex sm:h-full sm:flex-col sm:justify-between sm:py-4"),
          href: route("blogs.read", {
            slug: blog.slug,
            id: blog.id
          }),
          children: /* @__PURE__ */ jsx("p", { className: "hover:text-secondary-foreground font-semibold", children: blog.title })
        }
      ) }),
      /* @__PURE__ */ jsxs(CardFooter, { className: "flex w-full items-center justify-between gap-2 p-4 pt-0", children: [
        /* @__PURE__ */ jsxs(Avatar, { className: "h-9 w-9", children: [
          /* @__PURE__ */ jsx(AvatarImage, { src: blog.user.photo || "", alt: blog.user.name, className: "object-cover" }),
          /* @__PURE__ */ jsx(AvatarFallback, { children: blog.user.name[0] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold", children: blog.user.name }),
          /* @__PURE__ */ jsxs("div", { className: "text-muted-foreground flex w-full items-center justify-between gap-2 text-sm", children: [
            /* @__PURE__ */ jsx("span", { children: getReadingTime(blog.description) }),
            /* @__PURE__ */ jsx("span", { children: formatDistanceToNowStrict(new Date(blog.created_at), { addSuffix: true }) })
          ] })
        ] })
      ] })
    ] })
  ] });
};
export {
  BlogCard1 as B
};
