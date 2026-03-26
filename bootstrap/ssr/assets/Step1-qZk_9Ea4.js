import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { B as Button } from "./button-jZyzwgdo.js";
import { Link } from "@inertiajs/react";
import { Check, CircleX } from "lucide-react";
import Layout from "./Layout-BabR1Av6.js";
import StepNavigator from "./StepNavigator-Ce2PCpaO.js";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
const Step1 = (props) => {
  const { allValuesAreTrue, requirements } = props;
  const statusList = [
    {
      title: `PHP >= ${requirements.required_php_version}`,
      key: "php_version"
    },
    { title: "OpenSSL PHP Extension", key: "openssl_enabled" },
    { title: "PDO PHP Extension", key: "pdo_enabled" },
    { title: "Mbstring PHP Extension", key: "mbstring_enabled" },
    { title: "Curl PHP Extension", key: "curl_enabled" },
    { title: "Tokenizer PHP Extension", key: "tokenizer_enabled" },
    { title: "XML PHP Extension", key: "xml_enabled" },
    { title: "CTYPE PHP Extension", key: "ctype_enabled" },
    { title: "Fileinfo PHP Extension", key: "fileinfo_enabled" },
    { title: "GD PHP Extension", key: "gd_enabled" },
    { title: "JSON PHP Extension", key: "json_enabled" },
    { title: "BCmath PHP Extension", key: "bcmath_enabled" },
    { title: "Symlink Function", key: "symlink_enabled" }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(StepNavigator, { step1: "active" }),
    !allValuesAreTrue && /* @__PURE__ */ jsx("p", { className: "bg-red-100 text-red-500", children: "Your server doesn't meet the following requirements" }),
    /* @__PURE__ */ jsx("div", { className: "border border-gray-300", children: statusList.map(({ key, title }) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 py-4 text-gray-500 odd:bg-gray-100", children: [
      title,
      key === "php_version" ? /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsx("span", { className: "mr-2", children: requirements.current_php_version }),
        requirements[key] ? /* @__PURE__ */ jsx(Check, { className: "text-green-500" }) : /* @__PURE__ */ jsx(CircleX, { className: "text-red-500" })
      ] }) : requirements[key] ? /* @__PURE__ */ jsx(Check, { className: "text-green-500" }) : /* @__PURE__ */ jsx(CircleX, { className: "text-red-500" })
    ] }, key)) }),
    !allValuesAreTrue && /* @__PURE__ */ jsx("div", { className: "mt-4 rounded-md bg-yellow-50 p-4", children: /* @__PURE__ */ jsx("div", { className: "flex", children: /* @__PURE__ */ jsxs("div", { className: "ml-3", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-sm font-medium text-yellow-800", children: "Important Notes" }),
      /* @__PURE__ */ jsx("div", { className: "mt-2 text-sm text-yellow-700", children: /* @__PURE__ */ jsxs("ul", { className: "list-disc space-y-1 pl-5", children: [
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Symlink Function:" }),
          " Required for Laravel's storage:link command to make uploaded files publicly accessible"
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "PHP Extensions:" }),
          " These extensions are essential for Laravel to function properly"
        ] }),
        /* @__PURE__ */ jsx("li", { children: "Contact your hosting provider if any requirements are not met" })
      ] }) })
    ] }) }) }),
    allValuesAreTrue && /* @__PURE__ */ jsx("div", { className: "mt-8 flex items-center justify-end", children: /* @__PURE__ */ jsx(Link, { href: route("install.show-step2"), children: /* @__PURE__ */ jsx(Button, { className: "bg-orange-500 px-6 py-3 text-white uppercase hover:bg-orange-600/90", children: "Next Step" }) }) })
  ] });
};
Step1.layout = (page) => /* @__PURE__ */ jsx(Layout, { children: page });
export {
  Step1 as default
};
