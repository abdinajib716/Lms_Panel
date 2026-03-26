import { jsxs, jsx } from "react/jsx-runtime";
import { B as Button } from "./button-jZyzwgdo.js";
import { D as Dialog, a as DialogTrigger, b as DialogContent } from "./dialog-DD5SXV81.js";
import { c as cn } from "./utils-BmtPBcb0.js";
import { usePage, router } from "@inertiajs/react";
import { useState } from "react";
const DeleteModal = (props) => {
  const page = usePage();
  const { button, frontend } = page.props.translate;
  const { message, routePath, actionComponent } = props;
  const [modal, setModal] = useState(false);
  const handleOpen = () => {
    setModal((prev) => !prev);
  };
  const deleteHandler = () => {
    router.delete(routePath, {
      preserveScroll: true,
      onSuccess: () => {
        setModal(false);
      }
    });
  };
  return /* @__PURE__ */ jsxs(Dialog, { open: modal, onOpenChange: setModal, children: [
    /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: actionComponent }),
    /* @__PURE__ */ jsxs(DialogContent, { className: cn("px-6 py-8 sm:max-w-[425px]", message ? "space-y-4" : "space-y-8"), children: [
      /* @__PURE__ */ jsx("h6", { className: "text-destructive text-center text-xl", children: frontend.delete_warning }),
      message && /* @__PURE__ */ jsx("div", { className: "bg-destructive/5 rounded-xl p-4", children: /* @__PURE__ */ jsx("p", { className: "text-destructive text-center text-sm", children: message }) }),
      /* @__PURE__ */ jsxs("div", { className: "mb-0 flex items-center justify-center gap-6", children: [
        /* @__PURE__ */ jsx(Button, { onClick: handleOpen, className: "text-destructive border-destructive border bg-transparent px-5 hover:bg-transparent", children: button.cancel }),
        /* @__PURE__ */ jsx(Button, { type: "button", onClick: deleteHandler, className: "hover:bg-primary-hover bg-primary px-5", children: button.delete })
      ] })
    ] })
  ] });
};
export {
  DeleteModal as D
};
