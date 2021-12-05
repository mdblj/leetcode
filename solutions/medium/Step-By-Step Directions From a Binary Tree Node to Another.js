/********************************************************************************** 
* 
* You are given the root of a binary tree with n nodes. 
* Each node is uniquely assigned a value from 1 to n. 
* You are also given an integer startValue representing the value of the start node s,
* and a different integer destValue representing the value of the destination node t.
*
* Find the shortest path starting from node s and ending at node t. 
* Generate step-by-step directions of such path as a string consisting of only the uppercase letters 'L', 'R', and 'U'. 
*
* Each letter indicates a specific direction:
*
* 'L' means to go from a node to its left child node.
* 'R' means to go from a node to its right child node.
* 'U' means to go from a node to its parent node.
*
* Return the step-by-step directions of the shortest path from node s to node t.
* 
**********************************************************************************/

var getDirections = function(root, startValue, destValue) {
    const getPath = (node, value, acc='') => {
        if (!node) return '';
        if (node.val === value) return acc;
        return getPath(node.left, value, acc + 'L') + getPath(node.right, value, acc + 'R')
    }
    
    let startPath = getPath(root, startValue);
    let destPath = getPath(root, destValue);
    let count = 0;
    let output = '';
    
    for (let i = 0; i < startPath.length && i < destPath.length && startPath[i] === destPath[i]; i++) count++;
    for (let j = count; j < startPath.length; j++) output += 'U';
    
    return output + destPath.substring(count);
};
