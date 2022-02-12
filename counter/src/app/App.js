import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import { Main } from "../screens/Main";
import { Screen } from "../screens/Screen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/screen" element={<Screen />} />
      </Routes>
    </div>
  );
}

export default App;
