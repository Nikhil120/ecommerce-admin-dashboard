import InputBox from "../elements/InputBox";
import Dropdown from "../elements/Dropdown";
function AddVariant({ attributes, handleAddVariant, onClose }) {
  return (
    <div className="h-full flex flex-col">
      <h2 className="text-black text-2xl py-3 border-b border-strokes text-center">
        Add Product Variant
      </h2>
      <div className="h-full overflow-y-scroll flex flex-col gap-y-7 p-5">
        <InputBox
          title={"General Information"}
          inputs={[{ placeholder: "Name" }, { placeholder: "Description" }]}
        />
        <InputBox
          title={"Price"}
          inputs={[
            { placeholder: "Max Price" },
            { placeholder: "Sales Price" },
            { placeholder: "Cost Price" },
          ]}
        />
        <div className="flex flex-wrap gap-x-10 gap-y-5">
          {attributes.map((attri, key) => {
            if (attri.options.length === 0) {
              return;
            }
            return (
              <div
                className="w-2/5 flex flex-col gap-y-2"
                key={"variant-attributes-options" + key}
              >
                <div className="font-medium">{attri.name}</div>
                <Dropdown
                  id={"attri-selector" + attri.name}
                  options={attri.options}
                  placeholder={attri.name}
                  key={"attri-selector-dropdown" + key}
                ></Dropdown>
              </div>
            );
          })}
        </div>
      </div>
      <div className="h-20 flex justify-center md:justify-end items-center md:pr-10 gap-x-5 border-t border-strokes text-sm md:text-base">
        <button
          className="font-medium px-10 py-2 border border-input-stroke rounded-full hover:shadow-md"
          onClick={onClose}
        >
          Back
        </button>
        <button
          className="font-medium px-10 py-2 bg-btn-black-bg rounded-full text-white hover:bg-slate-800"
          onClick={onClose}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default AddVariant;
