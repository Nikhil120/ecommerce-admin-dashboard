import React from "react";

function InputBox({ title, inputs, styles }) {
  return (
    <div className={`flex flex-col gap-y-5 ${styles}`}>
      <span className="text-lg font-medium">{title}</span>
      {inputs.map((input) => {
        return (
          <input
            className="text-sm placeholder:text-light-black text-black border-[1.5px] p-3 border-input-stroke rounded focus:border-light-black outline-none"
            type="text"
            placeholder={input.placeholder}
            key={input.placeholder}
            required
          />
        );
      })}
    </div>
  );
}

export default InputBox;
