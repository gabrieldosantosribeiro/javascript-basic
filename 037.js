// Average Function: Create a function that calculates the average of an array of numbers.

function calculateAvarage(arr) {
    sum = arr.reduce((acc, current) => acc + current, 0)
    return sum / arr.length
}