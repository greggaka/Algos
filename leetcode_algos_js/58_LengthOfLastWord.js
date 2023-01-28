/*Leetcode 58 E - Length of Last Word

Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.
*/

let s1 = "Hello World" // >> return 5
let s2 = "   fly me   to   the moon  " //>> return 4
let s3 = "luffy is still joyboy" // >> return 6

var lengthOfLastWord = function(s) {
    if (s === null) {
        return 0;
    }
    let str = s.trim("");
    let wordArr = str.split(" ");
    console.log(wordArr);
    return wordArr[wordArr.length-1].length;
};

console.log(lengthOfLastWord(s1));
console.log(lengthOfLastWord(s2));
console.log(lengthOfLastWord(s3));