import CategoryItem from "@/components/categories/CategoryItem";
import Link from "next/link";

const categoryList = [
  { name: "Laptop", total_products: 104 },
  { name: "Smartphone", total_products: 30 },
  { name: "Desktop", total_products: 104 },
  { name: "Foot Wear", total_products: 30 },
  { name: "Electronics", total_products: 104 },
  { name: "Smartphone", total_products: 30 },
  { name: "Desktop", total_products: 104 },
  { name: "Foot Wear", total_products: 30 },
];

function Products() {
  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-between items-start pl-14 pr-5 md:px-20 py-5">
        <h2 className="md:text-lg font-medium text-black">Categories</h2>
        <Link
          href="/categories/add"
          className="ml-5 rounded-md bg-black px-3 py-2 sm:px-5 text-sm md:text-base font-medium text-white"
        >
          Create Category
        </Link>
      </div>

      <div className="divide-y divide-strokes border-b border-t border-strokes">
        <div className="flex divide-x divide-strokes h-10 text-xs xl:text-base font-light text-light-black">
          <div className="w-2/12 flex items-center justify-center">S.No.</div>
          <div className="w-4/12 flex items-center px-2 md:px-5 lg:px-7 xl:px-10">
            Name
          </div>
          <div className=" w-3/12 flex items-center px-2 md:px-5 lg:px-7 xl:px-10">
            Total Products
          </div>
          <div className="w-3/12 flex items-center justify-center">Actions</div>
        </div>

        {categoryList.map(({ name, total_products }, index) => {
          return (
            <CategoryItem
              serialNo={index + 1}
              name={name}
              total_products={total_products}
              key={"category-item" + index}
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
