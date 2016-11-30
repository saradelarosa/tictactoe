/* This is a tictactoe game - players 'X' and 'O' should put their number on the command line using 1 - 9
1 | 2 | 3
---------
4 | 5 | 6
---------
7 | 8 | 9
*/


//I am using an npm module prompt to prompt the user for input
// it will save when you run npm install

var prompt = require('prompt');

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
