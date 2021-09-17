/********************************************************************************** 
* 
* Given a string S and a string T, find the minimum window in S which will 
* contain all the characters in T in complexity O(n).
* 
* For example,
* S = "ADOBECODEBANC"
* T = "ABC"
* 
* Minimum window is "BANC".
* 
* Note:
*
* > If there is no such window in S that covers all characters in T, 
*   return the emtpy string "".
* 
* > If there are multiple such windows, you are guaranteed that there 
*   will always be only one unique minimum window in S.
* 
*               
**********************************************************************************/

var minWindow = function(s, t) {
    const hash = {};
    let left = 0;
    let right = 0;
    let str = '';
    
    for (const char of t) {
        hash[char] = hash[char] + 1 || 1;
    }
    
    let counter = Object.keys(hash).length;
    
    while (right <= s.length) {
        if (counter === 0) {
            const char = s[left];
            if(hash[char] !== undefined) {
                const temp = s.substring(left, right);
                if (str === '') str = temp;
                str = str.length > temp.length ? temp : str;
                if (hash[char] === 0) counter++;
                hash[char]++;
            }
            left++;
        } else {
            const char = s[right];
            if (hash[char] !== undefined) hash[char]--;
            if (hash[char] === 0) counter--;
            right++;
        }
    }
    
    return str;
};
