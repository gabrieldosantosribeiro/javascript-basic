/*
Create a function that calculates the sum of all elements in an array.
*/

function arraySum(arr) {
    return arr.reduce((acc, num) => acc + num, 0)
}
console.log(arraySum([1, 2, 3, 4]))