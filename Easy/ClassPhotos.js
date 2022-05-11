/* Question
Difficulty: Easy
Category: Greedy Algorithms

Question name
Class Photos
It's photo day at the local school, and you're the photographer assigned to take class photos. The class that you'll be photographing has an even number of students, and all these students are wearing red or blue shirts. In fact, exactly half of the class is wearing red shirts, and the other half is wearing blue shirts. You're responsible for arranging the students in two rows before taking the photo. Each row should contain the same number of the students and should adhere to the following guidelines:

All students wearing red shirts must be in the same row.
All students wearing blue shirts must be in the same row.
Each student in the back row must be strictly taller than the student directly in front of them in the front row.
You're given two input arrays: one containing the heights of all the students with red shirts and another one containing the heights of all the students with blue shirts. These arrays will always have the same length, and each height will be a positive integer. Write a function that returns whether or not a class photo that follows the stated guidelines can be taken.

Note: you can assume that each class has at least 2 students.

Sample Input
redShirtHeights = [5, 8, 1, 3, 4]
blueShirtHeights = [6, 9, 2, 4, 5]
Sample Output
true // Place all students with blue shirts in the back row.
*/
//-----------------------------------------------------------------------------------------------
//Read this section if you could not solve the problem.
/* Hints + Optimal Space & Time Complexity
Hints
Hint 1
Start by determining which row will have the students wearing blue shirts and which row will have the students wearing red shirts. Once you know this, how can you determine if it's possible to take the photo?

Hint 2
The shirt color of the tallest student will determine which students need to be placed in the back row. The tallest student can't be placed in the front row because there's no student taller than them who can be placed behind them.

Hint 3
Once you know which students should be placed in each row, you can simply check if each student in the back row can be paired with a student in the front row who is shorter than them. If you can't find a satisfactory pairing for every student in the back row, then you can't take the photo.

Hint 4
Sort each input array in descending order, then determine which students will be in the front and back rows following Hint #2. After this, simply loop through your sorted input arrays, and check if the current tallest student in the back row is taller than the current tallest student in the front row. If you find that the current tallest student (one that has yet to be placed) in the back row isn't taller than the current tallest student in the front row, then the photo can't be taken.

Optimal Space & Time Complexity
O(nlog(n)) time | O(1) space - where n is the number of students
*/
//-----------------------------------------------------------------------------------------------
//Solution
function classPhotos(redShirtHeights, blueShirtHeights) {
    // Write your code here.
      redShirtHeights.sort((a,b) => b - a);
      blueShirtHeights.sort((a,b) => b - a);
      
      let firsRowColour;
      if(redShirtHeights[0] < blueShirtHeights[0]){
              firsRowColour = "Red";
          } else {
              firsRowColour= "Blue";
      }
  
      for(let i=0; i<redShirtHeights.length; i++){
          if(firsRowColour == "Red"){
                  if(redShirtHeights[i] >= blueShirtHeights[i]){
                      return false;
                  }
          } else {
                  if(blueShirtHeights[i] >= redShirtHeights[i]){
                      return false;
          }
       }
    }
      return true;
  }
//-----------------------------------------------------------------------------------------------
/*
//Other Solution
function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort((a, b) => b - a);
  blueShirtHeights.sort((a, b) => b - a);
  const shirtColorInFirstRow = redShirtHeights[0] < blueShirtHeights[0] ? 'RED' : 'BLUE';
  for (let idx = 0; idx < redShirtHeights.length; idx++) {
    const redShirtHeight = redShirtHeights[idx];
    const blueShirtHeight = blueShirtHeights[idx];
    if (shirtColorInFirstRow === 'RED') {
      if (redShirtHeight >= blueShirtHeight) return false;
    } else if (blueShirtHeight >= redShirtHeight) return false;
  }
  return true;
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
  "redShirtHeights": [5, 8, 1, 3, 4],
  "blueShirtHeights": [6, 9, 2, 4, 5]
}
Test Case 2
{
  "redShirtHeights": [6, 9, 2, 4, 5],
  "blueShirtHeights": [5, 8, 1, 3, 4]
}
Test Case 3
{
  "redShirtHeights": [6, 9, 2, 4, 5, 1],
  "blueShirtHeights": [5, 8, 1, 3, 4, 9]
}
Test Case 4
{
  "redShirtHeights": [6],
  "blueShirtHeights": [6]
}
Test Case 5
{
  "redShirtHeights": [126],
  "blueShirtHeights": [125]
}
Test Case 6
{
  "redShirtHeights": [1, 2, 3, 4, 5],
  "blueShirtHeights": [2, 3, 4, 5, 6]
}
Test Case 7
{
  "redShirtHeights": [1, 1, 1, 1, 1, 1, 1, 1],
  "blueShirtHeights": [5, 6, 7, 2, 3, 1, 2, 3]
}
Test Case 8
{
  "redShirtHeights": [1, 1, 1, 1, 1, 1, 1, 1],
  "blueShirtHeights": [2, 2, 2, 2, 2, 2, 2, 2]
}
Test Case 9
{
  "redShirtHeights": [125],
  "blueShirtHeights": [126]
}
Test Case 10
{
  "redShirtHeights": [19, 2, 4, 6, 2, 3, 1, 1, 4],
  "blueShirtHeights": [21, 5, 4, 4, 4, 4, 4, 4, 4]
}
Test Case 11
{
  "redShirtHeights": [19, 19, 21, 1, 1, 1, 1, 1],
  "blueShirtHeights": [20, 5, 4, 4, 4, 4, 4, 4]
}
Test Case 12
{
  "redShirtHeights": [3, 5, 6, 8, 2],
  "blueShirtHeights": [2, 4, 7, 5, 1]
}
Test Case 13
{
  "redShirtHeights": [3, 5, 6, 8, 2, 1],
  "blueShirtHeights": [2, 4, 7, 5, 1, 6]
}
Test Case 14
{
  "redShirtHeights": [4, 5],
  "blueShirtHeights": [5, 4]
}
Test Case 15
{
  "redShirtHeights": [5, 6],
  "blueShirtHeights": [5, 4]
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
  "blueShirtHeights": [6, 9, 2, 4, 5],
  "redShirtHeights": [5, 8, 1, 3, 4]
}
Test Case 2 passed!
Expected Output
true
Your Code's Output
true
View Outputs Side By Side
Input(s)
{
  "blueShirtHeights": [5, 8, 1, 3, 4],
  "redShirtHeights": [6, 9, 2, 4, 5]
}
Test Case 3 passed!
Expected Output
false
Your Code's Output
false
View Outputs Side By Side
Input(s)
{
  "blueShirtHeights": [5, 8, 1, 3, 4, 9],
  "redShirtHeights": [6, 9, 2, 4, 5, 1]
}
Test Case 4 passed!
Expected Output
false
Your Code's Output
false
View Outputs Side By Side
Input(s)
{
  "blueShirtHeights": [6],
  "redShirtHeights": [6]
}
Test Case 5 passed!
Expected Output
true
Your Code's Output
true
View Outputs Side By Side
Input(s)
{
  "blueShirtHeights": [125],
  "redShirtHeights": [126]
}
Test Case 6 passed!
Expected Output
true
Your Code's Output
true
View Outputs Side By Side
Input(s)
{
  "blueShirtHeights": [2, 3, 4, 5, 6],
  "redShirtHeights": [1, 2, 3, 4, 5]
}
Test Case 7 passed!
Expected Output
false
Your Code's Output
false
View Outputs Side By Side
Input(s)
{
  "blueShirtHeights": [5, 6, 7, 2, 3, 1, 2, 3],
  "redShirtHeights": [1, 1, 1, 1, 1, 1, 1, 1]
}
Test Case 8 passed!
Expected Output
true
Your Code's Output
true
View Outputs Side By Side
Input(s)
{
  "blueShirtHeights": [2, 2, 2, 2, 2, 2, 2, 2],
  "redShirtHeights": [1, 1, 1, 1, 1, 1, 1, 1]
}
Test Case 9 passed!
Expected Output
true
Your Code's Output
true
View Outputs Side By Side
Input(s)
{
  "blueShirtHeights": [126],
  "redShirtHeights": [125]
}
Test Case 10 passed!
Expected Output
false
Your Code's Output
false
View Outputs Side By Side
Input(s)
{
  "blueShirtHeights": [21, 5, 4, 4, 4, 4, 4, 4, 4],
  "redShirtHeights": [19, 2, 4, 6, 2, 3, 1, 1, 4]
}
Test Case 11 passed!
Expected Output
false
Your Code's Output
false
View Outputs Side By Side
Input(s)
{
  "blueShirtHeights": [20, 5, 4, 4, 4, 4, 4, 4],
  "redShirtHeights": [19, 19, 21, 1, 1, 1, 1, 1]
}
Test Case 12 passed!
Expected Output
true
Your Code's Output
true
View Outputs Side By Side
Input(s)
{
  "blueShirtHeights": [2, 4, 7, 5, 1],
  "redShirtHeights": [3, 5, 6, 8, 2]
}
Test Case 13 passed!
Expected Output
false
Your Code's Output
false
View Outputs Side By Side
Input(s)
{
  "blueShirtHeights": [2, 4, 7, 5, 1, 6],
  "redShirtHeights": [3, 5, 6, 8, 2, 1]
}
Test Case 14 passed!
Expected Output
false
Your Code's Output
false
View Outputs Side By Side
Input(s)
{
  "blueShirtHeights": [5, 4],
  "redShirtHeights": [4, 5]
}
Test Case 15 passed!
Expected Output
true
Your Code's Output
true
View Outputs Side By Side
Input(s)
{
  "blueShirtHeights": [5, 4],
  "redShirtHeights": [5, 6]
}
*/
