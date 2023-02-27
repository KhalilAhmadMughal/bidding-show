import React, { useState } from "react";

import CustomButton from "../custom/CustomButton";
import { BiX } from "react-icons/bi";

const BidCard = (props) => {
  const [raiseForm, SetRaiseForm] = useState(false);
  const [bidValue, SetBidValue] = useState(props.product.raise);
  const [errorMessage, SetErrorMessage] = useState("");
  const [errorStyle, SetErrorStyle] = useState("");

  const ref = React.useRef(null);

  const clickHandler = () => {
    SetRaiseForm((prev) => !prev);
    SetErrorMessage("");
    ref.current.value = "";
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const inputValue = event.target.bid.value;
    if (inputValue.trim().length === 0 || +inputValue === 0) {
      SetErrorMessage("Can't be null or 0.");
      SetErrorStyle("border-2 border-red-500");
    } else if (+inputValue <= props.product.raise) {
      SetErrorMessage("Should be > previous raise.");
      SetErrorStyle("border-2 border-red-500");
    } else {
      SetBidValue(inputValue);
      event.target.bid.value = "";
    }
  };

  return (
    <div className="mx-auto flex flex-col w-[320px] h-[386px] rounded-lg  card__bg hover:scale-105 hover:ease-in-out hover:duration-500">
      <div className="w-full h-[60%] rounded-lg ">
        <img
          className="h-full w-full rounded-lg"
          src={props.product.pic}
          alt=""
        />
      </div>
      {/* <div className="my-2 mx-4 rounded-lg border border-gray-400"></div> */}
      <div className="px-4 mt-2 flex-col w-full">
        <div className=" flex justify-between items-center w-full">
          <h2 className="capitalize w-[83%] h-full text-ellipsis overflow-hidden whitespace-nowrap">
            {props.product.title}
          </h2>
          <p className="text-sm text-green-500">
            {props.product.price + " Rs."}
          </p>
        </div>
      </div>
      <div className="px-4 mb-auto">
        <div className="flex items-center justify-between text-gray-400">
          <p className="max-w-[20%] capitalize text-sm text-green-400">
            {bidValue + " Rs."}
          </p>
          <span>&#x2022;</span>
          <p className="max-w-[40%] overflow-hidden text-ellipsis whitespace-nowrap capitalize text-sm">
            {props.product.raised_by}
          </p>
          <span>&#x2022;</span>
          <p className="max-w-[30%] capitalize text-sm ">
            {props.product.raised_at}
          </p>
        </div>
      </div>
      <div className="px-4 my-4">
        <div
          className={`${
            raiseForm ? "flex justify-between items-center" : "hidden"
          } `}
        >
          <form onSubmit={submitHandler} className="flex justify-between">
            <input
              type="number"
              onChange={() => {
                SetErrorMessage("");
                SetErrorStyle("");
              }}
              ref={ref}
              name="bid"
              className={`p-2 rounded-lg text-black w-[72%] ${errorStyle}`}
              placeholder="Enter a number"
            />
            <div>
              <CustomButton type="submit">raise</CustomButton>
            </div>
          </form>
          <div id="cross" onClick={clickHandler}>
            <BiX size="32px" className="hover:text-secondary" />
          </div>

          <div
            className={`${
              errorMessage ? "flex" : "hidden"
            } items-center absolute border-2 border-red-500 bg-slate-200 bottom-16 rounded-lg p-2 w-[285px] h-[70px]`}
          >
            <p className="text-red-500">{errorMessage}</p>
          </div>
        </div>

        <div
          onClick={clickHandler}
          id="raise"
          className={`${!raiseForm ? "block" : "hidden"} ${
            bidValue === props.product.raise ? "block" : "hidden"
          }`}
        >
          <CustomButton>bid</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default BidCard;
