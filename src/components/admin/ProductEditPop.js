import React, { useState } from "react";
import { BiX } from "react-icons/bi";
import InputField from "../custom/InputField";
import CustomButton from "../custom/CustomButton";
import { upload } from "../../assets";

const ProductEditPop = (props) => {
  const [exitPopup, setExitPopup] = useState(false);
  const exitHandler = () => {
    setExitPopup(!exitPopup);
    props.editPopup();
  };
  //   const [pic, setPic] = useState(upload);
  //   const imageHandler = (event) => {
  //     const currPic = event.target.value
  //       .replace(/^.*\\/, "")
  //       .replace(/\..+$/, "");

  //     console.log("changed picture...", currPic);
  //     // console.log(pic);
  //   };
  return (
    <section className="w-full h-full flex flex-col">
      <header className="basis-[15%] flex items-center justify-between px-4 py-2 font-semibold">
        <h2>Edit Product</h2>
        <BiX
          onClick={exitHandler}
          size={28}
          className="absolute -top-2 -right-2 border-2 rounded-full bg-slate-500 hover:bg-red-400"
        />
      </header>
      <form className="flex-1 p-4 flex flex-col justify-between ">
        <section className=" flex flex-col gap-4">
          <div className="h-[60px] w-[60px] border-dashed border-2 ">
            <img src={upload} className="h-full w-full object-fill" alt="" />
            <input
              type="file"
              accept="image/*"
              className="h-full w-full opacity-0 cursor-pointer z-10 relative top-[-102%]"
            />
          </div>
          <InputField label={"title"} />
          <InputField label={"description"} />
        </section>
        <CustomButton>update</CustomButton>
      </form>
    </section>
  );
};

export default ProductEditPop;
