// Sort Function: Implement a function that sorts an array of objects based on a specific property.

function sortObjectsArray(arr, property) {
    return arr.sort((a, b) => {
        if (a[property] < b[property]) {
            return -1;
        }
        if (a[property] > b[property]) {
            return 1;
        }
        return 0;
    });
}