/* Question
Difficulty: Easy
Category: String
https://leetcode.com/problems/ransom-note/

Question name
Ransom Note
Given two strings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.
Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.
*/
//-----------------------------------------------------------------------------------------------
//Read this section if you could not solve the problem.
/* Hints + Optimal Space & Time Complexity

*/
//-----------------------------------------------------------------------------------------------
//Solution
var canConstruct = function(ransomNote, magazine) {
    let map = new Map();
    
    for(let i=0; i<ransomNote.length; i++){
        let char = ransomNote.charAt(i);
        if(map.has(char) == false){
            map.set(char,1);
        } else {
            let count = map.get(char);
            map.set(char, count + 1);
        }
    }
    

    for(let i=0; i<magazine.length; i++){
        let char = magazine.charAt(i);
        if(map.has(char) == true){
          let count = map.get(char);
            if(count == 1){
                map.delete(char);
            } else {
                map.set(char,count - 1);
            }
        } 
    }
    
    if(map.size == 0){
        return true;
    } else {
        return false;
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