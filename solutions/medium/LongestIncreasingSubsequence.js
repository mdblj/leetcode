/*************************************************************************************** 
 *
 * Given an unsorted array of integers, find the length of longest increasing
 * subsequence.
 *
 * For example,
 * Given [10, 9, 2, 5, 3, 7, 101, 18],
 * The longest increasing subsequence is [2, 3, 7, 101], therefore the length is 4.
 * Note that there may be more than one LIS combination, it is only necessary for yo
 * to return the length.
 * 
 * Your algorithm should run in O(n2) complexity.
 * 
 * Follow up: Could you improve it to O(n log n) time complexity?
 *               
 ***************************************************************************************
 
 var lengthOfLIS = function(nums) {
    if(nums.length < 2) return nums.length;
    
    const dp = new Array(nums.length).fill(Number.MAX_SAFE_INTEGER);
    
    for (let i = 0; i < nums.length; i++) {
        const pos = binarySearch(dp, nums[i], i)
        
        dp[pos] = nums[i];
    }
    
    for (let i = dp.length - 1; i >= 0; i--) {
        if(dp[i] !== Number.MAX_SAFE_INTEGER) return i + 1;
    }
};
    
const binarySearch = (dp, target, right) => {
    let left = 0;

    while(left <= right) {
        const mid = Math.floor((left + right) / 2);

        if(target === dp[mid]) return mid;
        if(target < dp[mid]) right = mid - 1;
        else left = mid + 1;
    }

    return left;
}
