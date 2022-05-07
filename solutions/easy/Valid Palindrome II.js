/********************************************************************************** 
* 
* Given a string s, return true if the s can be palindrome after deleting at most one character from it.
* 
**********************************************************************************/
// T.C = O(n), S.C = O(1)
var validPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        if (s[left] !== s[right]) {
            return getIsValidPalindrome(s, left + 1, right) || getIsValidPalindrome(s, left, right - 1)
        }
        left++;
        right--;
    }
    
    return true;
};

const getIsValidPalindrome = (str, left, right) => {
    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }
    
    return true;
}
