/********************************************************************************** 
 * 
 * Given a 2d matrix of numbers and oceans, count the cells which the rain water can flow to the both Pacific, Atlantic oceans. 
 * The rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height.
 * Water can flow from any cell adjacent to an ocean into the ocean.
 * 
 * Example 1: [
 *   [1,2,2,3,5],
 *   [2,4,5,3,1],
 *   [6,7,1,4,5],
 *   [5,1,1,2,4]
 *]
 * Answer: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
 * 
 * Example 2: [
 *   [2, 1],
 *   [1, 2]
 * ]
 * Answer: [[0,0],[0,1],[1,0],[1,1]]
 *               
 **********************************************************************************/


var pacificAtlantic = function(matrix) {
    if (!matrix.length) return [];
    
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    const pacific = [];
    const atlantic = [];
    
    for (let i = 0; i < numRows; i++) {
        pacific.push(new Array(numCols).fill(false));
        atlantic.push(new Array(numCols).fill(false));
    }
    
    for (let row = 0; row < numRows; row++) {
        dfs(matrix, row, 0, Number.MIN_SAFE_INTEGER, pacific);
        dfs(matrix, row, numCols - 1, Number.MIN_SAFE_INTEGER, atlantic);
    }
    
    for (let col = 0; col < numCols; col++) {
        dfs(matrix, 0, col, Number.MIN_SAFE_INTEGER, pacific);
        dfs(matrix, numRows -1, col, Number.MIN_SAFE_INTEGER, atlantic);
    }
    
    const result = [];
    
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (pacific[i][j] && atlantic[i][j]) result.push([i, j]);
        }
    }
    
    return result;
}

const dfs = (matrix, row, col, prev, ocean) => {
    if (row < 0 ||
        row > matrix.length - 1 ||
        col < 0 ||
        col > matrix[row].length - 1 ||
        ocean[row][col] ||
        matrix[row][col] < prev
       ) return;
    
    ocean[row][col] = true;
    
    dfs(matrix, row - 1, col, matrix[row][col], ocean);
    dfs(matrix, row + 1, col, matrix[row][col], ocean);
    dfs(matrix, row, col - 1, matrix[row][col], ocean);
    dfs(matrix, row, col + 1, matrix[row][col], ocean);
}
