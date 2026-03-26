import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { L as LoadingButton } from "./loading-button-C4Hk_jCd.js";
import { T as TagInput } from "./tag-input-BplrELmW.js";
import { I as Input } from "./input-C6-Ta46A.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { T as Textarea } from "./textarea-DctRxpgE.js";
import { o as onHandleChange } from "./inertia-BtwbgBI3.js";
import { usePage, useForm } from "@inertiajs/react";
import { Camera } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import { toast } from "sonner";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "./button-jZyzwgdo.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@yaireo/tagify";
import "@radix-ui/react-label";
const UpdateProfile = ({ instructor }) => {
  const { auth, system, errors } = usePage().props;
  const user = auth.user;
  const [userPhoto, setUserPhoto] = useState(user.photo);
  const [socialLinks, setSocialLinks] = useState({
    website: "",
    github: "",
    twitter: "",
    linkedin: ""
  });
  const parseSocialLinks = useCallback((socialLinksData) => {
    try {
      if (!socialLinksData) return;
      const links = typeof socialLinksData === "string" ? JSON.parse(socialLinksData) : socialLinksData;
      const linkMap = {
        website: "",
        github: "",
        twitter: "",
        linkedin: ""
      };
      links.forEach((link) => {
        if (link.host in linkMap) {
          linkMap[link.host] = link.profile_link;
        }
      });
      setSocialLinks(linkMap);
    } catch (error) {
      toast.error("Failed to parse social links");
    }
  }, []);
  useEffect(() => {
    parseSocialLinks(user.social_links);
  }, [user.social_links]);
  const formatSocialLinks = useCallback((links) => {
    const formattedLinks = Object.entries(links).filter(([_, value]) => value).map(([host, profile_link]) => ({ host, profile_link }));
    return formattedLinks;
  }, []);
  const updateSocialLink = useCallback((platform, value) => {
    setSocialLinks((prev) => ({
      ...prev,
      [platform]: value
    }));
  }, []);
  const initialOptions = (instructor == null ? void 0 : instructor.skills) ? typeof instructor.skills === "string" ? JSON.parse(instructor.skills) : instructor.skills : [];
  const { data, post, setData, processing } = useForm({
    name: user.name || "",
    photo: null,
    social_links: [],
    user_id: user.id,
    skills: initialOptions,
    designation: (instructor == null ? void 0 : instructor.designation) || "",
    biography: (instructor == null ? void 0 : instructor.biography) || "",
    resume: null
  });
  useEffect(() => {
    setData("social_links", formatSocialLinks(socialLinks));
  }, [socialLinks, formatSocialLinks, setData]);
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("account.profile"));
  };
  const onImageChange = (name, value) => {
    setData(name, value);
    setUserPhoto(URL.createObjectURL(value));
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "bg-card space-y-6 rounded-lg border p-6 shadow", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-6 sm:flex-row", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col items-center space-y-3 text-center md:max-w-[160px]", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative mb-4 h-[100px] w-[100px]", children: [
          userPhoto ? /* @__PURE__ */ jsx("img", { alt: "item-1", src: userPhoto, className: "h-[100px] w-[100px] rounded-full object-cover" }) : /* @__PURE__ */ jsx("div", { className: "h-[100px] w-[100px] rounded-full bg-gray-300" }),
          /* @__PURE__ */ jsx("label", { htmlFor: "formFileSm", className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", children: /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-100", children: /* @__PURE__ */ jsx(Camera, { className: "h-6 w-6 text-gray-500" }) }) }),
          /* @__PURE__ */ jsx("input", { hidden: true, type: "file", id: "formFileSm", name: "photo", onChange: (e) => onHandleChange(e, onImageChange) })
        ] }),
        /* @__PURE__ */ jsx("small", { className: "text-xs text-gray-500", children: "Allowed: JPG, JPEG, PNG, SVG File, Maximum 2MB" }),
        errors.photo && /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-red-500", children: errors.photo })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid w-full grid-cols-1 gap-6 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Website" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              type: "url",
              name: "website",
              value: socialLinks.website,
              onChange: (e) => updateSocialLink("website", e.target.value),
              className: "mt-1",
              placeholder: "https://example.com"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "GitHub" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              type: "url",
              name: "github",
              value: socialLinks.github,
              onChange: (e) => updateSocialLink("github", e.target.value),
              className: "mt-1",
              placeholder: "https://github.com/my-profile"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Twitter" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              type: "url",
              name: "twitter",
              value: socialLinks.twitter,
              onChange: (e) => updateSocialLink("twitter", e.target.value),
              className: "mt-1",
              placeholder: "https://twitter.com/my-profile"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "linkedin", children: "LinkedIn" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "linkedin",
              name: "linkedin",
              value: socialLinks.linkedin,
              onChange: (e) => updateSocialLink("linkedin", e.target.value),
              className: "mt-1",
              placeholder: "https://linkedin.com/my-profile"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Full Name" }),
      /* @__PURE__ */ jsx(Input, { id: "name", name: "name", value: data.name, onChange: (e) => onHandleChange(e, setData), className: "mt-1", placeholder: "John Doe" }),
      /* @__PURE__ */ jsx(InputError, { message: errors.name })
    ] }),
    (user.role === "admin" && user.instructor_id || user.role === "instructor") && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { children: "Designation" }),
        /* @__PURE__ */ jsx(Input, { name: "designation", value: data.designation, onChange: (e) => onHandleChange(e, setData), placeholder: "Software Engineer" }),
        /* @__PURE__ */ jsx(InputError, { message: errors.designation })
      ] }),
      user.role === "instructor" && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { children: "Resume" }),
        /* @__PURE__ */ jsx(Input, { readOnly: true, type: "file", name: "resume", onChange: (e) => onHandleChange(e, setData) }),
        /* @__PURE__ */ jsx(InputError, { message: errors.resume })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { children: "Skills" }),
        /* @__PURE__ */ jsx(TagInput, { defaultTags: data.skills, placeholder: "Enter the skills as a tag", onChange: (values) => setData("skills", values) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "pb-3", children: [
        /* @__PURE__ */ jsx(Label, { children: "Biography" }),
        /* @__PURE__ */ jsx(
          Textarea,
          {
            rows: 5,
            required: true,
            name: "biography",
            value: data.biography,
            onChange: (e) => onHandleChange(e, setData),
            placeholder: "Write about yourself"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.biography })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "col-span-full pt-2", children: /* @__PURE__ */ jsx(LoadingButton, { loading: processing, children: "Save Changes" }) })
  ] });
};
export {
  UpdateProfile as default
};
