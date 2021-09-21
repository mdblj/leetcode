/********************************************************************************** 
* 
* Given preorder and inorder traversal of a tree, construct the binary tree.
* 
* Note:
* You may assume that duplicates do not exist in the tree.
* 
**********************************************************************************/

var buildTree = function(preorder, inorder) {
    if (!inorder.length) return null;
    
    const node = new TreeNode(preorder.shift());
    const mid = inorder.indexOf(node.val);
    
    node.left = buildTree(preorder, inorder.slice(0, mid));
    node.right = buildTree(preorder, inorder.slice(mid + 1));
    
    return node;
};
