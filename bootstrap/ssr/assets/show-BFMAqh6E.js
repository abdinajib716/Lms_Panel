import { jsxs, jsx } from "react/jsx-runtime";
import { T as TiptapRenderer } from "./client-renderer-CUBmzaOS.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { L as LandingLayout } from "./landing-layout-DaxsNL6G.js";
import { Link } from "@inertiajs/react";
/* empty css               */
import "react";
import "react-icons/lu";
import "hast-util-to-jsx-runtime";
import "shiki/bundle/full";
import "rehype-parse";
import "rehype-react";
import "unified";
import "unist-util-visit";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "./app-logo-42nmPdEQ.js";
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
const Show = ({ notification, translate }) => {
  const { button } = translate;
  return /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-2xl py-12", children: [
    /* @__PURE__ */ jsx("p", { className: "font-medium capitalize", children: notification.data.title }),
    /* @__PURE__ */ jsx(TiptapRenderer, { children: notification.data.body }),
    notification.data.url && /* @__PURE__ */ jsx(Link, { href: notification.data.url, children: /* @__PURE__ */ jsx(Button, { children: button.view }) })
  ] });
};
Show.layout = (page) => /* @__PURE__ */ jsx(LandingLayout, { children: page, customizable: false });
export {
  Show as default
};
