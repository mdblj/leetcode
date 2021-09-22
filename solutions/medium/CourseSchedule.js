/********************************************************************************** 
 * 
 * There are a total of n courses you have to take, labeled from 0 to n - 1.
 * 
 * Some courses may have prerequisites, for example to take course 0 you have to first take course 1, 
 * which is expressed as a pair: [0,1]
 * 
 * Given the total number of courses and a list of prerequisite pairs, is it possible for you to 
 * finish all courses?
 * 
 * For example:
 *      2, [[1,0]]
 * There are a total of 2 courses to take. To take course 1 you should have finished course 0. 
 * So it is possible.
 * 
 *      2, [[1,0],[0,1]]
 * There are a total of 2 courses to take. To take course 1 you should have finished course 0, 
 * and to take course 0 you should also have finished course 1. So it is impossible.
 * 
 * Note:
 * The input prerequisites is a graph represented by a list of edges, not adjacency matrices. 
 * Read more about how a graph is represented.
 *               
 **********************************************************************************/

var canFinish = (numCourses, preRequisites) => {
  const graph = new Map();
  const visiting = new Set();
  const visited = new Set();
  
  const DFS = (course) => {
    visiting.add(course);
    const edges = graph.get(course);
    
    if (edges) {
      for (const preReq of edges) {
        if (visited.has(preReq)) continue;
        if (visiting.has(preReq)) return true;
        if (DFS(preReq)) return true;
      }
      visiting.delete(course);
      visited.add(course);
      return false;
    }
  }
  
  for (const [course, preReq] of preRequisites) {
    const edges = graph.get(course) || [];
    edges.push(preReq);
    graph.set(course, edges);
  }
  
  for (const [course] of graph) {
    if (DFS(course)) return false;
  }
  
  return true;
}


