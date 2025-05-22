import React from 'react';
import { Trophy } from 'lucide-react';
import '../styles/globals.css';

const ScoreBoard = ({ scores, playerNames }) => {
  return (
    <div className="score-board">
      <div className="score-item">
        <div className="score-number">{scores[1]}</div>
        <div className="score-name">{playerNames[1] || 'Player 1'}</div>
      </div>
      <Trophy color="#fbbf24" size={24} />
      <div className="score-item">
        <div className="score-number">{scores[2]}</div>
        <div className="score-name">{playerNames[2] || 'Player 2'}</div>
      </div>
    </div>
  );
};

export default ScoreBoard;