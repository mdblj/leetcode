
   
/********************************************************************************** 
* 
* You are given the head of a linked list. 
* Delete the middle node, and return the head of the modified linked list.
*
* The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing,
* where ⌊x⌋ denotes the largest integer less than or equal to x.
*
* For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.
* 
**********************************************************************************/

var deleteMiddle = function(head) {
    if (!head || !head.next) return null;
    
    let tortoise = head;
    let hare = head;
    let lastPointer;
    let len = 0;
    
    while (hare.next) {
        if (len % 2 === 0) {
            lastPointer = tortoise;
            tortoise = tortoise.next;
        }
        hare = hare.next;
        len++;
    }
    
    lastPointer.next = tortoise.next;
    return head;
}; 
