import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { D as DeleteModal } from "./delete-modal-BIvxKwRf.js";
import { T as TableFilter } from "./table-filter-Fsgky9hE.js";
import { T as TableFooter } from "./table-footer-Bf3DvTcP.js";
import { T as TiptapRenderer } from "./client-renderer-CUBmzaOS.js";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-DVAMjldm.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { C as Card } from "./card-D8SB2yrw.js";
import { D as DashboardLayout } from "./layout-CdQJcF1a.js";
import { Plus, Trash2, Pencil } from "lucide-react";
import NewsletterForm from "./newsletter-form-BLRwMBnj.js";
import NewsletterSend from "./newsletter-send-Cc02uM0a.js";
import "./dialog-DD5SXV81.js";
import "@radix-ui/react-dialog";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "@inertiajs/react";
import "react";
import "./use-lang-44ndmTOc.js";
import "./debounce-ZFxqVthq.js";
import "./route-DlE7FdTW.js";
import "./dropdown-menu-BIfW6iuW.js";
import "@radix-ui/react-dropdown-menu";
import "./scroll-area-DPHRDnwL.js";
import "@radix-ui/react-scroll-area";
import "./table-page-size-Xj85uK4t.js";
/* empty css               */
import "react-icons/lu";
import "hast-util-to-jsx-runtime";
import "shiki/bundle/full";
import "rehype-parse";
import "rehype-react";
import "unified";
import "unist-util-visit";
import "@radix-ui/react-accordion";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./sidebar-6wqj6oXO.js";
import "./separator-R7EO2G8T.js";
import "@radix-ui/react-separator";
import "./sheet-CuVwNO0O.js";
import "./tooltip-DswKljFZ.js";
import "@radix-ui/react-tooltip";
import "./main-BqrosZ6t.js";
import "next-themes";
import "sonner";
import "./appearance-Df_e7R4w.js";
import "./language-BbuOCfpR.js";
import "./notification-BXalLCUz.js";
import "./popover-BV7JTqNd.js";
import "@radix-ui/react-popover";
import "date-fns";
import "./app-logo-42nmPdEQ.js";
import "./avatar-Cr_jqfHL.js";
import "@radix-ui/react-avatar";
import "./input-error-CEW4jhey.js";
import "./loading-button-C4Hk_jCd.js";
import "./Editor-iiR11EW9.js";
import "react-icons/tb";
import "react-icons/ai";
import "@tiptap/react";
import "prettier/plugins/html";
import "prettier/standalone";
import "@codemirror/lang-html";
import "@codemirror/state";
import "@codemirror/view";
import "codemirror";
import "./theme-BnORSbS2.js";
import "@codemirror/language";
import "@lezer/highlight";
import "react-dom";
import "react-colorful";
import "@tiptap/extension-bubble-menu";
import "@tiptap/pm/state";
import "@tiptap/starter-kit";
import "@tiptap/extension-character-count";
import "@tiptap/extension-underline";
import "@tiptap/extension-placeholder";
import "@tiptap/extension-text-align";
import "@tiptap/extension-text-style";
import "@tiptap/extension-subscript";
import "@tiptap/extension-superscript";
import "@tiptap/extension-bullet-list";
import "@tiptap/extension-ordered-list";
import "@tiptap/extension-list-keymap";
import "@tiptap/extension-color";
import "@tiptap/extension-highlight";
import "@tiptap/extension-code-block-lowlight";
import "@tiptap/core";
import "@tiptap/pm/view";
import "highlight.js/lib/core";
import "lowlight";
import "highlight.js/lib/languages/plaintext";
import "@tiptap/pm/model";
import "@tiptap/extension-image";
import "@tiptap/extension-link";
import "@tiptap/extension-table";
import "@tiptap/extension-table-cell";
import "@tiptap/extension-table-header";
import "@tiptap/extension-table-row";
import "./input-C6-Ta46A.js";
import "./label-Dd_w2I6M.js";
import "@radix-ui/react-label";
import "./inertia-BtwbgBI3.js";
import "./select-BxPdBi6V.js";
import "@radix-ui/react-select";
const Index = ({ newsletters, translate }) => {
  const { dashboard, button } = translate;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "relative flex items-center justify-between gap-4 pb-6", children: [
      /* @__PURE__ */ jsx(
        TableFilter,
        {
          data: newsletters,
          title: dashboard.newsletter_list,
          globalSearch: true,
          tablePageSizes: [10, 15, 20, 25],
          routeName: "newsletters.index",
          className: "w-full !p-0 md:p-0"
        }
      ),
      /* @__PURE__ */ jsx(
        NewsletterForm,
        {
          title: button.add_newsletter,
          handler: /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "absolute -top-1 right-0 md:static md:mb-1", children: [
            /* @__PURE__ */ jsx(Plus, {}),
            /* @__PURE__ */ jsx("span", { children: button.add_newsletter })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Card, { className: "flex flex-col divide-y p-4", children: /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "space-y-4", children: newsletters.data.length > 0 ? newsletters.data.map((newsletter, index) => /* @__PURE__ */ jsxs(AccordionItem, { value: newsletter.id, className: "w-full overflow-hidden rounded-lg border", children: [
      /* @__PURE__ */ jsx(AccordionTrigger, { className: "[&[data-state=open]]:!bg-muted px-4 py-3 text-base hover:no-underline", children: /* @__PURE__ */ jsxs("div", { className: "flex w-full items-center justify-between pr-4", children: [
        /* @__PURE__ */ jsxs("span", { children: [
          newsletters.total - index,
          ". ",
          newsletter.subject
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", onClick: (e) => e.stopPropagation(), children: [
          /* @__PURE__ */ jsx(
            DeleteModal,
            {
              routePath: route("newsletters.destroy", {
                id: newsletter.id
              }),
              actionComponent: /* @__PURE__ */ jsx(Button, { size: "icon", variant: "secondary", className: "text-destructive h-7 w-7", children: /* @__PURE__ */ jsx(Trash2, { className: "h-3 w-3" }) })
            }
          ),
          /* @__PURE__ */ jsx(NewsletterSend, { id: newsletter.id }),
          /* @__PURE__ */ jsx(
            NewsletterForm,
            {
              title: button.update_newsletter,
              newsletter,
              handler: /* @__PURE__ */ jsx(Button, { size: "icon", variant: "secondary", className: "h-7 w-7", children: /* @__PURE__ */ jsx(Pencil, { className: "h-3 w-3" }) })
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(AccordionContent, { className: "space-y-2 p-4", children: /* @__PURE__ */ jsx(TiptapRenderer, { children: newsletter.description }) })
    ] }, newsletter.id)) : /* @__PURE__ */ jsx("p", { className: "text-muted-foreground p-6 text-center text-sm", children: dashboard.no_newsletters_found }) }) }),
    /* @__PURE__ */ jsx(TableFooter, { className: "mt-1 p-5 sm:p-7", routeName: "newsletters.index", paginationInfo: newsletters })
  ] });
};
Index.layout = (page) => /* @__PURE__ */ jsx(DashboardLayout, { children: page });
export {
  Index as default
};
