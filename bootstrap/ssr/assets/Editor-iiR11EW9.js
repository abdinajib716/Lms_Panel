import { jsx, jsxs, Fragment } from "react/jsx-runtime";
/* empty css               */
import * as React from "react";
import React__default, { forwardRef, useState, useCallback, useImperativeHandle, useEffect, useRef, createContext, useContext, memo, useMemo } from "react";
import clsx from "clsx";
import { TooltipPortal, TooltipProvider, Tooltip as Tooltip$1, TooltipTrigger, TooltipContent } from "@radix-ui/react-tooltip";
import { TbTableRow, TbRowRemove, TbRowInsertBottom, TbRowInsertTop, TbTableColumn, TbColumnRemove, TbColumnInsertRight, TbColumnInsertLeft, TbArrowsHorizontal, TbTable, TbPlus, TbBan, TbPaletteOff, TbPalette, TbRuler, TbX, TbBrandYoutube, TbDownload, TbAlt, TbTextCaption, TbPhoto, TbTrash, TbLetterCase, TbCheck, TbClipboard, TbIndentDecrease, TbIndentIncrease, TbMinus, TbMinimize, TbMaximize, TbChevronDown, TbEraser, TbAlignCenter, TbAlignJustified, TbAlignRight, TbAlignLeft, TbArrowBackUp, TbArrowForwardUp, TbExternalLink, TbEdit, TbLinkOff, TbLink, TbCode, TbListDetails, TbListNumbers, TbList, TbSuperscript, TbSubscript, TbSourceCode, TbStrikethrough, TbUnderline, TbItalic, TbBold } from "react-icons/tb";
import { AiOutlineSplitCells, AiOutlineMergeCells } from "react-icons/ai";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { PopoverClose as PopoverClose$1 } from "@radix-ui/react-popover";
import { useEditor, EditorContent, useEditorState, isNodeActive, textblockTypeInputRule } from "@tiptap/react";
import parserHtml from "prettier/plugins/html";
import prettier from "prettier/standalone";
import { html } from "@codemirror/lang-html";
import { EditorState } from "@codemirror/state";
import { lineNumbers } from "@codemirror/view";
import { EditorView } from "codemirror";
import { t as theme } from "./theme-BnORSbS2.js";
import { createPortal } from "react-dom";
import { HexColorPicker } from "react-colorful";
import { BubbleMenuPlugin } from "@tiptap/extension-bubble-menu";
import { TextSelection, NodeSelection, Plugin, PluginKey } from "@tiptap/pm/state";
import { StarterKit } from "@tiptap/starter-kit";
import { CharacterCount } from "@tiptap/extension-character-count";
import { Underline } from "@tiptap/extension-underline";
import { Placeholder } from "@tiptap/extension-placeholder";
import { TextAlign } from "@tiptap/extension-text-align";
import { TextStyle } from "@tiptap/extension-text-style";
import { Subscript } from "@tiptap/extension-subscript";
import { Superscript } from "@tiptap/extension-superscript";
import "@tiptap/extension-bullet-list";
import "@tiptap/extension-ordered-list";
import { ListKeymap } from "@tiptap/extension-list-keymap";
import { Color } from "@tiptap/extension-color";
import { Highlight } from "@tiptap/extension-highlight";
import { CodeBlockLowlight } from "@tiptap/extension-code-block-lowlight";
import { findChildren, Node, mergeAttributes, getMarkRange, Extension, isNodeActive as isNodeActive$1 } from "@tiptap/core";
import { Decoration, DecorationSet } from "@tiptap/pm/view";
import highlight from "highlight.js/lib/core";
import { createLowlight } from "lowlight";
import plaintext from "highlight.js/lib/languages/plaintext";
import { DOMSerializer } from "@tiptap/pm/model";
import { Image as Image$1 } from "@tiptap/extension-image";
import { Link as Link$1 } from "@tiptap/extension-link";
import { Table as Table$1 } from "@tiptap/extension-table";
import { TableCell } from "@tiptap/extension-table-cell";
import { TableHeader } from "@tiptap/extension-table-header";
import { TableRow } from "@tiptap/extension-table-row";
const Toolbar = forwardRef(
  ({ children, dense, vertical = false, className, ...rest }, ref) => {
    const toolbarClassName = clsx(
      "rte-toolbar",
      dense && "rte-toolbar--dense",
      vertical && "rte-toolbar--vertical",
      className
    );
    return /* @__PURE__ */ jsx("div", { className: toolbarClassName, ...rest, ref, children });
  }
);
Toolbar.displayName = "Toolbar";
const ToolbarDivider = forwardRef(
  ({ horizontal, className, ...rest }, ref) => {
    const dividerClassName = clsx(
      "bg-neutral-200 dark:bg-neutral-800 rte-toolbar__divider",
      horizontal && "rte-toolbar__divider--horizontal",
      className
    );
    return /* @__PURE__ */ jsx("div", { className: dividerClassName, ref, ...rest });
  }
);
ToolbarDivider.displayName = "Toolbar.Divider";
const Tooltip = React__default.forwardRef(
  ({ children, content, portal = false, options, ...triggerProps }, ref) => {
    const Wrapper = portal ? TooltipPortal : React__default.Fragment;
    return /* @__PURE__ */ jsx(TooltipProvider, { delayDuration: 500, skipDelayDuration: 0, disableHoverableContent: false, children: /* @__PURE__ */ jsxs(Tooltip$1, { children: [
      /* @__PURE__ */ jsx(TooltipTrigger, { ref, asChild: true, ...triggerProps, children }),
      /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsx(TooltipContent, { className: "rte-tooltip", side: "top", align: "center", ...options, children: content }) })
    ] }) });
  }
);
Tooltip.displayName = "Tooltip";
const IconCorner = ({ size = 24, ...props }) => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      viewBox: "0 0 18 18",
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      ...props,
      children: /* @__PURE__ */ jsx("path", { d: "M15 .5A2.5 2.5 0 0 0 12.5 3v9.5H3a2.5 2.5 0 0 0 0 5h12a2.5 2.5 0 0 0 2.5-2.5V3A2.5 2.5 0 0 0 15 .5z" })
    }
  );
};
const IconInlineCode = ({ size = 24, ...props }) => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      ...props,
      children: [
        /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
        /* @__PURE__ */ jsx("path", { d: "M8 6.5l-5.5 5.5l5.5 5.5" }),
        /* @__PURE__ */ jsx("path", { d: "M16 6.5l5.5 5.5l-5.5 5.5" })
      ]
    }
  );
};
const IconQuote = ({ size = 24, ...props }) => {
  return /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", width: size, height: size, ...props, children: [
    /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx("path", { d: "M9 5a2 2 0 0 1 2 2v6c0 3.13 -1.65 5.193 -4.757 5.97a1 1 0 1 1 -.486 -1.94c2.227 -.557 3.243 -1.827 3.243 -4.03v-1h-3a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-3a2 2 0 0 1 2 -2z" }),
    /* @__PURE__ */ jsx("path", { d: "M18 5a2 2 0 0 1 2 2v6c0 3.13 -1.65 5.193 -4.757 5.97a1 1 0 1 1 -.486 -1.94c2.227 -.557 3.243 -1.827 3.243 -4.03v-1h-3a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-3a2 2 0 0 1 2 -2z" })
  ] });
};
const IconTextHighlight = ({ size = 24, ...props }) => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M20.9278 11.1274 10.8774 1.0203l-.1521.1504C9.9678.4215 8.9665 0 7.9017 0H7.9008C6.8259 0 5.8155.4189 4.9563 1.1782c-.7618.76-1.1807 1.7703-1.1807 2.8452 0 1.0649.4147 2.0667 1.164 2.8244L2.4378 9.3496c-.3433.3432-.5328.7998-.5328 1.2836 0 .4855.1878.9404.5293 1.2803l5.4518 5.4972c.3424.3424.7983.5302 1.2807.5302.4858 0 .9416-.1895 1.2849-.5336l6.2994-6.2807 4.1767-.0009v.0017ZM5.0038 4.0285c0-.7724.3012-1.499.85-2.0477.547-.5462 1.273-.8279 2.047-.8279h.0009c.7643 0 1.4792.297 2.0246.8313L5.847 6.0651c-.5369-.5443-.8432-1.2684-.8432-2.0366Zm10.0343 7.3047H3.5344l-.208-.2108c-.1291-.128-.1997-.298-.1997-.479 0-.1827.0715-.3527.2014-.4826l7.5323-7.5323 7.3304 7.3864-1.8442.0008-1.3085 1.3175Z",
            strokeWidth: "0.3",
            transform: "translate(0,0)",
            stroke: "currentColor"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M20.2574 13.4086c.3793.5669 1.6379 2.5006 1.6379 3.475 0 1.2034-.979 2.1843-2.1824 2.1843-1.2034 0-2.1824-.979-2.1824-2.1824 0-.9781 1.3012-2.9155 1.6984-3.4844l.5207-.7454.5078.7528Z",
            transform: "translate(1,1)"
          }
        )
      ]
    }
  );
};
const IconTextColor = ({ size = 24, ...props }) => {
  return /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", width: size, height: size, children: /* @__PURE__ */ jsx(
    "path",
    {
      d: "M11.1 1.65 4.17 19.25H7.03L8.68 14.96H15.72L17.37 19.25H20.23L13.3 1.65H11.1ZM9.56 12.32 12.2 5.28 14.84 12.32H9.56Z",
      transform: "scale(0.9) translate(0.5,0)"
    }
  ) });
};
const icons = {
  Bold: TbBold,
  Italic: TbItalic,
  Underline: TbUnderline,
  Strike: TbStrikethrough,
  Code: TbCode,
  SourceCode: TbSourceCode,
  Subscript: TbSubscript,
  Superscript: TbSuperscript,
  BulletList: TbList,
  OrderedList: TbListNumbers,
  TaskList: TbListDetails,
  CodeBlock: TbCode,
  CodeInline: IconInlineCode,
  Link: TbLink,
  Unlink: TbLinkOff,
  Edit: TbEdit,
  ExternalLink: TbExternalLink,
  Redo: TbArrowForwardUp,
  Undo: TbArrowBackUp,
  AlignLeft: TbAlignLeft,
  AlignRight: TbAlignRight,
  AlignJustify: TbAlignJustified,
  AlignCenter: TbAlignCenter,
  Eraser: TbEraser,
  ChevronDown: TbChevronDown,
  Maximize: TbMaximize,
  Minimize: TbMinimize,
  HorizontalRule: TbMinus,
  Indent: TbIndentIncrease,
  Outdent: TbIndentDecrease,
  Clipboard: TbClipboard,
  Check: TbCheck,
  Quote: IconQuote,
  Corner: IconCorner,
  LetterCase: TbLetterCase,
  Trash: TbTrash,
  Image: TbPhoto,
  ImageCaption: TbTextCaption,
  ImageAltText: TbAlt,
  Download: TbDownload,
  Youtube: TbBrandYoutube,
  Close: TbX,
  Ruler: TbRuler,
  TextHighlight: IconTextHighlight,
  TextColor: IconTextColor,
  Palette: TbPalette,
  PaletteOff: TbPaletteOff,
  Ban: TbBan,
  Plus: TbPlus,
  Table: TbTable,
  Stretch: TbArrowsHorizontal,
  HeaderRow: TbTableRow,
  HeaderCol: TbTableColumn,
  ColInsertLeft: TbColumnInsertLeft,
  ColInsertRight: TbColumnInsertRight,
  ColRemove: TbColumnRemove,
  ColHeader: TbTableColumn,
  RowInsertTop: TbRowInsertTop,
  RowInsertBottom: TbRowInsertBottom,
  RowRemove: TbRowRemove,
  RowHeader: TbTableRow,
  MergeCell: AiOutlineMergeCells,
  SplitCell: AiOutlineSplitCells
};
const Icon = ({ name, className, size = 20, ...props }) => {
  const Comp = icons[name];
  return /* @__PURE__ */ jsx(Comp, { size, className: clsx("rte-icon", className), ...props });
};
const Button = React__default.forwardRef(
  ({
    className,
    children,
    type = "button",
    variant = "primary",
    iconOnly,
    slotBefore,
    slotAfter,
    ...props
  }, ref) => {
    const classes = clsx(
      "rte-button",
      `rte-button--${variant}`,
      iconOnly && "rte-button--icon-only",
      className
    );
    return /* @__PURE__ */ jsxs("button", { ref, type, className: classes, ...props, children: [
      !iconOnly && slotBefore,
      children && (iconOnly || !slotAfter && !slotBefore ? children : /* @__PURE__ */ jsx("span", { className: "rte-button__text", children })),
      !iconOnly && slotAfter
    ] });
  }
);
Button.displayName = "Button";
const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuContent = React__default.forwardRef(({ className, align = "start", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Content,
  {
    ref,
    align,
    sideOffset,
    className: clsx("rte-dropdown", className),
    ...props
  }
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const DropdownMenuItem = React__default.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: clsx("rte-dropdown__item", inset && "rte-dropdown-item-inset", className),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
const DropdownMenuCheckboxItem = React__default.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: clsx("rte-dropdown__item", className),
    checked,
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { className: "rte-dropdown__icon", children: /* @__PURE__ */ jsx(Icon, { name: "Check", size: 16 }) })
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
const DropdownMenuSeparator = React__default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: clsx("rte-dropdown__separator", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverClose = PopoverPrimitive.Close;
const PopoverContent = React.forwardRef(({ className, align = "start", sideOffset = 4, ...props }, ref) => (
  //   <PopoverPrimitive.Portal>
  /* @__PURE__ */ jsx(
    PopoverPrimitive.Content,
    {
      ref,
      align,
      sideOffset,
      className: clsx("rte-popover", className),
      ...props
    }
  )
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;
const getShortcutKey = (key) => {
  const isMacOS = /macintosh|mac os x/gi.test(navigator.userAgent);
  if (key === "Mod") {
    return isMacOS ? "⌘" : "Ctrl";
  }
  if (key === "Shift") {
    return isMacOS ? "⇧" : key;
  }
  if (key === "Alt") {
    return isMacOS ? "⌥" : key;
  }
  return key;
};
function useForceUpdate() {
  const [, setState] = useState({});
  return useCallback(() => setState({}), []);
}
function useTiptapEditor({
  ref,
  placeholder,
  ...editorOptions
}) {
  const forceUpdate = useForceUpdate();
  const editor = useEditor(editorOptions, []);
  useImperativeHandle(
    ref,
    () => ({
      getInstance: () => editor
    }),
    [editor]
  );
  useEffect(() => {
    const isEditable = editorOptions.editable;
    if (!editor || editor.isEditable === isEditable) return;
    editor.setOptions({ editable: Boolean(isEditable) });
    forceUpdate();
  }, [editor, editorOptions.editable]);
  useEffect(() => {
    if (!editor) return;
    editor.setOptions({ editorProps: { placeholder } });
    forceUpdate();
  }, [editor, placeholder]);
  useEffect(() => {
    return () => {
      editor == null ? void 0 : editor.destroy();
    };
  }, []);
  return editor;
}
function removeHtmlEntities(html2) {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = html2;
  return textarea.value;
}
const formatHtml = async (content) => {
  try {
    const decodedContent = removeHtmlEntities(content).trim();
    return await prettier.format(decodedContent, {
      parser: "html",
      plugins: [parserHtml],
      printWidth: 80,
      htmlWhitespaceSensitivity: "ignore",
      bracketSameLine: true,
      singleAttributePerLine: true,
      useTabs: false,
      tabWidth: 2
    });
  } catch (error) {
    return content;
  }
};
function useCodeMirror({ initialContent, onChange }) {
  const editorRef = useRef(null);
  useEffect(() => {
    if (!editorRef.current) return;
    const state = EditorState.create({
      doc: initialContent,
      extensions: [lineNumbers(), html(), theme, EditorState.readOnly.of(true), EditorView.lineWrapping]
    });
    const view = new EditorView({
      state,
      parent: editorRef.current
    });
    return () => view.destroy();
  }, [initialContent]);
  return editorRef;
}
const SourceEditor = forwardRef(({ initialContent, onChange }, ref) => {
  const [formattedContent, setFormattedContent] = useState("");
  const editorRef = useCodeMirror({
    initialContent: formattedContent,
    onChange
  });
  useEffect(() => {
    formatHtml(initialContent).then(setFormattedContent);
  }, [initialContent]);
  useImperativeHandle(ref, () => editorRef.current, [editorRef]);
  return /* @__PURE__ */ jsx("div", { ref: editorRef });
});
SourceEditor.displayName = "SourceEditor";
const TiptapContext = createContext({});
const useTiptapContext = () => useContext(TiptapContext);
const TiptapProvider = ({
  children,
  editorOptions,
  editorProps,
  slotBefore,
  slotAfter
}) => {
  const contentElement = useRef(null);
  const editor = useTiptapEditor(editorOptions);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isSourceMode, setIsSourceMode] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  if (!editor) {
    return null;
  }
  const focusEditorViaContainer = (event) => {
    const target = event.target;
    const content = contentElement.current;
    if (content && target.contains(content)) {
      content.style.display = "flex";
      setTimeout(() => {
        content.style.display = "";
      }, 0);
    }
  };
  const editorContent = /* @__PURE__ */ jsxs(
    "div",
    {
      className: clsx(
        "rte-editor",
        isFullScreen && "rte-editor--fullscreen"
      ),
      children: [
        slotBefore,
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "rte-editor__container",
            onMouseDown: focusEditorViaContainer,
            children: isSourceMode ? /* @__PURE__ */ jsx(SourceEditor, { initialContent: editor.getHTML() || "" }) : /* @__PURE__ */ jsx(
              EditorContent,
              {
                ref: contentElement,
                editor,
                className: "rte-editor__content"
              }
            )
          }
        ),
        children,
        slotAfter
      ]
    }
  );
  return /* @__PURE__ */ jsx(
    TiptapContext.Provider,
    {
      value: {
        editor,
        contentElement,
        isFullScreen,
        isResizing,
        isSourceMode,
        setIsResizing,
        toggleFullScreen: () => setIsFullScreen((prev) => !prev),
        toggleSourceMode: () => setIsSourceMode((prev) => !prev)
      },
      children: editorContent
    }
  );
};
const MenuButton = React__default.forwardRef(
  ({
    active,
    icon,
    text,
    shortcuts,
    className,
    children,
    type,
    buttonType,
    hideText = true,
    hideArrow = false,
    tooltip = true,
    buttonClass,
    buttonStyle,
    dropdownClass,
    dropdownStyle,
    disabled,
    ...props
  }, ref) => {
    var _a;
    const { editor, contentElement } = useTiptapContext();
    const hasArrowIcon = type === "dropdown" || type === "popover" && !hideArrow;
    const hasIconOnly = hideText && !hasArrowIcon;
    const tooltipContent = useMemo(() => {
      if (tooltip === false) return null;
      const content = {
        title: typeof tooltip === "string" ? tooltip : text,
        shortcuts: shortcuts ? `(${shortcuts.map(getShortcutKey).join(" + ")})` : ""
      };
      return `${content.title} ${content.shortcuts}`;
    }, [tooltip, text, shortcuts]);
    const renderIcon = useMemo(
      () => icon ? /* @__PURE__ */ jsx(Icon, { name: icon, className: "rte-button-icon" }) : null,
      [icon]
    );
    const renderButton = /* @__PURE__ */ jsx(
      Button,
      {
        ref,
        type: buttonType,
        variant: "ghost",
        className: clsx("rte-menu__button", buttonClass),
        style: buttonStyle,
        iconOnly: hasIconOnly,
        slotBefore: !hasIconOnly && renderIcon,
        slotAfter: hasArrowIcon && /* @__PURE__ */ jsx("span", { className: "rte-icon-arrow", children: /* @__PURE__ */ jsx(Icon, { name: "ChevronDown", size: 16 }) }),
        onFocusCapture: (e) => e.stopPropagation(),
        "data-active": editor.isEditable && active || void 0,
        "aria-label": typeof tooltip === "string" ? tooltip : text,
        disabled: !editor.isEditable || disabled,
        ...props,
        children: hasIconOnly ? renderIcon : !hideText && text
      }
    );
    const renderContent = tooltipContent ? /* @__PURE__ */ jsx(
      Tooltip,
      {
        content: tooltipContent,
        options: { collisionBoundary: (_a = contentElement.current) == null ? void 0 : _a.parentElement },
        children: renderButton
      }
    ) : renderButton;
    if (type === "dropdown") {
      return /* @__PURE__ */ jsxs(DropdownMenu, { modal: false, children: [
        /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: renderContent }),
        /* @__PURE__ */ jsx(
          DropdownMenuContent,
          {
            className: dropdownClass,
            style: dropdownStyle,
            onCloseAutoFocus: (e) => e.preventDefault(),
            children
          }
        )
      ] });
    }
    if (type === "popover") {
      return /* @__PURE__ */ jsxs(Popover, { modal: false, children: [
        /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: renderContent }),
        /* @__PURE__ */ jsx(
          PopoverContent,
          {
            className: dropdownClass,
            style: dropdownStyle,
            onCloseAutoFocus: (e) => e.preventDefault(),
            children
          }
        )
      ] });
    }
    return renderContent;
  }
);
MenuButton.displayName = "MenuButton";
const MenuButton$1 = memo(MenuButton);
const COLUMNS = 7;
const ROWS = 5;
const TableBuilder = ({ onCreate }) => {
  const [gridSize, setGridSize] = useState({ cols: 1, rows: 1 });
  const isActiveCell = (rowIndex, colIndex) => rowIndex < gridSize.rows && colIndex < gridSize.cols;
  const grid = useMemo(
    () => Array.from({ length: ROWS }, (_, rowIndex) => /* @__PURE__ */ jsx("div", { className: "rte-tb__row", children: Array.from({ length: COLUMNS }, (_2, colIndex) => /* @__PURE__ */ jsx(
      "div",
      {
        className: clsx(
          "rte-tb__cell",
          isActiveCell(rowIndex, colIndex) && "rte-tb__cell--active"
        ),
        onMouseMove: () => setGridSize({ cols: colIndex + 1, rows: rowIndex + 1 }),
        onClick: () => onCreate == null ? void 0 : onCreate(gridSize)
      },
      `col-${colIndex}`
    )) }, `row-${rowIndex}`)),
    [gridSize]
  );
  return /* @__PURE__ */ jsxs("div", { className: "rte-tb__builder", children: [
    /* @__PURE__ */ jsx(PopoverClose$1, { asChild: true, children: /* @__PURE__ */ jsx("div", { className: "rte-tb__grid", children: grid }) }),
    /* @__PURE__ */ jsxs("div", { style: { textAlign: "center", marginBlock: 3 }, children: [
      gridSize.rows,
      " x ",
      gridSize.cols
    ] })
  ] });
};
const TableButton = () => {
  const { editor } = useTiptapContext();
  const state = useEditorState({
    editor,
    selector: (ctx) => {
      return {
        // disabled: !ctx.editor.can().insertTable(),
      };
    }
  });
  return /* @__PURE__ */ jsx(
    MenuButton$1,
    {
      icon: "Table",
      tooltip: "Table",
      type: "popover",
      hideArrow: true,
      ...state,
      children: /* @__PURE__ */ jsx(
        TableBuilder,
        {
          onCreate: ({ rows, cols }) => editor.chain().insertTable({ rows, cols, withHeaderRow: false }).focus().run()
        }
      )
    }
  );
};
const AlignLeftButton = () => {
  const { editor } = useTiptapContext();
  const state = useEditorState({
    editor,
    selector: (ctx) => ({
      active: ctx.editor.isActive({ textAlign: "left" }),
      disabled: !ctx.editor.can().setTextAlign("left")
    })
  });
  return /* @__PURE__ */ jsx(
    MenuButton$1,
    {
      icon: "AlignLeft",
      tooltip: "Left",
      shortcuts: ["Mod", "Shift", "L"],
      onClick: () => editor.chain().focus().setTextAlign("left").run(),
      ...state
    }
  );
};
const AlignCenterButton = () => {
  const { editor } = useTiptapContext();
  const state = useEditorState({
    editor,
    selector: (ctx) => ({
      active: ctx.editor.isActive({ textAlign: "center" }),
      disabled: !ctx.editor.can().setTextAlign("center")
    })
  });
  return /* @__PURE__ */ jsx(
    MenuButton$1,
    {
      icon: "AlignCenter",
      tooltip: "Center",
      shortcuts: ["Mod", "Shift", "E"],
      onClick: () => editor.chain().focus().setTextAlign("center").run(),
      ...state
    }
  );
};
const AlignRightButton = () => {
  const { editor } = useTiptapContext();
  const state = useEditorState({
    editor,
    selector: (ctx) => ({
      active: ctx.editor.isActive({ textAlign: "right" }),
      disabled: !ctx.editor.can().setTextAlign("right")
    })
  });
  return /* @__PURE__ */ jsx(
    MenuButton$1,
    {
      icon: "AlignRight",
      tooltip: "Right",
      shortcuts: ["Mod", "Shift", "R"],
      onClick: () => editor.chain().focus().setTextAlign("right").run(),
      ...state
    }
  );
};
const AlignJustifyButton = () => {
  const { editor } = useTiptapContext();
  const state = useEditorState({
    editor,
    selector: (ctx) => ({
      active: ctx.editor.isActive({ textAlign: "justify" }),
      disabled: !ctx.editor.can().setTextAlign("justify")
    })
  });
  return /* @__PURE__ */ jsx(
    MenuButton$1,
    {
      icon: "AlignJustify",
      tooltip: "Justify",
      shortcuts: ["Mod", "Shift", "F"],
      onClick: () => editor.chain().focus().setTextAlign("justify").run(),
      ...state
    }
  );
};
const AlignPopover = () => {
  const { editor } = useTiptapContext();
  const current = useEditorState({
    editor,
    selector: (ctx) => {
      if (ctx.editor.isActive({ textAlign: "right" })) return "AlignRight";
      else if (ctx.editor.isActive({ textAlign: "center" })) return "AlignCenter";
      else if (ctx.editor.isActive({ textAlign: "justify" })) return "AlignJustify";
      return "AlignLeft";
    }
  });
  const isDisabled = !editor.isEditable || !editor.can().setTextAlign("left");
  return /* @__PURE__ */ jsx(MenuButton$1, { type: "popover", icon: current, tooltip: "Alignment", disabled: isDisabled, children: /* @__PURE__ */ jsx(PopoverClose, { asChild: true, children: /* @__PURE__ */ jsxs(Toolbar, { dense: true, children: [
    /* @__PURE__ */ jsx(AlignLeftButton, {}),
    /* @__PURE__ */ jsx(AlignCenterButton, {}),
    /* @__PURE__ */ jsx(AlignRightButton, {}),
    /* @__PURE__ */ jsx(AlignJustifyButton, {})
  ] }) }) });
};
const BoldButton = () => {
  const { editor } = useTiptapContext();
  const state = useEditorState({
    editor,
    selector: (ctx) => {
      return {
        active: ctx.editor.isActive("bold"),
        disabled: !ctx.editor.can().toggleBold()
      };
    }
  });
  return /* @__PURE__ */ jsx(
    MenuButton$1,
    {
      icon: "Bold",
      tooltip: "Bold",
      shortcuts: ["Mod", "B"],
      onClick: () => editor.chain().focus().toggleBold().run(),
      ...state
    }
  );
};
const BulletListButton = () => {
  const { editor } = useTiptapContext();
  const state = useEditorState({
    editor,
    selector: (ctx) => {
      return {
        active: ctx.editor.isActive("bulletList"),
        disabled: !ctx.editor.isEditable
      };
    }
  });
  return /* @__PURE__ */ jsx(
    MenuButton$1,
    {
      icon: "BulletList",
      tooltip: "Bullet List",
      shortcuts: ["Mod", "Shift", "8"],
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      ...state
    }
  );
};
const HEADING_LEVELS = [1, 2, 3, 4, 5, 6];
const HeadingDropdown = () => {
  var _a;
  const { editor } = useTiptapContext();
  const current = useEditorState({
    editor,
    selector: (ctx) => {
      const { editor: editor2 } = ctx;
      if (editor2.isActive("paragraph")) return "p";
      const headingLevel = HEADING_LEVELS.find((level) => editor2.isActive("heading", { level }));
      if (headingLevel) return `h${headingLevel}`;
      return null;
    }
  });
  const options = useMemo(
    () => [
      {
        value: "p",
        label: "Paragraph"
      },
      {
        value: "h1",
        label: "Heading 1"
      },
      {
        value: "h2",
        label: "Heading 2"
      },
      {
        value: "h3",
        label: "Heading 3"
      },
      {
        value: "h4",
        label: "Heading 4"
      }
    ],
    []
  );
  const onSelect = useCallback(
    (value) => {
      if (value.startsWith("h")) {
        editor.chain().focus().setHeading({ level: +value[1] }).run();
      } else {
        editor.chain().focus().setParagraph().run();
      }
    },
    [editor]
  );
  const currentLabel = ((_a = options.find((item) => item.value === current)) == null ? void 0 : _a.label) || "Headings";
  return /* @__PURE__ */ jsx(
    MenuButton$1,
    {
      type: "dropdown",
      text: currentLabel,
      tooltip: "Headings",
      hideText: false,
      disabled: !editor.isEditable || !current,
      buttonStyle: { minWidth: "6.5rem" },
      dropdownClass: "rte-heading-dropdown",
      children: options.map((item) => /* @__PURE__ */ jsx(
        DropdownMenuItem,
        {
          "data-active": item.value === current || void 0,
          "data-heading": item.value,
          onSelect: () => onSelect(item.value),
          children: item.label
        },
        item.value
      ))
    }
  );
};
const InsertDropdown = () => {
  const { editor } = useTiptapContext();
  const insertCodeBlock = () => editor.chain().focus().setCodeBlock().run();
  const insertBlockquote = () => editor.chain().focus().setBlockquote().run();
  const insertYoutube = () => {
    const src = prompt("Embed Youtube Video", "https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    if (src) {
      editor.chain().focus().embedYoutube({ src }).run();
    }
  };
  return /* @__PURE__ */ jsxs(
    MenuButton$1,
    {
      type: "dropdown",
      tooltip: "Insert",
      disabled: !editor.isEditable,
      icon: "Plus",
      dropdownStyle: { minWidth: "8rem" },
      children: [
        /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsx(
          MenuButton$1,
          {
            text: "Blockquote",
            hideText: false,
            tooltip: false,
            icon: "Quote",
            onClick: insertBlockquote
          }
        ) }),
        /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsx(
          MenuButton$1,
          {
            text: "Code block",
            hideText: false,
            tooltip: false,
            icon: "CodeBlock",
            onClick: insertCodeBlock
          }
        ) }),
        /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsx(
          MenuButton$1,
          {
            text: "Youtube",
            hideText: false,
            tooltip: false,
            icon: "Youtube",
            onClick: insertYoutube
          }
        ) })
      ]
    }
  );
};
const ItalicButton = () => {
  const { editor } = useTiptapContext();
  const state = useEditorState({
    editor,
    selector: (ctx) => {
      return {
        active: ctx.editor.isActive("italic"),
        disabled: !ctx.editor.can().toggleItalic()
      };
    }
  });
  return /* @__PURE__ */ jsx(
    MenuButton$1,
    {
      icon: "Italic",
      tooltip: "Italic",
      shortcuts: ["Mod", "I"],
      onClick: () => editor.chain().focus().toggleItalic().run(),
      ...state
    }
  );
};
const LinkButton = () => {
  const { editor } = useTiptapContext();
  const state = useEditorState({
    editor,
    selector: (ctx) => ({
      active: ctx.editor.isActive("link"),
      disabled: !ctx.editor.can().setLink({ href: "" })
    })
  });
  return /* @__PURE__ */ jsx(
    MenuButton$1,
    {
      icon: "Link",
      tooltip: "Link",
      shortcuts: ["Mod", "K"],
      onClick: () => editor.commands.startEditLink(),
      ...state
    }
  );
};
const StrikeButton = () => {
  const { editor } = useTiptapContext();
  const state = useEditorState({
    editor,
    selector: (ctx) => {
      return {
        active: ctx.editor.isActive("strike"),
        disabled: !ctx.editor.can().toggleStrike()
      };
    }
  });
  return /* @__PURE__ */ jsx(
    MenuButton$1,
    {
      icon: "Strike",
      tooltip: "Strikethrough",
      shortcuts: ["Mod", "Shift", "S"],
      onClick: () => editor.chain().focus().toggleStrike().run(),
      ...state
    }
  );
};
const SubscriptButton = () => {
  const { editor } = useTiptapContext();
  const state = useEditorState({
    editor,
    selector: (ctx) => {
      return {
        active: ctx.editor.isActive("subscript"),
        disabled: !ctx.editor.can().toggleSubscript()
      };
    }
  });
  return /* @__PURE__ */ jsx(
    MenuButton$1,
    {
      icon: "Subscript",
      tooltip: "Subscript",
      shortcuts: ["Mod", ","],
      onClick: () => editor.chain().focus().toggleSubscript().run(),
      ...state
    }
  );
};
const SuperscriptButton = () => {
  const { editor } = useTiptapContext();
  const state = useEditorState({
    editor,
    selector: (ctx) => {
      return {
        active: ctx.editor.isActive("superscript"),
        disabled: !ctx.editor.can().toggleSuperscript()
      };
    }
  });
  return /* @__PURE__ */ jsx(
    MenuButton$1,
    {
      icon: "Superscript",
      tooltip: "Superscript",
      shortcuts: ["Mod", "."],
      onClick: () => editor.chain().focus().toggleSuperscript().run(),
      ...state
    }
  );
};
const CodeButton = () => {
  const { editor } = useTiptapContext();
  const state = useEditorState({
    editor,
    selector: (ctx) => {
      return {
        active: ctx.editor.isActive("code"),
        disabled: !ctx.editor.can().toggleCode()
      };
    }
  });
  return /* @__PURE__ */ jsx(
    MenuButton$1,
    {
      icon: "CodeInline",
      tooltip: "Inline code",
      shortcuts: ["Mod", "E"],
      onClick: () => editor.chain().focus().toggleCode().run(),
      ...state
    }
  );
};
const MoreMarkPopover = () => {
  const { editor } = useTiptapContext();
  const isDisabled = useEditorState({
    editor,
    selector: (ctx) => !ctx.editor.can().setStrike() && !ctx.editor.can().setSuperscript() && !ctx.editor.can().setSubscript() && !ctx.editor.can().setCode()
  });
  return /* @__PURE__ */ jsx(MenuButton$1, { type: "popover", icon: "LetterCase", tooltip: "More format", disabled: isDisabled, children: /* @__PURE__ */ jsx(PopoverClose, { asChild: true, children: /* @__PURE__ */ jsxs(Toolbar, { dense: true, children: [
    /* @__PURE__ */ jsx(StrikeButton, {}),
    /* @__PURE__ */ jsx(SuperscriptButton, {}),
    /* @__PURE__ */ jsx(SubscriptButton, {}),
    /* @__PURE__ */ jsx(CodeButton, {})
  ] }) }) });
};
const OrderedListButton = () => {
  const { editor } = useTiptapContext();
  const state = useEditorState({
    editor,
    selector: (ctx) => {
      return {
        active: ctx.editor.isActive("orderedList"),
        disabled: !ctx.editor.isEditable
      };
    }
  });
  return /* @__PURE__ */ jsx(
    MenuButton$1,
    {
      icon: "OrderedList",
      tooltip: "Numbered List",
      shortcuts: ["Mod", "Shift", "7"],
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      ...state
    }
  );
};
const RedoButton = () => {
  const { editor } = useTiptapContext();
  const state = useEditorState({
    editor,
    selector: (ctx) => ({
      disabled: !ctx.editor.can().redo()
    })
  });
  return /* @__PURE__ */ jsx(
    MenuButton$1,
    {
      icon: "Redo",
      tooltip: "Redo",
      shortcuts: ["Mod", "Y"],
      onClick: () => editor.chain().focus().redo().run(),
      ...state
    }
  );
};
function useMount() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
const Label = ({
  as: Comp = "label",
  children,
  className = ""
}) => {
  return /* @__PURE__ */ jsx(Comp, { className: clsx("rte-label", className), children });
};
const Input = React.forwardRef(
  ({ className, type = "text", ...props }, ref) => {
    return /* @__PURE__ */ jsx("input", { type, className: clsx("rte-input", className), ref, ...props });
  }
);
Input.displayName = "Input";
const ColorButton = ({ color, tooltip = true, active, onClick }) => {
  const content = /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      tabIndex: -1,
      "data-active": active ? "true" : void 0,
      className: "rte-color__btn",
      style: { background: color },
      onClick: () => onClick == null ? void 0 : onClick(color)
    }
  );
  return tooltip ? /* @__PURE__ */ jsx(Tooltip, { content: color, children: content }) : content;
};
const COLORS = [
  "#B12318",
  "#EB3323",
  "#F6C143",
  "#FFFE55",
  "#A0CD63",
  "#4FAD5B",
  "#4CAFEA",
  "#2D70BA",
  "#68389B"
];
const MORE_COLORS = [
  "#FFFFFF",
  "#000000",
  "#3B74EC",
  "#45A2EF",
  "#529867",
  "#CD4A3F",
  "#EA8D40",
  "#EEC543",
  "#8E45D0",
  "#F2F2F2",
  "#7F7F7F",
  "#CBDCFC",
  "#E8F6FE",
  "#EDFAF2",
  "#FCEAE9",
  "#FDF3EC",
  "#FEF9E5",
  "#FAECFE",
  "#EEEEEE",
  "#595959",
  "#CEEBFD",
  "#DDE9FE",
  "#CBE9D7",
  "#F7CBC9",
  "#FADDC7",
  "#FDEEB5",
  "#EBCAFC",
  "#BFBFBF",
  "#3F3F3F",
  "#A0BEFA",
  "#A7DCFC",
  "#A6D5B8",
  "#F2A19C",
  "#F5BC8C",
  "#FBE281",
  "#CB94F9",
  "#A5A5A5",
  "#262626",
  "#2452B2",
  "#3473A1",
  "#417A53",
  "#922B22",
  "#AD642A",
  "#9E8329",
  "#57297D",
  "#939393",
  "#0D0D0D",
  "#15316A",
  "#1C415A",
  "#284D34",
  "#511712",
  "#573213",
  "#635217",
  "#36194E"
];
const ColorPicker = (props) => {
  const [activeTab, setActiveTab] = useState("swatches");
  const [color, setColor] = useState(props.color);
  const normalizeColor = (color2) => {
    const normalized = color2.startsWith("#") ? color2 : `#${color2}`;
    return normalized.length === 4 ? `${normalized}${normalized.slice(1)}` : normalized;
  };
  const isColorEqual = (a, b) => normalizeColor(a).toUpperCase() === normalizeColor(b).toUpperCase();
  const handleColorChange = (color2) => {
    setColor(color2);
  };
  const handleApply = () => {
    var _a;
    const regex = /^#?[0-9A-F]{3,6}$/i;
    if (color && regex.test(color)) {
      (_a = props.onChange) == null ? void 0 : _a.call(props, normalizeColor(color));
    }
  };
  const renderColorList = (colors, label) => /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Label, { as: "span", children: label }),
    /* @__PURE__ */ jsx("div", { className: "rte-color__list", children: colors.map((item) => /* @__PURE__ */ jsx(
      ColorButton,
      {
        active: isColorEqual(item, color),
        color: item,
        onClick: () => handleColorChange(item)
      },
      item
    )) })
  ] });
  return /* @__PURE__ */ jsxs("div", { className: "rte-cp", children: [
    /* @__PURE__ */ jsx("div", { className: "rte-cp__tabs", children: ["swatches", "custom"].map((tab) => /* @__PURE__ */ jsx(
      Button,
      {
        variant: "ghost",
        "data-active": activeTab === tab || void 0,
        onClick: () => setActiveTab(tab),
        className: `rte-cp__tab`,
        children: tab.charAt(0).toUpperCase() + tab.slice(1)
      },
      tab
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "rte-cp__main", children: [
      activeTab === "swatches" && /* @__PURE__ */ jsxs("div", { className: "rte-cp-swatches", children: [
        renderColorList(COLORS, "Default Colors"),
        renderColorList(MORE_COLORS, "More Colors")
      ] }),
      activeTab === "custom" && /* @__PURE__ */ jsxs("div", { className: "rte-cp-custom", children: [
        /* @__PURE__ */ jsx(
          HexColorPicker,
          {
            className: "rte-cp-custom__picker",
            style: { width: "100%" },
            color,
            onChange: handleColorChange
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "rte-cp-custom__preview", children: [
          /* @__PURE__ */ jsx(ColorButton, { color, tooltip: false }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: color,
              style: { textTransform: "uppercase" },
              onChange: (e) => handleColorChange(e.target.value),
              autoFocus: true
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(PopoverClose$1, { asChild: true, children: /* @__PURE__ */ jsxs("div", { className: "rte-cp__actions", children: [
      /* @__PURE__ */ jsx(Button, { variant: "secondary", iconOnly: true, onClick: props.onReset, children: /* @__PURE__ */ jsx(Icon, { name: "PaletteOff" }) }),
      /* @__PURE__ */ jsx(Button, { style: { width: "100%" }, onClick: handleApply, children: "Apply" })
    ] }) })
  ] });
};
const TextColorButton = () => {
  const buttonRef = useRef(null);
  const mounted = useMount();
  const { editor } = useTiptapContext();
  const state = useEditorState({
    editor,
    selector: (ctx) => ({
      color: ctx.editor.getAttributes("textStyle").color || "DEFAULT",
      disabled: !ctx.editor.can().setColor("")
    })
  });
  const colorBarStyle = {
    position: "absolute",
    bottom: 1.5,
    insetInline: 4,
    height: 4,
    borderRadius: 4,
    pointerEvents: "none",
    background: state.color === "DEFAULT" ? "var(--rte-fg, black)" : state.color
  };
  const renderBar = mounted && buttonRef.current ? createPortal(/* @__PURE__ */ jsx("div", { style: colorBarStyle }), buttonRef.current) : null;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      MenuButton$1,
      {
        ref: buttonRef,
        type: "popover",
        icon: "TextColor",
        hideArrow: true,
        tooltip: "Color",
        disabled: state.disabled,
        children: /* @__PURE__ */ jsx(
          ColorPicker,
          {
            color: state.color,
            onChange: (color) => editor.chain().focus().setColor(color).run(),
            onReset: () => editor.chain().focus().unsetColor().run()
          }
        )
      }
    ),
    renderBar
  ] });
};
const TextHighlightButton = () => {
  const buttonRef = useRef(null);
  const mounted = useMount();
  const { editor } = useTiptapContext();
  const [highlightColor, setHighlightColor] = useState("DEFAULT");
  const state = useEditorState({
    editor,
    selector: (ctx) => ({
      color: ctx.editor.getAttributes("highlight").color || "DEFAULT",
      disabled: !ctx.editor.can().setHighlight()
    })
  });
  const highlightBarStyle = {
    position: "absolute",
    bottom: 1.5,
    insetInline: 4,
    height: 4,
    borderRadius: 4,
    pointerEvents: "none",
    background: state.color === "DEFAULT" ? "var(--rte-bg, white)" : state.color
  };
  const renderBar = mounted && buttonRef.current ? createPortal(/* @__PURE__ */ jsx("div", { style: highlightBarStyle }), buttonRef.current) : null;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      MenuButton$1,
      {
        ref: buttonRef,
        type: "popover",
        icon: "TextHighlight",
        hideArrow: true,
        tooltip: "Highlight",
        disabled: state.disabled,
        children: /* @__PURE__ */ jsx(
          ColorPicker,
          {
            color: state.color,
            onChange: (color) => editor.chain().focus().setHighlight({ color }).run(),
            onReset: () => editor.chain().focus().unsetHighlight().run()
          }
        )
      }
    ),
    renderBar
  ] });
};
const UnderlineButton = () => {
  const { editor } = useTiptapContext();
  const state = useEditorState({
    editor,
    selector: (ctx) => {
      return {
        active: ctx.editor.isActive("underline"),
        disabled: !ctx.editor.can().toggleUnderline()
      };
    }
  });
  return /* @__PURE__ */ jsx(
    MenuButton$1,
    {
      icon: "Underline",
      tooltip: "Underline",
      shortcuts: ["Mod", "U"],
      onClick: () => editor.chain().focus().toggleUnderline().run(),
      ...state
    }
  );
};
const UndoButton = () => {
  const { editor } = useTiptapContext();
  const state = useEditorState({
    editor,
    selector: (ctx) => ({
      disabled: !ctx.editor.can().undo()
    })
  });
  return /* @__PURE__ */ jsx(
    MenuButton$1,
    {
      icon: "Undo",
      tooltip: "Undo",
      shortcuts: ["Mod", "Z"],
      onClick: () => editor.chain().focus().undo().run(),
      ...state
    }
  );
};
const MenuBar = () => {
  return /* @__PURE__ */ jsx("div", { className: "rte-menu-bar", children: /* @__PURE__ */ jsxs(Toolbar, { dense: true, children: [
    /* @__PURE__ */ jsx(UndoButton, {}),
    /* @__PURE__ */ jsx(RedoButton, {}),
    /* @__PURE__ */ jsx(ToolbarDivider, {}),
    /* @__PURE__ */ jsx(HeadingDropdown, {}),
    /* @__PURE__ */ jsx(ToolbarDivider, {}),
    /* @__PURE__ */ jsx(BoldButton, {}),
    /* @__PURE__ */ jsx(ItalicButton, {}),
    /* @__PURE__ */ jsx(UnderlineButton, {}),
    /* @__PURE__ */ jsx(MoreMarkPopover, {}),
    /* @__PURE__ */ jsx(ToolbarDivider, {}),
    /* @__PURE__ */ jsx(TextColorButton, {}),
    /* @__PURE__ */ jsx(TextHighlightButton, {}),
    /* @__PURE__ */ jsx(ToolbarDivider, {}),
    /* @__PURE__ */ jsx(AlignPopover, {}),
    /* @__PURE__ */ jsx(BulletListButton, {}),
    /* @__PURE__ */ jsx(OrderedListButton, {}),
    /* @__PURE__ */ jsx(ToolbarDivider, {}),
    /* @__PURE__ */ jsx(LinkButton, {}),
    /* @__PURE__ */ jsx(TableButton, {}),
    /* @__PURE__ */ jsx(InsertDropdown, {})
  ] }) });
};
const MenuBar$1 = memo(MenuBar);
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const Resizer = () => {
  const { editor, contentElement, setIsResizing } = useTiptapContext();
  const controlRef = useRef(null);
  const resizeInfoRef = useRef({
    currentHeight: 0,
    currentWidth: 0,
    direction: 0,
    isResizing: false,
    ratio: 0,
    startHeight: 0,
    startWidth: 0,
    startX: 0,
    startY: 0
  });
  const nodeState = useEditorState({
    editor,
    selector: (ctx) => {
      if (!ctx.editor.isFocused || !ctx.editor.isEditable) return null;
      const nodeType = ctx.editor.isActive("image") ? "image" : ctx.editor.isActive("youtube") ? "youtube" : null;
      if (!nodeType) return null;
      const { selection } = ctx.editor.state;
      const node = ctx.editor.view.nodeDOM(selection.anchor);
      return { node, nodeType, nodePos: selection.anchor };
    }
  });
  const { maxWidth, minWidth } = useMemo(() => {
    var _a;
    const width = ((_a = contentElement.current) == null ? void 0 : _a.getBoundingClientRect().width) || 0;
    return { maxWidth: width, minWidth: width * 0.25 };
  }, [contentElement.current]);
  const startResizing = (event, direction) => {
    event.preventDefault();
    const resizeInfo = resizeInfoRef.current;
    resizeInfo.startX = event.clientX;
    resizeInfo.startY = event.clientY;
    resizeInfo.isResizing = true;
    resizeInfo.direction = direction;
    document.addEventListener("pointermove", handleResize);
    document.addEventListener("pointerup", stopResizing);
    setIsResizing(true);
  };
  const handleResize = (event) => {
    const node = nodeState == null ? void 0 : nodeState.node;
    const resizeInfo = resizeInfoRef.current;
    if (!node || !resizeInfo.isResizing) return;
    let diff = resizeInfo.startX - event.clientX;
    diff = resizeInfo.direction ? -diff : diff;
    const newWidth = clamp(resizeInfo.startWidth + diff, minWidth, maxWidth);
    const newHeight = newWidth / resizeInfo.ratio;
    resizeInfo.currentWidth = newWidth;
    resizeInfo.currentHeight = newHeight;
    node.style.width = `${newWidth}px`;
    node.style.height = `${newHeight}px`;
    updateControlPosition();
  };
  const stopResizing = () => {
    const resizeInfo = resizeInfoRef.current;
    if (!resizeInfo.isResizing) return;
    resizeInfo.isResizing = false;
    document.removeEventListener("pointermove", handleResize);
    document.removeEventListener("pointerup", stopResizing);
    setIsResizing(false);
    requestAnimationFrame(
      () => editor == null ? void 0 : editor.commands.updateAttributes(nodeState.nodeType, {
        width: Math.round(resizeInfo.currentWidth / maxWidth * 100)
      })
    );
  };
  const updateControlPosition = useCallback(() => {
    const node = nodeState.node;
    const control = controlRef.current;
    const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = node;
    requestAnimationFrame(() => {
      control.style.width = `${offsetWidth}px`;
      control.style.height = `${offsetHeight}px`;
      control.style.transform = `translate(${offsetLeft}px, ${offsetTop}px)`;
    });
  }, [nodeState]);
  useEffect(() => {
    const node = nodeState == null ? void 0 : nodeState.node;
    if (!node) return;
    const { width, height } = node.getBoundingClientRect();
    const resizeInfo = resizeInfoRef.current;
    resizeInfo.startWidth = width;
    resizeInfo.startHeight = height;
    resizeInfo.currentWidth = width;
    resizeInfo.currentHeight = height;
    resizeInfo.ratio = width / height;
    updateControlPosition();
  }, [nodeState]);
  if (!nodeState || !contentElement.current) return;
  const renderResizerHandle = (cursor, direction, position) => /* @__PURE__ */ jsx(
    "div",
    {
      className: "rte-resizer__control",
      style: { cursor, ...position },
      onPointerDown: (event) => startResizing(event, direction)
    }
  );
  return createPortal(
    /* @__PURE__ */ jsxs("div", { ref: controlRef, className: "rte-resizer", children: [
      renderResizerHandle("nw-resize", 0, { width: 12, left: -10, top: -10 }),
      renderResizerHandle("sw-resize", 0, { width: 12, left: -10, bottom: -10 }),
      renderResizerHandle("sw-resize", 1, { width: 12, right: -10, top: -10 }),
      renderResizerHandle("nw-resize", 1, { width: 12, right: -10, bottom: -10 })
    ] }),
    contentElement.current
  );
};
const Resizer$1 = memo(Resizer);
const StatusBar = () => {
  const {
    editor,
    isFullScreen,
    isSourceMode,
    toggleFullScreen,
    toggleSourceMode
  } = useTiptapContext();
  const counter = useEditorState({
    editor,
    selector: (ctx) => ({
      words: ctx.editor.storage.characterCount.words(),
      characters: ctx.editor.storage.characterCount.characters()
    })
  });
  return /* @__PURE__ */ jsxs("div", { className: "rte-status-bar", children: [
    /* @__PURE__ */ jsx(Toolbar, { dense: true, children: /* @__PURE__ */ jsx(
      MenuButton$1,
      {
        icon: isFullScreen ? "Minimize" : "Maximize",
        text: "Fullscreen",
        active: isFullScreen,
        onClick: toggleFullScreen
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "rte-counter", children: [
      /* @__PURE__ */ jsxs("span", { className: "rte-word-count", children: [
        "Words: ",
        counter.words
      ] }),
      /* @__PURE__ */ jsxs("span", { className: "rte-charater", children: [
        "Characters: ",
        counter.characters
      ] })
    ] })
  ] });
};
const StatusBar$1 = memo(StatusBar);
const cssVar = (name, value) => {
  document.documentElement.style.setProperty(name, value);
};
function throttle(func, wait) {
  let timeout = null;
  let lastArgs = null;
  return (...args) => {
    if (!timeout) {
      func(...args);
      timeout = setTimeout(() => {
        timeout = null;
        if (lastArgs) {
          func(...lastArgs);
          lastArgs = null;
        }
      }, wait);
    } else {
      lastArgs = args;
    }
  };
}
const BubbleMenu = ({ editor, className, children, ...props }) => {
  const menuEl = useRef(document.createElement("div"));
  useEffect(() => {
    if (editor == null ? void 0 : editor.isDestroyed) {
      return;
    }
    const { pluginKey = "bubbleMenu", tippyOptions = {}, updateDelay, shouldShow = null } = props;
    const menuEditor = editor;
    if (!menuEditor) {
      console.warn(
        "BubbleMenu component is not rendered inside of an editor component or does not have editor prop."
      );
      return;
    }
    const plugin = BubbleMenuPlugin({
      updateDelay,
      editor: menuEditor || editor,
      element: menuEl.current,
      pluginKey,
      shouldShow,
      tippyOptions
    });
    menuEditor.registerPlugin(plugin);
    return () => {
      menuEditor.unregisterPlugin(pluginKey);
      window.requestAnimationFrame(() => {
        if (menuEl.current.parentNode) {
          menuEl.current.parentNode.removeChild(menuEl.current);
        }
      });
    };
  }, [editor]);
  const portal = createPortal(
    /* @__PURE__ */ jsx("div", { className: clsx("rte-bubble-menu", className), children }),
    menuEl.current
  );
  return portal;
};
const CODE_BLOCK_LANGUAGUE_SYNTAX_DEFAULT = "plaintext";
const CODE_BLOCK_LANGUAGUES = [
  { syntax: "bash", alias: "sh", label: "Bash" },
  { syntax: "c", alias: "h", label: "C" },
  { syntax: "csharp", alias: "cs, c#, dotnet", label: "C#" },
  { syntax: "css", label: "CSS" },
  { syntax: "go", alias: "golang", label: "Go" },
  { syntax: "graphql", alias: "gql", label: "GraphQL" },
  { syntax: "java", alias: "jsp", label: "Java" },
  { syntax: "javascript", alias: "js, jsx, mjs, cjs", label: "Javascript" },
  { syntax: "json", label: "JSON" },
  { syntax: "kotlin", alias: "kt, kts", label: "Kotlin" },
  { syntax: "less", label: "Less" },
  { syntax: "makefile", alias: "mk, mak, make", label: "Makefile" },
  { syntax: "markdown", alias: "md, mkdown, mkd", label: "Markdown" },
  {
    syntax: "objectivec",
    alias: "mm, objc, obj-c, obj-c++, objective-c++",
    label: "Objective-C"
  },
  { syntax: "php", label: "PHP" },
  { syntax: "plaintext", alias: "text, txt", label: "Text" },
  { syntax: "python", alias: "py, gyp, ipython", label: "Python" },
  { syntax: "scss", label: "SCSS" },
  { syntax: "shell", alias: "console, shellsession", label: "Shell" },
  { syntax: "sql", label: "SQL" },
  { syntax: "typescript", alias: "ts, tsx", label: "TypeScript" },
  { syntax: "vbnet", alias: "vb", label: "VB .NET" },
  {
    syntax: "xml",
    alias: "html, xhtml, rss, atom, xjb, xsd, xsl, plist, wsf, svg",
    label: "HTML, XML"
  }
];
const CodeDropdown = ({ value, onSelect }) => {
  var _a, _b;
  const { contentElement } = useTiptapContext();
  const [search, setSearch] = useState("");
  const options = CODE_BLOCK_LANGUAGUES.map((item) => ({
    label: item.label,
    value: item.syntax
  }));
  const filterOptions = useMemo(() => {
    if (!search) return options;
    return options.filter((item) => item.label.includes(search));
  }, [options, search]);
  return /* @__PURE__ */ jsxs(
    MenuButton$1,
    {
      type: "popover",
      text: (_a = options.find((item) => item.value === value)) == null ? void 0 : _a.label,
      hideText: false,
      tooltip: false,
      buttonStyle: { minWidth: "6rem" },
      dropdownClass: "rte-code-dropdown",
      dropdownStyle: {
        minWidth: "10rem"
      },
      children: [
        /* @__PURE__ */ jsx(
          Input,
          {
            className: "code-search",
            placeholder: "Seach language...",
            style: { width: "10rem" },
            value: search,
            onChange: (e) => setSearch(e.target.value.trim())
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "code-list",
            style: {
              maxHeight: `${(((_b = contentElement.current) == null ? void 0 : _b.clientHeight) || 0) * 0.375}px`
            },
            children: filterOptions.map((item) => /* @__PURE__ */ jsx(PopoverClose, { asChild: true, children: /* @__PURE__ */ jsxs(
              "div",
              {
                className: "code-item",
                onClick: () => {
                  onSelect(item.value);
                  setSearch("");
                },
                children: [
                  item.label,
                  item.value === value && /* @__PURE__ */ jsx(
                    Icon,
                    {
                      name: "Check",
                      className: "code-item__indicator",
                      size: 14,
                      strokeWidth: 2.5
                    }
                  )
                ]
              }
            ) }, item.value))
          }
        )
      ]
    }
  );
};
function useCopyToClipboard() {
  const [isCopied, setIsCopied] = useState(false);
  const timeoutId = useRef(null);
  const copy = async (value) => {
    if (isCopied) return;
    try {
      await navigator.clipboard.writeText(value);
      setIsCopied(true);
      timeoutId.current = setTimeout(() => setIsCopied(false), 2500);
    } catch (error) {
      setIsCopied(false);
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    }
  };
  useEffect(() => {
    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, []);
  return { isCopied, copy };
}
const getNodeContainer = (editor, selector) => {
  const {
    view,
    state: {
      selection: { from }
    }
  } = editor;
  const node = view.nodeDOM(from) || view.domAtPos(from).node;
  let container = node;
  while (container && (container == null ? void 0 : container.nodeName.toLocaleLowerCase()) !== selector.toLocaleLowerCase()) {
    container = container.parentElement;
  }
  return container;
};
const CodeBlockMenu = () => {
  const { editor, contentElement } = useTiptapContext();
  const { isCopied, copy } = useCopyToClipboard();
  const language = useEditorState({
    editor,
    selector: (ctx) => {
      if (ctx.editor.isActive("codeBlock")) return ctx.editor.getAttributes("codeBlock").language;
      return null;
    }
  });
  const shouldShow = useCallback(({ editor: editor2 }) => {
    return editor2.isActive("codeBlock");
  }, []);
  const handleSelect = useCallback(
    (value) => editor.commands.updateAttributes("codeBlock", { language: value }),
    [editor]
  );
  const handleCopy = useCallback(() => {
    const node = getNodeContainer(editor, "pre");
    if (node == null ? void 0 : node.textContent) {
      copy(node.textContent);
    }
  }, [editor]);
  const handleDelete2 = useCallback(() => {
    editor.chain().focus().deleteNode("codeBlock").run();
  }, [editor]);
  const getReferenceClientRect = useCallback(() => {
    const node = getNodeContainer(editor, "pre");
    return (node == null ? void 0 : node.getBoundingClientRect()) || new DOMRect(-1e3, -1e3, 0, 0);
  }, [editor]);
  return /* @__PURE__ */ jsx(
    BubbleMenu,
    {
      editor,
      pluginKey: "code-block-bubble",
      shouldShow,
      updateDelay: 100,
      tippyOptions: {
        placement: "top",
        maxWidth: "auto",
        appendTo: () => contentElement.current,
        getReferenceClientRect
      },
      children: /* @__PURE__ */ jsxs(Toolbar, { children: [
        /* @__PURE__ */ jsx(CodeDropdown, { value: language, onSelect: handleSelect }),
        /* @__PURE__ */ jsx(ToolbarDivider, {}),
        /* @__PURE__ */ jsx(
          MenuButton$1,
          {
            icon: isCopied ? "Check" : "Clipboard",
            tooltip: "Copy code",
            onClick: handleCopy
          }
        ),
        /* @__PURE__ */ jsx(MenuButton$1, { icon: "Trash", tooltip: "Delete code", onClick: handleDelete2 })
      ] })
    }
  );
};
memo(CodeBlockMenu);
const AltTextEdit = ({ initialText, onApply, onCancel }) => {
  const [text, setText] = useState(initialText || "");
  const onSubmit = (event) => {
    event.preventDefault();
    onApply(text);
  };
  return /* @__PURE__ */ jsxs("form", { className: "rte-text-alternative__form", onSubmit, children: [
    /* @__PURE__ */ jsx(
      Input,
      {
        value: text,
        onChange: (e) => setText(e.target.value),
        placeholder: "Text alternative",
        autoFocus: true
      }
    ),
    /* @__PURE__ */ jsx(MenuButton$1, { buttonType: "submit", icon: "Check", tooltip: false }),
    /* @__PURE__ */ jsx(MenuButton$1, { icon: "Close", tooltip: false, onClick: onCancel })
  ] });
};
const SizeDropdown = ({ value, onChange }) => {
  const options = [null, 25, 50, 75, 100];
  return /* @__PURE__ */ jsx(
    MenuButton$1,
    {
      type: "dropdown",
      buttonStyle: { width: "6.5rem" },
      dropdownStyle: { width: "7rem" },
      icon: "Ruler",
      text: value ? `${value}%` : "Default",
      hideText: false,
      tooltip: false,
      children: options.map((option, index) => /* @__PURE__ */ jsx(
        DropdownMenuItem,
        {
          "data-active": option == value || void 0,
          onSelect: () => onChange(option),
          children: option ? `${option}% width` : "Default"
        },
        index
      ))
    }
  );
};
const ImageMenu = () => {
  const tippyInstance = useRef(null);
  const { editor, isResizing, contentElement } = useTiptapContext();
  const [isEditText, setIsEditText] = useState(false);
  const image = useEditorState({
    editor,
    selector: (ctx) => {
      if (!ctx.editor.isActive("image") && !ctx.editor.isActive("imageFigure")) {
        return null;
      }
      const { node, pos } = getImageOrFigureNode(ctx.editor.state.selection);
      if (!node) return null;
      return {
        pos,
        src: node.attrs.src,
        alt: node.attrs.alt,
        width: node.attrs.width,
        hasCaption: ctx.editor.isActive("imageFigure")
      };
    }
  });
  const getReferenceClientRect = useCallback(() => {
    const selector = editor.isActive("imageFigure") ? "figure" : "img";
    const node = getNodeContainer(editor, selector);
    return (node == null ? void 0 : node.getBoundingClientRect()) || new DOMRect(-1e3, -1e3, 0, 0);
  }, [editor]);
  const updateImageAttr = (name, value) => {
    const {
      state: { selection }
    } = editor;
    return editor.chain().command(({ commands }) => {
      if ((image == null ? void 0 : image.pos) && selection.from !== image.pos) return commands.setNodeSelection(image.pos);
      return true;
    }).updateAttributes("image", { [name]: value }).focus().run();
  };
  const toggleCaption = () => editor.chain().focus()[(image == null ? void 0 : image.hasCaption) ? "figureToImage" : "imageToFigure"]().run();
  const toggleEditAltText = () => {
    setIsEditText((prev) => !prev);
    requestAnimationFrame(() => {
      var _a, _b;
      return (_b = (_a = tippyInstance.current) == null ? void 0 : _a.popperInstance) == null ? void 0 : _b.update();
    });
  };
  const setAltText = (value) => {
    updateImageAttr("alt", value);
    toggleEditAltText();
  };
  const setSize = (value) => updateImageAttr("width", value);
  const removeImage = () => editor.chain().focus().removeImage().run();
  const downloadImage = useCallback(async () => {
    if (!(image == null ? void 0 : image.src)) return;
    try {
      const res = await fetch(image.src);
      if (!res.ok) throw new Error("Failed to fetch the image.");
      const blob = await res.blob();
      const extension = blob.type.split(/\/|\+/)[1];
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `image.${extension}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
    }
  }, [image]);
  if (isResizing) return null;
  return /* @__PURE__ */ jsx(
    BubbleMenu,
    {
      editor,
      pluginKey: "image-bubble",
      shouldShow: ({ editor: editor2 }) => editor2.isActive("imageFigure") || editor2.isActive("image"),
      updateDelay: 100,
      tippyOptions: {
        maxWidth: "auto",
        offset: [0, 15],
        //   offset: ({ placement }) => {
        //     return placement == "top" ? [0, 15] : [0, 10];
        //   },
        appendTo: () => contentElement.current,
        getReferenceClientRect,
        onShow: (instance) => {
          tippyInstance.current = instance;
        },
        onDestroy: () => tippyInstance.current = null,
        onHidden: () => setIsEditText(false)
      },
      children: isEditText ? /* @__PURE__ */ jsx(
        AltTextEdit,
        {
          initialText: image == null ? void 0 : image.alt,
          onApply: setAltText,
          onCancel: () => {
            editor.commands.focus();
            toggleEditAltText();
          }
        }
      ) : /* @__PURE__ */ jsxs(Toolbar, { children: [
        /* @__PURE__ */ jsx(MenuButton$1, { text: "Alt text", hideText: false, tooltip: "Alternative text", onClick: toggleEditAltText }),
        /* @__PURE__ */ jsx(
          MenuButton$1,
          {
            icon: "ImageCaption",
            tooltip: `Caption: ${(image == null ? void 0 : image.hasCaption) ? "ON" : "OFF"}`,
            active: image == null ? void 0 : image.hasCaption,
            onClick: toggleCaption
          }
        ),
        /* @__PURE__ */ jsx(ToolbarDivider, {}),
        /* @__PURE__ */ jsx(SizeDropdown, { value: image == null ? void 0 : image.width, onChange: setSize }),
        /* @__PURE__ */ jsx(ToolbarDivider, {}),
        /* @__PURE__ */ jsx(MenuButton$1, { icon: "Download", tooltip: "Download", onClick: downloadImage }),
        /* @__PURE__ */ jsx(MenuButton$1, { icon: "Trash", tooltip: "Delete", onClick: removeImage })
      ] })
    }
  );
};
const getImageOrFigureNode = (selection) => {
  let node = null;
  let pos = null;
  if (selection instanceof TextSelection) {
    const $anchor = selection.$anchor;
    const figure = $anchor.node(-1);
    node = figure.firstChild;
    pos = $anchor.before(-1) + 1;
  } else if (selection instanceof NodeSelection) {
    node = selection.node;
    pos = selection.from;
    if (node.type.name === "imageFigure") {
      node = node.firstChild;
      pos += 1;
    }
  }
  return { node, pos };
};
const LinkEdit = ({ initialUrl, initialText, isCreate, onApply, onCancel }) => {
  const [url, setUrl] = useState(initialUrl || "");
  const [text, setText] = useState(initialText || "");
  const [canSubmit, setCanSubmit] = useState(isCreate);
  const onSubmit = (event) => {
    event.preventDefault();
    if (canSubmit) {
      onApply(url, text);
    }
  };
  useEffect(() => {
    if (!isCreate) {
      setCanSubmit(url && url !== initialUrl || text !== initialText);
    }
  }, [text, url]);
  return /* @__PURE__ */ jsxs("form", { className: "rte-link__form", onSubmit, children: [
    /* @__PURE__ */ jsx(Label, { className: "rte-link__label", children: "URL" }),
    /* @__PURE__ */ jsx(
      Input,
      {
        value: url,
        onChange: (e) => setUrl(e.target.value),
        className: "rte-link__input",
        placeholder: "Paste link",
        type: "url",
        required: true,
        autoFocus: true
      }
    ),
    /* @__PURE__ */ jsx(Label, { className: "rte-link__label", children: "Display Text" }),
    /* @__PURE__ */ jsx(
      Input,
      {
        value: text,
        onChange: (e) => setText(e.target.value),
        className: "rte-link__input",
        placeholder: "Enter link text"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "rte-link__actions", children: [
      /* @__PURE__ */ jsx(Button, { variant: "secondary", onClick: onCancel, children: "Cancel" }),
      /* @__PURE__ */ jsx(Button, { type: "submit", disabled: !canSubmit, children: "Apply" })
    ] })
  ] });
};
const LinkView = ({ url, onEdit, onRemove }) => {
  const { copy, isCopied } = useCopyToClipboard();
  return /* @__PURE__ */ jsxs(Toolbar, { children: [
    /* @__PURE__ */ jsx(MenuButton$1, { text: "Edit link", hideText: false, onClick: onEdit }),
    /* @__PURE__ */ jsx(
      MenuButton$1,
      {
        icon: "ExternalLink",
        text: "Open in new tab",
        onClick: () => window.open(url, "_blank")
      }
    ),
    /* @__PURE__ */ jsx(
      MenuButton$1,
      {
        icon: isCopied ? "Check" : "Clipboard",
        text: isCopied ? "Copied" : "Copy link",
        onClick: () => copy(url)
      }
    ),
    /* @__PURE__ */ jsx(MenuButton$1, { icon: "Unlink", text: "Remove link", onClick: onRemove })
  ] });
};
const LinkMenu = () => {
  const { editor, contentElement } = useTiptapContext();
  const [isEditing, setIsEditing] = useState(false);
  const mode = useRef(0);
  const link = useEditorState({
    editor,
    selector: (context) => {
      mode.current = context.editor.storage.link.mode;
      if (!context.editor.isActive("link")) return null;
      const {
        state: { selection, doc }
      } = context.editor;
      const url = context.editor.getAttributes("link").href;
      const text = doc.textBetween(selection.from, selection.to);
      return { url, text };
    }
  });
  const shouldShow = useCallback(({ editor: editor2, from, to }) => {
    setIsEditing(mode.current == -1);
    return editor2.isActive("link") && (mode.current == -1 || from !== to);
  }, []);
  const applyLink = useCallback((url, text) => {
    editor.chain().confirmEditLink({
      href: url,
      text: text || url
    }).run();
    setIsEditing(false);
  }, []);
  const removeLink = useCallback(() => {
    editor.chain().focus().unsetLink().run();
  }, [editor]);
  const startEdit = useCallback(() => {
    setIsEditing(true);
  }, []);
  const cancelEdit = useCallback(() => {
    if (mode.current == -1) {
      editor.commands.confirmEditLink();
    } else {
      setIsEditing(false);
    }
  }, [editor]);
  return /* @__PURE__ */ jsx(
    BubbleMenu,
    {
      editor,
      pluginKey: "link-menu",
      updateDelay: 100,
      shouldShow,
      tippyOptions: {
        placement: "bottom-start",
        duration: 100,
        appendTo: () => contentElement.current,
        onHidden: () => setIsEditing(false)
      },
      children: isEditing ? /* @__PURE__ */ jsx(
        LinkEdit,
        {
          initialUrl: link == null ? void 0 : link.url,
          initialText: link == null ? void 0 : link.text,
          isCreate: mode.current === -1,
          onApply: applyLink,
          onCancel: cancelEdit
        }
      ) : /* @__PURE__ */ jsx(LinkView, { url: link == null ? void 0 : link.url, onEdit: startEdit, onRemove: removeLink })
    }
  );
};
memo(LinkMenu);
const languagesLoader = {
  bash: () => import("highlight.js/lib/languages/bash"),
  c: () => import("highlight.js/lib/languages/c"),
  csharp: () => import("highlight.js/lib/languages/csharp"),
  css: () => import("highlight.js/lib/languages/css"),
  go: () => import("highlight.js/lib/languages/go"),
  graphql: () => import("highlight.js/lib/languages/graphql"),
  java: () => import("highlight.js/lib/languages/java"),
  javascript: () => import("highlight.js/lib/languages/javascript"),
  json: () => import("highlight.js/lib/languages/json"),
  kotlin: () => import("highlight.js/lib/languages/kotlin"),
  less: () => import("highlight.js/lib/languages/less"),
  makefile: () => import("highlight.js/lib/languages/makefile"),
  markdown: () => import("highlight.js/lib/languages/markdown"),
  objectivec: () => import("highlight.js/lib/languages/objectivec"),
  php: () => import("highlight.js/lib/languages/php"),
  plaintext: () => import("highlight.js/lib/languages/plaintext"),
  python: () => import("highlight.js/lib/languages/python"),
  scss: () => import("highlight.js/lib/languages/scss"),
  shell: () => import("highlight.js/lib/languages/shell"),
  sql: () => import("highlight.js/lib/languages/sql"),
  typescript: () => import("highlight.js/lib/languages/typescript"),
  vbnet: () => import("highlight.js/lib/languages/vbnet"),
  xml: () => import("highlight.js/lib/languages/xml")
};
async function loadLanguage(languageName, lowlight2) {
  var _a;
  if (lowlight2.registered(languageName)) return false;
  try {
    const { default: language } = await ((_a = languagesLoader[languageName]) == null ? void 0 : _a.call(languagesLoader));
    lowlight2.register(languageName, language);
    return true;
  } catch (error) {
    return false;
  }
}
function findLanguage(value) {
  const lowercase = (value == null ? void 0 : value.toLowerCase()) || CODE_BLOCK_LANGUAGUE_SYNTAX_DEFAULT;
  const language = CODE_BLOCK_LANGUAGUES.find((language2) => {
    var _a;
    return language2.syntax === lowercase || ((_a = language2.alias) == null ? void 0 : _a.split(", ").includes(lowercase));
  });
  return language;
}
const LowlightPluginKey = new PluginKey("lowlight");
function LowlightPlugin({ name, lowlight: lowlight2, defaultLanguage }) {
  const lowlightPlugin = new Plugin({
    key: LowlightPluginKey,
    state: {
      init(_, { doc }) {
        return getDecorations({
          doc,
          name,
          lowlight: lowlight2,
          defaultLanguage
        });
      },
      apply(tr, decorationSet, oldState, newState) {
        const oldNodeName = oldState.selection.$head.parent.type.name;
        const newNodeName = newState.selection.$head.parent.type.name;
        const oldNodes = findChildren(oldState.doc, (node) => node.type.name === name);
        const newNodes = findChildren(newState.doc, (node) => node.type.name === name);
        const didChangeSomeCodeBlock = tr.docChanged && // Apply decorations if:
        // selection includes named node,
        ([oldNodeName, newNodeName].includes(name) || // OR transaction adds/removes named node,
        newNodes.length !== oldNodes.length || // OR transaction has changes that completely encapsulte a node
        // (for example, a transaction that affects the entire document).
        // Such transactions can happen during collab syncing via y-prosemirror, for example.
        tr.steps.some((step) => {
          return (
            // @ts-ignore
            step.from !== void 0 && // @ts-ignore
            step.to !== void 0 && oldNodes.some((node) => {
              return (
                // @ts-ignore
                node.pos >= step.from && // @ts-ignore
                node.pos + node.node.nodeSize <= step.to
              );
            })
          );
        }));
        const languageLoaded = Boolean(tr.getMeta(LowlightPluginKey));
        if (languageLoaded || didChangeSomeCodeBlock) {
          return getDecorations({
            doc: tr.doc,
            name,
            lowlight: lowlight2,
            defaultLanguage
          });
        }
        return decorationSet.map(tr.mapping, tr.doc);
      }
    },
    view(view) {
      class LowlightPluginView {
        constructor() {
          this.initDecorations();
        }
        update() {
          this.checkUndecoratedBlocks();
        }
        async initDecorations() {
          const doc = view.state.doc;
          const codeBlocks = findChildren(doc, (node) => node.type.name === name);
          const languages = [
            ...codeBlocks.map((block) => block.node.attrs.language || CODE_BLOCK_LANGUAGUE_SYNTAX_DEFAULT),
            defaultLanguage
          ];
          await Promise.all(languages.map((language) => loadLanguage(language, lowlight2)));
          const tr = view.state.tr.setMeta(LowlightPluginKey, true);
          view.dispatch(tr);
        }
        async checkUndecoratedBlocks() {
          const codeBlocks = findChildren(view.state.doc, (node) => node.type.name === name);
          const loadStates = await Promise.all(
            codeBlocks.flatMap((block) => [loadLanguage(block.node.attrs.language || CODE_BLOCK_LANGUAGUE_SYNTAX_DEFAULT, lowlight2)])
          );
          const didLoadSomething = loadStates.includes(true);
          if (didLoadSomething) {
            const tr = view.state.tr.setMeta(LowlightPluginKey, true);
            view.dispatch(tr);
          }
        }
      }
      return new LowlightPluginView();
    },
    props: {
      decorations(state) {
        return this.getState(state);
      }
    }
  });
  return lowlightPlugin;
}
function parseNodes(nodes, className = []) {
  return nodes.map((node) => {
    const classes = [...className, ...node.properties ? node.properties.className : []];
    if (node.children) {
      return parseNodes(node.children, classes);
    }
    return {
      text: node.value,
      classes
    };
  }).flat();
}
function getHighlightNodes(result) {
  return result.value || result.children || [];
}
function registered(aliasOrLanguage) {
  return Boolean(highlight.getLanguage(aliasOrLanguage));
}
function getDecorations({
  doc,
  name,
  lowlight: lowlight2,
  defaultLanguage
}) {
  const decorations = [];
  const codeBlocks = findChildren(doc, (node) => node.type.name === name);
  codeBlocks.forEach((block) => {
    let from = block.pos + 1;
    const language = block.node.attrs.language || defaultLanguage;
    const languages = lowlight2.listLanguages();
    const nodes = languages.includes(language) || registered(language) ? getHighlightNodes(lowlight2.highlight(language, block.node.textContent)) : getHighlightNodes(lowlight2.highlightAuto(block.node.textContent));
    parseNodes(nodes).forEach((node) => {
      const to = from + node.text.length;
      if (node.classes.length) {
        const decoration = Decoration.inline(from, to, {
          class: node.classes.join(" ")
        });
        decorations.push(decoration);
      }
      from = to;
    });
  });
  return DecorationSet.create(doc, decorations);
}
const backtickInputRegex = /^```([a-z]+)?[\s\n]$/;
const tildeInputRegex = /^~~~([a-z]+)?[\s\n]$/;
const lowlight = createLowlight();
lowlight.register("plaintext", plaintext);
const CodeBlock = CodeBlockLowlight.extend({
  addOptions() {
    var _a;
    return {
      ...(_a = this.parent) == null ? void 0 : _a.call(this),
      defaultLanguage: CODE_BLOCK_LANGUAGUE_SYNTAX_DEFAULT
    };
  },
  addInputRules() {
    const findAndLoadLanguage = (match) => {
      const language = findLanguage(match[1]);
      const syntax = (language == null ? void 0 : language.syntax) || CODE_BLOCK_LANGUAGUE_SYNTAX_DEFAULT;
      loadLanguage(syntax, lowlight);
      return { language: syntax };
    };
    return [
      textblockTypeInputRule({
        find: backtickInputRegex,
        type: this.type,
        getAttributes: findAndLoadLanguage
      }),
      textblockTypeInputRule({
        find: tildeInputRegex,
        type: this.type,
        getAttributes: findAndLoadLanguage
      })
    ];
  },
  addProseMirrorPlugins() {
    return [
      LowlightPlugin({
        lowlight,
        name: this.name,
        defaultLanguage: CODE_BLOCK_LANGUAGUE_SYNTAX_DEFAULT
      })
    ];
  },
  //   renderHTML({ node }) {
  //     return [
  //       "pre",
  //       {
  //         "data-language": node.attrs.language ?? null,
  //       },
  //       [
  //         "code",
  //         //   {
  //         //     "data-language": node.attrs.language ?? null,
  //         //   },
  //         0,
  //       ],
  //     ];
  //   },
  addKeyboardShortcuts() {
    var _a;
    return {
      ...(_a = this.parent) == null ? void 0 : _a.call(this),
      Tab: ({ editor }) => {
        const { state, view } = editor;
        if (isNodeActive(editor.state, this.type)) {
          view.dispatch(state.tr.insertText("	"));
          return true;
        }
        return false;
      }
    };
  }
}).configure({
  lowlight
});
const Figure = Node.create({
  name: "figure",
  group: "block",
  content: "block figcaption",
  selectable: true,
  draggable: true,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [{ tag: "figure" }];
  },
  renderHTML({ HTMLAttributes }) {
    return ["figure", mergeAttributes(HTMLAttributes), 0];
  },
  addKeyboardShortcuts() {
    return {
      Backspace: ({ editor }) => handleBackspace(editor, this.type),
      Delete: ({ editor }) => handleDelete(editor, this.type),
      Enter: ({ editor }) => handleEnter(editor, this.type)
    };
  }
});
const handleEnter = (editor, nodeType) => {
  const { selection } = editor.state;
  const { $from } = selection;
  if ($from.parent.type === nodeType) {
    const pos = $from.end();
    return editor.chain().focus(pos).insertContentAt(pos, { type: "paragraph" }).run();
  }
  return false;
};
const handleDelete = (editor, nodeType) => {
  const { selection, doc } = editor.state;
  const { $from } = selection;
  if ($from.pos === 1) {
    return false;
  }
  if ($from.parent.type === nodeType) {
    return editor.commands.deleteNode(nodeType);
  }
  const isAtEnd = selection.empty && $from.parentOffset === $from.parent.nodeSize - 2;
  if (isAtEnd) {
    const $pos = doc.resolve($from.pos + 1);
    const nodeAfter = $pos.nodeAfter;
    if ((nodeAfter == null ? void 0 : nodeAfter.type) !== nodeType) {
      return false;
    }
    return editor.chain().setNodeSelection($pos.pos).run();
  }
  return false;
};
const handleBackspace = (editor, nodeType) => {
  const { selection, doc } = editor.state;
  const { $from } = selection;
  if ($from.parent.type === nodeType) {
    return editor.commands.deleteNode(nodeType);
  }
  const isAtStart = selection.empty && $from.parentOffset === 0;
  if (isAtStart) {
    const $pos = doc.resolve($from.pos - 1);
    const nodeBefore = $pos.nodeBefore;
    if ((nodeBefore == null ? void 0 : nodeBefore.type) !== nodeType) {
      return false;
    }
    return editor.chain().command(({ chain }) => {
      return $from.parent.textContent.length > 0 || chain().deleteCurrentNode().run();
    }).setNodeSelection($pos.pos - nodeBefore.nodeSize).run();
  }
  return false;
};
const Figcaption = Node.create({
  name: "figcaption",
  group: "block",
  inline: false,
  content: "inline*",
  marks: "",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [{ tag: "figcaption" }];
  },
  renderHTML({ HTMLAttributes }) {
    return ["figcaption", mergeAttributes(HTMLAttributes), 0];
  },
  addKeyboardShortcuts() {
    return {
      "Mod-a": ({ editor }) => handleSelectAll(editor, this.type),
      Backspace: ({ editor }) => handleDeleteOrBackspace(editor, "Backspace", this.type),
      Delete: ({ editor }) => handleDeleteOrBackspace(editor, "Delete", this.type)
    };
  }
});
function handleSelectAll(editor, nodeType) {
  const { state, view } = editor;
  const { selection } = state;
  const { $anchor } = selection;
  if ($anchor.parent.type !== nodeType) {
    return false;
  }
  const tr = state.tr;
  const start = $anchor.start();
  const end = $anchor.end();
  view.dispatch(tr.setSelection(TextSelection.create(tr.doc, start, end)));
  return true;
}
function handleDeleteOrBackspace(editor, handle, nodeType) {
  const { selection } = editor.state;
  const { $from, empty } = selection;
  if ($from.parent.type !== nodeType) {
    return false;
  }
  if (handle === "Delete") {
    const isAtEnd = empty && $from.parentOffset === $from.parent.nodeSize - 2;
    return isAtEnd;
  } else if (handle === "Backspace") {
    const isAtStart = empty && $from.parentOffset === 0;
    return isAtStart;
  }
  return false;
}
const Image = Image$1.extend({
  addAttributes() {
    return {
      src: {
        default: "",
        parseHTML: (element) => element.getAttribute("src"),
        renderHTML: (attributes) => ({ src: attributes.src })
      },
      alt: {
        default: void 0,
        parseHTML: (element) => element.getAttribute("alt"),
        renderHTML: (attrs) => {
          if (!attrs.alt) return {};
          return { alt: attrs.alt };
        }
      },
      width: {
        default: null,
        parseHTML: (element) => Number.parseInt(element.style.width) || null,
        renderHTML: (attrs) => {
          if (!attrs.width) return {};
          return { style: `width: ${attrs.width}%` };
        }
      },
      naturalWidth: {
        default: null,
        parseHTML: (element) => element.getAttribute("data-width"),
        renderHTML: (attrs) => ({ "data-width": attrs.naturalWidth })
      },
      naturalHeight: {
        default: null,
        parseHTML: (element) => element.getAttribute("data-height"),
        renderHTML: (attrs) => ({ "data-height": attrs.naturalHeight })
      }
    };
  },
  parseHTML() {
    return [{ tag: "img" }];
  },
  renderHTML({ HTMLAttributes }) {
    return ["img", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)];
  },
  addCommands() {
    var _a;
    return {
      ...(_a = this.parent) == null ? void 0 : _a.call(this),
      insertImage: ({ width, height, ...options }) => ({ commands }) => {
        return commands.setImage({
          ...options,
          naturalWidth: width,
          naturalHeight: height
        });
      }
    };
  }
  //   addProseMirrorPlugins() {
  //     return [
  //       ImagePlugin({
  //         name: this.name,
  //       }),
  //     ];
  //   },
});
const ImageCaption = Figcaption.extend({
  name: "imageCaption",
  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey("imageCaptionFocus"),
        props: {
          decorations: ({ doc, selection }) => {
            const { isEditable, isFocused } = this.editor;
            const { $anchor } = selection;
            if (!isEditable || !isFocused || $anchor.parent.type.name !== this.name) {
              return DecorationSet.create(doc, []);
            }
            const figure = $anchor.node($anchor.depth - 1);
            if (figure.type.name !== ImageFigure.name) {
              return DecorationSet.create(doc, []);
            }
            const captionPos = $anchor.before($anchor.depth);
            const captionEndPos = $anchor.after($anchor.depth);
            return DecorationSet.create(doc, [
              Decoration.node(captionPos, captionEndPos, {
                class: "ProseMirror-selectednode"
                // Apply class to figcaption
              })
            ]);
          }
        }
      })
    ];
  }
});
const ImageFigure = Figure.extend({
  name: "imageFigure",
  content: "image imageCaption?",
  //   atom: true,
  addExtensions() {
    return [ImageCaption];
  },
  addCommands() {
    return {
      /**
       * Insert an imageFigure node with an image and optional caption.
       */
      setImageFigure: ({ src, caption }) => ({ chain }) => {
        const content = [
          { type: Image.name, attrs: { src } },
          caption === null || caption === void 0 ? {} : {
            type: ImageCaption.name,
            content: caption === "" ? void 0 : [{ type: "text", text: caption }]
          }
        ];
        return chain().insertContent({ type: this.name, content }).run();
      },
      /**
       * Convert a standalone image into an imageFigure node.
       */
      imageToFigure: () => ({ state, chain }) => {
        const { selection } = state;
        const { $anchor } = selection;
        const imagePos = $anchor.pos;
        const imageNode = state.doc.nodeAt(imagePos);
        if (!imageNode || imageNode.type.name !== Image.name) {
          return false;
        }
        const range = {
          from: imagePos,
          to: imagePos + imageNode.nodeSize
        };
        const content = [
          { type: Image.name, attrs: imageNode.attrs },
          { type: ImageCaption.name, content: void 0 }
        ];
        return chain().insertContentAt(range, {
          type: this.name,
          content
        }).setTextSelection(range.to + content.length).run();
      },
      /**
       * Convert an imageFigure node back to a standalone image.
       */
      figureToImage: () => ({ state, commands }) => {
        const { selection } = state;
        const { $anchor } = selection;
        let depth = $anchor.depth;
        let pos = $anchor.pos;
        while (depth > 0) {
          pos = $anchor.before(depth);
          depth--;
        }
        const figureNode = state.doc.nodeAt(pos);
        if (!figureNode || figureNode.type.name !== this.name) {
          return false;
        }
        const range = {
          from: pos,
          to: pos + figureNode.nodeSize
        };
        const content = figureNode.firstChild;
        return commands.insertContentAt(range, content);
      },
      /**
       * Remove an image or imageFigure node.
       */
      removeImage: () => ({ state, tr, dispatch }) => {
        const { selection } = state;
        const { $anchor } = selection;
        let depth = $anchor.depth;
        let pos = $anchor.pos;
        while (depth > 0) {
          pos = $anchor.before(depth);
          depth--;
        }
        const node = state.doc.nodeAt(pos);
        if (!node || node.type.name !== this.name && node.type.name !== Image.name) {
          return false;
        }
        if (dispatch) {
          tr.deleteRange(pos, pos + node.nodeSize);
          dispatch(tr);
        }
        return true;
      }
    };
  },
  /**
   * Handle drag-and-drop behavior for imageFigure nodes.
   */
  addProseMirrorPlugins() {
    let draggedNode;
    return [
      new Plugin({
        props: {
          handleDOMEvents: {
            dragstart: (view, event) => {
              if (!event.dataTransfer || !event.target || !(event.target instanceof HTMLImageElement)) {
                return false;
              }
              const pos = view.posAtDOM(event.target, 0);
              const $pos = view.state.doc.resolve(pos);
              if ($pos.parent.type !== this.type) {
                return false;
              }
              draggedNode = NodeSelection.create(view.state.doc, $pos.before($pos.depth));
              const draggedSlice = draggedNode.content();
              const serializer = DOMSerializer.fromSchema(view.state.schema);
              const tempDiv = document.createElement("div");
              const fragment = serializer.serializeFragment(draggedSlice.content);
              tempDiv.appendChild(fragment);
              const text = tempDiv.textContent || "";
              const slice = draggedSlice;
              event.dataTransfer.clearData();
              event.dataTransfer.setData("text/html", tempDiv.innerHTML);
              event.dataTransfer.setData("text/plain", text);
              event.dataTransfer.effectAllowed = "copyMove";
              view.dragging = { slice, move: event.ctrlKey };
              return true;
            },
            drop: (view) => {
              if (draggedNode) {
                view.dispatch(view.state.tr.setSelection(draggedNode));
                draggedNode = null;
              }
            },
            dragend: () => {
              draggedNode = null;
            }
          }
        }
      })
    ];
  }
});
const Link = Link$1.extend({
  inclusive: false,
  addOptions() {
    var _a;
    return {
      ...(_a = this.parent) == null ? void 0 : _a.call(this),
      openOnClick: false
    };
  },
  addStorage() {
    return {
      mode: 0,
      tempPos: null
    };
  },
  onSelectionUpdate() {
    if (this.storage.mode == -1 && !this.editor.isActive("link")) {
      this.editor.commands.confirmEditLink();
    }
  },
  addCommands() {
    var _a;
    return {
      ...(_a = this.parent) == null ? void 0 : _a.call(this),
      startEditLink: () => ({ editor, chain }) => {
        const mode = editor.isActive("link") ? 1 : -1;
        if (mode === -1) {
          chain().command(({ chain: chain2, tr }) => {
            this.storage.tempPos = tr.selection;
            if (tr.selection.empty)
              return chain2().blur().focus(tr.selection.anchor).insertLink({ text: "​" }).run();
            return chain2().setLink({ href: "" }).run();
          }).setMeta("addToHistory", false).setMeta("preventUpdate", true).setMeta("preventClearTempLink", true).run();
        }
        this.storage.mode = mode;
        return true;
      },
      insertLink: (attrs) => ({ chain }) => {
        const { text, href } = attrs;
        return chain().insertContent(
          {
            type: "text",
            text,
            marks: [
              {
                type: "link",
                attrs: {
                  href,
                  target: "_blank"
                }
              }
            ]
          },
          { updateSelection: false }
        ).setLink({ href }).run();
      },
      confirmEditLink: (updated) => ({ chain, state }) => {
        const { doc, schema } = state;
        const shouldUpdate = Boolean(updated);
        chain().command(({ tr, commands }) => {
          if (shouldUpdate) return commands.insertLink(updated);
          clearTempLinks(tr, doc, this.storage.tempPos);
          return true;
        }).setMeta("addToHistory", shouldUpdate).setMeta("preventUpdate", !shouldUpdate).run();
        this.storage.mode = 0;
        this.storage.tempPos = null;
        return true;
      }
    };
  },
  addProseMirrorPlugins() {
    var _a;
    return [
      ...((_a = this.parent) == null ? void 0 : _a.call(this)) || [],
      new Plugin({
        props: {
          handleClick: (view, pos, event) => {
            if (!view.editable) {
              return false;
            }
            const { schema, doc, tr } = view.state;
            const range = getMarkRange(doc.resolve(pos), schema.marks.link);
            const target = event.target;
            const linkElement = target.closest("a");
            if (!(linkElement == null ? void 0 : linkElement.href) || !range) {
              return false;
            }
            const $start = doc.resolve(range.from);
            const $end = doc.resolve(range.to);
            const transaction = tr.setSelection(new TextSelection($start, $end));
            view.dispatch(transaction);
            this.storage.mode = 1;
          }
        },
        appendTransaction: (transactions, oldState, newState) => {
          const hasDocChanges = transactions.some((transaction) => transaction.docChanged) && !oldState.doc.eq(newState.doc);
          const skipTransaction = transactions.some(
            (transaction) => transaction.getMeta("preventClearTempLink")
          );
          if (!hasDocChanges || skipTransaction) return;
          const tr = newState.tr;
          const range = getMarkRange(newState.selection.$anchor, newState.schema.marks.link);
          if (!range) {
            return;
          }
          clearTempLinks(tr, newState.doc, newState.selection);
          if (!tr.steps.length) {
            return;
          }
          return tr;
        }
      })
    ];
  },
  addKeyboardShortcuts() {
    return {
      "Mod-k": () => this.editor.commands.startEditLink()
    };
  }
});
function clearTempLinks(tr, doc, selection) {
  const { from, to, empty } = selection;
  if (empty) {
    tr.removeMark(from, from + 1);
    tr.insertText("", from, from + 1);
  } else {
    doc.nodesBetween(from, to, (node, pos) => {
      const linkMark = node.marks.find(
        (mark) => mark.type.name === "link" && !mark.attrs.href
      );
      if (linkMark) {
        tr.removeMark(pos, pos + node.nodeSize, linkMark);
      }
    });
  }
}
Extension.create({
  name: "indent",
  addOptions() {
    return {
      types: ["heading", "paragraph"],
      minLevel: 0,
      maxLevel: 4
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          indent: {
            default: null,
            renderHTML: (attributes) => {
              if (!attributes.indent || attributes.indent == this.options.minLevel) return {};
              return { "data-indent": attributes.indent };
            },
            parseHTML: (element) => {
              const level = Number.parseInt(element.getAttribute("data-indent") || "", 10);
              return level && level > this.options.minLevel ? level : null;
            }
          }
        }
      }
    ];
  },
  addCommands() {
    const setNodeIndentMarkup = (tr, pos, delta) => {
      const node = tr.doc.nodeAt(pos) ?? null;
      if (node) {
        const nextLevel = (node.attrs.indent || 0) + delta;
        const { minLevel, maxLevel } = this.options;
        let indent = nextLevel;
        if (nextLevel < minLevel) {
          indent = minLevel;
        } else if (nextLevel > maxLevel) {
          indent = maxLevel;
        }
        if (indent !== node.attrs.indent) {
          const clonedAttrs = { ...node.attrs };
          delete clonedAttrs.indent;
          const nodeAttrs = indent > minLevel ? { ...clonedAttrs, indent } : clonedAttrs;
          return tr.setNodeMarkup(pos, node.type, nodeAttrs, node.marks);
        }
      }
      return tr;
    };
    const updateIndentLevel = (tr, delta) => {
      const { doc, selection } = tr;
      if (doc && selection && selection instanceof TextSelection) {
        const { from, to } = selection;
        doc.nodesBetween(from, to, (node, pos) => {
          if (this.options.types.includes(node.type.name)) {
            tr = setNodeIndentMarkup(tr, pos, delta);
            return false;
          }
          return true;
        });
      }
      return tr;
    };
    const applyIndent = (direction) => () => ({ tr, state, dispatch }) => {
      const { selection } = state;
      tr.setSelection(selection);
      tr = updateIndentLevel(tr, direction);
      if (tr.docChanged) {
        if (dispatch) {
          dispatch(tr);
        }
      }
      return true;
    };
    return {
      indent: applyIndent(1),
      outdent: applyIndent(-1)
    };
  },
  addKeyboardShortcuts() {
    return {
      Tab: () => {
        return !isNodeActive$1(this.editor.state, "listItem") && this.editor.commands.indent();
      },
      "Shift-Tab": () => {
        return !isNodeActive$1(this.editor.state, "listItem") && this.editor.commands.outdent();
      },
      Backspace: ({ editor }) => {
        const { selection } = editor.state;
        const { $anchor } = selection;
        if ($anchor.parentOffset !== 0) return false;
        const parentNode = $anchor.parent;
        const nodeTypeMatches = this.options.types.includes(parentNode.type.name);
        const indentLevel = parentNode.attrs.indent || 0;
        if (nodeTypeMatches && indentLevel > this.options.minLevel) {
          return this.editor.commands.outdent();
        }
        return false;
      }
    };
  }
});
const Selection = Extension.create({
  name: "selection",
  addProseMirrorPlugins() {
    const { editor } = this;
    return [
      new Plugin({
        key: new PluginKey("selection"),
        props: {
          decorations(state) {
            if (state.selection.empty) {
              return null;
            }
            if (editor.isFocused === true) {
              return null;
            }
            return DecorationSet.create(state.doc, [
              Decoration.inline(state.selection.from, state.selection.to, {
                class: "selection"
              })
            ]);
          }
        }
      })
    ];
  }
});
const YOUTUBE_REGEX = /^(https?:\/\/)?(www\.|music\.)?(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(?!channel\/)(?!@)(.+)?$/;
function isValidYoutubeUrl(url) {
  return url.match(YOUTUBE_REGEX);
}
function getEmbedYoutubeUrl({
  url,
  nocookie,
  allowFullscreen,
  autoplay,
  controls
}) {
  if (!isValidYoutubeUrl(url)) {
    return null;
  }
  if (url.includes("/embed/")) {
    return url;
  }
  const videoIdRegex = /(?:v=|shorts\/)([-\w]+)/gm;
  const matches = videoIdRegex.exec(url);
  if (!matches || !matches[1]) {
    return null;
  }
  const outputUrl = (nocookie ? "https://www.youtube-nocookie.com/embed/" : "https://www.youtube.com/embed/") + matches[1];
  return outputUrl;
}
const Youtube = Node.create({
  name: "youtube",
  group: "block",
  draggable: true,
  atom: true,
  addOptions() {
    return {
      allowFullscreen: true,
      autoplay: false,
      nocookie: false,
      controls: true,
      HTMLAttributes: {}
    };
  },
  addAttributes() {
    return {
      src: {
        default: null
      },
      width: {
        default: null,
        parseHTML: (element) => Number.parseInt(element.style.width) || null,
        renderHTML: (attrs) => {
          if (!attrs.width) return {};
          return { style: `width: ${attrs.width}%` };
        }
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "iframe[src]"
      }
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return [
      "iframe",
      mergeAttributes(
        this.options.HTMLAttributes,
        {
          with: 200,
          height: 120,
          allowfullscreen: this.options.allowFullscreen ? "true" : void 0,
          autoplay: this.options.autoplay ? "true" : void 0
        },
        HTMLAttributes
      )
    ];
  },
  addCommands() {
    return {
      embedYoutube: (options) => ({ commands }) => {
        if (!isValidYoutubeUrl(options.src)) {
          return false;
        }
        const embedUrl = getEmbedYoutubeUrl({
          url: options.src,
          allowFullscreen: this.options.allowFullscreen,
          autoplay: this.options.autoplay,
          controls: this.options.controls,
          nocookie: this.options.nocookie
        });
        if (!embedUrl) return false;
        return commands.insertContent({
          type: this.name,
          attrs: { ...options, src: embedUrl }
        });
      }
    };
  },
  addNodeView() {
    return ({ node }) => {
      const iframe = document.createElement("iframe");
      iframe.src = node.attrs.src;
      const dom = document.createElement("div");
      dom.style.cursor = "default";
      dom.style.marginInline = "auto";
      dom.style.width = `${node.attrs.width}%`;
      dom.appendChild(iframe);
      return {
        dom
      };
    };
  }
});
const Table = Table$1.extend({
  addExtensions() {
    return [TableRow, TableHeader, TableCell];
  }
}).configure({
  cellMinWidth: 35,
  resizable: true
});
const ExtensionKit = [
  StarterKit.configure({
    horizontalRule: false,
    hardBreak: false,
    codeBlock: false
  }),
  Placeholder.configure({
    includeChildren: true,
    showOnlyCurrent: true,
    placeholder: ({ editor, node }) => {
      const placeholder = editor.options.editorProps["placeholder"];
      switch (node.type.name) {
        case ImageCaption.name:
          return placeholder == null ? void 0 : placeholder.imageCaption;
        default:
          return placeholder == null ? void 0 : placeholder.paragraph;
      }
    }
  }),
  Selection,
  CharacterCount,
  Underline,
  Superscript,
  Subscript,
  TextAlign.configure({ types: ["heading", "paragraph"] }),
  TextStyle,
  Color,
  Highlight.configure({ multicolor: true }),
  ListKeymap,
  Link,
  Image,
  ImageFigure,
  CodeBlock,
  Youtube,
  Table
];
const TableMenu = () => {
  const { editor, contentElement } = useTiptapContext();
  const shouldShow = useCallback(({ editor: editor2 }) => {
    return editor2.isActive("table");
  }, []);
  const getReferenceClientRect = useCallback(() => {
    const node = getNodeContainer(editor, "table");
    return (node == null ? void 0 : node.getBoundingClientRect()) || new DOMRect(-1e3, -1e3, 0, 0);
  }, [editor]);
  const addRowOrColumn = useCallback(
    (type, position) => {
      const command = `add${type}${position}`;
      return () => editor.chain().focus()[command]().run();
    },
    [editor]
  );
  const deleteRowOrColumn = useCallback(
    (type) => {
      const command = `delete${type}`;
      return () => editor.chain().focus()[command]().run();
    },
    [editor]
  );
  const toggleHeader = useCallback(
    (type) => {
      const command = `toggleHeader${type}`;
      return () => editor.chain().focus()[command]().run();
    },
    [editor]
  );
  const mergeCells = useCallback(() => editor.chain().focus().mergeCells().run(), [editor]);
  const splitCell = useCallback(() => editor.chain().focus().splitCell().run(), [editor]);
  const deleteTable = useCallback(() => editor.chain().focus().deleteTable().run(), [editor]);
  return /* @__PURE__ */ jsxs(
    BubbleMenu,
    {
      editor,
      pluginKey: "table-bubble",
      shouldShow,
      updateDelay: 100,
      tippyOptions: {
        placement: "top",
        maxWidth: "auto",
        appendTo: () => contentElement.current,
        getReferenceClientRect
      },
      children: [
        /* @__PURE__ */ jsxs(Toolbar, { children: [
          /* @__PURE__ */ jsx(
            MenuButton$1,
            {
              icon: "RowInsertTop",
              tooltip: "Add row above",
              onClick: addRowOrColumn("Row", "Before")
            }
          ),
          /* @__PURE__ */ jsx(
            MenuButton$1,
            {
              icon: "RowInsertBottom",
              tooltip: "Add row below",
              onClick: addRowOrColumn("Row", "After")
            }
          ),
          /* @__PURE__ */ jsx(
            MenuButton$1,
            {
              icon: "ColInsertLeft",
              tooltip: "Add column before",
              onClick: addRowOrColumn("Column", "Before")
            }
          ),
          /* @__PURE__ */ jsx(
            MenuButton$1,
            {
              icon: "ColInsertRight",
              tooltip: "Add column after",
              onClick: addRowOrColumn("Column", "After")
            }
          ),
          /* @__PURE__ */ jsx(MenuButton$1, { icon: "SplitCell", tooltip: "Split cell", onClick: splitCell }),
          /* @__PURE__ */ jsx(MenuButton$1, { icon: "MergeCell", tooltip: "Merge cells", onClick: mergeCells })
        ] }),
        /* @__PURE__ */ jsxs(Toolbar, { style: { justifyContent: "center" }, children: [
          /* @__PURE__ */ jsx(MenuButton$1, { icon: "RowHeader", tooltip: "Toggle row header", onClick: toggleHeader("Row") }),
          /* @__PURE__ */ jsx(
            MenuButton$1,
            {
              icon: "ColHeader",
              tooltip: "Toggle column header",
              onClick: toggleHeader("Column")
            }
          ),
          /* @__PURE__ */ jsx(MenuButton$1, { icon: "RowRemove", tooltip: "Delete row", onClick: deleteRowOrColumn("Row") }),
          /* @__PURE__ */ jsx(
            MenuButton$1,
            {
              icon: "ColRemove",
              tooltip: "Delete column",
              onClick: deleteRowOrColumn("Column")
            }
          ),
          /* @__PURE__ */ jsx(MenuButton$1, { icon: "Trash", tooltip: "Delete table", onClick: deleteTable })
        ] })
      ]
    }
  );
};
const TiptapEditor = forwardRef(
  ({
    ssr = false,
    output = "html",
    readonly = false,
    disabled = false,
    initialContent,
    placeholder,
    hideMenuBar = false,
    hideStatusBar = false,
    hideBubbleMenu = true,
    contentMinHeight = 200,
    contentMaxHeight,
    onContentChange
  }, ref) => {
    const isEditable = !readonly && !disabled;
    const displayBubbleMenu = isEditable && hideBubbleMenu;
    const throttledUpdate = useCallback(
      throttle((value) => onContentChange == null ? void 0 : onContentChange(value), 1500),
      []
    );
    const handleUpdate = useCallback(
      (editor) => {
        const content = output === "html" ? editor.isEmpty ? "" : editor.getHTML() : editor.getJSON();
        throttledUpdate(content);
      },
      [throttledUpdate, output]
    );
    const editorOptions = {
      ref,
      placeholder,
      extensions: ExtensionKit,
      content: initialContent,
      editable: isEditable,
      immediatelyRender: !ssr,
      shouldRerenderOnTransaction: false,
      autofocus: false,
      onUpdate: ({ editor }) => handleUpdate(editor)
    };
    useEffect(() => {
      cssVar("--rte-editor-min-height", `${contentMinHeight}px`);
      cssVar("--rte-editor-max-height", `${contentMaxHeight}px`);
    }, [contentMaxHeight, contentMinHeight]);
    const menus = displayBubbleMenu && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(LinkMenu, {}),
      /* @__PURE__ */ jsx(ImageMenu, {}),
      /* @__PURE__ */ jsx(CodeBlockMenu, {}),
      /* @__PURE__ */ jsx(TableMenu, {})
    ] });
    return /* @__PURE__ */ jsxs(TiptapProvider, { editorOptions, slotBefore: !hideMenuBar && /* @__PURE__ */ jsx(MenuBar$1, {}), slotAfter: !hideStatusBar && /* @__PURE__ */ jsx(StatusBar$1, {}), children: [
      menus,
      /* @__PURE__ */ jsx(Resizer$1, {})
    ] });
  }
);
TiptapEditor.displayName = "TiptapEditor";
export {
  TiptapEditor as T
};
