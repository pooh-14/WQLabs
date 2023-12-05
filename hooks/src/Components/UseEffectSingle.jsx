import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UseEffectSingle = () => {

    const[counter, setCounter]=useState(0)
    const[counter1, setCounter1]=useState(0)
    const router= useNavigate()

  useEffect(()=>{
    console.log("Inside useEffect!")
  },[counter])

  return (
    <div>
      <h3>Single Dependency</h3>
      <h3>{counter}</h3>
      <button onClick={()=>setCounter((prevValue)=>prevValue+1)}>+1</button>
      <h3>{counter1}</h3>
      <button onClick={()=>setCounter1((prevValue)=>prevValue+1)}>+1</button><br/>
      <button onClick={()=>router("/effectmultiple")}>Next</button>
    </div>
  )
}

export default UseEffectSingle
