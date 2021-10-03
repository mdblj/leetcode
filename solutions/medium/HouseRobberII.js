/********************************************************************************** 
 * 
 * Note: This is an extension of House Robber.
 * 
 * After robbing those houses on that street, the thief has found himself a new place 
 * for his thievery so that he will not get too much attention. This time, all houses 
 * at this place are arranged in a circle. That means the first house is the neighbor 
 * of the last one. Meanwhile, the security system for these houses remain the same as
 * for those in the previous street. 
 * 
 * Given a list of non-negative integers representing the amount of money of each house, 
 * determine the maximum amount of money you can rob tonight without alerting the police.
 *               
 **********************************************************************************/

var rob = function(nums) {
    if (nums.length < 3) return Math.max(...nums);
  
    const money1 = robMoney(0, nums.slice(0, nums.length - 1));
    const money2 = robMoney(1, nums.slice(1));
  
    return Math.max(money1, money2);
};

const robMoney = (start, nums) => {
  const dp = new Array(nums.length).fill(0);

  for (let i = 0; i < nums.length; i++) {
    dp[i] = Math.max(nums[i] + (dp[i - 2] ? dp[i - 2] : 0), (dp[i - 1] ? dp[i - 1] : 0));
  }
  
  return dp[nums.length - 1];
}
