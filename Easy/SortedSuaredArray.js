/*
Difficulty: Easy
Category: Arrays

Sorted Squared Array

Write a function that takes in a non-empty array of integers that are sorted in
ascending order and returns a new array of the same length with the squares of the
original integers also sorted in ascending order.

Sample Input
array = [1, 2, 3, 5, 6, 8 ,9]

Sample Output
[1, 4, 9, 25, 36, 63, 81]
*/

//#region Hints
/*
Hint 1;
While the integers in the input array are sorted in increasing order, their squares
won't necessarily be as well, because of the possible presence of negative
numbers.


*/
//#endregion
//---------------------------------------------
//Solution
//Pseudocode


function sortedSquaredArray(array){
    const squaredArray = [];
    var hasNegetive = false;
    array.forEach(element => {
        if(element < 0){
            hasNegetive = true;
            console.log("has negetive");
        }
        squaredArray.push(element*element);
    });
    if(hasNegetive == false){
       
        return  squaredArray;
    } else {
        squaredArray.sort(function(a, b){return a-b});
        return squaredArray;
    }
}


var array = [-10,1, 2, 3, 5, 6, 8 ,9]
console.log(sortedSquaredArray(array));