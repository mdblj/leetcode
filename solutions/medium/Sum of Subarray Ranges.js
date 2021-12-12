/********************************************************************************** 
* 
* You are given an integer array nums. 
* The range of a subarray of nums is the difference between the largest and smallest element in the subarray.
*
* Return the sum of all subarray ranges of nums.
*
* A subarray is a contiguous non-empty sequence of elements within an array.
* 
**********************************************************************************/

var subArrayRanges = function(nums) {
    let start = 0;
    let sum = 0;

    while (start < nums.length) {
        let end = start;
        let min = Number.MAX_SAFE_INTEGER;
        let max = Number.MIN_SAFE_INTEGER;
        
        while (end < nums.length) {
            max = Math.max(max, nums[start], nums[end]);
            min = Math.min(min, nums[start], nums[end]);
            sum += max - min;
            end++;
        }
        start++;
    }
    
    return sum;
};
