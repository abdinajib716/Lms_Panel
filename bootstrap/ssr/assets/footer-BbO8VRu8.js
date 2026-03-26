import { jsxs, jsx } from "react/jsx-runtime";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Card, b as CardContent, a as CardHeader, c as CardTitle, d as CardDescription } from "./card-D8SB2yrw.js";
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
import { useForm, router, usePage, Link } from "@inertiajs/react";
import { List, Share2, CreditCard, Copyright, ArrowUpDown, Plus, Edit, Trash2, X, Facebook, Twitter, Instagram, Linkedin, Github, Youtube, Eye } from "lucide-react";
import { useState } from "react";
import { A as AppLogo } from "./app-logo-42nmPdEQ.js";
import { B as Badge } from "./badge-B4crNM73.js";
import { DynamicIcon } from "lucide-react/dynamic";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-separator";
import "nprogress";
import "./scroll-area-DPHRDnwL.js";
import "@radix-ui/react-scroll-area";
import "@radix-ui/react-switch";
import "@radix-ui/react-dialog";
import "@radix-ui/react-label";
import "@radix-ui/react-select";
import "@radix-ui/react-tabs";
const FooterEditor = ({ footer }) => {
  const footerItems = footer.footer_items;
  const [activeType, setActiveType] = useState("list");
  const [editingItem, setEditingItem] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { data, setData, post, put, processing } = useForm({
    type: "list",
    slug: "",
    title: "",
    items: [],
    active: true,
    sort: 0
  });
  const filteredItems = footerItems.filter((item) => item.type === activeType);
  const openCreateForm = (type) => {
    setEditingItem(null);
    setData({
      type,
      slug: "",
      title: "",
      items: [],
      active: true,
      sort: Math.max(...footerItems.map((item) => item.sort), 0) + 1
    });
    setIsFormOpen(true);
  };
  const openEditForm = (item) => {
    setEditingItem(item);
    setData({
      type: item.type,
      slug: item.slug,
      title: item.title,
      active: item.active,
      items: Array.isArray(item.items) ? item.items : [],
      sort: item.sort
    });
    setIsFormOpen(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingItem) {
      put(`/dashboard/settings/footer-items/${editingItem.id}`, {
        onSuccess: () => {
          setIsFormOpen(false);
          router.reload({ only: ["footer"] });
        }
      });
    } else {
      post(`/dashboard/settings/footer/${footer.id}/items`, {
        onSuccess: () => {
          setIsFormOpen(false);
          router.reload({ only: ["footer"] });
        }
      });
    }
  };
  const addListItem = () => {
    setData((prev) => ({ ...prev, items: [...prev.items, { title: "", url: "" }] }));
  };
  const updateListItem = (index, field, value) => {
    const updatedItems = [...data.items];
    updatedItems[index] = { ...updatedItems[index], [field]: value };
    setData((prev) => ({ ...prev, items: updatedItems }));
  };
  const removeListItem = (index) => {
    const updatedItems = data.items.filter((_, i) => i !== index);
    setData((prev) => ({ ...prev, items: updatedItems }));
  };
  const addSocialMediaItem = () => {
    setData((prev) => ({ ...prev, items: [...prev.items, { title: "", url: "", icon: "facebook" }] }));
  };
  const updateSocialMediaItem = (index, field, value) => {
    const updatedItems = [...data.items];
    updatedItems[index] = { ...updatedItems[index], [field]: value };
    setData((prev) => ({ ...prev, items: updatedItems }));
  };
  const addPaymentMethodItem = () => {
    setData((prev) => ({ ...prev, items: [...prev.items, { image: "" }] }));
  };
  const updatePaymentMethodItem = (index, value) => {
    const updatedItems = [...data.items];
    updatedItems[index] = { image: value };
    setData((prev) => ({ ...prev, items: updatedItems }));
  };
  const removeDynamicItem = (index) => {
    const updatedItems = data.items.filter((_, i) => i !== index);
    setData((prev) => ({ ...prev, items: updatedItems }));
  };
  const socialMediaIcons = [
    { value: "facebook", label: "Facebook", icon: /* @__PURE__ */ jsx(Facebook, { className: "h-4 w-4" }) },
    { value: "twitter", label: "Twitter", icon: /* @__PURE__ */ jsx(Twitter, { className: "h-4 w-4" }) },
    { value: "instagram", label: "Instagram", icon: /* @__PURE__ */ jsx(Instagram, { className: "h-4 w-4" }) },
    { value: "linkedin", label: "LinkedIn", icon: /* @__PURE__ */ jsx(Linkedin, { className: "h-4 w-4" }) },
    { value: "github", label: "GitHub", icon: /* @__PURE__ */ jsx(Github, { className: "h-4 w-4" }) },
    { value: "youtube", label: "YouTube", icon: /* @__PURE__ */ jsx(Youtube, { className: "h-4 w-4" }) }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "p-4 sm:p-6", children: [
    /* @__PURE__ */ jsxs(Tabs, { value: activeType, onValueChange: setActiveType, children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-6 flex flex-col justify-between gap-6 md:flex-row md:items-center", children: [
        /* @__PURE__ */ jsxs(TabsList, { className: "grid h-auto grid-cols-2 sm:h-10 sm:grid-cols-4", children: [
          /* @__PURE__ */ jsxs(TabsTrigger, { value: "list", className: "flex h-8 cursor-pointer items-center gap-2", children: [
            /* @__PURE__ */ jsx(List, { className: "h-4 w-4" }),
            "List (",
            footerItems.filter((item) => item.type === "list").length,
            ")"
          ] }),
          /* @__PURE__ */ jsxs(TabsTrigger, { value: "social_media", className: "flex h-8 cursor-pointer items-center gap-2", children: [
            /* @__PURE__ */ jsx(Share2, { className: "h-4 w-4" }),
            "Social (",
            footerItems.filter((item) => item.type === "social_media").length,
            ")"
          ] }),
          /* @__PURE__ */ jsxs(TabsTrigger, { value: "payment_methods", className: "flex h-8 cursor-pointer items-center gap-2", children: [
            /* @__PURE__ */ jsx(CreditCard, { className: "h-4 w-4" }),
            "Payment (",
            footerItems.filter((item) => item.type === "payment_methods").length,
            ")"
          ] }),
          /* @__PURE__ */ jsxs(TabsTrigger, { value: "copyright", className: "flex h-8 cursor-pointer items-center gap-2", children: [
            /* @__PURE__ */ jsx(Copyright, { className: "h-4 w-4" }),
            "Copyright (",
            footerItems.filter((item) => item.type === "copyright").length,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(
            DataSortModal,
            {
              title: "Footer Items",
              data: filteredItems,
              handler: /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(ArrowUpDown, { className: "h-4 w-4" }),
                "Reorder"
              ] }),
              onOrderChange: (newOrder, setOpen) => {
                router.post(
                  route("settings.footer.items.reorder"),
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
          /* @__PURE__ */ jsxs(Button, { onClick: () => openCreateForm(activeType), className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" }),
            "Add ",
            /* @__PURE__ */ jsx("span", { className: "capitalize", children: activeType.replace("_", " ") })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx(TabsContent, { value: "list", className: "space-y-4", children: filteredItems.length > 0 ? /* @__PURE__ */ jsx("div", { className: "space-y-4", children: filteredItems.map((item) => /* @__PURE__ */ jsxs("div", { className: "bg-muted rounded-lg p-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(List, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx("div", { className: "font-medium", children: item.title }),
            /* @__PURE__ */ jsx("div", { className: "text-muted-foreground text-sm", children: item.items && Array.isArray(item.items) ? `${item.items.length} items` : "0 items" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "icon", className: "h-8 w-8", onClick: () => openEditForm(item), children: /* @__PURE__ */ jsx(Edit, { className: "h-3 w-3" }) }),
            /* @__PURE__ */ jsx(
              DeleteModal,
              {
                routePath: route("settings.footer.items.destroy", item.id),
                actionComponent: /* @__PURE__ */ jsx(Button, { variant: "ghost", className: "bg-destructive/8 hover:bg-destructive/6 h-8 w-8", children: /* @__PURE__ */ jsx(Trash2, { className: "text-destructive h-3 w-3" }) })
              }
            )
          ] })
        ] }),
        item.items && Array.isArray(item.items) && /* @__PURE__ */ jsx("div", { className: "mt-2 ml-8 space-y-1", children: item.items.map((subItem, idx) => /* @__PURE__ */ jsxs("div", { className: "text-muted-foreground flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ jsx("span", { children: "•" }),
          /* @__PURE__ */ jsx("span", { children: subItem.title }),
          subItem.url && /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground/60", children: [
            "(",
            subItem.url,
            ")"
          ] })
        ] }, idx)) })
      ] }, item.id)) }) : /* @__PURE__ */ jsx("div", { className: "text-muted-foreground py-8 text-center", children: 'No list items found. Click "Add List" to create one.' }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "social_media", className: "space-y-4", children: filteredItems.length > 0 ? /* @__PURE__ */ jsx("div", { className: "space-y-4", children: filteredItems.map((item) => /* @__PURE__ */ jsx("div", { className: "bg-muted rounded-lg p-3", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Share2, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx("div", { className: "font-medium", children: item.title }),
          /* @__PURE__ */ jsx("div", { className: "text-muted-foreground text-sm", children: item.items && Array.isArray(item.items) ? `${item.items.length} social links` : "0 social links" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "icon", className: "h-8 w-8", onClick: () => openEditForm(item), children: /* @__PURE__ */ jsx(Edit, { className: "h-3 w-3" }) }),
          /* @__PURE__ */ jsx(
            DeleteModal,
            {
              routePath: route("settings.footer.items.destroy", item.id),
              actionComponent: /* @__PURE__ */ jsx(Button, { variant: "ghost", className: "bg-destructive/8 hover:bg-destructive/6 h-8 w-8", children: /* @__PURE__ */ jsx(Trash2, { className: "text-destructive h-3 w-3" }) })
            }
          )
        ] })
      ] }) }, item.id)) }) : /* @__PURE__ */ jsx("div", { className: "text-muted-foreground py-8 text-center", children: 'No social media sections found. Click "Add Social Media" to create one.' }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "payment_methods", className: "space-y-4", children: filteredItems.length > 0 ? /* @__PURE__ */ jsx("div", { className: "space-y-4", children: filteredItems.map((item) => /* @__PURE__ */ jsx("div", { className: "bg-muted rounded-lg p-3", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(CreditCard, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx("div", { className: "font-medium", children: item.title }),
          /* @__PURE__ */ jsx("div", { className: "text-muted-foreground text-sm", children: item.items && Array.isArray(item.items) ? `${item.items.length} payment methods` : "0 payment methods" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "icon", className: "h-8 w-8", onClick: () => openEditForm(item), children: /* @__PURE__ */ jsx(Edit, { className: "h-3 w-3" }) }),
          /* @__PURE__ */ jsx(
            DeleteModal,
            {
              routePath: route("settings.footer.items.destroy", item.id),
              actionComponent: /* @__PURE__ */ jsx(Button, { variant: "ghost", className: "bg-destructive/8 hover:bg-destructive/6 h-8 w-8", children: /* @__PURE__ */ jsx(Trash2, { className: "text-destructive h-3 w-3" }) })
            }
          )
        ] })
      ] }) }, item.id)) }) : /* @__PURE__ */ jsx("div", { className: "text-muted-foreground py-8 text-center", children: 'No payment methods found. Click "Add Payment Methods" to create one.' }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "copyright", className: "space-y-4", children: filteredItems.length > 0 ? /* @__PURE__ */ jsx("div", { className: "space-y-4", children: filteredItems.map((item) => /* @__PURE__ */ jsx("div", { className: "bg-muted rounded-lg p-3", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(Copyright, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsx("div", { className: "font-medium", children: item.title }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "icon", className: "h-8 w-8", onClick: () => openEditForm(item), children: /* @__PURE__ */ jsx(Edit, { className: "h-3 w-3" }) }),
          /* @__PURE__ */ jsx(Label, { htmlFor: "active", children: "Active" }),
          /* @__PURE__ */ jsx(
            Switch,
            {
              id: "active",
              checked: item.active,
              onCheckedChange: (checked) => {
                router.put(`/dashboard/settings/footer-items/${item.id}`, {
                  ...item,
                  active: checked
                });
              }
            }
          )
        ] })
      ] }) }, item.id)) }) : /* @__PURE__ */ jsx("div", { className: "text-muted-foreground py-8 text-center", children: 'No copyright text found. Click "Add Copyright" to create one.' }) })
    ] }),
    /* @__PURE__ */ jsx(Dialog, { open: isFormOpen, onOpenChange: setIsFormOpen, children: /* @__PURE__ */ jsxs(DialogContent, { className: "max-h-[90vh] max-w-3xl overflow-y-auto", children: [
      /* @__PURE__ */ jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxs(DialogTitle, { children: [
          editingItem ? "Edit" : "Create",
          " ",
          data.type.charAt(0).toUpperCase() + data.type.slice(1).replace("_", " "),
          " Item"
        ] }),
        /* @__PURE__ */ jsx(DialogDescription, { children: editingItem ? "Update the details of this footer item." : "Add a new footer item to your footer." })
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Status" }),
          /* @__PURE__ */ jsxs(
            Select,
            {
              value: data.active ? "Active" : "Inactive",
              onValueChange: (value) => setData((prev) => ({ ...prev, active: value === "Active" })),
              children: [
                /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select status" }) }),
                /* @__PURE__ */ jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsx(SelectItem, { value: "Active", children: "Active" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "Inactive", children: "Inactive" })
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
        data.type === "list" && /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-2 flex items-center justify-between", children: [
            /* @__PURE__ */ jsx(Label, { children: "List Items" }),
            /* @__PURE__ */ jsxs(Button, { type: "button", variant: "outline", size: "sm", onClick: addListItem, children: [
              /* @__PURE__ */ jsx(Plus, { className: "mr-1 h-3 w-3" }),
              "Add Item"
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "max-h-48 space-y-2 overflow-y-auto", children: data.items.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 rounded border p-2", children: [
            /* @__PURE__ */ jsx(
              Input,
              {
                value: item.title || "",
                onChange: (e) => updateListItem(index, "title", e.target.value),
                placeholder: "Title",
                className: "flex-1"
              }
            ),
            /* @__PURE__ */ jsx(
              Input,
              {
                value: item.url || "",
                onChange: (e) => updateListItem(index, "url", e.target.value),
                placeholder: "URL (optional)",
                className: "flex-1"
              }
            ),
            /* @__PURE__ */ jsx(Button, { type: "button", variant: "ghost", size: "sm", onClick: () => removeListItem(index), children: /* @__PURE__ */ jsx(X, { className: "h-3 w-3" }) })
          ] }, index)) })
        ] }),
        data.type === "social_media" && /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-2 flex items-center justify-between", children: [
            /* @__PURE__ */ jsx(Label, { children: "Social Media Links" }),
            /* @__PURE__ */ jsxs(Button, { type: "button", variant: "outline", size: "sm", onClick: addSocialMediaItem, children: [
              /* @__PURE__ */ jsx(Plus, { className: "mr-1 h-3 w-3" }),
              "Add Social Link"
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "max-h-48 space-y-2 overflow-y-auto", children: data.items.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 rounded border p-2", children: [
            /* @__PURE__ */ jsx(
              Input,
              {
                value: item.title || "",
                onChange: (e) => updateSocialMediaItem(index, "title", e.target.value),
                placeholder: "Platform name",
                className: "flex-1"
              }
            ),
            /* @__PURE__ */ jsx(
              Input,
              {
                value: item.url || "",
                onChange: (e) => updateSocialMediaItem(index, "url", e.target.value),
                placeholder: "Profile URL",
                className: "flex-1"
              }
            ),
            /* @__PURE__ */ jsxs(Select, { value: item.icon || "facebook", onValueChange: (value) => updateSocialMediaItem(index, "icon", value), children: [
              /* @__PURE__ */ jsx(SelectTrigger, { className: "w-32", children: /* @__PURE__ */ jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsx(SelectContent, { children: socialMediaIcons.map((icon) => /* @__PURE__ */ jsx(SelectItem, { value: icon.value, children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                icon.icon,
                icon.label
              ] }) }, icon.value)) })
            ] }),
            /* @__PURE__ */ jsx(Button, { type: "button", variant: "ghost", size: "sm", onClick: () => removeDynamicItem(index), children: /* @__PURE__ */ jsx(X, { className: "h-3 w-3" }) })
          ] }, index)) })
        ] }),
        data.type === "payment_methods" && /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-2 flex items-center justify-between", children: [
            /* @__PURE__ */ jsx(Label, { children: "Payment Method Images" }),
            /* @__PURE__ */ jsxs(Button, { type: "button", variant: "outline", size: "sm", onClick: addPaymentMethodItem, children: [
              /* @__PURE__ */ jsx(Plus, { className: "mr-1 h-3 w-3" }),
              "Add Payment Method"
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "max-h-48 space-y-2 overflow-y-auto", children: data.items.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 rounded border p-2", children: [
            /* @__PURE__ */ jsx(
              Input,
              {
                value: item.image || "",
                onChange: (e) => updatePaymentMethodItem(index, e.target.value),
                placeholder: "Image URL or path",
                className: "flex-1"
              }
            ),
            /* @__PURE__ */ jsx(Button, { type: "button", variant: "ghost", size: "sm", onClick: () => removeDynamicItem(index), children: /* @__PURE__ */ jsx(X, { className: "h-3 w-3" }) })
          ] }, index)) })
        ] }),
        /* @__PURE__ */ jsxs(DialogFooter, { children: [
          /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", onClick: () => setIsFormOpen(false), children: "Cancel" }),
          /* @__PURE__ */ jsx(Button, { type: "submit", disabled: processing, children: processing ? "Saving..." : editingItem ? "Update" : "Create" })
        ] })
      ] })
    ] }) })
  ] });
};
const FooterPreview = () => {
  const { props } = usePage();
  const { footer, system } = props;
  const sortedItems = footer.footer_items.sort((a, b) => a.sort - b.sort);
  const listItems = sortedItems.filter((item) => item.type === "list" && item.active);
  const copyrightItem = sortedItems.find((item) => item.type === "copyright" && item.active);
  const socialMediaItem = sortedItems.find((item) => item.type === "social_media" && item.active);
  const paymentMethodsItem = sortedItems.find((item) => item.type === "payment_methods" && item.active);
  return /* @__PURE__ */ jsxs("div", { className: `overflow-hidden bg-[rgba(255,222,99,0.06)]`, children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-9 px-4 pt-[60px] pb-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start justify-between gap-10 md:flex-row", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full space-y-5 md:max-w-[300px]", children: [
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(AppLogo, {}) }) }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: system.fields.description }),
          socialMediaItem && /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3", children: socialMediaItem.items && Array.isArray(socialMediaItem.items) && socialMediaItem.items.map((socialItem, idx) => /* @__PURE__ */ jsx(
            Button,
            {
              size: "icon",
              variant: "ghost",
              className: "bg-muted hover:bg-primary hover:text-primary-foreground text-muted-foreground rounded-full transition-colors",
              asChild: true,
              children: /* @__PURE__ */ jsxs(Link, { href: socialItem.url, target: "_blank", rel: "noopener noreferrer", children: [
                /* @__PURE__ */ jsx(DynamicIcon, { name: socialItem.icon, className: "h-5 w-5" }),
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: socialItem.title })
              ] })
            },
            idx
          )) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex w-full flex-col justify-between gap-10 md:max-w-[640px] md:flex-row", children: listItems.map((section) => {
          var _a;
          return /* @__PURE__ */ jsxs("div", { className: "relative w-full", children: [
            /* @__PURE__ */ jsx("p", { className: "mb-3 text-lg font-semibold", children: section.title }),
            /* @__PURE__ */ jsx("ul", { className: "text-muted-foreground flex flex-col gap-2 text-sm", children: (_a = section.items) == null ? void 0 : _a.map(
              (item, itemIndex) => section.slug === "address" ? /* @__PURE__ */ jsx("li", { children: item.title }, `item-${itemIndex}`) : /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: item.url, children: item.title }) }, `item-${itemIndex}`)
            ) })
          ] });
        }) })
      ] }),
      paymentMethodsItem && /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold", children: paymentMethodsItem.title }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3", children: paymentMethodsItem.items && Array.isArray(paymentMethodsItem.items) && paymentMethodsItem.items.map((paymentItem, idx) => /* @__PURE__ */ jsx("div", { className: "flex h-7 items-center justify-center gap-5 md:justify-start", children: paymentItem.image ? /* @__PURE__ */ jsx("img", { src: paymentItem.image, alt: `Payment method ${idx + 1}`, className: "h-full w-auto object-contain" }) : /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "text-xs", children: [
          "Payment ",
          idx + 1
        ] }) }, idx)) })
      ] })
    ] }),
    copyrightItem && /* @__PURE__ */ jsx("div", { className: "px-6 py-8 text-center", children: /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: copyrightItem.title }) })
  ] });
};
const Footer = () => {
  const { props } = usePage();
  const { footer, translate } = props;
  const { settings, button } = translate;
  const [showEditor, setShowEditor] = useState(false);
  if (!footer) {
    return /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "flex items-center justify-center py-8", children: /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: settings.footer_config_not_found }) }) });
  }
  return /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Eye, { className: "h-5 w-5" }),
          settings.live_footer_preview
        ] }),
        /* @__PURE__ */ jsxs(CardDescription, { className: "hidden sm:block", children: [
          settings.interactive_preview,
          " ",
          footer.title,
          " (",
          footer.slug,
          ")"
        ] })
      ] }),
      showEditor ? /* @__PURE__ */ jsxs(Button, { onClick: () => setShowEditor(false), variant: "outline", children: [
        /* @__PURE__ */ jsx(X, { className: "mr-2 h-4 w-4" }),
        button.close
      ] }) : /* @__PURE__ */ jsxs(Button, { onClick: () => setShowEditor(true), className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Edit, { className: "h-4 w-4" }),
        button.edit_footer
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Separator, {}),
    showEditor ? /* @__PURE__ */ jsx(FooterEditor, { footer }) : /* @__PURE__ */ jsx(CardContent, { className: "p-5", children: /* @__PURE__ */ jsx(FooterPreview, {}) })
  ] });
};
export {
  Footer as default
};
