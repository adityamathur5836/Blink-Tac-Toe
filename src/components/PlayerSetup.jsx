import { emojiCategories } from '../data/emojicategories';
import CategoryButton from './CategoryButton';
import '../styles/globals.css';

export default function PlayerSetup({
    playerNumber,
    playerName,
    selectedCategory,
    blockedCategory,
    onNameChange,
    onCategorySelect
  }) {
    return (
      <div className="player-section">
        <h3 className="player-title">Player {playerNumber} - Enter Your Details:</h3>
        
        <input
          type="text"
          placeholder="Enter your name..."
          value={playerName}
          onChange={(e) => onNameChange(e.target.value)}
          className={`name-input ${playerName.trim() ? 'valid' : ''}`}
        />
        
        <div className="category-grid">
          {Object.entries(emojiCategories).map(([key, category]) => (
            <CategoryButton
              key={key}
              categoryKey={key}
              category={category}
              isSelected={selectedCategory === key}
              isBlocked={blockedCategory === key}
              onClick={() => onCategorySelect(key)}
              playerNumber={playerNumber}
            />
          ))}
        </div>
      </div>
    );
  };