/********************************************************************************** 
* 
* A parentheses string is a non-empty string consisting only of '(' and ')'.
* It is valid if any of the following conditions is true:

* It is ().
* It can be written as AB (A concatenated with B), where A and B are valid parentheses strings.
* It can be written as (A), where A is a valid parentheses string.
* You are given a parentheses string s and a string locked, both of length n.
* locked is a binary string consisting only of '0's and '1's. For each index i of locked,

* If locked[i] is '1', you cannot change s[i].
* But if locked[i] is '0', you can change s[i] to either '(' or ')'.
* Return true if you can make s a valid parentheses string. Otherwise, return false.
* 
**********************************************************************************/

var canBeValid = function(s, locked) {
    const len = s.length;
    if (len % 2 === 1) return false;
    
    const arr = new Array(len);
    let lockedOpen = 0;
    let lockedClose = 0;
    let notClose = 0;    
        
    for (let i = 0; i < len; i++){
        if (locked.charAt(i) === '1') {
            if (s.charAt(i) === '(') lockedOpen++;
            else lockedClose++;
            arr[i] = s.charAt(i);
        }
    }
    
    let remainOpen = len / 2 - lockedOpen;
    const remainClose = len / 2 - lockedClose;

    if (remainOpen < 0 || remainClose < 0) return false;
    
    for (let i = 0; i < len; i++) {
        if (locked.charAt(i) === '0') {
            if (remainOpen > 0) {
                arr[i] = '(';
                remainOpen--;
            } else {
                arr[i] = ')';
            }
        }

        if (arr[i] === '(') notClose++;
        else notClose--;

        if (notClose < 0) return false;
    }
    
    return true;
};
