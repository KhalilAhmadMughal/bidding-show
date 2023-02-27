import React, { useState } from "react";
import { BiX } from "react-icons/bi";

import CustomButton from "../custom/CustomButton";

const ProductDeletePopup = (props) => {
  const [exitPopup, setExitPopup] = useState(false);
  const exitHandler = () => {
    setExitPopup(!exitPopup);
    props.deletePopup();
  };

  return (
    <section className="w-full h-full flex flex-col ">
      <header className="basis-[15%] flex items-center justify-between px-4 py-2 font-semibold">
        <h2>Delete Product</h2>
        <BiX
          onClick={exitHandler}
          size={28}
          className="absolute -top-2 -right-2 border-2 rounded-full bg-slate-500 hover:bg-red-400"
        />
      </header>
      <p>do whant to delete this product?</p>

      <div className="flex px-4 gap-4">
        <CustomButton>delete</CustomButton>
        <CustomButton>cencle</CustomButton>
      </div>
    </section>
  );
};

export default ProductDeletePopup;
