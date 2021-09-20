/********************************************************************************** 
 * 
 * Given an array of intervals intervals where intervals[i] = [starti, endi],
 * Return the minimum number of intervals that needs to be removed to make the rest of the intervals non-overlapping.
 * 
 * Example 1: [[1,2],[2,3],[3,4],[1,3]]
 * Answer: 1
 * 
 * Example 2: [[1,2],[1,2],[1,2]]
 * Answer: 2
 *               
 **********************************************************************************/

// greedy
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => a[1] - b[1]);
    let prev = intervals[0];
    let counter = 0;
    
    for(let i = 1; i < intervals.length; i++) {
        if(intervals[i][0] < prev[1]) counter++;
        else prev = intervals[i];
    }
    return counter;
};

// two pointer
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let counter = 0;
  let i = intervals.length - 1;

  while (i > 0) {
    let j = i - 1;

    while (j >= 0 && intervals[j][1] > intervals[i][0]) {
      counter++;
      j--;
    }

    i = j;
  }
  
  return counter;
};
