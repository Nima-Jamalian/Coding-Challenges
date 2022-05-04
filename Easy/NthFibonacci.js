

  /* Question
Difficulty: Easy
Category: Recursion

Question name
Nth Fibonacci
The Fibonacci sequence is defined as follows: the first number of the sequence is 0, the second number is 1, and the nth number is the sum of the (n - 1)th and (n - 2)th numbers. Write a function that takes in an integer n and returns the nth Fibonacci number.

Important note: the Fibonacci sequence is often defined with its first two numbers as F0 = 0 and F1 = 1. For the purpose of this question, the first Fibonacci number is F0; therefore, getNthFib(1) is equal to F0, getNthFib(2) is equal to F1, etc.

Sample Input #1
n = 2
Sample Output #1
1 // 0, 1
Sample Input #2
n = 6
Sample Output #2
5 // 0, 1, 1, 2, 3, 5

*/
//-----------------------------------------------------------------------------------------------
//Read this section if you could not solve the problem.
/* Hints + Optimal Space & Time Complexity
Hint 1
The formula to generate the nth Fibonacci number can be written as follows: F(n) = F(n - 1) + F(n - 2). Think of the case(s) for which this formula doesn't apply (the base case(s)) and try to implement a simple recursive algorithm to find the nth Fibonacci number with this formula.

Hint 2
What are the runtime implications of solving this problem as is described in Hint #1? Can you use memoization (caching) to improve the performance of your algorithm?

Hint 3
Realize that to calculate any single Fibonacci number you only need to have the two previous Fibonacci numbers. Knowing this, can you implement an iterative algorithm to solve this question, storing only the last two Fibonacci numbers at any given time?

Optimal Space & Time Complexity
O(n) time | O(1) space - where n is the input number
*/
//-----------------------------------------------------------------------------------------------
//Solution
// O(2^n) time | O(n) space
function getNthFib(n) {
    // Write your code here.
      if(n==2){
          return 1;
      } else if(n==1){
          return 0;
      } else {
          return getNthFib(n-1)+ getNthFib(n-2);
      } 
  }
  let input = 6;
  console.log(getNthFib(input));
  /*
  Other Solutions
  // O(n) time | O(n) space
  function getNthFib(n, memoize = {1: 0, 2: 1}) {
  if (n in memoize) {
    return memoize[n];
  } else {
    memoize[n] = getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize);
    return memoize[n];
  }
}
-----------
// O(n) time | O(1) space
function getNthFib(n) {
  const lastTwo = [0, 1];
  let counter = 3;
  while (counter <= n) {
    const nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    counter++;
  }
  return n > 1 ? lastTwo[1] : lastTwo[0];
}
  */
//-----------------------------------------------------------------------------------------------
//You can use these test cases to validate your solution
//Better to check this after you have attempted the challenge and confident in your answer
/* Test cases
Test Case 1
{
  "n": 6
}
Test Case 2
{
  "n": 1
}
Test Case 3
{
  "n": 2
}
Test Case 4
{
  "n": 3
}
Test Case 5
{
  "n": 4
}
Test Case 6
{
  "n": 5
}
Test Case 7
{
  "n": 7
}
Test Case 8
{
  "n": 8
}
Test Case 9
{
  "n": 9
}
Test Case 10
{
  "n": 10
}
Test Case 11
{
  "n": 11
}
Test Case 12
{
  "n": 12
}
Test Case 13
{
  "n": 13
}
Test Case 14
{
  "n": 14
}
Test Case 15
{
  "n": 15
}
Test Case 16
{
  "n": 16
}
Test Case 17
{
  "n": 17
}
Test Case 18
{
  "n": 18
}
*/
//-----------------------------------------------------------------------------------------------
//Test Cases Solution, check after completing the challenge 
/*  Test Cases Result
18 / 18 test cases passed.

Test Case 1 passed!
Expected Output
5
Your Code's Output
5
View Outputs Side By Side
Input(s)
{
  "n": 6
}
Test Case 2 passed!
Expected Output
0
Your Code's Output
0
View Outputs Side By Side
Input(s)
{
  "n": 1
}
Test Case 3 passed!
Expected Output
1
Your Code's Output
1
View Outputs Side By Side
Input(s)
{
  "n": 2
}
Test Case 4 passed!
Expected Output
1
Your Code's Output
1
View Outputs Side By Side
Input(s)
{
  "n": 3
}
Test Case 5 passed!
Expected Output
2
Your Code's Output
2
View Outputs Side By Side
Input(s)
{
  "n": 4
}
Test Case 6 passed!
Expected Output
3
Your Code's Output
3
View Outputs Side By Side
Input(s)
{
  "n": 5
}
Test Case 7 passed!
Expected Output
8
Your Code's Output
8
View Outputs Side By Side
Input(s)
{
  "n": 7
}
Test Case 8 passed!
Expected Output
13
Your Code's Output
13
View Outputs Side By Side
Input(s)
{
  "n": 8
}
Test Case 9 passed!
Expected Output
21
Your Code's Output
21
View Outputs Side By Side
Input(s)
{
  "n": 9
}
Test Case 10 passed!
Expected Output
34
Your Code's Output
34
View Outputs Side By Side
Input(s)
{
  "n": 10
}
Test Case 11 passed!
Expected Output
55
Your Code's Output
55
View Outputs Side By Side
Input(s)
{
  "n": 11
}
Test Case 12 passed!
Expected Output
89
Your Code's Output
89
View Outputs Side By Side
Input(s)
{
  "n": 12
}
Test Case 13 passed!
Expected Output
144
Your Code's Output
144
View Outputs Side By Side
Input(s)
{
  "n": 13
}
Test Case 14 passed!
Expected Output
233
Your Code's Output
233
View Outputs Side By Side
Input(s)
{
  "n": 14
}
Test Case 15 passed!
Expected Output
377
Your Code's Output
377
View Outputs Side By Side
Input(s)
{
  "n": 15
}
Test Case 16 passed!
Expected Output
610
Your Code's Output
610
View Outputs Side By Side
Input(s)
{
  "n": 16
}
Test Case 17 passed!
Expected Output
987
Your Code's Output
987
View Outputs Side By Side
Input(s)
{
  "n": 17
}
Test Case 18 passed!
Expected Output
1597
Your Code's Output
1597
View Outputs Side By Side
Input(s)
{
  "n": 18
}
*/
