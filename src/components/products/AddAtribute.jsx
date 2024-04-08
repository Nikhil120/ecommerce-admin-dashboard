import { useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";

function AddAtribute({ attributes, setattributes }) {
  const AttriInput = useRef();

  const handleAddAtribute = (e) => {
    if (
      attributes.some((attri) => {
        return attri.name === AttriInput.current.value;
      }) ||
      e.key !== "Enter" ||
      e.target.value == ""
    ) {
      return;
    }

    const newAttribute = {
      name: AttriInput.current.value,
      options: [],
    };
    setattributes((prev) => {
      return [...prev, newAttribute];
    });
    e.target.value = "";
  };
  const handleDeleteAttribute = (AttriId) => {
    const attries = attributes.filter((attri, index) => index !== AttriId);
    setattributes(attries);
  };
  const handleAddOption = (e, attriId) => {
    const option = e.target.value;
    const attribute = attributes.filter((attri, index) => attriId === index)[0];
    if (
      option !== "" &&
      e.key == "Enter" &&
      !attribute.options.includes(option)
    ) {
      const attries = attributes.filter(() => true);
      const newAttribute = {
        ...attribute,
        options: [...attribute.options, option],
      };

      attries.splice(attriId, 1, newAttribute);
      setattributes(attries);
      e.target.value = "";
    }
  };
  const handleDeleteAtriOption = (attributeId, optionId) => {
    const attribute = attributes.filter(
      (attri, index) => attributeId === index
    )[0];
    const options = attribute.options.filter(
      (option, index) => index !== optionId
    );
    const newAttribute = { ...attribute, options };
    const attries = attributes.filter(() => true);
    attries.splice(attributeId, 1, newAttribute);
    setattributes(attries);
  };
  return (
    <div className="flex flex-col gap-y-7">
      <div className="flex border-[1.5px] py-4 px-5 border-input-stroke rounded">
        <input
          className="placeholder:text-light-black text-black outline-none w-full"
          type="text"
          onKeyUp={handleAddAtribute}
          placeholder="Enter your attribute"
          ref={AttriInput}
        />
        <button
          className="pl-5"
          onClick={() => (AttriInput.current.value = "")}
        >
          <AiOutlineClose />
        </button>
      </div>

      <div className="flex flex-col gap-y-10">
        {(() => {
          return (
            <>
              {attributes.map((attribute, attriId) => {
                return (
                  <div
                    className="flex flex-col justify-between gap-y-3"
                    key={"attribute/" + attriId}
                  >
                    <div className="flex gap-x-10">
                      {attribute.name}
                      <button
                        className=""
                        onClick={() => handleDeleteAttribute(attriId)}
                      >
                        {<AiOutlineClose />}
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-3 border-[1.5px] py-3 px-3 border-input-stroke rounded">
                      {attribute.options.map((option, optionId) => (
                        <div
                          className={`flex items-center justify-between px-5 py-2 rounded-full text-black bg-sidebar shadow-md`}
                          key={"option/" + optionId}
                        >
                          <div className="text-sm font-medium">{option}</div>
                          <button
                            className={`h-full pl-2`}
                            onClick={() =>
                              handleDeleteAtriOption(attriId, optionId)
                            }
                          >
                            <AiOutlineClose className="h-full" />
                          </button>
                        </div>
                      ))}
                      <input
                        className="text-sm placeholder:text-light-black text-black outline-none w-full border-b border-input-stroke leading-10"
                        type="text"
                        onKeyUp={(e) => handleAddOption(e, attriId)}
                        placeholder={attribute.name}
                        autoFocus
                        id={"input-attribute-AddAtribute/" + attriId}
                      />
                    </div>
                  </div>
                );
              })}
            </>
          );
        })()}
      </div>

      {/* Component close  */}
    </div>
  );
}

export default AddAtribute;
