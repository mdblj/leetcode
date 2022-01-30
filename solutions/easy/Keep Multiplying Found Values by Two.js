/********************************************************************************** 
* 
* You are given an array of integers nums. You are also given an integer original which is the first number that needs to be searched for in nums.
*
* You then do the following steps:
* - If original is found in nums, multiply it by two (i.e., set original = 2 * original).
* - Otherwise, stop the process.
* - Repeat this process with the new number as long as you keep finding the number.
*
* Return the final value of original.
* 
**********************************************************************************/

// T.C = O(n)
var findFinalValue = function(nums, original) {
    const set = new Set(nums);
    let val = original;
    
    while(set.has(val)) {
        val *= 2;
    }
    
    return val;
};

// T.C = O(n log n)
var findFinalValue = function(nums, original) {
    nums.sort((a, b) => a - b);
    let val = original;
    
    for (const num of nums) {
        if (num === val) {
            val *= 2;
        }
    }
    
    return val;
};
