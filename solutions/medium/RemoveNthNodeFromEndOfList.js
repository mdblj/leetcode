/********************************************************************************** 
* 
* Given a linked list, remove the nth node from the end of list and return its head.
* 
* For example,
* 
*    Given linked list: 1->2->3->4->5, and n = 2.
* 
*    After removing the second node from the end, the linked list becomes 1->2->3->5.
* 
* Note:
* Given n will always be valid.
* Try to do this in one pass.
* 
*               
**********************************************************************************/

var removeNthFromEnd = function(head, n) {
    let prev = null;
    let cur = head;
    let ahead = head;
    
    for (let i = 0; i < n; i++) {
        ahead = ahead.next;
    }
    
    while (ahead) {
        prev = cur;
        cur = cur.next;
        ahead = ahead.next;
    }
    
    if (!prev) return cur.next;
    prev.next = cur.next;
    
    return head;
};
