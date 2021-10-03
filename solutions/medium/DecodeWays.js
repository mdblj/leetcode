/********************************************************************************** 
* 
* A message containing letters from A-Z is being encoded to numbers using the following mapping:
* 
* 'A' -> 1
* 'B' -> 2
* ...
* 'Z' -> 26
* 
* Given an encoded message containing digits, determine the total number of ways to decode it.
* 
* For example,
* Given encoded message "12",
* it could be decoded as "AB" (1 2) or "L" (12).
* 
* The number of ways decoding "12" is 2.
* 
**********************************************************************************/

function numDecodings(s) {
  if (!s.length === 0 || s[0] === '0') return 0;

  const dp = new Array(s.length + 1).fill(0);

  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i < dp.length; i++) {
    const a = +s.slice(i - 1, i);
      
    if (a > 0 && a < 10) dp[i] += dp[i - 1];

    const b = +s.slice(i - 2, i);
      
    if (b >= 10 && b <= 26) dp[i] += dp[i - 2];
  }

  return dp[s.length];
}
