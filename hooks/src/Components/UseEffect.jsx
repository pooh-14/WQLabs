import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UseEffect = () => {

  const[counter, setCounter]=useState(0)
  const router= useNavigate()

  useEffect(()=>{
    console.log("Inside useEffect!")
  })

  return (
    <div>
      <h3>No Dependency</h3>
      <h3>{counter}</h3>
      <button onClick={()=>setCounter((prevValue)=>prevValue+1)}>+1</button><br/>
      <button className="button" onClick={()=>router("/effectempty")}>Next</button>
    </div>
  );
};

export default UseEffect;
