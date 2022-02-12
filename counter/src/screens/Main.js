import React from "react";
import { Link, useNavigate } from "react-router-dom";
export const Main = () => {
  const navigate = useNavigate();
  const user = { id: 1, name: "aaaaa" };

  const bottonClick = (user) => {
    console.log(user);
    navigate("/screen", { state: user });
  };

  return (
    <div>
      <p>Hostingの練習</p>
      <p>追加実装</p>
      <nav>
        <Link to="/screen">Screen</Link>
      </nav>
      <button onClick={() => bottonClick(user)}>aaaaaのデータを渡す</button>
    </div>
  );
};
