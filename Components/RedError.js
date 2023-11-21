import { ErrorMessage } from 'formik'
import React from 'react'

function RedError(props) {
  return (
    <div style={{color:"red",fontSize:"12px"}}>
      <ErrorMessage name={props.name}/>
    </div>
  )
}

export default RedError
