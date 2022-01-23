/********************************************************************************** 
* 
* You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.
* 
* You should rearrange the elements of nums such that the modified array follows the given conditions:
*
*  1. Every consecutive pair of integers have opposite signs.
*  2. For all integers with the same sign, the order in which they were present in nums is preserved.
*  3. The rearranged array begins with a positive integer.
*
* Return the modified array after rearranging the elements to satisfy the aforementioned conditions.
* 
**********************************************************************************/

var rearrangeArray = function(nums) {
    const positives = [];
    const negatives = [];
    const res = [];
    
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] > 0) positives.push(nums[i]);
        else negatives.push(nums[i]);
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) res.push(positives.pop());
        else res.push(negatives.pop());
    }
    
    return res;
};
