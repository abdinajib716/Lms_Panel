import { jsxs, jsx, Fragment as Fragment$1 } from "react/jsx-runtime";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Card, a as CardHeader, c as CardTitle, d as CardDescription, b as CardContent } from "./card-D8SB2yrw.js";
import { S as Separator } from "./separator-R7EO2G8T.js";
import { D as DataSortModal } from "./data-sort-modal-CzOtsWqf.js";
import { D as DeleteModal } from "./delete-modal-BIvxKwRf.js";
import { S as Switch } from "./switch-Bijz4LyT.js";
import { T as Tabs } from "./tabs-CPx41tqt.js";
import { D as Dialog, b as DialogContent, c as DialogHeader, d as DialogTitle, g as DialogDescription, e as DialogFooter } from "./dialog-DD5SXV81.js";
import { I as Input } from "./input-C6-Ta46A.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BxPdBi6V.js";
import { T as TabsList, a as TabsTrigger, b as TabsContent } from "./tabs-BOXC0x8t.js";
import { useForm, router, Link, usePage } from "@inertiajs/react";
import { ExternalLink, ChevronDown, Settings, ArrowUpDown, Plus, Edit, Trash2, X, Menu, Eye } from "lucide-react";
import { useState, Fragment } from "react";
import { A as AppLogo } from "./app-logo-42nmPdEQ.js";
import { A as Appearance } from "./appearance-Df_e7R4w.js";
import { N as Notification } from "./notification-BXalLCUz.js";
import { P as ProfileToggle } from "./profile-toggle-D0g01Tbw.js";
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, c as DropdownMenuItem } from "./dropdown-menu-BIfW6iuW.js";
import { S as ScrollArea } from "./scroll-area-DPHRDnwL.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-separator";
import "nprogress";
import "@radix-ui/react-switch";
import "@radix-ui/react-dialog";
import "@radix-ui/react-label";
import "@radix-ui/react-select";
import "@radix-ui/react-tabs";
import "./popover-BV7JTqNd.js";
import "@radix-ui/react-popover";
import "date-fns";
import "./avatar-Cr_jqfHL.js";
import "@radix-ui/react-avatar";
import "nanoid";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-scroll-area";
const NavbarEditor = ({ navbar }) => {
  const navbarItems = navbar.navbar_items;
  const [activeType, setActiveType] = useState("url");
  const [editingItem, setEditingItem] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { data, setData, post, put, processing } = useForm({
    type: "url",
    slug: "",
    title: "",
    value: "",
    items: [],
    active: true,
    sort: 0
  });
  const filteredItems = navbarItems.filter((item) => item.type === activeType);
  const openCreateForm = (type) => {
    setEditingItem(null);
    setData({
      type,
      slug: "",
      title: "",
      value: "",
      items: [],
      active: true,
      sort: Math.max(...navbarItems.map((item) => item.sort), 0) + 1
    });
    setIsFormOpen(true);
  };
  const openEditForm = (item) => {
    setEditingItem(item);
    setData({
      type: item.type,
      slug: item.slug,
      title: item.title,
      value: item.value || "",
      active: item.active,
      items: Array.isArray(item.items) ? item.items.map((subItem) => ({ title: subItem.title || "", url: subItem.url || "" })) : [],
      sort: item.sort
    });
    setIsFormOpen(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingItem) {
      put(`/dashboard/settings/navbar-items/${editingItem.id}`, {
        onSuccess: () => {
          setIsFormOpen(false);
          router.reload({ only: ["navbar"] });
        }
      });
    } else {
      post(`/dashboard/settings/navbar/${navbar.id}/items`, {
        onSuccess: () => {
          setIsFormOpen(false);
          router.reload({ only: ["navbar"] });
        }
      });
    }
  };
  const addDropdownItem = () => {
    setData((prev) => ({ ...prev, items: [...prev.items, { title: "", url: "" }] }));
  };
  const updateDropdownItem = (index, field, value) => {
    const updatedItems = [...data.items];
    updatedItems[index] = { ...updatedItems[index], [field]: value };
    setData((prev) => ({ ...prev, items: updatedItems }));
  };
  const removeDropdownItem = (index) => {
    const updatedItems = data.items.filter((_, i) => i !== index);
    setData((prev) => ({ ...prev, items: updatedItems }));
  };
  return /* @__PURE__ */ jsxs("div", { className: "p-4 sm:p-6", children: [
    /* @__PURE__ */ jsxs(Tabs, { value: activeType, onValueChange: setActiveType, children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-6 flex flex-col justify-between gap-6 md:flex-row md:items-center", children: [
        /* @__PURE__ */ jsxs(TabsList, { className: "grid h-auto grid-cols-2 sm:h-10 sm:grid-cols-4", children: [
          /* @__PURE__ */ jsxs(TabsTrigger, { value: "url", className: "flex h-8 cursor-pointer items-center gap-2", children: [
            /* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4" }),
            "URL Items (",
            navbarItems.filter((item) => item.type === "url").length,
            ")"
          ] }),
          /* @__PURE__ */ jsxs(TabsTrigger, { value: "dropdown", className: "flex h-8 cursor-pointer items-center gap-2", children: [
            /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4" }),
            "Dropdowns (",
            navbarItems.filter((item) => item.type === "dropdown").length,
            ")"
          ] }),
          /* @__PURE__ */ jsxs(TabsTrigger, { value: "action", className: "flex h-8 cursor-pointer items-center gap-2", children: [
            /* @__PURE__ */ jsx(Settings, { className: "h-4 w-4" }),
            "Actions (",
            navbarItems.filter((item) => item.type === "action").length,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(
            DataSortModal,
            {
              title: "Navbar Items",
              data: filteredItems,
              handler: /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(ArrowUpDown, { className: "h-4 w-4" }),
                "Reorder"
              ] }),
              onOrderChange: (newOrder, setOpen) => {
                router.post(
                  route("settings.navbar.items.reorder"),
                  {
                    sortedData: newOrder
                  },
                  { preserveScroll: true, onSuccess: () => setOpen && setOpen(false) }
                );
              },
              renderContent: (item) => /* @__PURE__ */ jsxs(Card, { className: "flex w-full items-center justify-between px-4 py-3", children: [
                /* @__PURE__ */ jsx("p", { children: item.title }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "active", children: "Active" }),
                  /* @__PURE__ */ jsx(
                    Switch,
                    {
                      id: "active",
                      defaultChecked: item.active,
                      onCheckedChange: (checked) => {
                        router.put(`/dashboard/settings/navbar-items/${item.id}`, {
                          ...item,
                          active: checked
                        });
                      }
                    }
                  )
                ] })
              ] })
            }
          ),
          activeType !== "action" && /* @__PURE__ */ jsxs(Button, { onClick: () => openCreateForm(activeType), className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" }),
            "Add ",
            /* @__PURE__ */ jsx("span", { className: "capitalize", children: activeType })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx(TabsContent, { value: "url", className: "space-y-4", children: filteredItems.length > 0 ? /* @__PURE__ */ jsx("div", { className: "space-y-4", children: filteredItems.map((item) => /* @__PURE__ */ jsxs("div", { className: "bg-muted flex items-center gap-3 rounded-lg p-3", children: [
        /* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx("div", { className: "font-medium", children: item.title }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: item.value })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "icon", className: "h-8 w-8", onClick: () => openEditForm(item), children: /* @__PURE__ */ jsx(Edit, { className: "h-3 w-3" }) }),
          /* @__PURE__ */ jsx(
            DeleteModal,
            {
              routePath: route("settings.navbar.items.destroy", item.id),
              actionComponent: /* @__PURE__ */ jsx(Button, { variant: "ghost", className: "bg-destructive/8 hover:bg-destructive/6 h-8 w-8", children: /* @__PURE__ */ jsx(Trash2, { className: "text-destructive h-3 w-3" }) })
            }
          )
        ] })
      ] }, item.id)) }) : /* @__PURE__ */ jsx("div", { className: "py-8 text-center text-gray-500", children: 'No URL items found. Click "Add URL Item" to create one.' }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "dropdown", className: "space-y-4", children: filteredItems.length > 0 ? /* @__PURE__ */ jsx("div", { className: "space-y-4", children: filteredItems.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "bg-muted rounded-lg p-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsx("div", { className: "font-medium", children: item.title }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "icon", className: "h-8 w-8", onClick: () => openEditForm(item), children: /* @__PURE__ */ jsx(Edit, { className: "h-3 w-3" }) }),
            /* @__PURE__ */ jsx(
              DeleteModal,
              {
                routePath: route("settings.navbar.items.destroy", item.id),
                actionComponent: /* @__PURE__ */ jsx(Button, { variant: "ghost", className: "bg-destructive/8 hover:bg-destructive/6 h-8 w-8", children: /* @__PURE__ */ jsx(Trash2, { className: "text-destructive h-3 w-3" }) })
              }
            )
          ] })
        ] }),
        item.items && Array.isArray(item.items) && /* @__PURE__ */ jsx("div", { className: "ml-8 space-y-1", children: item.items.map((subItem, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-600", children: [
          /* @__PURE__ */ jsx("span", { children: "•" }),
          /* @__PURE__ */ jsx("span", { children: subItem.title }),
          /* @__PURE__ */ jsxs("span", { className: "text-gray-400", children: [
            "(",
            subItem.url,
            ")"
          ] })
        ] }, idx)) })
      ] }, item.id)) }) : /* @__PURE__ */ jsx("div", { className: "py-8 text-center text-gray-500", children: 'No dropdown items found. Click "Add Dropdown" to create one.' }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "action", className: "space-y-4", children: filteredItems.length > 0 ? /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: filteredItems.map((item) => /* @__PURE__ */ jsxs("div", { className: "bg-muted flex items-center justify-between gap-3 rounded-lg border p-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(Settings, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: item.title })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "airplane-mode", children: "Active" }),
          /* @__PURE__ */ jsx(
            Switch,
            {
              id: "airplane-mode",
              checked: item.active,
              onCheckedChange: (checked) => {
                router.put(`/dashboard/settings/navbar-items/${item.id}`, {
                  ...item,
                  active: checked
                });
              }
            }
          )
        ] })
      ] }, item.id)) }) : /* @__PURE__ */ jsx("div", { className: "py-8 text-center text-gray-500", children: 'No action items found. Click "Add Action Item" to create one.' }) })
    ] }),
    /* @__PURE__ */ jsx(Dialog, { open: isFormOpen, onOpenChange: setIsFormOpen, children: /* @__PURE__ */ jsxs(DialogContent, { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxs(DialogTitle, { children: [
          editingItem ? "Edit" : "Create",
          " ",
          data.type.charAt(0).toUpperCase() + data.type.slice(1),
          " Item"
        ] }),
        /* @__PURE__ */ jsx(DialogDescription, { children: editingItem ? "Update the details of this navbar item." : "Add a new navbar item to your navigation." })
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Status" }),
          /* @__PURE__ */ jsxs(
            Select,
            {
              value: data.active ? "Active" : "Deactive",
              onValueChange: (value) => setData((prev) => ({ ...prev, active: value === "Active" })),
              children: [
                /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select status" }) }),
                /* @__PURE__ */ jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsx(SelectItem, { value: "Active", children: "Active" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "Deactive", children: "Deactive" })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "title", children: "Title" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "title",
              value: data.title,
              onChange: (e) => setData((prev) => ({ ...prev, title: e.target.value })),
              placeholder: "Enter title",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "slug", children: "Slug" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "slug",
              value: data.slug,
              onChange: (e) => setData((prev) => ({ ...prev, slug: e.target.value })),
              placeholder: "Enter unique slug",
              required: true
            }
          )
        ] }),
        data.type === "url" && /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "value", children: "URL" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "value",
              value: data.value,
              onChange: (e) => setData((prev) => ({ ...prev, value: e.target.value })),
              placeholder: "Enter URL (e.g., /courses, https://example.com)",
              required: true
            }
          )
        ] }),
        data.type === "dropdown" && /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-2 flex items-center justify-between", children: [
            /* @__PURE__ */ jsx(Label, { children: "Dropdown Items" }),
            /* @__PURE__ */ jsxs(Button, { type: "button", variant: "outline", size: "sm", onClick: addDropdownItem, children: [
              /* @__PURE__ */ jsx(Plus, { className: "mr-1 h-3 w-3" }),
              "Add Item"
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "max-h-48 space-y-2 overflow-y-auto", children: data.items.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 rounded border p-2", children: [
            /* @__PURE__ */ jsx(
              Input,
              {
                value: item.title,
                onChange: (e) => updateDropdownItem(index, "title", e.target.value),
                placeholder: "Title",
                className: "flex-1"
              }
            ),
            /* @__PURE__ */ jsx(
              Input,
              {
                value: item.url,
                onChange: (e) => updateDropdownItem(index, "url", e.target.value),
                placeholder: "URL",
                className: "flex-1"
              }
            ),
            /* @__PURE__ */ jsx(Button, { type: "button", variant: "ghost", size: "sm", onClick: () => removeDropdownItem(index), children: /* @__PURE__ */ jsx(X, { className: "h-3 w-3" }) })
          ] }, index)) })
        ] }),
        data.type === "action" && /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "action-type", children: "Action Type" }),
          /* @__PURE__ */ jsxs(Select, { value: data.slug, onValueChange: (value) => setData((prev) => ({ ...prev, slug: value })), children: [
            /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select action type" }) }),
            /* @__PURE__ */ jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsx(SelectItem, { value: "theme", children: "Theme Toggle" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "search", children: "Search" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "notification", children: "Notifications" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "profile", children: "User Profile" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(DialogFooter, { children: [
          /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", onClick: () => setIsFormOpen(false), children: "Cancel" }),
          /* @__PURE__ */ jsx(Button, { type: "submit", disabled: processing, children: processing ? "Saving..." : editingItem ? "Update" : "Create" })
        ] })
      ] })
    ] }) })
  ] });
};
const NavbarPreview = ({ auth, navbar }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const renderNavItems = (item) => {
    if (!item.active) return null;
    switch (item.type) {
      case "url":
        return /* @__PURE__ */ jsx(Link, { href: item.value || "", className: "py-1 text-sm font-normal", children: item.title }, item.id);
      case "dropdown":
        return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
          /* @__PURE__ */ jsxs(DropdownMenuTrigger, { className: "flex cursor-pointer items-center py-1 text-sm", children: [
            item.title,
            /* @__PURE__ */ jsx(ChevronDown, { className: "ml-1 h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsx(DropdownMenuContent, { align: "start", className: "min-w-20", children: item.items && Array.isArray(item.items) && item.items.map((subItem, idx) => /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, className: "cursor-pointer px-5", children: /* @__PURE__ */ jsx(Link, { href: subItem.url || "", children: subItem.title }) }, idx)) })
        ] }, item.id);
      default:
        return null;
    }
  };
  const renderActionItems = (item) => {
    if (item.type === "action" && item.active) {
      switch (item.slug) {
        // case 'search':
        //    return <SearchInput placeholder="Search courses, instructors..." onChangeValue={() => {}} />;
        case "theme":
          return /* @__PURE__ */ jsx(Appearance, {});
        case "notification":
          return /* @__PURE__ */ jsx(Notification, {});
        case "profile":
          return /* @__PURE__ */ jsx(ProfileToggle, {});
        default:
          return null;
      }
    }
    return null;
  };
  const sortedItems = navbar.navbar_items.sort((a, b) => a.sort - b.sort);
  return /* @__PURE__ */ jsxs("div", { className: "border-border bg-background rounded-lg border px-4 transition-colors", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex h-16 items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-10", children: [
        /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(AppLogo, {}) }),
        /* @__PURE__ */ jsx("div", { className: "hidden gap-4 md:flex md:items-center", children: sortedItems.map((item) => /* @__PURE__ */ jsx(Fragment, { children: renderNavItems(item) }, item.id)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        auth ? sortedItems.map((item) => /* @__PURE__ */ jsx(Fragment, { children: renderActionItems(item) }, item.id)) : /* @__PURE__ */ jsxs(Fragment$1, { children: [
          /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", className: "h-auto rounded-sm px-5 py-2.5 shadow-none", children: /* @__PURE__ */ jsx(Link, { href: route("register"), children: "Sign Up" }) }),
          /* @__PURE__ */ jsx(Button, { asChild: true, className: "h-auto rounded-sm px-5 py-2.5 shadow-none", children: /* @__PURE__ */ jsx(Link, { href: route("login"), children: "Log In" }) })
        ] }),
        /* @__PURE__ */ jsx(Button, { size: "icon", variant: "secondary", className: "md:hidden", onClick: () => setIsMenuOpen(!isMenuOpen), children: isMenuOpen ? /* @__PURE__ */ jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsx(Menu, { className: "h-6 w-6" }) })
      ] })
    ] }),
    isMenuOpen && /* @__PURE__ */ jsx(ScrollArea, { className: "animate-fade-in h-[calc(100vh-72px)] border-t md:hidden", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col space-y-4 py-4", children: sortedItems.map((item) => /* @__PURE__ */ jsx(Fragment, { children: renderNavItems(item) }, item.id)) }) })
  ] });
};
const Navbar = () => {
  const { props } = usePage();
  const { navbar, translate } = props;
  const { settings, button } = translate;
  const [showEditor, setShowEditor] = useState(false);
  return /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Eye, { className: "h-5 w-5" }),
          settings.live_navbar_preview
        ] }),
        /* @__PURE__ */ jsxs(CardDescription, { className: "hidden sm:block", children: [
          settings.interactive_preview,
          " ",
          navbar.title,
          " (",
          navbar.slug,
          ")"
        ] })
      ] }),
      showEditor ? /* @__PURE__ */ jsxs(Button, { onClick: () => setShowEditor(false), variant: "outline", children: [
        /* @__PURE__ */ jsx(X, { className: "mr-2 h-4 w-4" }),
        button.close
      ] }) : /* @__PURE__ */ jsxs(Button, { onClick: () => setShowEditor(true), className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Edit, { className: "h-4 w-4" }),
        button.edit_navbar
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Separator, {}),
    showEditor ? /* @__PURE__ */ jsx(NavbarEditor, { navbar }) : /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6 p-5", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-1 text-sm", children: settings.before_login }),
        /* @__PURE__ */ jsx(NavbarPreview, { auth: false, navbar })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-1 text-sm", children: settings.after_login }),
        /* @__PURE__ */ jsx(NavbarPreview, { auth: true, navbar })
      ] })
    ] })
  ] });
};
export {
  Navbar as default
};
