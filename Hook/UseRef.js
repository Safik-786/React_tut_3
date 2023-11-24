import React, { useEffect, useRef } from 'react'

function UseRef() {
  const newRef = useRef()
  const firstRef = useRef()
  const lastRef = useRef()
  useEffect(() => {       // it is used because when component mount it will execute
    console.log(newRef)
    console.log(newRef.current.innerHTML)
    console.log(firstRef)
    console.log(lastRef)
    console.log('full name: ', firstRef.current.value, " ", lastRef.current.value)
  })
  console.log(newRef)
  
  const handleHeading = () => {
    newRef.current.style.backgroundColor = "pink";
    newRef.current.style.color = "green";
          // used to hide the element
  }
  const handleHeading2 = () => {
    newRef.current.hidden = true;       
  }
  const handleHeading3 = () => {

    newRef.current.hidden = false;       
  }
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log('full name: ', firstRef.current.value,  lastRef.current.value)

  }
  return (
    <div>
      <h2 ref={newRef}>Learning Never ends</h2>
      <button onClick={handleHeading}>Style</button>
      <button onClick={handleHeading2}>hide</button>
      <button onClick={handleHeading3}>Unhide</button>
      <br />

      <form onSubmit={handleSubmit}>
        <label htmlFor="">Enter First name :</label>
        <input type="text" placeholder='first name' ref={firstRef} />
        <br /><br />
        <label htmlFor="">Enter Last name:</label>
        <input type="text" placeholder='Last name' ref={lastRef} />
        <br /><br />
        <input type="submit" value='submit' />
      </form>
    </div>
  )
}

export default UseRef
