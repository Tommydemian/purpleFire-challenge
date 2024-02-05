import React, { createContext, useContext, useState, ReactNode } from "react";
import { desktopCarouselItems } from "../data/LandingPage/carouselItemsData";

type CarouselContextType = {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  handlePrevClick: () => void;
  handleNextClick: () => void;
  totalSlides: number;
};

const CarouselContext = createContext<CarouselContextType | undefined>(
  undefined
);

type CarouselProviderProps = {
  children: ReactNode;
};

export const CarouselProvider: React.FC<CarouselProviderProps> = ({
  children,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : desktopCarouselItems.length - 1
    );
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < desktopCarouselItems.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <CarouselContext.Provider
      value={{
        activeIndex,
        setActiveIndex,
        handlePrevClick,
        handleNextClick,
        totalSlides: desktopCarouselItems.length,
      }}
    >
      {children}
    </CarouselContext.Provider>
  );
};

export const useCarousel = () => {
  const context = useContext(CarouselContext);
  if (context === undefined) {
    throw new Error("useCarousel must be used within a CarouselProvider");
  }
  return context;
};
