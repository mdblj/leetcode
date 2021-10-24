/********************************************************************************** 
* 
* Given a 2D board containing 'X' and 'O', capture all regions surrounded by 'X'.
* 
* A region is captured by flipping all 'O's into 'X's in that surrounded region.
* 
* For example,
* 
* X X X X
* X O O X
* X X O X
* X O X X
* 
* After running your function, the board should be:
* 
* X X X X
* X X X X
* X X X X
* X O X X
* 
*               
**********************************************************************************/

var solve = function(board) {
    if (!board.length) return null;
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === 'O' && isNotSurrounded(board, i, j)) dfs(board, i, j);     
        }
    }
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === '#') board[i][j] = 'O';
            else board[i][j] = 'X';
        }
    }
    
    return board;
};

const dfs = (board, row, col) => {
    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length) return;
    if (board[row][col] === 'X' || board[row][col] === '#') return;
    
    board[row][col] = '#';
    dfs(board, row - 1, col);
    dfs(board, row + 1, col);
    dfs(board, row, col - 1);
    dfs(board, row, col + 1);
}

const isNotSurrounded = (board, i, j) => {
    return i === 0 || i === board.length - 1 || j === 0 || j === board[0].length - 1;
}
