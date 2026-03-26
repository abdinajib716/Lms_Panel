import { jsxs, jsx } from "react/jsx-runtime";
import { A as Avatar, a as AvatarImage, b as AvatarFallback } from "./avatar-Cr_jqfHL.js";
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, c as DropdownMenuItem } from "./dropdown-menu-BIfW6iuW.js";
import { usePage, router } from "@inertiajs/react";
import { GraduationCap, Heart, UserCircle, SettingsIcon, LayoutDashboard, LogOut } from "lucide-react";
import { nanoid } from "nanoid";
const ProfileToggle = () => {
  var _a;
  const { props } = usePage();
  const { user } = props.auth;
  const { button } = props.translate;
  const studentMenuItems = [
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
  return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { className: "cursor-pointer outline-none", children: user && user.photo ? /* @__PURE__ */ jsxs(Avatar, { className: "h-9 w-9", children: [
      /* @__PURE__ */ jsx(AvatarImage, { src: user.photo, alt: user.name ?? "", className: "h-full w-full content-center object-cover" }),
      /* @__PURE__ */ jsx(AvatarFallback, { children: (_a = user.name) == null ? void 0 : _a.charAt(0) })
    ] }) : /* @__PURE__ */ jsx(UserCircle, { className: "text-muted-foreground h-9 w-9 rounded-full" }) }),
    /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", className: "w-[160px]", children: [
      (user.role === "admin" || user.role === "instructor") && /* @__PURE__ */ jsxs(DropdownMenuItem, { className: "cursor-pointer px-3", onClick: () => router.get(route("dashboard")), children: [
        /* @__PURE__ */ jsx(LayoutDashboard, { className: "mr-1 h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { children: button.dashboard })
      ] }),
      (user.role === "student" || user.role === "instructor") && studentMenuItems.map(({ id, name, Icon, slug }) => /* @__PURE__ */ jsxs(DropdownMenuItem, { className: "cursor-pointer px-3", onClick: () => router.get(route("student.index", { tab: slug })), children: [
        /* @__PURE__ */ jsx(Icon, { className: "mr-1 h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { children: name })
      ] }, id)),
      /* @__PURE__ */ jsxs(DropdownMenuItem, { className: "cursor-pointer px-3", onClick: () => router.post("/logout"), children: [
        /* @__PURE__ */ jsx(LogOut, { className: "mr-1 h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { children: button.logout })
      ] })
    ] })
  ] });
};
export {
  ProfileToggle as P
};
