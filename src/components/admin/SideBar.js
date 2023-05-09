import React from "react";
import { NavLink, Link } from "react-router-dom";
import SideBarItem from "./SideBarItem";

import { logo } from "../../assets/SVGs";
import { adminNavs } from "../../constants/data";

const SideBar = () => {
  return (
    <section className="w-full h-screen black-gradient-2__bg px-2">
      <Link to={""}>
        <div className="h-[100px] w-full mb-4">
          <img className="h-full w-full object-contain" src={logo} alt="logo" />
        </div>
      </Link>
      <ul className="flex flex-col gap-4 p-1">
        {adminNavs.map((nav) => (
          <NavLink
            to={nav.to}
            key={nav.id + "-link"}
            className={({ isActive }) =>
              isActive
                ? "border-2 border-dashed border-secondary text-secondary hover:text-white "
                : "hover:text-secondary"
            }
          >
            <SideBarItem
              key={"sideBarItem-" + nav.id}
              icon={nav.icon}
              title={nav.title}
            />
          </NavLink>
        ))}
      </ul>
    </section>
  );
};

export default SideBar;
