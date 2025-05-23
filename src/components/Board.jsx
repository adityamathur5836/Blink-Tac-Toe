import React from 'react';
import Cell from './Cell';
import '../styles/globals.css';

export default function Board({board, winningLine, animatingCells, gamePhase, onCellClick}){

    return (
        <div className='board-grid'>
            {board.map((cell, index) => (
                <Cell 
                key={index}
                index = {index}
                cell={cell}
                isWinning={winningLine.includes(index)}
                isAnimating={animatingCells.has(index)}
                gamePhase={gamePhase}
                onClick={() => onCellClick(index)}/>
            ))}
        </div>
    )
}