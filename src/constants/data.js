import { bid, products } from "../assets/SVGs";

export const homeNavs = [
  {
    id: "home",
    title: "Home",
    to: "/",
  },
  {
    id: "admin",
    title: "Admin",
    to: "/admin",
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
