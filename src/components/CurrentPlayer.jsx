import React from "react";
import '../styles/globals.css';
import { emojiCategories } from "../data/emojicategories";

export default function CurrentPlayer({ currentPlayer, playerNames, playerCategories }) {

    const currentCategory = emojiCategories[playerCategories[currentPlayer]];

    return (
        <div className="current-player-container">
            <div className="current-player-card">
                <div className="current-player-name">
                    {playerNames[currentPlayer]}'s Turn
                </div>
                <div className="current-player-category">
                    {currentCategory?.emojis[0]} {currentCategory?.name} 
                    {/* The (?.) return undefined if any issue is happened after the fetching the value  */}
                </div>
            </div>
        </div>
    )


}