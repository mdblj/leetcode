/********************************************************************************** 
 * 
 * Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.
 * 
 * Note: 
 * You may assume k is always valid, 1 ≤ k ≤ BST's total elements.
 * 
 * Follow up:
 * What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? 
 * How would you optimize the kthSmallest routine?
 * 
 *   Try to utilize the property of a BST.
 *   What if you could modify the BST node's structure?
 *   The optimal runtime complexity is O(height of BST).
 * 
 * Credits:Special thanks to @ts for adding this problem and creating all test cases.
 **********************************************************************************/

var kthSmallest = function(root, k) {
    const arr = [];
    const inorderTraverse = (node) => {
        if (arr.length === k) return;
        if (node.left) inorderTraverse(node.left);
        arr.push(node.val);
        if (node.right) inorderTraverse(node.right);
    }
    
    inorderTraverse(root);
    
    return arr[k - 1];
};
