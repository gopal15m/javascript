/**
* Given a string s, return the longest palindromic substring in s.
* Example 1:
* Input: s = "babad"
* Output: "bab"
* Explanation: "aba" is also a valid answer.
* /

var longestPalindrome = function(s) {
     if (s.length < 1 || s === null) return "";
    
    let longestPalindrome = "";
    
    
    
    for (let i = 0; i < s.length; i++ ){
        
        let oddPalindrome = expandString(s, i, i);
        let evenPalindrome = expandString(s, i-1, i);
        
        if( oddPalindrome.length > longestPalindrome.length ) {
            longestPalindrome = oddPalindrome;
        }
        if( evenPalindrome.length > longestPalindrome.length ) {
            longestPalindrome = evenPalindrome;
        }
    }
    
   return  longestPalindrome;
};

function expandString(s, left, right){
    let i = 0;
    while (s[left - i] && s[left - i] === s[right + i]){
    i++;    
           
    }
    i--;
    return s.slice(left - i, right + i + 1);
}
