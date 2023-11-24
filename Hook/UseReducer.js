import React, { useReducer } from 'react'

function UseReducer() {
  const initialState=0;
  const reducer = (state, action)=>{
    switch (action) {
      case "increament":
         return state+1
        break;
      case "increament":
         return state+1
        break;
      case "decreament":
         return state-1
        break;
      case "reset":
         return initialState
        break;
      default:
         return state
        break;
    }
      return
  }
  const [count, dispatch]= useReducer(reducer, initialState)
  return (
    <div>
      <h1>Count:  {count}</h1>
      <button onClick={()=> dispatch('increament')}>Increament</button> &nbsp;&nbsp;&nbsp;
      <button onClick={()=> dispatch('decreament')}>Decreament</button> &nbsp;&nbsp;&nbsp;
      <button onClick={()=> dispatch('reset')}>Reset</button>
    </div>
  )
}

export default UseReducer
