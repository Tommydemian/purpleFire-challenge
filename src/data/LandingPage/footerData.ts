export type LinkList = {
  id: number;
  title: string;
  links: string[];
};

export const linkListData: LinkList[] = [
  {
    id: 1,
    title: "Products",
    links: [
      "Furniture",
      "Decoration",
      "Storage",
      "Baby and child",
      "Connected home",
    ],
  },
  {
    id: 2,
    title: "Rooms",
    links: [
      "Living room",
      "Dining room",
      "Cooked",
      "Bedroom",
      "Bathroom",
      "Office",
      "Laundry",
      "Garage",
    ],
  },
  {
    id: 3,
    title: "Services",
    links: [
      "Click and collect",
      "Conception",
      "Installation",
      "Advices",
      "Gift card",
    ],
  },
  {
    id: 4,
    title: "About",
    links: ["Our story", "Our stores", "Our partners"],
  },
];
