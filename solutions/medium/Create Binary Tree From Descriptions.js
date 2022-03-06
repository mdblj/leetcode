/********************************************************************************** 
*
* You are given a 2D integer array descriptions where descriptions[i] = [parenti, childi, isLefti] indicates
* that parenti is the parent of childi in a binary tree of unique values. Furthermore,
*   - If isLefti == 1, then childi is the left child of parenti.
*   - If isLefti == 0, then childi is the right child of parenti.
*
* Construct the binary tree described by descriptions and return its root.
*
* The test cases will be generated such that the binary tree is valid.
* 
**********************************************************************************/

// T.C = O(n), S.C = O(n)
var createBinaryTree = function(descriptions) {
    const map = new Map();
    const set = new Set();
    
    for (const [parent, child, isLeft] of descriptions) {
        if (!map.has(parent)) map.set(parent, new TreeNode(parent));
        if (!map.has(child)) map.set(child, new TreeNode(child));
        
        if (isLeft === 1) map.get(parent).left = map.get(child);
        else map.get(parent).right = map.get(child);
        
        set.add(child);
    }
    
    for (const [parent, child, isLeft] of descriptions) {
        if (!set.has(parent)) return map.get(parent)
    }
};
