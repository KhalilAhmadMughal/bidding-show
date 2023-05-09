import React from "react";
import { NavLink, Link } from "react-router-dom";

import { logo } from "../../assets/SVGs";
import { adminNavs } from "../../constants/data";

const AdminNavbar = () => {
  return (
    <section className="w-full px-6 h-16 flex items-center justify-between sm:flex-row-reverse ">
      <Link to={""}>
        <div className="cursor-pointer h-[35px] w-[100px] sm:hidden">
          <img className="h-full w-full object-contain" src={logo} alt="logo" />
        </div>
      </Link>
      <ul className="flex gap-4">
        {adminNavs.map((nav, index) => (
          <li className="capitalize" key={nav.id + "-" + index}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-dashed border-secondary transition-all duration-300 text-secondary"
                  : "hover:text-secondary"
              }
              to={nav.to}
            >
              {nav.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AdminNavbar;
