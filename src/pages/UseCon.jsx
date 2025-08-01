import { useContext } from "react";
import { NameContext } from "./demoContext";

function NameDisplay(){
    const {name, setName}=useContext(NameContext)
    return ( 
        <div>
           <p> Say Hello {name}</p>
                <br />
            <button onClick={()=>setName('I AM THE ONE')}></button>
        </div>
    )
}

export default NameDisplay

