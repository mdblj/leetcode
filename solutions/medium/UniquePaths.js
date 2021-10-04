/********************************************************************************** 
 * 
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
 * 
 * The robot can only move either down or right at any point in time. The robot is trying to reach 
 * the bottom-right corner of the grid (marked 'Finish' in the diagram below).
 *    
 *    
 *    start                                                  
 *    +---------+----+----+----+----+----+                   
 *    |----|    |    |    |    |    |    |                   
 *    |----|    |    |    |    |    |    |                   
 *    +----------------------------------+                   
 *    |    |    |    |    |    |    |    |                   
 *    |    |    |    |    |    |    |    |                   
 *    +----------------------------------+                   
 *    |    |    |    |    |    |    |----|                   
 *    |    |    |    |    |    |    |----|                   
 *    +----+----+----+----+----+---------+                   
 *                                   finish                  
 *    
 * 
 * How many possible unique paths are there?
 * 
 * Above is a 3 x 7 grid. How many possible unique paths are there?
 * 
 * Note: m and n will be at most 100.
 *               
 **********************************************************************************/

// ---------------------- DP -------------------------------
var uniquePaths = function(m, n) {
    const dp = new Array(m).fill(0).map(() => new Array(n));
    
    for (let row = m - 1; row >= 0; row--) {
        for (let col = n - 1; col >= 0; col--) {
            if (row === m - 1 || col === n - 1) {
                dp[row][col] = 1;
            } else {
                dp[row][col] = dp[row][col + 1] + dp[row + 1][col];
            }
        }
    }
    
    return dp[0][0];
};

// ---------------------- Memoization -------------------------------
var uniquePaths = function(m, n) {
    const memo = new Array(m).fill(0).map(() => new Array(n));
    
    return dfs(memo, 0, 0, m, n);
};

const dfs = (memo, row, col, height, width) => {
    if (row < 0 || row >= height || col < 0 || col >= width) return 0;
    if (row === height - 1 && col === width - 1) return 1;

    if (memo[row][col] !== undefined) return memo[row][col];

    const pathsRight = dfs(memo, row, col + 1, height, width);
    const pathsBottom = dfs(memo, row + 1, col, height, width);
    memo[row][col] = pathsRight + pathsBottom;
    
    return memo[row][col];
}
