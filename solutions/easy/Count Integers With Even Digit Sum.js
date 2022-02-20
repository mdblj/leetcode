/********************************************************************************** 
* 
* Given a positive integer num, 
* return the number of positive integers less than or equal to num whose digit sums are even.
*
* The digit sum of a positive integer is the sum of all its digits.
* 
**********************************************************************************/

// T.C = O(n^2), S.C = O(1)
var countEven = function(num) {
    const getDigitSum = (num) => {
        const str = num.toString();
        let sum = 0;
        
        for (const char of str) {
            sum += +char;
        }
        return sum;
    }
    
    let count = 0;
    
    for (let i = 1; i <= num; i++) {
        if (getDigitSum(i) % 2 === 0) count++;
    }
    
    return count;
};
