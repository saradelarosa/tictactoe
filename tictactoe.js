/* This is a tictactoe game - players 'X' and 'O' should put their number on the command line using 1 - 9
1 | 2 | 3
---------
4 | 5 | 6
---------
7 | 8 | 9
*/

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
        ' ' + gameBoard[1] + gameBoard[2] + gameBoard[3] + '\n' +
        ' ' + gameBoard[4] + gameBoard[5] + gameBoard[6] + '\n' +
        ' ' + gameBoard[7] + gameBoard[8] + gameBoard[9] + '\n');
}

//This is a mix of the winning combinations that are possible on the game board
var winningCombinations = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 5, 9], [3, 5, 7], [1, 4, 7],
    [2, 5, 8], [3, 6, 9]];

//This will let you know that your game is starting!
console.log('Game is starting YAY!!!!');

yourTurn('X');

