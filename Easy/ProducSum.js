/* Question
Difficulty: Easy
Category: Recursion

Question name
Product Sum
Write a function that takes in a "special" array and returns its product sum.

A "special" array is a non-empty array that contains either integers or other "special" arrays. The product sum of a "special" array is the sum of its elements, where "special" arrays inside it are summed themselves and then multiplied by their level of depth.

The depth of a "special" array is how far nested it is. For instance, the depth of [] is 1; the depth of the inner array in [[]] is 2; the depth of the innermost array in [[[]]] is 3.

Therefore, the product sum of [x, y] is x + y; the product sum of [x, [y, z]] is x + 2 * (y + z); the product sum of [x, [y, [z]]] is x + 2 * (y + 3z).

Sample Input
array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
Sample Output
12 // calculated as: 5 + 2 + 2 * (7 - 1) + 3 + 2 * (6 + 3 * (-13 + 8) + 4)
*/
//-----------------------------------------------------------------------------------------------
//Read this section if you could not solve the problem.
/* Hints + Optimal Space & Time Complexity
Hints
Hint 1
Try using recursion to solve this problem.

Hint 2
Initialize the product sum of the "special" array to 0. Then, iterate through all of the array's elements; if you come across a number, add it to the product sum; if you come across another "special" array, recursively call the productSum function on it and add the returned value to the product sum. How will you handle multiplying the product sums at a given level of depth?

Hint 3
Have the productSum function take in a second parameter: the multiplier, initialized to 1. Whenever you recursively call the productSum function, pass in the multiplier incremented by 1.

Optimal Space & Time Complexity
O(n) time | O(d) space - where n is the total number of elements in the array, including sub-elements, and d is the greatest depth of "special" arrays in the array
*/
//-----------------------------------------------------------------------------------------------
//Solution
function productSum(array, multiplier = 1) {
    // Write your code here.
      let sum = 0;
      for(let i=0; i<array.length; i++){
          if(Array.isArray(array[i])){
                sum += productSum(array[i],multiplier + 1);
          } else{
                sum += array[i];
          }
      }
      return sum * multiplier;
  }

//-----------------------------------------------------------------------------------------------
//You can use these test cases to validate your solution
//Better to check this after you have attempted the challenge and confident in your answer
/* Test cases
Test Case 1
{
  "array": [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
}
Test Case 2
{
  "array": [1, 2, 3, 4, 5]
}
Test Case 3
{
  "array": [1, 2, [3], 4, 5]
}
Test Case 4
{
  "array": [
    [1, 2],
    3,
    [4, 5]
  ]
}
Test Case 5
{
  "array": [
    [
      [
        [
          [5]
        ]
      ]
    ]
  ]
}
Test Case 6
{
  "array": [9, [2, -3, 4], 1, [1, 1, [1, 1, 1]], [[[[3, 4, 1]]], 8], [1, 2, 3, 4, 5, [6, 7], -7], [1, [2, 3, [4, 5]], [6, 0, [7, 0, -8]], -7], [1, -3, 2, [1, -3, 2, [1, -3, 2], [1, -3, 2, [1, -3, 2]], [1, -3, 2]]], -3]
}
*/
//-----------------------------------------------------------------------------------------------
//Test Cases Solution, check after completing the challenge 
/*  Test Cases Result
6 / 6 test cases passed.

Test Case 1 passed!
Expected Output
12
Your Code's Output
12
View Outputs Side By Side
Input(s)
{
  "array": [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
}
Test Case 2 passed!
Expected Output
15
Your Code's Output
15
View Outputs Side By Side
Input(s)
{
  "array": [1, 2, 3, 4, 5]
}
Test Case 3 passed!
Expected Output
18
Your Code's Output
18
View Outputs Side By Side
Input(s)
{
  "array": [1, 2, [3], 4, 5]
}
Test Case 4 passed!
Expected Output
27
Your Code's Output
27
View Outputs Side By Side
Input(s)
{
  "array": [
    [1, 2],
    3,
    [4, 5]
  ]
}
Test Case 5 passed!
Expected Output
600
Your Code's Output
600
View Outputs Side By Side
Input(s)
{
  "array": [
    [
      [
        [
          [5]
        ]
      ]
    ]
  ]
}
Test Case 6 passed!
Expected Output
1351
Your Code's Output
1351
View Outputs Side By Side
Input(s)
{
  "array": [9, [2, -3, 4], 1, [1, 1, [1, 1, 1]], [[[[3, 4, 1]]], 8], [1, 2, 3, 4, 5, [6, 7], -7], [1, [2, 3, [4, 5]], [6, 0, [7, 0, -8]], -7], [1, -3, 2, [1, -3, 2, [1, -3, 2], [1, -3, 2, [1, -3, 2]], [1, -3, 2]]], -3]
}
*/
