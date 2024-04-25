import React from "react";
import "./App.scss";

import All from "./pages/All";
import Deleted from "./pages/Deleted";
import Navigation from "./components/Navigation/Navigation";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className={"main"}>
      <Navigation/>
      <Routes>
        <Route path={"/"} element={<All />} />
        <Route path={"/deleted"} element={<Deleted />} />
      </Routes>
    </div>
  );
}

export default App;
