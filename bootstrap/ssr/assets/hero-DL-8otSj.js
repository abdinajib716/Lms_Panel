import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@inertiajs/react";
import { Home, ChevronsRight } from "lucide-react";
const Hero = ({ innerPage }) => {
  return /* @__PURE__ */ jsxs("div", { className: "relative overflow-y-hidden bg-[rgba(255,222,99,0.06)] pt-[212px] pb-[100px]", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col items-center justify-center space-y-2", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold md:text-[44px]", children: innerPage.name }),
      /* @__PURE__ */ jsxs("div", { className: "text-muted-foreground flex items-center gap-1", children: [
        /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(Home, { size: 18 }) }),
        /* @__PURE__ */ jsx(ChevronsRight, { size: 14 }),
        /* @__PURE__ */ jsx("span", { className: "text-sm", children: innerPage.slug })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "after:pointer-events-none after:absolute after:top-1/2 after:right-0 after:h-[200px] after:w-[200px] after:-translate-y-1/2 after:rounded-full after:bg-[rgba(0,167,111,1)] after:blur-[140px] after:content-['']" })
  ] });
};
export {
  Hero as default
};
