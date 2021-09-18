/***************************************************************************************************** 
 *
 * 
 * Given a string, your task is to count how many palindromic substrings in this string.
 * 
 * The substrings with different start indexes or end indexes are counted as different substrings even 
 * they consist of same characters. 
 * 
 * Example 1:
 * 
 * Input: "abc"
 * Output: 3
 * Explanation: Three palindromic strings: "a", "b", "c".
 * 
 * Example 2:
 * 
 * Input: "aaa"
 * Output: 6
 * Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 * 
 * Note:
 * 
 * The input string length won't exceed 1000.
 * 
 ******************************************************************************************************/

// DP
function countSubstrings(s) {
    let count = 0;
    const dp = [...Array(s.length)].map((e) => Array(s.length).fill(0));

    for (let l = 0; l < s.length; l++) {
        for (let i = 0; i + l < s.length; i++) {
            const j = i + l;
            
            if (l === 0) {
                dp[i][j] = 1;
                count++;
            }
            else if (l === 1) {
                if (s[i] === s[j]) {
                    dp[i][j] = 1;
                    count++;
                }
            }
            else {
                if (s[i] === s[j] &&
                    dp[i + 1][j - 1] === 1) {
                    dp[i][j] = 1;
                    count++;
                }
            }
        }
    }
    
    return count;
}

// Bubbling
var countSubstrings = function(s) {
    let counter = 0;
    
    const bubbleFromCenter = (left, right) => {
        if (left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
            bubbleFromCenter(left - 1, right + 1);
            counter++;
        }
    }
    
    for (let i = 0; i < s.length; i++) {
        bubbleFromCenter(i, i);
        bubbleFromCenter(i, i + 1);
    }
    
    return counter;
};
