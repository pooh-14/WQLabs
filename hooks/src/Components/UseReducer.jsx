import React, { useEffect, useReducer, useRef } from "react";
import { useNavigate } from "react-router-dom";

const UseReducer = () => {

    const router= useNavigate()

  const initialState = {
    isRunning: true,
    time: 0,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "start":
        return { ...state, isRunning: true };
      case "stop":
        return { ...state, isRunning: false };
      case "reset":
        return { isRunning: false, time: 0 };
      case "tick":
        return { ...state, time: state.time + 1 };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const ref = useRef(0);

  useEffect(() => {
    if (!state.isRunning) {
      return;
    }
    ref.current = setInterval(() => dispatch({ type: "tick" }), 1000);
    return () => {
      clearInterval(ref.current);
      ref.current = 0;
    };
  }, [state.isRunning]);

  return(
  <div>
    <h3>{state.time}s</h3>
    <button onClick={() => dispatch({ type: "start" })}>Start</button>
    <button onClick={() => dispatch({ type: "stop" })}>Stop</button>
    <button onClick={() => dispatch({ type: "reset" })}>Reset</button><br/>
    
    <button onClick={()=>router("/")}>Home</button>
  </div>
  )
};

export default UseReducer;
