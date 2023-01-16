/*Leetcode 66 - Plus One

You are given a large integer represented as an integer array digits,
where each digits[i] is the ith digit of the integer. 
The digits are ordered from most significant to least significant in 
left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.
*/

let digits1 = [1,2,3];
let digits2 = [4,3,2,1];
let digits3 = [9];
let digits4 = [9,9];
let digits5 = [8,9,9,9];
let digits6 = [9,8,9];

var plusOne = function(digits) {
    if (digits[digits.length-1] < 9) {
        digits[digits.length-1] = digits[digits.length-1] + 1;
    }
    else {
        //if last digit is 9, increment to 0 and add one to subsequent array index
        for (let i = digits.length - 1; digits[i]===9; i--) {
            console.log(i);
            //if [9] - one index that equals 9
            if (digits[i] === 9 && i===0) {
                digits[i] = 0;
                digits.unshift(1);
            }
            //else if value of the last index is 9 and array has multiple values
            else if (digits[i]===9 && i!=0) {
                digits[i] = 0;
                digits[i-1] = digits[i-1] + 1;
                //if statement breaks the loop if after adding 1 to digits[i-1] the value is below 9 
                //such as for array [9,8,9]
                if (digits[i-1] <=9) {
                    break;
                }
            }
            //if statement checks decrements digits[i-1] if it ever reaches ten
            if (digits[i-1] === 10) {
                digits[i-1] = 9;
            }
        }
    }
    return digits;
};

console.log(plusOne(digits1));
console.log(plusOne(digits2));
console.log(plusOne(digits3));
console.log(plusOne(digits4));
console.log(plusOne(digits5));
console.log(plusOne(digits6));
