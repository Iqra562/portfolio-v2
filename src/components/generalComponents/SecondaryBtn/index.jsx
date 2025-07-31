import React from "react";

export function SecondaryBtn ({
  text,
  icon: Icon,
  iconPosition = "left",
  iconClassName = "",  
  customIcon = null,   
  className = "",
  onClick,
  animated = false,
  ...rest
})  {
  return (
    <button
      onClick={onClick}
      className={` flex justify-center uppercase items-center bg-secondary py-4 font-bold px-7 rounded-full gap-2 text-white transition-all duration-300 ${className}`}
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

