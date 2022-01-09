/********************************************************************************** 
* 
* A swap is defined as taking two distinct positions in an array and swapping the values in them.
*
* A circular array is defined as an array where 
* we consider the first element and the last element to be adjacent.
*
* Given a binary circular array nums, 
* return the minimum number of swaps required to group all 1's present 
* in the array together at any location.
* 
**********************************************************************************/

var minSwaps = function(nums) {
    const n = nums.length;
    let ones = 0;
    let fast = 0;
    let slow = 0;
    
    for (let i = 0; i < n; i++) {
        if (nums[i] === 1) ones++;
    }
    
    if (ones === 0) return 0;
    
    let curOnes = 0;
    let min = ones;
    
    while (fast < n + ones) {
        if (nums[fast % n] === 1) curOnes++;
        if (fast >= ones) {
            if (nums[slow++] === 1) curOnes--;
            min = Math.min(min, ones - curOnes);
        }
        fast++;
    }
    
    return min;
};
