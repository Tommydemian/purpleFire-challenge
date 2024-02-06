import relatedProdImage1 from "../../assets/images/ProductDetailsPage/relatedProd1.png";
import relatedProdImage2 from "../../assets/images/ProductDetailsPage/relatedProd2.png";

export type RelatedProductData = {
  id: number;
  buttonText: string;
  iconColor: string;
  img: string;
  imgSpecs: { title: string; price: string; prevPrice?: string };
};

export const relatedProductsData: RelatedProductData[] = [
  {
    id: 1,
    buttonText: "NEW",
    iconColor: "#E73C17",
    img: relatedProdImage1,
    imgSpecs: { title: "Sony BRAVIA XR Android Tv", price: "$400.00" },
  },
  {
    id: 2,
    buttonText: "-10%",
    iconColor: "#D7D7D7",
    img: relatedProdImage2,
    imgSpecs: {
      title: "Mi P1 Smart Android HD TV",
      price: "$800.22",
      prevPrice: "$1000.66",
    },
  },
];
