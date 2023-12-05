import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UseContext } from "./UseContext";

const Home = () => {
  const [state, inc, dec] = useContext(UseContext);
  const [count, setCount] = useState(0);
  const router = useNavigate();

  return (
    <div>
      <h1>Test Hooks</h1>
      <button onClick={() => router("/state")}> UseState</button>
      <br />
      <button onClick={() => router("/effect")}>UseEffect</button>
      <br />
      <button onClick={() => router("/reducer")}>UseReducer</button>
      <br />
      <button onClick={() => router("/context")}>UseContext</button>
      <br />
      <button onClick={() => router("/callback")}>UseCallback</button>
      <br />
      <button onClick={() => router("/memo")}>UseMemo</button>
      <br />

      <h1>FromContext= {count}</h1>
      <button onClick={inc}>Start</button>
      <button onClick={dec}>Stop</button>
    </div>
  );
};

export default Home;
