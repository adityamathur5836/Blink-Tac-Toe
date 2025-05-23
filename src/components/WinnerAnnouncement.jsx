import React from "react";
import { emojiCategories } from "../data/emojicategories";
import '../styles/globals.css'

export default function WinnerAnnouncement({winner, playerNames, playerCategories}){
    const winnerCategory = emojiCategories[playerCategories[winner]];

    return (
        <div className="winner-container">
            <div className="winner-card">
                <div className="winner-title">🎉 {playerNames[winner]} Wins! 🎉</div>
                <div className="winner-subtitle">
                    {winnerCategory?.name} category prevails!
                </div>
            </div>
        </div>
    )
}