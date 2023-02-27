import React from "react";

import { productData } from "../../constants/data";
import BidCard from "./BidCard";

const BidCardSection = () => {
  return (
    <div className="mt-10 pt-10 border-t-2 border-t-[#3F3E45] flex flex-col gap-6 md:gap-10 md:grid md:grid-cols-2 lg:grid-cols-3">
      {productData.map((currProduct) => (
        <BidCard key={currProduct.id} product={currProduct} />
      ))}
    </div>
  );
};

export default BidCardSection;
