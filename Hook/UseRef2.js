import React, { useEffect, useRef, useState } from 'react'

function UseRef2() {
    const [inputValue, setInputValue]=useState('')
    console.log(inputValue)
  //  const [count, setCount]=useState(0)  

   /* dis advantage is  when we use useState with useEffect it goto infinite loop to prevent this problem we can use dependency as parameter of the useEffect be still have a problem it will start from  1t can't give result on updating  as we set executing only once   []     */


// solution

    const count = useRef(0)  // count current value(i.e = 0) will be stored  in count.current

    useEffect(()=>{
        // setCount(count+1)
        count.current = count.current + 1;
    })
  return (
    <div>
      <label htmlFor="">Enter name:</label>
      <input type="text" placeholder='Enter name ' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
      <br />
      <h2>Render Count: {count.current}</h2>
      <h3>Data: {inputValue}</h3>
    </div>
  )
}

export default UseRef2


/*
   1. count.current ka value 0 isiliye aa raha hai coz useRef re-render nahi karta
   2. why count.current=0 initially: at first component render hota hai then useref Execute hota hai
   3. useRef ,useState are  used for State management
*/