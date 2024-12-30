import React from "react";
import { FaPen } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import { MdMore, MdOutlineDrafts, MdOutlineKeyboardArrowDown, MdOutlineMoveToInbox, MdOutlineWatchLater } from "react-icons/md";
import { TbSend2 } from "react-icons/tb";

const sideBarItems = [
  {
    icon: <MdOutlineMoveToInbox size={"20px"} />,
    text: "Inbox",
  },
  {
    icon: <IoMdStar size={"20px"} />,
    text: "Starred",
  },
  {
    icon: <MdOutlineWatchLater size={"20px"} />,
    text: "Snoozed",
  },
  {
    icon: <TbSend2 size={"20px"} />,
    text: "Sent",
  },
  {
    icon: <MdOutlineDrafts size={"20px"} />,
    text: "Drafts",
  },
  {
    icon: <MdOutlineKeyboardArrowDown size={"20px"} />,
    text: "More",
  },
];

const Sidebar = () => {
  return (
    <div className="w-[15%]">
      <div className="p-3">
        <button className="flex items-center gap-2 bg-[#C2E7FF] p-4 rounded-2xl hover:shadow-md text-gray-600">
          <FaPen size={"24px"} className="text-gray-600" />
          Compose
        </button>
      </div>

      <div className="text-gray-600">
        {sideBarItems.map((item, index) => {
          return (
            <div className="flex items-center pl-6 py-1 rounded-r-full gap-4 my-2 hover:cursor-pointer hover:bg-gray-200">
              {item.icon}
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
