import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { D as Dialog, a as DialogTrigger, b as DialogContent } from "./dialog-DD5SXV81.js";
import { V as VideoPlayer } from "./video-player-CajLnoJG.js";
import { c as courseLanguages } from "./course-languages-oEC7DuVF.js";
import { s as systemCurrency, d as getCourseDuration } from "./utils-BmtPBcb0.js";
import { usePage } from "@inertiajs/react";
import { Play, Users, Languages, Clock, BarChart3, Calendar, Mail } from "lucide-react";
import EnrollOrPlayerButton from "./course-player-button-B3G_ImHb.js";
import "@radix-ui/react-dialog";
import "plyr-react";
/* empty css                */
import "clsx";
import "tailwind-merge";
import "./button-jZyzwgdo.js";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
const CoursePreview = () => {
  const { course, system, translate } = usePage().props;
  const { frontend } = translate;
  const currency = systemCurrency(system.fields["selling_currency"]);
  const courseLanguage = courseLanguages.find((language) => language.value === course.language);
  return /* @__PURE__ */ jsxs("div", { className: "bg-card sticky top-24 space-y-5 rounded-lg border p-5 shadow", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("img", { className: "w-full rounded-lg", src: course.thumbnail ?? "/assets/images/blank-image.jpg", alt: "" }),
        course.preview && /* @__PURE__ */ jsxs(Dialog, { children: [
          /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx("button", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black/70 p-4 transition-transform hover:scale-110", children: /* @__PURE__ */ jsx(Play, { className: "h-6 w-6 text-white" }) }) }),
          /* @__PURE__ */ jsx(DialogContent, { className: "overflow-hidden p-0 md:min-w-3xl", children: /* @__PURE__ */ jsx(
            VideoPlayer,
            {
              source: {
                type: "video",
                sources: [
                  {
                    src: course.preview,
                    type: "video/mp4"
                  }
                ]
              }
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold capitalize", children: course.pricing_type === "free" ? course.pricing_type : course.discount ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs("span", { className: "font-semibold", children: [
          currency == null ? void 0 : currency.symbol,
          course.discount_price
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground ml-2 text-base font-medium line-through", children: [
          currency == null ? void 0 : currency.symbol,
          course.price
        ] })
      ] }) : /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("span", { className: "font-semibold", children: [
        currency == null ? void 0 : currency.symbol,
        course.price
      ] }) }) }),
      /* @__PURE__ */ jsx(EnrollOrPlayerButton, {})
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-4 pt-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Users, { className: "h-5 w-5" }),
          frontend.students
        ] }),
        /* @__PURE__ */ jsx("span", { children: course.enrollments_count || 0 })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Languages, { className: "h-5 w-5" }),
          frontend.language
        ] }),
        /* @__PURE__ */ jsx("span", { children: courseLanguage == null ? void 0 : courseLanguage.label })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Clock, { className: "h-5 w-5" }),
          frontend.duration
        ] }),
        /* @__PURE__ */ jsx("span", { children: getCourseDuration(course) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(BarChart3, { className: "h-5 w-5" }),
          frontend.level
        ] }),
        /* @__PURE__ */ jsx("span", { className: "capitalize", children: course.level })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Calendar, { className: "h-5 w-5" }),
          frontend.expiry_period
        ] }),
        /* @__PURE__ */ jsx("span", { className: "capitalize", children: course.expiry_type })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Mail, { className: "h-5 w-5" }),
          frontend.certificate_included
        ] }),
        /* @__PURE__ */ jsx("span", { children: "Yes" })
      ] })
    ] })
  ] });
};
export {
  CoursePreview as default
};
