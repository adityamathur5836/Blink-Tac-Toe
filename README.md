# Blink Tac Toe

A fun, emoji-powered twist on the classic Tic Tac Toe game! This version includes vanishing emojis and player name input for a personalized experience.

## ⚙️ Tech Stack

- **Frontend Framework:** React.js
- **Styling:** CSS, lucide-react

## 🎭 Emoji Categories

Players can choose from different emoji categories before starting the game. Current categories include:

- 🐾 **Animals** – 🐶, 🐱, 🐭, ...
- 🍔 **Food** – 🍕, 🍔, 🍟, ...
- ⚽ **Sports** – ⚽, 🏀, 🏈, ...
- 🌈 **Nature** – 🌸, 🌞, 🌧️, ...
- 🎉 **Space** – 🌟, ⭐️, 🌙, ...
- 🧙 **Magic** – ✨, 🔮, 🎭, ...

*(You can extend the list easily via the `emojiCategories.js` file.)*

## 🧠 Vanishing Feature

To add a unique challenge, each player can only have **three emojis** on the board at a time. Here's how it works:

- After placing the **4th emoji**, the **oldest one vanishes** from the board.
- This keeps the game dynamic and strategic.
- Prevents placing a new emoji on the cell occupied by your own oldest emoji.

This logic is handled in the `handleCellClick()` function and tracks emoji timestamps for each player.

## 👤 Player Name Input

Players can enter their names during the setup phase. These names are:

- Displayed in the **ScoreBoard**
- Used to personalize the **current turn indicator**
- Stored in local state via `useState`

This feature enhances the multiplayer experience by giving each player their own identity.

---

