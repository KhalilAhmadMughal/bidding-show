import React from "react";
import { NavLink } from "react-router-dom";
import { adminNavs } from "../../constants/data";

const AdminNavbar = () => {
  return (
    <section className="px-6 h-16 flex items-center justify-between ">
      <ul className="flex gap-4">
        {adminNavs.map((nav, index) => (
          <li className="capitalize" key={nav.id + "-" + index}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-dashed border-secondary transition-all duration-300 text-secondary"
                  : "hover:text-secondary"
              }
              onSelect={`border-2 border-white`}
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
