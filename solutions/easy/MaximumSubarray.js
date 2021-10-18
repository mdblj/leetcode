/********************************************************************************** 
* 
* Find the contiguous subarray within an array (containing at least one number) 
* which has the largest sum.
* 
* For example, given the array [−2,1,−3,4,−1,2,1,−5,4],
* the contiguous subarray [4,−1,2,1] has the largest sum = 6.
* 
* More practice:
* 
* If you have figured out the O(n) solution, try coding another solution using 
* the divide and conquer approach, which is more subtle.
* 
**********************************************************************************/

var maxSubArray = function(nums) {
    let max = nums[0];
    let sum = Math.max(max, 0);
    
    for (let i = 1; i < nums.length; i++) {
        sum += nums[i];
        
        max = Math.max(max, sum);
        sum = Math.max(sum, 0);
    }
    
    return max;
};
