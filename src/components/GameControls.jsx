import { Zap, RotateCcw } from "lucide-react";
import React from "react";
import '../styles/globals.css'

export default function GameControls({onPlayAgain, onReset}){
    return (
        <div className="control-buttons">
            <button className="button play-again-button" onClick={onPlayAgain}>
                <Zap size={20}/>
                Play Again
            </button>
            <button className="button reset-button" onClick={onReset}>
                <RotateCcw size={20}/>
                New Setup
            </button>
        </div>
    )
}