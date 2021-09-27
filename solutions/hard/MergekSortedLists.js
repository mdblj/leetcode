/********************************************************************************** 
* You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. 
* Merge all the linked-lists into one sorted linked-list and return it.
*               
* Example 1:
* Input: lists = [[1,4,5],[1,3,4],[2,6]]
* Output: [1,1,2,3,4,4,5,6]
* Explanation: The linked-lists are:
* [
*   1->4->5,
*   1->3->4,
*   2->6
* ]
* merging them into one sorted list:
* 1->1->2->3->4->4->5->6
**********************************************************************************/

// Priority queue.
function mergeLists(n1, n2) {
    const head = new ListNode(0);
    let node = head;
    while (n1 && n2) {
         if (n1.val < n2.val) {
             node.next = n1;
             n1 = n1.next;
         } else {
             node.next = n2;
             n2 = n2.next;
         }
         node = node.next;
    }
    
    if (n1) node.next = n1;
    if (n2) node.next = n2;
    
    return head.next;
}

var mergeKLists = function(lists) {
    if (!lists.length) return null;

    while (lists.length > 1) {
        const a = lists.shift();
        const b = lists.shift();
        const h = mergeLists(a, b);
        lists.push(h);
    }
    
    return lists[0];
};



//------------------------------ Greedy --------------------------------------------
var mergeKLists = function(lists) {
    const arr = [];
    
    for (let node of lists) {
        while (node) {
            arr.push(node.val);
            node = node.next;
        }
    }
    
    arr.sort((a, b) => a - b);
    
    const head = new ListNode(Number.MIN_SAFE_INTEGER);
    let node = head;
    
    for (let num of arr) {
        node.next = new ListNode(num);
        node = node.next;
    }
    
    return head.next;
};
