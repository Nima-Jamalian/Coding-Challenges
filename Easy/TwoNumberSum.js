/* Question
Difficulty: Easy
Category: Arrays

Two Number Sum

Write a function that takes in a non-empty array of distinct integers and an integer
representing a target sum. If any two numbers in the input array sum up to the target
sum, the function should return them in an array, in any order. If no two numbers sum
up to the target sum, the function should return an empty array.
Note that the target sum has to be obtained by summing two different integers in the
array; you can't add a single integer to itself in order to obtain the target sum.
You can assume that there will be at most one pair of numbers summing up to the
target sum.

Sample Input 
array = [3,5,-4,8,11,1,-1,6]
targetSum = 10

Sample Output
[-1,11] //the numbers could be in revers order
*/
//-----------------------------------------------------------------------------------------------
//Read this section if you could not solve the problem.
/* Hints + Optimal Space & Time Complexity
Hint 1
Try using two for loops to sum all possible pairs of numbers in the input array.
What are the time and space implications of this approach?

Hint 2
Realize that for every number X in the input array, you are essentially trying to
find a corresponding number Y such that X + Y = targetSum. With two variables in
this equation known to you, it shouldn't be hard to solve for Y.

Hint 3
Try storing every number in a hash table, solving the equation mentioned in Hint
#2 for every number, and checking if the Y that you find is stored in the hash
table. What are the time and space implications of this approach?

Optimal Space & Time Complexity
O(n) time | O(n) space - where n is the length of the input array
*/
//-----------------------------------------------------------------------------------------------
//Solution
function TwoNumberSum(array,targetSum) {
  var index = 0;
  for(index; index < array.length; index++){
     for(var i = index ;i <array.length-1; i++){
         if(array[index] + array[i+1] == targetSum){
            return console.log([array[index],array[i+1]]);
         }
     }
  }
  return console.log([]);
 }
 
 TwoNumberSum([3, 5, -4, 8, 11, 1, -1, 6],15);
//-----------------------------------------------------------------------------------------------
//You can use these test cases to validate your solution
//Better to check this after you have attempted the challenge and confident in your answer
/* Test cases
Test Case 1
{
  "array": [3, 5, -4, 8, 11, 1, -1, 6],
  "targetSum": 10
}
Test Case 2
{
  "array": [4, 6],
  "targetSum": 10
}
Test Case 3
{
  "array": [4, 6, 1],
  "targetSum": 5
}
Test Case 4
{
  "array": [4, 6, 1, -3],
  "targetSum": 3
}
Test Case 5
{
  "array": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "targetSum": 17
}
Test Case 6
{
  "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 15],
  "targetSum": 18
}
Test Case 7
{
  "array": [-7, -5, -3, -1, 0, 1, 3, 5, 7],
  "targetSum": -5
}
Test Case 8
{
  "array": [-21, 301, 12, 4, 65, 56, 210, 356, 9, -47],
  "targetSum": 163
}
Test Case 9
{
  "array": [-21, 301, 12, 4, 65, 56, 210, 356, 9, -47],
  "targetSum": 164
}
Test Case 10
{
  "array": [3, 5, -4, 8, 11, 1, -1, 6],
  "targetSum": 15
}
Test Case 11
{
  "array": [14],
  "targetSum": 15
}
Test Case 12
{
  "array": [15],
  "targetSum": 15
}
*/
//-----------------------------------------------------------------------------------------------
//Test Cases Solution, check after completing the challenge 
/* Test Cases Result
Test Case 1 passed!
Expected Output
[11, -1]
Your Code's Output
[11, -1]

Input(s)
{
  "array": [3, 5, -4, 8, 11, 1, -1, 6],
  "targetSum": 10
}
Test Case 2 passed!
Expected Output
[4, 6]
Your Code's Output
[4, 6]

Input(s)
{
  "array": [4, 6],
  "targetSum": 10
}
Test Case 3 passed!
Expected Output
[4, 1]
Your Code's Output
[4, 1]

Input(s)
{
  "array": [4, 6, 1],
  "targetSum": 5
}
Test Case 4 passed!
Expected Output
[6, -3]
Your Code's Output
[6, -3]

Input(s)
{
  "array": [4, 6, 1, -3],
  "targetSum": 3
}
Test Case 5 passed!
Expected Output
[8, 9]
Your Code's Output
[8, 9]

Input(s)
{
  "array": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "targetSum": 17
}
Test Case 6 passed!
Expected Output
[3, 15]
Your Code's Output
[3, 15]

Input(s)
{
  "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 15],
  "targetSum": 18
}
Test Case 7 passed!
Expected Output
[-5, 0]
Your Code's Output
[-5, 0]

Input(s)
{
  "array": [-7, -5, -3, -1, 0, 1, 3, 5, 7],
  "targetSum": -5
}
Test Case 8 passed!
Expected Output
[210, -47]
Your Code's Output
[210, -47]

Input(s)
{
  "array": [-21, 301, 12, 4, 65, 56, 210, 356, 9, -47],
  "targetSum": 163
}
Test Case 9 passed!
Expected Output
[]
Your Code's Output
[]

Input(s)
{
  "array": [-21, 301, 12, 4, 65, 56, 210, 356, 9, -47],
  "targetSum": 164
}
Test Case 10 passed!
Expected Output
[]
Your Code's Output
[]

Input(s)
{
  "array": [3, 5, -4, 8, 11, 1, -1, 6],
  "targetSum": 15
}
Test Case 11 passed!
Expected Output
[]
Your Code's Output
[]

Input(s)
{
  "array": [14],
  "targetSum": 15
}
Test Case 12 passed!
Expected Output
[]
Your Code's Output
[]

Input(s)
{
  "array": [15],
  "targetSum": 15
}
*/
