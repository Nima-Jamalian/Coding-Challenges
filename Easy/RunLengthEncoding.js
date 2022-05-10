/* Question
Difficulty: Easy
Category: Strings

Question name
Run-Length Encoding
Write a function that takes in a non-empty string and returns its run-length encoding.

From Wikipedia, "run-length encoding is a form of lossless data compression in which runs of data are stored as a single data value and count, rather than as the original run." For this problem, a run of data is any sequence of consecutive, identical characters. So the run "AAA" would be run-length-encoded as "3A".

To make things more complicated, however, the input string can contain all sorts of special characters, including numbers. And since encoded data must be decodable, this means that we can't naively run-length-encode long runs. For example, the run "AAAAAAAAAAAA" (12 As), can't naively be encoded as "12A", since this string can be decoded as either "AAAAAAAAAAAA" or "1AA". Thus, long runs (runs of 10 or more characters) should be encoded in a split fashion; the aforementioned run should be encoded as "9A3A".

Sample Input
string = "AAAAAAAAAAAAABBCCCCDD"
Sample Output
"9A4A2B4C2D"

*/
//-----------------------------------------------------------------------------------------------
//Read this section if you could not solve the problem.
/* Hints + Optimal Space & Time Complexity
Hints
Hint 1
Traverse the input string and count the length of each run. As you traverse the string, what should you do when you reach a run of length 9 or the end of a run?

Hint 2
When you reach a run of length 9 or the end of a run, store the computed count for the run as well as its character (you'll likely need a list for these computed counts and characters), and reset the count to 1 before continuing to traverse the string.

Hint 3
Make sure that your solution correctly handles the last run in the string.

Optimal Space & Time Complexity
O(n) time | O(n) space - where n is the length of the input string
*/
//-----------------------------------------------------------------------------------------------
//Solution
function runLengthEncoding(string) {
    // Write your code here.
      let output = "";
      let count =0;
      for(let i=0;i<string.length;i++){
          let currentChar = string[i];
          let previouseChar = string[i-1];
          if(i == 0){
              previouseChar = currentChar;
          }
          if(currentChar !== previouseChar || count == 9){
              output += count + previouseChar;
              count = 0;
          }
          count++;
      }
      //Handle the last case.
      output += count + string[string.length-1];
      
      console.log(output);
      return output;
  }
//-----------------------------------------------------------------------------------------------
/*
//Other Solution

// O(n) time | O(n) space - where n is the length of the input string
function runLengthEncoding(string) {
  // The input string is guaranteed to be non-empty,
  // so our first run will be of at least length 1.
  const encodedStringCharacters = [];
  let currentRunLength = 1;
  for (let i = 1; i < string.length; i++) {
    const currentCharacter = string[i];
    const previousCharacter = string[i - 1];
    if (currentCharacter !== previousCharacter || currentRunLength === 9) {
      encodedStringCharacters.push(currentRunLength.toString());
      encodedStringCharacters.push(previousCharacter);
      currentRunLength = 0;
    }
    currentRunLength++;
  }
  // Handle the last run.
  encodedStringCharacters.push(currentRunLength.toString());
  encodedStringCharacters.push(string[string.length - 1]);
  return encodedStringCharacters.join('');
}
//---

//---
*/
//-----------------------------------------------------------------------------------------------
//You can use these test cases to validate your solution
//Better to check this after you have attempted the challenge and confident in your answer
/* Test cases
Test Case 1
{
  "string": "AAAAAAAAAAAAABBCCCCDD"
}
Test Case 2
{
  "string": "aA"
}
Test Case 3
{
  "string": "122333"
}
Test Case 4
{
  "string": "************^^^^^^^$$$$$$%%%%%%%!!!!!!AAAAAAAAAAAAAAAAAAAA"
}
Test Case 5
{
  "string": "aAaAaaaaaAaaaAAAABbbbBBBB"
}
Test Case 6
{
  "string": "                          "
}
Test Case 7
{
  "string": "1  222 333    444  555"
}
Test Case 8
{
  "string": "1A2BB3CCC4DDDD"
}
Test Case 9
{
  "string": "........______=========AAAA   AAABBBB   BBB"
}
Test Case 10
{
  "string": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
}
Test Case 11
{
  "string": "        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
}
Test Case 12
{
  "string": " "
}
Test Case 13
{
  "string": "[(aaaaaaa,bbbbbbb,ccccc,dddddd)]"
}
Test Case 14
{
  "string": ";;;;;;;;;;;;''''''''''''''''''''1233333332222211112222111s"
}
Test Case 15
{
  "string": "AAAAAAAAAAAAABBCCCCDDDDDDDDDDD"
}
*/
//-----------------------------------------------------------------------------------------------
//Test Cases Solution, check after completing the challenge 
/*  Test Cases Result
15 / 15 test cases passed.

Test Case 1 passed!
Expected Output
9A4A2B4C2D
Your Code's Output
9A4A2B4C2D
View Outputs Side By Side
Input(s)
{
  "string": "AAAAAAAAAAAAABBCCCCDD"
}
Test Case 2 passed!
Expected Output
1a1A
Your Code's Output
1a1A
View Outputs Side By Side
Input(s)
{
  "string": "aA"
}
Test Case 3 passed!
Expected Output
112233
Your Code's Output
112233
View Outputs Side By Side
Input(s)
{
  "string": "122333"
}
Test Case 4 passed!
Expected Output
9*3*7^6$7%6!9A9A2A
Your Code's Output
9*3*7^6$7%6!9A9A2A
View Outputs Side By Side
Input(s)
{
  "string": "************^^^^^^^$$$$$$%%%%%%%!!!!!!AAAAAAAAAAAAAAAAAAAA"
}
Test Case 5 passed!
Expected Output
1a1A1a1A5a1A3a4A1B3b4B
Your Code's Output
1a1A1a1A5a1A3a4A1B3b4B
View Outputs Side By Side
Input(s)
{
  "string": "aAaAaaaaaAaaaAAAABbbbBBBB"
}
Test Case 6 passed!
Expected Output
9 9 8 
Your Code's Output
9 9 8 
View Outputs Side By Side
Input(s)
{
  "string": "                          "
}
Test Case 7 passed!
Expected Output
112 321 334 342 35
Your Code's Output
112 321 334 342 35
View Outputs Side By Side
Input(s)
{
  "string": "1  222 333    444  555"
}
Test Case 8 passed!
Expected Output
111A122B133C144D
Your Code's Output
111A122B133C144D
View Outputs Side By Side
Input(s)
{
  "string": "1A2BB3CCC4DDDD"
}
Test Case 9 passed!
Expected Output
8.6_9=4A3 3A4B3 3B
Your Code's Output
8.6_9=4A3 3A4B3 3B
View Outputs Side By Side
Input(s)
{
  "string": "........______=========AAAA   AAABBBB   BBB"
}
Test Case 10 passed!
Expected Output
9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a1a
Your Code's Output
9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a1a
View Outputs Side By Side
Input(s)
{
  "string": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
}
Test Case 11 passed!
Expected Output
8 9a9a9a9a9a4a
Your Code's Output
8 9a9a9a9a9a4a
View Outputs Side By Side
Input(s)
{
  "string": "        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
}
Test Case 12 passed!
Expected Output
1 
Your Code's Output
1 
View Outputs Side By Side
Input(s)
{
  "string": " "
}
Test Case 13 passed!
Expected Output
1[1(7a1,7b1,5c1,6d1)1]
Your Code's Output
1[1(7a1,7b1,5c1,6d1)1]
View Outputs Side By Side
Input(s)
{
  "string": "[(aaaaaaa,bbbbbbb,ccccc,dddddd)]"
}
Test Case 14 passed!
Expected Output
9;3;9'9'2'111273524142311s
Your Code's Output
9;3;9'9'2'111273524142311s
View Outputs Side By Side
Input(s)
{
  "string": ";;;;;;;;;;;;''''''''''''''''''''1233333332222211112222111s"
}
Test Case 15 passed!
Expected Output
9A4A2B4C9D2D
Your Code's Output
9A4A2B4C9D2D
View Outputs Side By Side
Input(s)
{
  "string": "AAAAAAAAAAAAABBCCCCDDDDDDDDDDD"
}
*/
