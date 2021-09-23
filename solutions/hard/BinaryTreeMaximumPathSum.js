/********************************************************************************** 
* 
* Given a binary tree, find the maximum path sum.
* 
* The path may start and end at any node in the tree.
* 
* For example:
* Given the below binary tree,
* 
*        1
*       / \
*      2   3
* 
* Return 6.
* 
**********************************************************************************/

var maxPathSum = function(root) {
    let max = Number.MIN_SAFE_INTEGER;
    
    const getSum = (node) => {
        if (!node) return 0;
        
        const leftSum = getSum(node.left) + node.val;
        const rightSum = getSum(node.right) + node.val;
        const allSum = leftSum + rightSum - node.val;
        
        max = Math.max(max, leftSum, rightSum, allSum, node.val);
        return Math.max(leftSum, rightSum, node.val);
    }
    
    getSum(root);
    
    return max;
};
