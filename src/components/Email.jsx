import React from "react";
import { MdCropSquare } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";

const Email = () => {
  return (
    <div className="flex items-center justify-between border-b border-x-gray-200 px-4 py-3 text-sm hover:cursor-pointer shadow-md">
      <div className="flex items-center gap-3">
        <div className="text-gray-500">
          <MdCropSquare size={"20px"} />
        </div>
        <div className="text-gray-500">
          <FaRegStar  size={"20px"} />
        </div>
        <div>
            <h1 className="font-semibold">30daysCoding</h1>
        </div>
      </div>
      <div className="flex-1 ml-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          praesentium rerum eveniet quos? Repudiandae, aliquam.
        </p>
      </div>
      <div className="flex-none text-gray-600 text-sm">
        <p>12 days ago</p>
      </div>
    </div>
  );
};

export default Email;
