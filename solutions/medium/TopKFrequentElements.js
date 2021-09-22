/*************************************************************************************** 
 *
 * Given a non-empty array of integers, return the k most frequent elements.
 * 
 * For example,
 * Given [1,1,1,2,2,3] and k = 2, return [1,2].
 * 
 * Note: 
 * You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
 * Your algorithm's time complexity must be better than O(n log n), where n is the 
 * array's size.
 * 
 ***************************************************************************************/

var topKFrequent = function(nums, k) {
    const map = new Map();
    const arr = [];
    const result = [];
    
    for (const num of nums) {
        map.set(num, map.get(num) + 1 || 1);
    }
    
    for (const [num, count] of map) {
        arr[count] = (arr[count] || new Set()).add(num);
    }
    
    for (let i = arr.length - 1; i > 0; i--) {
        if (arr[i]) result.push(...arr[i]);
        if (result.length === k) break;
    }
  
    return result;
};
