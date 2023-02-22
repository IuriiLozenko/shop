import { getRandomPhoto } from "../components/products/Product/product.helpers";
import { Product } from "../slices/products.slice";

export const productsMock: Product[] = [
  {
    id: "1",
    name: "Motorola G324",
    price: 323.23,
    quantity: 53,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec augue in leo lobortis efficitur. Suspendisse lorem risus, tristique feugiat.",
    category: "phones",
    photos: [
      {
        url: getRandomPhoto(),
      },
    ],
  },
  {
    id: "2",
    name: "Samsung OLED FULL ULTRA SUPER HIPER EXTRA HD",
    price: 99994434.0,
    quantity: 2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec augue in leo lobortis efficitur. Suspendisse lorem risus, tristique feugiat.",
    category: "RTV",
    photos: [
      {
        url: getRandomPhoto(),
      },
    ],
  },
  {
    id: "3",
    name: "Amica Jakas",
    price: 987.23,
    quantity: 43,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec augue in leo lobortis efficitur. Suspendisse lorem risus, tristique feugiat.",
    category: "AGD",
    photos: [
      {
        url: getRandomPhoto(),
      },
    ],
  },
  {
    id: "4",
    name: "Electrolux Stary",
    price: 467.23,
    quantity: 43,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec augue in leo lobortis efficitur. Suspendisse lorem risus, tristique feugiat.",
    category: "AGD",
    photos: [
      {
        url: getRandomPhoto(),
      },
    ],
  },
];
