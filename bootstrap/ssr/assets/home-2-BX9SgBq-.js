import { jsxs, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import Blogs from "./blogs-Cc5Au_7p.js";
import CallToAction from "./call-to-action-65Tq5Y2r.js";
import Hero from "./hero-BspOJD3R.js";
import NewCourses from "./new-courses-D6TB4DcK.js";
import Overview from "./overview-D6Sdk_sB.js";
import Partners from "./partners-CHMhKE54.js";
import Testimonials from "./testimonials-BKfoOgX0.js";
import TopCategories from "./top-categories-C5Ky1hes.js";
import TopCourses from "./top-courses-Ct_uBdV7.js";
import TopInstructors from "./top-instructors-B8Tf4SN8.js";
import Layout from "./layout-BOXNcdFo.js";
import "./blog-card-1-Bph0lmT4.js";
import "./card-D8SB2yrw.js";
import "react";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "date-fns";
import "./avatar-Cr_jqfHL.js";
import "@radix-ui/react-avatar";
import "./button-jZyzwgdo.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./carousel-EYxgwHQ0.js";
import "embla-carousel-react";
import "./page-CO5EAoAP.js";
import "embla-carousel-autoplay";
import "lucide-react";
import "./section-7thyMMDM.js";
import "./dialog-DD5SXV81.js";
import "@radix-ui/react-dialog";
import "./use-lang-44ndmTOc.js";
import "./chunked-uploader-input-MwXGR7K4.js";
import "./input-C6-Ta46A.js";
import "axios";
import "sonner";
import "./input-error-CEW4jhey.js";
import "./loading-button-C4Hk_jCd.js";
import "./label-Dd_w2I6M.js";
import "@radix-ui/react-label";
import "./textarea-DctRxpgE.js";
import "./inertia-BtwbgBI3.js";
import "./icon-picker-_EIJQgy3.js";
import "./debounce-ZFxqVthq.js";
import "./tooltip-DswKljFZ.js";
import "@radix-ui/react-tooltip";
import "lucide-react/dynamic";
import "./scroll-area-DPHRDnwL.js";
import "@radix-ui/react-scroll-area";
import "./table-header-C_F4x8YG.js";
import "./table-tRsx9RfJ.js";
import "@tanstack/react-table";
import "./table-page-size-Xj85uK4t.js";
import "./dropdown-menu-BIfW6iuW.js";
import "@radix-ui/react-dropdown-menu";
import "./route-DlE7FdTW.js";
import "./subscribe-input-X-VTQ_3G.js";
import "./button-gradient-primary-Dgn8gIzu.js";
import "./search-input-_KZEhUeb.js";
import "./course-card-1-BLS66nbX.js";
import "./review-card-1-ZCNeviiD.js";
import "./instructor-socials-Dio3oqYc.js";
import "./data-sort-modal-CzOtsWqf.js";
import "nprogress";
import "./switch-Bijz4LyT.js";
import "@radix-ui/react-switch";
import "./landing-layout-DaxsNL6G.js";
import "./app-logo-42nmPdEQ.js";
import "./main-BqrosZ6t.js";
import "next-themes";
import "./use-auth-8FvJer_G.js";
import "./use-screen-B7SDA5zE.js";
import "./appearance-Df_e7R4w.js";
import "./language-BbuOCfpR.js";
import "./separator-R7EO2G8T.js";
import "@radix-ui/react-separator";
import "./notification-BXalLCUz.js";
import "./popover-BV7JTqNd.js";
import "@radix-ui/react-popover";
import "./profile-toggle-D0g01Tbw.js";
import "nanoid";
const Home1 = ({ system, page }) => {
  const { sections } = page;
  const components = [];
  sections.filter((section) => section.active).map((section) => {
    switch (section.slug) {
      case "hero":
        components.push(Hero);
        break;
      case "top_categories":
        components.push(TopCategories);
        break;
      case "overview":
        components.push(Overview);
        break;
      case "top_courses":
        components.push(TopCourses);
        break;
      case "new_courses":
        components.push(NewCourses);
        break;
      case "top_instructors":
        components.push(TopInstructors);
        break;
      case "testimonials":
        components.push(Testimonials);
        break;
      case "partners":
        components.push(Partners);
        break;
      case "call_to_action":
        components.push(CallToAction);
        break;
      case "blogs":
        components.push(Blogs);
        break;
    }
  });
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(Head, { title: system.fields.name }),
    components.map((Component, index) => /* @__PURE__ */ jsx(Component, {}, `home-1-${index}`))
  ] });
};
export {
  Home1 as default
};
