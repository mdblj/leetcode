/* 
 * Given the roots of two binary trees root and subRoot, 
 * return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.
 */

var isSubtree = function(root, subRoot) {
    if (!root) return !subRoot;
    
    return isEqual(root, subRoot) || 
        isSubtree(root.left, subRoot) ||
        isSubtree(root.right, subRoot);
};

const isEqual = (n1, n2) => {
    if (!n1 && !n2) return true;
    if (!n1 || !n2) return false;
    if (n1.val !== n2.val) return false;
    
    return isEqual(n1.left, n2.left) && isEqual(n1.right, n2.right);
}
