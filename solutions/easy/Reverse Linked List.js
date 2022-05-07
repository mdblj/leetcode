/********************************************************************************** 
* 
* Given the head of a singly linked list, reverse the list, and return the reversed list.
* 
**********************************************************************************/

// T.C = O(n), S.C = O(1)
var reverseList = function(head) {
    if (!head) return null;
    
    let node = head;
    let prev = null;
    
    while (node) {
        const pointer = node.next;
        node.next = prev;
        prev = node;
        node = pointer;
    }
    
    return prev;
};
