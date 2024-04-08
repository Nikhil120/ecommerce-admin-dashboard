import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

const CategoryItem = ({ serialNo, name, total_products }) => {
  return (
    <div className="h-10 divide-x divide-strokes flex text-xs xl:text-base text-black">
      <div className="w-2/12 flex items-center justify-center">{serialNo}</div>
      <div className="w-4/12 flex items-center px-2 md:px-5 lg:px-7 xl:px-10">
        {name}
      </div>
      <div className=" w-3/12 flex items-center px-2 md:px-5 lg:px-7 xl:px-10">
        {total_products}
      </div>
      <div className="w-3/12 flex justify-center gap-x-2 md:gap-x-5 text-lg">
        <button className="px-2 md:px-5">{<FiEdit2 />}</button>
        <button className="px-2 md:px-5">{<AiOutlineDelete />}</button>
      </div>
    </div>
  );
};

export default CategoryItem;
