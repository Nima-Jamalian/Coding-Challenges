/* Question
Difficulty: Easy
Category: String

Question name
Caesar Cipher Encryptor
Given a non-empty string of lowercase letters and a non-negative integer representing a key, write a function that returns a new string obtained by shifting every letter in the input string by k positions in the alphabet, where k is the key.

Note that letters should "wrap" around the alphabet; in other words, the letter z shifted by one returns the letter a.

Sample Input
string = "xyz"
key = 2
Sample Output
"zab"


*/
//-----------------------------------------------------------------------------------------------
//Read this section if you could not solve the problem.
/* Hints + Optimal Space & Time Complexity
Hints
Hint 1
Most languages have built-in functions that give you the Unicode value of a character as well as the character corresponding to a Unicode value. Consider using such functions to determine which letters the input string's letters should be mapped to.

Hint 2
Try creating your own mapping of letters to codes. In other words, try associating each letter in the alphabet with a specific number - its position in the alphabet, for instance - and using that to determine which letters the input string's letters should be mapped to.

Hint 3
How do you handle cases where a letter gets shifted to a position that requires wrapping around the alphabet? What about cases where the key is very large and causes multiple wrappings around the alphabet? The modulo operator should be your friend here.

Optimal Space & Time Complexity
O(n) time | O(n) space - where n is the length of the input string
*/
//-----------------------------------------------------------------------------------------------
//Solution
function caesarCipherEncryptor(string, key) {
	let output = "";
	for(let char of string){
		//26 -> Number english aphabet characters
		let newCode = char.charCodeAt() + key % 26;
		if(newCode <= 122){
				output += String.fromCharCode(newCode);
		} else {
			//97 -> a UniCode
			//122 -> z UniCode
			output += String.fromCharCode(96 + (newCode%122));
		}
	}
	return output;
}
//-----------------------------------------------------------------------------------------------
/*
//Other Solution

// O(n) time | O(n) space
function caesarCipherEncryptor(string, key) {
  const newLetters = [];
  const newKey = key % 26;
  for (const letter of string) {
    newLetters.push(getNewLetter(letter, newKey));
  }
  return newLetters.join('');
}
function getNewLetter(letter, key) {
  const newLetterCode = letter.charCodeAt() + key;
  return newLetterCode <= 122 ? String.fromCharCode(newLetterCode) : String.fromCharCode(96 + (newLetterCode % 122));
}
//---
// O(n) time | O(n) space
function caesarCipherEncryptor(string, key) {
  const newLetters = [];
  const newKey = key % 26;
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  for (const letter of string) {
    newLetters.push(getNewLetter(letter, newKey, alphabet));
  }
  return newLetters.join('');
}
function getNewLetter(letter, key, alphabet) {
  const newLetterCode = alphabet.indexOf(letter) + key;
  return alphabet[newLetterCode % 26];
}
//---
*/
//-----------------------------------------------------------------------------------------------
//You can use these test cases to validate your solution
//Better to check this after you have attempted the challenge and confident in your answer
/* Test cases
Test Case 1
{
  "string": "xyz",
  "key": 2
}
Test Case 2
{
  "string": "abc",
  "key": 0
}
Test Case 3
{
  "string": "abc",
  "key": 3
}
Test Case 4
{
  "string": "xyz",
  "key": 5
}
Test Case 5
{
  "string": "abc",
  "key": 26
}
Test Case 6
{
  "string": "abc",
  "key": 52
}
Test Case 7
{
  "string": "abc",
  "key": 57
}
Test Case 8
{
  "string": "xyz",
  "key": 25
}
Test Case 9
{
  "string": "iwufqnkqkqoolxzzlzihqfm",
  "key": 25
}
Test Case 10
{
  "string": "ovmqkwtujqmfkao",
  "key": 52
}
Test Case 11
{
  "string": "mvklahvjcnbwqvtutmfafkwiuagjkzmzwgf",
  "key": 7
}
Test Case 12
{
  "string": "kjwmntauvjjnmsagwgawkagfuaugjhawgnawgjhawjgawbfawghesh",
  "key": 15
}
*/
//-----------------------------------------------------------------------------------------------
//Test Cases Solution, check after completing the challenge 
/*  Test Cases Result
12 / 12 test cases passed.

Test Case 1 passed!
Expected Output
zab
Your Code's Output
zab
View Outputs Side By Side
Input(s)
{
  "key": 2,
  "string": "xyz"
}
Test Case 2 passed!
Expected Output
abc
Your Code's Output
abc
View Outputs Side By Side
Input(s)
{
  "key": 0,
  "string": "abc"
}
Test Case 3 passed!
Expected Output
def
Your Code's Output
def
View Outputs Side By Side
Input(s)
{
  "key": 3,
  "string": "abc"
}
Test Case 4 passed!
Expected Output
cde
Your Code's Output
cde
View Outputs Side By Side
Input(s)
{
  "key": 5,
  "string": "xyz"
}
Test Case 5 passed!
Expected Output
abc
Your Code's Output
abc
View Outputs Side By Side
Input(s)
{
  "key": 26,
  "string": "abc"
}
Test Case 6 passed!
Expected Output
abc
Your Code's Output
abc
View Outputs Side By Side
Input(s)
{
  "key": 52,
  "string": "abc"
}
Test Case 7 passed!
Expected Output
fgh
Your Code's Output
fgh
View Outputs Side By Side
Input(s)
{
  "key": 57,
  "string": "abc"
}
Test Case 8 passed!
Expected Output
wxy
Your Code's Output
wxy
View Outputs Side By Side
Input(s)
{
  "key": 25,
  "string": "xyz"
}
Test Case 9 passed!
Expected Output
hvtepmjpjpnnkwyykyhgpel
Your Code's Output
hvtepmjpjpnnkwyykyhgpel
View Outputs Side By Side
Input(s)
{
  "key": 25,
  "string": "iwufqnkqkqoolxzzlzihqfm"
}
Test Case 10 passed!
Expected Output
ovmqkwtujqmfkao
Your Code's Output
ovmqkwtujqmfkao
View Outputs Side By Side
Input(s)
{
  "key": 52,
  "string": "ovmqkwtujqmfkao"
}
Test Case 11 passed!
Expected Output
tcrshocqjuidxcabatmhmrdpbhnqrgtgdnm
Your Code's Output
tcrshocqjuidxcabatmhmrdpbhnqrgtgdnm
View Outputs Side By Side
Input(s)
{
  "key": 7,
  "string": "mvklahvjcnbwqvtutmfafkwiuagjkzmzwgf"
}
Test Case 12 passed!
Expected Output
zylbcipjkyycbhpvlvplzpvujpjvywplvcplvywplyvplquplvwthw
Your Code's Output
zylbcipjkyycbhpvlvplzpvujpjvywplvcplvywplyvplquplvwthw
View Outputs Side By Side
Input(s)
{
  "key": 15,
  "string": "kjwmntauvjjnmsagwgawkagfuaugjhawgnawgjhawjgawbfawghesh"
}
*/
