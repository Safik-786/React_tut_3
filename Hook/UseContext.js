import React, { createContext } from 'react'
import CompA from './CompA'

export const NameContext = createContext()

function UseContext() {
  return (
    <div>
      <NameContext.Provider value="My Self Safik Mahammad">
        <CompA />
      </NameContext.Provider>
    </div>
  )
}

export default UseContext
