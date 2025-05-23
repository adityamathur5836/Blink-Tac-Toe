import React from 'react';
import CurrentPlayer from './CurrentPlayer';
import Board from './Board';
import GameControls from './GameControls';

export default function GameBoard({
    gamephase,
    currentPlayer,
    playerNames,
    playerCategories,
    board,
    winningLine,
    animatingCells,
    onCellClick,
    onPlayAgain,
    onReset
}){
    return (
        <div className='game-board-container'>
            {gamephase === 'playing' && (
                <CurrentPlayer 
                currentPlayer={currentPlayer}
                playerNames={playerNames}
                playerCategories={playerCategories}/>
            )}

            <Board 
            board={board}
            winningLine={winningLine}
            animatingCells={animatingCells}
            gamePhase={gamephase}
            onCellClick={onCellClick}
            />

            <GameControls 
            onPlayAgain = {onPlayAgain}
            onReset = {onReset}/>
        </div>
    )
}