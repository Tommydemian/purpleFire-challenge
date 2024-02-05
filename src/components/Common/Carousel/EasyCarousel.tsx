import { desktopCarouselItems } from "../../../data/LandingPage/carouselItemsData";
import { LeftCircledArrowIcon } from "../../ProductDetailsPage/Icons/LeftCircledArrow";
import { RightCircledArrowIcon } from "../../ProductDetailsPage/Icons/RightCircledArrow";
import { useState } from "react";

export const EasyCarousel = () => {
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
    <section style={{ background: "#fff", paddingBottom: "3em" }}>
      <div className="carousel">
        <button onClick={handlePrevClick} style={{ display: "contents" }}>
          <LeftCircledArrowIcon className="arrowLeft" />
        </button>
        {desktopCarouselItems.map((slide, index) => (
          <img
            src={slide.item}
            alt={slide.item}
            key={slide.id}
            className={`${activeIndex === index ? "slide" : "slide-hidden"} ${
              slide.id === 1 || slide.id === 6 ? "special-slide" : ""
            }`}
          />
        ))}
        Cuato
        <button onClick={handlePrevClick} style={{ display: "contents" }}>
          <RightCircledArrowIcon className="arrowRight" />
        </button>
        <span>
          {desktopCarouselItems.map((_, index) => (
            <button key={index}>
              {activeIndex}/{desktopCarouselItems.length}
            </button>
          ))}
        </span>
      </div>
    </section>
  );
};
