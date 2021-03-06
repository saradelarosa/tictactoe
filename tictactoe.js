//This will install with npm install and you need to have the user prompted to play
var prompt = require('prompt');

//This makes the gameboard with nothing in the squares
var gameBoard = {
    1: ' ',
    2: ' ',
    3: ' ',
    4: ' ',
    5: ' ',
    6: ' ',
    7: ' ',
    8: ' ',
    9: ' '
};

///This will end up being the current game board
function currentGame() {
    console.log('\n' +
        ' ' + gameBoard[1] + ' | ' + gameBoard[2] + ' | ' + gameBoard[3] + '\n' +
        ' ' + gameBoard[4] + ' | ' + gameBoard[5] + ' | ' + gameBoard[6] + '\n' +
        ' ' + gameBoard[7] + ' | ' + gameBoard[8] + ' | ' + gameBoard[9] + '\n');
}

//This is a mix of the winning combinations that are possible on the game board
var winningCombinations = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 5, 9], [3, 5, 7], [1, 4, 7],
    [2, 5, 8], [3, 6, 9]];

//placing your number on the board for where you want the space to be
function markBoard(position, mark) {
    gameBoard[position] = mark;
}

//validating that it was in fact a move
function checkMove(position) {
    return ((position) && gameBoard[position] === ' ')
}

// this sees if the player put three in a row for a win!
function checkWin(player) {
    var i, j, markCount;
    for (i = 0; i < winningCombinations.length; i++) {
        markCount = 0;
        for (j = 0; j < winningCombinations[i].length; j++) {
            if (gameBoard[winningCombinations[i][j]] === player) {
                markCount++;
            }
            if (markCount === 3) {
                return true;
            }
        }
    }
    return false;
}

///checks if the game is a draw
function checkDraw() {
    for (var i = 1; i <= Object.keys(gameBoard).length; i++) {
        if (gameBoard[i] === ' ') {
            return false;
        }
    }
    return true;
}

function yourTurn(player) {

    console.log('Your turn player: ' + player);
    prompt.start();
    prompt.get(['position'], function (err, result) {

        if (checkMove(result.position) === true) {
            markBoard(result.position, player);
            currentGame();
            if (checkWin(player) === true) {
                console.log('You win wahooo!');
                return;
            }
            if (checkDraw() === true) {
                console.log('The game is tied');
                return;
            }
            if (player === 'x') {
                yourTurn('o');
            } else {
                yourTurn('x');
            }
        } else {
            console.log('Please try again');
            yourTurn(player);
        }
    });
}

//This will let you know that your game is starting!
console.log('Game is starting YAY!!!!');

yourTurn('x');

