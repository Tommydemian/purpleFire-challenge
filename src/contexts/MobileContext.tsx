import React, { createContext, useState, useEffect, useContext } from "react";

// Provider type
type MobileProviderProps = {
  children: React.ReactNode;
};

// Context type
type MobileContextType = {
  isMobile: boolean;
};

export const MobileContext = createContext<MobileContextType | undefined>(
  undefined
);

export const MobileProvider: React.FC<MobileProviderProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 480);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <MobileContext.Provider value={{ isMobile }}>
      {children}
    </MobileContext.Provider>
  );
};

// hook
export const useMobileContext = () => {
  const context = useContext(MobileContext);
  if (!context) {
    throw new Error("useAuthContext must be used within a AuthProvider");
  }
  return context;
};
