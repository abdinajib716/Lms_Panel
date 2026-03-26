import { jsxs, jsx } from "react/jsx-runtime";
import { I as InputError } from "./input-error-CEW4jhey.js";
import { B as Button } from "./button-jZyzwgdo.js";
import { I as Input } from "./input-C6-Ta46A.js";
import { L as Label } from "./label-Dd_w2I6M.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BxPdBi6V.js";
import { c as cn } from "./utils-BmtPBcb0.js";
import { useForm, Link, router } from "@inertiajs/react";
import Layout from "./Layout-BabR1Av6.js";
import Message from "./Message-DFXOluuJ.js";
import StepNavigator from "./StepNavigator-Ce2PCpaO.js";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-label";
import "@radix-ui/react-select";
import "lucide-react";
import "clsx";
import "tailwind-merge";
const Step3 = (props) => {
  const { DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD, DB_CONNECTION, DB_CONNECTION_STATUS, flash } = props;
  const { data, errors, post, setData } = useForm({
    db_connection: DB_CONNECTION || "mysql",
    db_host: DB_HOST || "",
    db_port: DB_PORT || "",
    db_database: DB_DATABASE || "",
    db_username: DB_USERNAME || "",
    db_password: DB_PASSWORD || ""
  });
  const dbConnectionStatus = Boolean(parseInt(DB_CONNECTION_STATUS));
  const onHandleChange = (event) => {
    const target = event.target;
    setData({
      ...data,
      [target.name]: target.value
    });
  };
  const testDBConnection = async (e) => {
    e.preventDefault();
    router.post(route("check-database"), data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("install.store-step3"));
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(StepNavigator, { step1: "fill", step2: "fill", step3: "active" }),
    /* @__PURE__ */ jsxs("form", { id: "dataForm", onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsx(Message, { error: flash.error, success: flash.success }),
      /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsx(Label, { children: "Select Database Type" }),
        /* @__PURE__ */ jsxs(Select, { name: "db_connection", value: data.db_connection, onValueChange: (value) => setData("db_connection", value), children: [
          /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select Database Type" }) }),
          /* @__PURE__ */ jsx(SelectContent, { children: /* @__PURE__ */ jsx(SelectItem, { value: "mysql", children: "MySQL" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsx(Label, { children: "DB Host" }),
        /* @__PURE__ */ jsx(Input, { id: "db_host", type: "text", name: "db_host", value: data.db_host, onChange: onHandleChange, placeholder: "127.0.0.1" }),
        /* @__PURE__ */ jsx(InputError, { message: errors.db_host })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsx(Label, { children: "DB Port" }),
        /* @__PURE__ */ jsx(Input, { id: "db_port", type: "text", name: "db_port", value: data.db_port, onChange: onHandleChange, placeholder: "3306" }),
        /* @__PURE__ */ jsx(InputError, { message: errors.db_port })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsx(Label, { children: "DB Database" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "db_database",
            type: "text",
            name: "db_database",
            value: data.db_database,
            onChange: onHandleChange,
            placeholder: "Database Name"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.db_database })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsx(Label, { children: "DB Username" }),
        /* @__PURE__ */ jsx(Input, { id: "db_username", type: "text", name: "db_username", value: data.db_username, onChange: onHandleChange, placeholder: "Username" }),
        /* @__PURE__ */ jsx(InputError, { message: errors.db_username })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsx(Label, { children: "DB Password" }),
        /* @__PURE__ */ jsx(Input, { id: "db_password", type: "password", name: "db_password", value: data.db_password, onChange: onHandleChange, placeholder: "Password" }),
        /* @__PURE__ */ jsx(InputError, { message: errors.db_password })
      ] }),
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "button",
          className: cn("w-full", dbConnectionStatus && "bg-green-500", flash.error && "bg-red-500"),
          onClick: testDBConnection,
          disabled: dbConnectionStatus,
          children: "Test Connection"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 flex items-center justify-end gap-4", children: [
        /* @__PURE__ */ jsx(Link, { href: route("install.show-step2"), children: /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", className: "border border-orange-500 !bg-transparent !text-orange-500 uppercase", children: "Previous Step" }) }),
        dbConnectionStatus && /* @__PURE__ */ jsx(Button, { type: "submit", className: "bg-orange-500 px-6 py-3 text-white uppercase hover:bg-orange-600/90", children: "Next Step" })
      ] })
    ] })
  ] });
};
Step3.layout = (page) => /* @__PURE__ */ jsx(Layout, { children: page });
export {
  Step3 as default
};
