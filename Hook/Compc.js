import React, { useContext } from 'react'
import {NameContext} from './UseContext'

function Compc() {
  const name= useContext(NameContext)
  return (
    <div>
      <h3>Hii I am component c</h3>
      <h4>{name}</h4>
    </div>
  )
}

export default Compc
