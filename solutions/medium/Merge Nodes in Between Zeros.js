/********************************************************************************** 
* 
* Reversing an integer means to reverse all its digits.
*
* For example, reversing 2021 gives 1202. Reversing 12300 gives 321 as the leading zeros are not retained.
* Given an integer num, reverse num to get reversed1, then reverse reversed1 to get reversed2. 
* Return true if reversed2 equals num. Otherwise return false.
* 
**********************************************************************************/

// T.C = O(n), S.C = O(n)
var mergeNodes = function(head) {
    let curNode = head;
    
    while (curNode) {
        if (curNode.val === 0) {
            let tail = curNode.next;
            
            while (tail && tail.val !== 0) {
                curNode.val += tail.val;
                tail = tail.next;
            }
            if (tail.val === 0 && tail.next === null) tail = null;
            curNode.next = tail;
            curNode = curNode.next;
        }
    }

    return head;
};
