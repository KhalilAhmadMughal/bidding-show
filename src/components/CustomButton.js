import React from "react";

const CustomButton = (props) => {
  return (
    <button className="p-2 button__bg rounded text-black capitalize hover:text-secondary ">
      {props.children}
    </button>
  );
};

export default CustomButton;
