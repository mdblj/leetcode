/********************************************************************************** 
* 
* Given an integer num, return three consecutive integers (as a sorted array) that sum to num.
* If num cannot be expressed as the sum of three consecutive integers, return an empty array.
* 
**********************************************************************************/

// T.C = O(1), S.C = O(1)
var sumOfThree = function(num) {
    if (num % 3 === 0) {
        const mid = num / 3;
        return [mid - 1, mid, mid + 1];
    }
    return [];
};
