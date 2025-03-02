/*
Create a function that calculates the factorial of a number.
*/

function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1)
}
console.log(factorial(5))