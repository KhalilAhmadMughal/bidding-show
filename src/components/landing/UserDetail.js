import React from "react";
import { BiCog, BiX } from "react-icons/bi";
const UserDetail = (props) => {
  function crossHandler() {
    props.hide(props.id);
  }

  return (
    <div className="z-1 shadow-lg flex flex-col rounded-lg bg-primary p-4 w-[220px] h-[250px] justify-between">
      <div className="flex justify-between items-center">
        <h2 className="capitalize font-semibold text-center">user details</h2>
        <div
          onClick={crossHandler}
          className="flex justify-end cursor-pointer hover:text-secondary"
        >
          <BiX size="32px" />
        </div>
      </div>
      <div>
        <div className="flex p-2 border-b border-b-dimWhite gap-2">
          <h3 className="text-sm font-semibold capitalize basis-[44px] ">
            id:
          </h3>
          <p className="text-sm text-gray-300 flex-1 text-ellipsis overflow-hidden whitespace-nowrap">
            user1
          </p>
        </div>
        <div className="flex p-2 border-b border-b-dimWhite gap-2">
          <h3 className="text-sm font-semibold capitalize basis-[44px]">
            email:
          </h3>
          <p className="text-sm text-gray-300 flex-1 text-ellipsis overflow-hidden whitespace-nowrap">
            user1@email.com
          </p>
        </div>
      </div>
      <div className="flex justify-end cursor-pointer hover:text-secondary">
        <BiCog size="32px" />
      </div>
    </div>
  );
};

export default UserDetail;
