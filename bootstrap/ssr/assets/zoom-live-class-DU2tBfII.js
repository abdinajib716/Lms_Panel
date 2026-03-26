import { jsx, jsxs } from "react/jsx-runtime";
import { u as useAuth } from "./use-auth-8FvJer_G.js";
import { usePage } from "@inertiajs/react";
import { useState, useRef, useEffect } from "react";
const ZoomLiveClass = ({ live_class, watchHistory, zoom_sdk_client_id }) => {
  const { props } = usePage();
  const { auth, translate } = props;
  const { frontend } = translate;
  const { isAdmin } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sdkLoaded, setSdkLoaded] = useState(false);
  const initializationRef = useRef(false);
  const redirectUrl = isAdmin ? `/dashboard/courses` : `/play-course/${live_class.course.slug}/${watchHistory.id}/${watchHistory.current_watching_id}`;
  const meetingInfo = (() => {
    if (!live_class.additional_info) return null;
    try {
      if (typeof live_class.additional_info === "object") {
        return live_class.additional_info;
      }
      if (typeof live_class.additional_info === "string") {
        return JSON.parse(live_class.additional_info);
      }
      return null;
    } catch (error2) {
      return null;
    }
  })();
  const loadZoomSDK = async () => {
    if (window.ZoomMtg) {
      setSdkLoaded(true);
      return Promise.resolve();
    }
    const scripts = [
      "https://source.zoom.us/4.0.0/lib/vendor/react.min.js",
      "https://source.zoom.us/4.0.0/lib/vendor/react-dom.min.js",
      "https://source.zoom.us/4.0.0/lib/vendor/redux.min.js",
      "https://source.zoom.us/4.0.0/lib/vendor/redux-thunk.min.js",
      "https://source.zoom.us/4.0.0/zoom-meeting-4.0.0.min.js"
      // Client View SDK
    ];
    for (const scriptSrc of scripts) {
      await new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = scriptSrc;
        script.async = false;
        script.onload = () => {
          resolve();
        };
        script.onerror = () => {
          reject(new Error(`Failed to load script: ${scriptSrc}`));
        };
        document.head.appendChild(script);
        setTimeout(() => reject(new Error(`Script load timeout: ${scriptSrc}`)), 1e4);
      });
    }
    setSdkLoaded(true);
  };
  const fetchMeetingConfig = async () => {
    try {
      setLoading(true);
      const response = await fetch(route("live-class.signature", live_class.id), {
        method: "GET",
        headers: {
          Accept: "application/json",
          "X-Requested-With": "XMLHttpRequest"
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      return data;
    } catch (error2) {
      setError(error2 instanceof Error ? error2.message : frontend.failed_to_get_meeting_configuration);
      return null;
    }
  };
  const initializeZoomSDK = async (config) => {
    try {
      if (!window.ZoomMtg) {
        throw new Error(frontend.zoom_sdk_not_loaded);
      }
      window.ZoomMtg.checkSystemRequirements();
      const appElement = document.getElementById("app") || document.body;
      appElement.innerHTML = "";
      document.body.style.margin = "0";
      document.body.style.padding = "0";
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
      document.body.style.width = "100vw";
      window.ZoomMtg.preLoadWasm();
      window.ZoomMtg.prepareWebSDK();
      window.ZoomMtg.i18n.load("en-US");
      window.ZoomMtg.i18n.onLoad(() => {
        window.ZoomMtg.init({
          leaveUrl: window.location.origin + redirectUrl,
          // Redirect after leaving
          disableCORP: !window.crossOriginIsolated,
          // Required for security
          success: () => {
            joinMeeting(config);
          },
          error: (error2) => {
            setError(frontend.failed_to_initialize_meeting + ": " + (error2.message || error2));
            setLoading(false);
          }
        });
      });
      setupMeetingListeners();
    } catch (error2) {
      setError(error2 instanceof Error ? error2.message : frontend.failed_to_initialize_meeting);
      setLoading(false);
    }
  };
  const joinMeeting = (config) => {
    window.ZoomMtg.join({
      meetingNumber: config.meetingNumber,
      userName: auth.user.name,
      signature: config.signature,
      userEmail: auth.user.email || "",
      passWord: config.password,
      success: (res) => {
        setLoading(false);
        window.ZoomMtg.getCurrentUser({
          success: (res2) => {
          }
        });
        window.ZoomMtg.getAttendeeslist({});
      },
      error: (error2) => {
        setError(frontend.failed_to_join_meeting + ": " + (error2.message || error2));
        setLoading(false);
      }
    });
  };
  const setupMeetingListeners = () => {
    window.ZoomMtg.inMeetingServiceListener("onUserJoin", (data) => {
    });
    window.ZoomMtg.inMeetingServiceListener("onUserLeave", (data) => {
    });
    window.ZoomMtg.inMeetingServiceListener("onUserIsInWaitingRoom", (data) => {
    });
    window.ZoomMtg.inMeetingServiceListener("onMeetingStatus", (data) => {
    });
  };
  const cleanup = () => {
    if (window.ZoomMtg) {
      try {
        window.ZoomMtg.leave();
      } catch (error2) {
      }
    }
  };
  useEffect(() => {
    if (initializationRef.current) return;
    initializationRef.current = true;
    const initializeMeeting = async () => {
      if (!zoom_sdk_client_id) {
        setError(frontend.zoom_sdk_not_configured);
        setLoading(false);
        return;
      }
      if (!meetingInfo) {
        setError(frontend.meeting_information_not_found);
        setLoading(false);
        return;
      }
      try {
        await loadZoomSDK();
        const config = await fetchMeetingConfig();
        if (!config) return;
        await initializeZoomSDK(config);
      } catch (error2) {
        setError(error2 instanceof Error ? error2.message : frontend.failed_to_initialize_meeting);
        setLoading(false);
      }
    };
    initializeMeeting();
    return cleanup;
  }, []);
  if (loading) {
    return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-gray-900", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-white" }),
      /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold text-white", children: live_class.class_topic }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-300", children: !sdkLoaded ? frontend.loading_zoom_sdk : frontend.joining_meeting })
    ] }) });
  }
  if (error) {
    return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md rounded-lg bg-white p-8 text-center shadow-lg", children: [
      /* @__PURE__ */ jsx("h1", { className: "mb-4 text-2xl font-bold text-red-600", children: frontend.unable_to_join_meeting }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: error }),
      (meetingInfo == null ? void 0 : meetingInfo.join_url) && /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx("p", { className: "mb-2 text-sm text-gray-500", children: frontend.you_can_join_directly }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: meetingInfo.join_url,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-block rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700",
            children: frontend.open_in_zoom_app
          }
        )
      ] }),
      /* @__PURE__ */ jsx("button", { onClick: () => window.location.reload(), className: "mt-4 rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-700", children: frontend.try_again })
    ] }) });
  }
  return null;
};
export {
  ZoomLiveClass as default
};
