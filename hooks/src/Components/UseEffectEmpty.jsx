import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UseEffectEmpty = () => {

    const[counter, setCounter]=useState(0)
    const router= useNavigate()

  useEffect(()=>{
    console.log("Inside useEffect!")
  },[])

  return (
    <div>
      <div>
      <h3>Empty Dependency</h3>
      <h3>{counter}</h3>
      <button onClick={()=>setCounter((prevValue)=>prevValue+1)}>+1</button><br/>
      <button className="button" onClick={()=>router("/effectsingle")}>Next</button>
    </div>
    </div>
  )
}

export default UseEffectEmpty
