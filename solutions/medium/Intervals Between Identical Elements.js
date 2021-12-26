/********************************************************************************** 
* 
* Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target? 
* Find all unique quadruplets in the array which gives the sum of target.
* 
* Note:
* 
* Elements in a quadruplet (a,b,c,d) must be in non-descending order. (ie, a ≤ b ≤ c ≤ d)
* The solution set must not contain duplicate quadruplets.
* 
*     For example, given array S = {1 0 -1 0 -2 2}, and target = 0.
* 
*     A solution set is:
*     (-1,  0, 0, 1)
*     (-2, -1, 1, 2)
*     (-2,  0, 0, 2)
* 
**********************************************************************************/

const getDistances = (arr) => {
    const res = [];
    const len = arr.length;
    const map = new Map();
    const left = new Array(len).fill(0); // prefix
    const right = new Array(len).fill(0); // suffix
    
    for (let i = 0; i < len; i++) {
        operate(i, arr[i], map, left);
    }
    
    map.clear();
    
    for (let i = len - 1; i >= 0; i--) {
        operate(i, arr[i], map, right);
    }
        
    for (let i = 0; i < len; i++) {
        res.push(left[i] + right[i]);
    }
     
    return res;
};

const operate = (i, num, map, arr) => {
    if (!map.has(num)) {
        arr[i] = 0;
        map.set(num, [1, i]); // [arr, previous index]
    } else {
        const indexes = map.get(num);
        
        arr[i] = indexes[0] * (Math.abs(i - indexes[1])) + arr[indexes[1]];
        map.set(num, [indexes[0] + 1, i]);
    }
};
