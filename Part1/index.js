let player = 0;
let board = [];

function play(clickedID) {
    const playerSpan = document.getElementById('player');
    const clickedElement = document.getElementById(clickedID);

    if (!board[clickedID]) {
        if (playerSpan.innerText === 'X') {
            playerSpan.innerText = 'O';
            clickedElement.innerText = 'X';
            board[clickedID] = 'X';
        } else { 
            playerSpan.innerText = 'X';
            clickedElement.innerText = 'O';
            board[clickedID] = 'O';
        }

        checkWinner();
        checkDraw();
    }
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            alert(`${board[a]} is the winner!`);
            clearBoard();
            return;
        }
    }
}

function checkDraw() {
    let boardFull = true;
    for (let i = 0; i < 9; i++) {
        if (!board[i]) {
            boardFull = false;
            break;
        }
    }

    if (boardFull) {
        alert("Cat's game, there is no winner");
        clearBoard();
    }
}

function clearBoard() {
    board = [];
    player = 0;
    const playerSpan = document.getElementById('player');
    playerSpan.innerText = 'X';

    // Reset the text content of all cells
    for (let i = 0; i < 9; i++) {
        document.getElementById(i).innerText = '';
    }
}