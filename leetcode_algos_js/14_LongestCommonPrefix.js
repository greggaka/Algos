/*Leetcode 24 E - Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/

/* Pseudo Code
1. check is array is empty, if so return an empty string
2. assign first word (strs[0]) in array to var "prefix"
3. use for loop to iterate through array indexes
4. nest while loop to compare words.
5. continually subtract letter from end of var "prefix"
    until either loop runs out of letters or it matches
    with the next word
*/

let strs1 = ["flower","flow","flight"];
/*
    "prefix" = flower
    for-loop compares flower to flow
        while loop runs: flower >> flowe >> flow >> break;
    for-loop compares flow to flight
        while-loop runs: flow >> flo >> fl >> break;
    break for-loop;
    return 'fl'
*/
let strs2 = ["dog","racecar","car"];

var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return 'array has no words';
    }
    let prefix = strs[0]
    for (let i = 1; i<strs.length; i++) {
        while (strs[i].indexOf(prefix) != 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === '') {
                return "words have no matching prefixes";
            }
        }
    }
    return prefix
};

console.log(longestCommonPrefix(strs1));
console.log(longestCommonPrefix(strs2));