import React from "react";
import { NavLink, Link } from "react-router-dom";
import SideBarItem from "./SideBarItem";
import { adminNavs } from "../../constants/data";

const SideBar = () => {
  return (
    <section className="w-full h-screen black-gradient-2__bg px-2">
      <Link to={""}>
        <div className="w-full h-[100px] text-[56px] flex justify-center items-center border-2 border-white mb-4 hover:text-secondary hover:border-secondary">
          logo
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
