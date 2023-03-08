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
    <section className="fixed top-0 w-full h-screen bg-[rgba(0,0,0,.8)] flex justify-center items-center">
      <div className="z-10 relative flex flex-col justify-between  bg-popup rounded-lg h-[180px] w-[300px]">
        <header className="basis-[15%] flex items-center justify-between px-4 py-2 font-semibold">
          <h2>Delete Product</h2>
          <BiX
            onClick={exitHandler}
            size={28}
            className="absolute -top-2 -right-2 border-2 rounded-full bg-slate-500 hover:bg-red-400"
          />
        </header>
        <p className="px-4">Do you want to delete this?</p>

        <div className="flex px-4 gap-4 pb-4">
          <div className="basis-[50%]">
            <CustomButton>delete</CustomButton>
          </div>
          <div className="flex-1" onClick={exitHandler}>
            <CustomButton>cencle</CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDeletePopup;
