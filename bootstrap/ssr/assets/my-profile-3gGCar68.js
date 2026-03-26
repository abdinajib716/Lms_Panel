import { jsxs, jsx } from "react/jsx-runtime";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { L as LoadingButton } from "./loading-button-C4Hk_jCd.js";
import { I as Input } from "./input-C6-Ta46A.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { o as onHandleChange } from "./inertia-BtwbgBI3.js";
import { usePage, useForm } from "@inertiajs/react";
import { Camera } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "./button-jZyzwgdo.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-label";
const MyProfile = () => {
  const { auth, errors, translate } = usePage().props;
  const { button, input, common } = translate;
  const user = auth.user;
  const [userPhoto, setUserPhoto] = useState(user.photo);
  const [socialLinks, setSocialLinks] = useState({
    website: "",
    facebook: "",
    twitter: "",
    linkedin: ""
  });
  const parseSocialLinks = useCallback((socialLinksData) => {
    try {
      if (!socialLinksData) return;
      const links = typeof socialLinksData === "string" ? JSON.parse(socialLinksData) : socialLinksData;
      const linkMap = {
        website: "",
        facebook: "",
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
    }
  }, []);
  useEffect(() => {
    parseSocialLinks(user.social_links);
  }, [user.social_links]);
  const formatSocialLinks = useCallback((links) => {
    const formattedLinks = Object.entries(links).filter(([_, value]) => value).map(([host, profile_link]) => ({ host, profile_link }));
    return JSON.stringify(formattedLinks);
  }, []);
  const updateSocialLink = useCallback((platform, value) => {
    setSocialLinks((prev) => ({
      ...prev,
      [platform]: value
    }));
  }, []);
  const { data, post, setData, processing } = useForm({
    name: user.name || "",
    photo: null,
    social_links: null
  });
  useEffect(() => {
    setData("social_links", formatSocialLinks(socialLinks));
  }, [socialLinks, formatSocialLinks, setData]);
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("student.profile.update"));
  };
  const onImageChange = (name, value) => {
    setData(name, value);
    setUserPhoto(URL.createObjectURL(value));
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "bg-card grid grid-cols-1 gap-6 rounded-lg p-6 md:grid-cols-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "col-span-full space-y-1", children: [
      /* @__PURE__ */ jsx("div", { className: "border-border h-[150px] w-[150px] rounded-full border border-dashed p-1.5", children: /* @__PURE__ */ jsxs("div", { className: "border-border relative h-full w-full overflow-hidden rounded-full border", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            alt: `${auth.user.name}'s profile`,
            src: userPhoto || "/assets/icons/avatar.png",
            className: "h-full w-full content-center object-cover"
          }
        ),
        /* @__PURE__ */ jsxs(
          "label",
          {
            htmlFor: "formFile",
            className: "text-primary-foreground absolute right-0 bottom-0 flex h-full w-full cursor-pointer flex-col items-center justify-center gap-2 bg-black/50 opacity-0 transition-opacity duration-300 hover:opacity-100",
            children: [
              /* @__PURE__ */ jsx(Camera, { className: "h-7 w-7" }),
              /* @__PURE__ */ jsx("span", { className: "text-xs", children: button.upload })
            ]
          }
        ),
        /* @__PURE__ */ jsx("input", { hidden: true, type: "file", id: "formFile", name: "photo", onChange: (e) => onHandleChange(e, onImageChange) })
      ] }) }),
      errors.photo && /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-red-500", children: errors.photo })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx(Label, { children: input.name }),
      /* @__PURE__ */ jsx(Input, { type: "text", name: "name", value: data.name, onChange: (e) => onHandleChange(e, setData), placeholder: input.full_name_placeholder }),
      /* @__PURE__ */ jsx(InputError, { message: errors.name })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx(Label, { children: input.website }),
      /* @__PURE__ */ jsx(
        Input,
        {
          type: "url",
          name: "website",
          value: socialLinks.website,
          onChange: (e) => updateSocialLink("website", e.target.value),
          placeholder: input.https_placeholder
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { children: input.facebook }),
      /* @__PURE__ */ jsx(
        Input,
        {
          type: "url",
          value: socialLinks.facebook,
          onChange: (e) => updateSocialLink("facebook", e.target.value),
          placeholder: input.https_placeholder
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { children: input.twitter }),
      /* @__PURE__ */ jsx(
        Input,
        {
          type: "url",
          value: socialLinks.twitter,
          onChange: (e) => updateSocialLink("twitter", e.target.value),
          placeholder: input.https_placeholder
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { children: input.linkedin }),
      /* @__PURE__ */ jsx(
        Input,
        {
          type: "url",
          value: socialLinks.linkedin,
          onChange: (e) => updateSocialLink("linkedin", e.target.value),
          placeholder: input.https_placeholder
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "col-span-full flex items-center justify-end pt-2", children: /* @__PURE__ */ jsx(LoadingButton, { loading: processing, className: "col-span-full", children: button.update }) })
  ] });
};
export {
  MyProfile as default
};
