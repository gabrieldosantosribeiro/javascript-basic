/*
Create a recursive function that calculates the factorial of a number.
*/

function factorial(n) {
    if (n === 0) return 1
    return n * factorial(n - 1)
}
console.log(factorial(5))