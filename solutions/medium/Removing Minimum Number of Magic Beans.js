/********************************************************************************** 
* 
* You are given an array of positive integers beans, 
* where each integer represents the number of magic beans found in a particular magic bag.
*
* Remove any number of beans (possibly none) from each bag such that the number of beans 
* in each remaining non-empty bag (still containing at least one bean) is equal. 
* Once a bean has been removed from a bag,
* you are not allowed to return it to any of the bags.
* 
* Return the minimum number of magic beans that you have to remove.
* 
**********************************************************************************/
// T.C = O(nlogn), S.C = O(n)
var minimumRemoval = function(beans) {
    let max = 0;
    let sum = 0;
    beans.sort((a, b) => a - b);
    
    for (let i = 0; i < beans.length; i++) {
        sum += beans[i];
        max = Math.max(max, beans[i] * (beans.length - i));
    }
    
    return sum - max;
};
