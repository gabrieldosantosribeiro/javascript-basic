// Mapping Function: Create a function that receives an array and a callback function and returns a new array with the results of applying the callback function to each element.

function mapArray(arr, callback) {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr))
    }

    return result
}