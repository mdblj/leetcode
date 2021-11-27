/********************************************************************************** 
* 
* You are given a 0-indexed string street. Each character in street is either 'H' representing a house or '.' representing an empty space.
*
* You can place buckets on the empty spaces to collect rainwater that falls from the adjacent houses. 
* The rainwater from a house at index i is collected if a bucket is placed at index i - 1 and/or index i + 1. A single bucket,
* if placed adjacent to two houses, can collect the rainwater from both houses.
*
* Return the minimum number of buckets needed so that for every house, 
* there is at least one bucket collecting rainwater from it, or -1 if it is impossible.
*               
**********************************************************************************/

var minimumBuckets = function(a) {
    const street = [...a];
    let buckets = 0;

    
    for (let i = 0; i < street.length; i++) {
        if (street[i] === "H") {
            if (street[i - 1] === 'B') continue;
            if (street[i + 1] === '.') {
                street[i + 1] = 'B';
                buckets++;
                continue;
            }
            if (street[i - 1] === '.') {
                street[i - 1] = 'B';
                buckets++;
                continue;
            }
            else return -1;
        }            
    }
    
    return buckets;
};
