const onHandleChange = (event, setData, setPreview) => {
  const target = event.target;
  if (target.type === "file") {
    const files = target.files;
    if (files && files[0]) {
      setData(target.name, files[0]);
      setPreview == null ? void 0 : setPreview(URL.createObjectURL(files[0]));
    }
  } else {
    setData(target.name, target.value);
  }
};
export {
  onHandleChange as o
};
