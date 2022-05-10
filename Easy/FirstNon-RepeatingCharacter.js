/* Question
Difficulty: Easy
Category: Strings

Question name
First Non-Repeating Character
Write a function that takes in a string of lowercase English-alphabet letters and returns the index of the string's first non-repeating character.

The first non-repeating character is the first character in a string that occurs only once.

If the input string doesn't have any non-repeating characters, your function should return -1.

Sample Input
string = "abcdcaf"
Sample Output
1 // The first non-repeating character is "b" and is found at index 1.
*/
//-----------------------------------------------------------------------------------------------
//Read this section if you could not solve the problem.
/* Hints + Optimal Space & Time Complexity
Hints
Hint 1
How can you determine if a character only appears once in the entire input string? What would be the brute-force approach to solve this problem?

Hint 2
One way to solve this problem is with nested traversals of the string: you start by traversing the string, and for each character that you traverse, you traverse through the entire string again to see if the character appears anywhere else. The first index at which you find a character that doesn't appear anywhere else in the string is the index that you return. This approach works, but it's not optimal. Are there any data structures that you can use to improve the time complexity of this approach?

Hint 3
Hash tables are very commonly used to keep track of frequencies. Build a hash table, where every key is a character in the string and every value is the corresponding character's frequency in the input string. You can traverse the entire string once to fill the hash table, and then with a second traversal through the string (not a nested traversal), you can use the hash table's constant-time lookups to find the first character with a frequency of 1.

Optimal Space & Time Complexity
O(n) time | O(1) space - where n is the length of the input string The constant space is because the input string only has lowercase English-alphabet letters; thus, our hash table will never have more than 26 character frequencies.
*/
//-----------------------------------------------------------------------------------------------
//Solution
function firstNonRepeatingCharacter(string) {
  // Write your code here.
	let map = new Map();
	for(let i=0; i<string.length; i++){
		if(map.has(string.charAt(i)) == true){
			let count = map.get(string.charAt(i))[0] + 1;
			map.set(string.charAt(i), [count,i]);
		} else {
			map.set(string.charAt(i), [1,i]);
		}
	}
	for(let [key,[value,index]] of map){
		//console.log(key + " " + value + " " + index);
		if(value == 1){
			return index;
		}
	}
  return -1;
}
//-----------------------------------------------------------------------------------------------
/*
//Other Solution

//---
// O(n^2) time | O(1) space - where n is the length of the input string
function firstNonRepeatingCharacter(string) {
  for (let idx = 0; idx < string.length; idx++) {
    let foundDuplicate = false;
    for (let idx2 = 0; idx2 < string.length; idx2++) {
      if (string[idx] === string[idx2] && idx !== idx2) foundDuplicate = true;
    }​
    if (!foundDuplicate) return idx;
  }
  return -1;
}
//---
// O(n) time | O(1) space - where n is the length of the input string
// The constant space is because the input string only has lowercase
// English-alphabet letters; thus, our hash table will never have more
// than 26 character frequencies.
function firstNonRepeatingCharacter(string) {
  const characterFrequencies = {};
  for (const character of string) {
    if (!(character in characterFrequencies)) characterFrequencies[character] = 0;
    characterFrequencies[character]++;
  }
  for (let idx = 0; idx < string.length; idx++) {
    const character = string[idx];
    if (characterFrequencies[character] === 1) return idx;
  }
  return -1;
}
*/
//-----------------------------------------------------------------------------------------------
//You can use these test cases to validate your solution
//Better to check this after you have attempted the challenge and confident in your answer
/* Test cases
Test Case 1
{
  "string": "abcdcaf"
}
Test Case 2
{
  "string": "faadabcbbebdf"
}
Test Case 3
{
  "string": "a"
}
Test Case 4
{
  "string": "ab"
}
Test Case 5
{
  "string": "abc"
}
Test Case 6
{
  "string": "abac"
}
Test Case 7
{
  "string": "ababac"
}
Test Case 8
{
  "string": "ababacc"
}
Test Case 9
{
  "string": "lmnopqldsafmnopqsa"
}
Test Case 10
{
  "string": "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxy"
}
Test Case 11
{
  "string": "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"
}
Test Case 12
{
  "string": ""
}
Test Case 13
{
  "string": "ggyllaylacrhdzedddjsc"
}
Test Case 14
{
  "string": "aaaaaaaaaaaaaaaaaaaabbbbbbbbbbcccccccccccdddddddddddeeeeeeeeffghgh"
}
Test Case 15
{
  "string": "aabbccddeeff"
}
*/
//-----------------------------------------------------------------------------------------------
//Test Cases Solution, check after completing the challenge 
/*  Test Cases Result
15 / 15 test cases passed.

Test Case 1 passed!
Expected Output
1
Your Code's Output
1
View Outputs Side By Side
Input(s)
{
  "string": "abcdcaf"
}
Test Case 2 passed!
Expected Output
6
Your Code's Output
6
View Outputs Side By Side
Input(s)
{
  "string": "faadabcbbebdf"
}
Test Case 3 passed!
Expected Output
0
Your Code's Output
0
View Outputs Side By Side
Input(s)
{
  "string": "a"
}
Test Case 4 passed!
Expected Output
0
Your Code's Output
0
View Outputs Side By Side
Input(s)
{
  "string": "ab"
}
Test Case 5 passed!
Expected Output
0
Your Code's Output
0
View Outputs Side By Side
Input(s)
{
  "string": "abc"
}
Test Case 6 passed!
Expected Output
1
Your Code's Output
1
View Outputs Side By Side
Input(s)
{
  "string": "abac"
}
Test Case 7 passed!
Expected Output
5
Your Code's Output
5
View Outputs Side By Side
Input(s)
{
  "string": "ababac"
}
Test Case 8 passed!
Expected Output
-1
Your Code's Output
-1
View Outputs Side By Side
Input(s)
{
  "string": "ababacc"
}
Test Case 9 passed!
Expected Output
7
Your Code's Output
7
View Outputs Side By Side
Input(s)
{
  "string": "lmnopqldsafmnopqsa"
}
Test Case 10 passed!
Expected Output
25
Your Code's Output
25
View Outputs Side By Side
Input(s)
{
  "string": "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxy"
}
Test Case 11 passed!
Expected Output
-1
Your Code's Output
-1
View Outputs Side By Side
Input(s)
{
  "string": "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"
}
Test Case 12 passed!
Expected Output
-1
Your Code's Output
-1
View Outputs Side By Side
Input(s)
{
  "string": ""
}
Test Case 13 passed!
Expected Output
10
Your Code's Output
10
View Outputs Side By Side
Input(s)
{
  "string": "ggyllaylacrhdzedddjsc"
}
Test Case 14 passed!
Expected Output
-1
Your Code's Output
-1
View Outputs Side By Side
Input(s)
{
  "string": "aaaaaaaaaaaaaaaaaaaabbbbbbbbbbcccccccccccdddddddddddeeeeeeeeffghgh"
}
Test Case 15 passed!
Expected Output
-1
Your Code's Output
-1
View Outputs Side By Side
Input(s)
{
  "string": "aabbccddeeff"
}
*/
