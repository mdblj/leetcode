/********************************************************************************** 
 * 
 * Given a 2D board and a word, find if the word exists in the grid.
 * 
 * The word can be constructed from letters of sequentially adjacent cell, 
 * where "adjacent" cells are those horizontally or vertically neighboring. 
 * The same letter cell may not be used more than once.
 * 
 * For example,
 * Given board = 
 * 
 * [
 *   ["ABCE"],
 *   ["SFCS"],
 *   ["ADEE"]
 * ]
 * 
 * word = "ABCCED", -> returns true,
 * word = "SEE", -> returns true,
 * word = "ABCB", -> returns false.
 * 
 **********************************************************************************/

var exist = function(board, word) {    
    for (let row = 0; row < board.length; row++) {
        for (let col  = 0; col < board[0].length; col++) {
            if (dfs(board, word, row, col)) return true;
        }
    }
    
    return false;
};

const dfs = (board, word, row, col) => {
    if (!word.length) return true;
    if (isOutOfBound(board, row, col) || board[row][col] !== word[0]) return false;
    
    const curChar = board[row][col];
    const newWord = word.substr(1);

    board[row][col] = 0;
    
    const results = dfs(board, newWord, row + 1, col) ||
        dfs(board, newWord, row - 1, col) ||
        dfs(board, newWord, row, col + 1) ||
        dfs(board, newWord, row, col - 1);

    board[row][col] = curChar;

    return results;
};

const isOutOfBound = (board, row, col) => row < 0 || row >= board.length || col < 0 || col >= board[0].length;
