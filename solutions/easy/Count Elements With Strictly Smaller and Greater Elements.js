/********************************************************************************** 
* 
* Given an integer array nums, return the number of elements
* that have both a strictly smaller and a strictly greater element appear in nums.
* 
**********************************************************************************/

var countElements = function(nums) {
    if (nums.length < 3) return 0;
    
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    let count = 0;
    
    for (const num of nums) {
        if (num !== min && num !== max) {
            count++;
        }
    }
    
    return count;
};
