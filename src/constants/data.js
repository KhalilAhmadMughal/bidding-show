import { bid, products } from "../assets/SVGs";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "clients",
    title: "Clients",
  },
];

export const adminNavs = [
  {
    id: "products",
    title: "products",
    icon: products,
    to: "products",
  },
  {
    id: "bids",
    title: "bids",
    icon: bid,
    to: "bids",
  },
];
