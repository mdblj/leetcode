/********************************************************************************** 
* 
* You are given an integer array prices representing the daily price history of a stock, 
* where prices[i] is the stock price on the ith day.
*
* A smooth descent period of a stock consists of one or more contiguous days such
* that the price on each day is lower than the price on the preceding day by exactly 1. 
* The first day of the period is exempted from this rule.
*
* Return the number of smooth descent periods.
* 
**********************************************************************************/

var getDescentPeriods = function(prices) {
  let prev = 1;
  let result = 1;
  let cur;
    
  for (let i = 1; i < prices.length; i++) {
    if (prices[i - 1] - prices[i] === 1) {
      cur = 1 + prev;
    } else {
      cur = 1;
    }
      
    prev = cur;
    result += cur;
  }
    
  return result;
};
