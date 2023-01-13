/*Leetcode 26 - Remove Duplicats from Sorted Array

Given an integer array nums sorted in non-decreasing order,
remove the duplicates in-place such that each unique element appears only once.
The relative order of the elements should be kept the same.
*/

let nums1 = [1,1,2];
let nums2 = [0,0,1,1,1,2,2,3,3,4];
let nums3 = [-1,0,0,0,0,3,3];

//returns sorted original, sorted array
var removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length; i++){
        let count = 0;
        for (let j = i+1; nums[i]===nums[j]; j++) {
            count ++;
        }
        nums.splice(i, count);
    }
    return nums;
};

//Time Complexity: O(n2) 

console.log(removeDuplicates(nums1)); // [1,2]
console.log(removeDuplicates(nums2)); // [0,1,2,3,4]
console.log(removeDuplicates(nums3)); //[-1,0,3]


//returns amount of sorted values in array
var removeDuplicates1 = function(nums) {
    let index = 1;
    for (let i = 1; i < nums.length; i++){
        if (nums[i-i] != nums[i]) {
            nums[index] = nums[i];
            index++;
        }
    }
    return index;
};
//Time Complexity: O(n)
console.log(removeDuplicates1(nums1)); // 2 >> [1, 2]
console.log(removeDuplicates1(nums2));// 5 >> [0,1,2,3,4]
console.log(removeDuplicates1(nums3));// 3 [-1,0,3]

