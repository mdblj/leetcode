/********************************************************************************** 
* 
* You are given a 0-indexed integer array nums and two integers key and k.
* A k-distant index is an index i of nums for which there exists 
* at least one index j such that |i - j| <= k and nums[j] == key.
*
* Return a list of all k-distant indices sorted in increasing order.
* 
**********************************************************************************/

// T.C = O(n * m), S.C = O(n)
var findKDistantIndices = function(nums, key, k) {
    const keys = [];
    const res = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === key) keys.push(i);
    } 

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < keys.length; j++) {
            if (Math.abs(i - keys[j]) <= k) {
                res.push(i);
                break;
            }
        }
    }
    
    return res;
};
