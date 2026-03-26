import { jsx, jsxs } from "react/jsx-runtime";
import { A as AppLogo } from "./app-logo-42nmPdEQ.js";
import { N as Notification } from "./notification-BXalLCUz.js";
import { A as Avatar, a as AvatarImage, b as AvatarFallback } from "./avatar-Cr_jqfHL.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, c as DropdownMenuItem } from "./dropdown-menu-BIfW6iuW.js";
import { u as useSidebar } from "./sidebar-6wqj6oXO.js";
import { u as useScreen } from "./use-screen-B7SDA5zE.js";
import { usePage, Link, router } from "@inertiajs/react";
import { Expand, Minimize, UserCircle, GraduationCap, Heart, SettingsIcon, LayoutDashboard, LogOut, Menu } from "lucide-react";
import { nanoid } from "nanoid";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "./popover-BV7JTqNd.js";
import "@radix-ui/react-popover";
import "react";
import "date-fns";
import "./scroll-area-DPHRDnwL.js";
import "@radix-ui/react-scroll-area";
import "@radix-ui/react-avatar";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-dropdown-menu";
import "./separator-R7EO2G8T.js";
import "@radix-ui/react-separator";
import "./sheet-CuVwNO0O.js";
import "@radix-ui/react-dialog";
import "./tooltip-DswKljFZ.js";
import "@radix-ui/react-tooltip";
const Navbar = () => {
  var _a;
  const { screen } = useScreen();
  const { open, toggleSidebar } = useSidebar();
  const { props } = usePage();
  const { translate } = props;
  const { button } = translate;
  const user = props.auth.user;
  return /* @__PURE__ */ jsx("header", { className: "bg-primary dark:bg-primary-dark text-primary-foreground dark:text-primary sticky top-0 z-50 h-[60px]", children: /* @__PURE__ */ jsxs("div", { className: "flex h-full items-center justify-between gap-3 px-4 md:px-8", children: [
    /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(AppLogo, { theme: "light" }) }),
    /* @__PURE__ */ jsx("p", { className: "hidden font-semibold sm:block", children: props.course.title }),
    /* @__PURE__ */ jsxs("div", { className: "mr-0 flex items-center gap-2", children: [
      /* @__PURE__ */ jsx(Notification, {}),
      screen > 768 && /* @__PURE__ */ jsx(
        Button,
        {
          size: "icon",
          variant: "secondary",
          onClick: () => toggleSidebar(),
          className: "border-secondary-light text-secondary-foreground hover:text-secondary-foreground rounded-full",
          children: open ? /* @__PURE__ */ jsx(Expand, {}) : /* @__PURE__ */ jsx(Minimize, {})
        }
      ),
      /* @__PURE__ */ jsxs(DropdownMenu, { children: [
        /* @__PURE__ */ jsx(DropdownMenuTrigger, { className: "cursor-pointer outline-none", children: user && user.photo ? /* @__PURE__ */ jsxs(Avatar, { className: "h-9 w-9", children: [
          /* @__PURE__ */ jsx(AvatarImage, { src: user.photo, alt: user.name ?? "", className: "h-full w-full content-center object-cover" }),
          /* @__PURE__ */ jsx(AvatarFallback, { children: (_a = user.name) == null ? void 0 : _a.charAt(0) })
        ] }) : /* @__PURE__ */ jsx(UserCircle, { className: "text-muted-foreground h-9 w-9 rounded-full" }) }),
        /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", children: [
          (user.role === "admin" || user.role === "instructor") && /* @__PURE__ */ jsxs(DropdownMenuItem, { className: "cursor-pointer px-3", onClick: () => router.get(route("dashboard")), children: [
            /* @__PURE__ */ jsx(LayoutDashboard, { className: "mr-1 h-4 w-4" }),
            /* @__PURE__ */ jsx("span", { children: button.dashboard })
          ] }),
          (user.role === "student" || user.role === "instructor") && getStudentMenuItems(button).map(({ id, name, Icon, slug }) => /* @__PURE__ */ jsxs(
            DropdownMenuItem,
            {
              className: "cursor-pointer px-3",
              onClick: () => router.get(route("student.index", { tab: slug })),
              children: [
                /* @__PURE__ */ jsx(Icon, { className: "mr-1 h-4 w-4" }),
                /* @__PURE__ */ jsx("span", { children: name })
              ]
            },
            id
          )),
          /* @__PURE__ */ jsxs(DropdownMenuItem, { className: "cursor-pointer px-3", onClick: () => router.post("/logout"), children: [
            /* @__PURE__ */ jsx(LogOut, { className: "mr-1 h-4 w-4" }),
            /* @__PURE__ */ jsx("span", { children: button.log_out })
          ] })
        ] })
      ] }),
      screen < 768 && /* @__PURE__ */ jsx(
        Button,
        {
          size: "icon",
          variant: "secondary",
          onClick: () => toggleSidebar(),
          className: "border-secondary-light text-secondary-foreground hover:text-secondary-foreground rounded-full",
          children: /* @__PURE__ */ jsx(Menu, {})
        }
      )
    ] })
  ] }) });
};
const getStudentMenuItems = (button) => [
  {
    id: nanoid(),
    name: button.my_courses,
    slug: "courses",
    Icon: GraduationCap
  },
  {
    id: nanoid(),
    name: button.wishlist,
    slug: "wishlist",
    Icon: Heart
  },
  {
    id: nanoid(),
    name: button.profile,
    slug: "profile",
    Icon: UserCircle
  },
  {
    id: nanoid(),
    name: button.settings,
    slug: "settings",
    Icon: SettingsIcon
  }
];
export {
  Navbar as default
};
