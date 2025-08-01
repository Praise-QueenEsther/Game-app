import { useContext } from "react";

import { GameContext } from "./gameContext";

export const Scores=()=>{
    const {score}=useContext(GameContext)
    return(
        <div>
            Score:{score}
        </div>
    )
}