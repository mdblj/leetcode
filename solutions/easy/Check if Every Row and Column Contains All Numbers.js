/********************************************************************************** 
* 
* An n x n matrix is valid if every row and 
* every column contains all the integers from 1 to n (inclusive).
*
* Given an n x n integer matrix matrix, return true if the matrix is valid.
* Otherwise, return false.
* 
**********************************************************************************/

var checkValid = function(matrix) {
    const n = matrix.length;
  
    for (let i = 0; i < n; i++) {
      const row = new Set(matrix[i]);
      const col = new Set();
      
      for (let j = 0; j < n; j++) {
        col.add(matrix[j][i]);
      }
      
      for (let k = 0; k < n; k++) {
        if (!row.has(k + 1) || !col.has(k + 1)) return false;
      }
    }
  
    return true;
};
