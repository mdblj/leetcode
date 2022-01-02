
/********************************************************************************** 
* 
* Given a string s consisting of only the characters 'a' and 'b', 
* return true if every 'a' appears before every 'b' in the string. 
* Otherwise, return false.
* 
**********************************************************************************/

var checkString = function(s) {
    let bAppears = false;
    
    for (const char of s) {
        if (bAppears && char === 'a') return false;
        if (char === 'b') bAppears = true;
    }
    
    return true;
};
