// Vowel Count Function: Implement a function that counts how many vowels there are in a string.

function countVowels(str) {
    str = str.split('')
    vowels = 0
    for (let i of str) {
        if ('aeiouAEIOU'.includes(i)) {
            vowels++
        }
    }
    return vowels
}