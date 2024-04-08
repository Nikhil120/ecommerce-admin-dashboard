import ProductItem from "@/components/products/ProductItem";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";

const productList = [
  { name: "Nike", productCode: "PCODE", status: "active" },
  { name: "Samsung", productCode: "PCODE", status: "Deactive" },
  { name: "Acer", productCode: "PCODE", status: "active" },
  { name: "Nike", productCode: "PCODE", status: "Deactive" },
  { name: "HP lapt i5", productCode: "PCODE", status: "active" },
  { name: "Oppo", productCode: "PCODE", status: "Deactive" },
  { name: "Vivo", productCode: "PCODE", status: "active" },
  { name: "Nike", productCode: "PCODE", status: "Deactive" },
];

function Products() {
  return (
    <div className="w-full flex flex-col pt-5">
      <div className="flex justify-end sm:justify-between items-center px-2 sm:px-5 pb-5">
        <h2 className="md:text-lg font-medium text-black">Products</h2>
        <Link
          href="/products/add"
          className="ml-5 rounded-md bg-black px-2 py-1 md:px-5 md:py-2 text-xs md:text-base font-medium text-white"
        >
          Create Product
        </Link>
      </div>

      <div className="divide-y divide-strokes border-b border-t border-strokes">
        <div className="flex divide-x divide-strokes h-10 text-xs xl:text-base font-light text-light-black">
          <div className="w-2/12 md:w-1/12 flex items-center justify-center">
            S.No.
          </div>
          <div className="w-4/12 md:w-5/12 flex items-center pl-2 md:pl-5 lg:pl-7 xl:pl-10">
            Name
          </div>
          <div className="w-2/12 hidden md:flex items-center pl-2 md:pl-5 lg:pl-7 xl:pl-10">
            Product Code
          </div>
          <div className="w-3/12 md:w-2/12 flex items-center pl-2 md:pl-5 lg:pl-7 xl:pl-10">
            Status
          </div>
          <div className="w-3/12 md:w-2/12 flex items-center justify-center">
            Actions
          </div>
        </div>

        {productList.map(({ name, productCode, status }, index) => {
          return (
            <ProductItem
              serialNo={index + 1}
              name={name}
              productCode={productCode}
              status={status}
              key={"product-item/" + index}
            />
          );
        })}

        {/* product section closer  */}
      </div>
      {/* main closer */}
    </div>
  );
}

export default Products;
