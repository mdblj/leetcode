/********************************************************************************** 
* 
* You are given two strings s and t. In one step, you can append any character to either s or t.
*
* Return the minimum number of steps to make s and t anagrams of each other.
*
* An anagram of a string is a string that contains the same characters with a different (or the same) ordering.
* 
**********************************************************************************/
// T.C:O(a + b) , S.C: O(a + b)
var minSteps = function(s, t) {
    const hashS = {};
    const hashT = {};
    
    for (let i = 0; i < s.length; i++) {
        hashS[s[i]] = hashS[s[i]] + 1 || 1;
    }
    for (let i = 0; i < t.length; i++) {
        if (hashS[t[i]]) hashS[t[i]] -= 1;
    }
    
    for (let i = 0; i < t.length; i++) {
        hashT[t[i]] = hashT[t[i]] + 1 || 1;
    }
    for (let i = 0; i < s.length; i++) {
        if (hashT[s[i]]) hashT[s[i]] -= 1;
    }

    const arr1 = Object.values(hashS);
    const arr2 = Object.values(hashT);
    
    return arr1.reduce((acc, val) => acc + val) + arr2.reduce((acc, val) => acc + val)
};
