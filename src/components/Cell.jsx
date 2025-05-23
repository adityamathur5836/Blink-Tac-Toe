import React from 'react';
import '../styles/globals.css'

export default function Cell({cell, isWinning, isAnimating, gamePhase, onClick}){

    const classes = ['cell', isWinning && 'winning', isAnimating && 'animating', gamePhase === 'playing' && !cell && 'clickable'].filter(Boolean).join(' ')

    return (
        <button 
            className={classes}
            onClick={onClick}
            disabled = {gamePhase !== 'playing' || !!cell}
        >
            {cell?.emoji}
        </button>
    )
}