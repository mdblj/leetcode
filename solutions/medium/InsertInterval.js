/********************************************************************************** 
* 
* Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).
* 
* You may assume that the intervals were initially sorted according to their start times.
* 
* Example 1:
* Given intervals [1,3],[6,9], insert and merge [2,5] in as [1,5],[6,9].
* 
* Example 2:
* Given [1,2],[3,5],[6,7],[8,10],[12,16], insert and merge [4,9] in as [1,2],[3,10],[12,16].
* 
* This is because the new interval [4,9] overlaps with [3,5],[6,7],[8,10].
* 
*               
**********************************************************************************/

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

//-------------easy understand------------------------------------
var insert = function(intervals, newInterval) {
    const result = [];

    for (const [start, end] of intervals) {        
        if (!newInterval || end < newInterval[0]) {
            result.push([start, end]);
            continue;
        }
        
        if (newInterval[1] < start) {
            result.push(newInterval);
            result.push([start, end]);
            newInterval = null;
            continue;
        } 
        
        newInterval[0] = Math.min(newInterval[0], start);
        newInterval[1] = Math.max(newInterval[1], end);
    }
    
    if (newInterval) {
        result.push(newInterval);
    }
    
    return result;
};

// ------------------binary-search------------------------------
var insert = function(intervals, newInterval) {
    let left = 0;
    let right = intervals.length;
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if (intervals[mid][0] < newInterval[0]) left = mid + 1;
        else right = mid;
    }

    intervals.splice(left, 0, newInterval)
    
    const result = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const [cur1, cur2] = intervals[i];
        let [prev1, prev2] = result[result.length - 1];
        
        if (prev2 >= cur1) {
            if (prev2 < cur2) {
                prev2 = cur2;
                result[result.length - 1] = [prev1, prev2];
            }
        } else {
            result.push([cur1, cur2]);
        }
    }
    
    return result;
};
