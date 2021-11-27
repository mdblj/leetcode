/********************************************************************************** 
* 
* Given two string arrays words1 and words2, 
* return the number of strings that appear exactly once in each of the two arrays.
* 
**********************************************************************************/

var countWords = function(words1, words2) {
    const hash1 = {};
    const hash2 = {};
    const set = new Set();
    let count = 0;
    
    for (const word of words1) {
        hash1[word] = hash1[word] + 1 || 1;
    }
    for (const word of words2) {
        hash2[word] = hash2[word] + 1 || 1;
    }
    
    for (const [key, val] of Object.entries(hash1)) {
        if (val === 1) set.add(key);
    }
  
    for (const [key, val] of Object.entries(hash2)) {
        if (val === 1 && set.has(key)) count++;
    }
    
    return count;
};
