import React from "react";
// import "../App.css";
import Button from "./Button";

const MinusButton = ({ text, onClickPlusButton }) => {
  return (
    <div>
      <Button text={text} onClickButton={onClickPlusButton} />
    </div>
  );
};

export default MinusButton;
