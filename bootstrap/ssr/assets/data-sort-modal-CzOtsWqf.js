import { jsx, jsxs } from "react/jsx-runtime";
import { router } from "@inertiajs/react";
import NProgress from "nprogress";
import { c as cn } from "./utils-BmtPBcb0.js";
import { Move } from "lucide-react";
import { useRef, useState } from "react";
import { D as Dialog, a as DialogTrigger, b as DialogContent, c as DialogHeader, d as DialogTitle } from "./dialog-DD5SXV81.js";
import { S as ScrollArea } from "./scroll-area-DPHRDnwL.js";
const hideProgress = () => {
  router.on("start", () => NProgress.remove());
  router.on("finish", () => NProgress.remove());
};
const DraggableContainer = ({
  items,
  onOrderChange,
  updateRoute,
  renderItem,
  containerClassName,
  itemClassName,
  iconClassName
}) => {
  const containerRef = useRef(null);
  const handleDragStart = (e) => {
    e.currentTarget.classList.add("dragging");
  };
  const handleDragEnd = async (e) => {
    e.currentTarget.classList.remove("dragging");
    const container = containerRef.current;
    if (container) {
      const updatedItems = [];
      const elements = Array.from(
        container.querySelectorAll("[data-item_id]")
      );
      const baseSort = items[0].sort;
      elements.forEach((element, index) => {
        const id = parseInt(element.getAttribute("data-item_id") || "");
        if (id) {
          const originalItem = items.find((item) => item.id === id);
          if (originalItem) {
            updatedItems.push({
              ...originalItem,
              sort: baseSort + index
              // This will give us 4, 5, 6
            });
          }
        }
      });
      onOrderChange == null ? void 0 : onOrderChange(updatedItems);
      if (updateRoute) {
        hideProgress();
        router.put(updateRoute, {
          items: updatedItems
        });
      }
    }
  };
  const handleDragOver = (e) => {
    var _a, _b;
    e.preventDefault();
    const afterElement = getDragAfterElement(
      containerRef.current,
      e.clientY
    );
    const draggable = document.querySelector(".dragging");
    if (afterElement == null) {
      (_a = containerRef.current) == null ? void 0 : _a.appendChild(draggable);
    } else {
      (_b = containerRef.current) == null ? void 0 : _b.insertBefore(draggable, afterElement);
    }
  };
  const getDragAfterElement = (container, y) => {
    const draggableElements = [
      ...container.querySelectorAll(
        ".draggable:not(.dragging)"
      )
    ];
    return draggableElements.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
          return { offset, element: child };
        } else {
          return closest;
        }
      },
      { offset: Number.NEGATIVE_INFINITY, element: null }
    ).element;
  };
  const sortedItems = [...items].sort((a, b) => a.sort - b.sort);
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref: containerRef,
      className: containerClassName,
      onDragOver: handleDragOver,
      children: sortedItems.map((item, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          draggable: true,
          "data-item_id": item.id,
          className: cn("draggable flex items-center", itemClassName),
          onDragStart: handleDragStart,
          onDragEnd: handleDragEnd,
          children: [
            /* @__PURE__ */ jsx(
              Move,
              {
                className: cn(
                  "mr-4 h-5 w-5 cursor-grab",
                  iconClassName
                )
              }
            ),
            renderItem(item, index)
          ]
        },
        item.id
      ))
    }
  );
};
const DataSortModal = ({ title, data, handler, renderContent, onOrderChange, translate }) => {
  var _a;
  const [open, setOpen] = useState(false);
  const handleOrderChange = (newOrder) => {
    onOrderChange(newOrder, setOpen);
  };
  return /* @__PURE__ */ jsxs(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: handler }),
    /* @__PURE__ */ jsx(DialogContent, { className: "p-0", children: /* @__PURE__ */ jsxs(ScrollArea, { className: "max-h-[90vh] p-6", children: [
      /* @__PURE__ */ jsx(DialogHeader, { className: "mb-6", children: /* @__PURE__ */ jsx(DialogTitle, { children: title }) }),
      data.length > 0 ? /* @__PURE__ */ jsx(
        DraggableContainer,
        {
          items: data,
          onOrderChange: handleOrderChange,
          containerClassName: "space-y-2",
          renderItem: (item) => renderContent(item)
        }
      ) : /* @__PURE__ */ jsx("div", { className: "px-4 py-3 text-center", children: /* @__PURE__ */ jsx("p", { children: ((_a = translate == null ? void 0 : translate.frontend) == null ? void 0 : _a.no_element_available) || "No element available" }) })
    ] }) })
  ] });
};
export {
  DataSortModal as D
};
