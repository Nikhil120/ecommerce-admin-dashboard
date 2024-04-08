import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

const ProductItem = ({ serialNo, name, productCode, status }) => {
  return (
    <div className="h-10 divide-x divide-strokes flex text-xs xl:text-base text-black">
      <div className="w-2/12 md:w-1/12 flex items-center justify-center">
        {serialNo}
      </div>
      <div className="w-4/12 md:w-5/12 flex items-center pl-2 md:pl-5 lg:pl-7 xl:pl-10">
        {name}
      </div>
      <div className="w-2/12 hidden md:flex items-center pl-2 md:pl-5 lg:pl-7 xl:pl-10">
        {productCode}
      </div>
      <div className="w-3/12 md:w-2/12 flex items-center pl-2 md:pl-5 lg:pl-7 xl:pl-10 capitalize">
        {status}
      </div>
      <div className=" w-3/12 md:w-2/12 flex justify-center gap-x-2 md:gap-x-5 text-lg">
        <button className="px-2 md:px-5">{<FiEdit2 />}</button>
        <button className="px-2 md:px-5">{<AiOutlineDelete />}</button>
      </div>
    </div>
  );
};

export default ProductItem;
