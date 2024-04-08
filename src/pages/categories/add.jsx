function Add() {
  return (
    <div className="h-screen w-full flex flex-col pt-5 justify-between">
      <h2 className="text-black text-2xl px-5 pb-5 border-b border-strokes text-center md:text-left">
        Add New Category
      </h2>
      <div className="h-full flex flex-col gap-y-7 px-5 pt-5">
        <div className={`flex flex-col gap-y-5`}>
          <label htmlFor="category-name" className="text-lg font-medium">
            Category Name
          </label>
          <input
            className="text-sm placeholder:text-light-black text-black border-[1.5px] p-3 border-input-stroke rounded focus:border-light-black outline-none"
            type="text"
            placeholder="Category Name"
            required
            id="category-name"
          />
          <label htmlFor="category-description" className="text-lg font-medium">
            Category Description
          </label>
          <textarea
            className="text-sm placeholder:text-light-black text-black border-[1.5px] p-3 border-input-stroke rounded focus:border-light-black outline-none"
            type="text"
            placeholder="Catgory Description"
            required
            rows={10}
            id="category-description"
          />
        </div>
      </div>
      <div className="h-20 flex justify-center md:justify-end items-center md:pr-10 gap-x-5 border-t border-strokes">
        <button className="font-medium px-14 py-2 bg-btn-black-bg font-lg rounded-full text-white hover:bg-slate-800">
          Add
        </button>
        <button
          className="font-medium px-14 py-2 border border-input-stroke font-lg rounded-full hover:shadow-md"
          onClick={() => window.history.back()}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default Add;
