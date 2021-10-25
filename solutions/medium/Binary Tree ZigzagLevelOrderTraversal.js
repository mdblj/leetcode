/********************************************************************************** 
* 
* Given a binary tree, return the zigzag level order traversal of its nodes' values. 
* (ie, from left to right, then right to left for the next level and alternate between).
* 
* For example:
* Given binary tree {3,9,20,#,#,15,7},
* 
*     3
*    / \
*   9  20
*     /  \
*    15   7
* 
* return its zigzag level order traversal as:
* 
* [
*   [3],
*   [20,9],
*   [15,7]
* ]
*               
**********************************************************************************/

var zigzagLevelOrder = function(root) {
    if (!root) return [];
    
    const res = [];
    const queue = [root];
    let counter = 0;
    
    while (queue.length) {
        const level = [];
        const len = queue.length;
        
        for (let i = 0; i < len; i++) {
            const node = queue.shift();
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            
            level.push(node.val);    
        }
        
        if (counter % 2 !== 0) level.reverse();
        res.push(level);
        counter++;
    }
    
    return res;
};
