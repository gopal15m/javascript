
/**
 * Given a string s, find the length of the longest substring without repeating characters.
  * Example 1:
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 
 
 * Check the length of our input, if it's empty or not a string return 0, If it's length is 1, return 1;
* Have a variable that tracks the start index of the current character in our input
* Have a variable that holds our length.
* Create a map that holds the current character, and it's index in the input
* Loop through the input, if the current index is in the map and its index is greater than or equal to the variable holding the start index, change the start index to the index after the current iteration. this will be made clear in our logic
* Add the current character to the map
* Update the length
* End the loop and return the length.
*/

var lengthOfLongestSubstring = function(s) {
    
    let map = {};
    let start = 0;
    let maxLength = 0;
    let letters = s.split('');
    
    for (let i = 0; i < s.length; i++){
        if(map[letters[i]] !== undefined && map[letters[i]] >= start){
            start = map[letters[i]] + 1;
        }
        map[letters[i]] = i;
        maxLength = Math.max(maxLength, (i-start + 1));
    }
  return maxLength;  
};
