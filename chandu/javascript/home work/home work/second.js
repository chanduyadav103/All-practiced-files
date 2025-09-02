const storage = "chanduyadav"
console.log(storage.length)

console.log('----------------------------')

let list = "chandu is a very smart guy in ";
let fruits = list.split(" ");

console.log(fruits);

console.log('----------------------------')

// Write a function isLong(str, minLength) that returns true if str has at least minLength characters, otherwise false.


function isLong(str, minLength) {
    if (str.length >= minLength) {
        return true;
    } else {
        return false;
    }
}
console.log(isLong("hello", 6));

console.log('----------------------------')

// Write a function getFirstAndLast(str) that returns the first and last characters of str as a combined string.


function lastname(str) {
    return str[0] + str[str.length - 1];
}
console.log(lastname("chandu"))
console.log('----------------------------')

// Write a function getASCII(char) that returns the ASCII value of a given character using charCodeAt().
function ascii(char) {
    return char.charCodeAt(0);
}
console.log(ascii('d'))

console.log('----------------------------')
// Write a function areEqualIgnoreCase(str1, str2) that checks if two strings are equal (case-insensitive).

function equalstrings(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}
console.log(equalstrings("Hello", "chandu"));

console.log('----------------------------')

// Write a function findSubstring(str, sub) that returns the starting index of sub in str (or -1 if not found).
function findSubstring(str, sub) {
    return str.indexOf(sub);
}
console.log(findSubstring("hello world", "world"));

console.log('----------------------------')

// Write a function startsWithPrefix(str, prefix) that returns true if str starts with prefix.


function startsPrefix(str, prefix) {
    return str.startsWith(prefix);
}
console.log(startsPrefix("javascript", "java"));

console.log('----------------------------')
// Write a function endsWithSuffix(str, suffix) that returns true if str ends with suffix.
function endsWithSuffix(str, suffix) {
    return str.endsWith(suffix);
}
console.log(endsWithSuffix("learning", "ing"));

console.log('----------------------------')




// Write a function countChar(str, char) that counts how many times char appears in str.
function countChar(str, char) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }

    return count;
}
console.log(countChar("chandu yadav", "a"));

console.log('----------------------------')


// Write a function replaceAllOccurrences(str, oldWord, newWord) that replaces every oldWord with newWord in str.

function replacewords(str, oldWord, newWord) {
    return str.split(oldWord).join(newWord);
}
console.log(replacewords("apple", "apple", "banana"));

console.log('----------------------------')

// - Write a function trimStartWhitespace(str) that removes extra spaces only from the start.
function trimspace(str) {
    return str.trimStart();
}
console.log(trimspace("   gymkhana"));
console.log('----------------------------')
//  Write a function trimWhitespace(str) that removes extra spaces from the start and end of str.
function trimspace(str) {
    return str.trimspace();
}

console.log(trimspace("   chanduyadav"));

console.log('----------------------------')


// - Write a function splitIntoWords(str) that splits str into an array of words (split by spaces)
function splitwords(str) {
    return str.split(" ");
}

console.log(splitwords("chandu is graduated in the year of 2025"))

console.log('----------------------------')

// - Write a function joinWords(words, separator) that joins an array of words with separator.
function joinWords(words, separator) {
    return words.join(separator);
}
console.log(joinWords(["chandu", "yadav"], " "));

console.log('----------------------------')

// - Write a function isPalindrome(str) that returns true if str reads the same backward.

function Palindrome(str) {
    let words = str.split("").reverse().join("");
    return str === words;
}
console.log(Palindrome("madam"));

console.log('----------------------------')





