import React from 'react';
import PlayerSetup from './PlayerSetup';
import '../styles/globals.css';

export default function GameSetup({
  playerNames,
  setPlayerNames,
  playerCategories,
  setPlayerCategories,
  onStartGame
}) {
  const canStartGame = playerCategories[1] && playerCategories[2] && playerNames[1].trim() && playerNames[2].trim();

  return (
    <div className="setup-card">
      <h2 className="setup-title">Game Setup</h2>
      <div className='player-setup'>
        <PlayerSetup
          playerNumber={1}
          playerName={playerNames[1]}
          selectedCategory={playerCategories[1]}
          blockedCategory={playerCategories[2]}
          onNameChange={(name) => setPlayerNames(prev => ({ ...prev, 1: name }))}
          onCategorySelect={(category) => setPlayerCategories(prev => ({ ...prev, 1: category }))}
        />

        <PlayerSetup
          playerNumber={2}
          playerName={playerNames[2]}
          selectedCategory={playerCategories[2]}
          blockedCategory={playerCategories[1]}
          onNameChange={(name) => setPlayerNames(prev => ({ ...prev, 2: name }))}
          onCategorySelect={(category) => setPlayerCategories(prev => ({ ...prev, 2: category }))}
        />
      </div>

      <button
        className={`start-button ${!canStartGame ? 'disabled' : ''}`}
        onClick={onStartGame}
        disabled={!canStartGame}
      >
        Start Game! 🚀
      </button>
    </div>
  );
};