import { imagePaths } from "../constants";

const products = [
  {
    id: 1,
    image: imagePaths.productOne,
    title: "Yellow Reserved Hoodie",
    category: "hoodie",
    price: 364.0,
    salePrice: 155.0,
    isHot: false,
    status: "best-seller",
  },
  {
    id: 2,
    image: imagePaths.productTwo,
    title: "Basic Dress Green",
    category: "dress",
    price: 236.0,
    salePrice: 0,
    isHot: true,
    status: "best-seller",
  },
  {
    id: 3,
    image: imagePaths.productThree,
    title: "Nike Air Zoom Pegasus",
    category: "shoe",
    price: 220.0,
    salePrice: 198.0,
    isHot: false,
    status: "best-seller",
  },
  {
    id: 4,
    image: imagePaths.productFour,
    title: "Geometric print Scarf",
    category: "dress",
    price: 53.0,
    salePrice: 0,
    isHot: false,
    status: "best-seller",
  },
  {
    id: 5,
    image: imagePaths.productFive,
    title: "Nike Sportswear Futura Luxe",
    category: "bag",
    price: 130.0,
    salePrice: 0,
    isHot: false,
    status: "new-arrival",
  },
  {
    id: 6,
    image: imagePaths.productFive,
    title: "Adicolor Classics Joggers",
    category: "dress",
    price: 130.0,
    salePrice: 0,
    isHot: false,
    status: "best-seller",
  },
  {
    id: 7,
    image: imagePaths.productSeven,
    title: "Nike Sportswear Futura Luxe",
    category: "glasses",
    price: 160.0,
    salePrice: 0,
    isHot: false,
    status: "new-arrival",
  },
  {
    id: 8,
    image: imagePaths.productEight,
    title: "Nike Repel Miler",
    category: "hoodie",
    price: 120.5,
    salePrice: 0,
    isHot: false,
    status: "new-arrival",
  },
  {
    id: 9,
    image: imagePaths.productOne,
    title: "Dynamic Classics Joggers",
    category: "dress",
    price: 130.0,
    salePrice: 0,
    isHot: false,
    status: "best-seller",
  },
  {
    id: 10,
    image: imagePaths.productThree,
    title: "Adicolor Classics Joggers",
    category: "dress",
    price: 130.0,
    salePrice: 0,
    isHot: false,
    status: "new-arrival",
  },
];

const followImages = [
  {
    id: 1,
    image: imagePaths.followOne,
  },
  {
    id: 2,
    image: imagePaths.followTwo,
  },
  {
    id: 3,
    image: imagePaths.followThree,
  },
  {
    id: 4,
    image: imagePaths.followFour,
  },
  {
    id: 5,
    image: imagePaths.followFive,
  },
  {
    id: 6,
    image: imagePaths.followSix,
  },
];

const brands = [
  {
    id: 1,
    src: imagePaths.brandOne,
  },
  {
    id: 3,
    src: imagePaths.brandThree,
  },
  {
    id: 4,
    src: imagePaths.brandFour,
  },
  {
    id: 5,
    src: imagePaths.brandFive,
  },
  {
    id: 2,
    src: imagePaths.brandTwo,
  },
];

const models = [
  {
    id: 4,
    src: imagePaths.modelFour,
  },
  {
    id: 1,
    src: imagePaths.modelOne,
  },
  {
    id: 2,
    src: imagePaths.modelTwo,
  },

  {
    id: 3,
    src: imagePaths.modelThree,
  },
  {
    id: 5,
    src: imagePaths.modelFive,
  },
];

export { products, followImages, brands, models };
