import { useRef, useState } from "react";
function Dropdown({ id, options, placeholder }) {
  const [option, setoption] = useState("");
  const [optionsState, setoptionsState] = useState(false);
  const dropdown = useRef();
  const optionsContainer = useRef();
  const handleCloseDropdown = () => {
    document
      .getElementById("layout")
      .removeEventListener("click", handleBodyClose);
    setoptionsState(false);
  };
  const handleOpenDropdown = () => {
    document
      .getElementById("layout")
      .addEventListener("click", handleBodyClose);
    setoptionsState(true);
  };

  const handleChangeoption = (e) => {
    setoption(e.target.dataset.value);
    handleCloseDropdown();
  };
  const handleChangeOptionByType = (e) => {
    setoption(e.target.value);
    if (!optionsState) {
      return handleOpenDropdown();
    }
  };
  const handleClear = () => {
    setoption("");
  };
  const handleBodyClose = (e) => {
    if (!dropdown.current) {
      handleBodyClose();
      return;
    }
    if (!dropdown.current.contains(e.target)) {
      handleCloseDropdown();
    }
  };
  const handleOptionState = () => {
    if (optionsState) {
      return handleCloseDropdown();
    }
    return handleOpenDropdown();
  };
  return (
    <>
      {options.length !== 0 && (
        <div id={id} ref={dropdown} className="relative">
          <div className="h-10 bg-white flex border border-input-stroke rounded items-center">
            <input
              value={option}
              name="select"
              className="px-4 appearance-none outline-none text-gray-800 w-full"
              onChange={handleChangeOptionByType}
              required
              placeholder={placeholder}
            />

            <button
              id="clear-btn"
              className="cursor-pointer transition-all text-gray-300 hover:text-gray-600"
              onClick={handleClear}
            >
              <svg
                className="w-4 h-4 mx-2 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <button
              className="cursor-pointer border-l border-input-stroke transition-all text-gray-300 hover:text-gray-600"
              onClick={handleOptionState}
            >
              <svg
                className={`w-4 h-4 mx-2 fill-current ${
                  !optionsState && "rotate-180"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </button>
          </div>

          <div
            className={`absolute rounded shadow bg-white overflow-y-scroll style-scroll max-h-28 ${
              optionsState ? "flex" : "hidden"
            } flex-col w-full mt-1 border border-input-stroke`}
            ref={optionsContainer}
          >
            {options.map((option) => {
              return (
                <div className="cursor-pointer group" key={option}>
                  <div
                    className="block p-2 border-transparent border-l-4 group-hover:border-black group-hover:bg-gray-100 capitalize"
                    data-value={option}
                    onClick={handleChangeoption}
                  >
                    {option}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Dropdown;
