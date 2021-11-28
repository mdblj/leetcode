/********************************************************************************** 
* 
* Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target? 
* Find all unique quadruplets in the array which gives the sum of target.
* 
* Note:
* 
* Elements in a quadruplet (a,b,c,d) must be in non-descending order. (ie, a ≤ b ≤ c ≤ d)
* The solution set must not contain duplicate quadruplets.
* 
*     For example, given array S = {1 0 -1 0 -2 2}, and target = 0.
* 
*     A solution set is:
*     (-1,  0, 0, 1)
*     (-2, -1, 1, 2)
*     (-2,  0, 0, 2)
* 
**********************************************************************************/

var minimumDeletions = function(nums) {
    if (nums.length < 3) return nums.length;
    let minIndex = 0;
    let maxIndex = 0;
  
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[minIndex]) minIndex = i;
        if (nums[i] > nums[maxIndex]) maxIndex = i;
    }
    
    const [right, left] = maxIndex > minIndex ? [maxIndex, minIndex] : [minIndex, maxIndex];
    const cutOffRight = nums.length - left;
    const cutOffLeft = right + 1;
    const cutApart = nums.length - right + left + 1;
    
    return Math.min(cutOffRight, cutOffLeft, cutApart);
};
