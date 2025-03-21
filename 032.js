// Fibonacci Function: Create a function that returns the n-th number in the Fibonacci sequence.

function fibonacci(n){
    if (n <= 0) {
        return "input should be a positive integer"
    }
    if (n == 1) {
        return 0
    }
    if (n == 2) {
        return 1
    }

    let a = 0, b = 1
    for (let i = 2; i < n; i++) {
        let temp = a
        a = b
        b = temp + b
    }
    return b
}