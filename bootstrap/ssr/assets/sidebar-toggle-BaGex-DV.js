import { jsx } from "react/jsx-runtime";
import { B as Button } from "./button-jZyzwgdo.js";
import { u as useSidebar } from "./sidebar-6wqj6oXO.js";
import { c as cn } from "./utils-BmtPBcb0.js";
import { ChevronRight, ChevronLeft } from "lucide-react";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./separator-R7EO2G8T.js";
import "@radix-ui/react-separator";
import "./sheet-CuVwNO0O.js";
import "@radix-ui/react-dialog";
import "./tooltip-DswKljFZ.js";
import "@radix-ui/react-tooltip";
import "clsx";
import "tailwind-merge";
const SidebarToggle = ({ className }) => {
  const { open, isMobile, openMobile, toggleSidebar } = useSidebar();
  return /* @__PURE__ */ jsx(
    Button,
    {
      variant: "outline",
      onClick: () => toggleSidebar(),
      className: cn(
        "bg-secondary-foreground text-primary-foreground hover:bg-secondary-foreground hover:text-primary-foreground z-10 h-10 w-8 rounded-none rounded-bl border-none p-0 shadow-none",
        className
      ),
      children: isMobile ? openMobile ? /* @__PURE__ */ jsx(ChevronRight, { className: "!h-6 !w-6" }) : /* @__PURE__ */ jsx(ChevronLeft, { className: "!h-6 !w-6" }) : open ? /* @__PURE__ */ jsx(ChevronRight, { className: "!h-6 !w-6" }) : /* @__PURE__ */ jsx(ChevronLeft, { className: "!h-6 !w-6" })
    }
  );
};
export {
  SidebarToggle as default
};
