import React, {useState} from "react";
import Header from "./Header";
import HelpButton from "./HelpButton";
import HelpModel from "./HelpModel";
import ScoreBoard from "./ScoreBoard";
import GameSetup from "./GameSetup";
import GameBoard from "./GameBoard";
import { emojiCategories } from "../data/emojicategories";
import checkWinner from "../utils/gameLogic";
import MatchHistoryButton from "./MatchHistoryButton";
import MatchHistoryModel from "./MatchHistoryModel";

export default function BlinkTacToe(){

    const [showHelp, setShowHelp] = useState(false);
    const [scores, setScores] = useState({1 : 0 , 2 : 0});
    const [playerNames, setPlayerNames] = useState({1 : "", 2 : ""});
    const [gamePhase, setGamePhase] = useState("setup");
    const [playerCategories, setPlayerCategories] = useState({ 1: null, 2: null });
    const [currentPlayer, setCurrentPlayer] = useState(1);
    const [board, setBoard] = useState(Array(9).fill(null));
    const [winningLine, setWinningLine] = useState([]);
    const [animatingCells, setAnimatingCells] = useState(new Set());
    const [winner, setWinner] = useState(null);
    const [playerEmojis, setPlayerEmojis] = useState({ 1: [], 2: [] });
    const [gameHistory, setGameHistory] = useState([]);
    const [showMatchHistory, setShowMatchHistory] = useState(false);

    // To Get Random Emoji
    function getRandomEmoji(player){
        const category = playerCategories[player];
        if (!category) return null;

        const emojis = emojiCategories[category].emojis;
        return emojis[Math.floor(Math.random() * emojis.length)];
    }

    // When Clicking on the Cell
    function handeCellClick(index){
        if (gamePhase !== 'playing' || board[index] || winner) return;

        const newBoard = [...board];
        const currentEmoji = getRandomEmoji(currentPlayer);
        const currentPlayerEmojis = [...playerEmojis[currentPlayer]]

        // Animation 
        setAnimatingCells(prev => new Set([...prev, index]));
        setTimeout(() => {
            setAnimatingCells(prev => {
                const newSet = new Set(prev);
                newSet.delete(index);
                return newSet
            })
        }, 300);

        // Vanishing Rule Handled
        if (currentPlayerEmojis.length >= 3){
            const oldestPosition = currentPlayerEmojis[0].positon;

            // If try to place on the oldest position
            if (index === oldestPosition){
                return 
            }

            // Remove oldest emoji
            newBoard[oldestPosition] = null;
            currentPlayerEmojis.shift();
        }

        // place new emoji
        const emojiData = {
            emoji: currentEmoji,
            player: currentPlayer,
            positon: index,
            timeStamp: Date.now(),
        };

        newBoard[index] = emojiData;
        currentPlayerEmojis.push(emojiData);

        // Update State
        setBoard(newBoard);
        setPlayerEmojis({...playerEmojis, [currentPlayer] : currentPlayerEmojis});

        // Check for Winner
        const result = checkWinner(newBoard);
        if (result){
            setWinner(result.winner)
            setWinningLine(result.line);
            setGamePhase('ended');
            setScores(prev => ({...prev, [result.winner] : prev[result.winner] + 1}));

            // Add to History
            setGameHistory(prev => [...prev, {
                winner: result.winner,
                timeStamp: Date.now(),
                playerCategories: {...playerCategories},
                playerNames: {...playerNames},
            }]);
        }
        else{
            setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
        }
    }

    // Game Start
    const startGame = () => {
        if (!playerCategories[1] || !playerCategories[2] || !playerNames[1].trim() || !playerNames[2].trim()) return;
        setGamePhase('playing');
    };

    // Reset the Game
    function resetGame(){
        setBoard(Array(9).fill(null));
        setCurrentPlayer(1);
        setPlayerEmojis({1 : [], 2 : []});
        setWinner(null);
        setWinningLine([]);
        setGamePhase('setup');
        setPlayerNames({1 : "", 2 : ""});
        setPlayerCategories({1 : null, 2 : null});
        setAnimatingCells(new Set());
    };

    // Play Again
    function playAgain(){
        setBoard(Array(9).fill(null));
        setCurrentPlayer(1);
        setPlayerEmojis({1 : [], 2 : []});
        setWinner(null);
        setWinningLine([]);
        setGamePhase('playing');
        setAnimatingCells(new Set());
    }    

    return (
        <div className="game-container">
            <Header />

            <div className="help-hist">
            <HelpButton onClick={() => setShowHelp(true)} />
            <MatchHistoryButton onClick={() => setShowMatchHistory(true)} />
            </div>

            {showHelp && <HelpModel onClose={() => setShowHelp(false)} />}
            {showMatchHistory && (
                <MatchHistoryModel
                gameHistory={gameHistory}
                playerNames={playerNames}
                onClose={() => setShowMatchHistory(false)}
                />
            )}

            <ScoreBoard scores={scores} playerNames={playerNames}/>
                    
            {gamePhase === 'setup' && (
                <GameSetup 
                playerNames={playerNames}
                setPlayerNames={setPlayerNames}
                playerCategories={playerCategories}
                setPlayerCategories={setPlayerCategories}
                onStartGame={startGame}
                />
            )}

            {(gamePhase ==='playing' || gamePhase === 'ended') && (
                <GameBoard 
                gamephase={gamePhase}
                currentPlayer={currentPlayer}
                playerNames={playerNames}
                playerCategories={playerCategories}
                board={board}
                winningLine={winningLine}
                animatingCells={animatingCells}
                onCellClick={handeCellClick}
                onPlayAgain = {playAgain}
                onReset={resetGame}
                winner={winner}
                />   
            )}
        </div>
    )
}