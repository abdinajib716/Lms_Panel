import { jsxs, jsx } from "react/jsx-runtime";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { L as LoadingButton } from "./loading-button-C4Hk_jCd.js";
import { t as theme } from "./theme-BnORSbS2.js";
import { C as Card, a as CardHeader, c as CardTitle, d as CardDescription, b as CardContent } from "./card-D8SB2yrw.js";
import { S as Separator } from "./separator-R7EO2G8T.js";
import { closeBrackets, autocompletion, completionKeymap, closeBracketsKeymap } from "@codemirror/autocomplete";
import { history, defaultKeymap, historyKeymap } from "@codemirror/commands";
import { css } from "@codemirror/lang-css";
import { bracketMatching } from "@codemirror/language";
import { highlightSelectionMatches } from "@codemirror/search";
import { EditorState } from "@codemirror/state";
import { lineNumbers, highlightActiveLine, highlightActiveLineGutter, keymap, EditorView } from "@codemirror/view";
import { usePage, useForm } from "@inertiajs/react";
import { useRef, useEffect } from "react";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "lucide-react";
import "./button-jZyzwgdo.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@lezer/highlight";
import "@radix-ui/react-separator";
const Style = () => {
  const { props } = usePage();
  const { translate } = props;
  const { settings, button } = translate;
  const initialFields = props.system.fields;
  const { data, setData, post, errors, processing } = useForm({
    ...props.system.fields,
    global_style: initialFields.global_style
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("settings.system.update", { id: props.system.id }), {
      showProgress: false,
      preserveScroll: true
    });
  };
  const editorRef = useRef(null);
  const viewRef = useRef(null);
  useEffect(() => {
    if (!editorRef.current) return;
    const startDoc = data.global_style || "";
    const state = EditorState.create({
      doc: startDoc,
      extensions: [
        lineNumbers(),
        highlightActiveLine(),
        highlightActiveLineGutter(),
        css(),
        theme,
        history(),
        bracketMatching(),
        closeBrackets(),
        autocompletion(),
        highlightSelectionMatches(),
        keymap.of([...defaultKeymap, ...historyKeymap, ...completionKeymap, ...closeBracketsKeymap]),
        EditorView.updateListener.of((v) => {
          if (v.docChanged) {
            const value = v.state.doc.toString();
            setData("global_style", value);
          }
        }),
        EditorView.lineWrapping
      ]
    });
    const view = new EditorView({ state, parent: editorRef.current });
    viewRef.current = view;
    return () => view.destroy();
  }, [editorRef]);
  return /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsxs(CardHeader, { className: "p-4 sm:p-6", children: [
      /* @__PURE__ */ jsx(CardTitle, { className: "flex items-center gap-2", children: settings.custom_global_style }),
      /* @__PURE__ */ jsx(CardDescription, { className: "hidden sm:block", children: settings.css_description })
    ] }),
    /* @__PURE__ */ jsx(Separator, {}),
    /* @__PURE__ */ jsx(CardContent, { className: "p-4 sm:p-6", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            ref: editorRef,
            className: "h-[420px] w-full rounded-md border",
            onMouseDown: (e) => {
              var _a;
              const target = e.target;
              if (!target.closest(".cm-editor")) {
                e.preventDefault();
                (_a = viewRef.current) == null ? void 0 : _a.focus();
              }
            }
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.global_style })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(LoadingButton, { loading: processing, type: "submit", children: button.save_changes }) })
    ] }) })
  ] });
};
export {
  Style as default
};
