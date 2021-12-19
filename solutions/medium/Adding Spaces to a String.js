/********************************************************************************** 
* 
* You are given a 0-indexed string s and a 0-indexed integer array spaces 
* that describes the indices in the original string where spaces will be added. 
* Each space should be inserted before the character at the given index.
*
* For example, given s = "EnjoyYourCoffee" and spaces = [5, 9], we place spaces before 'Y' and 'C',
* which are at indices 5 and 9 respectively. Thus, we obtain "Enjoy Your Coffee".
*
* Return the modified string after the spaces have been added.
* 
**********************************************************************************/

var addSpaces = function(s, spaces) {
    const res = new Array(s.length + spaces.length);
    let j = 0;
    let k = 0;

    for (let i = 0; i < res.length; i++) {
      if ((i - k) === spaces[k]) {
        res[i] = ' ';
        k++;
        continue;
      }
      
      res[i] = s[j];
      j++;
    }
    
    return res.join('');
};
