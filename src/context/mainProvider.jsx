import React, { createContext, useState } from 'react'
export const mainContext = createContext()
import cards from '../assets/data/list.js'

const MainProvider = ({children}) => { 
  
  return (
    <mainContext.Provider value={{cards}}>
    {children}
    </mainContext.Provider>
  )
}

export default MainProvider