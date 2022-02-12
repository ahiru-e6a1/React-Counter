import React from "react";
// import "../App.css";

const Button = ({ text, onClickButton }) => {
  return (
    <div>
      <button className="ButtonContainer" onClick={onClickButton}>
        <text className="ButtonText">{text}</text>
      </button>
    </div>
  );
};

export default Button;
