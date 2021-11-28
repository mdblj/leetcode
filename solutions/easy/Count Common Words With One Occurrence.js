/********************************************************************************** 
* 
* Given two string arrays words1 and words2, 
* return the number of strings that appear exactly once in each of the two arrays.
* 
**********************************************************************************/

var countWords = function(words1, words2) {
    const map1 = new Map();
    const map2 = new Map();
    let count = 0;
    
    for (const word of words1) {
        map1.set(word, map1.get(word) || 1);
    }
    for (const word of words1) {
        map2.set(word, map2.get(word) || 1);
    }
    for (const word of words1) {
        if (map1.get(word) === 1 && map2.get(word) === 1) {
            count++;
        }
    }
    
    return count;
};
