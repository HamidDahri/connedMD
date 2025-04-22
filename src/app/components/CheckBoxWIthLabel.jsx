import React from "react";

const CheckBoxWithLabel = ({
  id = "default-checkbox",
  label,
  checked,
  onChange,
  marginBtm,
}) => {
  return (
    <div className={`flex items-center ${marginBtm ? marginBtm : "mb-4"}`}>
      <label className="mt-1.5 custom-checkbox">
        <input id={id} type="checkbox" checked={checked} onChange={onChange} />
        <span className="checkmark"></span>
      </label>
      <label
        htmlFor={id}
        className="text-base font-normal text-gray-800 select-none ms-2"
      >
        {label}
      </label>
    </div>
  );
};

export default CheckBoxWithLabel;
