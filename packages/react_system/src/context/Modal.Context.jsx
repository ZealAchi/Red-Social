import React,{useState,createContext} from 'react'

export const ModalContext=createContext()

export default function ModalContextProvider({children}){
    const [showContext,setShowContext]=useState(false)

    const MostarModal=(value)=>setShowContext(value)

  return(
    <ModalContext.Provider value={{...showContext,MostarModal}}>
      {children}
    </ModalContext.Provider>
  )
}