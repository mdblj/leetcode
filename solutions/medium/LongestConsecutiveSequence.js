/********************************************************************************** 
* 
* Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
* 
* For example,
* Given [100, 4, 200, 1, 3, 2],
* The longest consecutive elements sequence is [1, 2, 3, 4]. Return its length: 4.
* 
* Your algorithm should run in O(n) complexity.
* 
*               
**********************************************************************************/
// --------------------hash Set---------------------------
function longestConsecutive(nums) {
  if (!nums.length) return 0;
  
  const set = new Set(nums);
  let max = 0;

  for (let num of set) {
    if (set.has(num - 1)) continue;

    let curNum = num;
    let curMax = 1;

    while (set.has(curNum + 1)) {
      curNum++;
      curMax++;
    }
      
    max = Math.max(max, curMax);
  }

  return max;
}

// -------------------hash boundary-------------------------
var longestConsecutive = function(nums) {
    if (!nums.length) return 0;
  
    const hash = {};
    let max = 0;
    
    for (const num of nums) {
        if (hash[num] !== undefined) continue;
        
        const left = hash[num - 1] || 0;
        const right = hash[num + 1] || 0;
        const len = left + right + 1;
        
        hash[num - left] = len;
        hash[num] = len;
        hash[num + right] = len;
        
        max = Math.max(max, len);
    }
    
    return max;
};
