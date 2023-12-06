import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UseState = () => {

  const[color, setColor]=useState("Red")
  const router= useNavigate()

  return (
    <div>
      <h3>My Favorite Color Is {color}!</h3>
      <button onClick={()=>setColor("Blue")} >Blue</button>
      <button onClick={()=>setColor("Green")} >Green</button><br/>
      <button className="button" onClick={()=>router("/")}>Home</button>
    </div>
  )
}   

export default UseState

