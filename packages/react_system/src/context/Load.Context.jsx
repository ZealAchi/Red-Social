import React,{useState,createContext} from 'react'

export const LoadContext=createContext()
const initialData={
    loading:true,
}
export default function LoadContextProvider({children}){
  const [state,setState]=useState(initialData)
  const changeState=(value)=>{
    setState({...state,loading:value})
  }
  return(
    <LoadContext.Provider value={{...state,changeState}}>
      {children}
    </LoadContext.Provider>
  )
}