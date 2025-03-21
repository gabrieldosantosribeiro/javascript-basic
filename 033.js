// Palindrome Function: Create a function that checks if a string is a palindrome.

function reverse(str) {
    return str.split('').reverse().join('')
}

function palindrome(str) {
    if (str == reverse(str)) {
        return "it's a palindrome"
    } else {
        return "it is not a palindrome"
    }
}