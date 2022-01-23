/********************************************************************************** 
* 
* You are given an integer array nums. A number x is lonely when it appears only once,
* and no adjacent numbers (i.e. x + 1 and x - 1) appear in the array.
*
* Return all lonely numbers in nums. You may return the answer in any order.
* 
**********************************************************************************/

var findLonely = function(nums) {
    const hash = {};
    const res = [];
    
    for (const num of nums) {
        hash[num] = hash[num] + 1 || 1;
    }
    
    for (const num of nums) {
        const isLonelyNum = !hash[num + 1] && !hash[num - 1] && hash[num] < 2;
        if (isLonelyNum) {
            res.push(num);
        }
    }
    
    return res;
};
