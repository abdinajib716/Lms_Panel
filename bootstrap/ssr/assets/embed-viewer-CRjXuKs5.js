import { jsx } from "react/jsx-runtime";
import { useRef, useEffect } from "react";
const EmbedViewer = (props) => {
  const containerRef = useRef(null);
  useEffect(() => {
    if (!containerRef.current) return;
    const iframe = containerRef.current.querySelector("iframe");
    if (iframe) {
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      iframe.style.border = "none";
    }
  }, [props.src]);
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref: containerRef,
      className: "relative h-full w-full overflow-hidden",
      dangerouslySetInnerHTML: {
        __html: props.src || ""
      }
    }
  );
};
export {
  EmbedViewer as default
};
