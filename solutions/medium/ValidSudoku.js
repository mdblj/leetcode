/********************************************************************************** 
* 
* Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules.
* 
* The Sudoku board could be partially filled, where empty cells are filled with the character '.'.
* 
* A partially filled sudoku which is valid.
* 
* Note:
* > A valid Sudoku board (partially filled) is not necessarily solvable. 
*   Only the filled cells need to be validated.
* 
**********************************************************************************/

var isValidSudoku = function(board) {
  for (let i = 0; i < board.length; i++) {
    const row = new Set();
    const col = new Set();
    const sqr = new Set();
      
    for (let j = 0; j < board[0].length; j++) {
      const rowc = board[i][j];
      const colc = board[j][i];
      const sqrc = board[Math.floor(i / 3) * 3 + Math.floor(j / 3)][(i % 3) * 3 + j % 3];
      
      console.log(Math.floor(i / 3) * 3 + Math.floor(j / 3), (i % 3) * 3 + j % 3)
      if (row.has(rowc) || col.has(colc) || sqr.has(sqrc)) return false;
      if (rowc !== ".") row.add(rowc);
      if (colc !== ".") col.add(colc);
      if (sqrc !== ".") sqr.add(sqrc);
    }
  }
    
  return true;
};
