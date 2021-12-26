
/********************************************************************************** 
* 
* There is an n x n grid, with the top-left cell at (0, 0) and the bottom-right cell at (n - 1, n - 1).
* You are given the integer n and an integer array startPos where startPos = [startrow, startcol] indicates 
* that a robot is initially at cell (startrow, startcol).
*
* You are also given a 0-indexed string s of length m where s[i] is the ith instruction for 
* the robot: 'L' (move left), 'R' (move right), 'U' (move up), and 'D' (move down).
*
* The robot can begin executing from any ith instruction in s. 
* It executes the instructions one by one towards the end of s but it stops if either of these conditions is met:
*
* The next instruction will move the robot off the grid.
* There are no more instructions left to execute.
* Return an array answer of length m where answer[i] is the number of instructions 
* the robot can execute if the robot begins executing from the ith instruction in s.
* 
**********************************************************************************/

var executeInstructions = function(n, startPos, s) {
    const res = [];
    
    for (let i = 0; i < s.length; i++) {
        const count = dfs(startPos, s.slice(i), 0, n);
        res.push(count);
    }
    
    return res;
};

const dfs = ([row, col], instruction, count, n) => {
    if (row < 0 || row >= n || col < 0 || col >= n) return count - 1;
    if (!instruction.length) return count;

    if (instruction[0] === 'U') return dfs([row - 1, col], instruction.slice(1), count + 1, n);
    if (instruction[0] === 'D') return dfs([row + 1, col], instruction.slice(1), count + 1, n);
    if (instruction[0] === 'R') return dfs([row, col + 1], instruction.slice(1), count + 1, n);
    if (instruction[0] === 'L') return dfs([row, col - 1], instruction.slice(1), count + 1, n);
}
