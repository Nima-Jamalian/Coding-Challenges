/*
Difficulty: Easy
Category: Arrays

Two Number Sum

Write a function that takes in a non-empty array of distinct integers and an integer
representing a target sum. If any two numbers in the input array sum up to the target
sum, the function should return them in an array, in any order. If no two numbers sum
up to the target sum, the function should return an empty array.
Note that the target sum has to be obtained by summing two different integers in the
array; you can't add a single integer to itself in order to obtain the target sum.
You can assume that there will be at most one pair of numbers summing up to the
target sum.

Sample Input 
array = [3,5,-4,8,11,1,-1,6]
targetSum = 10

Sample Output
[-1,11] //the numbers could be in revers order
*/
//---------------------------------------------
//Solution
//Pseudocode
//index[0] + index[1] = result
    //if result = targetSum
        //return [index[0],[1]]
    //Else
        //index[0] + index[2]
        //...

//Code
function TwoNumberSum(array,targetSum) {
 var index = 0;
 for(index; index < array.length; index++){
    for(var i = index ;i <array.length-1; i++){
        if(array[index] + array[i+1] == targetSum){
           return console.log([array[index],array[i+1]]);
        }
    }
 }
 return console.log([]);
}

TwoNumberSum([3, 5, -4, 8, 11, 1, -1, 6],15);