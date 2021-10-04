/********************************************************************************** 
* 
* Given an array of non-negative integers, you are initially positioned at the first index of the array.
* 
* Each element in the array represents your maximum jump length at that position. 
* 
* Determine if you are able to reach the last index.
* 
* For example:
* A = [2,3,1,1,4], return true.
* 
* A = [3,2,1,0,4], return false.
* 
**********************************************************************************/

var canJump = function(nums) {
    let max = nums[0];
    
    for (let i = 0; i < nums.length; i++) {
        if (max < i) return false;
        max = Math.max(i + nums[i], max);
    }
    
    return true;
};
