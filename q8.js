/*Q8. Write a JavaScript program to sort the characters in a string 
alphabetically
*/

function sortStringAlphabetically(str) {
    // Split the string into an array of characters, sort them alphabetically, and join them back into a string
    return str.split('').sort().join('');
}

// Example usage:
const inputString = "the quick brown fox jumped over a lazy dog";
const sortedString = sortStringAlphabetically(inputString);
console.log("Sorted string:", sortedString);

/*OUTPUT
---------
Sorted string:         aabcddeeefghijklmnoooopqrrtuuvwxyz
---------
 */