function getQueryParams(url) {
  const queryString = url.split("?")[1];
  if (!queryString) return {};
  return Object.fromEntries(
    queryString.split("&").map((param) => {
      const [key, value] = param.split("=");
      return [key, decodeURIComponent(value || "")];
    })
  );
}
function getRouteSegments(url) {
  try {
    let pathname;
    if (url.startsWith("/")) {
      pathname = url.split("?")[0];
    } else {
      try {
        const urlObj = new URL(url);
        pathname = urlObj.pathname;
      } catch (error) {
        pathname = url.split("?")[0];
      }
    }
    const segments = pathname.split("/").filter((segment) => segment.length > 0);
    return segments;
  } catch (error) {
    return [];
  }
}
function routeLastSegment(route) {
  return getRouteSegments(route).pop() || "";
}
function routeSecondSegment(route) {
  return getRouteSegments(route)[1] || "";
}
export {
  routeLastSegment as a,
  getRouteSegments as b,
  getQueryParams as g,
  routeSecondSegment as r
};
