import React from "react";
import "./CustomButton.css";
import { buttonTypes } from "./ButtonTypes";
const CustomButton = ({ onClick, buttonTitle, type }) => {
  return (
    <button
      style={buttonTypes[type]}
      onClick={onClick}
      className="custom-button"
    >
      {buttonTitle}
    </button>
  );
};

export default CustomButton;
