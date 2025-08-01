import { useContext } from 'react';
import { GameContext } from './gameContext';

export const GameBoard=()=>{
    const {letter}=useContext(GameContext)

    return (
        <div>
            <h2>Form words from these letters:</h2>
            {letter.map((l,i)=><span key={i}>{l.toUpperCase()}</span>)}
        </div>
    )
    
}
