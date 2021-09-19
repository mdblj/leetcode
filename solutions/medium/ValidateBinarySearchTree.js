/********************************************************************************** 
* 
* Given a binary tree, determine if it is a valid binary search tree (BST).
* 
* Assume a BST is defined as follows:
* 
* The left subtree of a node contains only nodes with keys less than the node's key.
* The right subtree of a node contains only nodes with keys greater than the node's key.
* Both the left and right subtrees must also be binary search trees.
*
* Example:
* 
*    1
*   / \
*  2   3
*     /
*    4
*     \
*      5
* 
* Answer: false
*               
**********************************************************************************/

var isValidBST = function(root, min = null, max = null) {
    if (!root) return true;
    if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) return false;
    
    return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max); 
};
