// Substring Function: Write a function that returns a substring of a given string.

function returnSubstrings(str, start, end) {
    if (start < 0 || end > str.length || start >= end) {
        return 'invalid indices'
    } else {
        return str.slice(start, end)
    }
}