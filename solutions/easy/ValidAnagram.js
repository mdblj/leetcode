/********************************************************************************** 
 * 
 * Given two strings s and t, write a function to determine if t is an anagram of s. 
 * 
 * For example,
 * s = "anagram", t = "nagaram", return true.
 * s = "rat", t = "car", return false.
 * 
 * Note:
 * You may assume the string contains only lowercase alphabets.
 *               
 **********************************************************************************/

var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    const hash = {};
    
    for (const char of s) {
        hash[char] = hash[char] + 1 || 1;
    }
    
    for (const char of t) {
        if (!hash[char]) return false;
        hash[char]--;
    }
  
    return true;
};
