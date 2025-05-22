import React, {useState} from "react";
import Header from "./Header";
import HelpButton from "./HelpButton";
import HelpModel from "./HelpModel";
import ScoreBoard from "./ScoreBoard";
import GameSetup from "./GameSetup";
import GameBoard from "./GameBoard";

export default function BlinkTacToe(){

    const [showHelp, setShowHelp] = useState(false);
    const [scores, setScores] = useState({1 : 0 , 2 : 0});
    const [playerNames, setPlayerNames] = useState({1 : "", 2 : ""});
    const [gamePhase, setGamePhase] = useState("setup");
    const [playerCategories, setPlayerCategories] = useState({ 1: null, 2: null });
    const [currentPlayer, setCurrentPlayer] = useState(1);

    const startGame = () => {
        if (!playerCategories[1] || !playerCategories[2] || !playerNames[1].trim() || !playerNames[2].trim()) return;
        setGamePhase('playing');
      };
    


    return (
        <div className="game-container">
            <Header />
            <HelpButton onClick={() => {setShowHelp(true)}}/>
            
            {showHelp && (
                <HelpModel onClose={() => setShowHelp(false)} />
            )}

            <ScoreBoard scores={scores} playerNames={playerNames}/>
        
            {gamePhase === 'setup' && (
                <GameSetup 
                playerNames={playerNames}
                setPlayerNames={setPlayerNames}
                playerCategories={playerCategories}
                setPlayerCategories={setPlayerCategories}
                onStartGame={startGame}
                />
            )}

            {(gamePhase ==='playing' || gamePhase === 'ended') && (
                <GameBoard 
                gamephase={gamePhase}
                currentPlayer={currentPlayer}
                playerNames={playerNames}
                playerCategories={playerCategories}/>
            )}
        </div>
    )
}