// Value Swap Function: Implement a function that swaps the values ​​of two variables.

function swapValue(a, b) {
    let temp = a
    a = b
    b = temp
    return [a, b]
}