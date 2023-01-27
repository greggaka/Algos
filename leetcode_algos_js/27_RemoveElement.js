/*Leetcode 27 - Remove Element from Array

Given an integer array nums and an integer val,
remove all occurrences of val in nums in-place.
The relative order of the elements may be changed.
*/

let nums1 = [3,2,2,3];
let val1 = 3;
let nums2 = [0,1,2,2,3,0,4,2];
let val2 = 2;

//returns sorted original
var removeElement = function(nums, val) {
    for (let i = 0; i<nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums;
};
//Time Complexity = O(n)
//Space Complexity = O(1)

// [3,2,2,3], val=3 >>> [2,2]
console.log(removeElement(nums1, val1));

// [0,1,2,2,3,0,4,2], val=2 >>> [ 0, 1, 3, 0, 4 ]
console.log(removeElement(nums2, val2)); 