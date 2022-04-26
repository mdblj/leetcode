/********************************************************************************** 
* 
* Given two strings s and t, return true if they are equal when both are typed into empty text editors. 
* '#' means a backspace character.
*
* Note that after backspacing an empty text, the text will continue empty.
* 
**********************************************************************************/

// T.C = O(a + b), S.C = O(1);
var backspaceCompare = function(s, t) {
    let i = 0;
    let j = 0;
  
    while (i >= 0 || j >= 0) {
      if (s[i] === '#' || t[j] === '#') {
        if (s[i] === '#') {
          let count = 2;
          while (count > 0) {
            count--;
            i--;
            if (s[i] === '#') count += 2;
          }
        }
        if (t[j] === '#') {
          let count = 2;
          while (count > 0) {
            count--;
            j--;
            if (t[j] === '#') count += 2;
          }
        }
      } else {
        if (s[i] !== t[j]) return false;
        i--;
        j--;
      }
    }
  
    retrun true
};
