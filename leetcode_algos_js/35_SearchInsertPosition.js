/*Leetcode 35 - Search Insert Position

Given a sorted array of distinct integers and a target value,
return the index if the target is found. 
If not,return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
*/

/*Pseudo Code
1. Set two counter variables - "left" and "right"
    set "left" = 0, the first index of an array
    set "right" = nums.length - 1, the last index of an array
2. use while-loop to iterate through the array to find index of target variable
3. Set variable "mid" equal to middle index of the array
4. return "mid" if the value of middle index equals "target"
5. if not AND target is less than the middle value, set "right" var to index to the left of mid
6. loop will continue to run until left === right.

*/

let nums = [1,3,5,6,7,8];
let target1 = 5;
let target2 = 2;
let target3 = 7;

var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length-1;
    while (left <= right ) {
        let mid = Math.floor((right + left) / 2);
        if (target === nums[mid]) {
            return mid;
        }
        else if (target < nums[mid]) {
            right = mid - 1;
        }
        else {
            left = mid + 1
        }
    }
    return left;
};

console.log(searchInsert(nums, target1));
console.log(searchInsert(nums, target3));
console.log(searchInsert(nums, target2));