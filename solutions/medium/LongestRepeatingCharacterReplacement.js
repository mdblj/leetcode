/********************************************************************************** 
* 
* Given a string `s` and a number `k`, Return the length of the longest substring containing the same letter
* Able to choose any character of the string and change it to any other uppercase English character at most `k` times.
* 
* Example 1,
* s = "AABABBA"
* k = 1
* Answer: 4
* 
* Example 2,
* s = "AABABBAB"
* k = 2
* Answer: 6
*               
**********************************************************************************/

var characterReplacement = function(s, k) {
    const hash = {};
    let left = 0;
    let right = 0;
    let max = 0;
    
    while (right < s.length) {
        const char = s[right];
        hash[char] = hash[char] + 1 || 1;
        max = Math.max(max, hash[char]);
        
        if (right - left + 1 - max > k) {
            hash[s[left]]--;
            left++;
        }
        right++;
    }
    
    return right - left;
};
