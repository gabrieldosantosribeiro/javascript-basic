/*
Create a function that multiplies all the elements of an array.
*/

function multiplyArray(arr) {
    return arr.reduce((acc, num) => acc * num, 1)
}
console.log(multiplyArray([1, 2, 3, 4]))