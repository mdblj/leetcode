/*************************************************************************************** 
 *
 * Given an integer array with all positive numbers and no duplicates, find the number
 * of possible combinations that add up to a positive integer target.
 * 
 * Example:
 * 
 * nums = [1, 2, 3]
 * target = 4
 * 
 * The possible combination ways are:
 * (1, 1, 1, 1)
 * (1, 1, 2)
 * (1, 2, 1)
 * (1, 3)
 * (2, 1, 1)
 * (2, 2)
 * (3, 1)
 * 
 * Note that different sequences are counted as different combinations.
 * 
 * Therefore the output is 7.
 * Follow up:
 * What if negative numbers are allowed in the given array?
 * How does it change the problem?
 * What limitation we need to add to the question to allow negative numbers?
 * 
 ***************************************************************************************/ˆ 

// -------------Memoization----------------------------
var combinationSum4 = function(nums, target) {
    const memo = new Map();
        
    const topDown = (target) => {
        if (target === 0) return 1;
        if (memo.has(target)) return memo.get(target);
         
        let count = 0;
        
        for (const num of nums) {
            if (target - num >= 0) count += topDown(target - num);
        }

        memo.set(target, count);
        return count;
    }
    
    return topDown(target);
};

// ----------------DP--------------------------
const combinationSum4 = (nums, target) => {
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;
  
  for (let i = 1; i < dp.length; i++) {
    for (const num of nums) {
      if (i >= num) dp[i] = dp[i] + dp[i - num];
    }
  }
  
  return dp[target];
};
