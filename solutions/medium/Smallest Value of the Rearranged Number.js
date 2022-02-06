/********************************************************************************** 
* 
* You are given an integer num. Rearrange the digits of num such that
* its value is minimized and it does not contain any leading zeros.
*
* Return the rearranged number with minimal value.
*
* Note that the sign of the number does not change after rearranging the digits.
* 
**********************************************************************************/

var smallestNumber = function(num) {
    const digits = num.toString().split('');
    
    if (num > 0) digits.sort((a, b) => a - b);
    else digits.sort((a, b) => b - a);

    for (let i = 0; i < digits.length; i++) {
       if (digits[i] !== '0') {
            [digits[0], digits[i]] = [digits[i], digits[0]];
            break;
       }
    }
    
    return digits.join("");
};
