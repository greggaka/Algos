/*Leetcode 20 - Valid Parentheses

Given a string s containing just the sacters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

*/

/*Pseudo Code
1. Return false if s is an empty string
2. make new array variable "stack"
3. use for-loop to iterate through the string
4. if an opening bracket (, [, { push to "stack" array
5. if a closing bracket ), ], } check if last element in "stack" is corresponding opening bracket.
    If it is, pop (delete) it.
    If it isn't, push (add) it to array "stack"
6. After iterating through entire array, function will return true if "stack" is empty.
    Other-wise it will return false.
*/

let s1 = '()';
let s2 = "()[]{}";
let s3 = '{[[]{}]}()()';
let s4 = "(])]";
let s5 = '{[}]'
let s6 = '(})';


var isValid = function(s) {
    if (s === null || s.length === 0) {
        return false;
    }
    let stack = [];
    for (let i = 0; i<s.length; i++) {
        if (s[i] === '(') {
            stack.push(s[i])
            console.log(stack)
        }
        else if (s[i] === ')')  {
            if (stack[stack.length-1] === '(') {
            stack.pop(stack.length - 1);
            }
            else {
                stack.push(s[i])
            }
        }
        else if (s[i] === '[') {
            stack.push(s[i])
        }
        else if (s[i] === ']')  {
            if (stack[stack.length-1] === '[') {
            stack.pop(stack.length - 1);
            }
            else {
                stack.push(s[i])
            }
        }
        else if (s[i] === '{') {
            stack.push(s[i])
        }
        else if (s[i] === '}')  {
            if (stack[stack.length-1] === '{') {
            stack.pop(stack.length - 1);
            }
            else {
                stack.push(s[i])
            }
        }
        else if (stack.length === 0) {
            return false;
        }
        console.log(stack)
    }
    if (stack === [] || stack.length === 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isValid(s1));
console.log(isValid(s2));
console.log(isValid(s3));
console.log(isValid(s4));
console.log(isValid(s5));
console.log(isValid(s6));