import * as prod from "react/jsx-runtime";
import { jsx, jsxs } from "react/jsx-runtime";
/* empty css               */
import { useState, useEffect, createElement, Fragment } from "react";
import { LuCheck, LuClipboard } from "react-icons/lu";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { codeToHast } from "shiki/bundle/full";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";
import { unified } from "unified";
import { visit } from "unist-util-visit";
const CopyButton = ({ code }) => {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    } catch (error) {
    }
  };
  return /* @__PURE__ */ jsx("button", { onClick: copyToClipboard, className: "invisible absolute top-2 right-2 z-20 bg-transparent p-2 group-hover:visible", children: copied ? /* @__PURE__ */ jsx(LuCheck, { size: 18 }) : /* @__PURE__ */ jsx(LuClipboard, { size: 18 }) });
};
const HeadingWithAnchor = ({ level, children, id }) => {
  const Heading = `h${level}`;
  return /* @__PURE__ */ jsx(Heading, { id, children });
};
async function highlight(code, lang) {
  const out = await codeToHast(code, {
    lang,
    themes: {
      light: "github-light-default",
      dark: "one-dark-pro"
    }
    //  structure: "inline",
  });
  return toJsxRuntime(out, {
    Fragment: prod.Fragment,
    jsx: prod.jsx,
    jsxs: prod.jsxs,
    components: {
      pre: ({ children }) => children
    }
  });
}
const SyntaxHighlighter = (props) => {
  const [nodes, setNodes] = useState(null);
  useEffect(() => {
    highlight(props.content, props.language).then(setNodes);
  }, [props.content, props.language]);
  if (!nodes) return /* @__PURE__ */ jsx("code", { ...props, children: props.content });
  return nodes;
};
const components = {
  h2: (props) => /* @__PURE__ */ jsx(HeadingWithAnchor, { level: 2, ...props }),
  h3: (props) => /* @__PURE__ */ jsx(HeadingWithAnchor, { level: 3, ...props }),
  h4: (props) => /* @__PURE__ */ jsx(HeadingWithAnchor, { level: 4, ...props }),
  img: ({ src, alt, width, ...props }) => /* @__PURE__ */ jsx("img", { src, alt: alt || "", width: props["data-width"], height: props["data-height"], className: "mx-auto rounded-lg" }),
  iframe: ({ ...props }) => /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("iframe", { ...props, allowFullScreen: true, className: "mx-auto aspect-video h-full w-full rounded-lg" }) }),
  pre: ({ children, ...props }) => {
    const childElement = children;
    const code = childElement.props.children;
    return /* @__PURE__ */ jsxs("div", { className: "group not-prose relative overflow-hidden rounded-lg border border-[#d1d9e0] dark:border-[#3d444d]", children: [
      /* @__PURE__ */ jsx(CopyButton, { code: String(code) }),
      /* @__PURE__ */ jsx("pre", { ...props, children })
    ] });
  },
  code: ({ children, ...props }) => {
    const match = /language-(\w+)/.exec(props.className || "");
    const code = String(children).replace(/\n$/, "");
    return match ? /* @__PURE__ */ jsx(SyntaxHighlighter, { language: match[1], content: code }) : /* @__PURE__ */ jsx("code", { ...props, children });
  },
  table: (props) => /* @__PURE__ */ jsx("table", { className: "not-prose mx-auto w-full table-auto border-collapse text-sm", ...props }),
  tr: (props) => /* @__PURE__ */ jsx("tr", { className: "border-b border-b-[#d1d9e0] last:border-b-0 dark:border-b-[#3d444d]", ...props }),
  td: (props) => /* @__PURE__ */ jsx("td", { className: "px-2.5 py-3.5", ...props }),
  th: (props) => /* @__PURE__ */ jsx("td", { className: "px-2.5 py-3.5 font-bold", ...props })
};
const addHeadingIds = () => {
  return (tree) => {
    visit(tree, "element", (node) => {
      if (["h2", "h3", "h4"].includes(node.tagName)) {
        const text = node.children[0].type === "text" ? node.children[0].value : "";
        node.properties = { ...node.properties, id: slugify(text) };
      }
    });
    return tree;
  };
};
function slugify(text) {
  return text.toLowerCase().normalize("NFKD").replace(/[^\w\s-]+/g, "").replace(/[-\s]+/g, "-").trim().replace(/^-+|-+$/g, "");
}
function createProcessor({ components: components2 } = {}) {
  return unified().use(rehypeParse, { fragment: true }).use(addHeadingIds).use(rehypeReact, {
    Fragment: prod.Fragment,
    jsx: prod.jsx,
    jsxs: prod.jsxs,
    components: components2
  });
}
const TiptapRenderer = ({ children }) => {
  const [Content, setContent] = useState(createElement(Fragment));
  useEffect(
    function() {
      (async function() {
        const processor = createProcessor({ components });
        const output = await processor.process(children);
        setContent(output.result);
      })();
    },
    [children]
  );
  return /* @__PURE__ */ jsx("div", { className: "tiptap ProseMirror !py-0", children: Content });
};
export {
  TiptapRenderer as T
};
