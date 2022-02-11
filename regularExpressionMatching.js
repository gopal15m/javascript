/**
* Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

* '.' Matches any single character.​​​​
* '*' Matches zero or more of the preceding element.
* The matching should cover the entire input string (not partial).

* Example 1:
* Input: s = "aa", p = "a"
* Output: false
* Explanation: "a" does not match the entire string "aa".
* Example 2:
* Input: s = "aa", p = "a*"
* Output: true
* Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
* Example 3:
* Input: s = "ab", p = ".*"
* Output: true
* Explanation: ".*" means "zero or more (*) of any character (.)".
* /

var isMatch = function(s, p) {
  const rows = s.length;
    const columns = p.length;

    if (rows == 0 && columns == 0) {
        return true;
    }
    if (columns == 0) {
        return false;
    }
 
    const dp = Array.from({ length: s.length + 1 }, () => [false]);
   
    dp[0][0] = true;
   
    for (let i = 1; i < columns + 1; i++) {
        if (p[i - 1] === '*') {
            dp[0][i] = dp[0][i - 2];
        }
        else {
            dp[0][i] = false;
        };
    }
   
    for (let i = 1; i < rows + 1; i++) {
        for (let j = 1; j < columns + 1; j++) {
            if (p[j - 1] === '*') {
                if (p[j - 2] === s[i - 1] || p[j - 2] === '.') {
                    dp[i][j] = dp[i][j - 2] || dp[i - 1][j];
                } else {
                    dp[i][j] = dp[i][j - 2];
                }
            } else if (p[j - 1] === s[i - 1] || p[j - 1] === '.') {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = false;
            }
        }
    }
    return dp[rows][columns];
};
