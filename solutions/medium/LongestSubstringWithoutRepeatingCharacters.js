/********************************************************************************** 
* 
* Given a string, find the length of the longest substring without repeating characters. 
* For example, the longest substring without repeating letters for "abcabcbb" is "abc", 
* which the length is 3. For "bbbbb" the longest substring is "b", with the length of 1.
*               
**********************************************************************************/

// Simple loop using substring.
var lengthOfLongestSubstring = function(s) {
    let str = ''
    let max = 0;
    let posIndex;
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        posIndex = str.indexOf(char);
        
        if (posIndex > -1) {
            str = str.substring(posIndex + 1);            
        }
        str += char;
        max = Math.max(max, str.length);
    }
    
    return max;
};

// Sliding window
var lengthOfLongestSubstring = function(s) {
    const set = new Set();
    let left = 0;
    let right = 0;
    let max = 0;
    
    while (right < s.length) {
        const char = s[right];
        
        while (set.has(char)) {
            set.delete(s[left])
            left++;
        }
        
        set.add(char);
        max = Math.max(max, right - left + 1);
        right++;
    }
    
    return max;
};
