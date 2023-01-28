/*Leetcode 1662 - Check If Two String Arrays are Equivalent

Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements concatenated in order forms the string.
*/

let word1 = ["ab", "c"];
let word2 = ["a", "bc"];
let word3 = ["a", "cb"];
let word4 = ["ab", "c"];
let word5  = ["abc", "d", "defg"];
let word6 = ["abcddefg"];

//Solutiob 1 - using JS functions******************
var arrayStringsAreEqual = function(word1, word2) {
    let str1 = word1.join();
    str1 = str1.replace(/,/g, '');
    let str2 = word2.join();
    str2 = str2.replace(/,/g, '');
    if (str1 === str2) {
        return true;
    }
    else {
        return false;
    }
};

console.log(arrayStringsAreEqual(word1, word2));
console.log(arrayStringsAreEqual(word3, word4));
console.log(arrayStringsAreEqual(word5, word6));

//***************************************************

//Solution 2 - w/out JS functions
var arrayStringsAreEqual1 = function(word1, word2) {
    let str1 = '';
    let str2 = ''
    for (let i = 0; i<word1.length; i++) {
        str1 += word1[i]
    }
    for (let j = 0; j<word2.length; j++) {
        str2 += word2[j]
    }
    if (str1 === str2) {
        return true;
    }
    else {
        return false;
    }
};

console.log(arrayStringsAreEqual1(word1, word2));
console.log(arrayStringsAreEqual1(word3, word4));
console.log(arrayStringsAreEqual1(word5, word6));