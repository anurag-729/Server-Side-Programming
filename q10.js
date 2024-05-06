/*Q10. Write a JavaScript function to validate whether a given value 
type is null or not
*/


function isNull(value) {
    return value === null;
}

// Example usage:
console.log(isNull(null)); // Output: true
console.log(isNull(5));    // Output: false
console.log(isNull(""));   // Output: false
console.log(isNull(undefined)); // Output: false

/*OUTPUT
---------
true
false
false
false
---------
 */