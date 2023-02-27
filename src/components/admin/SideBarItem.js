import React, { useState } from "react";
import { BiCard } from "react-icons/bi";

const SideBarItem = () => {
  const [itemStyle, SetItemStyle] = useState(false);

  const clickHandler = () => {
    SetItemStyle(!itemStyle);
  };
  return (
    <li
      onClick={clickHandler}
      className={`flex items-center gap-4 ${
        itemStyle
          ? "border-2 border-secondary rounded-lg hover:text-secondary"
          : ""
      }`}
    >
      <BiCard size="28px" />

      <span>Products</span>
    </li>
  );
};

export default SideBarItem;
