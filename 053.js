// Function Chaining: Create a function that allows you to chain multiple transformation functions on an array.

function hoeTransformations(arr, ...functions) {
    return functions.reduce((result, fn) => {
        console.log(result, fn)
        return result.map(fn)
    }, arr)
}