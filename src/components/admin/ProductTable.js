import React, { useState } from "react";
import { productData } from "../../constants/data";
import ProductRow from "./ProductRow";
import ProductEditPop from "./ProductEditPop";
import ProductDeletePopup from "./ProductDeletePopup";

const ProductTable = () => {
  const [editPopup, setEditPopup] = useState(false);
  const [deletePopup, setDeletePopup] = useState(false);
  const editPopupHandler = () => {
    setEditPopup(!editPopup);
  };
  const deletePopupHandler = () => {
    setDeletePopup(!deletePopup);
  };
  const headings = Object.keys(productData[0]);
  return (
    <section>
      <table className="table-auto w-full text-[8px] sm:text-[12px] md:text-lg border-y border-gray-600">
        <thead className="black-gradient__bg">
          <tr>
            {headings.map((heading) => (
              <th
                key={heading}
                className="uppercase font-semibold text-left py-2"
              >
                {heading}
              </th>
            ))}
            {/* <th className="uppercase">switch</th> */}
            <th className="uppercase">actions</th>
          </tr>
        </thead>
        <tbody>
          {productData.map((product) => (
            <ProductRow
              key={product.id + "-row"}
              data={product}
              editPopup={editPopupHandler}
              deletePopup={deletePopupHandler}
            />
          ))}
        </tbody>
      </table>
      <div
        className={`top-24 left-24 md:left-[70%] bg-popup rounded-lg h-[400px] w-[300px] ${
          editPopup ? "fixed" : "hidden"
        }`}
      >
        <ProductEditPop editPopup={editPopupHandler} />
      </div>
      <div
        className={`top-24 left-24 md:left-[70%] bg-popup rounded-lg h-[300px] w-[300px] ${
          deletePopup ? "fixed" : "hidden"
        }`}
      >
        <ProductDeletePopup deletePopup={deletePopupHandler} />
      </div>
    </section>
  );
};

export default ProductTable;
