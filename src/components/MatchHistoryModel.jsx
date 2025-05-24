// src/components/MatchHistoryModal.jsx
import React from "react";
import "../styles/globals.css";

export default function MatchHistoryModal({ gameHistory, playerNames, onClose }) {
  return (
    <div className="model" onClick={onClose}>
      <div className="model-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="model-title">Match History</h2>
        {gameHistory.length === 0 ? (
          <p>No matches played yet.</p>
        ) : (
          <ul className="rules-list">
            {gameHistory.map((game, index) => (
              <li key={index} className="rules-item">
                <strong>Game {index + 1}:</strong> Winner - Player {game.winner} (
                {game.playerNames[game.winner] || "Unknown"})
                <br />
                Time: {new Date(game.timeStamp).toLocaleString()}
              </li>
            ))}
          </ul>
        )}
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
