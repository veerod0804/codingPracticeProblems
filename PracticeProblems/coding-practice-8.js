// Create a function that takes two strings as arguments and returns the number of times the first string (the single character) 
// is found in the second string.

// Examples
// charCount("a", "edabit") ➞ 1

// charCount("c", "Chamber of secrets") ➞ 1

// charCount("b", "big fat bubble") ➞ 4
// Notes
// Your output must be case-sensitive (see second example).
let sum = 0;

function findNumberOfChar(chosenChar, someString) {

    for (let i = 0; i < someString.length; i++) {
        if (someString[i] === chosenChar) {
            sum += 1;
        }
    }
    return sum;
}

console.log(findNumberOfChar("b", "big fat bubble"));