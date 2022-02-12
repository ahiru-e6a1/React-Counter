import React, { useState } from "react";
// import "../App.css";
import PlusButton from "../components/PlusButton";
import MinusButton from "../components/PlusButton";
import { Link } from "react-router-dom";

export const Screen = () => {
  const [count, setCount] = useState(0);

  const plusButton = () => {
    setCount(count + 1);
  };

  const minusButton = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <nav>
        <Link to="/">Main</Link>
      </nav>
      <div className="AppContainer">
        <div className="numberArea">
          <text className="number">{count}</text>
        </div>
        <div className="ButtonArea">
          <PlusButton text="+" onClickPlusButton={plusButton} />
          <MinusButton text="-" onClickPlusButton={minusButton} />
        </div>
      </div>
    </div>
  );
};
