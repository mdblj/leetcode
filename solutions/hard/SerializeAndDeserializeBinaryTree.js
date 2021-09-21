
/*************************************************************************************** 
 *
 * Serialization is the process of converting a data structure or object into a 
 * sequence of bits so that it can be stored in a file or memory buffer, or transmitted 
 * across a network connection link to be reconstructed later in the same or another 
 * computer environment. 
 * 
 * Design an algorithm to serialize and deserialize a binary tree. There is no 
 * restriction on how your serialization/deserialization algorithm should work. You 
 * just need to ensure that a binary tree can be serialized to a string and this string 
 * can be deserialized to the original tree structure.
 * 
 * For example, you may serialize the following tree
 * 
 *     1
 *    / \
 *   2   3
 *      / \
 *     4   5
 * 
 * as "[1,2,3,null,null,4,5]", just the same as how LeetCode OJ serializes a binary 
 * tree. You do not necessarily need to follow this format, so please be creative and 
 * come up with different approaches yourself.
 * 
 * Note: Do not use class member/global/static variables to store states. Your 
 * serialize and deserialize algorithms should be stateless.
 ***************************************************************************************/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/*
1. Traverse nodes in level-order
2. Don't forget to store "null" values in place of empty nodes.
3. Join by a special character (I used $) and return.
*/

function serialize(root) {
  const data = [];

  const dfs = (node) => {
    if (!node) {
      data.push(null);
      return;
    }

    data.push(node.val);
    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);
  return data;
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
function deserialize(data) {
  const dfs = () => {
    if (!data.length) return;

    const val = data.shift();
    if (val === null) return null;

    const node = new TreeNode(val);
    node.left = dfs();
    node.right = dfs();
    return node;
  }

  return dfs();
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
