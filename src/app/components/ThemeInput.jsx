"use client";
import Image from "next/image";
import React, { useState } from "react";

export const InputType = {
  TEXT: "text",
  PASSWORD: "password",
};

const ThemeInput = ({
  id,
  label,
  type = InputType.TEXT,
  placeholder,
  required = false,
  name,
  value,
  onChange,
  className = "",
  error = false,
  showErrorIcon = false,
  errorMessage = "",
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const inputType =
    type === InputType.PASSWORD
      ? passwordVisible
        ? InputType.TEXT
        : InputType.PASSWORD
      : type;

  return (
    <label className="block mb-4">
      {label && <span className="block mb-1 text-start">{label}:</span>}
      <div className="relative">
        <input
          id={id}
          type={inputType}
          className={`w-full focus:ring-2 p-2 md:p-3 border rounded-lg outline-none resize-none placeholder:text-gray-m-500 
            ${
              error
                ? "border-red-500 focus:ring-red-200"
                : "border-nebula focus:ring-gray-200"
            } 
            ${className}`}
          name={name}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
        />

        {error && showErrorIcon && (
          <Image
            src="/images/errorIcon.svg"
            className="absolute w-5 h-5 top-3 md:top-3.5 end-3"
            alt=""
            width={500}
            height={500}
          />
        )}

        {type === InputType.PASSWORD && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute p-2 transform -translate-y-1/2 rounded-md hover:bg-gray-200 end-2 top-1/2"
          >
            {passwordVisible ? (
              <img
                src="/images/eyeOpened.svg"
                className="w-4 h-4"
                alt="Hide password"
              />
            ) : (
              <img
                src="/images/eyeClosed.svg"
                className="w-4 h-4"
                alt="Show password"
              />
            )}
          </button>
        )}
      </div>
      {error && errorMessage && (
        <p className="mt-1 text-sm text-red-500">{errorMessage}</p>
      )}
    </label>
  );
};

export default ThemeInput;
