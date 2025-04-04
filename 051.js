// Memoization: Implement a function that uses memoization to optimize the calculation of Fibonacci numbers.

function fibonacci(n, memo = {}) {
    console.log(memo)
    if (n in memo) {
        return memo[n]
    }

    if (n <= 1) {
        return n
    }

    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)

    return memo[n]
}