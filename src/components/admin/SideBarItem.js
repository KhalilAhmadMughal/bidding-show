import React from "react";

const SideBarItem = (props) => {
  return (
    <div className="w-[30px] h-[30px] flex items-center gap-2 m-2">
      <img
        className="w-full h-full object-fill"
        src={props.icon}
        alt={props.title}
      />
      <h3 className="capitalize">{props.title}</h3>
    </div>
  );
};

export default SideBarItem;
