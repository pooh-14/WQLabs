import logo from "./logo.svg";
import "./App.css";
import { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import UseState from "./Components/UseState";
import UseEffect from "./Components/UseEffect";
import UseContext from "./Components/UseContext";
import UseEffectEmpty from "./Components/UseEffectEmpty";
import UseEffectSingle from "./Components/UseEffectSingle";
import UseEffectMultiple from "./Components/UseEffectMultiple";
import UseReducer from "./Components/UseReducer";
import UseCallBack from "./Components/UseCallBack";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/state" element={<UseState/>} />
        <Route exact path="/effect" element={<UseEffect/>} />
        <Route exact path="/effectempty" element={<UseEffectEmpty/>} />
        <Route exact path="/effectsingle" element={<UseEffectSingle/>} />
        <Route exact path="/effectmultiple" element={<UseEffectMultiple/>} />
        <Route exact path="/context" element={<UseContext/>} />
        <Route exact path="/reducer" element={<UseReducer/>} />
        <Route exact path="/callback" element={<UseCallBack/>} />
      </Routes>
    </div>
  );
}

export default App;
