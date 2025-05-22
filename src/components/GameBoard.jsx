import React from 'react';
import CurrentPlayer from './CurrentPlayer';

export default function GameBoard({
    gamephase,
    currentPlayer,
    playerNames,
    playerCategories
}){
    return (
        <div className='game-board-container'>
            {gamephase === 'playing' && (
                <CurrentPlayer 
                currentPlayer={currentPlayer}
                playerNames={playerNames}
                playerCategories={playerCategories}/>
            )}
        </div>
    )
}