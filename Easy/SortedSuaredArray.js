/* Question
Difficulty: Easy
Category: Arrays

Sorted Squared Array

Write a function that takes in a non-empty array of integers that are sorted in
ascending order and returns a new array of the same length with the squares of the
original integers also sorted in ascending order.

Sample Input
array = [1, 2, 3, 5, 6, 8 ,9]

Sample Output
[1, 4, 9, 25, 36, 63, 81]
*/
//-----------------------------------------------------------------------------------------------
//Read this section if you could not solve the problem.
/* Hints + Optimal Space & Time Complexity
Hint 1
While the integers in the input array are sorted in increasing order, their squares won't necessarily be as well,
because of the possible presence of negative numbers.

Hint 2
Traverse the array value by value, square each value, and insert the squares into an output array.
Then, sort the output array before returning it. Is this the optimal solution?

Hint 3
To reduce the time complexity of the algorithm mentioned in Hint #2, you need to avoid sorting the ouput array. 
To do this, as you square the values of the input array, try to
directly insert them into their correct position in the output array.

Hint 4
Use two pointers to keep track of the smallest and largest values in the input array. 
Compare the absolute values of these smallest and largest values, square the larger absolute
value, and place the square at the end of the output array, filling it up from right to left.
 Move the pointers accordingly, and repeat this process until the output array is filled.


Optimal Space & Time Complexity
O(n) time | O(n) space - where n is the length of the input array
*/
//-----------------------------------------------------------------------------------------------
//Solution
function sortedSquaredArray(array){
  const squaredArray = [];
  var hasNegetive = false;
  array.forEach(element => {
      if(element < 0){
          hasNegetive = true;
          console.log("has negetive");
      }
      squaredArray.push(element*element);
  });
  if(hasNegetive == false){
     
      return  squaredArray;
  } else {
      squaredArray.sort(function(a, b){return a-b});
      return squaredArray;
  }
}
var array = [-10,1, 2, 3, 5, 6, 8 ,9]
console.log(sortedSquaredArray(array));
//-----------------------------------------------------------------------------------------------
//You can use these test cases to validate your solution
//Better to check this after you have attempted the challenge and confident in your answer
/* Test cases
Test Case 1
{
  "array": [1, 2, 3, 5, 6, 8, 9]
}
Test Case 2
{
  "array": [1]
}
Test Case 3
{
  "array": [1, 2]
}
Test Case 4
{
  "array": [1, 2, 3, 4, 5]
}
Test Case 5
{
  "array": [0]
}
Test Case 6
{
  "array": [10]
}
Test Case 7
{
  "array": [-1]
}
Test Case 8
{
  "array": [-2, -1]
}
Test Case 9
{
  "array": [-5, -4, -3, -2, -1]
}
Test Case 10
{
  "array": [-10]
}
Test Case 11
{
  "array": [-10, -5, 0, 5, 10]
}
Test Case 12
{
  "array": [-7, -3, 1, 9, 22, 30]
}
Test Case 13
{
  "array": [-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20]
}
Test Case 14
{
  "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
}
Test Case 15
{
  "array": [-1, -1, 2, 3, 3, 3, 4]
}
Test Case 16
{
  "array": [-3, -2, -1]
}
Test Case 17
{
  "array": [-3, -2, -1]
}
*/
//-----------------------------------------------------------------------------------------------
//Test Cases Solution, check after completing the challenge 
/*  Test Cases Result
Test Case 1 passed!
Expected Output
[1, 4, 9, 25, 36, 64, 81]
Your Code's Output
[1, 4, 9, 25, 36, 64, 81]

Input(s)
{
  "array": [1, 2, 3, 5, 6, 8, 9]
}
Test Case 2 passed!
Expected Output
[1]
Your Code's Output
[1]

Input(s)
{
  "array": [1]
}
Test Case 3 passed!
Expected Output
[1, 4]
Your Code's Output
[1, 4]

Input(s)
{
  "array": [1, 2]
}
Test Case 4 passed!
Expected Output
[1, 4, 9, 16, 25]
Your Code's Output
[1, 4, 9, 16, 25]

Input(s)
{
  "array": [1, 2, 3, 4, 5]
}
Test Case 5 passed!
Expected Output
[0]
Your Code's Output
[0]

Input(s)
{
  "array": [0]
}
Test Case 6 passed!
Expected Output
[100]
Your Code's Output
[100]

Input(s)
{
  "array": [10]
}
Test Case 7 passed!
Expected Output
[1]
Your Code's Output
[1]

Input(s)
{
  "array": [-1]
}
Test Case 8 passed!
Expected Output
[1, 4]
Your Code's Output
[1, 4]

Input(s)
{
  "array": [-2, -1]
}
Test Case 9 passed!
Expected Output
[1, 4, 9, 16, 25]
Your Code's Output
[1, 4, 9, 16, 25]

Input(s)
{
  "array": [-5, -4, -3, -2, -1]
}
Test Case 10 passed!
Expected Output
[100]
Your Code's Output
[100]

Input(s)
{
  "array": [-10]
}
Test Case 11 passed!
Expected Output
[0, 25, 25, 100, 100]
Your Code's Output
[0, 25, 25, 100, 100]

Input(s)
{
  "array": [-10, -5, 0, 5, 10]
}
Test Case 12 passed!
Expected Output
[1, 9, 49, 81, 484, 900]
Your Code's Output
[1, 9, 49, 81, 484, 900]

Input(s)
{
  "array": [-7, -3, 1, 9, 22, 30]
}
Test Case 13 passed!
Expected Output
[0, 0, 1, 1, 1, 4, 4, 9, 169, 361, 400, 2500]
Your Code's Output
[0, 0, 1, 1, 1, 4, 4, 9, 169, 361, 400, 2500]

Input(s)
{
  "array": [-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20]
}
Test Case 14 passed!
Expected Output
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
Your Code's Output
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

Input(s)
{
  "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
}
Test Case 15 passed!
Expected Output
[1, 1, 4, 9, 9, 9, 16]
Your Code's Output
[1, 1, 4, 9, 9, 9, 16]

Input(s)
{
  "array": [-1, -1, 2, 3, 3, 3, 4]
}
Test Case 16 passed!
Expected Output
[1, 4, 9]
Your Code's Output
[1, 4, 9]

Input(s)
{
  "array": [-3, -2, -1]
}
Test Case 17 passed!
Expected Output
[1, 4, 9]
Your Code's Output
[1, 4, 9]

Input(s)
{
  "array": [-3, -2, -1]
}
*/
