import React from "react";

export const ButtonType = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  WHITE: "white",
  RED: "red",
  // PRIMARY_OUTLINE: "primary_outline",
  // SECONDARY_OUTLINE: "secondary_outline",
  // GRAY: "gray",
};

const ThemeButton = ({
  children,
  type = ButtonType.PRIMARY,
  htmlType = "button",
  onClick,
  className = "",
  disabled = false,
  fullWidth = false,
  width,
  paddings,
  icon,
  animateIconClasses,
}) => {
  const baseClasses =
    "font-normal rounded-full group border transition-colors flex justify-center items-center gap-2";

  const widthClasses = fullWidth ? "w-full" : width ? width : "w-fit";

  const paddingClasses = paddings ? paddings : "px-4 py-2.5";

  const animateClasses = animateIconClasses ? animateIconClasses : "";

  let typeClasses = "";

  switch (type) {
    case ButtonType.PRIMARY:
      typeClasses =
        "bg-primary hover:bg-primaryDark border-primary hover:border-primaryDark text-white";
      break;
    case ButtonType.SECONDARY:
      typeClasses =
        "bg-secondary hover:bg-secondaryDark border-secondary hover:border-secondaryDark hover:text-white text-neutral-800 font-semibold";
      break;
    case ButtonType.WHITE:
      typeClasses =
        "bg-white hover:bg-secondary border-[#D5D7DA] font-semibold text-neutral-800 hover:border-secondary  ";
      break;
    case ButtonType.RED:
      typeClasses =
        "bg-red-400 hover:bg-red-300  border-red-400 font-semibold text-white hover:border-red-300  ";
      break;
    // case ButtonType.SECONDARY_OUTLINE:
    //   typeClasses =
    //     "bg-white hover:bg-secondaryDark hover:text-white border-secondary hover:border-secondaryDark text-secondary";
    //   break;
    // case ButtonType.GRAY:
    //   typeClasses =
    //     "bg-gray-50 hover:bg-gray-200 duration-300 text-sm md:text-base rounded-md border-none";
    //   break;
    default:
      typeClasses =
        "bg-primary hover:bg-primaryDark border-primary hover:border-primaryDark gap-2 text-white";
  }

  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";

  return (
    <button
      type={htmlType}
      className={`${baseClasses} ${widthClasses} ${typeClasses} ${disabledClasses} ${className} ${paddingClasses}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className={`block ${animateClasses}`}>{icon}</span>}
      {children}
    </button>
  );
};

export default ThemeButton;
