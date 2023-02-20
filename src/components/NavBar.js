import React from "react";
import { useState } from "react";
import { BiUserCircle, BiMenu, BiX } from "react-icons/bi";

import { navLinks } from "../constants/data";
import UserDetail from "./UserDetail";

const NavBar = () => {
  const [toggle, SetToggle] = useState(false);
  const [userDetailMobileView, SetUserDetailMobileView] = useState(false);
  const [userDetail, SetUserDetail] = useState(false);

  const clickHandler = (event) => {
    if (event.currentTarget.id === "menu") {
      SetToggle((prev) => !prev);
    }
    if (event.currentTarget.id === "pc") {
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
      <span className="border border-white p-1 text-secondary">logo</span>
      <div className="gap-20 items-center hidden sm:flex">
        <ul className="flex gap-4">
          {navLinks.map((nav) => (
            <li key={nav.id}>{nav.title}</li>
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
        {!toggle ? <BiMenu size="32px" /> : <BiX size="32px" />}
      </div>

      <div
        className={`fixed left-0 top-0 p-4 w-[300px] rounded-lg border-r border-r-dimWhite min-h-screen gray-gradient__bg ${
          toggle ? "block" : "hidden"
        } `}
      >
        <div className="flex justify-between">
          <span className="border border-white p-1 cursor-pointer hover:text-secondary">
            logo
          </span>
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
            } absolute top-14 right-9`}
          >
            <UserDetail hide={userDetailCross} id="mobile-user" />
          </div>
        </div>
        <ul className="flex flex-col mt-6">
          {navLinks.map((nav) => (
            <li className="border-b border-b-dimWhite  p-2" key={nav.id}>
              {nav.title}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;