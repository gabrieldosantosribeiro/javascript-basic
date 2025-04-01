// Element Count Function: Create a function that counts the occurrence of an element in an array.

function countElement(arr, ele) {
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ele) {
            count++
        }
    }

    return count
}