/********************************************************************************** 
 * 
 * Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. 
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
 * You may assume all four edges of the grid are all surrounded by water.
 * 
 * Example 1:
 *   11110
 *   11010
 *   11000
 *   00000
 * Answer: 1
 * 
 * Example 2:
 *   11000
 *   11000
 *   00100
 *   00011
 * Answer: 3
 *               
 **********************************************************************************/

var numIslands = function(grid) {
    let counter = 0;
    
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === '1') {
                DFS(grid, row, col)  
                counter++;
            }
        }
    }
    
    return counter;
};

const DFS = (grid, row, col) => {
    if (row < 0 || col < 0 || row >= grid.length || col >= grid[row].length ||
        grid[row][col] === '0') return;
    
    grid[row][col] = '0';
    
    DFS(grid, row - 1, col); // top
    DFS(grid, row + 1, col); // bottom
    DFS(grid, row, col - 1); // left
    DFS(grid, row, col + 1); // right
}

