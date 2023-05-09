import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { BiUserCircle, BiMenu, BiX } from "react-icons/bi";

import { logo } from "../../assets/SVGs";
import { homeNavs } from "../../constants/data";
import UserDetail from "./UserDetail";

const NavBar = () => {
  const [toggle, SetToggle] = useState(false);
  const [userDetailMobileView, SetUserDetailMobileView] = useState(false);
  const [userDetail, SetUserDetail] = useState(false);

  const clickHandler = (event) => {
    if (event.currentTarget.id === "menu") {
      SetToggle((prev) => !prev);
    } else if (event.currentTarget.id === "pc") {
      SetUserDetail((prev) => !prev);
    } else {
      SetUserDetailMobileView((prev) => !prev);
    }
  };

  function userDetailCross(id) {
    if (id === "pc-user") {
      SetUserDetail((prev) => !prev);
    } else {
      SetUserDetailMobileView((prev) => !prev);
    }
  }

  return (
    <nav className="flex justify-between py-4 w-full">
      <Link to={""}>
        <div className="h-[35px] w-[100px]">
          <img className="h-full w-full object-contain" src={logo} alt="logo" />
        </div>
      </Link>
      <div className="gap-20 items-center hidden sm:flex">
        <ul className="flex gap-4">
          {homeNavs.map((nav, index) => (
            <li className="capitalize" key={nav.id + "-" + index}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-dashed border-secondary transition-all duration-300 text-secondary hover:text-white"
                    : "hover:text-secondary"
                }
                to={nav.to}
              >
                {nav.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <div
          onClick={clickHandler}
          className="cursor-pointer hover:text-secondary"
          id="pc"
        >
          <BiUserCircle size="32px" />
        </div>
        <div
          className={`${
            userDetail ? "block" : "hidden"
          } absolute top-[50px] right-5`}
        >
          <UserDetail hide={userDetailCross} id="pc-user" />
        </div>
      </div>
      <div
        onClick={clickHandler}
        id="menu"
        className="cursor-pointer hover:text-secondary sm:hidden"
      >
        {!toggle ? <BiMenu size="32px" /> : ""}
      </div>

      <div
        className={`${
          toggle
            ? "fixed right-0 top-0 p-4 w-[300px] rounded-lg border-r border-r-dimWhite min-h-screen gray-gradient__bg ease-in-out duration-700"
            : "fixed right-[-100%]"
        } `}
      >
        <div
          onClick={clickHandler}
          id="menu"
          className="flex justify-end cursor-pointer hover:text-secondary mb-6"
        >
          {toggle ? <BiX size="32px" /> : ""}
        </div>
        <div className="flex justify-between">
          <Link to={""}>
            <div className="h-[35px] w-[100px]">
              <img
                className="h-full w-full object-contain"
                src={logo}
                alt="logo"
              />
            </div>
          </Link>
          <div
            onClick={clickHandler}
            className="cursor-pointer hover:text-secondary"
            id="mobile"
          >
            <BiUserCircle size="32px" />
          </div>
          <div
            className={`${
              userDetailMobileView ? "block" : "hidden"
            } absolute top-24 right-9`}
          >
            <UserDetail hide={userDetailCross} id="mobile-user" />
          </div>
        </div>
        <ul className="flex flex-col mt-6 gap-2">
          {homeNavs.map((nav, index) => (
            <li className="capitalize" key={nav.id + "-" + index}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-dashed border-secondary transition-all duration-300 text-secondary hover:text-white"
                    : "hover:text-secondary"
                }
                to={nav.to}
              >
                {nav.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
