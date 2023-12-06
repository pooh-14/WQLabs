import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UseContext } from "./UseContext";
import './CSS/Css.css'

const Home = () => {
  const {state,inc, dec} = useContext(UseContext);
  const router = useNavigate();

  return (
    <div>
      <h1>Test Hooks</h1>
      <button className="button" onClick={() => router("/state")}> UseState</button>
      <br />
      <button className="button" onClick={() => router("/effect")}>UseEffect</button>
      <br />
      <button className="button" onClick={() => router("/reducer")}>UseReducer</button>
      <br />
      <button className="button" onClick={() => router("/callback")}>UseCallback</button>
      <br />

      <h1>FromContext= {state}</h1>
      <button onClick={inc}>+1</button>
      <button onClick={dec}>-1</button>
    </div>
  );
};

export default Home;
