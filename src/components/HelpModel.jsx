import React from "react";
import '../styles/globals.css';

export default function HelpModel({ onClose }) {
    return (
        <div className="model">
          <div className="model-content">
            <h2 className="model-title">How to Play Blink Tac Toe</h2>
            
            <div className="rules-section">
              <h3 className="rules-title">🎯 Basic Rules</h3>
              <ul className="rules-list">
                <li className="rules-item">Each player enters their name and chooses an emoji category</li>
                <li className="rules-item">Players take turns placing random emojis from their category</li>
                <li className="rules-item">Goal: Get 3 of your emojis in a row (horizontal, vertical, or diagonal)</li>
              </ul>
            </div>
            
            <div className="rules-section">
              <h3 className="rules-title">✨ The Vanishing Rule</h3>
              <ul className="rules-list">
                <li className="rules-item">Each player can only have 3 emojis on the board at once</li>
                <li className="rules-item">When placing a 4th emoji, your oldest emoji disappears automatically</li>
                <li className="rules-item">You cannot place your 4th emoji where your 1st emoji was</li>
                <li className="rules-item">This creates dynamic strategy as the board constantly changes!</li>
              </ul>
            </div>
            
            <div className="rules-section">
              <h3 className="rules-title">🏆 Winning</h3>
              <ul className="rules-list">
                <li className="rules-item">Get 3 of your emojis in a line to win</li>
                <li className="rules-item">The game tracks scores across multiple rounds</li>
                <li className="rules-item">No draws possible - someone always wins!</li>
              </ul>
            </div>
            
            <button className="close-button" onClick={onClose}>
              Got It!
            </button>
          </div>
        </div>
      );
}