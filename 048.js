// Filtering Function: Implement a function that filters elements of an array based on a condition defined in a callback function.

function filterArray(arr, callback) {
    let result = arr.filter(callback())

    return result
}