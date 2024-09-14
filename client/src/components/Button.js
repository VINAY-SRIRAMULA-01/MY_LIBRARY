import React from "react";

const Button = ({ title, variant = "contained", color = "primary" }) => {
  const className = "";
  if (varient === "contained") {
    className += "bg-" + color + "text-white";
  } else if (variant === "outlined") {
    className += "border-" + color + "text-" + color;
  }

  return (
    <button
      className={`${
        variant === "contained" ? "bg-" : "border-"
      }${color} text-white px-4 py-2 rounded-md`}
    ></button>
  );
};

export default Button;
