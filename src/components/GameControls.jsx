import { Zap, RotateCcw } from "lucide-react";
import React from "react";
import '../styles/globals.css'

export default function GameControls(){
    return (
        <div className="control-buttons">
            <button className="button play-again-button">
                <Zap size={20}/>
                Play Again
            </button>
            <button className="button reset-button">
                <RotateCcw size={20}/>
                New Setup
            </button>
        </div>
    )
}