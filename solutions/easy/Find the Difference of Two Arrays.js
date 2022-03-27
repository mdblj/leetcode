/********************************************************************************** 
* 
* Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:
*   - answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
*   - answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
* Note that the integers in the lists may be returned in any order.
* 
**********************************************************************************/

// T.C: O(a + b), S.C: O(a + b)
var findDifference = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const numsArr1 = [];
    const numsArr2 = [];
    
    for (const num of nums1) {
        if (!set2.has(num)) numsArr1.push(num);
    }
    for (const num of nums2) {
        if (!set1.has(num)) numsArr2.push(num);
    }
  
    return [[...new Set(numsArr1)], [...new Set(numsArr2)]];
};
