import React from "react";
import { Link } from "react-router-dom";

export const Main = () => {
  return (
    <div>
      <p>Hostingの練習</p>
      <p>追加実装</p>
      <nav>
        <Link to="/screen">Screen</Link>
      </nav>
    </div>
  );
};
