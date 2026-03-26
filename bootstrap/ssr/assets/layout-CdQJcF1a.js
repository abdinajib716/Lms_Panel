import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { S as SidebarProvider, c as SidebarTrigger, u as useSidebar, d as SidebarMenuButton, e as SidebarGroup, f as SidebarMenu, g as SidebarGroupLabel, h as SidebarMenuItem, i as useIsMobile, a as Sidebar, j as SidebarHeader, k as SidebarContent, l as SidebarFooter } from "./sidebar-6wqj6oXO.js";
import { useState, Fragment as Fragment$1, useEffect, useCallback } from "react";
import { Link, usePage, router, Head } from "@inertiajs/react";
import { M as Main } from "./main-BqrosZ6t.js";
import { A as Appearance } from "./appearance-Df_e7R4w.js";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, Dot, LayoutDashboard, ListChecks, School, CassetteTape, Users, Receipt, Briefcase, Book, Newspaper, Award, Settings, GitCompareArrows, LogOut, ChevronsUpDown } from "lucide-react";
import { c as cn } from "./utils-BmtPBcb0.js";
import { L as Language } from "./language-BbuOCfpR.js";
import { N as Notification } from "./notification-BXalLCUz.js";
import { A as AppLogo } from "./app-logo-42nmPdEQ.js";
import { a as AccordionItem, b as AccordionTrigger, c as AccordionContent, A as Accordion } from "./accordion-DVAMjldm.js";
import { r as routeSecondSegment, a as routeLastSegment, b as getRouteSegments } from "./route-DlE7FdTW.js";
import { e as DropdownMenuLabel, f as DropdownMenuSeparator, c as DropdownMenuItem, D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent } from "./dropdown-menu-BIfW6iuW.js";
import { A as Avatar, a as AvatarImage, b as AvatarFallback } from "./avatar-Cr_jqfHL.js";
import { u as useLang } from "./use-lang-44ndmTOc.js";
function AppContent({ variant = "header", children, ...props }) {
  return /* @__PURE__ */ jsx("main", { className: "mx-auto flex h-full w-full max-w-7xl flex-1 flex-col rounded-xl", ...props, children });
}
function AppShell({ children, variant = "header" }) {
  const [isOpen, setIsOpen] = useState(() => typeof window !== "undefined" ? localStorage.getItem("sidebar") !== "false" : true);
  const handleSidebarChange = (open) => {
    setIsOpen(open);
    if (typeof window !== "undefined") {
      localStorage.setItem("sidebar", String(open));
    }
  };
  if (variant === "header") {
    return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen w-full flex-col", children });
  }
  return /* @__PURE__ */ jsx(SidebarProvider, { defaultOpen: isOpen, open: isOpen, onOpenChange: handleSidebarChange, children });
}
function Breadcrumb({ ...props }) {
  return /* @__PURE__ */ jsx("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...props });
}
function BreadcrumbList({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "ol",
    {
      "data-slot": "breadcrumb-list",
      className: cn(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        className
      ),
      ...props
    }
  );
}
function BreadcrumbItem({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: cn("inline-flex items-center gap-1.5", className),
      ...props
    }
  );
}
function BreadcrumbLink({
  asChild,
  className,
  ...props
}) {
  const Comp = asChild ? Slot : "a";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "breadcrumb-link",
      className: cn("hover:text-foreground transition-colors", className),
      ...props
    }
  );
}
function BreadcrumbPage({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "span",
    {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: cn("text-foreground font-normal", className),
      ...props
    }
  );
}
function BreadcrumbSeparator({
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: cn("[&>svg]:size-3.5", className),
      ...props,
      children: children ?? /* @__PURE__ */ jsx(ChevronRight, {})
    }
  );
}
function Breadcrumbs({ breadcrumbs }) {
  return /* @__PURE__ */ jsx(Fragment, { children: breadcrumbs.length > 0 && /* @__PURE__ */ jsx(Breadcrumb, { children: /* @__PURE__ */ jsx(BreadcrumbList, { children: breadcrumbs.map((item, index) => {
    const isLast = index === breadcrumbs.length - 1;
    return /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsx(BreadcrumbItem, { children: isLast ? /* @__PURE__ */ jsx(BreadcrumbPage, { children: item.title }) : /* @__PURE__ */ jsx(BreadcrumbLink, { asChild: true, children: /* @__PURE__ */ jsx(Link, { href: item.href, children: item.title }) }) }),
      !isLast && /* @__PURE__ */ jsx(BreadcrumbSeparator, {}, `separator-${index}`)
    ] }, `breadcrumbs-${index}`);
  }) }) }) });
}
const DashboardHeader = ({ breadcrumbs = [] }) => {
  const { props } = usePage();
  const { system } = props;
  return /* @__PURE__ */ jsx("header", { className: "border-sidebar-border/50 flex h-16 shrink-0 items-center gap-2 border-b px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex w-full items-center justify-between gap-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx(SidebarTrigger, { className: "-ml-1" }),
      /* @__PURE__ */ jsx(Breadcrumbs, { breadcrumbs })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx(Appearance, {}),
      /* @__PURE__ */ jsx(Notification, {}),
      system.fields.language_selector && /* @__PURE__ */ jsx(Language, {})
    ] })
  ] }) });
};
const NavMainItem = (props) => {
  const page = usePage();
  const { auth, direction } = page.props;
  const { state, toggleSidebar } = useSidebar();
  const { pageRoute } = props;
  const { Icon, name, path, children, slug } = pageRoute;
  const compact = state === "collapsed" ? true : false;
  const activeAccordion = (slug2) => {
    return routeSecondSegment(page.url) === slug2;
  };
  const activeRoute = (slug2) => {
    return routeLastSegment(page.url) === slug2;
  };
  const activeChildRoute = (parentSlug, childSlug) => {
    return activeAccordion(parentSlug) && activeRoute(childSlug);
  };
  return children.length > 0 ? /* @__PURE__ */ jsxs(AccordionItem, { value: slug, className: "border-0", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        onClick: () => compact && toggleSidebar(),
        className: cn(
          "hover:bg-muted h-9 overflow-hidden rounded-sm",
          activeAccordion(slug) && "bg-secondary text-secondary-foreground hover:text-secondary-foreground hover:bg-secondary-light"
        ),
        children: /* @__PURE__ */ jsx(
          AccordionTrigger,
          {
            className: cn(
              "h-9 cursor-pointer py-0 pr-2 font-normal hover:no-underline",
              compact && "[&>svg]:hidden",
              direction === "rtl" && "pr-0"
            ),
            children: /* @__PURE__ */ jsxs(
              SidebarMenuButton,
              {
                className: cn(
                  "cursor-pointer hover:bg-transparent active:bg-transparent",
                  activeAccordion(slug) && "hover:text-secondary-foreground active:text-secondary-foreground"
                ),
                children: [
                  /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsx("span", { children: name })
                ]
              }
            )
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(AccordionContent, { className: cn("space-y-1 p-0 py-2", compact ? "hidden" : ""), children: children.map(({ path: path2, name: name2, slug: slug2, access }, index) => {
      if (access.includes(auth.user.role)) {
        return /* @__PURE__ */ jsx(SidebarMenuButton, { asChild: true, isActive: activeChildRoute(pageRoute.slug, slug2), className: "h-9 px-3", children: /* @__PURE__ */ jsxs(Link, { href: path2, prefetch: true, children: [
          /* @__PURE__ */ jsx(Dot, { className: "w-12" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm font-normal capitalize", children: name2 })
        ] }) }, index);
      }
    }) })
  ] }) : /* @__PURE__ */ jsx(
    SidebarMenuButton,
    {
      asChild: true,
      isActive: activeRoute(slug),
      className: cn(
        "h-9",
        activeRoute(slug) ? "data-[active=true]:bg-secondary data-[active=true]:text-secondary-foreground data-[active=true]:hover:bg-secondary-light" : ""
      ),
      children: /* @__PURE__ */ jsxs(Link, { href: path, prefetch: true, children: [
        /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { children: name })
      ] })
    }
  );
};
const dashboardRoutes = [
  {
    title: "Main Menu",
    slug: "main-menu",
    pages: [
      {
        Icon: LayoutDashboard,
        name: "Dashboard",
        path: route("dashboard"),
        slug: routeLastSegment(route("dashboard")),
        active: true,
        access: ["admin", "instructor", "collaborative", "administrative"],
        children: []
      },
      {
        Icon: ListChecks,
        name: "Categories",
        path: route("categories.index"),
        slug: routeLastSegment(route("categories.index")),
        active: true,
        access: ["admin", "collaborative", "administrative"],
        children: []
      },
      {
        Icon: School,
        name: "Courses",
        path: "",
        slug: "courses",
        active: true,
        access: ["admin", "instructor", "collaborative", "administrative"],
        children: [
          {
            name: "Manage Courses",
            slug: routeLastSegment(route("courses.index")),
            path: route("courses.index"),
            access: ["admin", "instructor", "collaborative", "administrative"]
          },
          {
            name: "Create Course",
            slug: routeLastSegment(route("courses.create")),
            path: route("courses.create"),
            access: ["admin", "instructor", "collaborative", "administrative"]
          }
        ]
      },
      {
        Icon: CassetteTape,
        name: "Enrollments",
        path: "",
        slug: "enrollments",
        active: true,
        access: ["admin", "collaborative", "administrative"],
        children: [
          {
            name: "Manage Enrollments",
            slug: routeLastSegment(route("enrollments.index")),
            path: route("enrollments.index"),
            access: ["admin", "collaborative", "administrative"]
          },
          {
            name: "Add New Enrollment",
            slug: routeLastSegment(route("enrollments.create")),
            path: route("enrollments.create"),
            access: ["admin", "collaborative", "administrative"]
          }
        ]
      },
      {
        Icon: CassetteTape,
        name: "Enrollments",
        path: route("enrollments.index"),
        slug: routeLastSegment(route("enrollments.index")),
        active: true,
        access: ["instructor", "collaborative"],
        children: []
      },
      {
        Icon: Users,
        name: "Instructors",
        path: "",
        slug: "instructors",
        active: true,
        access: ["admin", "collaborative"],
        children: [
          {
            name: "Manage Instructors",
            slug: routeLastSegment(route("instructors.index")),
            path: route("instructors.index"),
            access: ["admin", "collaborative"]
          },
          {
            name: "Create Instructor",
            slug: routeLastSegment(route("instructors.create")),
            path: route("instructors.create"),
            access: ["admin", "collaborative"]
          },
          {
            name: "Applications",
            slug: routeLastSegment(route("instructors.applications")),
            path: route("instructors.applications", {
              status: "pending"
            }),
            access: ["admin", "collaborative"]
          }
        ]
      },
      {
        Icon: Receipt,
        name: "Payout Report",
        path: "",
        slug: "payouts",
        active: true,
        access: ["admin", "collaborative"],
        children: [
          {
            name: "Payout Request",
            slug: routeLastSegment(route("payouts.request.index")),
            path: route("payouts.request.index"),
            access: ["admin", "collaborative"]
          },
          {
            name: "Payout History",
            slug: routeLastSegment(route("payouts.history.index")),
            path: route("payouts.history.index"),
            access: ["admin", "collaborative"]
          }
        ]
      },
      {
        Icon: Receipt,
        name: "Payouts",
        path: "",
        slug: "payouts",
        active: true,
        access: ["instructor", "collaborative"],
        children: [
          {
            name: "Withdraw",
            slug: routeLastSegment(route("payouts.index")),
            path: route("payouts.index"),
            access: ["instructor", "collaborative"]
          },
          {
            name: "Settings",
            slug: routeLastSegment(route("payouts.settings.index")),
            path: route("payouts.settings.index"),
            access: ["instructor", "collaborative"]
          }
        ]
      },
      {
        Icon: Briefcase,
        name: "Job Circulars",
        path: "",
        slug: "job-circulars",
        active: true,
        access: ["admin", "collaborative", "administrative"],
        children: [
          {
            name: "All Jobs",
            slug: routeLastSegment(route("job-circulars.index")),
            path: route("job-circulars.index"),
            access: ["admin", "collaborative", "administrative"]
          },
          {
            name: "Create Job",
            slug: routeLastSegment(route("job-circulars.create")),
            path: route("job-circulars.create"),
            access: ["admin", "collaborative", "administrative"]
          }
        ]
      },
      {
        Icon: Book,
        name: "Blogs",
        path: "",
        slug: "blogs",
        active: true,
        access: ["admin", "instructor", "collaborative", "administrative"],
        children: [
          {
            name: "Categories",
            slug: routeLastSegment(route("blogs.categories.index")),
            path: route("blogs.categories.index"),
            access: ["admin", "instructor", "collaborative", "administrative"]
          },
          {
            name: "Create Blog",
            slug: routeLastSegment(route("blogs.create")),
            path: route("blogs.create"),
            access: ["admin", "instructor", "collaborative", "administrative"]
          },
          {
            name: "Manage Blog",
            slug: routeLastSegment(route("blogs.index")),
            path: route("blogs.index"),
            access: ["admin", "instructor", "collaborative", "administrative"]
          }
        ]
      },
      {
        Icon: Newspaper,
        name: "Newsletters",
        path: route("newsletters.index"),
        slug: routeLastSegment(route("newsletters.index")),
        active: true,
        access: ["admin", "collaborative", "administrative"],
        children: []
      },
      {
        Icon: Users,
        name: "All Users",
        path: route("users.index"),
        slug: routeLastSegment(route("users.index")),
        active: true,
        access: ["admin", "collaborative", "administrative"],
        children: []
      },
      {
        Icon: Award,
        name: "Certificates",
        path: "",
        slug: "certification",
        active: true,
        access: ["admin", "collaborative", "administrative"],
        children: [
          {
            name: "Certificate",
            slug: routeLastSegment(route("certificate.templates.index")),
            path: route("certificate.templates.index"),
            access: ["admin", "collaborative", "administrative"]
          },
          {
            name: "Marksheet",
            slug: routeLastSegment(route("marksheet.templates.index")),
            path: route("marksheet.templates.index"),
            access: ["admin", "collaborative", "administrative"]
          },
          {
            name: "Create Certificate",
            slug: routeLastSegment(route("certificate.templates.create")),
            path: route("certificate.templates.create"),
            access: ["admin", "collaborative", "administrative"]
          },
          {
            name: "Create Marksheet",
            slug: routeLastSegment(route("marksheet.templates.create")),
            path: route("marksheet.templates.create"),
            access: ["admin", "collaborative", "administrative"]
          }
        ]
      },
      {
        Icon: Settings,
        name: "Settings",
        path: "",
        slug: "settings",
        active: true,
        access: ["admin", "instructor", "collaborative", "administrative"],
        children: [
          {
            name: "Account",
            slug: routeLastSegment(route("settings.account")),
            path: route("settings.account"),
            access: ["admin", "instructor", "collaborative", "administrative"]
          },
          {
            name: "System",
            slug: routeLastSegment(route("settings.system")),
            path: route("settings.system"),
            access: ["admin", "collaborative", "administrative"]
          },
          {
            name: "Pages",
            slug: routeLastSegment(route("settings.pages")),
            path: route("settings.pages"),
            access: ["admin", "collaborative", "administrative"]
          },
          {
            name: "Storage",
            slug: routeLastSegment(route("settings.storage")),
            path: route("settings.storage"),
            access: ["admin", "collaborative", "administrative"]
          },
          {
            name: "Payment",
            slug: routeLastSegment(route("settings.payment")),
            path: route("settings.payment"),
            access: ["admin", "collaborative", "administrative"]
          },
          {
            name: "SMTP",
            slug: routeLastSegment(route("settings.smtp")),
            path: route("settings.smtp"),
            access: ["admin", "collaborative", "administrative"]
          },
          {
            name: "Auth",
            slug: routeLastSegment(route("settings.auth0")),
            path: route("settings.auth0"),
            access: ["admin", "collaborative", "administrative"]
          },
          {
            name: "Live Class",
            slug: routeLastSegment(route("settings.live-class")),
            path: route("settings.live-class"),
            access: ["admin", "collaborative", "administrative"]
          },
          {
            name: "Translation",
            slug: routeLastSegment(route("language.index")),
            path: route("language.index"),
            access: ["admin", "collaborative", "administrative"]
          }
        ]
      }
    ]
  }
];
function NavMain() {
  const page = usePage();
  const { auth, system } = page.props;
  const [openAccordions, setOpenAccordions] = useState("");
  useEffect(() => {
    const slug = getRouteSegments(page.url);
    if (slug.length > 1) {
      setOpenAccordions(slug[1]);
    }
  }, [page.url]);
  return /* @__PURE__ */ jsx(SidebarGroup, { className: "px-2 py-0", children: /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, value: openAccordions, defaultValue: openAccordions, onValueChange: setOpenAccordions, children: dashboardRoutes.map(({ title, pages }, key) => /* @__PURE__ */ jsxs(SidebarMenu, { className: "space-y-1", children: [
    /* @__PURE__ */ jsx(SidebarGroupLabel, { children: title }),
    pages.map((page2) => {
      const role = page2.access.includes(auth.user.role || "admin");
      const subType = page2.access.includes(system.sub_type || "collaborative");
      if (role && subType) {
        return /* @__PURE__ */ jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsx(NavMainItem, { pageRoute: page2 }) }, page2.slug);
      }
    }),
    /* @__PURE__ */ jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsx(SidebarMenuButton, { asChild: true, className: cn("h-9"), children: /* @__PURE__ */ jsxs("a", { target: "_blank", href: route("system.maintenance"), children: [
      /* @__PURE__ */ jsx(GitCompareArrows, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsx("span", { children: "Maintenance" })
    ] }) }) })
  ] }, key)) }) });
}
function useInitials() {
  const getInitials = useCallback((fullName) => {
    const names = fullName.trim().split(" ");
    if (names.length === 0) return "";
    if (names.length === 1) return names[0].charAt(0).toUpperCase();
    const firstInitial = names[0].charAt(0);
    const lastInitial = names[names.length - 1].charAt(0);
    return `${firstInitial}${lastInitial}`.toUpperCase();
  }, []);
  return getInitials;
}
function UserInfo({ user, showEmail = false }) {
  const getInitials = useInitials();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Avatar, { className: "h-8 w-8 overflow-hidden rounded-full", children: [
      /* @__PURE__ */ jsx(AvatarImage, { src: user.photo || "", alt: user.name, className: "object-cover" }),
      /* @__PURE__ */ jsx(AvatarFallback, { className: "rounded-lg bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white", children: getInitials(user.name) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [
      /* @__PURE__ */ jsx("span", { className: "truncate font-medium", children: user.name }),
      showEmail && /* @__PURE__ */ jsx("span", { className: "text-muted-foreground truncate text-xs", children: user.email })
    ] })
  ] });
}
function useMobileNavigation() {
  const cleanup = useCallback(() => {
    document.body.style.removeProperty("pointer-events");
  }, []);
  return cleanup;
}
function UserMenuContent({ user }) {
  const cleanup = useMobileNavigation();
  const { button } = useLang();
  const logoutHandler = () => {
    router.post(
      route("logout"),
      {},
      {
        onSuccess: () => {
          cleanup();
        }
      }
    );
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(DropdownMenuLabel, { className: "p-0 font-normal", children: /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2 px-1 py-1.5 text-left text-sm", children: /* @__PURE__ */ jsx(UserInfo, { user, showEmail: true }) }) }),
    /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
    /* @__PURE__ */ jsxs(DropdownMenuItem, { className: "flex w-full cursor-pointer items-center gap-2", onClick: logoutHandler, children: [
      /* @__PURE__ */ jsx(LogOut, { className: "mr-2" }),
      button.log_out
    ] })
  ] });
}
function NavUser() {
  const { auth } = usePage().props;
  const { state } = useSidebar();
  const isMobile = useIsMobile();
  return /* @__PURE__ */ jsx(SidebarMenu, { children: /* @__PURE__ */ jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { className: "w-full", children: /* @__PURE__ */ jsxs(SidebarMenuButton, { size: "lg", className: "text-sidebar-accent-foreground data-[state=open]:bg-sidebar-accent group cursor-pointer", children: [
      /* @__PURE__ */ jsx(UserInfo, { user: auth.user }),
      /* @__PURE__ */ jsx(ChevronsUpDown, { className: "ml-auto size-4" })
    ] }) }),
    /* @__PURE__ */ jsx(
      DropdownMenuContent,
      {
        align: "end",
        className: "w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg",
        side: isMobile ? "bottom" : state === "collapsed" ? "left" : "bottom",
        children: /* @__PURE__ */ jsx(UserMenuContent, { user: auth.user })
      }
    )
  ] }) }) });
}
const DashboardSidebar = () => {
  const { state } = useSidebar();
  const { props } = usePage();
  const compact = state === "collapsed" ? true : false;
  return /* @__PURE__ */ jsxs(Sidebar, { collapsible: "icon", variant: "inset", side: props.direction === "rtl" ? "right" : "left", className: "shadow-md", children: [
    !compact && /* @__PURE__ */ jsx(SidebarHeader, { children: /* @__PURE__ */ jsx(SidebarMenu, { children: /* @__PURE__ */ jsx(SidebarMenuItem, { className: "pt-1 pb-5", children: /* @__PURE__ */ jsx(Link, { href: "/", prefetch: true, children: /* @__PURE__ */ jsx(AppLogo, { className: "h-[26px]" }) }) }) }) }),
    /* @__PURE__ */ jsx(SidebarContent, { children: /* @__PURE__ */ jsx(NavMain, {}) }),
    /* @__PURE__ */ jsx(SidebarFooter, { children: /* @__PURE__ */ jsx(NavUser, {}) })
  ] });
};
const DashboardLayout = (props) => {
  const { children, headTitle, breadcrumbs = [] } = props;
  return /* @__PURE__ */ jsx(Main, { children: /* @__PURE__ */ jsxs(AppShell, { variant: "sidebar", children: [
    /* @__PURE__ */ jsx(DashboardSidebar, {}),
    /* @__PURE__ */ jsxs(AppContent, { variant: "sidebar", children: [
      headTitle && /* @__PURE__ */ jsx(Head, { title: headTitle }),
      /* @__PURE__ */ jsx(DashboardHeader, { breadcrumbs }),
      /* @__PURE__ */ jsx("div", { className: "container py-6", children })
    ] })
  ] }) });
};
export {
  DashboardLayout as D
};
