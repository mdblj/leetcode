/********************************************************************************** 
*  
* Given n non-negative integers representing an elevation map where the width of each bar is 1,
* compute how much water it can trap after raining.
* 
**********************************************************************************/

// T.C = O(n), S.C = O(1)
var trap = function(height) {
    let totalWater = 0;
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    
    while (left < right) {
        if (height[left] <= height[right]) {
            if (height[left] < leftMax) {
                const currentWater = leftMax - height[left];
                totalWater += currentWater;
            } else {
                leftMax = height[left];
            }
            left++;
        } else {
            if (height[right] < rightMax) {
                const currentWater = rightMax - height[right];
                totalWater += currentWater;
            } else {
                rightMax = height[right];
            }
            right--;
        }
    }
    
    return totalWater;
};
