import { useState, useEffect } from "react";

export const useAuxIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isMobile };
};
