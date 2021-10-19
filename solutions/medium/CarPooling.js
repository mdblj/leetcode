/********************************************************************************** 
* 
* There is a car with capacity empty seats. The vehicle only drives east (i.e., it cannot turn around and drive west).
* You are given the integer capacity and an array trips where trip[i] = [numPassengersi, fromi, toi] 
* indicates that the ith trip has numPassengersi passengers and the locations to pick them up 
* and drop them off are fromi and toi respectively. 
*
* The locations are given as the number of kilometers due east from the car's initial location.
*
* Return true if it is possible to pick up and drop off all passengers for all the given trips, or false otherwise.
* 
**********************************************************************************/

var carPooling = function(trips, capacity) {
    const drop = new Map();
    let cur = 0;
    trips.sort((a, b) => a[1] - b[1]);
  
    for(const [num, start, end] of trips) {
        cur += num;
        for(const [stop, ppl] of drop) {
            if(stop <= start) {
                cur -= ppl;
                drop.delete(stop);
            }
        }
        
        drop.set(end, (drop.get(end) || 0) + num);
        if(cur > capacity) return false;
    }
    
    return true;
};
