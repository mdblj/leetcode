
/********************************************************************************** 
* 
* A cell (r, c) of an excel sheet is represented as a string "<col><row>" where:
*   - <col> denotes the column number c of the cell. It is represented by alphabetical letters.
*     - For example, the 1st column is denoted by 'A', the 2nd by 'B', the 3rd by 'C', and so on.
*   - <row> is the row number r of the cell. The rth row is represented by the integer r.
*
* You are given a string s in the format "<col1><row1>:<col2><row2>", 
* where <col1> represents the column c1, <row1> represents the row r1, 
* <col2> represents the column c2, and <row2> represents the row r2, such that r1 <= r2 and c1 <= c2.
*
* Return the list of cells (x, y) such that r1 <= x <= r2 and c1 <= y <= c2.
* The cells should be represented as strings in the format mentioned above 
* and be sorted in non-decreasing order first by columns and then by rows.
* 
**********************************************************************************/

// T.C = O(n + m), S.C = O(n)
var cellsInRange = function(s) {
    const res = [];
    const arr = s.split(':');
    let minCol = arr[0][0];
    let maxCol = arr[0][0];
    let minRow = arr[0][1];
    let maxRow = arr[0][1];
    
    for (const [row, col] of arr) {
        minCol = minCol < row ? minCol : row;
        maxCol = maxCol > row ? maxCol : row;
        minRow = Math.min(minRow, col);
        maxRow = Math.max(maxRow, col);
    }

    const n = maxCol.charCodeAt(0) - minCol.charCodeAt(0);
    const m = maxRow - minRow;
    
    for (let i = 0; i <= n; i++) {
        const col = String.fromCharCode(minCol.charCodeAt(0) + i);
        
        for (let j = 0; j <= m; j++) {
            const row = minRow + j;
            res.push(col + row);
        }
    }
    
    return res;
};
