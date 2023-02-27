import React from "react";
import SideBarItem from "./SideBarItem";

const SideBar = () => {
  return (
    <section className="w-full h-screen black-gradient-2__bg px-2">
      <div className="w-full h-[100px] text-[56px] flex justify-center items-center border-2 border-red-500 mb-4 ">
        logo
      </div>
      <ul className="flex flex-col gap-4 p-1">
        <SideBarItem />
        <SideBarItem />
        <SideBarItem />
        <SideBarItem />
      </ul>
    </section>
  );
};

export default SideBar;
