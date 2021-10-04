/* Question
Difficulty: Easy
Category: Binary Search Trees

Branch Sums

Write a function that takes in a Binary Tree and returns a list of its branch sums ordered from leftmost branch sum to rightmost branch sum.

A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree branch is a path of nodes in a tree that starts at the root node and ends at any leaf node.

Each BinaryTree node has an integer value, a left child node, and a right child node. Children nodes can either be BinaryTree nodes themselves or None / null.

Sample Input
tree =     1
        /     \
       2       3
     /   \    /  \
    4     5  6    7
  /   \  /
 8    9 10
Sample Output
[15, 16, 18, 10, 11]
// 15 == 1 + 2 + 4 + 8
// 16 == 1 + 2 + 4 + 9
// 18 == 1 + 2 + 5 + 10
// 10 == 1 + 3 + 6
// 11 == 1 + 3 + 7
*/
//-----------------------------------------------------------------------------------------------
//Read this section if you could not solve the problem.
/* Hints + Optimal Space & Time Complexity
Hint 1
Try traversing the Binary Tree in a depth-first-search-like fashion.

Hint 2
Recursively traverse the Binary Tree in a depth-first-search-like fashion, and pass a running sum of the values of every previously-visited node to each node that you're traversing.

Hint 3
As you recursively traverse the tree, if you reach a leaf node (a node with no "left" or "right" Binary Tree nodes), add the relevant running sum that you've calculated to a list of sums (which you'll also have to pass to the recursive function). If you reach a node that isn't a leaf node, keep recursively traversing its children nodes, passing the correctly updated running sum to them.

Optimal Space & Time Complexity
O(n) time | O(n) space - where n is the number of nodes in the Binary Tree
*/
//-----------------------------------------------------------------------------------------------
//Solution
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function branchSums(root) {
    // Write your code here.
      const sums = [];
      calculateBranchSums(root, 0,sums);
      return sums;
  }
  
  function calculateBranchSums(node, runningSum,sums){
      if(node == null){
          return;
      }
      const newRunningSum = runningSum + node.value;
      if(node.left == null && node.right == null){
          sums.push(newRunningSum);
          return;
      }
      
      calculateBranchSums(node.left, newRunningSum,sums);
      calculateBranchSums(node.right, newRunningSum,sums);
  }

//-----------------------------------------------------------------------------------------------
//You can use these test cases to validate your solution
//Better to check this after you have attempted the challenge and confident in your answer
/* Test cases
Test Case 1
{
  "tree": {
    "nodes": [
      {"id": "1", "left": "2", "right": "3", "value": 1},
      {"id": "2", "left": "4", "right": "5", "value": 2},
      {"id": "3", "left": "6", "right": "7", "value": 3},
      {"id": "4", "left": "8", "right": "9", "value": 4},
      {"id": "5", "left": "10", "right": null, "value": 5},
      {"id": "6", "left": null, "right": null, "value": 6},
      {"id": "7", "left": null, "right": null, "value": 7},
      {"id": "8", "left": null, "right": null, "value": 8},
      {"id": "9", "left": null, "right": null, "value": 9},
      {"id": "10", "left": null, "right": null, "value": 10}
    ],
    "root": "1"
  }
}
Test Case 2
{
  "tree": {
    "nodes": [
      {"id": "1", "left": null, "right": null, "value": 1}
    ],
    "root": "1"
  }
}
Test Case 3
{
  "tree": {
    "nodes": [
      {"id": "1", "left": "2", "right": null, "value": 1},
      {"id": "2", "left": null, "right": null, "value": 2}
    ],
    "root": "1"
  }
}
Test Case 4
{
  "tree": {
    "nodes": [
      {"id": "1", "left": "2", "right": "3", "value": 1},
      {"id": "2", "left": null, "right": null, "value": 2},
      {"id": "3", "left": null, "right": null, "value": 3}
    ],
    "root": "1"
  }
}
Test Case 5
{
  "tree": {
    "nodes": [
      {"id": "1", "left": "2", "right": "3", "value": 1},
      {"id": "2", "left": "4", "right": "5", "value": 2},
      {"id": "3", "left": null, "right": null, "value": 3},
      {"id": "4", "left": null, "right": null, "value": 4},
      {"id": "5", "left": null, "right": null, "value": 5}
    ],
    "root": "1"
  }
}
Test Case 6
{
  "tree": {
    "nodes": [
      {"id": "1", "left": "2", "right": "3", "value": 1},
      {"id": "2", "left": "4", "right": "5", "value": 2},
      {"id": "3", "left": "6", "right": "7", "value": 3},
      {"id": "4", "left": "8", "right": "9", "value": 4},
      {"id": "5", "left": "10", "right": "1-2", "value": 5},
      {"id": "6", "left": "1-3", "right": "1-4", "value": 6},
      {"id": "7", "left": null, "right": null, "value": 7},
      {"id": "8", "left": null, "right": null, "value": 8},
      {"id": "9", "left": null, "right": null, "value": 9},
      {"id": "10", "left": null, "right": null, "value": 10},
      {"id": "1-2", "left": null, "right": null, "value": 1},
      {"id": "1-3", "left": null, "right": null, "value": 1},
      {"id": "1-4", "left": null, "right": null, "value": 1}
    ],
    "root": "1"
  }
}
Test Case 7
{
  "tree": {
    "nodes": [
      {"id": "0", "left": "1", "right": null, "value": 0},
      {"id": "1", "left": "10", "right": null, "value": 1},
      {"id": "10", "left": "100", "right": null, "value": 10},
      {"id": "100", "left": null, "right": null, "value": 100}
    ],
    "root": "0"
  }
}
Test Case 8
{
  "tree": {
    "nodes": [
      {"id": "0", "left": null, "right": "1", "value": 0},
      {"id": "1", "left": null, "right": "10", "value": 1},
      {"id": "10", "left": null, "right": "100", "value": 10},
      {"id": "100", "left": null, "right": null, "value": 100}
    ],
    "root": "0"
  }
}
Test Case 9
{
  "tree": {
    "nodes": [
      {"id": "0", "left": "9", "right": "1", "value": 0},
      {"id": "9", "left": null, "right": null, "value": 9},
      {"id": "1", "left": "15", "right": "10", "value": 1},
      {"id": "15", "left": null, "right": null, "value": 15},
      {"id": "10", "left": "100", "right": "200", "value": 10},
      {"id": "100", "left": null, "right": null, "value": 100},
      {"id": "200", "left": null, "right": null, "value": 200}
    ],
    "root": "0"
  }
}
*/
//-----------------------------------------------------------------------------------------------
//Test Cases Solution, check after completing the challenge 
/*  Test Cases Result
Test Case 1 passed!
Expected Output
[15, 16, 18, 10, 11]
Your Code's Output
[15, 16, 18, 10, 11]

Input(s)
{
  "tree": {
    "nodes": [
      {"id": "1", "left": "2", "right": "3", "value": 1},
      {"id": "2", "left": "4", "right": "5", "value": 2},
      {"id": "3", "left": "6", "right": "7", "value": 3},
      {"id": "4", "left": "8", "right": "9", "value": 4},
      {"id": "5", "left": "10", "right": null, "value": 5},
      {"id": "6", "left": null, "right": null, "value": 6},
      {"id": "7", "left": null, "right": null, "value": 7},
      {"id": "8", "left": null, "right": null, "value": 8},
      {"id": "9", "left": null, "right": null, "value": 9},
      {"id": "10", "left": null, "right": null, "value": 10}
    ],
    "root": "1"
  }
}
Test Case 2 passed!
Expected Output
[1]
Your Code's Output
[1]

Input(s)
{
  "tree": {
    "nodes": [
      {"id": "1", "left": null, "right": null, "value": 1}
    ],
    "root": "1"
  }
}
Test Case 3 passed!
Expected Output
[3]
Your Code's Output
[3]

Input(s)
{
  "tree": {
    "nodes": [
      {"id": "1", "left": "2", "right": null, "value": 1},
      {"id": "2", "left": null, "right": null, "value": 2}
    ],
    "root": "1"
  }
}
Test Case 4 passed!
Expected Output
[3, 4]
Your Code's Output
[3, 4]

Input(s)
{
  "tree": {
    "nodes": [
      {"id": "1", "left": "2", "right": "3", "value": 1},
      {"id": "2", "left": null, "right": null, "value": 2},
      {"id": "3", "left": null, "right": null, "value": 3}
    ],
    "root": "1"
  }
}
Test Case 5 passed!
Expected Output
[7, 8, 4]
Your Code's Output
[7, 8, 4]

Input(s)
{
  "tree": {
    "nodes": [
      {"id": "1", "left": "2", "right": "3", "value": 1},
      {"id": "2", "left": "4", "right": "5", "value": 2},
      {"id": "3", "left": null, "right": null, "value": 3},
      {"id": "4", "left": null, "right": null, "value": 4},
      {"id": "5", "left": null, "right": null, "value": 5}
    ],
    "root": "1"
  }
}
Test Case 6 passed!
Expected Output
[15, 16, 18, 9, 11, 11, 11]
Your Code's Output
[15, 16, 18, 9, 11, 11, 11]

Input(s)
{
  "tree": {
    "nodes": [
      {"id": "1", "left": "2", "right": "3", "value": 1},
      {"id": "2", "left": "4", "right": "5", "value": 2},
      {"id": "3", "left": "6", "right": "7", "value": 3},
      {"id": "4", "left": "8", "right": "9", "value": 4},
      {"id": "5", "left": "10", "right": "1-2", "value": 5},
      {"id": "6", "left": "1-3", "right": "1-4", "value": 6},
      {"id": "7", "left": null, "right": null, "value": 7},
      {"id": "8", "left": null, "right": null, "value": 8},
      {"id": "9", "left": null, "right": null, "value": 9},
      {"id": "10", "left": null, "right": null, "value": 10},
      {"id": "1-2", "left": null, "right": null, "value": 1},
      {"id": "1-3", "left": null, "right": null, "value": 1},
      {"id": "1-4", "left": null, "right": null, "value": 1}
    ],
    "root": "1"
  }
}
Test Case 7 passed!
Expected Output
[111]
Your Code's Output
[111]

Input(s)
{
  "tree": {
    "nodes": [
      {"id": "0", "left": "1", "right": null, "value": 0},
      {"id": "1", "left": "10", "right": null, "value": 1},
      {"id": "10", "left": "100", "right": null, "value": 10},
      {"id": "100", "left": null, "right": null, "value": 100}
    ],
    "root": "0"
  }
}
Test Case 8 passed!
Expected Output
[111]
Your Code's Output
[111]

Input(s)
{
  "tree": {
    "nodes": [
      {"id": "0", "left": null, "right": "1", "value": 0},
      {"id": "1", "left": null, "right": "10", "value": 1},
      {"id": "10", "left": null, "right": "100", "value": 10},
      {"id": "100", "left": null, "right": null, "value": 100}
    ],
    "root": "0"
  }
}
Test Case 9 passed!
Expected Output
[9, 16, 111, 211]
Your Code's Output
[9, 16, 111, 211]

Input(s)
{
  "tree": {
    "nodes": [
      {"id": "0", "left": "9", "right": "1", "value": 0},
      {"id": "9", "left": null, "right": null, "value": 9},
      {"id": "1", "left": "15", "right": "10", "value": 1},
      {"id": "15", "left": null, "right": null, "value": 15},
      {"id": "10", "left": "100", "right": "200", "value": 10},
      {"id": "100", "left": null, "right": null, "value": 100},
      {"id": "200", "left": null, "right": null, "value": 200}
    ],
    "root": "0"
  }
}
*/
