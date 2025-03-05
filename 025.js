/*
Create a function that counts how many numbers there are in an array.
*/

function contNumbers(arr) {
    return arr.filter(item => typeof item === 'number').length
}
console.log(contNumbers([1, "text", 3, 4, true]))