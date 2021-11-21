/********************************************************************************** 
 * 
 * There are n houses evenly lined up on the street, and each house is beautifully painted. 
 * You are given a 0-indexed integer array colors of length n, where colors[i] represents the color of the ith house.
 *
 * Return the maximum distance between two houses with different colors.
 * The distance between the ith and jth houses is abs(i - j), where abs(x) is the absolute value of x.
 *
**********************************************************************************/

var maxDistance = function(colors) {
    let left = 0;
    let right = colors.length - 1;
    let max1 = 0;
    let max2 = 0;
    
    while (left < right) {
        if (colors[left] !== colors[right]) {
            max1 = right;
            break;
        };
        right--;
    }
    
    right = colors.length - 1;
    
    while (left < right) {
        if (colors[left] !== colors[right]) {
            max2 = right - left;
            break;
        };
        
        left++;
    }
    
    return Math.max(max1, max2);
};
