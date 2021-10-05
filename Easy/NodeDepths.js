/* Question
Difficulty: Easy
Category: Binary Search Trees

Node Depths

The distance between a node in a Binary Tree and the tree's root is called the node's depth.

Write a function that takes in a Binary Tree and returns the sum of its nodes' depths.

Each BinaryTree node has an integer value, a left child node, and a right child node. Children nodes can either be BinaryTree nodes themselves or None / null.

Sample Input
tree =    1
       /     \
      2       3
    /   \   /   \
   4     5 6     7
 /   \
8     9
Sample Output
16
// The depth of the node with value 2 is 1.
// The depth of the node with value 3 is 1.
// The depth of the node with value 4 is 2.
// The depth of the node with value 5 is 2.
// Etc..
// Summing all of these depths yields 16.

*/
//-----------------------------------------------------------------------------------------------
//Read this section if you could not solve the problem.
/* Hints + Optimal Space & Time Complexity
Hints
Hint 1
As obvious as it may seem, to solve this question, you'll have to figure out how to compute the depth of any given node; once you know how to do that, you can compute all of the depths and add them up to obtain the desired output.

Hint 2
To compute the depth of a given node, you need information about its position in the tree. Can you pass this information down from the node's parent?

Hint 3
The depth of any node in the tree is equal to the depth of its parent node plus 1. By starting at the root node whose depth is 0, you can pass down to every node in the tree its respective depth, and you can implement the algorithm that does this and that sums up all of the depths either recursively or iteratively.

Optimal Space & Time Complexity
Average case: when the tree is balanced O(n) time | O(h) space - where n is the number of nodes in the Binary Tree and h is the height of the Binary Tree
*/
//-----------------------------------------------------------------------------------------------
//Solution
function nodeDepths(root,depth = 0) {
    // Write your code here.
      if(root == null) return 0;
      return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right,depth + 1);
      
  }
  
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
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
      {"id": "5", "left": null, "right": null, "value": 5},
      {"id": "6", "left": null, "right": null, "value": 6},
      {"id": "7", "left": null, "right": null, "value": 7},
      {"id": "8", "left": null, "right": null, "value": 8},
      {"id": "9", "left": null, "right": null, "value": 9}
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
      {"id": "2", "left": "4", "right": null, "value": 2},
      {"id": "3", "left": null, "right": null, "value": 3},
      {"id": "4", "left": null, "right": null, "value": 4}
    ],
    "root": "1"
  }
}
Test Case 6
{
  "tree": {
    "nodes": [
      {"id": "1", "left": "2", "right": null, "value": 1},
      {"id": "2", "left": "3", "right": null, "value": 2},
      {"id": "3", "left": "4", "right": null, "value": 3},
      {"id": "4", "left": "5", "right": null, "value": 4},
      {"id": "5", "left": "6", "right": null, "value": 5},
      {"id": "6", "left": null, "right": "7", "value": 6},
      {"id": "7", "left": null, "right": null, "value": 7}
    ],
    "root": "1"
  }
}
Test Case 7
{
  "tree": {
    "nodes": [
      {"id": "1", "left": "2", "right": "8", "value": 1},
      {"id": "2", "left": "3", "right": null, "value": 2},
      {"id": "3", "left": "4", "right": null, "value": 3},
      {"id": "4", "left": "5", "right": null, "value": 4},
      {"id": "5", "left": "6", "right": null, "value": 5},
      {"id": "6", "left": null, "right": "7", "value": 6},
      {"id": "7", "left": null, "right": null, "value": 7},
      {"id": "8", "left": null, "right": "9", "value": 8},
      {"id": "9", "left": null, "right": "10", "value": 9},
      {"id": "10", "left": null, "right": "11", "value": 10},
      {"id": "11", "left": null, "right": "12", "value": 11},
      {"id": "12", "left": "13", "right": null, "value": 12},
      {"id": "13", "left": null, "right": null, "value": 13}
    ],
    "root": "1"
  }
}
Test Case 8
{
  "tree": {
    "nodes": [
      {"id": "1", "left": "2", "right": "3", "value": 1},
      {"id": "2", "left": "4", "right": "5", "value": 2},
      {"id": "3", "left": "6", "right": "7", "value": 3},
      {"id": "4", "left": "8", "right": "9", "value": 4},
      {"id": "5", "left": null, "right": null, "value": 5},
      {"id": "6", "left": "10", "right": null, "value": 6},
      {"id": "7", "left": null, "right": null, "value": 7},
      {"id": "8", "left": null, "right": null, "value": 8},
      {"id": "9", "left": null, "right": null, "value": 9},
      {"id": "10", "left": null, "right": "11", "value": 10},
      {"id": "11", "left": "12", "right": "13", "value": 11},
      {"id": "12", "left": "14", "right": null, "value": 12},
      {"id": "13", "left": "15", "right": "16", "value": 13},
      {"id": "14", "left": null, "right": null, "value": 14},
      {"id": "15", "left": null, "right": null, "value": 15},
      {"id": "16", "left": null, "right": null, "value": 16}
    ],
    "root": "1"
  }
}
Test Case 9
{
  "tree": {
    "nodes": [
      {"id": "1", "left": "2", "right": null, "value": 1},
      {"id": "2", "left": "3", "right": null, "value": 2},
      {"id": "3", "left": "4", "right": null, "value": 3},
      {"id": "4", "left": "5", "right": null, "value": 4},
      {"id": "5", "left": "6", "right": null, "value": 5},
      {"id": "6", "left": "7", "right": null, "value": 6},
      {"id": "7", "left": "8", "right": null, "value": 7},
      {"id": "8", "left": "9", "right": null, "value": 8},
      {"id": "9", "left": null, "right": null, "value": 9}
    ],
    "root": "1"
  }
}
*/
//-----------------------------------------------------------------------------------------------
//Test Cases Solution, check after completing the challenge 
/*  Test Cases Result
Test Case 1 passed!
Expected Output
16
Your Code's Output
16

Input(s)
{
  "tree": {
    "nodes": [
      {"id": "1", "left": "2", "right": "3", "value": 1},
      {"id": "2", "left": "4", "right": "5", "value": 2},
      {"id": "3", "left": "6", "right": "7", "value": 3},
      {"id": "4", "left": "8", "right": "9", "value": 4},
      {"id": "5", "left": null, "right": null, "value": 5},
      {"id": "6", "left": null, "right": null, "value": 6},
      {"id": "7", "left": null, "right": null, "value": 7},
      {"id": "8", "left": null, "right": null, "value": 8},
      {"id": "9", "left": null, "right": null, "value": 9}
    ],
    "root": "1"
  }
}
Test Case 2 passed!
Expected Output
0
Your Code's Output
0

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
1
Your Code's Output
1

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
2
Your Code's Output
2

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
4
Your Code's Output
4

Input(s)
{
  "tree": {
    "nodes": [
      {"id": "1", "left": "2", "right": "3", "value": 1},
      {"id": "2", "left": "4", "right": null, "value": 2},
      {"id": "3", "left": null, "right": null, "value": 3},
      {"id": "4", "left": null, "right": null, "value": 4}
    ],
    "root": "1"
  }
}
Test Case 6 passed!
Expected Output
21
Your Code's Output
21

Input(s)
{
  "tree": {
    "nodes": [
      {"id": "1", "left": "2", "right": null, "value": 1},
      {"id": "2", "left": "3", "right": null, "value": 2},
      {"id": "3", "left": "4", "right": null, "value": 3},
      {"id": "4", "left": "5", "right": null, "value": 4},
      {"id": "5", "left": "6", "right": null, "value": 5},
      {"id": "6", "left": null, "right": "7", "value": 6},
      {"id": "7", "left": null, "right": null, "value": 7}
    ],
    "root": "1"
  }
}
Test Case 7 passed!
Expected Output
42
Your Code's Output
42

Input(s)
{
  "tree": {
    "nodes": [
      {"id": "1", "left": "2", "right": "8", "value": 1},
      {"id": "2", "left": "3", "right": null, "value": 2},
      {"id": "3", "left": "4", "right": null, "value": 3},
      {"id": "4", "left": "5", "right": null, "value": 4},
      {"id": "5", "left": "6", "right": null, "value": 5},
      {"id": "6", "left": null, "right": "7", "value": 6},
      {"id": "7", "left": null, "right": null, "value": 7},
      {"id": "8", "left": null, "right": "9", "value": 8},
      {"id": "9", "left": null, "right": "10", "value": 9},
      {"id": "10", "left": null, "right": "11", "value": 10},
      {"id": "11", "left": null, "right": "12", "value": 11},
      {"id": "12", "left": "13", "right": null, "value": 12},
      {"id": "13", "left": null, "right": null, "value": 13}
    ],
    "root": "1"
  }
}
Test Case 8 passed!
Expected Output
51
Your Code's Output
51

Input(s)
{
  "tree": {
    "nodes": [
      {"id": "1", "left": "2", "right": "3", "value": 1},
      {"id": "2", "left": "4", "right": "5", "value": 2},
      {"id": "3", "left": "6", "right": "7", "value": 3},
      {"id": "4", "left": "8", "right": "9", "value": 4},
      {"id": "5", "left": null, "right": null, "value": 5},
      {"id": "6", "left": "10", "right": null, "value": 6},
      {"id": "7", "left": null, "right": null, "value": 7},
      {"id": "8", "left": null, "right": null, "value": 8},
      {"id": "9", "left": null, "right": null, "value": 9},
      {"id": "10", "left": null, "right": "11", "value": 10},
      {"id": "11", "left": "12", "right": "13", "value": 11},
      {"id": "12", "left": "14", "right": null, "value": 12},
      {"id": "13", "left": "15", "right": "16", "value": 13},
      {"id": "14", "left": null, "right": null, "value": 14},
      {"id": "15", "left": null, "right": null, "value": 15},
      {"id": "16", "left": null, "right": null, "value": 16}
    ],
    "root": "1"
  }
}
Test Case 9 passed!
Expected Output
36
Your Code's Output
36

Input(s)
{
  "tree": {
    "nodes": [
      {"id": "1", "left": "2", "right": null, "value": 1},
      {"id": "2", "left": "3", "right": null, "value": 2},
      {"id": "3", "left": "4", "right": null, "value": 3},
      {"id": "4", "left": "5", "right": null, "value": 4},
      {"id": "5", "left": "6", "right": null, "value": 5},
      {"id": "6", "left": "7", "right": null, "value": 6},
      {"id": "7", "left": "8", "right": null, "value": 7},
      {"id": "8", "left": "9", "right": null, "value": 8},
      {"id": "9", "left": null, "right": null, "value": 9}
    ],
    "root": "1"
  }
}
*/
