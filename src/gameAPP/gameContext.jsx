import { useEffect, useState, createContext } from "react";
 export const GameContext=createContext()
const getStoredGame=()=>{
    const saved=localStorage.getItem("word-game")
    if(saved){
       return JSON.parse(saved)
    } else{
      return { letter: [], score: 0, guessWord: [], input: '' };
    }

}

export const GameProvider =({children})=>{
    const [letter, setLetter]=useState([])
    const [guessWord,setGuessWord]=useState([])
    const [score, setScore]=useState(0)
    const [input, setInput] = useState('');

const generateLetter=()=>{
    const alphabet="abcdefghijklmnopqrstuvwxyz"
    const randomLetter= Array.from({length:7},()=>{
        return alphabet[Math.floor(Math.random()*alphabet.length)]
    })
    setLetter(randomLetter)

}

const addWord=(word)=>{
    if(!guessWord.includes(word)){
        setGuessWord([...guessWord,word])
        setScore(score +1)
    }
}
 
useEffect(()=>{
    const data=getStoredGame()
    if(data){
        setGuessWord(data.guessWord)
        setLetter(data.letter)
        setScore(data.score)
        setInput(data.input || '');
    } else generateLetter()

},[])

useEffect(()=>{
    localStorage.setItem("word-game", JSON.stringify({letter,score,guessWord,input}))
},[letter, score, guessWord, input])
 return (
    <GameContext.Provider value={{letter,score,guessWord,addWord,input, setInput}}>
        {children}
    </GameContext.Provider >
 ) 

}