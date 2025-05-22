export default function checkWinner(board){
    const lines= [
        [0,1,2],[3,4,5],[6,7,8], // rows
        [0,3,6],[1,4,7],[2,5,8], // columns
        [0,4,8],[2,4,6] // diagonals
    ];

    for (let line of lines){
        const [a,b,c] = line;

        if (board[a] && board[b] && board[c]){
            const playerA = board[a].player;
            const playerB = board[b].player;
            const playerC = board[c].player;

            if (playerA === playerB && playerB === playerC){
                return {winner: playerA, line: line};
            }
        }
    }

    return null;
}