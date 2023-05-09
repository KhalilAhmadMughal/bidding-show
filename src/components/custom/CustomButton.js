import React from "react";

const CustomButton = (props) => {
  return (
    <button
      type={props.type}
      className={`p-2 button__bg w-full rounded text-black capitalize ${
        props.styles ? props.styles : "hover:text-secondary"
      }`}
    >
      {props.children}
    </button>
  );
};

export default CustomButton;
