import { jsx, jsxs } from "react/jsx-runtime";
import { B as Button } from "./button-jZyzwgdo.js";
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, c as DropdownMenuItem } from "./dropdown-menu-BIfW6iuW.js";
import { useState, useCallback, useEffect } from "react";
import { usePage } from "@inertiajs/react";
import { Sun, Moon, Monitor } from "lucide-react";
const prefersDark = () => {
  if (typeof window === "undefined") {
    return false;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};
const setCookie = (name, value, days = 365) => {
  if (typeof document === "undefined") {
    return;
  }
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${name}=${value};path=/;max-age=${maxAge};SameSite=Lax`;
};
const applyTheme = (appearance) => {
  const isDark = appearance === "dark" || appearance === "system" && prefersDark();
  document.documentElement.classList.toggle("dark", isDark);
};
const mediaQuery = () => {
  if (typeof window === "undefined") {
    return null;
  }
  return window.matchMedia("(prefers-color-scheme: dark)");
};
const handleSystemThemeChange = () => {
  const currentAppearance = localStorage.getItem("appearance");
  applyTheme(currentAppearance || "system");
};
function useAppearance(defaultTheme = "system") {
  const [appearance, setAppearance] = useState(defaultTheme);
  const updateAppearance = useCallback((mode) => {
    setAppearance(mode);
    localStorage.setItem("appearance", mode);
    setCookie("appearance", mode);
    applyTheme(mode);
  }, []);
  useEffect(() => {
    const savedAppearance = localStorage.getItem("appearance");
    updateAppearance(savedAppearance || defaultTheme);
    return () => {
      var _a;
      return (_a = mediaQuery()) == null ? void 0 : _a.removeEventListener("change", handleSystemThemeChange);
    };
  }, [defaultTheme, updateAppearance]);
  return { appearance, updateAppearance };
}
function Appearance({ className = "", ...props }) {
  const page = usePage();
  const { appearance, updateAppearance } = useAppearance(page.props.system.fields.theme || "system");
  const getCurrentIcon = () => {
    switch (appearance) {
      case "dark":
        return /* @__PURE__ */ jsx(Moon, { className: "h-5 w-5" });
      case "light":
        return /* @__PURE__ */ jsx(Sun, { className: "h-5 w-5" });
      default:
        return /* @__PURE__ */ jsx(Monitor, { className: "h-5 w-5" });
    }
  };
  return /* @__PURE__ */ jsx("div", { className, ...props, children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "secondary", size: "icon", className: "h-9 w-9 rounded-full", children: [
      getCurrentIcon(),
      /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Toggle theme" })
    ] }) }),
    /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", children: [
      /* @__PURE__ */ jsx(DropdownMenuItem, { onClick: () => updateAppearance("light"), className: "cursor-pointer", children: /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Sun, { className: "h-5 w-5" }),
        "Light"
      ] }) }),
      /* @__PURE__ */ jsx(DropdownMenuItem, { onClick: () => updateAppearance("dark"), className: "cursor-pointer", children: /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Moon, { className: "h-5 w-5" }),
        "Dark"
      ] }) }),
      /* @__PURE__ */ jsx(DropdownMenuItem, { onClick: () => updateAppearance("system"), className: "cursor-pointer", children: /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Monitor, { className: "h-5 w-5" }),
        "System"
      ] }) })
    ] })
  ] }) });
}
export {
  Appearance as A
};
