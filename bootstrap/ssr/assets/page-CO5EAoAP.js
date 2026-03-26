const getPageSection = (page, slug) => {
  return page.sections.find((section) => section.slug === slug);
};
const formatLabel = (key) => {
  return key.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
};
const generateFieldByType = (key, value) => {
  if (typeof value === "string") {
    if (key === "image" || key.includes("image") || key === "avatar" || typeof value === "string" && value.match(/\.(jpeg|jpg|gif|png)$/i)) {
      return {
        type: "file",
        label: formatLabel(key),
        name: key,
        value: null
      };
    } else if (key === "description" || key.includes("description") || key === "bio" || key === "content") {
      return {
        type: "textarea",
        label: formatLabel(key),
        name: key,
        value: value || ""
      };
    } else if (key === "url" || key.includes("_url") || key.includes("link")) {
      return {
        type: "url",
        label: formatLabel(key),
        name: key,
        value: value || ""
      };
    } else if (key === "icon") {
      return {
        type: "icon",
        label: formatLabel(key),
        name: key,
        value: value || ""
      };
    } else {
      return {
        type: "text",
        label: formatLabel(key),
        name: key,
        value: value || ""
      };
    }
  } else if (typeof value === "number") {
    return {
      type: "number",
      label: formatLabel(key),
      name: key,
      value: value || 0
    };
  } else if (typeof value === "boolean") {
    return {
      type: "boolean",
      label: formatLabel(key),
      name: key,
      value: value || false
    };
  } else {
    return {
      type: "text",
      label: formatLabel(key),
      name: key,
      value: (value == null ? void 0 : value.toString()) || ""
    };
  }
};
const generatePropertyFields = (properties) => {
  if ("contents" in properties) {
    const fields = [
      {
        type: "contents",
        label: "Contents",
        name: "contents",
        value: properties.contents || []
      }
    ];
    Object.entries(properties).forEach(([key, value]) => {
      if (key === "array") {
        return;
      }
      if (key === "contents") {
        return;
      }
      const field = generateFieldByType(key, value);
      fields.unshift(field);
    });
    return fields;
  }
  if ("array" in properties) {
    const sampleItem = Array.isArray(properties.array) && properties.array.length > 0 ? properties.array[0] : {};
    let itemFields = [];
    if (Object.keys(sampleItem).length > 0) {
      Object.keys(sampleItem).forEach((key) => {
        if (typeof sampleItem[key] === "string" || typeof sampleItem[key] === "number" || typeof sampleItem[key] === "boolean") {
          itemFields.push(generateFieldByType(key, sampleItem[key]));
        }
      });
    } else {
      itemFields = [
        { type: "text", label: "Title", name: "title", value: "" },
        { type: "text", label: "Value", name: "value", value: "" }
      ];
    }
    const fields = [
      {
        type: "array",
        label: "Items",
        name: "array",
        value: (properties.array || []).map((item) => {
          const processedItem = { ...item };
          Object.keys(processedItem).forEach((key) => {
            if (key === "image" || key.includes("image")) {
              processedItem[`new_image`] = null;
            }
          });
          return processedItem;
        }),
        fields: itemFields
      }
    ];
    Object.entries(properties).forEach(([key, value]) => {
      if (key === "array") {
        return;
      }
      if (key === "contents") {
        return;
      }
      const field = generateFieldByType(key, value);
      fields.unshift(field);
    });
    return fields;
  }
  return Object.entries(properties).map(([key, value]) => {
    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      return {
        type: "object",
        label: formatLabel(key),
        name: key,
        value,
        fields: generatePropertyFields(value)
      };
    } else {
      return generateFieldByType(key, value);
    }
  });
};
const isEmptyArrayItem = (array) => {
  let flag = true;
  Object.entries(array).forEach(([key, value]) => {
    switch (typeof value) {
      case "string":
        if (value.length > 0) {
          flag = false;
        }
        break;
      case "number":
        if (value > 0) {
          flag = false;
        }
        break;
    }
  });
  return flag;
};
const removeEmptyArrayItems = (array) => {
  return array.filter((item) => {
    let flag = false;
    Object.entries(item).forEach(([key, value]) => {
      switch (typeof value) {
        case "string":
          if (value.trim().length > 0) {
            flag = true;
          }
          break;
        case "number":
          if (value > 0) {
            flag = true;
          }
          break;
        case "boolean":
          if (value) {
            flag = true;
          }
          break;
      }
    });
    return flag;
  });
};
const getPropertyArray = (section) => {
  var _a;
  const array = (_a = section == null ? void 0 : section.properties) == null ? void 0 : _a.array;
  return array ? removeEmptyArrayItems(array) : [];
};
export {
  generatePropertyFields as a,
  getPropertyArray as b,
  getPageSection as g,
  isEmptyArrayItem as i
};
