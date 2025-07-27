import React from "react";

const SecondaryBtn = ({
  text,
  icon: Icon,
  iconPosition = "left",
  iconClassName = "",  
  customIcon = null,   
  className = "",
  onClick,
  animated = false,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full flex justify-center uppercase items-center bg-secondary py-4 font-bold px-5 rounded-full gap-2 text-white hover:bg-primaryDark transition-all duration-300 ${className}`}
      {...rest}
    >
      {iconPosition === "left" &&
        (customIcon || (Icon && <Icon className={iconClassName} />))}
        {text}
      {iconPosition === "right" &&
        (customIcon || (Icon && <Icon className={iconClassName} />))}
         
    </button>
  );
};

export default SecondaryBtn;
