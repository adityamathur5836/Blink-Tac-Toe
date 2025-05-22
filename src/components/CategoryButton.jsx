import React from 'react';

const CategoryButton = ({
  categoryKey,
  category,
  isSelected,
  isBlocked,
  onClick,
  playerNumber
}) => {
  const isDisabled = isBlocked;
  const isActive = isSelected && !isBlocked;

  const classes = [
    'category-button',
    isDisabled && 'disabled',
    isActive && `selected player-${playerNumber}`
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} onClick={onClick} disabled={isDisabled}>
      <span className="category-emoji">{category.emojis[0]}</span>
      <div className="category-name">{category.name}</div>
    </button>
  );
};

export default CategoryButton;
