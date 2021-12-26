
/********************************************************************************** 
* 
* Reversing an integer means to reverse all its digits.
*
* For example, reversing 2021 gives 1202. Reversing 12300 gives 321 as the leading zeros are not retained.
* Given an integer num, reverse num to get reversed1, then reverse reversed1 to get reversed2. 
* Return true if reversed2 equals num. Otherwise return false.
* 
**********************************************************************************/

var isSameAfterReversals = function(num) {
    if (num === 0) return true;
    if (num.toString().startsWith('0') || num.toString().endsWith('0')) return false;
    
    return true;
};
