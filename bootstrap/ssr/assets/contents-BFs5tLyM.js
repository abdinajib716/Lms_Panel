import { jsx } from "react/jsx-runtime";
import Categories from "./categories-B-4BDvbm.js";
import Courses from "./courses-CstrDQgH.js";
import Instructors from "./instructors-BGnprC42.js";
import "./table-header-C_F4x8YG.js";
import "./table-tRsx9RfJ.js";
import "react";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "@tanstack/react-table";
import "@inertiajs/react";
import "./categories-table-columns-DDy_goyc.js";
import "./button-jZyzwgdo.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "lucide-react";
import "./table-filter-CqFAGjch.js";
import "./table-page-size-Xj85uK4t.js";
import "./dropdown-menu-BIfW6iuW.js";
import "@radix-ui/react-dropdown-menu";
import "./route-DlE7FdTW.js";
import "./debounce-ZFxqVthq.js";
import "./table-footer-DvbT0AGV.js";
import "./scroll-area-DPHRDnwL.js";
import "@radix-ui/react-scroll-area";
import "./courses-table-columns-ukTwrhMl.js";
import "./instructors-table-columns-DAEVgN3X.js";
import "./avatar-Cr_jqfHL.js";
import "@radix-ui/react-avatar";
const Contents = ({ contents, section_slug, selectedIds = [], onSelectChange }) => {
  const renderField = () => {
    switch (section_slug) {
      case "hero":
      case "top_course":
      case "top_courses":
      case "new_courses":
        return /* @__PURE__ */ jsx(Courses, { courses: contents, selectedIds, onCourseSelect: onSelectChange });
      case "top_categories":
      case "category_courses":
        return /* @__PURE__ */ jsx(Categories, { categories: contents, selectedIds, onCourseSelect: onSelectChange });
      case "top_instructors":
        return /* @__PURE__ */ jsx(Instructors, { instructors: contents, selectedIds, onCourseSelect: onSelectChange });
      case "blogs":
        return /* @__PURE__ */ jsx("h1", { children: "Blogs" });
      default:
        return null;
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "rounded-md border", children: renderField() });
};
export {
  Contents as default
};
