/********************************************************************************** 
* 
* Given two sorted integer arrays A and B, merge B into A as one sorted array.
* 
* Note:
*   You may assume that A has enough space (size that is greater or equal to m + n) 
*   to hold additional elements from B. The number of elements initialized in A and B 
*   are m and n respectively.
*               
**********************************************************************************/

var merge = function (nums1, m, nums2, n) {
    let insertPos = m + n - 1;
    m--;
    n--;
    
    while (n >= 0) {
        nums1[insertPos--] = (m >= 0 && nums1[m] > nums2[n]) ? nums1[m--] : nums2[n--];
    }
};
