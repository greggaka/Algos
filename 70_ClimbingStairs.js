/*Leetcode 70 E - Climbing Stairs

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps.
In how many distinct ways can you climb to the top?
*/

/*Pseudo Code
1. If there is only 1 stair, return 1 bc there is only 1 way to reach the step
2. declare a variable "result" as an array whose value is n+1
3. Because algo is a fibonacci problem, "result[n]" will equal sum of prior two values (result[n-1] + result [n-2]).
    Set result[1] = 1 and result[2] = 2 to set first two values needed for the rest of the fibonacci sequence
4. Set for-loop that will continually find and set values at results[i] until i is above number of stairs (n).
*/

let n1 = 1;
let n2 = 2;
let n3 = 3;
    //result[3] = result[3-1] + result[3-2] >>> result[3] = result[2] + result[1] >> 1+2 = 3
    //result[3] === 3
let n4 = 4;
    //result[4] = result[3] + result[2] >> 2+3 = 5
    //result[4= === 5]
let n5 = 5;
    //result[5] =  result[4] + result[3] >>> 3+5 = 8
    //result[5] === 8
let n6 = 6;
    //result[6] = result[5] + result[4] >> 5+8 = 13
    //result[6] === 13


var climbStairs = function(n) {
    if (n === 1) {
        return 1;
    }
    let result = [n+1];
    result[1] = 1;
    result[2] = 2
    for (let i = 3; i<= n; i++) {
        result[i] = result [i-1] + result[i-2];
    }
    return result[n];
};

console.log(climbStairs(n1));
console.log(climbStairs(n2));
console.log(climbStairs(n3));
console.log(climbStairs(n4));
console.log(climbStairs(n5));
console.log(climbStairs(n6));
