import { useState, useEffect } from "react";

const useMatchMedia = (mediaQuery, initialValue) => {
  const [match, setMatch] = useState(initialValue);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery);
    const documentChangeHandler = () => setMatch(mediaQueryList.matches);

    // Comprueba el estado inicial
    setMatch(mediaQueryList.matches);

    // Escucha cambios
    mediaQueryList.addEventListener("change", documentChangeHandler);

    return () => {
      mediaQueryList.removeEventListener("change", documentChangeHandler);
    };
  }, [mediaQuery]);

  return match;
};

// Uso del Hook
const Component = () => {
  const isMobile = useMatchMedia("(max-width: 480px)", false);

  // Lógica del componente usando isMobile
};
