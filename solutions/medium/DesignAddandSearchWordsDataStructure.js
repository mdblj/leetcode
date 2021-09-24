/********************************************************************************** 
 * 
 * Design a data structure that supports the following two operations:
 * 
 * void addWord(word)
 * bool search(word)
 * 
 * search(word) can search a literal word or a regular expression string containing only letters `a-z` or `.`
 * A `.` means it can represent any one letter.
 * 
 * For example:
 * 
 * WordDictionary wordDictionary = new WordDictionary();
 * wordDictionary.addWord("bad");
 * wordDictionary.addWord("dad");
 * wordDictionary.addWord("mad");
 * wordDictionary.search("pad"); // return False
 * wordDictionary.search("bad"); // return True
 * wordDictionary.search(".ad"); // return True
 * wordDictionary.search("b.."); // return True
 * 
 * Note:
 * You may assume that all words are consist of lowercase letters a-z.
 * 
 * click to show hint.
 * 
 * You should be familiar with how a Trie works. If not, please work on this problem: Implement Trie (Prefix Tree) first.
 * 
 *               
 **********************************************************************************/

class Node {
  constructor () {
    this.children = new Map();
    this.end = false;
  }
}

class WordDictionary {
  constructor () {
    this.root = new Node();
  }
  
  addWord (word) {
    const add = (node, i) => {
      if (word.length === i) return node.end = true;
      if (!node.children.has(word[i])) {
        node.children.set(word[i], new Node());
      } 
      add(node.children.get(word[i]), i + 1);
    }
    add(this.root, 0);
  }
  
  search (word) {
    const find = (node, i) => {
      if (word.length === i && node.end) return true;
      if (word.length === i) return false;
      
      if (word[i] === '.') {
        for (const [key, val] of node.children) {
          if (find(val, i + 1)) return true;
        }
        return false;
      }
      if (!node.children.has(word[i])) return false;

      return find(node.children.get(word[i]), i + 1);
    }
    
    return find(this.root, 0);
  }
}
