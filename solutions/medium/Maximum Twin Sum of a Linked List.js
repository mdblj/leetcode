/********************************************************************************** 
* 
* In a linked list of size n, where n is even,
* the ith node (0-indexed) of the linked list 
* is known as the twin of the (n-1-i)th node, if 0 <= i <= (n / 2) - 1.
*
* For example, if n = 4, then node 0 is the twin of node 3, 
* and node 1 is the twin of node 2.
* These are the only nodes with twins for n = 4.
* The twin sum is defined as the sum of a node and its twin.
*
* Given the head of a linked list with even length, 
* return the maximum twin sum of the linked list.
* 
**********************************************************************************/

var pairSum = function(head) {
    const arr = [];
    let max = 0;
    
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    
    for (let i = 0; i < arr.length / 2; i++) {
        const sum = arr[i] + arr[arr.length - 1 - i]
        max = Math.max(max, sum);
    }
    
    return max;
};
