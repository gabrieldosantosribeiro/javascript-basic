/*
Create a function that checks if a number is in an array.
*/

function isInArray(num, array) {
    return array.includes(num)
}
console.log(isInArray(3, [1, 2, 3, 4]))