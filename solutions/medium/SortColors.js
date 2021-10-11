/********************************************************************************** 
* 
* Given an array with n objects colored red, white or blue, sort them so that objects of 
* the same color are adjacent, with the colors in the order red, white and blue.
* 
* Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
* 
* Note:
* You are not suppose to use the library's sort function for this problem.
*               
**********************************************************************************/

var sortColors = function(nums) {
    if (!nums.length) return;
    
    let left = 0; 
    let right = nums.length - 1;
    
    for (let i = 0; i <= right; i++) {
        if (nums[i] === 0) {
            swap(nums, left, i);
            left++;
        } else if (nums[i] === 2) {
            swap(nums, i, right);
            right--;
            i--;
        }
    }
};

const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}
