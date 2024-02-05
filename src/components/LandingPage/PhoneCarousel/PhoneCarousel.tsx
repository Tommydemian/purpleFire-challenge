import { PhoneCarouselItem } from "./PhoneCarouselItem/PhoneCarouselItem";
import styles from "./PhoneCarousel.module.css";
import {
  type CarouselItem,
  phoneCarouselItems,
} from "../../../data/LandingPage/carouselItemsData";

export const PhoneCarousel = () => {
  return (
    <section className={styles.scroller}>
      <div className={styles.scrollerInner}>
        {phoneCarouselItems.map((slide: CarouselItem, index) => (
          // not a recommended pratice to use index as key but it's static content content and giving the pic repetition .id is not working. Usful for quick solve but need refactor.
          <PhoneCarouselItem key={index} slide={slide} />
        ))}
      </div>
    </section>
  );
};
