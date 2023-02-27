import React, { useState } from "react";

const InputField = (props) => {
  const [showLabel, setShowLabel] = useState(false);
  const clickHandler = () => {
    setShowLabel(!showLabel);
  };
  return (
    <section className="flex flex-col relative">
      <label
        htmlFor={props.label}
        className={`${
          showLabel
            ? "capitalize text-xs absolute px-2 left-2 -top-2 bg-popup"
            : "hidden"
        }`}
      >
        {props.label}
      </label>
      <input
        onClick={clickHandler}
        id={props.label}
        name={props.label}
        type="text"
        placeholder={!showLabel ? "enter " + props.label : ""}
        className="bg-transparent border-2 rounded-md p-2 capitalize"
      />
    </section>
  );
};

export default InputField;
