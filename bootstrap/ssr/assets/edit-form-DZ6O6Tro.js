import { jsxs, jsx } from "react/jsx-runtime";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { L as LoadingButton } from "./loading-button-C4Hk_jCd.js";
import { D as Dialog, a as DialogTrigger, b as DialogContent, c as DialogHeader, d as DialogTitle } from "./dialog-DD5SXV81.js";
import { I as Input } from "./input-C6-Ta46A.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BxPdBi6V.js";
import { usePage, useForm } from "@inertiajs/react";
import { useState } from "react";
import "./utils-BmtPBcb0.js";
import "clsx";
import "tailwind-merge";
import "lucide-react";
import "./button-jZyzwgdo.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-dialog";
import "@radix-ui/react-label";
import "@radix-ui/react-select";
const EditForm = ({ user, actionComponent }) => {
  const { props } = usePage();
  const { translate } = props;
  const { dashboard, input, button, common } = translate;
  const [open, setOpen] = useState(false);
  const { data, put, setData, processing, errors, reset } = useForm({
    name: user.name,
    status: user.status
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    put(route("users.update", user.id), {
      onSuccess: () => {
        reset();
        setOpen(false);
      }
    });
  };
  return /* @__PURE__ */ jsxs(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: actionComponent }),
    /* @__PURE__ */ jsx(DialogContent, { children: /* @__PURE__ */ jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsx(DialogTitle, { children: dashboard.update_user }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4 text-start", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: input.name }),
          /* @__PURE__ */ jsx(Input, { required: true, value: data.name, onChange: (e) => setData("name", e.target.value) }),
          /* @__PURE__ */ jsx(InputError, { message: errors.name })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: input.status }),
          /* @__PURE__ */ jsxs(
            Select,
            {
              required: true,
              value: data.status === 1 ? "active" : "inactive",
              onValueChange: (value) => setData("status", value === "active" ? 1 : 0),
              children: [
                /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: dashboard.select_approval_status }) }),
                /* @__PURE__ */ jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsx(SelectItem, { value: "active", children: common.active }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "inactive", children: common.inactive })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.status })
        ] }),
        /* @__PURE__ */ jsx(LoadingButton, { loading: processing, className: "w-full", children: button.submit })
      ] })
    ] }) })
  ] });
};
export {
  EditForm as default
};
