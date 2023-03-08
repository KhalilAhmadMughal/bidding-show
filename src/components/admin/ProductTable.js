import React, { useState } from "react";
import ProductRow from "./ProductRow";
import ProductEditPop from "./ProductEditPop";
import ProductDeletePopup from "./ProductDeletePopup";

const ProductTable = (props) => {
  const [editPopup, setEditPopup] = useState(false);
  const [deletePopup, setDeletePopup] = useState(false);
  const editPopupHandler = () => {
    setEditPopup(!editPopup);
  };
  const deletePopupHandler = () => {
    setDeletePopup(!deletePopup);
  };
  const headings = [
    "id",
    "pic",
    "title",
    "price",
    "description",
    "raise",
    "rasied by",
    "at",
    "actions",
  ];

  return (
    <section>
      <table className="table-auto w-full h-full text-[8px] sm:text-[12px] md:text-[14px] lg:text-[16px] border-y border-gray-600">
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
          </tr>
        </thead>
        <tbody>
          {props.products.map((product) => (
            <ProductRow
              key={product.id + "-" + product.title}
              data={product}
              editPopup={editPopupHandler}
              deletePopup={deletePopupHandler}
            />
          ))}
        </tbody>
      </table>
      <div className={`${editPopup ? "fixed" : "hidden"}`}>
        <ProductEditPop editPopup={editPopupHandler} />
      </div>
      <div className={`${deletePopup ? "fixed" : "hidden"}`}>
        <ProductDeletePopup deletePopup={deletePopupHandler} />
      </div>
    </section>
  );
};

export default ProductTable;
