import { jsx, jsxs } from "react/jsx-runtime";
import { B as Badge } from "./badge-B4crNM73.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, c as DropdownMenuItem } from "./dropdown-menu-BIfW6iuW.js";
import { Link } from "@inertiajs/react";
import { format } from "date-fns";
import { CheckCircle, AlertCircle, Clock, MoreVertical, Eye, Pencil } from "lucide-react";
import AssignmentForm from "./assignment-form-BGWLhMK-.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "react";
import "@radix-ui/react-dropdown-menu";
import "./datetime-picker-Bln2jqxu.js";
import "react-day-picker";
import "./popover-BV7JTqNd.js";
import "@radix-ui/react-popover";
import "./select-BxPdBi6V.js";
import "@radix-ui/react-select";
import "./use-lang-44ndmTOc.js";
import "./input-error-CEW4jhey.js";
import "./loading-button-C4Hk_jCd.js";
import "./Editor-iiR11EW9.js";
/* empty css               */
import "@radix-ui/react-tooltip";
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
import "./checkbox-CO4DegBm.js";
import "@radix-ui/react-checkbox";
import "./dialog-DD5SXV81.js";
import "@radix-ui/react-dialog";
import "./input-C6-Ta46A.js";
import "./label-Dd_w2I6M.js";
import "@radix-ui/react-label";
import "./scroll-area-DPHRDnwL.js";
import "@radix-ui/react-scroll-area";
import "./inertia-BtwbgBI3.js";
const AssignmentTableColumn = (slug, translate, enrollmentsCount) => {
  const { table } = translate;
  return [
    {
      accessorKey: "title",
      header: "Assignment Details",
      cell: ({ row }) => {
        const assignment = row.original;
        return /* @__PURE__ */ jsxs("div", { className: "space-y-1 py-2", children: [
          /* @__PURE__ */ jsx("p", { className: "text-base font-semibold", children: assignment.title }),
          /* @__PURE__ */ jsxs("div", { className: "text-muted-foreground flex flex-wrap items-center gap-3 text-xs", children: [
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "h-3 w-3" }),
              "Total: ",
              assignment.total_mark
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              "Pass: ",
              assignment.pass_mark
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              "Retakes: ",
              assignment.retake
            ] })
          ] })
        ] });
      }
    },
    {
      accessorKey: "deadline",
      header: "Deadline",
      cell: ({ row }) => {
        const deadline = row.getValue("deadline");
        const isExpired = /* @__PURE__ */ new Date() > new Date(deadline);
        return /* @__PURE__ */ jsxs("div", { className: "py-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            isExpired ? /* @__PURE__ */ jsx(AlertCircle, { className: "text-destructive h-4 w-4 flex-shrink-0" }) : /* @__PURE__ */ jsx(Clock, { className: "text-primary h-4 w-4 flex-shrink-0" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: `text-sm font-medium ${isExpired ? "text-destructive" : ""}`, children: format(new Date(deadline), "MMM dd, yyyy") }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-xs", children: format(new Date(deadline), "hh:mm a") })
            ] })
          ] }),
          isExpired && /* @__PURE__ */ jsx(Badge, { variant: "destructive", className: "mt-1 text-xs", children: "Expired" })
        ] });
      }
    },
    {
      accessorKey: "late_submission",
      header: () => /* @__PURE__ */ jsx("div", { className: "text-center", children: "Late Submission" }),
      cell: ({ row }) => {
        const assignment = row.original;
        const lateAllowed = assignment.late_submission;
        return /* @__PURE__ */ jsxs("div", { className: "py-2 text-center", children: [
          /* @__PURE__ */ jsx(Badge, { variant: lateAllowed ? "default" : "secondary", children: lateAllowed ? "Allowed" : "Not Allowed" }),
          lateAllowed && assignment.late_deadline && /* @__PURE__ */ jsxs("div", { className: "text-muted-foreground mt-1 text-xs", children: [
            "Until: ",
            format(new Date(assignment.late_deadline), "MMM dd")
          ] })
        ] });
      }
    },
    {
      accessorKey: "submissions",
      header: () => /* @__PURE__ */ jsx("div", { className: "text-center", children: "Submissions" }),
      cell: ({ row }) => {
        var _a, _b;
        const assignment = row.original;
        const totalSubmissions = ((_a = assignment.submissions) == null ? void 0 : _a.length) || 0;
        ((_b = assignment.submissions) == null ? void 0 : _b.filter((s) => s.status === "graded").length) || 0;
        return /* @__PURE__ */ jsxs("div", { className: "py-2 text-center", children: [
          /* @__PURE__ */ jsx("span", { className: "font-semibold", children: totalSubmissions }),
          " of ",
          /* @__PURE__ */ jsx("span", { className: "font-semibold", children: enrollmentsCount })
        ] });
      }
    },
    {
      id: "actions",
      header: () => /* @__PURE__ */ jsx("div", { className: "text-end", children: table.action }),
      cell: ({ row }) => {
        const assignment = row.original;
        return /* @__PURE__ */ jsx("div", { className: "flex justify-end py-2", children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [
          /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "secondary", size: "sm", className: "h-8 w-8 p-0", children: [
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Open menu" }),
            /* @__PURE__ */ jsx(MoreVertical, { className: "h-4 w-4" })
          ] }) }),
          /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", className: "space-y-1", children: [
            /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxs(
              Link,
              {
                href: route("courses.edit", {
                  course: assignment.course_id,
                  tab: slug,
                  assignment: assignment.id
                }),
                className: "flex w-full cursor-pointer items-center gap-2",
                children: [
                  /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsx("span", { children: "View Submissions" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsx(
              AssignmentForm,
              {
                title: "Update Assignment",
                assignment,
                handler: /* @__PURE__ */ jsxs(DropdownMenuItem, { onSelect: (e) => e.preventDefault(), className: "flex w-full cursor-pointer items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Pencil, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsx("span", { children: "Update Assignment" })
                ] })
              }
            )
          ] })
        ] }) });
      }
    }
  ];
};
export {
  AssignmentTableColumn as default
};
