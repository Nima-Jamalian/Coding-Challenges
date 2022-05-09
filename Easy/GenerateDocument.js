/* Question
Difficulty: Easy
Category: Strings

Question name
Generate Document
You're given a string of available characters and a string representing a document that you need to generate. Write a function that determines if you can generate the document using the available characters. If you can generate the document, your function should return true; otherwise, it should return false.

You're only able to generate the document if the frequency of unique characters in the characters string is greater than or equal to the frequency of unique characters in the document string. For example, if you're given characters = "abcabc" and document = "aabbccc" you cannot generate the document because you're missing one c.

The document that you need to create may contain any characters, including special characters, capital letters, numbers, and spaces.

Note: you can always generate the empty string ("").

Sample Input
characters = "Bste!hetsi ogEAxpelrt x "
document = "AlgoExpert is the Best!"
Sample Output
true

*/
//-----------------------------------------------------------------------------------------------
//Read this section if you could not solve the problem.
/* Hints + Optimal Space & Time Complexity
Hints
Hint 1
There are multiple ways to the solve this problem, but not all approaches have an optimal time complexity. Is there any way to solve this problem in better than O(m * (n + m)) or O(n * (n + m)) time, where n is the length of the characters string and m is the length of the document string?

Hint 2
One of the simplest ways to solve this problem is to loop through the document string, one character at a time. At every character, you can count how many times it occurs in the document string and in the characters string. If it occurs more times in the document string than in the characters string, then you cannot generate the document. What is the time complexity of this approach?

Hint 3
The approach discussed in Hint #2 runs in O(m * (n + m)) time. Can you use some external space to optimize this time complexity?

Hint 4
You can solve this problem in O(n + m) time. To do so, you need to use a hash table. Start by counting all of the characters in the characters string and storing these counts in a hash table. Then, loop through the document string, and check if each character is in the hash table and has a value greater than zero. If a character isn't in the hash table or doesn't have a value greater than zero, then you cannot generate the document. If a character is in the hash table and has a value greater than zero, then decrement its value in the hash table to indicate that you've "used" one of these available characters. If you make it through the entire document string without returning false, then you can generate the document.

Optimal Space & Time Complexity
O(n + m) time | O(c) space - where n is the number of characters, m is the length of the document, and c is the number of unique characters in the characters string
*/
//-----------------------------------------------------------------------------------------------
//Solution
function generateDocument(characters, document) {
    // Write your code here.
      let charLength = characters.length;
      let docLength = document.length;
      let map = new Map();
      for(let i=0; i <charLength; i++){
              if(map.has(characters.charAt(i)) == true){
                  let count = map.get(characters.charAt(i)) + 1;
                  map.set(characters.charAt(i), count);
              } else {
                  map.set(characters.charAt(i), 1);
              }
      }
      
   for(let i=0; i < docLength; i++){
              if(map.has(document.charAt(i)) == true){
                  let count = map.get(document.charAt(i))-1;
                  map.set(document.charAt(i), count);
                  if(map.get(document.charAt(i)) == 0){
                  map.delete(document.charAt(i));
                  }
              } else {
                  return false;
              }
       }
      return true;
  }

/*
//Other Solutions 
// O(m * (n + m)) time | O(1) space - where n is the number
// of characters and m is the length of the document
function generateDocument(characters, document) {
  for (const character of document) {
    const documentFrequency = countCharacterFrequency(character, document);
    const charactersFrequency = countCharacterFrequency(character, characters);
    if (documentFrequency > charactersFrequency) return false;
  }​
  return true;
}
function countCharacterFrequency(character, target) {6
  let frequency = 0;
  for (const char of target) {
    if (char === character) frequency++;
  }
  return frequency;
}

//-------

// O(c * (n + m)) time | O(c) space - where n is the number of characters, m is
// the length of the document, and c is the number of unique characters in the document
function generateDocument(characters, document) {
  const alreadyCounted = new Set();
  for (const character of document) {
    if (character in alreadyCounted) continue;
    const documentFrequency = countCharacterFrequency(character, document);
    const charactersFrequency = countCharacterFrequency(character, characters);
    if (documentFrequency > charactersFrequency) return false;
    alreadyCounted.add(character);
  }
  return true;
}
function countCharacterFrequency(character, target) {
  let frequency = 0;
  for (const char of target) {
    if (char === character) frequency++;
  }
  return frequency;
}

//-------
// O(n + m) time | O(c) space - where n is the number of characters, m is
// the length of the document, and c is the number of unique characters in the characters string
function generateDocument(characters, document) {
  const characterCounts = {};
  for (const character of characters) {
    if (!(character in characterCounts)) characterCounts[character] = 0;
    characterCounts[character]++;
  }
  for (const character of document) {
    if (!(character in characterCounts) || characterCounts[character] === 0) return false;
    characterCounts[character]--;
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
  "characters": "Bste!hetsi ogEAxpelrt x ",
  "document": "AlgoExpert is the Best!"
}
Test Case 2
{
  "characters": "A",
  "document": "a"
}
Test Case 3
{
  "characters": "a",
  "document": "a"
}
Test Case 4
{
  "characters": "a hsgalhsa sanbjksbdkjba kjx",
  "document": ""
}
Test Case 5
{
  "characters": " ",
  "document": "hello"
}
Test Case 6
{
  "characters": "     ",
  "document": "     "
}
Test Case 7
{
  "characters": "aheaollabbhb",
  "document": "hello"
}
Test Case 8
{
  "characters": "aheaolabbhb",
  "document": "hello"
}
Test Case 9
{
  "characters": "estssa",
  "document": "testing"
}
Test Case 10
{
  "characters": "Bste!hetsi ogEAxpert",
  "document": "AlgoExpert is the Best!"
}
Test Case 11
{
  "characters": "helloworld ",
  "document": "hello wOrld"
}
Test Case 12
{
  "characters": "helloworldO",
  "document": "hello wOrld"
}
Test Case 13
{
  "characters": "helloworldO ",
  "document": "hello wOrld"
}
Test Case 14
{
  "characters": "&*&you^a%^&8766 _=-09     docanCMakemthisdocument",
  "document": "Can you make this document &"
}
Test Case 15
{
  "characters": "abcabcabcacbcdaabc",
  "document": "bacaccadac"
}
*/
//-----------------------------------------------------------------------------------------------
//Test Cases Solution, check after completing the challenge 
/*  Test Cases Result
15 / 15 test cases passed.

Test Case 1 passed!
Expected Output
true
Your Code's Output
true
View Outputs Side By Side
Input(s)
{
  "characters": "Bste!hetsi ogEAxpelrt x ",
  "document": "AlgoExpert is the Best!"
}
Test Case 2 passed!
Expected Output
false
Your Code's Output
false
View Outputs Side By Side
Input(s)
{
  "characters": "A",
  "document": "a"
}
Test Case 3 passed!
Expected Output
true
Your Code's Output
true
View Outputs Side By Side
Input(s)
{
  "characters": "a",
  "document": "a"
}
Test Case 4 passed!
Expected Output
true
Your Code's Output
true
View Outputs Side By Side
Input(s)
{
  "characters": "a hsgalhsa sanbjksbdkjba kjx",
  "document": ""
}
Test Case 5 passed!
Expected Output
false
Your Code's Output
false
View Outputs Side By Side
Input(s)
{
  "characters": " ",
  "document": "hello"
}
Test Case 6 passed!
Expected Output
true
Your Code's Output
true
View Outputs Side By Side
Input(s)
{
  "characters": "     ",
  "document": "     "
}
Test Case 7 passed!
Expected Output
true
Your Code's Output
true
View Outputs Side By Side
Input(s)
{
  "characters": "aheaollabbhb",
  "document": "hello"
}
Test Case 8 passed!
Expected Output
false
Your Code's Output
false
View Outputs Side By Side
Input(s)
{
  "characters": "aheaolabbhb",
  "document": "hello"
}
Test Case 9 passed!
Expected Output
false
Your Code's Output
false
View Outputs Side By Side
Input(s)
{
  "characters": "estssa",
  "document": "testing"
}
Test Case 10 passed!
Expected Output
false
Your Code's Output
false
View Outputs Side By Side
Input(s)
{
  "characters": "Bste!hetsi ogEAxpert",
  "document": "AlgoExpert is the Best!"
}
Test Case 11 passed!
Expected Output
false
Your Code's Output
false
View Outputs Side By Side
Input(s)
{
  "characters": "helloworld ",
  "document": "hello wOrld"
}
Test Case 12 passed!
Expected Output
false
Your Code's Output
false
View Outputs Side By Side
Input(s)
{
  "characters": "helloworldO",
  "document": "hello wOrld"
}
Test Case 13 passed!
Expected Output
true
Your Code's Output
true
View Outputs Side By Side
Input(s)
{
  "characters": "helloworldO ",
  "document": "hello wOrld"
}
Test Case 14 passed!
Expected Output
true
Your Code's Output
true
View Outputs Side By Side
Input(s)
{
  "characters": "&*&you^a%^&8766 _=-09     docanCMakemthisdocument",
  "document": "Can you make this document &"
}
Test Case 15 passed!
Expected Output
true
Your Code's Output
true
View Outputs Side By Side
Input(s)
{
  "characters": "abcabcabcacbcdaabc",
  "document": "bacaccadac"
}
*/
