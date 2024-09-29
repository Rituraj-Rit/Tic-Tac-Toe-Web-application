const board = document.getElementById('game-board');
const restartButton = document.getElementById('restart');
let currentPlayer = 'X';
let boardState = ['', '', '', '', '', '', '', '', ''];

function createBoard() {
    board.innerHTML = '';
    boardState.forEach((cell, index) => {
        const cellDiv = document.createElement('div');
        cellDiv.classList.add('cell');
        cellDiv.textContent = cell;
        cellDiv.addEventListener('click', () => makeMove(index));
        board.appendChild(cellDiv);
    });
}

function makeMove(index) {
    if (boardState[index] === '') {
        boardState[index] = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        createBoard();
        checkWinner();
    }
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            setTimeout(() => alert(`${boardState[a]} wins!`), 100);
            return;
        }
    }

    if (!boardState.includes('')) {
        setTimeout(() => alert('It\'s a draw!'), 100);
    }
}

restartButton.addEventListener('click', () => {
    boardState = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    createBoard();
});

createBoard();