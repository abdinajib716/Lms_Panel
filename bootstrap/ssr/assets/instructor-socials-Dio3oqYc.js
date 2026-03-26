import { jsxs, jsx } from "react/jsx-runtime";
import { B as Button } from "./button-jZyzwgdo.js";
import { c as cn } from "./utils-BmtPBcb0.js";
import { Globe, Github, Twitter, Linkedin } from "lucide-react";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
const InstructorSocials = ({ instructor, className, buttonClass, buttonVariant = "secondary" }) => {
  const getSocialLink = (host, instructor2) => {
    var _a;
    const socialLink = (_a = instructor2.user.social_links) == null ? void 0 : _a.find((link) => link.host === host);
    return socialLink ? socialLink.profile_link : null;
  };
  const website = getSocialLink("website", instructor);
  const github = getSocialLink("github", instructor);
  const twitter = getSocialLink("twitter", instructor);
  const linkedin = getSocialLink("linkedin", instructor);
  return /* @__PURE__ */ jsxs("div", { className: cn("flex items-center justify-center space-x-1.5 py-4", className), children: [
    website && /* @__PURE__ */ jsx("a", { href: website, target: "_blank", children: /* @__PURE__ */ jsx(Button, { size: "icon", variant: buttonVariant, className: cn("rounded-full p-0", buttonClass), children: /* @__PURE__ */ jsx(Globe, { className: "h-5 w-5" }) }) }),
    github && /* @__PURE__ */ jsx("a", { href: github, target: "_blank", children: /* @__PURE__ */ jsx(Button, { size: "icon", variant: buttonVariant, className: cn("rounded-full p-0", buttonClass), children: /* @__PURE__ */ jsx(Github, { className: "h-5 w-5" }) }) }),
    twitter && /* @__PURE__ */ jsx("a", { href: twitter, target: "_blank", children: /* @__PURE__ */ jsx(Button, { size: "icon", variant: buttonVariant, className: cn("rounded-full p-0", buttonClass), children: /* @__PURE__ */ jsx(Twitter, { className: "h-5 w-5" }) }) }),
    linkedin && /* @__PURE__ */ jsx("a", { href: linkedin, target: "_blank", children: /* @__PURE__ */ jsx(Button, { size: "icon", variant: buttonVariant, className: cn("rounded-full p-0", buttonClass), children: /* @__PURE__ */ jsx(Linkedin, { className: "h-5 w-5" }) }) })
  ] });
};
export {
  InstructorSocials as default
};
