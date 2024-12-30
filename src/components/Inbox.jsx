import React, { useState } from "react";
import {
  MdCropSquare,
  MdInbox,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { IoMdMore, IoMdRefresh } from "react-icons/io";
import { FaTag } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import Emails from "./Emails";

const mailType = [
  {
    icon: <MdInbox size={"20px"} />,
    text: "Primary",
  },
  {
    icon: <FaTag size={"20px"} />,
    text: "Promotions",
  },
  {
    icon: <LuUsers size={"20px"} />,
    text: "Social",
  },
];

const Inbox = () => {
  const [selected, SetSelected] = useState(0);

  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      <div className="flex items-center justify-between px-4 my-2 text-gray-700">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <MdCropSquare size={"20px"} />
            <FaAngleDown size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:*:bg-gray-200 cursor-pointer ">
            <IoMdRefresh size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:*:bg-gray-200 cursor-pointer ">
            <IoMdMore size={"20px"} />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span>1 to 50</span>
          <MdKeyboardArrowLeft size={"24px"} />
          <MdKeyboardArrowRight size={"24px"} />
        </div>
      </div>

      <div className="h-90vh overflow-y-auto">
        <div className="flex items-center gap-1 text-gray-900">
          {mailType.map((item, index) => {
            return (
              <button
                onClick={() => SetSelected(index)}
                className={`${
                  selected === index
                    ? "border-b-4 border-b-blue-500 text-blue-800"
                    : "border-b-4 border-b-transparent"
                } flex items-center gap-5 p-4 w-52 hover:bg-gray-200`}
              >
                {item.icon}
                <span>{item.text}</span>
              </button>
            );
          })}
        </div>
        <Emails />
      </div>
    </div>
  );
};

export default Inbox;