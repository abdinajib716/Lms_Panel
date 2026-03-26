import { useState, useEffect } from "react";
const useScreen = () => {
  const [screen, setScreen] = useState(0);
  const [size, setSize] = useState("default");
  useEffect(() => {
    const handleResize = () => {
      setScreen(window.innerWidth);
      if (window.innerWidth < 640) {
        setSize("sm");
      } else if (window.innerWidth < 768) {
        setSize("md");
      } else if (window.innerWidth < 1024) {
        setSize("lg");
      } else if (window.innerWidth < 1280) {
        setSize("xl");
      } else {
        setSize("default");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return { size, screen };
};
export {
  useScreen as u
};
