import React,{useState,createContext} from 'react'

export const AuthContext=createContext()
const initialData={
  data:{
    token:"asdasd",
    role:undefined,
    name:'Luis Antonio',

  }
}
export default function AuthContextProvider({children}){
  const [state,setState]=useState(initialData)
  return(
    <AuthContext.Provider value={{...state}}>
      {children}
    </AuthContext.Provider>
  )
}