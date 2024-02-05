import item1 from "../../assets/images/LandingPage/carousel/carouselpic-1.jpeg";
import item2 from "../../assets/images/LandingPage/carousel/carouselpic-2.png";
import item3 from "../../assets/images/LandingPage/carousel/carouselpic-3.png";
import item4 from "../../assets/images/LandingPage/carousel/carouselpic-4.png";
import item5 from "../../assets/images/LandingPage/carousel/carouselpic-5.png";
import item6 from "../../assets/images/LandingPage/carousel/carouselpic-6.jpeg";

export type CarouselItem = {
  item: string;
  id: number;
};

export const desktopCarouselItems = [
  { item: item1, id: 1 },
  { item: item2, id: 2 },
  { item: item3, id: 3 },
  { item: item4, id: 4 },
  { item: item5, id: 5 },
  { item: item6, id: 6 },
];

export const phoneCarouselItems = [
  { item: item1, id: 1 },
  { item: item2, id: 2 },
  { item: item3, id: 3 },
  { item: item4, id: 4 },
  { item: item5, id: 5 },
  { item: item6, id: 6 },
  { item: item1, id: 1 },
  { item: item2, id: 2 },
];
