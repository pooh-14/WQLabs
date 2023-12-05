import React, { createContext, useReducer } from "react";

export const UseContext = createContext();
const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const UseContextProvider=({children})=>{
const [state, dispatch] = useReducer(reducer, initialState);

const inc =()=>{
  dispatch({
    type:"increment"
  })
}

const dec =()=>{
  dispatch({
    type:"decrement"
  })
}

return (
  <UseContext.Provider value={{ state, inc, dec }}>
  {children}
</UseContext.Provider>
);
}




export default UseContextProvider;
