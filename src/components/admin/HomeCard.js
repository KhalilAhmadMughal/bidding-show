import React from "react";
import { Link } from "react-router-dom";
const HomeCard = (props) => {
  return (
    <Link to={props.to}>
      <div className="black-gradient__bg flex flex-col items-center justify-center gap-4 h-[200px] w-[200px] border-2 border-transparent rounded-lg hover:shadow-md hover:shadow-dimWhite hover:cursor-pointer hover:border-secondary hover:text-secondary hover:scale-105 hover:ease-in-out hover:duration-500">
        <div className="h-[80px] w-[80px]">
          <img className="w-full h-full object-fill" src={props.icon} alt="" />
        </div>
        <h2 className="text-2xl capitalize">{props.title}</h2>
      </div>
    </Link>
  );
};

export default HomeCard;
