/********************************************************************************** 
 * 
 * Given an n x n matrix where each of the rows and columns are sorted in ascending order, 
 * return the kth smallest element in the matrix.
 *
 * Note: 
 * it is the kth smallest element in the sorted order, not the kth distinct element.
 * 
 * Example:
 *  Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
 *  Output: 13
 *  Explanation: The elements in the matrix are [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13
 * 
 **********************************************************************************/

// ------------Binary search--------------
var kthSmallest = function(matrix, k) {
    const len = matrix.length;
    let left = matrix[0][0];
    let right = matrix[len - 1][len - 1] + 1;
    
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        let count = 0;
        
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                if (matrix[i][j] <= mid) count++;
                else break;
            }
        }
        
        if (count < k) left = mid + 1;
        else right = mid;
    }
    
    return left;
};

// For space complexity binary search solution is better.
// -------------Divide and conquer---------------
var kthSmallest = function(matrix, k) {
    while (matrix.length > 1) {
      const a = matrix.shift();
      const b = matrix.shift();
      
      matrix.push(merge(a, b));
    }
  
  return matrix[0][k - 1];
};

const merge = (arr1, arr2) => {
    const res = [];
    let l = 0;
    let r = 0;
    
    while (l < arr1.length && r < arr2.length) {
        const a = arr1[l];
        const b = arr2[r];
        
        if (a < b) {
            res.push(a);
            l++;
        } else {
            res.push(b);
            r++;
        }
    }
    
    if (l < arr1.length) res.push(...arr1.slice(l));
    if (r < arr2.length) res.push(...arr2.slice(r));
  
    return res;
}
