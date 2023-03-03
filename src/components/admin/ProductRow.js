import React, { useState } from "react";
import Switch from "react-switch";
import { BiEdit, BiTrash } from "react-icons/bi";

const ProductRow = (props) => {
  const [checked, setChecked] = useState(false);
  const [editPopup, setEditPopup] = useState(false);
  const [deletePopup, setDeletePopup] = useState(false);
  const switchHandler = (next) => {
    setChecked(next);
  };

  return (
    <tr className="text-gray-400 hover:bg-[#1a2128] cursor-pointer">
      <td className="min-w-[40px]">{props.data.id}</td>
      <td className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] md:h-[55px] md:w-[55px] lg:h-[70px] lg:w-[70px] pr-2">
        <img src={props.data.pic} className="rounded-sm" alt="" />
      </td>
      <td className="max-w-[150px]">
        <p className="pr-2 line-clamp-1">{props.data.title}</p>
      </td>
      <td>{props.data.price + " Rs."}</td>
      <td className="max-w-[250px]">
        <p className="pr-2 line-clamp-1">{props.data.description}</p>
      </td>
      <td>{props.data.raise + " Rs."}</td>
      <td className="max-w-[150px]">
        <p className="pr-2 line-clamp-1">{props.data.raised_by}</p>
      </td>
      <td>{props.data.raised_at}</td>
      <td>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <Switch
              onChange={switchHandler}
              checked={checked}
              height={15}
              width={30}
              checkedIcon={false}
              uncheckedIcon={false}
              onColor="#85C1E9"
              onHandleColor="#D6EAF8"
            />
          </div>
          <div className="flex justify-between">
            <BiEdit
              onClick={() => {
                setEditPopup(!editPopup);
                props.editPopup();
              }}
              className="h-[15px] w-[15px] md:h-[28px] md:w-[28px] hover:text-secondary"
            />
            <BiTrash
              onClick={() => {
                setDeletePopup(!deletePopup);
                props.deletePopup();
              }}
              className="h-[15px] w-[15px] md:h-[28px] md:w-[28px] hover:text-red-400"
            />
          </div>
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;
