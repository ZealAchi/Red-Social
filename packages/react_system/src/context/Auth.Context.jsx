import React,{useState,createContext} from 'react'

export const AuthContext=createContext()
const initialData={
  data:{
    token:"asdasd",
    // token:undefined,
    role:undefined,
    name:'Luis Antonio',

  }
}
export default function AuthContextProvider({children}){
  const [state,setState]=useState(initialData)
  function login(){
    setState({data:{
      token:"asdasd",
      role:undefined,
      name:'Luis Antonio',
  
    }})
  }
  return(
    <AuthContext.Provider value={{...state,login}}>
      {children}
    </AuthContext.Provider>
  )
}