/********************************************************************************** 
* 
* You are given a 0-indexed integer array nums. The array nums is beautiful if:
*   - nums.length is even.
*   - nums[i] != nums[i + 1] for all i % 2 == 0.
* Note that an empty array is considered beautiful.
*
* You can delete any number of elements from nums. When you delete an element,
* all the elements to the right of the deleted element will be shifted one unit 
* to the left to fill the gap created and all the elements
* to the left of the deleted element will remain unchanged.
*
* Return the minimum number of elements to delete from nums to make it beautiful.
* 
**********************************************************************************/

var minDeletion = function(nums) {
    let remove = 0;
    let index = 0;
    let next;
    
    while (index < nums.length) {
        next = index + 1;
        while (nums[index] === nums[next++]) {
            console.log(next)
            remove++;
        }
        index = next;
    }
    
    return (nums.length - remove) % 2 === 1 ? remove + 1 : remove;
};
