import React, { useState } from "react";

import CustomButton from "./CustomButton";
import { BiX } from "react-icons/bi";

const BidCard = (props) => {
  const [raiseForm, SetRaiseForm] = useState(false);
  const clickHandler = (event) => {
    console.log(event.currentTarget.id);
    if (
      event.currentTarget.id === "raise" ||
      event.currentTarget.id === "cross"
    ) {
      SetRaiseForm((prev) => !prev);
    }
  };

  return (
    <div className="mx-auto flex flex-col w-[350px] h-[386px] rounded-lg  card__bg hover:scale-105 hover:ease-in-out hover:duration-500">
      <div className="w-full h-[40%] rounded-lg ">
        <img
          className="h-full w-full rounded-lg"
          src={props.product.pic}
          alt=""
        />
      </div>
      <div className="my-2 mx-4 rounded-lg border border-gray-400"></div>
      <div className="flex px-4 flex-col w-full justify-between h-[72px]">
        <div className=" flex justify-between items-center w-full max-h-[40%]">
          <h2 className="capitalize w-[83%] h-full text-ellipsis overflow-hidden whitespace-nowrap">
            {props.product.title}
          </h2>
          <p className="text-sm text-green-500">
            {props.product.price + " Rs."}
          </p>
        </div>
        <p className="text-sm text-gray-400 w-full h-[60%] description">
          {props.product.description}
        </p>
      </div>
      <div className="my-2 mx-4 rounded-lg border border-gray-400"></div>
      <div className="flex flex-col px-4 mb-1">
        <div className="flex  gap-2 items-center">
          <h3 className="text-md basis-[90px] capitalize">raise:</h3>
          <p className="capitalize flex-1 text-sm text-green-400">
            {props.product.raise + " Rs."}
          </p>
        </div>
        <div className="flex  gap-2 items-center">
          <h3 className="text-md basis-[90px] capitalize">raised By:</h3>
          <p className="capitalize flex-1 text-sm text-gray-400">
            {props.product.raised_by}
          </p>
        </div>
        <div className="flex  gap-2 items-center">
          <h3 className="text-md basis-[90px] capitalize">raised at:</h3>
          <p className="capitalize flex-1 text-sm text-gray-400">
            {props.product.raised_at}
          </p>
        </div>
      </div>
      <div className="px-4">
        <div
          className={`${
            raiseForm ? "flex justify-between items-center" : "hidden"
          }`}
        >
          <div className="flex justify-between">
            <input
              type="number"
              className="p-2 rounded-lg text-black w-[72%]"
              placeholder="Enter Price"
            />
            <CustomButton>raise</CustomButton>
          </div>
          <div id="cross" onClick={clickHandler}>
            <BiX size="32px" className="hover:text-secondary" />
          </div>
        </div>

        <div
          onClick={clickHandler}
          id="raise"
          className={`justify-end ${!raiseForm ? "flex" : "hidden"}`}
        >
          <CustomButton>raise money</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default BidCard;
