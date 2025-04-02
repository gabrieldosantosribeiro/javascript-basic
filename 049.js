// Reduction Function: Create a function that takes an array and a callback function and returns a single value resulting from applying the callback function to all elements.

function reduceArray(arr, callback) {
    let result = arr.reduce(callback())

    return result
}