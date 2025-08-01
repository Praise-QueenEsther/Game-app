import { useEffect,useState } from "react";

export default function Welcome(params) {

    const [name, setName]=useState("")
    useEffect(()=>{
       const savedName=JSON.parse(localStorage.getItem("username"))

        if(savedName){
            setName(savedName)
        }
    },[])

    const handleChange=(e)=>{
        const value= e.target.value
        setName(value)
        localStorage.setItem("username", JSON.stringify(value))
    }

    return(
        <div>
            <h1>Wellcom {name||"Guest"}</h1>
            <input type="text" value={name} onChange={handleChange} placeholder="input your name"/>
        </div>
    )
    
}