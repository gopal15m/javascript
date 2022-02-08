//Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

/**
*Input: num = 38
*Output: 2
*Explanation: The process is
*38 --> 3 + 8 --> 11
*11 --> 1 + 1 --> 2 
*/


var addDigits = function(num) {
    return num == 0 ? 0 : 1 + (num - 1) % 9;
    
};
