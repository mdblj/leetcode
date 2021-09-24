/********************************************************************************** 
 * 
 * Implement a trie with insert, search, and startsWith methods.
 * 
 * Note:
 * You may assume that all inputs are consist of lowercase letters a-z.
 * 
 *               
 **********************************************************************************/

class Node {
  constructor () {
    this.children = new Map();
    this.end = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }
  
  insert (word) {
    const add = (node, i) => {
      if (word.length === i) return node.end = true;
      if (!node.children.has(word[i])) node.children.set(word[i], new Node());
      add(node.children.get(word[i]), i + 1);
    }
    add(this.root, 0)
  }
  
  search (word) {
    const find = (node, i) => {
      if (word.length === i && node.end) return true;
      if (word.length === i) return false;
      if (!node.children.has(word[i])) return false;
      return find(node.children.get(word[i]), i + 1);
    }
    return find(this.root, 0)
  }
  
  startsWith (prefix) {
    const find = (node, i) => {
      if (prefix.length === i) return true;
      if (!node.children.has(prefix[i])) return false;
      return find(node.children.get(prefix[i]), i + 1);
    }
    return find(this.root, 0);
  }
}
