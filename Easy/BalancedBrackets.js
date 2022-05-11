/* Question
Difficulty: Easy
Category: String
https://leetcode.com/problems/valid-parentheses/
Question name
    Balanced Brackets
        Given an expression string exp, write a program to examine whether 
        the pairs and the orders of “{“, “}”, “(“, “)”, “[“, “]” are correct in exp.
        Input: exp = “[()]{}{[()()]()}” 
        Output: Balanced

        Input: exp = “[(])” 
        Output: Not Balanced 
        */
        //More Examples
        //Test Cases
        //String input = "()";//true
        //String input = "()[]";//true
        //String input = "(]";//false
        //String input = "([)]";//false
        //String input = "{[]}";//true
//-----------------------------------------------------------------------------------------------
//Read this section if you could not solve the problem.
/* Hints + Optimal Space & Time Complexity

*/
//-----------------------------------------------------------------------------------------------
//Solution

function areBracketsBalanced(expr)
{
     
    // Using ArrayDeque is faster
    // than using Stack class
    let stack = [];
 
    // Traversing the Expression
    for(let i = 0; i < expr.length; i++)
    {
        let x = expr[i];
 
        if (x == '(' || x == '[' || x == '{')
        {
             
            // Push the element in the stack
            stack.push(x);
            continue;
        }
 
        // If current character is not opening
        // bracket, then it must be closing.
        // So stack cannot be empty at this point.
        if (stack.length == 0)
            return false;
             
        let check;
        switch (x){
        case ')':
            check = stack.pop();
            if (check == '{' || check == '[')
                return false;
            break;
 
        case '}':
            check = stack.pop();
            if (check == '(' || check == '[')
                return false;
            break;
 
        case ']':
            check = stack.pop();
            if (check == '(' || check == '{')
                return false;
            break;
        }
    }
 
    // Check Empty Stack
    return (stack.length == 0);
}
 
// Driver code
let expr = "([{}])";
 
// Function call
if (areBracketsBalanced(expr))
    console.log("Balanced ");
else
    console.log("Not Balanced ");
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

