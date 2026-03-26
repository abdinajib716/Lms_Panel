import { jsxs, jsx } from "react/jsx-runtime";
import { B as Button } from "./button-jZyzwgdo.js";
import { T as TabsList, a as TabsTrigger } from "./tabs-BOXC0x8t.js";
import { usePage, router } from "@inertiajs/react";
import { LayoutDashboard, LogOut } from "lucide-react";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-tabs";
const TabLists = ({ tabs }) => {
  const { props } = usePage();
  const { auth, system, instructor, translate } = props;
  const { button, common } = translate;
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center p-6", children: [
      /* @__PURE__ */ jsx("div", { className: "h-[120px] w-[120px] overflow-hidden rounded-full", children: /* @__PURE__ */ jsx(
        "img",
        {
          alt: `${auth.user.name}'s profile`,
          src: auth.user.photo || "/assets/icons/avatar.png",
          className: "h-full w-full content-center object-cover"
        }
      ) }),
      /* @__PURE__ */ jsx("h6", { className: "mt-8 mb-1 font-bold", children: auth.user.name }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: auth.user.email })
    ] }),
    instructor && instructor.status === "approved" && /* @__PURE__ */ jsxs(
      Button,
      {
        variant: "ghost",
        className: "text-muted-foreground h-11 w-full justify-start gap-3 rounded-none px-5 py-3 text-start",
        onClick: () => router.get(route("dashboard")),
        children: [
          /* @__PURE__ */ jsx(LayoutDashboard, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { children: common.dashboard })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(TabsList, { className: "grid h-auto grid-cols-1 gap-2 bg-transparent p-0", children: [
      tabs.map(({ id, name, slug, Icon }) => /* @__PURE__ */ jsxs(
        TabsTrigger,
        {
          value: slug,
          className: "hover:bg-secondary hover:text-secondary-foreground data-[state=active]:!bg-muted data-[state=active]:!text-secondary-foreground relative flex h-10 cursor-pointer items-center justify-start gap-3 rounded-md px-4 text-start",
          onClick: () => router.get(route("student.index", { tab: slug })),
          children: [
            /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsx("span", { children: name })
          ]
        },
        id
      )),
      /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "secondary",
          className: "bg-background text-primary hover:text-secondary-foreground h-10 w-full justify-start gap-3 rounded-md px-4",
          onClick: () => router.post(route("logout")),
          children: [
            /* @__PURE__ */ jsx(LogOut, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsx("span", { children: button.logout })
          ]
        }
      )
    ] }),
    (system.sub_type === "collaborative" && !instructor || instructor && instructor.status !== "approved") && /* @__PURE__ */ jsx(
      Button,
      {
        variant: "outline",
        className: "hover:bg-background border-secondary-light mt-7 w-full",
        onClick: () => router.get(
          route("student.index", {
            tab: "instructor"
          })
        ),
        children: button.become_instructor
      }
    )
  ] });
};
export {
  TabLists as default
};
