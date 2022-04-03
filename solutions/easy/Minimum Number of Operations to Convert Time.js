/********************************************************************************** 
* 
* You are given two strings current and correct representing two 24-hour times.
*
* 24-hour times are formatted as "HH:MM", where HH is between 00 and 23,
* and MM is between 00 and 59. The earliest 24-hour time is 00:00, and the latest is 23:59.
*
* In one operation you can increase the time current by 1, 5, 15, or 60 minutes. 
* You can perform this operation any number of times.
*
* Return the minimum number of operations needed to convert current to correct.
* 
**********************************************************************************/

// T.C = O(n), S.C = O(n)
var convertTime = function(current, correct) {
    let timeDiff = getTimeDiff(current, correct);
    let count = 0;
    
    while (timeDiff !== 0) {    
        if (timeDiff >= 60) {
            timeDiff -= 60;
        } else if (timeDiff >= 15) {
            timeDiff -= 15;
        } else if (timeDiff >= 5) {
            timeDiff -= 5;
        } else {
            timeDiff -= 1;    
        }
        count++;
    }
    
    return count;
};

const getTimeDiff = (current, correct) => {
    const currentMinutes = +current.slice(0,2) * 60 + +current.slice(-2);
    const correctMinutes = +correct.slice(0,2) * 60 + +correct.slice(-2);
    return Math.abs(currentMinutes - correctMinutes);
}
