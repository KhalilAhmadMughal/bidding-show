import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { adminNavs } from "../../constants/data";

const AdminNavbar = (props) => {
  const [toggle, SetToggle] = useState(false);

  const clickHandler = () => {
    SetToggle(!toggle);
    props.sidebarHandler();
  };
  return (
    <section className="w-full black-gradient-2__bg px-6 h-16 flex items-center justify-between ">
      <span
        onClick={clickHandler}
        className="hover:text-secondary cursor-pointer"
      >
        {!toggle ? <BiMenu size="42" /> : <BiX size="42" />}
      </span>
      <ul className="flex gap-4">
        {adminNavs.map((nav, index) => (
          <li className="capitalize" key={nav.id + "-" + index}>
            {nav.title}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AdminNavbar;
