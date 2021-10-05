/********************************************************************************** 
* 
* Given a string s and a dictionary of words dict, determine if s can be segmented 
* into a space-separated sequence of one or more dictionary words.
* 
* For example, given
* s = "leetcode",
* dict = ["leet", "code"].
* 
* Return true because "leetcode" can be segmented as "leet code".
*               
**********************************************************************************/

// ---------------- DP --------------------------
const wordBreak = (s, wordDict) => {
  if (!wordDict || !wordDict.length) return false;

  const set = new Set(wordDict);
  const dp = Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let end = 1; end <= s.length; end++) {
    for (let start = 0; start < end; start++) {
      const word = s.slice(start, end);
        
      if (dp[start] && set.has(word)) {
        dp[end] = true;
        break;
      }
    }
  }
    
  return dp[s.length];
};

// ----------------- BFS -------------------------
const wordBreak = (s, wordDict) => {
  if (!wordDict || !wordDict.length) return false;
  const set = new Set(wordDict);
  const memo = new Set();
  const q = [0];

  while (q.length) {
    const start = q.shift();

    if (!memo.has(start)) {
      for (let end = start + 1; end <= s.length; end++) {
        if (set.has(s.slice(start, end))) {
          if (end === s.length) return true;
          q.push(end);
        }
      }
        
      memo.add(start);
    }
  }
    
  return false;
};
