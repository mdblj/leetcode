/********************************************************************************** 
* 
* You are given an integer array nums and an integer k. 
* You want to find a subsequence of nums of length k that has the largest sum.
*
* Return any such subsequence as an integer array of length k.
*
* A subsequence is an array that can be derived from another array 
* by deleting some or no elements without changing the order of the remaining elements.
* 
**********************************************************************************/

// my solution 
var maxSubsequence = function(nums, k) {
    const hash = {};
    const res = [];
    const arr = nums.slice().sort((a, b) => b - a);
    
    for (let i = 0; i < k; i++) {
        hash[arr[i]] = hash[arr[i]] + 1 || 1;
    }
    
    for (const num of nums) {
        if (res.length >= k) break;
        if (hash[num]) {
            res.push(num);
            hash[num]--;
        }
    }
    
    return res;
};

// found better solution
var maxSubsequence = function(nums, k) {
    const arr = new Array(nums.length);
    
    for (let i = 0; i < nums.length; ++i) {
        arr[i] = [i, nums[i]];
    }
      
    arr.sort((a, b) => b[1] - a[1]);
    arr.splice(k);
    arr.sort((a, b) => a[0] - b[0]);
    
    return arr.map(o => o[1]);
};
