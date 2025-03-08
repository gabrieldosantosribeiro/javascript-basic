/*
Create a function that returns the smallest and largest numbers in an array.
*/

function minMax(arr) {
    return { min: Math.min(...arr), max: Math.max(...arr) }
}
console.log(minMax([1, 2, 3, 4, 5]))