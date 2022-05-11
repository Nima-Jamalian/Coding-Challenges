/* Question
Difficulty: Easy
Category: String
https://leetcode.com/problems/longest-common-prefix/
Question name
Longest Common Prefix
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.
*/
//-----------------------------------------------------------------------------------------------
//Read this section if you could not solve the problem.
/* Hints + Optimal Space & Time Complexity

*/
//-----------------------------------------------------------------------------------------------
//Solution
var longestCommonPrefix = function(strs) {
    let output = "";
    let currentPrefex = "";
    let currentPrefexCount = 0;
    let count = 1;
    if(strs == "" || strs.length == 1){
        output = strs[0];
        return output;
    } else {
        while(true){
            if(currentPrefexCount > strs[0].length){
                return output;
             }
            currentPrefex = strs[0].charAt(currentPrefexCount);
            for(let i=1; i<strs.length; i++){
                if(strs[i].charAt(currentPrefexCount) === currentPrefex){
                    count++;
                } else {
                      return output;
                }
             }
             if(count === strs.length){
             output += currentPrefex;
             count = 1;
             }
             currentPrefexCount++;
          }
    return output;
    }
};
//-----------------------------------------------------------------------------------------------
/*
//Other Solution

//---

//---
*/
//-----------------------------------------------------------------------------------------------
//You can use these test cases to validate your solution
//Better to check this after you have attempted the challenge and confident in your answer
/* Test cases

*/
//-----------------------------------------------------------------------------------------------
//Test Cases Solution, check after completing the challenge 
/*  Test Cases Result

*/
