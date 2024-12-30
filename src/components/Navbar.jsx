import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdSearch } from "react-icons/io";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import Avatar from "react-avatar";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mx-3 h-16  bg-white shadow-md">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="p-2 hover:bg-gray-200 rounded-full cursor-pointer">
            <GiHamburgerMenu />
          </div>
          <img
            className="w-8"
            src="https://cdn-icons-png.flaticon.com/512/281/281769.png"
            alt="logo"
          />
          <h1 className="text-2xl text-gray-500 font-medium ">MailKaro</h1>
        </div>
      </div>

      <div className="flex-1 mr-64">
        <div className="flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full">
          <IoMdSearch size={"24px"} className="text-gray-700" />
          <input
            type="text"
            placeholder="Search Keyword"
            className="rounded-full w-full bg-transparent outline-none px-1"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="p-3 rounded-full text-gray-700 hover:bg-gray-200 cursor-pointer">
          <FaRegCircleQuestion size={"24px"} />
        </div>
        <div className="p-3 rounded-full text-gray-700 hover:bg-gray-200 cursor-pointer">
          <IoSettingsSharp size={"24px"} />
        </div>
        <div className="p-3 rounded-full text-gray-700 hover:bg-gray-200 cursor-pointer">
          <TbGridDots size={"24px"} />
        </div>
        <Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKtsZhVEpqiA8OpzLa8g-mQO8gK5ittYy6Ew&s"
          size="40"
          round={true}
        />
      </div>
    </div>
  );
};

export default Navbar;
