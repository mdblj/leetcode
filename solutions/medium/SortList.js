/********************************************************************************** 
* 
* Given the head of a linked list, return the list after sorting it in ascending order.
* Sort a linked list in O(n log n) time using constant space complexity.
*               
**********************************************************************************/

var sortList = function(head) {
    if (!head || !head.next) return head;
   
    const [left, right] = split(head);
    const root = new ListNode(null);
    
    return merge(root, sortList(left), sortList(right))
};

const split = (node) => {
    let slow = node;
    let fast = node;

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    const left = node;
    const right = slow.next;
    slow.next = null;
    
    return [left, right];
}

const merge = (root, left, right) => {
    let pointer = root;
    
    while (left || right) {
        if (!left) {
            pointer.next = right;
            right = right.next;
        } else if (!right) {
            pointer.next = left;
            left = left.next;
        } else {
            if (left.val < right.val) {
                pointer.next = left;
                left = left.next;
            } else {
                pointer.next = right;
                right = right.next;
            }
        }
        
        pointer = pointer.next;
    }

    return root.next;
}
