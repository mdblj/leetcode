
   
/********************************************************************************** 
* 
* You are given an array of strings words. 
* Each element of words consists of two lowercase English letters.
*
* Create the longest possible palindrome by selecting some elements from words and 
* concatenating them in any order. Each element can be selected at most once.
*
* Return the length of the longest palindrome that you can create.
* If it is impossible to create any palindrome, return 0.
*
* A palindrome is a string that reads the same forward and backward.
* 
**********************************************************************************/

var longestPalindrome = function (words) {
  const map = {};
  let count = 0;
  let flag = false;
    
  for (const word of words) {
    if (!map[word]) {
        map[word] = 1;
        continue;
    }
    map[word] += 1;
  }
  
  for (const word of words) {
    const reverse = word[1] + word[0];
      
    if (word === reverse) {
      while (map[word] >= 2) {
        map[word] -= 2;
        count += 4;
      }
      if (map[word] === 1 && !flag) {
        flag = true;
        count += 2;
        map[word] -= 1;
      } 
      continue;
    }
      
    while (map[word] > 0 && map[reverse] > 0) {
      map[word] -= 1;
      map[reverse] -= 1;
      count += 4;
    }
  }

  return count;
};
