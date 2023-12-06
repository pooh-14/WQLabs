import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UseEffectMultiple = () => {

    const[counter, setCounter]=useState(0)
    const[counter1, setCounter1]=useState(0)
    const[counter2, setCounter2]=useState(0)
    const router= useNavigate()

    useEffect(()=>{
        console.log("Inside useEffect!")
      },[counter,counter1])

  return (
    <div>
      <h3>Multiple Dependencies</h3>
      <h3>{counter}</h3>
      <button onClick={()=>setCounter((prevValue)=>prevValue+1)}>+1</button>
      <h3>{counter1}</h3>
      <button onClick={()=>setCounter1((prevValue)=>prevValue+1)}>+1</button>
      <h3>{counter2}</h3>
      <button onClick={()=>setCounter2((prevValue)=>prevValue+1)}>+1</button><br/>
      
      <button className="button" onClick={()=>router("/")}>Home</button>
    </div>
  )
}

export default UseEffectMultiple
