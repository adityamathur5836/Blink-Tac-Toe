import React from 'react';
import CurrentPlayer from './CurrentPlayer';
import Board from './Board';
import GameControls from './GameControls';
import PlayerStatus from './PlayerStatus';
import WinnerAnnouncement from './WinnerAnnouncement';

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
    onReset,
    playerEmojis,
    winner
}){
    return (
        <div className='game-board-container'>
            {gamephase === 'playing' && (
                <CurrentPlayer 
                currentPlayer={currentPlayer}
                playerNames={playerNames}
                playerCategories={playerCategories}/>
            )}

            {winner &&  (
                <WinnerAnnouncement 
                winner={winner}
                playerNames={playerNames}
                playerCategories={playerCategories}
            />)}

            <Board 
            board={board}
            winningLine={winningLine}
            animatingCells={animatingCells}
            gamePhase={gamephase}
            onCellClick={onCellClick}
            />

            <PlayerStatus 
            playerNames={playerNames}
            playerCategories={playerCategories}
            playerEmojis={playerEmojis}/>

            <GameControls 
            onPlayAgain = {onPlayAgain}
            onReset = {onReset}/>
        </div>
    )
}