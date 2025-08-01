import { GameProvider } from './gameContext';
import { Scores } from './Score';
import { GameBoard } from './GameBoard';
import { WordInput } from './WordInput';
import './GameRoute.css';


const GameRoute = () => {
  return (
    <GameProvider div className="game-container">
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Word Game Challenge</h1>
        <Scores />
        <GameBoard />
        <WordInput />
      </div>
    </GameProvider>
  );
};

export default GameRoute;