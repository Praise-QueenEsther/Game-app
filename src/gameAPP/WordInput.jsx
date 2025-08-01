import { useState, useContext } from "react";
import { GameContext } from "./gameContext";
import { Link } from "react-router-dom";

export const WordInput=()=>{
    // const [input, setInput]=useState("")
    // const { letter, addWord, input, setInput, guessWord } = useContext(GameContext);

    const {letter, addWord, input, setInput, guessWord }=useContext(GameContext)
    const [message, setMessage] = useState('')
    
    const handleSubmit=(e)=>{
        e.preventDefault();

        const word = input.toLowerCase()
       
    if (word.length < 3) {
        setMessage("Word should be at least 3 letters");
    } else if (guessWord.includes(word)) {
        setMessage("You've already used this word");
    } else {
        addWord(word);
        setMessage("Correct!");
    }
            setInput('');
    }

    setTimeout(() => setMessage(''), 2000); 

    return(
        <div>
            <form onSubmit={handleSubmit}>  
        <input type="text" value={input} 
        onChange={(e)=> setInput(e.target.value)

        } placeholder="input words"/>
        <button type="submit">Submit</button>
        <div>{message}</div>

        </form>
        <br />
        <br />
        <Link to="/" className="back-button">← Back to Home</Link>
        </div>
        

    )
}