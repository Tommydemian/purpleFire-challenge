export type ServiceItem = {
  id: string;
  title: string;
  description: string;
};

export const servicesData: ServiceItem[] = [
  {
    id: "our-advices",
    title: "Our Advices",
    description:
      "What if you took advantage of this rather special period to rethink your interior? You spend more time at home so you might as well feel good there.",
  },
  {
    id: "click-and-collect",
    title: "Click and Collect",
    description:
      "Adapted and contactless. Free from €200 of purchases in stores offering the service.",
  },
  {
    id: "conception-service",
    title: "Conception Service",
    description:
      "Personalized service with an expert advisor for your interior and exterior decoration or layout projects.",
  },
  {
    id: "installation-service",
    title: "Installation Service",
    description:
      "Our furniture packaged in flat packs are designed for easy assembly. But you can call on our partner.",
  },
  // Agrega más elementos según sea necesario
];
