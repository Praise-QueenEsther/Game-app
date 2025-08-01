import { useState, createContext } from "react";

export const NameContext=createContext()

export function ConProvider({children}){
    const [name, setName]=useState("Esther")
    return ( 
    <div>
    <NameContext.Provider value={{ name, setName }}>
        {children}
    </NameContext.Provider>
    </div>)
   
}