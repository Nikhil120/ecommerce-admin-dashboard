import { useState } from "react";
import Dropdown from "@/components/elements/Dropdown";
import InputBox from "@/components/elements/InputBox";
import Modal from "@/components/elements/Modal";
import useImageReader from "../../utils/ImageReader";
import AddVariant from "@/components/products/AddVariant";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineUp } from "react-icons/ai";
import AddAtribute from "@/components/products/AddAtribute";

function Add() {
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [variantState, setvariantState] = useState(false);
  const [attributes, setattributes] = useState([]);
  const [vairants, setvairants] = useState([]);

  const handleAddVariant = (newVariant) => {
    setvairants([...prev], newVariant);
  };

  return (
    <div className="h-screen w-full flex flex-col">
      <h2 className="text-black text-2xl px-5 py-5 border-b border-strokes text-center md:text-left">
        Add New Product
      </h2>
      <div className="h-full overflow-y-scroll hide-scroll">
        <div className="min-h-full flex flex-col md:flex-row divide-x divide-strokes">
          <section className="w-full flex flex-col">
            <div className="flex flex-col gap-y-7 px-5 pt-5">
              <InputBox
                title={"General Information"}
                inputs={[
                  { placeholder: "Name" },
                  { placeholder: "Description" },
                ]}
              />
              <InputBox
                title={"Price"}
                inputs={[
                  { placeholder: "Max Price" },
                  { placeholder: "Sales Price" },
                  { placeholder: "Cost Price" },
                ]}
              />
              <div className="flex flex-col gap-y-5">
                <label
                  className="text-lg font-medium"
                  htmlFor="categrory-input"
                >
                  Category
                </label>
                <Dropdown
                  id={"category-selector"}
                  title={"Category"}
                  options={["Shoe", "Electronics", "Sports", "Car"]}
                  default={"default"}
                  placeholder="Select Your Category"
                  inputId={"categrory-input"}
                />
              </div>
            </div>
          </section>
          <section className="w-full flex flex-col pt-5 px-5 gap-y-7 pb-2 md:pb-0">
            <div className="flex flex-col gap-y-5">
              <span className="text-lg font-medium">Media</span>
              <label
                className="text-center mr-auto px-5 rounded-full border border-input-stroke py-2 hover:bg-black hover:text-white transition-all duration-150"
                htmlFor="images"
              >
                + Images
              </label>
              <input
                type="file"
                id="images"
                className="hidden"
                accept=".png, .jpg, .jpeg, .webp, .svg"
                onChange={(e) => {
                  setImages((prev) => [...prev, ...e.target.files]);
                }}
                multiple
              />

              <div className="flex flex-wrap gap-7">
                {images.map((img, index) => {
                  return (
                    <div
                      className="bg-light-grey h-[100px] w-[20%]"
                      key={"image-container" + index}
                    >
                      <img
                        id={"image" + index}
                        scr={useImageReader(img, "image" + index)}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-y-5">
              <button
                className="mr-auto flex gap-x-5 items-center"
                onClick={() => {
                  if (variantState) {
                    return setvariantState(false);
                  }
                  setvariantState(true);
                }}
              >
                <span className="text-lg font-medium">Variants</span>
                {variantState ? <AiOutlineUp /> : <AiOutlineDown />}
              </button>

              <div
                className={`${
                  variantState ? "flex" : "hidden"
                }   flex-col gap-y-10`}
              >
                <AddAtribute
                  attributes={attributes}
                  setattributes={setattributes}
                />
                {attributes.length > 0 && (
                  <button
                    className="mr-auto px-5 rounded-full border border-input-stroke py-2 hover:bg-black hover:text-white transition-all duration-150"
                    onClick={() => setOpen(true)}
                  >
                    Add Variant
                  </button>
                )}

                {/* Products section ends  */}
                <Modal
                  open={open}
                  onClose={() => setOpen(false)}
                  styles="w-[80vw] sm:w-[40vw] md:w-[50vw] lg:w-[60vw] h-[80vh] bg-white rounded overflow-y-scroll hide-scroll"
                >
                  <AddVariant
                    attributes={attributes}
                    handleAddVariant={handleAddVariant}
                    onClose={() => setOpen(false)}
                  />
                </Modal>
              </div>
            </div>
          </section>
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
