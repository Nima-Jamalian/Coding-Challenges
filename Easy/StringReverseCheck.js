
/* Question
Difficulty: Easy
Category: String

Question name
Check for Reversed String
You are given two string input adn result, if result represent reversed value of input string it should return true else false

*/
//-----------------------------------------------------------------------------------------------
//Read this section if you could not solve the problem.
/* Hints + Optimal Space & Time Complexity

*/
//-----------------------------------------------------------------------------------------------
//Solution
function StringReversCheck(input, result){
    if(input.length != result.length){
        return false;
    } 

    for(let i=0; i<input.length/2; i++){
        let tmp = input[i];
        input[i] = input[input.length - i -1];
        input[input.length - i -1] = tmp;
    }
    console.log(input);
    for(let i=0; i<input.length; i++){
        if(input[i] != result[i]){
            return false;
        }
    }
    return true;
}


let input = [1,2,3,4];
let result = [4,3,2,1];

console.log(StringReversCheck(input,result));
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



