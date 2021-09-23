/********************************************************************************** 
* 
* Given a binary tree, return the level order traversal of its nodes' values. 
* (ie, from left to right, level by level).
* 
* For example:
* Given binary tree [3,9,20,null,null,15,7],
* 
*     3
*    / \
*   9  20
*     /  \
*    15   7
* 
* return its level order traversal as:
* 
* [
*   [3],
*   [9,20],
*   [15,7]
* ]
*               
**********************************************************************************/

var levelOrder = function(root) {
    if (!root) return [];
    
    const queue = [root];
    const result = [];
    
    while (queue.length) {
        const length = queue.length;
        const arr = [];
        
        for (let i = 0; i < length; i++) {
            const node = queue.shift();
            arr.push(node.val);
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        result.push(arr);
    }
    
    return result;
};
