import React, { useCallback, useState } from "react";
import Memo from "./Memo";
import { useNavigate } from "react-router-dom";

const UseCallBack = () => {
  const [add, setAdd] = useState(0);
  const [double, setDouble] = useState(0);
  const router= useNavigate()
  const Learning = useCallback(()=>{

  },[double])
  return (
    <div>
        <h1>Value1:{add}</h1>
        <button onClick={()=>setAdd((prevValue)=>prevValue+1)}>+1</button>
        <Memo task={Learning}/>
        <h1>Value2:{double}</h1>
        <button onClick={()=>setDouble((prevValue)=>prevValue+2)}>+1</button><br/>
      <button onClick={()=>router("/")}>Home</button>
    </div>

  );
};

export default UseCallBack;
