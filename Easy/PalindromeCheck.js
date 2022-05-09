/* Question
Difficulty: Easy
Category: Strings

Question name
Palindrome Check
Write a function that takes in a non-empty string and that returns a boolean representing whether the string is a palindrome.

A palindrome is defined as a string that's written the same forward and backward. Note that single-character strings are palindromes.
Sample Input
string = "abcdcba"
Sample Output
true // it's written the same forward and backward
*/
//-----------------------------------------------------------------------------------------------
//Read this section if you could not solve the problem.
/* Hints + Optimal Space & Time Complexity
Hints
Hint 1
Start by building the input string in reverse order and comparing this newly built string to the input string. Can you do this without using string concatenations?

Hint 2
Can you optimize your algorithm by using recursion? What are the implications of recursion on an algorithm's space-time complexity analysis?

Hint 3
Go back to an iterative solution and try using pointers to solve this problem: start with a pointer at the first index of the string and a pointer at the final index of the string. What can you do from there?

Optimal Space & Time Complexity
O(n) time | O(1) space - where n is the length of the input string
*/
//-----------------------------------------------------------------------------------------------
//Solution
function isPalindrome(string) {
  // Write your code here.
  let char = [];

  for (let i = 0; i < string.length; i++) {
    char.push(string.charAt(i));
  }

  let idx = char.length;
  for (let i = 0; i < char.length; i++) {
    idx--;
    if (char[i] != char[idx]) {
      return false;
    }
  }
  return true;
}

/*Other Solutions
// O(n^2) time | O(n) space
function isPalindrome(string) {
  let reversedString = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }

  return string === reversedString;
}
//---
// O(n) time | O(n) space
function isPalindrome(string) {

  const reversedChars = [];

  for (let i = string.length - 1; i >= 0; i--) {

    reversedChars.push(string[i]);

  }

  return string === reversedChars.join('');

}

// O(n) time | O(n) space

function isPalindrome(string, i = 0) {

  const j = string.length - 1 - i;

  return i >= j ? true : string[i] === string[j] && isPalindrome(string, i + 1);

}
//---
// O(n) time | O(1) space

function isPalindrome(string) {

  let leftIdx = 0;

  let rightIdx = string.length - 1;

  while (leftIdx < rightIdx) {

    if (string[leftIdx] !== string[rightIdx]) return false;

    leftIdx++;

    rightIdx--;

  }

  return true;

}

*/

//-----------------------------------------------------------------------------------------------
//You can use these test cases to validate your solution
//Better to check this after you have attempted the challenge and confident in your answer
/* Test cases
Test Case 1
{
  "string": "abcdcba"
}
Test Case 2
{
  "string": "a"
}
Test Case 3
{
  "string": "ab"
}
Test Case 4
{
  "string": "aba"
}
Test Case 5
{
  "string": "abb"
}
Test Case 6
{
  "string": "abba"
}
Test Case 7
{
  "string": "abcdefghhgfedcba"
}
Test Case 8
{
  "string": "abcdefghihgfedcba"
}
Test Case 9
{
  "string": "abcdefghihgfeddcba"
}
*/
//-----------------------------------------------------------------------------------------------
//Test Cases Solution, check after completing the challenge
/*  Test Cases Result
9 / 9 test cases passed.

Test Case 1 passed!
Expected Output
true
Your Code's Output
true
View Outputs Side By Side
Input(s)
{
  "string": "abcdcba"
}
Test Case 2 passed!
Expected Output
true
Your Code's Output
true
View Outputs Side By Side
Input(s)
{
  "string": "a"
}
Test Case 3 passed!
Expected Output
false
Your Code's Output
false
View Outputs Side By Side
Input(s)
{
  "string": "ab"
}
Test Case 4 passed!
Expected Output
true
Your Code's Output
true
View Outputs Side By Side
Input(s)
{
  "string": "aba"
}
Test Case 5 passed!
Expected Output
false
Your Code's Output
false
View Outputs Side By Side
Input(s)
{
  "string": "abb"
}
Test Case 6 passed!
Expected Output
true
Your Code's Output
true
View Outputs Side By Side
Input(s)
{
  "string": "abba"
}
Test Case 7 passed!
Expected Output
true
Your Code's Output
true
View Outputs Side By Side
Input(s)
{
  "string": "abcdefghhgfedcba"
}
Test Case 8 passed!
Expected Output
true
Your Code's Output
true
View Outputs Side By Side
Input(s)
{
  "string": "abcdefghihgfedcba"
}
Test Case 9 passed!
Expected Output
false
Your Code's Output
false
View Outputs Side By Side
Input(s)
{
  "string": "abcdefghihgfeddcba"
}
*/
