import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, c as DropdownMenuItem } from "./dropdown-menu-BIfW6iuW.js";
import { usePage, router } from "@inertiajs/react";
import { Globe, Check } from "lucide-react";
import { useEffect } from "react";
import { B as Button } from "./button-jZyzwgdo.js";
import { S as Separator } from "./separator-R7EO2G8T.js";
const Language = () => {
  const { props } = usePage();
  const { system, direction, langs, locale } = props;
  useEffect(() => {
    document.documentElement.setAttribute("dir", direction);
  }, [direction]);
  const directionHandler = () => {
    router.post(route("change.direction"), {
      direction: direction === "ltr" ? "rtl" : "ltr"
    });
  };
  const langHandler = (lang) => {
    router.post(route("change.lang"), { locale: lang });
  };
  return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { className: "cursor-pointer outline-none", children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "icon", className: "relative h-9 w-9 rounded-full p-0", children: /* @__PURE__ */ jsx(Globe, { className: "!h-5 !w-5" }) }) }),
    /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", className: "w-[160px]", children: [
      system.fields.direction === "none" && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(DropdownMenuItem, { className: "cursor-pointer justify-center px-3 uppercase", onClick: directionHandler, children: direction === "ltr" ? "RTL" : "LTR" }),
        /* @__PURE__ */ jsx(Separator, { className: "my-1" })
      ] }),
      langs.filter((lang) => lang.is_active).map((lang) => /* @__PURE__ */ jsxs(DropdownMenuItem, { className: "cursor-pointer px-3", onClick: () => langHandler(lang.code), children: [
        /* @__PURE__ */ jsx("span", { children: lang.name }),
        " ",
        lang.code === locale && /* @__PURE__ */ jsx(Check, {})
      ] }, lang.id))
    ] })
  ] });
};
export {
  Language as L
};
