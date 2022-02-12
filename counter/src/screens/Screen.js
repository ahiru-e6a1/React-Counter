import React, { useState } from "react";
// import "../App.css";
import PlusButton from "../components/PlusButton";
import MinusButton from "../components/PlusButton";
import { Link, useLocation } from "react-router-dom";

export const Screen = () => {
  const location = useLocation();
  const [count, setCount] = useState(0);

  const plusButton = () => {
    setCount(count + 1);
  };

  const minusButton = () => {
    setCount(count - 1);
  };

  console.log("location:", location);
  return (
    <div>
      <nav>
        <Link to="/">Main</Link>
      </nav>
      {location.state && (
        <>
          <p>{location.state.id}</p>
          <p>{location.state.name}</p>
        </>
      )}
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
