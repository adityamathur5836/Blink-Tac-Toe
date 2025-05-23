import React from 'react';
import { emojiCategories } from '../data/emojicategories';
import '../styles/globals.css';

export default function PlayerStatus({ playerNames, playerCategories, playerEmojis }){
  return (
    <div className="player-status-grid">
      {[1, 2].map(player => (
  <div key={player} className="player-status">
    <div className="player-status-name">
      {playerNames?.[player] ?? 'Unknown'} ({emojiCategories?.[playerCategories?.[player]]?.name ?? 'None'})
    </div>
    <div className="player-status-count">
      Emojis: {playerEmojis?.[player]?.length ?? 0}/3
    </div>
    <div className="player-status-emojis">
      {playerEmojis?.[player]?.map((emoji, idx) => (
        <span key={idx} className="status-emoji">
          {emoji?.emoji ?? ''}
        </span>
      ))}
    </div>
  </div>
))}

    </div>
  );
};
