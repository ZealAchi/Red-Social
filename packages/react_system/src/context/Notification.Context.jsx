import React,{useState,createContext} from 'react'

export const NotificationContext=createContext()
const initialData={
  data:{
    type:'Aviso',
    owner:'Luis Antonio',
    message:'Pago de Agua 25 Junio del 2020',
    view:false
  }
}
export default function NotificationContextProvider({children}){
  const [state,setState]=useState(initialData)
  return(
    <NotificationContext.Provider value={{...state}}>
      {children}
    </NotificationContext.Provider>
  )
}