import React, { useState, useEffect } from "react";
import BidCard from "./BidCard";

const BidCardSection = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((Response) => Response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="mt-10 pt-10 border-t-2 border-t-[#3F3E45] flex flex-col gap-6 md:gap-10 md:grid md:grid-cols-2 lg:grid-cols-3">
      {products.map((currProduct) => (
        <BidCard key={currProduct.id} product={currProduct} />
      ))}
    </div>
  );
};

export default BidCardSection;
