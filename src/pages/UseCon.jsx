import { useContext } from "react";
import { NameContext } from "./demoContext";
import { Link } from "react-router-dom";

function NameDisplay(){
    const {name, setName}=useContext(NameContext)
    return ( 
        <div>
           <p> Say Hello {name}</p>
                <br />
            <button onClick={()=>setName('I AM THE ONE')} >Click</button>
            <br />
            <br />
            <Link to="/" className="back-button">← Back to Home</Link>
        </div>
    )
}

export default NameDisplay

