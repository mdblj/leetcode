/********************************************************************************** 
* 
* You are given an integer finalSum.
* Split it into a sum of a maximum number of unique positive even integers.
* - For example, given finalSum = 12, the following splits are valid 
*   (unique positive even integers summing up to finalSum): (2 + 10),
*   (2 + 4 + 6), and (4 + 8). Among them, (2 + 4 + 6) contains the maximum number of integers. 
*   Note that finalSum cannot be split into (2 + 2 + 4 + 4) as all the numbers should be unique.
*
* Return a list of integers that represent a valid split containing a maximum number of integers.
* If no valid split exists for finalSum, return an empty list. You may return the integers in any order.
* 
**********************************************************************************/

var maximumEvenSplit = function(finalSum) {
    if (finalSum % 2 === 1) return [];
    
    let cur = 0;
    let res = new Set();

    while (cur < finalSum) {
        cur += 2;
        finalSum -= cur;
        
        if (finalSum === cur) {
            cur = finalSum * 2;
        }
        if (res.has(finalSum)) {
            finalSum += cur;
            res.add(finalSum);
            return [...res];
        }
        
        res.add(cur);
    }
    
    return [...res];
};
