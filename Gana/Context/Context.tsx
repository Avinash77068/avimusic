import { createContext, useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import data from "../songs/song";
export const Context=createContext({});



export default function ContextProvider({children}:any) {
    
    const [toogleEvent,setToogleEvent]=useState({
        bgcolor:'black',
        color:'white',
        component:< IoSunnyOutline/>
      });
    const [store,setStore]=useState(data)
    const [checkData,setCheckData]=useState("")
    
  return (
    <Context.Provider value={{toogleEvent,setToogleEvent,store,setStore,checkData,setCheckData}}>
      {children}
    </Context.Provider>
  )
}
