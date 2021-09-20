/********************************************************************************** 
 * 
 * Given the root of a binary tree, invert the tree, and return its root.
 *      4
 *    /   \
 *   2     7
 *  / \   / \
 * 1   3 6   9
 * 
 * to
 *      4
 *    /   \
 *   7     2
 *  / \   / \
 * 9   6 3   1
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 *               
 **********************************************************************************/

var invertTree = function(root) {
    if (!root) return null;
    
    const pointer = root.left;
    root.left = root.right;
    root.right = pointer;
    
    invertTree(root.left);
    invertTree(root.right);
    
    return root;
};
