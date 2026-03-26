import { jsxs, jsx } from "react/jsx-runtime";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { c as cn } from "./utils-BmtPBcb0.js";
import Tagify from "@yaireo/tagify";
import { useRef, useState, useEffect } from "react";
const TagInput = (props) => {
  const { value, onChange, placeholder, whitelist, maxTags, enforceWhitelist, defaultTags, className } = props;
  const tagRef = useRef(null);
  const inputRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    if (inputRef.current) {
      if (tagRef.current) {
        tagRef.current.destroy();
      }
      tagRef.current = new Tagify(inputRef.current, {
        maxTags: maxTags || 10,
        whitelist: whitelist || [],
        dropdown: { enabled: 1 },
        enforceWhitelist: enforceWhitelist || false,
        callbacks: {
          change: (e) => {
            const tags = e.detail.tagify.value.map((tag) => tag.value);
            onChange == null ? void 0 : onChange(tags);
            setErrorMessage("");
          },
          invalid: (e) => {
            setErrorMessage(e.detail.message);
          }
        },
        texts: {
          empty: "Tag field is required",
          exceed: "Maximum number of tags exceeded",
          pattern: "The tag is invalid",
          duplicate: "Tag is already exists"
        },
        // Allow more flexible pattern - letters, numbers, spaces, and common punctuation
        pattern: /^.{1,}$/
      });
    }
    return () => {
      if (tagRef.current) {
        tagRef.current.destroy();
        tagRef.current = null;
      }
    };
  }, [whitelist, enforceWhitelist, maxTags]);
  useEffect(() => {
    if (tagRef.current && defaultTags) {
      const currentTags = tagRef.current.value.map((tag) => tag.value);
      const newTags = defaultTags.filter((tag) => tag && tag.trim() !== "");
      if (JSON.stringify(currentTags) !== JSON.stringify(newTags)) {
        tagRef.current.removeAllTags();
        if (newTags.length > 0) {
          tagRef.current.addTags(newTags);
        }
      }
    }
  }, [defaultTags]);
  return /* @__PURE__ */ jsxs("div", { className: "w-full [&>tags]:!h-auto", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        ref: inputRef,
        defaultValue: value || "",
        placeholder: placeholder || "Enter tags...",
        className: cn(
          "border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        )
      }
    ),
    errorMessage && /* @__PURE__ */ jsx(InputError, { message: errorMessage })
  ] });
};
export {
  TagInput as T
};
